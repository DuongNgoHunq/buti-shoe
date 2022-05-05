
import { resolve } from "path";
import db from "../models/index";

let getAllNews = (newsId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let newsList = ''
            if (newsId === 'ALL') {
                newsList = await db.News.findAll()
                resolve(newsList)
            }
            if (newsId && newsId !== 'All') {
                newsList = await db.News.findOne({
                    where: { id: newsId }

                })
                resolve(newsList)
            }

        } catch (e) {
            reject(e);
        }
    })
}
let createNewNews = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.title || !data.description) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter !'
                })
            } else {
                await db.News.create({
                    title: data.title,
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

let updateNewsData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.title || !data.description) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameter !'
                })
            }
            let news = await db.News.findOne({
                where: { id: data.id },
                raw: false
            })
            if (news) {
                news.title = data.title;
                news.description = data.description;
                news.image = data.image;
                await news.save();
                resolve({
                    errCode: 0,
                    message: 'Update the news succsess!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `News's not found!`
                });
            }


        } catch (e) {
            reject(e)
        }
    })
}
let deleteNews = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let news = await db.News.findOne({
                where: { id: id }
            })
            if (!news) {
                resolve({
                    errCode: 2,
                    errMessage: `The news's not exist!`
                })
            }
            else if (news) {
                await db.News.destroy({
                    where: { id: id }
                })
                resolve({
                    errCode: 0,
                    message: 'The news was delete!'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let saveDetailInforNews = (inputData) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('Check data from serVer: ', inputData);
            if (!inputData.newsId || !inputData.contentHTML || !inputData.contentMarkdown) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter!'
                })
            }
            else {
                if (inputData.action === 'CREATE') {
                    await db.NewsMarkdown.create({
                        contentHTML: inputData.contentHTML,
                        contentMarkdown: inputData.contentMarkdown,
                        description: inputData.description,
                        newsId: inputData.newsId
                    })
                } else if (inputData.action === 'EDIT') {
                    let newsMarkdown = await db.NewsMarkdown.findOne({
                        where: { newsId: inputData.newsId },
                        raw: false
                    })
                    if (newsMarkdown) {
                        newsMarkdown.contentHTML = inputData.contentHTML;
                        newsMarkdown.contentMarkdown = inputData.contentMarkdown;
                        newsMarkdown.description = inputData.description;
                        newsMarkdown.newsId = inputData.newsI;

                        await newsMarkdown.save()
                    }
                }

                resolve({
                    errCode: 0,
                    errMessage: `Save news's infor success!`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getDetailNewById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })
            } else {
                let data = await db.News.findOne({

                    where: {
                        id: id
                    },
                    include: [
                        {
                            model: db.NewsMarkdown,
                            attributes: ['contentHTML', 'contentMarkdown', 'description', 'image']
                        }
                    ], raw: false,
                    nest: true
                })
                if (data && data.image) {
                    data.image = new Buffer(data.image, 'base64').toString('binary')

                }

                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getAllNews, createNewNews,
    updateNewsData, deleteNews,
    saveDetailInforNews,
    getDetailNewById
}