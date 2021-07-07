import React from 'react'
import Feed from '../../components/feed'
import Rightbar from '../../components/rightbar'
import Sidebar from '../../components/sidebar'
import TopBar from '../../components/topbar'
import './index.css'

const Home = () => {
    return (
        <>
            <TopBar/>
            <div className='homeContainer'>
            <Sidebar/>
            <Feed/>
            <Rightbar/>

            </div>
        </>
    )
}

export default Home
