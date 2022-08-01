import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateEvent from './screens/CreateEvent';
import EndUserRegistration from './screens/EndUserRegistration';
import Home from './screens/Home';
import Login from './screens/Login';
import OrganiserRegister from './screens/OrganiseRegister';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/register' element={<EndUserRegistration />}></Route>
                <Route path='/organiserregister' element={<OrganiserRegister />}></Route>
                <Route path='/createevent' element={<CreateEvent />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
