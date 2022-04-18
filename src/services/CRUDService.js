import bcrypt from 'bcryptjs';
import db from '../models/index';


const salt = bcrypt.genSaltSync(10);
// const { resolve } = require("path/win32");

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                firstName: data.firstName,
                password: hashPasswordFromBcrypt,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                address: data.address,
                gender: data.gender === "1" ? true : false,
                roleId: data.roleId,
            })
            resolve('create new user success!')
        } catch (e) {
            reject(e)
        }
    })

}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createNewUser
}