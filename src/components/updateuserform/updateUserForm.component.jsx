import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSelectedUser } from '../../redux/user/user.selector'
import {updateExistingUser} from '../../redux/user/user.actions'
import Form from '../form/form.component'

class UpdateUserForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: props.selectedUser.first_name,
            last_name: props.selectedUser.last_name,
            email: props.selectedUser.email,
            id : props.selectedUser.id,
            avatar : props.selectedUser.avatar
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value });
    }


    handleSubmit = (event) => {
        //get the credentials 
        event.preventDefault();
        const { updateExistingUser } = this.props
        //registerNewUser(this.state);
        updateExistingUser(this.state)
        console.log(this.state)


    }


    render() {
        console.log(this.props.selectedUser)
        return (
            <Form email={this.state.email} firstName={this.state.first_name} lastName={this.state.last_name} change={this.handleChange} handlesubmit={this.handleSubmit} formType='update'></Form>
        )
    }

}



const mapStateToProps = createStructuredSelector({
    selectedUser: selectSelectedUser
})


const mapDispatchToProps = (dispatch) =>  ({
    updateExistingUser : (userDetail) => dispatch(updateExistingUser(userDetail))
})




export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserForm);