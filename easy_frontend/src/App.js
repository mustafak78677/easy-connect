import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import CreateEvent from "./screens/CreateEvent";
import EndUserRegistration from "./screens/EndUserRegistration";
import Home from "./screens/Home";
import Login from "./screens/Login";
import OrganiserRegister from "./screens/OrganiseRegister";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import MyEvents from "./screens/MyEvents";
import UserEventRegister from "./screens/UserEventRegister";
import AvailableEvents from "./screens/AvailableEvents";
import Streaming from "./screens/Streaming";
import { useState } from "react";
import axios from "axios";
import EditEvent from "./screens/EditEvent";
import EventDetails from "./screens/EventDetails";

function App() {
  let isStaff = false;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const OnUserEnter = async(streaming_id) => {
    console.log('enter 2');
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }

    const data = {'type': 'entering', 'user_id': userInfo.id, 'event_id': streaming_id}

    await axios.post('/api/participant-attendance/', {data}, config).then(res=>{
        console.log(res.data);
        localStorage.setItem('attendance_id', res.data.id)
    })
  }

  const OnUserExit = async() => {
    console.log('leave');
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    const attendance_id = localStorage.getItem('attendance_id')

    const data = {'type': 'leaving', 'attendance_id': attendance_id}

    await axios.post('/api/participant-attendance/', {data}, config).then(res=>{
        console.log(res.data);
        localStorage.removeItem('attendance_id')
    })
  }

  if (userInfo) {
    if (userInfo.is_staff) {
      isStaff = true;
    }
  }

  return (
    <Router>
      <Header isStaff={isStaff} userInfo={userInfo} />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" exact element={<Home isStaff={isStaff} />}></Route>
        <Route path="/register" element={<EndUserRegistration />}></Route>
        <Route
          path="/organiserregister"
          element={<OrganiserRegister />}
        ></Route>
        <Route path="/createevent" element={<CreateEvent />}></Route>
        <Route
          path="/myevents"
          element={<MyEvents userInfo={userInfo} />}
        ></Route>
        <Route path="/availableevents" element={<AvailableEvents />}></Route>
        <Route path="/my-event/:id" element={<EditEvent />}></Route>
        <Route path="/:url" element={<UserEventRegister />}></Route>
        <Route path="/event/:id" element={<EventDetails />}></Route>
        <Route path="/streaming/:url" element={<Streaming onUserEnter={OnUserEnter} onUserExit={OnUserExit} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
