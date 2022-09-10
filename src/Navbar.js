import React from 'react';
import image from './image.jpeg';
const Navbar = () => (
    <>
        <nav className="main-nav">
            <div className="logo">
                <h2>Shortly</h2>
            </div>
            <div className="menu-link">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>

                </ul>
            </div>
            <div className="login">
                <ul>

                    <button className="btn">Login</button>


                    <button className="btn" style={{ backgroundColor: "#20B2AA" }}>Sign up</button>

                </ul>
            </div>

        </nav>
        <section className="hero-section">
            <img className="imagee" src="https://clipartcraft.com/images/computer-clipart-kid-13.png" alt="" />
            <section className="hero-section ">

                <h1> More than just <br /> shorter links</h1>

                <p>lets do some exciting stuff</p>
                <button className="btn" style={{ backgroundColor: "#20B2AA", width: "100px", marginLeft: "97px" }}>Get Started</button>
            </section>

        </section>
    </>
);

export default Navbar;