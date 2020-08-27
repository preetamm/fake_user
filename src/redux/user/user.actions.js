import {userActionType} from './user.types'

export const getAllUserList = (currentPage) => ({
    type: userActionType.GET_ALL_USER_LIST,
    payload : currentPage
})

export const getAllUserListSuccessed = (userlistAndPageNo) => ({
    type: userActionType.GET_ALL_USER_LIST_SUCCESSED,
    payload : userlistAndPageNo
})

export const getAllUserListFailed = (errorMessage) => ({
    type: userActionType.GET_ALL_USER_LIST_FAILED,
    payload : errorMessage
})

export const displayUserDetails = (userId) => ({
    type: userActionType.DISPLAY_USER_DETAIL,
    payload : userId
})

export const createNewUser = (userDetail) => ({
    type : userActionType.CREATE_NEW_USER,
    payload : userDetail
})

export const createNewUserSucceded = (userDetail) => ({
    type : userActionType.CREATE_NEW_USER_SUCCEDED,
    payload : userDetail
})

export const createNewUserFailed = (userDetail) => ({
    type : userActionType.CREATE_NEW_USER_FAILED,
    payload : userDetail
})

export const updateExistingUser = (userDetail) => ({
    type : userActionType.UPDATE_EXISTING_USER,
    payload : userDetail
})

export const updateExistingUserSucceded = () => ({
    type : userActionType.UPDATE_EXISTING_USER_SUCCEDED,
})


export const updateExistingUserFailed= () => ({
    type : userActionType.UPDATE_EXISTING_USER_FAILED,
})

export const deleteExistingUser = (id) =>({
    type : userActionType.DELETE_EXISTING_USER,
    payload : id
})

export const deleteExistingUserSucceded = (id) =>({
    type : userActionType.DELETE_EXISTING_USER_SUCCEDED,
    payload : id
})

export const deleteExistingUserFailed = (id) =>({
    type : userActionType.DELETE_EXISTING_USER_FAILED,
    payload : id
})




