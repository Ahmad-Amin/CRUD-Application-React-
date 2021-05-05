import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const User = () => {

    const [user, setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    });

    
    const {id} = useParams();

    useEffect(()=> {
        loadUserFromdb();
    },[])

    const loadUserFromdb = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result.data);
        setUser(result.data);
    }
    return(

        <div className="container py-4">
            <Link className="btn btn-primary" to="/">Back to Home</Link>
            <h2 className="display-4">User Id: {id}</h2>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item"><b>Name:</b> {user.name}</li>
                <li className="list-group-item"><b>UserName:</b> {user.username}</li>
                <li className="list-group-item"><b>Email:</b> {user.email}</li>
                <li className="list-group-item"><b>phone:</b> {user.phone}</li>
                <li className="list-group-item"><b>website:</b> {user.website}</li>
            </ul>

        </div>

    );
}

export default User;