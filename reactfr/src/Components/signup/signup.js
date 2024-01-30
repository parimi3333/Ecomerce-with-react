import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });
    const [output, setOutput] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/reg", formData)
            .then(res => {
                setOutput(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            {output.status === "success" ? (
                <>
                    <h1>Your sign up was successful!</h1>
                    <Link to="/login">Login</Link>
                </>
            ) : (
                <>
                    <h2>Signup Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <button type="submit">Signup</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default Signup;
