/* eslint-disable no-restricted-globals */
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'

const EditUsers = (props) => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const onInputChange = e => {
        setUser({
            ...user,[e.target.name]: e.target.value
        });
    };    

    useEffect(()=> {
        loadUser();
    },[]);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push('/');
    };

    const loadUser = async() => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        // console.log(result);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={user.name}
                            onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={user.username}
                            onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={user.email}
                            onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={user.phone}
                            onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={user.website}
                            onChange={e => onInputChange(e)}/>
                    </div>

                    <button className="btn btn-warning btn-block">Update A User</button>
                </form>
            </div>
        </div>
    );
}

export default EditUsers;