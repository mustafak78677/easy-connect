import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CreateEvent() {
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [venue, setVenue] = useState('')
    const [maxParticipants, setMaxParticipants] = useState(0)
    const [resParticipants, setResParticipants] = useState(0)
    const [price, setPrice] = useState(0)
    const [resPrice, setResPrice] = useState(0)
    const [topic, setTopic] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()


    const submit = async(e) => {
        setMessage('')
        e.preventDefault()
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        const data = {'event_name': name, 'event_date': date, 'event_venue': venue, 'max_participants': maxParticipants, 'restricted_participants': resParticipants, 'ticket_price': price, 'restricted_ticket_price': resPrice, 'event_topic': topic, 'isPublic': isPublic, 'organization_host_id': userInfo.id}

        const result = await axios.post('/api/createevent/', {data}, config)
        if(result.data.error){
            setMessage(result.data.error)
        } else {
            setMessage(result.data.success)
        }
    }

    useEffect(()=>{
        if (!userInfo) {
            navigate("/login");
        }
    },[])
    
    return (
        <>
            <div className="sidenav">
                <div className="login-main-text">
                <h2>Easy Connect<br /> Create Event</h2>
                </div>
            </div>  
            <div className='main'>
                <div className='col-md-6 col-sm-12'>
                    <div className='participant-form'>
                        <Form onSubmit={submit}>
                            <FormGroup>
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control type='text' value={name} onChange={e=>setName(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control type='date' value={date} onChange={e=>setDate(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Event Venue</Form.Label>
                                <Form.Control type='text' value={venue} onChange={e=>setVenue(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Maximum Particiants Limit (Leave Zero if dont want any limit)</Form.Label>
                                <Form.Control type='number' value={maxParticipants} onChange={e=>setMaxParticipants(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Particiants Limit for offline venue (Leave Zero if no offline venue)</Form.Label>
                                <Form.Control type='number' value={resParticipants} onChange={e=>setResParticipants(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Price for Online (Leave Zero if free)</Form.Label>
                                <Form.Control type='number' value={price} onChange={e=>setPrice(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Price for offline venue (Leave Zero if no offline venue or free)</Form.Label>
                                <Form.Control type='number' value={resPrice} onChange={e=>setResPrice(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Event Topic</Form.Label>
                                <Form.Control type='text' value={topic} onChange={e=>setTopic(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Check value={isPublic} defaultChecked={isPublic} onChange={e=>{setIsPublic(e.target.checked);}} label="Is the Webinar open to registration for everyone?"></Form.Check>
                            </FormGroup>
                            <Button type='submit' className='btn btn-success'>Create Event</Button>
                            <p className='text-danger mt-2'>{message}</p>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateEvent