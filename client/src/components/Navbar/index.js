import React from "react";

function Navbar(active) {
    return(
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="/">Google Book Search</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/saved">Saved Books</a>
                        </li>
                    </ul>
                </div>
            </nav>)}
            export default Navbar;