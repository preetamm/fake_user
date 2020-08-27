import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects'
import { userActionType } from './user/user.types';
import { getAllUserListSuccessed, getAllUserListFailed, updateExistingUserSucceded, updateExistingUserFailed } from './user/user.actions'
import axios from 'axios'
import 'antd/dist/antd.css';
import { message } from 'antd';
import { IdcardFilled } from '@ant-design/icons';

const baseUrl = 'https://reqres.in/api'

export function* getAllUserList(action) {
    var pageNo = action.payload
    console.log(pageNo)
    try {
        const result = yield call(mGetUserList, pageNo)
        console.log(result.userList)
        yield put(getAllUserListSuccessed({ userList: result.userList, totalPage: result.totalPage, pageNo: pageNo }))
    } catch (e) {
        message.error("Something went wrong")
        yield put(getAllUserListFailed("something is wrong"))
    }
}

export function* createNewUser(action) {
    const userDetail = action.payload

    try {
        yield call(mCreateUserList, userDetail)
        message.success("Successfuly added user")
    } catch (e) {
        console.log(e.message)
        message.error("Something went wrong")
    }

}

export function* updateExistingUser(action) {
    const userDetail = action.payload

    try {
        yield call(mUpdateExistingUser, userDetail)
        message.success("Successfuly updated user")
    } catch (e) {
        message.error("something went wrong")
        console.log(e.message)
    }
}

export function* deleteExistingUser(action) {
    const id = action.payload
    try {
        yield call(mDeleteExistingUser, id)
        message.success("Successfuly deleted user")
    } catch (e) {
        message.error("something went wrong")
        console.log('something went wrong')
    }
}

export function* _getAllUserList() {
    yield takeLatest(userActionType.GET_ALL_USER_LIST, getAllUserList)
}

export function* _createNewUser() {
    yield takeLatest(userActionType.CREATE_NEW_USER, createNewUser)
}
export function* _updateExistingUser() {
    yield takeLatest(userActionType.UPDATE_EXISTING_USER, updateExistingUser)
}

export function* _deleteExistingUser() {
    yield takeLatest(userActionType.DELETE_EXISTING_USER, deleteExistingUser)
}

function* mySaga() {

    yield all([
        _getAllUserList(),
        _createNewUser(),
        _updateExistingUser(),
        _deleteExistingUser()
    ])
}

async function mUpdateExistingUser(userDetail) {



    try {
        await axios({
            method: 'put',
            url: `${baseUrl}/users/${userDetail.id}`,
            data: userDetail
        }).then((response) => {
            console.log(response)
        })
    } catch (e) {
        console.log(e.message)
        throw Error("something went wrong")

    }

}

async function mCreateUserList(userDetail) {
    try {
        await axios({
            method: 'post',
            url: `${baseUrl}/users`,
            data: userDetail

        }).then((response) => {
            console.log(response)
        })

    } catch (e) {
        console.log(e.message)
        throw Error("something went wrong")
    }
}

async function mGetUserList(currentPage) {

    //because we always need to get the list of next page


    try {
        const result = await axios({
            method: 'get',
            url: `${baseUrl}/users`,
            params: {
                page: currentPage,
            },

        });

        console.log(' im here')

        // console.log(result.data.data)
        return { userList: result.data.data, totalPage: result.data.total_pages }

    } catch (e) {
        throw Error('somthing wrong')
    }


}


async function mDeleteExistingUser(id) {

    try {
        await axios({
            method: 'delete',
            url: `${baseUrl}/users/${id}`,
            
        }).then((response) => {
            console.log(response)
        })

    } catch (e) {
        throw Error('somthing wrong')
    }

}



export default mySaga;