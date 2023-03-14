import React ,{useState}from 'react'

export const Home =({home})=>{
  const[username,setusername]=useState("");
    const[number,setnumber]=useState("");

    const submit = (e)=>{
      e.preventDefault();
      if(!username|| !number){
        alert("username or number cannot be blank")
      }
      home(username,number);
    }
  return (
    
      <>
      <div className='container my-3' >
          
          <form onSubmit={submit}>
    <div className="mb-3" 
    >
      <label htmlfor="title" className="form-label">Username</label>
      <input type="text" className="form-control" value={username
      } onChange={(e)=>{setusername(e.target.value)}} id="title" />
      
    </div>
    <div className="mb-3">
      <label htmlfor="desc" className="form-label">Telephone number</label>
      <input type="text" value={number} className="form-control"onChange={(e)=>{setnumber(e.target.value)}} id="desc"/>
    </div>
    
    <button type="submit" className="btn btn-primary btn-success">Submit</button>
  </form>
      </div></>
  )
}

