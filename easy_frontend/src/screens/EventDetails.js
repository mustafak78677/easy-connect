import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import moment from 'moment'

function EventDetails() {
    const {id} = useParams()
    const [event, setEvent] = useState(null)
    const [user, setUser] = useState([])
    const [attendance, setAttendance] = useState([])

    const get_event = async() => {
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
    
        const params = {'id': id}

        const {data} = await axios.post('/api/stats/', {params}, config)
        setEvent(data.event_serializer)
        setUser(data.user_serializer)
        data.attendance_serializer ? setAttendance(data.attendance_serializer) : setAttendance([])
        // Object.entries(data).map(([key, value])=>(
        //     key === 'event_serializer' ? setEvent(value) : setUser(value)
        // ))
        // setEvent(data.event_serializer)
        console.log(data);

    }

    useEffect(()=>{
        get_event()
    },[])

    return (
        <>
        {event &&
            <Container fluid className='mt-lg-5 p-0'>
                <div className='table-responsive table-responsive--sm bg-dark'>
                    <h3 className='mt-lg-5 text-light text-center'>Users Registered for {event.event_name} event</h3>
                    <Table className='custom--table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user && user.map(res=>(
                                <tr key={res.id}>
                                    <td>{res.first_name} {res.last_name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                {attendance.length !== 0 && 
                    <div className='table-responsive table-responsive--sm bg-dark mt-5'>
                        <h3 className='mt-lg-5 text-light text-center'>Attendance log for {event.event_name} event</h3>
                        <Table className='custom--table'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Name</th>
                                    <th>Time Attended</th>
                                    <th>Time Leaved</th>
                                    <th>Total Time Stayed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendance && attendance.map((res, index)=>(
                                    <tr key={index}>
                                        <td>{res.first_name} {res.last_name}</td>
                                        <td>{res.start_time ? new Date(res.start_time).toLocaleDateString() : null} {res.start_time ? new Date(res.start_time).toLocaleTimeString() : null}</td>
                                        <td>{res.end_time ? new Date(res.end_time).toLocaleDateString() : null} {res.end_time ? new Date(res.end_time).toLocaleTimeString() : null}</td>
                                        <td>{res.start_time && res.end_time ? <span> {Math.floor(new Date(res.end_time).getTime() - new Date(res.start_time).getTime())/1000} seconds</span> : null}</td>
                                        {/* <td>{res.start_time && res.end_time ? moment.utc(moment(res.end_time, "HH:mm:ss").diff(moment(res.start_time, "HH:mm:ss"))).format("mm") : null}</td> */}
                                        {/* <td>{moment(new Date(res.end_time).toLocaleTimeString()).diff(moment(new Date(res.start_time).toLocaleDateString()), 'minutes')}</td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                }
            </Container> 
        }
        </>
    )
}

export default EventDetails