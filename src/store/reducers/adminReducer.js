import actionTypes from '../actions/actionTypes';


const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    products: [],
    topSellers: [],
    newProducts: [],
    cart: [],
}

const adminReducer = (state = initialState, action) => {
    const product = action.payload;
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;

            return {
                ...state
            }

        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = [];
            return {
                ...state
            }


        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;

            return {
                ...state
            }

        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;

            return {
                ...state
            }

        case actionTypes.FETCH_ROLE_FAILED:
            state.isLoadingGender = false;
            state.roles = [];
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USERS_FAILED:
            state.users = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_PRODUCT_SUCCESS:
            state.products = action.products;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_PRODUCT_FAILED:
            state.products = [];
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_SELLER_SUCCESS:
            state.topSellers = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_TOP_SELLER_FAILED:
            state.topSellers = [];
            return {
                ...state
            }

        case actionTypes.FETCH_NEW_PRODUCT_SUCCESS:
            state.newProducts = action.data;
            return {
                ...state
            }

        case actionTypes.FETCH_NEW_PRODUCT_FAILED:
            state.newProducts = [];
            return {
                ...state
            }


        default:
            return state;
    }
}

export default adminReducer;