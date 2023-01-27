import React from 'react'

function List({title,active,setSelected,id}) {
  return (
   
      <li onClick={()=>{setSelected(id)}}className={active?"active":""}>{title}</li>
   
  )
}

export default List
