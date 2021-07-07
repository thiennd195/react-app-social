import React from 'react'
import Feed from '../../components/feed'
import Rightbar from '../../components/rightbar'
import Sidebar from '../../components/sidebar'
import TopBar from '../../components/topbar'
import './index.css'

const Profile = () => {
    return (
        <>
            <TopBar />
            <div className='profile'>
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverImg' src='assets/post/9.jpeg' alt='' />
                            <img className='profileUserImg' src='assets/post/6.jpeg' alt='' />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>Duc Thien</h4>
                            <span className='profileInfoDesc'>Handsome</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
