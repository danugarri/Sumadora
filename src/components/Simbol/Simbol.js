import React from 'react';
import './Simbols.css'

import Plus from './Plus/Plus';
//import Equal from './Equal/Equal';
//import Delete from './Delete/Delete';



const Simbol = ({inputResult,inputNumbers,plussHandleClick})=>{

    return (
        <main id='generic-container'>
            <Plus inputResult={inputResult} inputNumbers={inputNumbers} plussHandleClick={plussHandleClick}/><br/>
            
        </main>
    )
}
export default Simbol;