import { useContext } from 'react';
import './App.scss';
/* import BinaryOperator from './components/BinaryOperator';
import { ClasesCondicionales } from './components/ClasesCondicionales';
import Encuesta from './components/Encuesta';
import InLineStyle from './components/InLineStyle';
import InLineTernary from './components/InLineTernary';
import ReturnTemprano from './components/ReturnTemprano';
import StylingDinamico from './components/StylingDinamico';
import TernaryOperator from './components/TernaryOperator'; */
import { Theme } from './contexts/Theme';
import Router from './routes';

function App() {

  const {themeColor} = useContext(Theme)

  console.log(themeColor);

  // const condicion = 2 + 2 - 4

  return (
    <div
      className= {themeColor === 'dark' ? 'container-dark' : null}
    >
      <Router/>
      {/* <TernaryOperator condition={""}/> */}
      {/* <ReturnTemprano/> */}
      {/* <BinaryOperator condition={0 && 20}/> */}
      {/* <InLineTernary lang={"en"}/> */}
      {/* <Encuesta condition={condicion}/> */}
      {/* <InLineStyle color='#FF0080'/> */}
      {/* <ClasesCondicionales condition={false}/> */}
      {/* <StylingDinamico 
        additionalStyles={{
          color: 'black'
        }}
      /> */}
    </div>
  )
}

export default App;
