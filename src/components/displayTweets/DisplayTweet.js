import React from 'react'
import './DisplayTweet.css'

const DisplayTweet = ({tweets}) => {

    return tweets.map((elem, index) =>
        <div className="twitter-container" key={index}>
          <p>ID: {elem.id}</p>
          <p>Author: {elem.authorId}</p>
          <p>Created: {elem.createdAt}</p>
          <p>{elem.text}</p>
        </div>
      )    
}

export default DisplayTweet