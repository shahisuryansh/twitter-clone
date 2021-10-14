import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {
    TwitterTimelineEmbed , 
    TwitterShareButton ,
    TwitterTweetEmbed
} from "react-twitter-embed"
function Widgets() {
    return (
        <div className = "widgets">
            <div className='widget__input'>
                <SearchIcon className = "widget__searchIcon"/>
                <input placeholder='Search Twitter' type = "text" />
            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId = {"858551177860055040"}/>
                <TwitterTimelineEmbed sourceType = "profile" screenName ="Suryansh" options ={{height:400}}/>
                <TwitterShareButton url ={'https://facebook.com/cleverprogrammer'}
                 options = {{text:"#react is awesome" , via:"cleverqazi"}}/>
            </div>
        </div>
    )
}

export default Widgets
