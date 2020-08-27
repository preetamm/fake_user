import React from 'react'
import './user-detail.style.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { selectSelectedUser } from '../../redux/user/user.selector'
import { deleteExistingUser } from '../../redux/user/user.actions'

const UserDetail = ({ selectedUser, deleteExistingUser }) => (

    <div className="userdetail">
        {
            selectedUser ?
                <div className="detail">
                    <div className="detail__avatar">
                        <img src={selectedUser.avatar} alt="" />
                    </div>
                    <div className="detail__name">
                        <div className="name__firstname"><h4>{selectedUser.first_name}</h4></div>
                        <div className="name__lastname"><h4>{selectedUser.last_name}</h4></div>
                    </div>
                    <div className="detail__email">{selectedUser.email}</div>
                    <div className="detail__btn-group">
                        <Link className="btn-group__option btn-group__option--update" to="/updateuser">Update</Link>
                        <div className="btn-group__option btn-group__option--delete" onClick={() => deleteExistingUser(selectSelectedUser.id)}>Delete</div>
                    </div>
                </div> :
                <div className="prompt">no user is selected , select a user</div>
        }

    </div>
)



const mapStateToProps = createStructuredSelector({
    selectedUser: selectSelectedUser
})


const mapDispatchToProps = dispatch => ({
    deleteExistingUser: (id) => dispatch(deleteExistingUser(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);