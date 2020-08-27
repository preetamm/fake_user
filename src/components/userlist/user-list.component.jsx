import React from 'react'
import UserItem from '../usercontainer/user-container.component'
import './user-list.style.scss'
import { getAllUserList,displayUserDetails } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentPage, selectError, selectuserList, selectIsLoading } from '../../redux/user/user.selector'


class UserList extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { getAllUserList, currentPage, isLoading } = this.props
        setTimeout(() => {
            currentPage ? getAllUserList(currentPage) : getAllUserList(1)
            console.log('why i get called ')
        }, 2000)
        //action for starting the req for user list 

    }

    displayDetail = (id) => {
        console.log(id)
        const {displayUserDetails} = this.props
        displayUserDetails(id)
    }

    render() {
        const { currentPage, error, userList, isLoading } = this.props
        return (
            <div className="userlist">
                {error ?
                    <div className="error">error</div> :
                    isLoading ?
                        <div className="loading">loading</div> :
                        userList.map((userItem) => <UserItem key={userItem.id} id={userItem.id} name={userItem.first_name} displayDetail={this.displayDetail}></UserItem>)

                }

            </div>

 
        )
    }

}


const mapStateToProps = createStructuredSelector({
    currentPage: selectCurrentPage,
    userList: selectuserList,
    error: selectError,
    isLoading: selectIsLoading
})


const mapDispatchToProps = dispatch => ({
    getAllUserList: (currentPage) => dispatch(getAllUserList(currentPage)),
    displayUserDetails : (id) => dispatch(displayUserDetails(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserList);