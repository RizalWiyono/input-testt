import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ state, setState ] = useState([])
  const [ query, setQuery ] = useState()

  useEffect(() => {
    if (query) {
      fetch(`http://localhost:4000/api/items?q=${query}`)
      .then(response => response.json())
      .then((result) => setState(result.data)) 
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
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            { state.map((item, index) => (
              <tr key={index}>
                <td>{ index+1 }</td>
                <td>{ item.name }</td>
              </tr>
              ))
            }
          </tbody>

        </table>
      </header>
    </div>
  );
}

export default App;
