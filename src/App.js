import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ini Ceritanya Dibawah Ini Itu Searchnya 
        </p>
        <input type="text" placeholder="Input your search..."/>
      </header>
    </div>
  );
}

export default App;
