import db from "../models/index";
require('dotenv').config();
import emailService from "./emailService";
import { v4 as uuidv4 } from 'uuid';
import { resolve } from "path";

require('dotenv').config();

let buildURLEmail = (productId, token) => {

    let result = `${process.env.URL_REACT}/verify-order?token=${token}&productId=${productId}`

    return result;
}
let handleOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        console.log("Check data: ", data);
        try {
            if (!data.email || !data.productId || !data.Address || !data.PhoneNumber || !data.price
                || !data.name || !data.gender
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            }
            else {

                let token = uuidv4();
                await emailService.sendSimpleEmail({
                    reciverEmail: data.email,
                    customerName: data.name,
                    productName: data.productName,
                    quantity: data.quantity,
                    size: data.size,
                    price: data.price,
                    unitPrice: data.unitPrice,
                    phoneNumber: data.PhoneNumber,
                    Address: data.Address,
                    language: data.language,
                    redirectLink: buildURLEmail(data.productId, token)
                })

                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3',
                        gender: data.gender,
                        address: data.Address,

                    },
                });


                if (user && user[0]) {
                    await db.Receipt.findOrCreate({
                        where: {
                            customerId: user[0].id
                        },
                        defaults: {
                            productId: data.productId,
                            customerId: user[0].id,
                            statusId: 'S1',
                            quantity: data.quantity,
                            price: data.price,
                            unitPrice: data.unitPrice,
                            PhoneNumber: data.PhoneNumber,
                            Address: data.Address,
                            size: data.size,
                            name: data.name,
                            token: token,
                            gender: data.gender
                        }

                    })
                }

                resolve({
                    // data: user,
                    errCode: 0,
                    errMessage: 'Create new user success!'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let handleVerifyOrderService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.token || !data.productId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            }
            else {
                let order = await db.Receipt.findOne({
                    where: {
                        productId: data.productId,
                        token: data.token,
                        statusId: 'S1'
                    },
                    raw: false
                })
                if (order) {
                    order.statusId = "S2";
                    await order.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Update the order succeed!'
                    })
                }
                else {
                    resolve({
                        errCode: 2,
                        errMessage: 'The order has been activated!'
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getCustomerOrderService = (productId, customerId) => {
    console.log('Check data: ', productId, customerId);
    return new Promise(async (resolve, reject) => {
        try {
            if (!productId || !customerId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            }
            else {
                let data = await db.Receipt.findAll({
                    where: {
                        productId: productId,
                        customerId: customerId,
                        statusId: 'S2'
                    }
                    // raw: false
                })
                resolve({
                    errCode: 0,
                    data
                })


            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    handleOrder,
    handleVerifyOrderService,
    getCustomerOrderService
}