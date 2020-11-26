import React, { useState } from 'react'
import "./App.css"

import Title from './components/title/Title'
import DisplayTweet from './components/displayTweets/DisplayTweet'
import Sentiment from './components/sentiment/Sentiment'

const App = () => {
  const [keyword, setKeyword] = useState("")
  const [errors, setErrors] = useState(false)
  const [tweets, setTweets] = useState([])
  const [sentiment, setSentiment] = useState(null)

  async function fetchTweets(keyword) {
    const result = await fetch(`http://localhost:4000/api/tweets/${keyword}`)
    result
      .json()
      .then(result => {
        setTweets(result.tweets)
        setSentiment(result.sentiment)
      })
      .catch(errors => setErrors(errors))
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event) => {
    if (keyword) {
      fetchTweets(keyword)
    }
    event.preventDefault()
  }

  return (
    <div className="App">
      <Title />
      <form onSubmit={handleSubmit}>
        <label>
          Insert the keyword:
          <input type="text" value={keyword} onChange={handleChange} />
        </label>
        <input type="submit" value="SUBMIT!" />
      </form>

      <Sentiment sentiment={sentiment}/>

      <DisplayTweet tweets={tweets} />
      {errors}

    </div>
  )
}

export default App
