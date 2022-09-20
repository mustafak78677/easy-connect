import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import {saveAs} from 'file-saver'

function UserEventRegister() {
  const { url } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [user] = useState(userInfo.is_staff ? false : true);
  const [event, setEvent] = useState("");
  const navigate = useNavigate();

  function get_event() {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const data = { url: url, id: userInfo.id };

    axios
      .post("/api/user-event-register/", { data }, config)
      .then((res) => {
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    get_event();
  }, []);

  const registerEventOnline = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const data = { event_id: event.id, user_id: userInfo.id, type: "online" };
    axios
      .post("/api/event-register/", { data }, config)
      .then((res) => {
        console.log(res.data);
        navigate("/myevents");
      })
      .catch((err) => console.error(err));
  };
  const registerEventOffline = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const data = { event_id: event.id, user_id: userInfo.id, type: "offline" };
    axios
      .post("/api/event-register/", { data }, config)
      .then((res) => {
        navigate("/myevents");
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  // Create Document Component
  const MyDocument = () => ( // 
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {/* <Container fluid className="mt-lg-5">
            <Text><h4 className="text-center text-warning">Easy Connect Offline Venue Pass</h4></Text>
            <p className="text-info">Thank you {user.first_name} {user.last_name} for registering in {event.event_name} event. The Details of the event are given below: </p>
            <Row>
              <Col lg={6}>Event Name: {event.event_name}</Col>
              <Col lg={6}>Event Venue: {event.event_venue}</Col>
              <Col lg={6}>Event Date: {event.event_date}</Col>
              <Col lg={6}>Ticket Price: {event.restricted_ticket_price}</Col>  
            </Row>    
            <p><span className="text-warning">Note:</span> Please Reach the venue before 30 minutes and don't forget to take this pass along with you</p>
          </Container>      */}
          <Text>Easy Connect Offline Venue Pass</Text>
          <Text>Thank you {userInfo.first_name} {userInfo.last_name} for registering in {event.event_name} event. The Details of the event are given below:</Text><Col lg={6}>Event Name: {event.event_name}</Col>
          <Text>Event Name: {event.event_name}</Text>
          <Text>Event Venue: {event.event_venue}</Text>
          <Text>Event Date: {event.event_date}</Text>
          <Text>Ticket Price: {event.restricted_ticket_price}</Text>  
          <Text>Note: Please Reach the venue before 30 minutes and don't forget to take this pass along with you</Text>
        </View>
      </Page>
    </Document>
  );

  const PDFDownload = () => {
    // <PDFDownloadLink document={MyDocument} fileName={`${event.event_name}.pdf`}></PDFDownloadLink>
      // This does the trick!
      pdf(<MyDocument />)
        .toBlob()
        .then((blob) => saveAs(blob, `${event.event_name}.pdf`)).then(()=>{registerEventOffline()})

  }
  
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  async function handlePayment() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Failure loading the Razorpay SDK. PLease make sure you are connected to the internet')
			return
		}
    
    const orderData = await axios.post('/api/createOrder/', {
      amount: event.ticket_price
    })

    const { amount, currency, order_id } = orderData.data

    console.log(amount);

    
		const options = {
            key: "rzp_test_OLdSMrCfi85XEX", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Test Company",
            description: "Test Transaction",
            // image: logo,
            order_id: order_id,
            handler: async function (response) {
                const razorpay_paymentId = response.razorpay_payment_id
                const razorpay_orderId = response.razorpay_order_id
                const razorpay_signature = response.razorpay_signature

                const res = await axios.post('/api/verifySignature/', {
                  razorpay_paymentId,
                  razorpay_orderId,
                  razorpay_signature
                })

                alert(res.data.status)
            },
            prefill: {
                name: user.username,
                email: user.email,
                contact: "9999999999",
            },
            theme: {
                color: "#61dafb",
            },
        };
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
    registerEventOnline()
	}


  return (
    <Container className="mt-5">
      {event.error ? (
        <h3 className="text-center text-warning event-register">
          {event.error}
        </h3>
      ) : (
        <Form className="send-form">
          <Row className="mt-5 mt-lg-5">
            <Card className="mt-5">
              <Card.Header>
                <Card.Title className="text-center">
                  Event Name: {event.event_name}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg={6}>
                    <p>
                      Date: <strong>{event.event_date}</strong>
                    </p>
                    <p>
                      Online Ticket Price: <strong>{event.ticket_price}</strong>
                    </p>
                    <p>
                      Online available seats:
                      <strong>{event.max_participants}</strong>
                    </p>
                  </Col>
                  <Col lg={6}>
                    <p>
                      Event Venue: <strong>{event.event_venue}</strong>
                    </p>
                    <p>
                      Offline Ticket Price:
                      <strong>{event.restricted_ticket_price}</strong>
                    </p>
                    <p>
                      Offline available seats:
                      <strong>{event.restricted_participants}</strong>
                    </p>
                  </Col>

                  {user ? (
                      <div className="send-button text-center">
                      <Row>
                        <Col lg={6} className="float-start">
                          <button
                            onClick={(e) => {
                              // registerEventOnline(e);
                              handlePayment(event.id)
                            }}
                            type="button"
                            className="btn--custom btn--one no-radius me-3 float-start"
                          >
                            Register Online
                          </button>
                        </Col>
                        <Col lg={6} className="float-start">
                          <button
                            className="btn--custom btn--one no-radius float-start"
                            onClick={PDFDownload}
                            type="button"
                          >
                            Register Offline
                          </button>
                        </Col>
                    </Row>
                      </div>
                    ) : (
                      ""
                    )}
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Form>
      )}
    </Container>
  );
}

export default UserEventRegister;
