import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) =>{
    e.preventDefault();
    
    db.collection('posts').add({
      displayName: 'Greg',
      username: 'greg2838',
      verified: true,
      text: tweetMessage,
      mage: tweetImage,
      avatar: 'tenHag.jpg'
    });
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='tenHag.jpg'></Avatar>
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type='text'>

                </input>
            </div>
            
            
            
              <input              
              className='tweetBox__imageInput' 
              value={tweetImage}
              onChange={(e) => setTweetImage(e.target.value)}
              placeholder="Optional: Enter image URL" 
              type='text'

              />
            
            
            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox