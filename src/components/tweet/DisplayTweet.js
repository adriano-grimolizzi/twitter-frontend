import React from 'react'
import './DisplayTweet.css'

const DisplayTweet = ({tweets}) => {

    return tweets.map((elem, index) =>
        <div className="twitter-container" key={index}>
          <p>{elem.id}</p>
          <p>{elem.text}</p>
        </div>
      )    
}

export default DisplayTweet