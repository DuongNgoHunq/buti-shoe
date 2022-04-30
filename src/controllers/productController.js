import productService from '../services/productService'

let handleGetAllProduct = async (req, res) => {
    let id = req.query.id; //ALL, ID

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            products: []
        })
    }
    let products = await productService.getAllProduct(id)

    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        products
    })
}
let handleGetNewProduct = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let products = await productService.getNewProductHome(+limit);
        return res.status(200).json(products);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server ...'
        })
    }
}
let handleCreateNewProduct = async (req, res) => {
    let message = await productService.createNewProduct(req.body);
    console.log(message);
    return res.status(200).json(message);
}
let handleEditProduct = async (req, res) => {
    let data = req.body;
    let message = await productService.updateProductData(data);
    return res.status(200).json(message)
}
let handleDeleteProduct = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!'
        })
    }
    let message = await productService.deleteProduct(req.body.id);
    return res.status(200).json(message);
}

let handlePostInforProduct = async (req, res) => {
    try {
        let response = await productService.saveInforDetailProduct(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server ...'
        })
    }
}
let handleGetDetailProduct = async (req, res) => {
    try {
        let infor = await productService.getDetailProductService(req.query.id);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server... '
        })
    }
}

module.exports = {
    handleGetAllProduct,
    handleGetNewProduct,
    handleCreateNewProduct,
    handleEditProduct,
    handleDeleteProduct,
    handlePostInforProduct,
    handleGetDetailProduct
}