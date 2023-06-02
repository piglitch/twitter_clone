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
            <Button>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox