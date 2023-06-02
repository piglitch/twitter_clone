import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='tenHag.jpg'></Avatar>
                <input placeholder="What's happenig?" type='text'></input>
            </div>
            
            
            
              <input              
              className='tweetBox__imageInput' 
              placeholder="Optional: Enter image URL" type='text'

              />
            
            
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox