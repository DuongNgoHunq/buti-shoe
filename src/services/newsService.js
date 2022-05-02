import axios from "../axios"

const getAllNews = (inputId) => {
    return axios.get(`/api/get-all-news?id=${inputId}`)
}

const createNewsService = (data) => {
    console.log('Check data from service: ', data);

    return axios.post('/api/create-new-news', data)
}



//brand
const createNewBrandService = (data) => {
    console.log('Check data from service: ', data);

    return axios.post('/api/create-new-brand', data)
}
export {
    getAllNews,
    createNewsService, createNewBrandService
}