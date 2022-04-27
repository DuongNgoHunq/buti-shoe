import sellerService from '../services/sellerService';

let getTopSellerHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let resSellers = await sellerService.getTopSellerHome(+limit)
        return res.status(200).json(resSellers);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = {
    getTopSellerHome,

}