import React from 'react'
import './form.style.scss';



const Form = ({ change, handlesubmit, email, firstName, lastName, formType }) => (

    <div className="Form">
        <div className="createuserform" >
            <form >
                <div className="input-group createuserform__first-name">
                    <label htmlFor="first_name">First name</label>
                    <input type="text" id="first_name" name="first_name" onChange={(e) => change(e)} value={firstName} required />
                </div>
                <div className=" input-group createuserform__lastname">
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" id="last_name" name="last_name" onChange={(e)=> change(e)} value={lastName} required />
                </div>
                <div className=" input-group createuserform__email">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={(e) => change(e)} value={email} required />
                </div>
                <div className="btn-group">
                    <button onClick={(e) => handlesubmit(e)}>{formType  === "create"? 'Create user' : "Update user" }</button>
                </div>
            </form>
        </div> 
    </div>


)

export default Form;




