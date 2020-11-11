import React, { useEffect, useState } from 'react'
import "./App.css"

import DisplayTweet from './components/tweet/DisplayTweet'

const App = () => {
  const [keyword, setKeyword] = useState("")
  const [errors, setErrors] = useState(false)
  const [tweets, setTweets] = useState([])

  async function fetchTweets(keyword) {
    const result = await fetch(`http://localhost:4000/api/tweets/${keyword}`)
    result
      .json()
      .then(result => setTweets(result.tweets))
      .catch(errors => setErrors(errors))
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log('handleSubmit')

    fetchTweets(keyword)

    event.preventDefault()
  }

  return (
    <div className="App">
      <h1>SenTwitter</h1>
      <h2>Sentiment analysis on Twitter!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Insert the keyword:
          <input type="text" value={keyword} onChange={handleChange} />
        </label>
        <input type="submit" value="SUBMIT!" />
      </form>      

      <DisplayTweet tweets={tweets} />

    </div>
  )
}

export default App
