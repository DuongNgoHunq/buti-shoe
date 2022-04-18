import db from '../models/index'
import CRUDService from '../services/CRUDService'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homePage.ejs", {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e);
    }
}
let getCRUD = (req, res) => {
    return res.render("crud.ejs")
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message);
    return res.send("hello from post crud")
}
let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('----------------');
    console.log(data);
    console.log('----------------');
    return res.render('displayCRUD.ejs', {
        dataTable: data,
    });
}
module.exports = {
    getHomePage, getCRUD, postCRUD, displayCRUD
}