import './../global.css'
// import axios from 'axios';

const AddUser = (users, setUsers) => {
    console.log(setUsers);
    const addUser = e => {
        e.preventDefault();
        const name = e.target.user.value
        const email = e.target.email.value
        const addedNEwUser = { name, email }
        console.log(addedNEwUser)
        fetch(`http://localhost:5000/user`, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(addedNEwUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(`post res`, data)
                setUsers(data)


            })

        // const response = await axios.post('http://localhost:5000/user', addedNEwUser)
    }


    return (

        <div>
            <form className='input-form' onSubmit={addUser} >
                <input name='user' type="text" placeholder='your name' />
                <input name='email' type="text" placeholder='your email' />
                <input type="submit" value="add user" />
            </form>
        </div>
    );
};

export default AddUser;