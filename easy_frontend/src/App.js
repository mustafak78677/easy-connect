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
import EventDetails from "./screens/EventDetails";
import UserEventRegister from "./screens/UserEventRegister";
import AvailableEvents from "./screens/AvailableEvents";

function App() {
  let isStaff = false;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
        <Route path="/" exact element={<Home />}></Route>
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
        <Route path="/my-event/:id" element={<EventDetails />}></Route>
        <Route path="/:url" element={<UserEventRegister />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
