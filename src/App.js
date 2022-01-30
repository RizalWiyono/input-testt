import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ state, setState ] = useState({})
  const [ query, setQuery ] = useState()

  useEffect(() => {
    setState({})
    if (query) {
      fetch(`https://api.agify.io?name=${query}`)
      .then(response => response.json())
      .then(result => setState(result))
      .catch(error => console.error(error))
    }
  }, [query])

  function searchQuery(evt) {
    if (evt.key === 'Enter') {
      const value = evt.target.value
      setQuery(value)
    }
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Type any name, and get the age.
        </p>
        <input type="text" onKeyPress={searchQuery} placeholder="Type name..."/>
        { Object.keys(state).length !== 0 ? (<div>Name: {state.name}</div>) : (<></>)}
        { Object.keys(state).length !== 0 ? (<div>Age : {state.age}</div>) : (<></>)}
      </header>
    </div>
  );
}

export default App;
