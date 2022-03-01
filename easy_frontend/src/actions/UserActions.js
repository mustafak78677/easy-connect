import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/UserConstants"

export const userLogin = (username, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
    
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
    
        const {data} = await axios.post('/api/login/', {'username': username, 'password': password}, config)
    
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        console.log(data);        
    
        localStorage.setItem('userInfo', JSON.stringify(data))        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.response
        })        
    }
}