import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [cookies, setCookie] = useCookies(['Token']);
    const history = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/login", formData)
            .then(res => {
                if (res.data.status === "success") {
                    console.log( res.data.Authorization)
                    setCookie("Token", res.data.Authorization,{path:"/"});
                    history("/")
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
                <>
                    <h2>Login Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>username:</label>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='enter email or phone'/>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <Link to="/signup">Don't have an account? Sign up</Link>
                </>
        </div>
    );
}

export default Login;
