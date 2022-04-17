import express from "express";
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRouter = (app) =>{
    router.get('/', homeController.getHomePage);
    router.get('/dnh', (req, res)=>{
        return res.send("hello world with dnh")
    });
    return app.use("/", router);
}

module.exports = initWebRouter;