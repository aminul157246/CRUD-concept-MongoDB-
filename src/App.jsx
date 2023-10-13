
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const user = {email,name}
    console.log(user);

    fetch('http://localhost:5000/users', {
      method : "POST", 
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('user added successfully .. 😺 ')
      }
      form.reset()
    })


  }

  return (
    <>
      <h2>CRUD .....!!!!</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br /><br />
        <input type="submit" value="ADD USER" />
      </form>
    <Outlet></Outlet>
    </>
    
  )
}

export default App
