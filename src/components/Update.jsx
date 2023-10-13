import { useLoaderData } from "react-router-dom";

const Update = () => {


    const loadedUsers = useLoaderData()

    console.log(loadedUsers)


    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const updateUser = {email,name}


        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method : 'PUT',
            headers : {
                'content-type ' : 'application/json'
            },
            body : JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('user update successfully')
            }
        })

    }



    return (
        <div>
            <h2>Update User : {loadedUsers.name} </h2>


            
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br /><br />
        <input type="submit" value="UPDATE USER" />
      </form>
        </div>
    );
};

export default Update;