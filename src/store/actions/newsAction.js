import actionTypes from './actionTypes';
import { toast } from 'react-toastify';
import {
    getAllNews,
    createNewsService,
    createNewBrandService

} from '../../services/newsService';


export const fetchAllNews = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllNews("ALL");
            if (res && res.errCode === 0) {
                dispatch(getNewsSuccess(res.news));
                toast.success("Fetch all news success !")

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


//create brand

export const createNewBrand = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewBrandService(data);
            console.log('Check create news: ', res);
            if (res && res.errCode === 0) {
                toast.success("Create new brand success !")

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
