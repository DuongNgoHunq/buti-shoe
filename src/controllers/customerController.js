import customerService from '../services/customerService';

let handleOrder = async (req, res) => {
    try {
        let infor = await customerService.handleOrder(req.body);
        return res.status(200).json(
            infor
        );
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}
let handleVerifyOrder = async (req, res) => {
    try {
        let infor = await customerService.handleVerifyOrderService(req.body);
        return res.status(200).json(
            infor
        );
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getCustomerOrder = async (req, res) => {
    try {
        let infor = await customerService.getCustomerOrderService(req.query.productId, req.query.customerId);
        return res.status(200).json(
            infor
        );
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = {
    handleOrder, handleVerifyOrder,
    getCustomerOrder
}