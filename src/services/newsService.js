import axios from "../axios"

const getAllNews = (inputId) => {
    return axios.get(`/api/get-all-news?id=${inputId}`)
}

const createNewsService = (data) => {
    console.log('Check data from service: ', data);

    return axios.post('/api/create-new-news', data)
}
const deleteNewsService = (id) => {
    return axios.delete('/api/delete-news', {
        data: {
            id: id
        }
    });
}

const editNewsService = (inputData) => {
    console.log('Check data from service: ', inputData);

    return axios.put('/api/edit-news', inputData)
}

const getDetailNews = (id) => {
    return axios.get(`/api/get-all-news?id=${id}`)

}

const saveDetailNews = (inputData) => {
    console.log('Check input data from service: ', inputData);
    return axios.post('/api/save-detail-news', inputData)
}

//brand

const getAllBrand = (inputId) => {
    return axios.get(`/api/get-all-brand?id=${inputId}`)
}

const createNewBrandService = (data) => {
    console.log('Check data from service: ', data);

    return axios.post('/api/create-new-brand', data)
}

const deleteBrandService = (id) => {
    return axios.delete('/api/delete-brand', {
        data: {
            id: id
        }
    });
}

const editBrandService = (inputData) => {
    console.log('Check data from service: ', inputData);

    return axios.put('/api/edit-brand', inputData)
}

const saveDetailBrand = (inputData) => {
    console.log('Check input data from service: ', inputData);
    return axios.post('/api/save-detail-brand', inputData)
}

export {
    getAllNews,
    createNewsService, createNewBrandService,
    getAllBrand, deleteNewsService,
    deleteBrandService, editNewsService,
    editBrandService, getDetailNews,
    saveDetailNews, saveDetailBrand
}