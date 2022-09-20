import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Row, Col, Form, FormGroup} from 'react-bootstrap'
import { base_url } from '../config'
import { useSelector } from 'react-redux'

function EditEvent() {
    const [eventName, setEventName] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventVenue, setEventVenue] = useState('')
    const [maxParticipants, setMaxParticipants] = useState('')
    const [restrictedParticipants, setRestrictedParticipants] = useState('')
    const [isPaid, setIsPaid] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [ticketPrice, setTicketPrice] = useState('')
    const [restrictedTicketPrice, setRestrictedTicketPrice] = useState('')
    const [registrationLink, setRegistrationLink] = useState('')
    const [eventTopic, setEventTopic] = useState('')
    const [isPublic, setIsPublic] = useState('')
    const {id} = useParams()
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    const navigate = useNavigate()

    function get_event(){
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
    
        const data = {'id': id}

        axios.post('/api/eventDetail/', {data}, config).then(res=>{
            setEventName(res.data.event_name)
            setEventDate(res.data.event_date)
            setEventVenue(res.data.event_venue)
            setMaxParticipants(res.data.max_participants)
            setRestrictedParticipants(res.data.restricted_participants)
            setIsPaid(res.data.ispaid)
            setVideoLink(res.data.video_link)
            setTicketPrice(res.data.ticket_price)
            setRestrictedTicketPrice(res.data.restricted_ticket_price)
            setRegistrationLink(res.data.registration_link)
            setEventTopic(res.data.topic)
            setIsPublic(res.data.public)
        }).catch(err=>console.error(err))
    }

    useEffect(()=>{
        if (!userInfo) {
            navigate("/login");
        }
        get_event()
    }, [])
    return (
        <div className='container event-edit-form'>
            <Form className="custom-form send-form" action="#">
                <Row className="row mt-4 mt-lg-5">
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control className="form--control" name="name" placeholder="Enter Event Name" value={eventName} onChange={e=>setEventName(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Event Topic</Form.Label>
                            <Form.Control className="form--control" name="topic" placeholder="Enter Event Topic" value={eventTopic} onChange={e=>setEventTopic(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control className="form--control" type="date" name="date" placeholder="Enter Event Date" value={eventDate} onChange={e=>setEventDate(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Maximum Participants</Form.Label>
                            <Form.Control className="form--control" name="maxparticipants" placeholder="Enter Maximum Participants who can register" value={maxParticipants} onChange={e=>setMaxParticipants(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Restricted Participants</Form.Label>
                            <Form.Control className="form--control" name="resparticipants" placeholder="Enter Participants who can register for offline venue if any" value={restrictedParticipants} onChange={e=>setRestrictedParticipants(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Is Paid?</Form.Label>
                            <Form.Check className="form--control" name="paid" placeholder="Phone Number" value={isPaid} onChange={e=>setIsPaid(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Video Link</Form.Label>
                            <Form.Control className="form--control" name="link" placeholder="Enter Video Link" value={videoLink} onChange={e=>setVideoLink(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Ticket Price</Form.Label>
                            <Form.Control className="form--control" type="text" name="ticketprice" placeholder="Enter Ticket Price" value={ticketPrice} onChange={e=>setTicketPrice(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Ticket Price for offline venue</Form.Label>
                        </FormGroup>
                        <input className="form--control" name="resticketprice" placeholder="Enter Ticket Price for offline venue if any" value={restrictedTicketPrice} onChange={e=>setRestrictedTicketPrice(e.target.value)} />
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Registration Link</Form.Label>
                            <Form.Control className="form--control" name="reglink" placeholder="Registration Link" value={base_url + registrationLink} onChange={e=>setRegistrationLink(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Is the event open for all public?</Form.Label>
                            <Form.Check className="form--control" name="public" placeholder="Phone Number" value={isPublic} onChange={e=>setIsPublic(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label>Event Venue</Form.Label>
                            <Form.Control className="form--control" name="venue" placeholder="Enter Event Venue" value={eventVenue} onChange={e=>setEventVenue(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    {/* <Col lg={6} sm={6}>
                        <FormGroup>
                            <Form.Label></Form.Label>
                        </FormGroup>
                        <div className="nice-selects">
                            <select>
                                <option value="1"> Subject </option>
                                <option value="2"> Subject </option>
                                <option value="3"> Subject </option>
                                <option value="4"> Subject </option>
                                <option value="5"> Subject </option>
                            </select>
                            <div className="nice-select" tabIndex="0"><span className="current"> Subject </span><ul className="list"><li data-value="1" className="option selected"> Subject </li><li data-value="2" className="option"> Subject </li><li data-value="3" className="option"> Subject </li><li data-value="4" className="option"> Subject </li><li data-value="5" className="option"> Subject </li></ul></div>
                        </div>
                    </Col> */}
                </Row>
                {/* <textarea className="form--control form--messages" name="message" placeholder="Type Your Messages" value={eventVenue} onChange={e=>setEventVenue(e.target.value)}></textarea> */}
                <div className="send-button text-center">
                    <button type="submit" className="btn--custom btn--one no-radius"> Submit Now </button>
                </div>
            </Form>
        </div>
    )
}

export default EditEvent