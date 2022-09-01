import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function UserEventRegister() {
    const {url} = useParams()
    
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    const [user] = useState(userInfo.is_staff ? false : true)
    const [event, setEvent] = useState('')
    

    function get_event(){
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        const data = {'url': url}

        axios.post('/api/user-event-register/', {data}, config).then(res=>{
            console.log(res.data)
            setEvent(res.data)
        }).catch(err=>console.error(err))
    }

    useEffect(()=>{
        get_event()
    },[])

    const registerEvent = (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        const data = {'event_id': event.id, 'user_id': userInfo.id}
        axios.post('/api/event-register/', {data}, config).then(res=>{
            console.log(res.data);
        }).catch(err=>console.error(err))
    }
    return (
        <Container className=''>
            <Form className='send-form'  onSubmit={registerEvent}>
                <Row className='mt-5 mt-lg-5'>
                    <Card className='mt-5'>
                        <Card.Header>
                            <Card.Title className='text-center'>Event Name: {event.event_name}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={6}>
                                    <p>Date: <strong>{event.event_date}</strong></p>
                                </Col>
                                <Col lg={6}>
                                    <p>Event Venue: <strong>{event.event_venue}</strong></p>
                                </Col>
                                <Col lg={12}>
                                    {user ? 
                                        <div className="send-button text-center">
                                            <button type="submit" className="btn--custom btn--one no-radius"> Register Now </button>
                                        </div>
                                        :
                                        ''
                                    }
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Form>
        </Container>
    )
}

export default UserEventRegister