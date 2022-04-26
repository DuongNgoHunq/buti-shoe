import actionTypes from './actionTypes';
import {
    getAllProduct,
    createNewProductService,
    deleteProductService,
    editProductService,
} from '../../services/productService';
import { toast } from 'react-toastify';


export const fetchAllProduct = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllProduct("ALL");
            if (res && res.errCode === 0) {
                dispatch(getProductSuccess(res.products.reverse()));
            } else {
                toast.error("Fetch all product error !")

                dispatch(getProductFailed());
            }
        } catch (e) {
            dispatch(getProductFailed());
            toast.error("Fetch all product error !")

            console.log('fetchProductStart error', e);
        }
    }
}

export const getProductSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_PRODUCT_SUCCESS,
    products: data
})
export const getProductFailed = () => ({
    type: actionTypes.FETCH_ALL_PRODUCT_FAILED
})

//create product
export const createNewProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewProductService(data);
            console.log('Check create product: ', res);
            if (res && res.errCode === 0) {
                toast.success("Create a new product success !")
                dispatch(createProductSuccess());
                dispatch(fetchAllProduct())
            } else {
                toast.error("Create product error !")

                dispatch(createProductFailed());
            }
        } catch (e) {
            dispatch(createProductFailed());
            toast.error("Create product error !")

            console.log('createProductFailed error', e);
        }
    }
}
export const createProductSuccess = () => ({
    type: actionTypes.CREATE_PRODUCT_SUCCESS
})
export const createProductFailed = () => ({
    type: actionTypes.CREATE_PRODUCT_FAILED
})