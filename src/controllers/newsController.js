import newsService from '../services/newsService'

let handleGetAllNews = async (req, res) => {
    let id = req.query.id; //id = ALL or =news.id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            news: []
        })
    }
    let news = await newsService.getAllNews(id)

    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        news
    })
}
let handleCreateNews = async (req, res) => {
    let message = await newsService.createNewNews(req.body);
    console.log(message);
    return res.status(200).json(message);
}

let handleSaveDetailNews = async (req, res) => {
    try {
        let response = await newsService.saveDetailInforNews(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server!'
        })
    }
}

let handleEditNews = async (req, res) => {
    let data = req.body;
    let message = await newsService.updateNewsData(data);
    return res.status(200).json(message)
}
let handleDeleteNews = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Missing required parameter!'
        })
    }
    let message = await newsService.deleteNews(req.body.id);
    return res.status(200).json(message);
}
module.exports = {
    handleGetAllNews,
    handleCreateNews,
    handleEditNews,
    handleDeleteNews,
    handleSaveDetailNews
}