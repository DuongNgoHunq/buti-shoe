import express from "express";
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import productController from '../controllers/productController';
import sellerController from "../controllers/sellerController";
import newsController from "../controllers/newsController";
import brandController from "../controllers/brandController";
import customerController from "../controllers/customerController";

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayCRUD)
    router.get('/edit-crud', homeController.getEditCRUD)
    router.post('/put-crud', homeController.putCRUD)
    router.get('/delete-crud', homeController.deleteCRUD)

    // api user 
    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-user', userController.handleGetAllUser)
    router.post('/api/create-new-user', userController.handleCreateNewUser)
    router.put('/api/edit-user', userController.handleEditUser)
    router.delete('/api/delete-user', userController.handleDeleteUser)
    router.get('/api/allcode', userController.getAllCode);

    //api product
    router.get('/api/get-all-products', productController.handleGetAllProduct)
    router.get('/api/get-new-products', productController.handleGetNewProduct)
    // router.get('/api/get-top-products', productController.handleGetTopProduct)

    router.post('/api/create-new-product', productController.handleCreateNewProduct)
    router.post('/api/save-infor-product', productController.handlePostInforProduct)
    router.get('/api/get-detail-product', productController.handleGetDetailProduct)
    router.put('/api/edit-product', productController.handleEditProduct)
    router.delete('/api/delete-product', productController.handleDeleteProduct)

    //api seller 
    router.get('/api/get-top-seller', sellerController.getTopSellerHome)

    //News
    router.get('/api/get-all-news', newsController.handleGetAllNews)
    router.post('/api/create-new-news', newsController.handleCreateNews)
    router.post('/api/save-detail-news', newsController.handleSaveDetailNews)
    router.get('/api/get-detail-news', newsController.handleGetDetailNews)
    router.put('/api/edit-news', newsController.handleEditNews)
    router.delete('/api/delete-news', newsController.handleDeleteNews)
    // router.get('/api/get-detail-news', newsController.handleGetDetailNews)

    //brand
    router.get('/api/get-all-brand', brandController.handleGetAllBrand)
    router.post('/api/create-new-brand', brandController.handleCreateNewBrand)
    router.post('/api/save-detail-brand', brandController.handleSaveDetailBrand)

    router.put('/api/edit-brand', brandController.handleEditBrand)
    router.delete('/api/delete-brand', brandController.handleDeleteBrand)

    //receipt
    router.post('/api/customer-order', customerController.handleOrder)
    router.post('/api/verify-customer-order', customerController.handleVerifyOrder)

    router.get(`/api/get-list-customer-order`, customerController.getCustomerOrder)

    router.get('/dnh', (req, res) => {
        return res.render("crud.ejs")
    });
    return app.use("/", router);
}

module.exports = initWebRouter;