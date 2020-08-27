import React from 'react'
import './paginator.style.scss'
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';
import { getAllUserList } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentPage, selectError, selectuserList, selectTotalPage } from '../../redux/user/user.selector'
class Paginator extends React.Component {

  

    nextPage = () => {
        const { getAllUserList, currentPage } = this.props
        getAllUserList(currentPage + 1)
    }

    previousPage = () => {
        const { getAllUserList, currentPage } = this.props
        getAllUserList(currentPage - 1)

    }

    render() {
        const { currentPage, totalPage } = this.props
        return (
            <div className="paginator">
                <button onClick={currentPage !== 1? this.previousPage : null } >
                    {
                        currentPage !== 1 ?
                            <LeftCircleTwoTone style={{ fontSize: '30px' }} /> :
                            <LeftCircleTwoTone twoToneColor={'#808080'} style={{ fontSize: '30px' }} />
                    }

                </button>
                <div className="currentpage">{currentPage}</div>
                <button onClick={currentPage !== totalPage ? this.nextPage : null}>
                    {
                        currentPage !== totalPage ?
                            <RightCircleTwoTone style={{ fontSize: '30px' }} /> :
                            <RightCircleTwoTone twoToneColor={'#808080'} style={{ fontSize: '30px', color: '#808080' }} />
                    }

                </button>
            </div>

        )
    }

}



const mapStateToProps = createStructuredSelector({
    currentPage: selectCurrentPage,
    totalPage: selectTotalPage,
    userList: selectuserList,
    error: selectError
})


const mapDispatchToProps = dispatch => ({
    getAllUserList: (currentPage) => dispatch(getAllUserList(currentPage))
})


export default connect(mapStateToProps, mapDispatchToProps)(Paginator)