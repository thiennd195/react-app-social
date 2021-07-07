import React from 'react'
import Post from '../post'
import Share from '../share'
import './index.css'
import {Posts} from '../../dummyData'

const Feed = () => {
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                 <Share/>
                 {Posts.map((post,index)=>(
                     <Post post={post} key={index}/>
                 ))}
                 
            </div>
        </div>
    )
}

export default Feed
