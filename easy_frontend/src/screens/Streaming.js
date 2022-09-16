import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Streaming({ onUserEnter, onUserExit }) {
  const { url } = useParams();
  const [streaming, setStreaming] = useState();
  const [attendance, setAttendance] = useState();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();

  const get_event = async () => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const data = { url: url };

    await axios
      .post("/api/streaming/", { data }, config)
      .then((res) => {
        setStreaming(res.data);
        onUserEnter(res.data.id);
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    setAttendance(get_event());
    window.addEventListener("beforeunload", onUserExit);
  }, []);

  return (
    // <Container fluid>
    //   <Row className="mt-4 mt-lg-5">
    //     <Col className="mt-lg-5 streaming">
    //       {streaming && streaming.video_link ? (
    //         <iframe
    //           src={`${streaming.video_link}?modestbranding=0&showinfo=0&rel=0&controls=0&autoplay=1`}
    //           title="YouTube video player"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
    //         ></iframe>
    //       ) : (
    //         <h3 className="text-center mt-5">Event has not started yet</h3>
    //       )}
    //     </Col>
    //   </Row>
    // </Container>
    <Container fluid className="stream-container">
      <Row className="youtube-container">
        <Col lg={12}>
          {streaming && streaming.video_link ? (
            <iframe
              src={`https://www.youtube.com/embed/${streaming.video_link}?autoplay=1&mute=2&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${streaming.video_link}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <h3 className="text-center mt-5">Event has not started yet</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Streaming;
