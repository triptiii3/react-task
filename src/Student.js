import React,{useState} from 'react'


export default function Student(props) {
  return (
    <div className='container' >
      <h3 className='text-center my-3'>Student List</h3>
     {props.home.length==0?"No todos to display":
     props.home.map(()=>{ 
      return <h4>{props.name}{props.number}</h4> 
     
})
    }
      </div>

  )
}
