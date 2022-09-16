import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function MyEvents() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [event, setEvent] = useState([]);
  const navigate = useNavigate();

  function get_available_events() {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const data = { id: userInfo.id };
    axios
      .post("/api/available_events/", { data }, config)
      .then((response) => {
        // console.log(response.data);
        setEvent(response.data);
      })
      .catch(console.error("error"));
  }

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    get_available_events();
  }, []);
  console.log(event);

  return (
    <div className="">
      <div className="row mt-4 mt-lg-5">
        {event.error ? (
          <div className="col-lg-12 mt-5 text-center">{event.error}</div>
        ) : (
          event.map((item) => {
            return (
              <div
                className="col-lg-4 col-mg-6 mt-4 wow slideInUp"
                data-wow-delay=".2s"
                key={item.id}
              >
                <div className="single-tickets-three">
                  <div className="bottom-shapes">
                    <img
                      src="assets/img/home3/tickets-shape-bottom.png"
                      alt=""
                    />
                  </div>
                  <div className="tickets-icon">
                    <div className="tickets-shape">
                      <img src="assets/img/home3/ticket-shape.png" alt="" />
                    </div>
                    <div className="tickets-shape-hover">
                      <img src="assets/img/home3/ticket-shape2.png" alt="" />
                    </div>
                    <i className="las la-calendar"></i>
                    {/* <span className="tickets-day"> 01 </span> */}
                  </div>
                  <div className="tickets-content">
                    <h3 className="tickets-time"> {item.event_name} </h3>
                    <div className="tickets-para">
                      {" "}
                      {item.event_topic ? item.event_topic : "No Topic"}{" "}
                    </div>
                    <h2 className="tickets-price">
                      {" "}
                      <sub>Starting with Rs.</sub> {item.ticket_price}{" "}
                    </h2>
                  </div>
                  {/* <Link
                    to={`/my-event/${item.id}`}
                    className="btn--custom btn--three no-radius mr-5"
                  >
                    {" "}
                    Edit{" "}
                  </Link>
                  <Link
                    to={`/delete-event/${item.id}`}
                    className="btn--custom btn--three no-radius mr-5"
                  >
                    {" "}
                    Delete{" "}
                  </Link> */}
                  <Link
                    to={`/${item.registration_link}`}
                    className="btn--custom btn--three no-radius mr-5"
                  >
                    {" "}
                    Buy Ticket{" "}
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default MyEvents;
