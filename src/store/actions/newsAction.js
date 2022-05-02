import actionTypes from './actionTypes';
import { toast } from 'react-toastify';
import { getAllNews } from '../../services/newsService';


export const fetchAllNews = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllNews("ALL");
            if (res && res.errCode === 0) {
                dispatch(getNewsSuccess(res.data));
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
