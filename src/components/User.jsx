import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const loadedUsers = useLoaderData()


    const [users, setUsers] = useState(loadedUsers)


    const handleDelete = _id => {
        console.log('delete the id ', _id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('delete successfully')
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining)
            }
        })
    }


    return (
        <div>
            <h2>Number of User : {users.length} </h2>
            {
                users.map(user => <p key={user._id}> {user.name} : {user.email}
                <Link to={`/update/${user._id}`}>Update</Link>
                <button onClick={() =>handleDelete(user._id)}> X</button>
                </p> )
            }
        </div>
    );
};

export default User;