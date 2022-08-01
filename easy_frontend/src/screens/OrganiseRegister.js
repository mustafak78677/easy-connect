import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function OrganiserRegister() {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [organisationName, setOrganisationName] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const onSubmit = async(e) => {
        e.preventDefault()
        if(password!==confirmPassword){
            setMessage('Password and Confirm Password does not match')
        } else {
            const config = {
                headers: {
                    'content-type': 'application/json'
                }
            }
    
            const data = {
                'username': username, 'firstname': firstName, 'lastname': lastName, 'email': email, 'password': password, 'organisationName': organisationName
            }
    
            const result = await axios.post('/api/organiserregister/', {data}, config )
            console.log(result);
            if(result.data.error){
                setMessage(result.data.error)
            } else {
                setTimeout(()=>{
                    navigate('/login')
                }, 5000)
                setMessage(result.data.success)
            }
        }
        
    }

    return (
        // <Form className="form-horizontal" onSubmit={onSubmit}>
        //     <FormGroup>
        //         <Form.Label>Username:</Form.Label>
        //         <Form.Control placeholder="Enter Username" 
        //             value={username} onChange={e=>setUsername(e.target.value)} />
        //     </FormGroup>
        //     <FormGroup>
        //         <Form.Label>First Name:</Form.Label>
        //         <Form.Control placeholder="Enter First Name" 
        //             value={firstName} onChange={e=>setFirstName(e.target.value)} />
        //     </FormGroup>
        //     <FormGroup>
        //         <Form.Label>Last Name:</Form.Label>
        //         <Form.Control placeholder="Enter Last Name" 
        //             value={lastName} onChange={e=>setLastName(e.target.value)} />
        //     </FormGroup>
        //     <FormGroup>
        //         <Form.Label>Email:</Form.Label>
        //         <Form.Control placeholder="Enter Email" 
        //             value={email} onChange={e=>setEmail(e.target.value)} />
        //     </FormGroup>
        //     <FormGroup className='my-3'>
        //         <Form.Label>Password:</Form.Label>
        //         <Form.Control type="password" placeholder="Enter Password" value={password} 
        //             onChange={e=>setPassword(e.target.value)} />
        //     </FormGroup>
        //     <FormGroup className='my-3'>
        //         <Form.Label>Confirm Password:</Form.Label>
        //         <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} 
        //             onChange={e=>setConfirmPassword(e.target.value)} />
        //     </FormGroup>
        //     <FormGroup className='my-3'>
        //         <Form.Label>Organisation Name:</Form.Label>
        //         <Form.Control type="text" placeholder="Enter Organisation Name" value={organisationName} 
        //             onChange={e=>setOrganisationName(e.target.value)} />
        //     </FormGroup>
        //     <Button type="submit" className="btn btn-primary btn-block my-3">Login</Button>
        //     <p style={{color: 'red'}}>{message}</p>
        // </Form>
        <>
            <div className="sidenav">
                <div className="login-main-text">
                <h2>Easy Connect<br /> Organiser Register Page</h2>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                <div className="participant-form">
                <Form className="form-horizontal" onSubmit={onSubmit}>
                    <FormGroup>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control placeholder="Enter Username" 
                            value={username} onChange={e=>setUsername(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control placeholder="Enter First Name" 
                            value={firstName} onChange={e=>setFirstName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control placeholder="Enter Last Name" 
                            value={lastName} onChange={e=>setLastName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control placeholder="Enter Email" 
                            value={email} onChange={e=>setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className='my-3'>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={password} 
                            onChange={e=>setPassword(e.target.value)} />
                    </FormGroup>
                    <FormGroup className='my-3'>
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} 
                            onChange={e=>setConfirmPassword(e.target.value)} />
                    </FormGroup>
                    <FormGroup className='my-3'>
                        <Form.Label>Organisation Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Organisation Name" value={organisationName} 
                            onChange={e=>setOrganisationName(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" className="btn btn-secondary">Register</Button>
                    <p className='text-danger mt-2'>{message}</p>
                </Form>
                </div>
                </div>
            </div>
        </>
    )
}

export default OrganiserRegister