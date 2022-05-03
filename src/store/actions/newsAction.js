import actionTypes from './actionTypes';
import { toast } from 'react-toastify';
import {
    getAllNews,
    createNewsService,
    createNewBrandService,
    getAllBrand, deleteNewsService,
    deleteBrandService,
    editNewsService,
    editBrandService

} from '../../services/newsService';


export const fetchAllNews = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllNews("ALL");
            if (res && res.errCode === 0) {
                dispatch(getNewsSuccess(res.news));

            } else {
                toast.error("Fetch all news error !")

                dispatch(getNewsFailed());
            }
        } catch (e) {
            dispatch(getNewsFailed());
            toast.error("Fetch all news error !")

            console.log('fetchNewsStart error', e);
        }
    }
}

export const getNewsSuccess = (data) => ({
    type: actionTypes.GET_ALL_NEWS_SUCCESS,
    data: data
})
export const getNewsFailed = () => ({
    type: actionTypes.FETCH_ALL_PRODUCT_FAILED
})

// create news
export const createNewNews = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewsService(data);
            console.log('Check create news: ', res);
            if (res && res.errCode === 0) {
                dispatch(createNewsSuccess());
                dispatch(fetchAllNews());

                toast.success("Create news success !")

            } else {
                toast.error("Fetch all news error !")

                dispatch(createNewsFailed());
            }
        } catch (e) {
            dispatch(createNewsFailed());
            toast.error("Fetch all news error !")

            console.log('fetchNewsStart error', e);
        }
    }
}

export const createNewsSuccess = () => ({
    type: actionTypes.CREATE_NEWS_SUCCESS,
})
export const createNewsFailed = () => ({
    type: actionTypes.CREATE_NEWS_FAILED
})

//delete news

export const deleteANews = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteNewsService(data);
            console.log('check data: ', data);
            console.log('Check res : ', res);
            if (res && res.errCode === 0) {
                toast.success("Delete the news success !")
                dispatch(deleteNewsSuccess());
                dispatch(fetchAllNews());

            } else {
                toast.error("Delete the news error !")

                dispatch(deleteNewsFailed());
            }
        } catch (e) {
            dispatch(deleteNewsFailed());
            toast.error("Delete the news error !")

            console.log('deleteNewsFailed error', e);
        }
    }
}
export const deleteNewsSuccess = () => ({
    type: actionTypes.DELETE_NEWS_SUCCESS
})
export const deleteNewsFailed = () => ({
    type: actionTypes.DELETE_NEWS_FAILED
})

//Edit news

export const editNews = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editNewsService(data);
            if (res && res.errCode === 0) {
                toast.success("Update the news success !")
                dispatch(editNewsSuccess());
                dispatch(fetchAllNews())
            } else {
                toast.error("Update the news error !")

                dispatch(editNewsFailed());
            }
        } catch (e) {
            dispatch(editNewsFailed());
            toast.error("Update product error !")

            console.log('updateNewsFailed error', e);
        }
    }
}
export const editNewsSuccess = () => ({
    type: actionTypes.EDIT_NEWS_SUCCESS
})
export const editNewsFailed = () => ({
    type: actionTypes.EDIT_NEWS_FAILED
})

//fetch all brand

export const fetchAllBrand = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllBrand("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchBrandSuccess(res.news));

            } else {
                toast.error("Fetch all brand error !")

                dispatch(fetchBrandFailed());
            }
        } catch (e) {
            dispatch(fetchBrandFailed());
            toast.error("Fetch all brand error !")

            console.log('fetchNewsStart error', e);
        }
    }
}

export const fetchBrandSuccess = (data) => ({
    type: actionTypes.GET_ALL_BRAND_SUCCESS,
    data: data
})
export const fetchBrandFailed = () => ({
    type: actionTypes.GET_ALL_BRAND_FAILDE
})


//create brand

export const createNewBrand = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewBrandService(data);
            console.log('Check create news: ', res);
            if (res && res.errCode === 0) {
                toast.success("Create new brand success !")
                dispatch(fetchAllBrand());
                dispatch(createNewBrandSuccess());
            } else {
                toast.error("Fetch all news error !")

                dispatch(createNewBrandFailed());
            }
        } catch (e) {
            dispatch(createNewBrandFailed());
            toast.error("Fetch all news error !")

            console.log('fetchNewsStart error', e);
        }
    }
}

export const createNewBrandSuccess = () => ({
    type: actionTypes.CREATE_BRAND_SUCCESS,
})
export const createNewBrandFailed = () => ({
    type: actionTypes.CREATE_BRAND_FAILED
})

export const deleteABrand = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteBrandService(data);
            console.log('check data: ', data);
            console.log('Check res : ', res);
            if (res && res.errCode === 0) {
                toast.success("Delete the brand success !")
                dispatch(deleteBrandSuccess());
                dispatch(fetchAllBrand());

            } else {
                toast.error("Delete the brand error !")

                dispatch(deleteBrandFailed());
            }
        } catch (e) {
            dispatch(deleteBrandFailed());
            toast.error("Delete the brand error !")

            console.log('deleteNewsFailed error', e);
        }
    }
}
export const deleteBrandSuccess = () => ({
    type: actionTypes.DELETE_BRAND_SUCCESS
})
export const deleteBrandFailed = () => ({
    type: actionTypes.DELETE_BRAND_FAILED
})

export const editBrand = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editBrandService(data);
            if (res && res.errCode === 0) {
                toast.success("Update the brand success !")
                dispatch(editBrandSuccess());
                dispatch(fetchAllBrand())
            } else {
                toast.error("Update the brand error !")

                dispatch(editBrandFailed());
            }
        } catch (e) {
            dispatch(editBrandFailed());
            toast.error("Update brand error !")

            console.log('updateNewsFailed error', e);
        }
    }
}
export const editBrandSuccess = () => ({
    type: actionTypes.EDIT_BRAND_SUCCESS
})
export const editBrandFailed = () => ({
    type: actionTypes.EDIT_BRAND_FAILED
})
