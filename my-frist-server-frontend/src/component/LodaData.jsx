import { useEffect, useState } from "react";
import './../global.css'



const LodaData = () => {
    const [user, setUser] = useState([])
    // const [newUser, setNewUser] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

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
                const newUsers = [...user, data]
                setUser(newUsers)
                e.target.user.value = '';
                e.target.email.value = '';


            })

        // const response = await axios.post('http://localhost:5000/user', addedNEwUser)
    }


    console.log(user);
    return (
        <>
            <div>
                <form className='input-form' onSubmit={addUser} >
                    <input name='user' type="text" placeholder='your name' />
                    <input name='email' type="text" placeholder='your email' />
                    <input type="submit" value="add user" />
                </form>
            </div>
            <div>
                <p>
                    {
                        user.map(data => <div key={data.id}>
                            <p> <span>{data.id} :</span> {data.name}--<span> {data.email}</span></p>
                        </div>)
                    }
                </p>
            </div>
        </>
    );
};

export default LodaData;