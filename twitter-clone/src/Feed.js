import './feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { useState } from 'react'
import { useEffect } from 'react';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
          <h2>Home</h2>
        </div>
        

        {/* TweetBox */}
        <TweetBox />

        <FlipMove>
        {posts.map(post => (
        
        <Post 
        key={post.text}
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
        ))}
      </FlipMove>  

    </div>
  )
}

export default Feed;
