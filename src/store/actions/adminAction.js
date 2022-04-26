import actionTypes from './actionTypes';
import {
    getAllCodeService,
    createNewUserService,
    getAllUser,
    deleteUserService,
    editUserService
} from '../../services/userService';
import { toast } from 'react-toastify';

//Fetch gender
export const fetchGenderStart = () => {
    return async(dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


// fetch position 

export const fetchPositionStart = () => {
    return async(dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPosition start error', e);
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
        type: actionTypes.FETCH_POSITION_FAILED
    })
    //fetch roles
export const fetchRoleStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart error', e);
        }
    }
}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})


            export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new user success !")
                dispatch(createUserSuccess());
                dispatch(fetAllUsersStart())
            } else {
                toast.error("Create user error !")

                dispatch(createUserFailed());
            }
        } catch (e) {
            dispatch(createUserFailed());
            toast.error("Create users error !")

            console.log('createUserFailed error', e);
        }
    }
}
export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

//Edit a user

export const editAUserStart = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Edit user success !")
                dispatch(editUserSuccess());
              
                // return;
            } else {
                toast.error("Edit user error !")

                dispatch(editUserFailed());
            }
        } catch (e) {
            // dispatch(editUserFailed());
            // toast.error("Edit users error !")
            dispatch(fetAllUsersStart());
            console.log('editUserFailed error', e);
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})


//fetch all users
export const fetAllUsersStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllUser("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetAllUsersSuccess(res.users.reverse()));
            } else {
                toast.error("Fetch all users error !")

                dispatch(fetAllUsersFailed());
            }
        } catch (e) {
            dispatch(fetAllUsersFailed());
            toast.error("Fetch all users error !")

            console.log('fetchRoleStart error', e);
        }
    }
}

export const fetAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})
export const fetAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})

export const deleteAUser = (userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            console.log("Check create user redux: ", res);
            if (res && res.errCode === 0) {
                toast.success("Delete user success !")
                dispatch(deleteUserSuccess());
                dispatch(fetAllUsersStart())
            } else {
                toast.error("Delete user error !")
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            dispatch(deleteUserFailed());
            console.log('createUserFailed error', e);
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})