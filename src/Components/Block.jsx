import React from 'react'
import './Board.css'
function Block({content,id,checkContent}) {

  const changeContent=()=>{
    checkContent(id)
    console.log(id);
    
  }  


  return (   
    <div className='block' onClick={changeContent} >
      {content}
    </div>
  )
}

export default Block
