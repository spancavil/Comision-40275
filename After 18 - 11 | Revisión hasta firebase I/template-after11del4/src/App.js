import { useContext } from 'react';
import './App.scss';
import { Theme } from './contexts/Theme';
import Router from './routes';

function App() {

  const {themeColor} = useContext(Theme)
  
  return (
    <div
      className= {themeColor === 'dark' ? 'container-dark' : null}
    >
      <Router/>
    </div>
  )
}

export default App;
