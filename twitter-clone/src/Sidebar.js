import React from 'react';
import './Sidebar.css';
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';import MailOutlineIcon from '@mui/icons-material/MailOutline';


function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter icon */}
        <TwitterIcon />

        <SidebarOption Icon={HomeIcon} text={"Home"}/>
        <SidebarOption Icon={SearchIcon} text={"Explore"}/>
        <SidebarOption Icon={NotificationsNoneIcon} text={"Notifications"}/>        
        <SidebarOption Icon={MailOutlineIcon} text={"Messages"}/>
        

        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}

        {/* TweetButton */}
    
    
    </div>
  )
}

export default Sidebar