
import './../App.css'
import { useLoaderData } from 'react-router-dom';

const Upadate = () => {
    const user = useLoaderData()
    const handelUpdate = e => {
        e.preventDefault();
        // const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email }
        console.log(updatedUser);

    }
    return (
        <div>
            <h2>Updated user</h2>
            <p>{user.name}</p>
            <form onSubmit={handelUpdate} className='card' >
                <input type="text" name='name' defaultValue={user.name} />
                <input type="text" name='email' defaultValue={user.email} />
                <input type="Submit" value="Updated user" />
            </form>
        </div>
    );
};

export default Upadate;