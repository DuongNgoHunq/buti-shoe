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

// Delete product
export const deleteAProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteProductService(data);
            if (res && res.errCode === 0) {
                toast.success("Delete a product success !")
                dispatch(deleteProductSuccess());
                dispatch(fetchAllProduct())
            } else {
                toast.error("Delete product error !")

                dispatch(deleteProductFailed());
            }
        } catch (e) {
            dispatch(deleteProductFailed());
            toast.error("Delete product error !")

            console.log('deleteProductFailed error', e);
        }
    }
}
export const deleteProductSuccess = () => ({
    type: actionTypes.DELETE_PRODDUCT_SUCCESS
})
export const deleteProductFailed = () => ({
    type: actionTypes.DELETE_PRODDUCT_FAILED
})

// Edit product
export const editAProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editProductService(data);
            if (res && res.errCode === 0) {
                toast.success("Update a product success !")
                dispatch(editProductSuccess());
                dispatch(fetchAllProduct())
            } else {
                toast.error("Update product error !")

                dispatch(editProductFailed());
            }
        } catch (e) {
            dispatch(editProductFailed());
            toast.error("Update product error !")

            console.log('updateProductFailed error', e);
        }
    }
}
export const editProductSuccess = () => ({
    type: actionTypes.EDIT_PRODUCT_SUCCESS
})
export const editProductFailed = () => ({
    type: actionTypes.EDIT_PRODUCT_FAILED
})