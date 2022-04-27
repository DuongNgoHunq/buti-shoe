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
                    // attributes: {
                    //     exclude: ['password']
                    // }
                })
            }
            resolve(products)
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
module.exports = {
    getAllProduct,
    createNewProduct,
    deleteProduct,
    updateProductData

}