import React from 'react'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'

function Body(userInfo) {
    return (
        <>
            <section className="banner-area-three">
                <div className="banner-left-socials">
                    <a className="video-play-btn" href="https://www.youtube.com/watch?v=iIrSCm_0Sj4"> <i className="las la-play"></i> </a>
                    <ul className="banner-social-list">
                        <li>
                            <a href="#"> {userInfo ? userInfo.username : ''} </a>
                        </li>
                        <li>
                            <a href="#">  </a>
                        </li>
                        <li>
                            <a href="#">  </a>
                        </li>
                    </ul>
                </div>
                <div className="banner-shapes-left">
                    <img src="assets/img/home3/banner-shape.png" alt="" />
                </div>
                <div className="container">
                    <div className="wrapper-three-images wow slideInLeft" data-wow-delay=".4s">
                        <img src="assets/img/home3/banner-right.png" alt="img" />
                    </div>
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-5">
                            <div className="banner-wrapper-trree">
                                <div className="banner-contetns">
                                    <h2 className="banner-title"> Choose your Best Webinar Website </h2>
                                    <a href="#" className="btn--custom btn--three no-radius"> Buy Tickets </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =====>> Banner Area Three End <<===== 
            =========================== */}
            {/* =====>> Countdown Area Starts <<===== 
            =========================== */}
            <div className="countdown-area pt-150 pb-150">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="countdown-all">
                                <div id="simple_timer"></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="countdown-contents">
                                <p className="common-para">There are many variations of passaes of Lorem Ipsum available.</p>
                                <a href="#" className="btn--countdown"> Discover More </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* =====>> Countdown Area End<<===== 
            =========================== */}
            {/* =====>> Join Area Three Starts <<===== 
            =========================== */}
            <div className="join-area-three bg--section3 pt-150 pb-150">
                <div className="join-right-img" data-paroller-factor="0.10" data-paroller-type="foreground" data-paroller-direction="horizontal">
                    <img src="assets/img/home3/join-right-img.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="join-circle-contents">
                                <h2 className="join-title"> How to Join <span className="join-span"> With Us </span> </h2>
                            </div>
                            <div className="row mt-4 mt-lg-5">
                                <div className="col-lg-4 col-sm-6 mt-4 wow slideInLeft">
                                    <div className="circle-progress-single">
                                        <CircularProgressbar className="progress-circle position style--two" value={75} text={'75'} strokeWidth={2} styles={buildStyles({pathColor: '#ffaa17', trailColor: '#434444', textColor: '#ffffff', pathTransitionDuration: '2.5', textSize: '24px' })}></CircularProgressbar>
                                        <p className="common-para"> 1st Step </p>
                                        <h4 className="join-circle-para"> Create Account </h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mt-4 wow slideInUp">
                                    <div className="circle-progress-single">
                                        <CircularProgressbar className="progress-circle position style--two" value={50} text={'50'} strokeWidth={2} styles={buildStyles({pathColor: '#ffaa17', trailColor: '#434444', textColor: '#ffffff', pathTransitionDuration: '2.5', textSize: '24px' })}></CircularProgressbar>
                                        <p className="common-para"> 2nd Step </p>
                                        <h4 className="join-circle-para"> Purchase Ticket </h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mt-4 wow slideInDown">
                                    <div className="circle-progress-single">
                                        <CircularProgressbar className="progress-circle position style--two" value={100} text={'100'} strokeWidth={2} styles={buildStyles({pathColor: '#ffaa17', trailColor: '#434444', textColor: '#ffffff', pathTransitionDuration: '2.5', textSize: '24px' })}></CircularProgressbar>
                                        <p className="common-para"> 3rd Step </p>
                                        <h4 className="join-circle-para"> Join Seminar </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* =====>> Join Area Three End <<===== 
            =========================== */}
            {/* =====>> Tickets Area Three Starts <<===== 
            =========================== */}
            <section className="tickets-area-three pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title section-title-three">
                                <h2 className="section-heading"> Buy Your <span className="heading-light"> Ticket </span> </h2>
                                <p className="section-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has n the industry </p>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mt-lg-5">
                        <div className="col-lg-4 col-mg-6 mt-4 wow slideInUp" data-wow-delay=".2s">
                            <div className="single-tickets-three">
                                <div className="bottom-shapes">
                                    <img src="assets/img/home3/tickets-shape-bottom.png" alt="" />
                                </div>
                                <div className="tickets-icon">
                                    <div className="tickets-shape">
                                        <img src="assets/img/home3/ticket-shape.png" alt="" />
                                    </div>
                                    <div className="tickets-shape-hover">
                                        <img src="assets/img/home3/ticket-shape2.png" alt="" />
                                    </div>
                                    <i className="las la-calendar"></i>
                                    <span className="tickets-day"> 01 </span>
                                </div>
                                <div className="tickets-content">
                                    <h3 className="tickets-time"> 1st Day </h3>
                                    <div className="tickets-para"> Tortor sodales facilis diam sed. Turpis maecenas. </div>
                                    <h2 className="tickets-price"> <sub>$</sub> 254 </h2>
                                </div>
                                <a href="#" className="btn--custom btn--three no-radius"> Buy Now </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-mg-6 mt-4 wow slideInDown" data-wow-delay=".2s">
                            <div className="single-tickets-three">
                                <div className="bottom-shapes">
                                    <img src="assets/img/home3/tickets-shape-bottom.png" alt="" />
                                </div>
                                <div className="tickets-icon">
                                    <div className="tickets-shape">
                                        <img src="assets/img/home3/ticket-shape.png" alt="" />
                                    </div>
                                    <div className="tickets-shape-hover">
                                        <img src="assets/img/home3/ticket-shape2.png" alt="" />
                                    </div>
                                    <i className="las la-calendar"></i>
                                    <span className="tickets-day"> 02 </span>
                                </div>
                                <div className="tickets-content">
                                    <h3 className="tickets-time"> 2nd Day </h3>
                                    <div className="tickets-para"> Tortor sodales facilis diam sed. Turpis maecenas. </div>
                                    <h2 className="tickets-price"> <sub>$</sub> 254 </h2>
                                </div>
                                <a href="#" className="btn--custom btn--three no-radius"> Buy Now </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-mg-6 mt-4 wow slideInLeft" data-wow-delay=".2s">
                            <div className="single-tickets-three">
                                <div className="bottom-shapes">
                                    <img src="assets/img/home3/tickets-shape-bottom.png" alt="" />
                                </div>
                                <div className="tickets-icon">
                                    <div className="tickets-shape">
                                        <img src="assets/img/home3/ticket-shape.png" alt="" />
                                    </div>
                                    <div className="tickets-shape-hover">
                                        <img src="assets/img/home3/ticket-shape2.png" alt="" />
                                    </div>
                                    <i className="las la-calendar"></i>
                                    <span className="tickets-day"> 03 </span>
                                </div>
                                <div className="tickets-content">
                                    <h3 className="tickets-time"> 3rd Day </h3>
                                    <div className="tickets-para"> Tortor sodales facilis diam sed. Turpis maecenas. </div>
                                    <h2 className="tickets-price"> <sub>$</sub> 359 </h2>
                                </div>
                                <a href="#" className="btn--custom btn--three no-radius"> Buy Now </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =====>> Tickets Area Three End <<===== 
            =========================== */}
            {/* =====>> Speakers Area Three Starts <<===== 
            =========================== */}
            {/* <section className="speakers-area-three pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title section-title-three text-left">
                                <h2 className="section-heading"> Our Webinar <span className="heading-light"> Speakers </span> </h2>
                                <p className="section-para"> Lorem Ipsum is simply dummy text of the printing and <br /> ypesetting industry. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mt-lg-5">
                        <div className="col-lg-12 mt-4">
                            <div className="speaker-slider">
                                <div className="single-speaker-three">
                                    <div className="speaker-images">
                                        <img src="assets/img/home3/speaker1.png" alt="" />
                                    </div>
                                    <a className="speaker-links" href="#"> <i className="las la-plus"></i> </a>
                                    <div className="speaker-contents">
                                        <h3 className="speaker-title"> Max lunisa </h3>
                                        <p className="common-para"> CEO </p>
                                    </div>
                                </div>
                                <div className="single-speaker-three">
                                    <div className="speaker-images">
                                        <img src="assets/img/home3/speaker2.png" alt="" />
                                    </div>
                                    <a className="speaker-links" href="#"> <i className="las la-plus"></i> </a>
                                    <div className="speaker-contents">
                                        <h3 className="speaker-title"> Max lunisa </h3>
                                        <p className="common-para"> CEO </p>
                                    </div>
                                </div>
                                <div className="single-speaker-three">
                                    <div className="speaker-images">
                                        <img src="assets/img/home3/speaker3.png" alt="" />
                                    </div>
                                    <a className="speaker-links" href="#"> <i className="las la-plus"></i> </a>
                                    <div className="speaker-contents">
                                        <h3 className="speaker-title"> Max lunisa </h3>
                                        <p className="common-para"> CEO </p>
                                    </div>
                                </div>
                                <div className="single-speaker-three">
                                    <div className="speaker-images">
                                        <img src="assets/img/home3/speaker2.png" alt="" />
                                    </div>
                                    <a className="speaker-links" href="#"> <i className="las la-plus"></i> </a>
                                    <div className="speaker-contents">
                                        <h3 className="speaker-title"> Max lunisa </h3>
                                        <p className="common-para"> CEO </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* =====>> Speakers Area Three End <<===== 
            =========================== */}
            {/* =====>> Upcoming Area Three Starts <<===== 
            =========================== */}
            <section className="upcoming-area-three pb-150">
                <div className="container">
                    <div className="upcoming-half-bg">
                        <div className="row justify-content-lg-end">
                            <div className="col-lg-9">
                                <div className="upcoming-three-wrapper wow slideInUp" data-wow-delay=".2s">
                                    <h2 className="upcoming-headings"> Upcoming Webinar <span className="upcoming-light-font"> Schedule </span> </h2>
                                    <ul className="tabs upcoming-tabs mt-5">
                                        <li data-tab="day-one"> 1st Day </li>
                                        <li data-tab="day-two" className="active"> 2nd Day </li>
                                        <li data-tab="day-three"> 3rd Day </li>
                                    </ul>
                                    <div className="upcoming-content-wrapper tab-content" id="day-one">
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small1.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small2.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small3.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="upcoming-content-wrapper tab-content active" id="day-two">
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small2.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small1.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small3.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="upcoming-content-wrapper tab-content" id="day-three" >
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small3.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small1.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                        <div className="single-ucoming">
                                            <div className="upcoming-image">
                                                <img src="assets/img/home1/upcoming-small2.jpg" alt="" />
                                            </div>
                                            <div className="upcoming-content">
                                                <h6 className="upcoming-title"> Website designer </h6>
                                                <span className="speaker-name"> martin hook </span>
                                                <span className="speaker-name"> at 08:00am - 09:00 am </span>
                                                <p className="common-para">Hendrerit lectus egestas. Pede cum tortor consectetuer eu, orci praesent vestibulum aliquam wisi tortor, arcu egeepltesque pede, tellus ipmorbi nisl. Velit lectus donec orci id auctor. Amet fermentum et dui, ve</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =====>> Upcoming Area Three End <<===== 
            =========================== */}
            {/* =====>> Descount Area Two Start <<===== 
            =========================== */}
            <section className="discount-area discount-area-two bg-base--section3 pt-120 pb-120">
                <div className="container">
                    <div className="discount-wrapper text-center">
                        <div className="section-title">
                            <h2 className="section-heading">Buy Ticket Today, Get 50% Discount </h2>
                        </div>
                        <a href="#" className="btn--custom btn--three no-radius"> Buy Now </a>
                    </div>
                </div>
            </section>
            {/* =====>> Descount Area Two End <<===== 
            =========================== */}
            {/* =====>> Idea Area Three Start <<===== 
            =========================== */}
            <section className="idea-area-three overflow-hidden">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-6 mobile-views" data-background="assets/img/home3/idea-left-bg.jpg"></div>
                        <div className="col-lg-6">
                            <div className="idea-wrapper idea-wrapper-three">
                                <div className="idea-shapes">
                                    <img src="assets/img/home1/idea-shape.png" alt="" />
                                </div>
                                <div className="single-idea single-idea-three">
                                    <div className="idea-icon">
                                        <img src="assets/img/home3/idea1.png" alt="" />
                                    </div>
                                    <div className="idea-contents">
                                        <h3 className="common-title">Idea Share</h3>
                                        <p className="common-para">Sondimentum velit purus, nec mi ante tumst eu eu, nec et quis sit proin lectus sed. Scerisque donec aliquam solltudin tellus praesent sodales imperdiet</p>
                                    </div>
                                </div>
                                <div className="single-idea single-idea-three">
                                    <div className="idea-icon">
                                        <img src="assets/img/home3/idea2.png" alt="" />
                                    </div>
                                    <div className="idea-contents">
                                        <h3 className="common-title">Best Speakers</h3>
                                        <p className="common-para">Sondimentum velit purus, nec mi ante tumst eu eu, nec et quis sit proin lectus sed. Scerisque donec aliquam solltudin tellus praesent sodales imperdiet</p>
                                    </div>
                                </div>
                                <div className="single-idea single-idea-three">
                                    <div className="idea-icon">
                                        <img src="assets/img/home3/idea3.png" alt="" />
                                    </div>
                                    <div className="idea-contents">
                                        <h3 className="common-title">Daily Update</h3>
                                        <p className="common-para">Sondimentum velit purus, nec mi ante tumst eu eu, nec et quis sit proin lectus sed. Scerisque donec aliquam solltudin tellus praesent sodales imperdiet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =====>> Idea Area Three End <<===== 
            =========================== */}
            {/* =====>> Counter Area Three Start <<===== 
            =========================== */}
            <section className="counter-area-three pb-150 pt-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title section-title-three">
                                <h2 className="section-heading"> Our Fun <span className="heading-light"> Number </span> </h2>
                                <p className="section-para"> Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mt-lg-5">
                        <div className="col-lg-4 col-sm-6 mt-4 wow slideInUp" data-wow-delay=".2s">
                            <div className="single-counter-three">
                                <div className="counter-count">
                                    <h2 className="odometer" data-odometer-final="25"></h2>
                                    <h4 className="count-title">K</h4>
                                </div>
                                <h4 className="count-para"> Total Members </h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-4 wow slideInDown" data-wow-delay=".2s">
                            <div className="single-counter-three">
                                <div className="counter-count">
                                    <h2 className="odometer" data-odometer-final="52"></h2>
                                    <h4 className="count-title">K</h4>
                                </div>
                                <h4 className="count-para"> Total Speakers </h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-4 wow slideInLeft" data-wow-delay=".2s">
                            <div className="single-counter-three">
                                <div className="counter-count">
                                    <h2 className="odometer" data-odometer-final="15"></h2>
                                    <h4 className="count-title">K </h4>
                                </div>
                                <h4 className="count-para"> Total Seminar </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =====>> Counter Area Three End <<===== 
            =========================== */}
            {/* =====>> Video Area End <<===== 
            =========================== */}
            <div className="video-area">
                <div className="container">
                    <div className="video-images wow fadeInUp" data-wow-delay=".2s">
                        <img src="assets/img/home3/video-images.jpg" alt="" />
                        <a className="video-play-btn" href="https://www.youtube.com/watch?v=iIrSCm_0Sj4"> <i className="las la-play"></i> </a>
                    </div>
                </div>
            </div>
            {/* =====>> Video Area End <<===== 
            =========================== */}
            {/* =====>> Testimonial Area Three Starts <<===== 
            =========================== */}
            {/* <section className="testimonial-area-three pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title section-title-three">
                                <h2 className="section-heading"> Our Client <span className="heading-light"> Feedback </span> </h2>
                                <p className="section-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-lg-5 mt-4">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="testimonial-three-wrapper">
                                        <div className="single-three-testimonial-img wow slideInDown" data-wow-delay=".2s">
                                            <img src="assets/img/home3/testimonial-image1.jpg" alt="" />
                                        </div>
                                        <div className="single-three-testimonial-img wow slideInUp" data-wow-delay=".2s">
                                            <img src="assets/img/home3/testimonial-image2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="testimonial-three-wrapper">
                                        <div className="single-three-testimonial-img wow slideInDown" data-wow-delay=".2s">
                                            <img src="assets/img/home3/testimonial-image3.jpg" alt="" />
                                        </div>
                                        <div className="single-three-testimonial-img wow slideInUp" data-wow-delay=".1s">
                                            <img src="assets/img/home3/testimonial-image4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-slider-three">
                                <div className="single-testimonials-three">
                                    <div className="testimonial-quotes">
                                        <img src="assets/img/home1/testimonial-icon.png" alt="" />
                                    </div>
                                    <span className="testimonial-para"> here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordwhich don't look even accompanied by English 
                                        <br /> versions from the 1914  </span>
                                    <div className="testimonial-details">
                                        <div className="details-image">
                                            <img src="assets/img/home3/testimonial-small.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-image-contents">
                                            <h4 className="testimonial-name">Mensx Deuoox</h4>
                                            <p className="common-para">Client Voice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonials-three">
                                    <div className="testimonial-quotes">
                                        <img src="assets/img/home1/testimonial-icon.png" alt="" />
                                    </div>
                                    <span className="testimonial-para"> here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordwhich don't look even accompanied by English 
                                        <br /> versions from the 1914  </span>
                                    <div className="testimonial-details">
                                        <div className="details-image">
                                            <img src="assets/img/home3/testimonial-small.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-image-contents">
                                            <h4 className="testimonial-name">Mensx Deuoox</h4>
                                            <p className="common-para">Client Voice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonials-three">
                                    <div className="testimonial-quotes">
                                        <img src="assets/img/home1/testimonial-icon.png" alt="" />
                                    </div>
                                    <span className="testimonial-para"> here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wordwhich don't look even accompanied by English 
                                        <br /> versions from the 1914  </span>
                                    <div className="testimonial-details">
                                        <div className="details-image">
                                            <img src="assets/img/home3/testimonial-small.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-image-contents">
                                            <h4 className="testimonial-name">Mensx Deuoox</h4>
                                            <p className="common-para">Client Voice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* =====>> Testimonial Area Three End <<===== 
            =========================== */}
            {/* =====>> Blog Area Three Starts <<===== 
            =========================== */}
            {/* <section className="blog-area-three pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title section-title-three">
                                <h2 className="section-heading"> Our Recent <span className="heading-light"> Posts </span> </h2>
                                <p className="section-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-lg-5 mt-4">
                        <div className="col-lg-12 mt-4">
                            <div className="blog-slider">
                                <div className="single-blog-three">
                                    <div className="blog-images">
                                        <a href="blog-details.html"> <img src="assets/img/home3/blog1.jpg" alt="" /> </a>
                                        <div className="blog-dates">
                                            <h2 className="blog-date"> 03 </h2>
                                            <span className="blog-month"> May </span>
                                        </div>
                                    </div>
                                    <div className="blog-contents">
                                        <ul className="blog-tags">
                                            <li>
                                                <a href="blog-details.html"> <img src="assets/img/home3/blog-tag.jpg" alt="" /> Meeila Exo </a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html"> <i className="las la-comment"></i> 6 Comments </a>
                                            </li>
                                        </ul>
                                        <h4 className="blog-title"> <a href="blog-details.html"> Contrary to popular belieorem Ipsum is 
                                            not simply random text.  </a> </h4>
                                    </div>
                                    <a href="blog-details.html" className="btn--custom btn--singles"> Read More</a>
                                </div>
                                <div className="single-blog-three">
                                    <div className="blog-images">
                                        <a href="blog-details.html"> <img src="assets/img/home3/blog2.jpg" alt="" /> </a>
                                        <div className="blog-dates">
                                            <h2 className="blog-date"> 06 </h2>
                                            <span className="blog-month"> May </span>
                                        </div>
                                    </div>
                                    <div className="blog-contents">
                                        <ul className="blog-tags">
                                            <li>
                                                <a href="blog-details.html"> <img src="assets/img/home3/blog-tag.jpg" alt="" /> Meella Exo </a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html"> <i className="las la-comment"></i> 6 Comments </a>
                                            </li>
                                        </ul>
                                        <h4 className="blog-title"> <a href="blog-details.html"> But I must explain to you how all this staken idea of denouncing  </a> </h4>
                                    </div>
                                    <a href="blog-details.html" className="btn--custom btn--singles"> Read More</a>
                                </div>
                                <div className="single-blog-three">
                                    <div className="blog-images">
                                        <a href="blog-details.html"> <img src="assets/img/home3/blog1.jpg" alt="" /> </a>
                                        <div className="blog-dates">
                                            <h2 className="blog-date"> 09 </h2>
                                            <span className="blog-month"> May </span>
                                        </div>
                                    </div>
                                    <div className="blog-contents">
                                        <ul className="blog-tags">
                                            <li>
                                                <a href="blog-details.html"> <img src="assets/img/home3/blog-tag.jpg" alt="" /> Meeila Exo </a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html"> <i className="las la-comment"></i> 6 Comments </a>
                                            </li>
                                        </ul>
                                        <h4 className="blog-title"> <a href="blog-details.html"> Contrary to popular belieorem Ipsum is 
                                            not simply random text.  </a> </h4>
                                    </div>
                                    <a href="blog-details.html" className="btn--custom btn--singles"> Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* =====>> Testimonial Area Three End <<===== 
            =========================== */}
            {/* =====>> Brands Area Two Starts <<===== 
            =========================== */}
            {/* <div className="brands-area-two">
                <div className="container">
                    <div className="row justify-content-lg-end">
                        <div className="col-lg-9">
                            <div className="brands-two-slider">
                                <div className="single-brands">
                                    <img src="assets/img/home3/brands1.png" alt="" />
                                </div>
                                <div className="single-brands">
                                    <img src="assets/img/home3/brands2.png" alt="" />
                                </div>
                                <div className="single-brands">
                                    <img src="assets/img/home3/brands3.png" alt="" />
                                </div>
                                <div className="single-brands">
                                    <img src="assets/img/home3/brands2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Body