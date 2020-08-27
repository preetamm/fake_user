import React from 'react'
import './homepage.syle.scss'
import UserDetail from '../../components/userdetail/user-detail.component'
import UserList from '../../components/userlist/user-list.component'
import Paginator from '../../components/paginator/pagintor.component'

const HomePage = () => (
    <div className="homepage">
        <section className="wrapper">
            <UserDetail></UserDetail>
            <div className="userlistwrapper">
                <UserList></UserList>
                <Paginator></Paginator>
            </div>
        </section>
    </div>
)

export default HomePage;