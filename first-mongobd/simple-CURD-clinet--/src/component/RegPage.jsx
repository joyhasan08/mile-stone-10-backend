import axios from "axios";
import { Link } from "react-router-dom";


const RegPage = () => {

    const handelAddUser = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const res = await axios.post(`http://localhost:5000/api/registration`, {
            name, email, password
        })
        console.log(res.data);
    }

    return (
        <div>
            <h1>Add user</h1>
            <form onSubmit={handelAddUser} >
                <input type="text" name="name" placeholder="userName" />
                <input type="email" name="email" placeholder="Email Address" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Add New user" />
            </form>
            <Link to={"/users"}>Show Users</Link>
        </div>
    );
};

export default RegPage;