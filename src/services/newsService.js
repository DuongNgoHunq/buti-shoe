
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
module.exports = {
    getAllNews, createNewNews,
    updateNewsData, deleteNews
}