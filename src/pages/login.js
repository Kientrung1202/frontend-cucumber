import React, { useState } from 'react'
import axios from 'axios'
import "../App.css"


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    // comment
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        return axios.post('http://localhost:8000/login', {
            username,
            password
        }).then(response => {
            setResponse('Successfully Login')
        }).catch(error => {
            setResponse('Unauthorized')
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button type="submit">Log in</button>
                </form>
                <div>
                    <p id='response'>{response}</p>
                </div>

            </header>
        </div>
    )
}

export default LoginForm