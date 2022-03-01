import React, { useState } from 'react'
import {Button, Form, FormGroup} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../actions/UserActions'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate() 

    const onSubmit = async(e) => {
        e.preventDefault()
        dispatch(userLogin(username, password))
        navigate('/')
    }

    return (
        <Form className="form-horizontal" onSubmit={onSubmit}>
            <FormGroup>
                <Form.Label>Username:</Form.Label>
                <Form.Control placeholder="Enter Username" 
                    value={username} onChange={e=>setUsername(e.target.value)} />
            </FormGroup>
            <FormGroup className='my-3'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} 
                    onChange={e=>setPassword(e.target.value)} />
            </FormGroup>
            <Button type="submit" className="btn btn-primary btn-block my-3">Login</Button>
        </Form>
    )
}

export default Login