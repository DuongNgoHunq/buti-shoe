import express from "express";
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import productController from '../controllers/productController';
import sellerController from "../controllers/sellerController"

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

    router.put('/api/edit-product', productController.handleEditProduct)
    router.delete('/api/delete-product', productController.handleDeleteProduct)

    //api seller 
    router.get('/api/get-top-seller', sellerController.getTopSellerHome)

    router.get('/dnh', (req, res) => {
        return res.render("crud.ejs")
    });
    return app.use("/", router);
}

module.exports = initWebRouter;