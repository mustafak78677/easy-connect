import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

                  <Col lg={12}>
                    {user ? (
                      <div className="send-button text-center">
                        <button
                          onClick={(e) => {
                            registerEventOnline(e);
                          }}
                          type="button"
                          className="btn--custom btn--one no-radius me-3"
                        >
                          Register Online
                        </button>

                        <button
                          className="btn--custom btn--one no-radius"
                          onClick={(e) => {
                            registerEventOffline(e);
                          }}
                          type="button"
                        >
                          Register Offline
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
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
