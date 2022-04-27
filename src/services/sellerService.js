import db from "../models/index";


let getTopSellerHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sellers = await db.User.findAll({
                limit: limitInput,
                where: { roleId: 'R2' },
                order: [['createdAt', 'DESC']],
                attributes: {
                    exclude: ['password']
                },
                include: [
                    // { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] }
                ],
                raw: true,
                nest: true
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