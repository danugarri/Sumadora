import React from 'react';
import '../Simbols.css'

const Plus = ({inputResult,inputNumbers,plussHandleClick,plusState})=>{
    //esto es lo que voy a intentar recibir por props
   //const [summationResult,setSummationResult]=useState(0)
   //value pass as prop to <button>
   console.log('esto es el resultado de la suma '+plusState)
    const summation= Number(inputResult)+Number(inputNumbers) 
    const handleClick= ({target})=>{
        console.log(target.value)
        let plusButton=target.value
        //setSummationResult(summation) lo cambiaría por la prop
        plussHandleClick(summation)
        //now i have to LIFT THE STATE UP to direct common ancestor
        console.log('despues del plus '+plusButton)
        
        }
    
    return (<div>
        
        <button id='simbol' onClick={handleClick} value={summation}>+</button>
        {/*this shows the summation of the 2 inputs*/}
        
    </div>

    )
}
export default Plus;