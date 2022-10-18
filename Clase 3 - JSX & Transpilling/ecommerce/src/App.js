import './App.css';

function App() {

  const pStyles = {
    fontSize: 20,
    color: 'salmon',
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Comisión 40275 - Proyecto de la clase 2
          </p>
          <a
            className="App-link"
            href="https://plataforma.coderhouse.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coderhouse
          </a>
        </header>
      </div>
      <div className='container-additional'>
        <p style={pStyles}>
          Mensaje adicional
        </p>
      </div>
    </>
  );
}

export default App;
