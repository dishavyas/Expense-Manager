import React from 'react'
import Li from './Li'

function UL ({spends,deleteTodo,updateSpend}) {
  return (
   <ul className="list-group">{
    spends.map((spend)=>
    <Li key={spend.id} spend ={spend} deleteTodo={deleteTodo} updateSpend={updateSpend}/>
    )

   }
   
   </ul>
  )
}

export default UL