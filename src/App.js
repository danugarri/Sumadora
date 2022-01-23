import React,{useState} from 'react';
import './App.css';
import Numbers from './components/Numbers/Numbers';
import Simbol from './components/Simbol/Simbol';
import Result from './components/Result/Result'

function App() {
  /* i need to lift the state up from the child components to its direct common ancestor
  and then pass the state from the parent component through props to its child components
 *** states from the child components ***
 */
 //state from the Numbers component
  const [numberToAdd,setNumberToAdd]= useState(
    [null

    ])
    //////lo cambio por un array
  //state from the Result component
    const [input,setInput] = useState([
        null])
   const withOutCero=input[0]==='0'?input.slice(1,100):input
    console.log('el input del componente result es '+withOutCero+ ' y el tipo de dato es '+ typeof Number(input) )
    console.log('el resultado total es '+Number(input+numberToAdd))
    // para recibir el resultado de la funcion que suma los inputs
    const [summationResult,setSummationResult]=useState(0)
  return (
    <main id='container'>
      {/*passing the state from the parent through props*/}
      <Result  state={Number(withOutCero)} onHandleChange={setInput} plusState={summationResult} numberToAdd={numberToAdd}/>
      <Numbers state2={Number(numberToAdd)} onHandleChange={setNumberToAdd} />
      {/*console.log('tipo de dato desde el padre '+typeof Number(numberToAdd))*/}
      {/*console.log('desde el padre '+ Number(numberToAdd))*/}
      {/*this Simbol component receives the state collected from the inputs through plussHandleClick*/}
      <Simbol inputResult={withOutCero} inputNumbers={numberToAdd} plussHandleClick={setSummationResult}/>
    </main>
  );
}

export default App;
