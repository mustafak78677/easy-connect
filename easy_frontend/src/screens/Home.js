import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

function Home() {
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    return (
        <>
            {/*  ===========================
            =====>> Top Preloader <<=====  */}
            {/* <div id="preloader">
                <img src="assets/img/preloader.gif" alt="" />
            </div> */}
            {/* ===========================
            =====>> End Preloader <<===== */}

            {/* =====>> Header-area <<===== 
            =========================== */}
            
            {/* SearcBar */}
            <div className="search-bar search-bar-three">
                <form className="menu-search-form" action="#">
                    <div className="search-close"> <i className="las la-times"></i> </div>
                    <input className="item-search" type="text" placeholder="Search Here....." />
                </form>
                <div className="close-toggle-body"></div>
            </div>
            {/* End SearchBar */}
            {/* =====>> End Header-area <<===== 
            =========================== */}
            <Header userInfo={userInfo} />
            {/* =====>> Banner Area Three Starts <<===== 
            =========================== */}
            <Body userInfo={userInfo} />
            {/* =====>> Brands Area Two End <<===== 
            =========================== */}
            {/* =====>> Footer Area Three Start <<===== 
            =========================== */}
            <Footer />
            {/* =====>> Footer Area Three End <<===== 
            =========================== */}
            {/* =====>> Scroll top <<===== 
            =========================== */}
            <a href="#" className="scroll-top scroll-top-three show" id="scroll-top">
                <i className="arrow-top las la-angle-up"></i>
                <i className="arrow-bottom las la-angle-double-up"></i>
            </a>

            {/* =====>> End Scroll top <<===== 
            ===========================  */}
        </>
    )
}

export default Home