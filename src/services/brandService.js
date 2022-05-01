import { resolve } from 'path';
import db from '../models/index'

let getAllBrand = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let brandList = '';
            if (id === 'ALL') {
                brandList = await db.Brand.findAll()
            }
            if (id && id !== 'ALL') {
                brandList = await db.Brand.finOne({
                    where: { id: id }
                })
            }
            resolve(brandList)
        } catch (e) {
            reject(e)
        }
    })
}
let createNewBrand = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.description) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter !'
                })
            }
            else {
                await db.Brand.create({
                    name: data.name,
                    description: data.description,
                    image: data.image,
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Ok'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let updateBrand = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.name || !data.description) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameter !'
                })
            }
            let brand = await db.Brand.findOne({
                where: { id: data.id },
                raw: false
            })
            if (brand) {
                brand.title = data.title;
                brand.description = data.description;
                brand.image = data.image;
                await brand.save();
                resolve({
                    errCode: 0,
                    message: 'Update the brand succsess!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Brand's not found!`
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteBrand = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findBrand = await db.Brand.findOne({
                where: { id: id }
            })
            if (!findBrand) {
                resolve({
                    errCode: 2,
                    errMessage: `The brand's not exist!`
                })
            }
            else if (findBrand) {
                await db.Brand.destroy({
                    where: { id: id }
                })
                resolve({
                    errCode: 0,
                    message: 'The brand was delete!'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllBrand, createNewBrand,
    updateBrand, deleteBrand
}