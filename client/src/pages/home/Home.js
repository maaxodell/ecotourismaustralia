import React from 'react';

// styles and assets
import './style.css';
import bubble1 from "./bubble1.jpg";
import bubble2 from "./bubble2.jpg";
import bubble3 from "./bubble3.jpg";
import Logo from "../../assets/logos/taglineLogoWhite.png";

export default function Home() {
    return (
        <body>
            <div id="headntitle">
                <div id="topbackground">
                    <img src={Logo} style={{width:"1000px", paddingTop:"80px"}} alt="Ecotourism Australia Logo"/>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <h2 style={{ textAlign: "center", width: "100%" }}>Are You a...</h2>
            </div>

            <div className="row">
                <div className="column">
                    <div className="bubble">
                        <a target="_blank"
                            href="file:///C:/Users/BLAKE/OneDrive/Documents/QUT%20course/2021/capstone/business1.html">
                            <img src={bubble1} className="imghome" alt="Cinque Terre" width="200" height="200" />
                        </a>
                        <h2 style={{ color: "black" }} className="bubT1">Business</h2>
                    </div>
                </div>
                <div className="column">
                    <div className="bubble">
                        <a target="_blank" href="bubble2.jpg">
                            <img src={bubble2} className="imghome" alt="Cinque Terre" width="200" height="200" />
                        </a>
                        <h2 style={{ color: "black" }} className="bubT2">Destination</h2>
                    </div>
                </div>
                <div className="column">
                    <div className="bubble">
                        <a target="_blank"
                            href="file:///C:/Users/BLAKE/OneDrive/Documents/QUT%20course/2021/capstone/guidemain.html">
                            <img src={bubble3} className="imghome" alt="Cinque Terre" width="200" height="200" />
                        </a>
                        <h2 style={{ color: "black" }} className="bubT3">Traveller</h2>

                    </div>
                </div>

            </div>
            <div id="footer">
                <ul id="footerul">
                    <li className="footerlist"><a href="#contact">Contact Us</a></li>
                    <li className="footerlist"><a href="#news">News</a></li>
                    <li className="footerlist"><a href="#contact">Membership</a></li>
                    <li className="footerlist"><a href="#contact">Certification</a></li>
                    <li className="footerlistend"><a href="#about">About Us </a></li>
                </ul>
            </div>
        </body>
    )
}