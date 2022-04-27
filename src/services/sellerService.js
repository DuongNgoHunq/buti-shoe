import db from "../models/index";


let getTopSellerHome = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sellers = await db.User.findAll({
                limit: limit,
                where: { roleId: 'R2' },
                order: [['createdAt', 'DESC']],
                attributes: {
                    exclude: ['password', 'image']
                }
            })
            resolve({
                errCode: 0,
                data: sellers
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getTopSellerHome,
}