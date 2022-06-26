import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
            </Routes>
        </Router>
    );
}

export default App;
