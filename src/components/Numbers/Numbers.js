import React from 'react'
import './Numbers.css'

const Numbers= ({onHandleChange}) => {
    /*const [numberToAdd,setNumberToAdd]= useState(
    [''

    ])
    */
    const numArray= ['1','2','3','4','5','6','7','8','9']
    /*event handler controlling clic event to pick up a number*/
    const handleClick= (event) =>{
        //with this i am creating an array to store the first numbers to operate with
        event.preventDefault()
        let add=event.target.value
        console.log('valor del input '+ add)
        /*setNumberToAdd(prev =>{
            let array= [...prev,add]
            console.log(array)
            return array
        })
        replace setNumberAdd() with onHandleChange()
        */
       onHandleChange(prev =>{
           /*console.log('estado previo '+ typeof prev)
           console.log(prev[0])
           console.log('segundo '+Object.values(prev))
           */
        let array= [...prev,add]
        let stringNumber= array.join('')
        console.log('valor del estado '+Number( array.join('')))
        /*with this code i am joining each number in the state(converting to string)
        and after that in the App component it is transformed into a numberusing Number()
        */
        return stringNumber
    })
    }
    return (
        <main id='number-container'>
            <ul className='num-row'> 
                {/*first line: 7,8,9}*/}
                {numArray.filter(num =>num>6).map((num,index) =><li value={num} className='num' key={index} onClick={handleClick}>{num}</li>)}
            </ul>
            <ul className='num-row'>
                {/*second line 4,5,6*/}
                {numArray.filter(num =>num>=4 && num<7).map((num,index) =><li value={num} className='num' key={index} onClick={handleClick}>{num}</li>)}
            </ul>
            <ul className='num-row'>
                {/*second line 1,2,3*/}
                {numArray.filter(num =>num>=1 && num<4).map((num,index) =><li value={num} className='num' key={index} onClick={handleClick}>{num}</li>)}
            </ul>
         
        </main>
    )
}
export default Numbers;