import React from 'react';
import '../App.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark" style={{backgroundColor: "#1f2937"}}>
    <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{color : "#d8b3fe"}}><strong>CodeCampus</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Programming Languages </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/java">Java</a></li>
                    <li><a className="dropdown-item" href="/c++">C++</a></li>
                    <li><a className="dropdown-item" href="/python">Python</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> CS Fundamentals </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/os">Operating Systems</a></li>
                    <li><a className="dropdown-item" href="/cn">Computer Networks</a></li>
                </ul>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  );
}

export default Navbar;
