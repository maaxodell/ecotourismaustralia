import React from 'react';

// styles and assets
//import "./homecss.css";
import logo from "../../assets/images/logo.png"

export default function Home() {
    return (
        <body>
            <nav>
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="logo" />
                    </li>
                    <li>
                        <a href="about.html">About Us</a>
                    </li>
                    <li>
                        <a href="whatwedo.html">What We Do</a>
                    </li>
                    <li>
                        <a href="ourcommunity.html">Our Community</a>
                    </li>
                    <li>
                        <a href="news.html">News</a>
                    </li>
                    <li>
                        <a href="login.html">Member Login</a>
                    </li>
                    <li>
                        <a href="search.html">Search</a>
                    </li>
                </ul>
            </nav>

            <h1>Are you a...</h1>
            <div className="box1">
                <h2>Destination</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.</p>
                <a href="home.html">Go to site...</a>
            </div>
            <div className="box2">
                <h2>Business</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.</p>
                <a href="home.html">Go to site...</a>
            </div>
            <div className="box3">
                <h2>Traveller</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.</p>
                <a href="search.html">Go to site...</a>
            </div>

            <footer className="landingfooter">
                <p> Ecotourism Australia <br /> Last Updated September 2021</p>
            </footer>

        </body>
    )
}