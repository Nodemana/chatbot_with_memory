import React, {useState} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    .then((res) => res.json())
    .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <header>GPT3 Chatbot</header>
      <form style={{
        marginTop:"10px",
        alignContent:"center"}}onSubmit={handleSubmit}>
        <textarea
          value = {message}
          onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button style={{
            marginLeft:"30px"
          }}
          type="submit">Submit</button>
      </form>
      <div style={{
        marginTop:"20px",
        border:"5px solid #e6e6e6",
        minHeight:"300px",
        minWidth:"1000px",
        marginLeft:"10px",
        marginRight:"10px"
        }}>{response}</div>
    </div>
  )
}

export default App;
