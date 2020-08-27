import { userActionType } from './user.types'

const INITIAL_STATE = {
    userList: null,
    selectedUser: null,
    error: null,
    currentPage: 1,
    totalPage: null,
    isLoading: true
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionType.GET_ALL_USER_LIST_SUCCESSED:
            console.log(action)
            return {
                ...state,
                userList: action.payload.userList,
                currentPage: action.payload.pageNo,
                totalPage: action.payload.totalPage,
                isLoading: false
            }

        case userActionType.GET_ALL_USER_LIST_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }

        case userActionType.DISPLAY_USER_DETAIL:
            return {
                ...state,
                selectedUser: state.userList.find((el) => el.id === action.payload)
            }

        case userActionType.CREATE_NEW_USER_SUCCEDED:
            return {
                ...state,
            }

        case userActionType.CREATE_NEW_USER_FAILED:
            return {
                ...state,
            }
        case userActionType.UPDATE_EXISTING_USER_SUCCEDED:
            return {
                ...state
            }

        case userActionType.UPDATE_EXISTING_USER_FAILED:
            return {
                ...state
            }

        case userActionType.DELETE_EXISTING_USER_SUCCEDED:
            return {
                ...state
            }


        case userActionType.DELETE_EXISTING_USER_FAILED:
            return {
                ...state
            }

        default:
            return state
    }

}


export default userReducer;