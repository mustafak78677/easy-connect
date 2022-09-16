import React, { useEffect, useState } from 'react'
import {Button, Form, FormGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../actions/UserActions'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    
    const userlogin = useSelector(state=>state.userLogin)
    const {userInfo} = userlogin

    useEffect(() => {
        if(userInfo){
            navigate('/')
        }
    }, [navigate, userInfo])

    const onSubmit = async(e) => {
        e.preventDefault()
        dispatch(userLogin(username, password))
    }

    return (
        <>
        {/* <Form className="form-horizontal" onSubmit={onSubmit}>
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
        </Form> */}

        <div className="sidenav">
            <div className="login-main-text">
            <h2>Easy Connect<br /> Login Page</h2>
            <p>Login or register from here to access.</p>
            </div>
        </div>
        <div className="main">
            <div className="col-md-6 col-sm-12">
            <div className="login-form">
                <Form onSubmit={onSubmit} className='login_register'>
                    <FormGroup>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" className="form-control" placeholder="User Name" value={username} onChange={e=>setUsername(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" className="form-control" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" className="btn btn-black">Login</Button>
                    <Button href="/register" type="button" className="btn btn-secondary">Register</Button>
                </Form>
            </div>
            </div>
        </div>
        </>
    )
}

export default Login