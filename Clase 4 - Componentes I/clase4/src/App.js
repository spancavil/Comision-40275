import './App.css';
import NavBar from './components/NavBar';

function App() {

  const myNfts = ["nft bonito1", "nft feo 2"]

  return (
    <div className="App">
      <NavBar message = {"Hola, cómo estás?"} nfts={myNfts}/>
    </div>
  );
}

export default App;
