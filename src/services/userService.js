import axios from "../axios"

const handleLoginAPI = (userEmail, userPassword) => {
    return axios.post('api/login', { email: userEmail, password: userPassword });
}
const getAllUser = (inputId) => {
    return axios.get(`/api/get-all-user/?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('Check data from service: ', data);
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}
export {
    handleLoginAPI,
    getAllUser,
    createNewUserService,
    deleteUserService,
    editUserService
}

