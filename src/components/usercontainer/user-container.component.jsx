import React from 'react'
import './user-container.style.scss'

const UserItem = ({id, name, displayDetail}) => (
    <div className="usercontainer" onClick={() => displayDetail(id)}>
        <p>{name}</p>
    </div>
)

export default UserItem