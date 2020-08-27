import { createSelector } from 'reselect'

const selectUser = state => state.user;



export const selectuserList = createSelector(
    [selectUser],
    (user) => user.userList
)


export const selectError = createSelector(
    [selectUser],
    (user) => user.error
)


export const selectCurrentPage = createSelector(
    [selectUser],
    (user) => user.currentPage
)

export const selectTotalPage = createSelector(
    [selectUser],
    (user) => user.totalPage
)

export const selectIsLoading = createSelector(
    [selectUser],
    (user) => user.isLoading
)

export const selectSelectedUser = createSelector(
    [selectUser],
    (user) => user.selectedUser
)



