import brandService from "../services/brandService"

let handleGetAllBrand = async (req, res) => {
    let id = req.query.id; //id = ALL or =news.id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            news: []
        })
    }
    let news = await brandService.getAllBrand(id)

    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        news
    })
}
let handleCreateNewBrand = async (req, res) => {
    let message = await brandService.createNewBrand(req.body);
    console.log(message);
    return res.status(200).json(message);
}
let handleEditBrand = async (req, res) => {
    let data = req.body;
    let message = await brandService.updateBrand(data);
    return res.status(200).json(message)
}
let handleDeleteBrand = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Missing required parameter!'
        })
    }
    let message = await brandService.deleteBrand(req.body.id);
    return res.status(200).json(message);
}

let handleSaveDetailBrand = async (req, res) => {
    try {
        let response = await brandService.saveDetailInforBrand(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server!'
        })
    }
}

module.exports = {
    handleGetAllBrand,
    handleCreateNewBrand,
    handleEditBrand,
    handleDeleteBrand, handleSaveDetailBrand
}