import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogOut } from '../actions/UserActions'

function Header({userInfo}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!userInfo){
            navigate('/login')
        }
    },[userInfo, navigate])

    const logout = () => {
        dispatch(userLogOut())
        navigate('/login')
    }

    if(userInfo.is_staff === true){
        var isStaff = true
    } else {
        var isStaff = false
    }

    return (
        <header className="header-area">
            <div className="navigation-area navigation-three pl-90 pr-90">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/home3/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li><a className="has-child" href="#0">Home</a>
                                            <ul className="submenu">
                                                <li><a href="index.html">Home1</a></li>
                                                <li><a href="index2.html">Home2</a></li>
                                                <li><a href="index3.html">Home3</a></li>
                                                <li><a href="index4.html">Home4</a></li>
                                                <li><a href="index5.html">Home5</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#0">About</a></li>
                                        <li><a href="#0">Spakers</a></li>
                                        <li><a href="#0">How it Work</a></li>
                                        {/* <li><a className="has-child" href="#0">Blogs</a>
                                            <ul className="submenu">
                                                <li><a href="blog.html">Blogs</a></li>
                                                <li><a href="blog-details.html">Blog Details </a></li>
                                            </ul>
                                        </li> */}
                                        <li><a href="#0">Feedback</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        {isStaff ? 
                                        <li><Link to='/createevent'>Create Event</Link></li> : ''}
                                        <li onClick={logout}><a href='#'>Logout</a></li>
                                    </ul>
                                </nav>
                                <div className="search-open">
                                    <i className="las la-search"></i>
                                </div>
                            </div>
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header