import { MoreVert } from '@material-ui/icons'
import React, { useState } from 'react'
import './index.css'
import {Users} from '../../dummyData'


const Post = ({post}) => {
    const [like,setLike] = useState(post.like)
    const [isLike,setISLike] = useState(false)
    const [isHeart,setIsHeart] = useState(false)


    const user = Users.find(user=>user.id===post.userId)

    const likeHandle = () =>{
        setLike(isLike?like-1 : like+1)
        setISLike(!isLike)
    }
    const heartHandle=()=>{
        setLike(isHeart?like-1 : like+1)
        setIsHeart(!isHeart)
    }
   
    return (
        <div className="post">
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfileImg' src={user?.profilePicture} alt=""/>
                        <span className='postUserName'>{user?.username}</span>
                        <span className='postDate'>{post?.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert/>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={post?.photo} alt='' />
                </div>
                <div className='postBottom'>
                    <div className="postBottomLeft">
                        <img className='likeIcon'  src='/assets/like.png' onClick={likeHandle} alt='' style={{display:`${isHeart? 'none' :'block'}`}} />
                        <img className='likeIcon'  src='/assets/heart.png' onClick={heartHandle}  alt=''  style={{display:`${isLike? 'none' :'block'}`}} />
                        <span className='postLikeCounter'>{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postCommentText'>{post?.comment} comment</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
