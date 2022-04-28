import axios from "../axios"


const getAllProduct = (inputId) => {
    return axios.get(`/api/get-all-products/?id=${inputId}`)
}

const createNewProductService = (data) => {
    console.log('Check data from service: ', data);

    return axios.post('/api/create-new-product', data)
}
const deleteProductService = (productId) => {
    return axios.delete('/api/delete-product', {
        data: {
            id: productId
        }
    });
}
const getNewProductHome = (limit) => {
    return axios.get(`/api/get-new-products?limit=${limit}`)
}

const editProductService = (inputData) => {
    console.log('Check data from service: ', inputData);

    return axios.put('/api/edit-product', inputData)
}

const saveInforDetailProduct = (data) => {
    return axios.post(`/api/save-infor-product`, data)
}

export {
    getAllProduct,
    createNewProductService,
    deleteProductService,
    editProductService,
    getNewProductHome,
    saveInforDetailProduct
}

