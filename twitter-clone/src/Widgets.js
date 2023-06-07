import React from 'react'
import "./Widgets.css"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import { SearchOutlined } from '@mui/icons-material';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
      <SearchOutlined className='widgets__searchIcon' />
      <input placeholder="Search Twitter" type='text'/>
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='ThePrimeagen'
          options={{height: 400}}
        />
         <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='UtdPlug'
          options={{height: 400}}
        />

        <TwitterShareButton 
          url={"https://facebook.com/avibanerjee"}
          options={{text: "#Manchester is red🔴", via:"avibanerjee"}}
        />
      </div>
    </div>
  )
}

export default Widgets;
