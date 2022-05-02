import axios from "../axios"

const getAllNews = (inputId) => {
    return axios.get(`/api/get-all-news?id=${inputId}`)
}

export {
    getAllNews
}