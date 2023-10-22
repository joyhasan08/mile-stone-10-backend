import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const InitialUsers = useLoaderData();
    console.log(InitialUsers);
    const [users, setCurrentUsers] = useState(InitialUsers);
    const handelDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("id deleted")
                    const remaining = users.filter(user => user._id !== _id)
                    setCurrentUsers(remaining)
                }
            })
    }
    return (
        <div>
            <div>
                <h1>USers display {users.length}</h1>
            </div>
            <div>
                {
                    InitialUsers.map(user => <p key={user._id} >{user.name}: {user.email} <button onClick={() => handelDelete(user._id)}>x</button>
                        <Link to={`/update/${user._id}`}>
                            <button >
                                update
                            </button>
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;