import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Streaming() {
  const { url } = useParams();
  const [streaming, setStreaming] = useState();

  function get_event() {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const data = { url: url };

    axios
      .post("/api/streaming/", { data }, config)
      .then((res) => {
        console.log(res.data);
        setStreaming(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    get_event();
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
