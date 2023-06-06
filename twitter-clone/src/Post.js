import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

function Post({
    displayName,
    username,
    verified,
    text,
    avatar,
    image,
}) {
  return <div className='post'>
        <div className='post__avatar'>
            <Avatar src={avatar} />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        {displayName} {" "}  <span className='post__headerSpecial'>
                            {verified && <VerifiedIcon className='post__badge' />}
                            {username}
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt='' />
          <div className='post__footer'>
                
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderRoundedIcon fontSize='small'/>
                <BarChartRoundedIcon fontSize='small'/>
                <IosShareRoundedIcon fontSize='small'/>

            </div>
        </div>
    </div>
}


export default Post;