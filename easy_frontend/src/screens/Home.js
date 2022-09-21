import React from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'


function Home({isStaff}) {

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
            
            {/* End SearchBar */}
            {/* =====>> End Header-area <<===== 
            =========================== */}
            {/* =====>> Banner Area Three Starts <<===== 
            =========================== */}
            <Body isStaff={isStaff} />
            {/* =====>> Brands Area Two End <<===== 
            =========================== */}
            {/* =====>> Footer Area Three Start <<===== 
            =========================== */}
            <Footer />
            {/* =====>> Footer Area Three End <<===== 
            =========================== */}
            {/* =====>> Scroll top <<===== 
            =========================== */}
            <a href="javascript(void)" className="scroll-top scroll-top-three show" id="scroll-top">
                <i className="arrow-top las la-angle-up"></i>
                <i className="arrow-bottom las la-angle-double-up"></i>
            </a>

            {/* =====>> End Scroll top <<===== 
            ===========================  */}
        </>
    )
}

export default Home