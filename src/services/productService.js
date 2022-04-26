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

const editProductService = (inputData) => {
    console.log('Check data from service: ', inputData);

    return axios.put('/api/edit-product', inputData)
}

export {
    getAllProduct,
    createNewProductService,
    deleteProductService,
    editProductService,
}

