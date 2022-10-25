import './App.css';
import Ad from './components/Ad';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Hola coders!"}/>
      <Ad>
        <img style={{width: 80}}src="https://imgs.search.brave.com/ba2cVKuwkBFbgTLp2Pwllejd_izIZ0zJ5SElPqTWXDA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2luZm9j/b2luLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wNS9F/dGhlcmV1bUxvZ28u/cG5n" alt=""/>
      </Ad>
    </div>
  );
}

export default App;
