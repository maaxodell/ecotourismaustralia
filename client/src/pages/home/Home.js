import React from 'react';

import './main.css';

import bubble1 from "./bubble1.jpg";
import bubble2 from "./bubble2.jpg";
import bubble3 from "./bubble3.jpg";

export default function Home() {
    return (
        <html>
            <body>
                <div id="headntitle">
                    <nav className="menu">
                        <ol>
                            <li className="menu-item"><a href="#0">About Us</a></li>
                            <li className="menu-item">
                                <a href="#0">What We Do</a>
                                <ol className="sub-menu">
                                    <li className="menu-item"><a href="#0">Big Widgets</a></li>
                                    <li className="menu-item"><a href="#0">Bigger Widgets</a></li>
                                    <li className="menu-item"><a href="#0">Huge Widgets</a></li>
                                </ol>
                            </li>
                            <li className="menu-item">
                                <a href="#0">Our Community</a>
                                <ol className="sub-menu">
                                    <li className="menu-item"><a href="#0">Shishkabobs</a></li>
                                    <li className="menu-item"><a href="#0">BBQ kabobs</a></li>
                                    <li className="menu-item"><a href="#0">Summer kabobs</a></li>
                                </ol>
                            </li>
                            <li className="menu-item">
                                <a href="#0">News</a>
                                <ol className="sub-menu">
                                    <li className="menu-item"><a href="#0">Enter information</a></li>
                                    <li className="menu-item"><a href="#0">Enter information</a></li>
                                    <li className="menu-item"><a href="#0">Enter information</a></li>
                                </ol>
                            </li>
                            <li className="menu-item"><a href="#0">Member Login</a></li>
                            <li className="menu-item"><a href="#0">Search</a></li>
                        </ol>
                    </nav>

                    <div id="topbackground" style={{paddingLeft:"16px"}}>
                        <h2 id="bottomtitle" style={{color:"white"}}>Ecotourism Australia</h2>

                    </div>
                </div>
                <div style={{width:"100%"}}>
                    <h2 style={{textAlign:"center", width:"100%"}}> Are You A?</h2>
                </div>
                <div className="row">

                    <div className="column">

                        <div className="bubble">
                            <a target="_blank" style={{position: "relative"}}
                                href="file:///C:/Users/BLAKE/OneDrive/Documents/QUT%20course/2021/capstone/business1.html">
                                <img src={bubble1} className="imghome" alt="Cinque Terre" width="200" height="200" />
                            </a>
                            <h2 style={{color:"black"}} className="bubT1" style={{left:"100px"}}>Business</h2>
                        </div>
                    </div>
                    <div className="column">

                        <div className="bubble">
                            <a target="_blank" href="bubble2.jpg">
                                <img src={bubble2} className="imghome" alt="Cinque Terre" width="200" height="200" />
                            </a>
                            <h2 style={{color:"black"}} className="bubT2">Destination</h2>
                        </div>
                    </div>
                    <div className="column">

                        <div className="bubble">
                            <a target="_blank"
                                href="file:///C:/Users/BLAKE/OneDrive/Documents/QUT%20course/2021/capstone/guidemain.html">
                                <img src={bubble3} className="imghome" alt="Cinque Terre" width="200" height="200" />
                            </a>
                            <h2 style={{color:"black"}} className="bubT3">Traveller</h2>

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
        </html >
    )
}