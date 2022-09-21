import React from 'react'

function Footer() {
    return (
        <footer className="footer-area footer-area-two footer-area-three bg--section3">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mt-4">
                            <div className="single-footer single-footer-three">
                                <div className="footer-logo">
                                    {/* <a href="index.html"> <img src="assets/img/home3/logo2.png" alt="logo" /> </a> */}
                                    <h4 className='text-white'>Easy Connect</h4>
                                </div>
                                <div className="footer-contents">
                                    <p className="common-para">Our Platform provides seamless connectivity between organisations who want to share their best industry experience and participants who want to gain knowledge and level up their skills</p>
                                    <ul className="footer-social">
                                        <li>
                                            <a href="#"> <i className="lab la-facebook-f"></i> </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="lab la-twitter"></i> </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="lab la-instagram"></i> </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="lab la-linkedin-in"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mt-4">
                            <div className="single-footer single-footer-three">
                                <h4 className="footer-title"> Quick Links </h4>
                                <div className="footer-contents">
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Support </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Helpline </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Courses </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Event </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Subject </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mt-4">
                            <div className="single-footer single-footer-three">
                                <h4 className="footer-title"> Quick Links </h4>
                                <div className="footer-contents">
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> About Us </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> My Account </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Speakers </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Contact </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Tricket </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="las la-angle-right"></i> Seminar </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-4">
                            <div className="single-footer">
                                <h4 className="footer-title"> Global Foot print </h4>
                                <div className="footer-contents contents-map contents-map-three">
                                    <div className="mapcontainer_equi">
                                        <div className="dotmap"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <span className="copyright-text">Copyright Easy Connect © 2021. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer