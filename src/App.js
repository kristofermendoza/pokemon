import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {

  // POKEAPI >> const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

  return (
    <div className="App">
      <Nav />
      <Home />
      <Main />
    </div>
  );
}

export default App;
