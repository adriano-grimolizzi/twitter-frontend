import useState from "react";
import "./App.css";

const App = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("A keyword has been submitted: " + keyword);
    event.preventDefault();
  };

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
    </div>
  );
};

export default App;
