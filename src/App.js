import React from 'react'
import "./App.css"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    alert('A keyword has been submitted: ' + this.state.value)
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <h1>SenTwitter</h1>
        <h2>Sentiment analysis on Twitter!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Insert the keyword:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="SUBMIT!" />
        </form>
      </div>
    );
  }
}

export default App;
