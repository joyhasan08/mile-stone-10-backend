
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const addUserBtn = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newUser = { name, email, password }
    console.log(newUser);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('user added successfuly')
        }
      })

    e.target.name.value = ''
    e.target.email.value = ''
    e.target.password.value = ''
  }

  return (
    <>
      <section>
        <div >
          <h1>Simple CURD</h1>
          <form onSubmit={addUserBtn} className='card' >
            <input name='name' type="text" placeholder='name' />
            <input name='email' type="text" placeholder='email' />
            <input name='password' type="password" placeholder='Password' />
            <input className='btn' type="Submit" value="ADD user" />
          </form>
          <Link to={"/users"}>All Users </Link>
        </div>
      </section>
    </>
  )
}

export default App
