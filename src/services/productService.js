import db from "../models/index";

let getAllProduct = (productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = '';
            if (productId === 'ALL') {
                products = await db.Product.findAll()
            }
            if (productId && productId !== 'ALL') {
                products = await db.Product.findOne({
                    where: { id: productId }

                })
            }
            resolve(products)
        } catch (e) {
            reject(e);
        }
    })
}

let getNewProductHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll({
                limit: limitInput,
                order: [['createdAt', 'DESC']],
                attributes: {
                    exclude: []
                }
            })
            resolve({
                errCode: 0,
                data: products
            })
        } catch (e) {
            reject(e);
        }
    })
}

let createNewProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.description || !data.price || !data.brandId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter !'
                })
            } else {
                await db.Product.create({
                    name: data.name,
                    brandId: data.brandId,
                    description: data.description,
                    quanlity: data.quanlity,
                    price: data.price,
                    image: data.image,
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Ok'
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}
let deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        let product = await db.Product.findOne({
            where: { id: id }
        })
        if (!product) {
            resolve({
                errCode: 2,
                errMessage: `The product isn't exist`
            })
        }
        await db.Product.destroy({
            where: { id: id }
        })
        resolve({
            errCode: 0,
            errMessage: 'The product was delete!'
        })
    })
}

let updateProductData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.name || !data.brandId || !data.description || !data.quanlity || !data.price) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameter!'
                })
            }
            let product = await db.Product.findOne({
                where: { id: data.id },
                raw: false
            })
            if (product) {
                product.name = data.name;
                product.brandId = data.brandId;
                product.description = data.description;
                product.quanlity = data.quanlity;
                product.price = data.price;
                if (data.image) {
                    product.image = data.image;
                }

                await product.save();
                resolve({
                    errCode: 0,
                    message: 'Update ther product success!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Product's not found!`
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}
let saveInforDetailProduct = (inputData) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputData.productId || !inputData.contentHTML
                || !inputData.contentMarkdown || !inputData.actions) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter !'
                })
            }
            else {
                if (inputData.actions === 'CREATE') {
                    await db.Markdown.create({
                        contentHTML: inputData.contentHTML,
                        contentMarkdown: inputData.contentMarkdown,
                        productId: inputData.productId,
                        description: inputData.description,
                        price: inputData.price,
                        image: inputData.image
                    })
                }
                else if (inputData.actions === 'EDIT') {
                    let productMarkdown = await db.Markdown.findOne({
                        where: { productId: inputData.productId },
                        raw: false
                    })
                    if (productMarkdown) {
                        productMarkdown.contentHTML = inputData.contentHTML;
                        productMarkdown.contentMarkdown = inputData.contentMarkdown;
                        productMarkdown.productId = inputData.productId;
                        productMarkdown.description = inputData.description;
                        productMarkdown.price = inputData.price;
                        productMarkdown.image = inputData.image;

                        await productMarkdown.save()
                    }
                }

                resolve({
                    errCode: 0,
                    errMessage: 'Save infor product success !'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getDetailProductService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter !'
                })
            } else {
                let data = await db.Product.findOne({
                    where: {
                        id: id
                    },
                    include: {
                        model: db.Markdown,
                        attributes: ['contentHTML', 'contentMarkdown', 'description', 'image', 'price']
                    },
                    raw: false,
                    nest: true
                })

                if (data && data.image) {
                    data.image = new Buffer(data.image, 'base64').toString('binary')

                }
                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {

            reject(e);
        }
    })
}

module.exports = {
    getAllProduct,
    getNewProductHome,
    createNewProduct,
    deleteProduct,
    updateProductData,
    saveInforDetailProduct,
    getDetailProductService

}