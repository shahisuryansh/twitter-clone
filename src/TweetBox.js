import { Avatar,Button } from '@material-ui/core'
import React , {useState} from 'react'
import './TweetBox.css'
import db from './firebase'
function TweetBox() {
    const [tweetMessage,setTweetMessage] = useState('') ;
    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Suryansh",
          username: "cleverqazi",
          verified: true,
          text: tweetMessage,
          
          avatar:
            "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        });
    
        setTweetMessage("");
        
      };
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                  <Avatar src = ""></Avatar>
                  <input onChange = {e=> setTweetMessage(e.target.value)} value = {tweetMessage} placeholder="What's happening " type= "text" />

                </div>
                <Button  onClick ={sendTweet}   type = "submit" className='tweetBox__tweetButton'>
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
