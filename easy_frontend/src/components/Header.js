import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../actions/UserActions";

function Header({ isStaff, userInfo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const homePage = window.location.href === 'https://localhost:3000/' || 'https://127.0.0.1:3000/' ? true :false
  const header = userInfo || homePage
  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate("/login");
  //   }
  // }, [navigate, userInfo]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(userLogOut());
    navigate("/login");
  };

  return (
    <>
      {header && (
        <div>
          <div className="search-bar search-bar-three">
            <form className="menu-search-form" action="#">
              <div className="search-close">
                {" "}
                <i className="las la-times"></i>{" "}
              </div>
              <input
                className="item-search"
                type="text"
                placeholder="Search Here....."
              />
            </form>
            <div className="close-toggle-body"></div>
          </div>
          <header className="header-area">
            <div className="navigation-area navigation-three pl-90 pr-90">
              <div className="container-fluid">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-3">
                    <div className="logo">
                      <a href="/">
                        {/* <img src="/assets/img/home5/tickets1.png" alt="" /> */}
                        <h4>Easy Connect</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <a href="/">
                              Home
                            </a>
                            {/* <ul className="submenu">
                              <li>
                                <a href="index.html">Home1</a>
                              </li>
                              <li>
                                <a href="index2.html">Home2</a>
                              </li>
                              <li>
                                <a href="index3.html">Home3</a>
                              </li>
                              <li>
                                <a href="index4.html">Home4</a>
                              </li>
                              <li>
                                <a href="index5.html">Home5</a>
                              </li>
                            </ul> */}
                          </li>
                          {/* <li>
                            <a href="#0">About</a>
                          </li> */}
                          {/* <li>
                            <a href="#0">Speakers</a>
                          </li>
                          <li>
                            <a href="#0">How it Work</a>
                          </li> */}
                          {/* <li><a className="has-child" href="#0">Blogs</a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">Blogs</a></li>
                                                            <li><a href="blog-details.html">Blog Details </a></li>
                                                        </ul>
                                                    </li> */}
                          {/* <li>
                            <a href="#0">Feedback</a>
                          </li> */}
                          <li>
                            <a href="/myevents">My Events</a>
                          </li>
                          {!isStaff ? (
                            <li>
                              <a href="/availableevents">Available Events</a>
                            </li>
                          ) : (
                            ""
                          )}

                          {isStaff ? (
                            <li>
                              <Link to="/createevent">Create Event</Link>
                            </li>
                          ) : (
                            ""
                          )}
                          {userInfo ? (
                            <li onClick={logout}>
                              <a href="javascript(void)">Logout</a>
                            </li>

                          ) : (
                            <>
                              <li>
                                <a href="/login">Login</a>
                              </li>
                              <li>
                                <a href="/register">Register</a>
                              </li>
                            </>
                          )}
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
        </div>
      )}
    </>
  );
}

export default Header;
