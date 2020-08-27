import React from 'react'
import './createUserForm.style.scss'
import { connect } from 'react-redux'
import {createNewUser} from '../../redux/user/user.actions'
import Form from '../form/form.component'

class CreateUserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }


    handleSubmit = (event) => {
        //get the credentials 
        console.log(event)
        event.preventDefault();
        const {createNewUser} = this.props
        //registerNewUser(this.state);
        createNewUser(this.state)
        console.log(this.state)
       

    }


    render() {
        return (
            <Form email={this.state.email} firstName={this.state.first_name} lastName={this.state.last_name} change={this.handleChange} handlesubmit={this.handleSubmit} formType='create'></Form>
        )

    }
 
}



const mapDispatchToProps = (dispatch) =>  ({
    createNewUser : (userDetail) => dispatch(createNewUser(userDetail))
})



export default connect(null, mapDispatchToProps)(CreateUserForm);