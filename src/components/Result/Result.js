import React from "react"
import './Result.css'

const Result= ({state,onHandleChange,plusState,numberToAdd}) =>{
    /*const [input,setInput] = useState({
        input:''
    })*/
    const handleChangeInput =(event) =>{
        event.preventDefault()
        console.log(event.target.value)
        let addNumber= event.target.value
        /*setInput({
            value:event.target.value
        })
        cambiamos el setInput() por la prop que actualiza el estado 
        */
        onHandleChange(prev =>{
            let array=[addNumber]
            let stringNumber= array.join('')
            console.log('array que se genera en Result '+ Number(stringNumber))
            return stringNumber
        })
    }
    return(
        <body>

        <main id='result'>
             {/*aquí se mostrará el resultado*/}
             <section>
            <p>Número por teclado</p>
            <input type='number' id='result-number' placeholder='0' autoFocus onChange={handleChangeInput} value={state}/>
            {console.log('estado en el componente Result '+state)}
            {/*with this i can render the result of the summation<h1>{plusState}</h1>*/}

                </section>
            <section>
            <p>Número por ratón</p>
            <h2 id='mouseNumber'>{numberToAdd}</h2>
            </section>
            <section>
            <p>El resultado es</p>
            <h2 id='mouseNumber'>{plusState}</h2>
            </section>
        </main>
        </body>
     )
}

export default Result