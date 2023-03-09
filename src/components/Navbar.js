import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    //  navbar background color
    // style={{backgroundColor: "#1f2937"}}
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#e3f2fd"}}>
    <div className="container-fluid">
        {/* navbar color */}
        {/* style={{color : "#d8b3fe"}} */}
        <Link className="navbar-brand" to="/"><strong>CodeCampus</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">Home</Link> </li>
            <li className="nav-item"> <Link className="nav-link" to="/about">About</Link> </li>

            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-mdb-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" id="navbarDropdownMenuLink"  aria-expanded="false"> Programming Languages </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li ><Link className="dropdown-item" to="/c++">C++</Link></li>
                    <li><Link className="dropdown-item" to="/python">Python</Link></li>
                    <li >
                        <Link className="dropdown-item" to='/'> Java &raquo;</Link>
                        <ul className="dropdown-submenu dropdown-menu">
                            <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/java-tutorial/">Learn Java Tutorial</Link></li>
                            <li>
                                <Link className="dropdown-item" to="/">Practice Coding Questions &raquo;</Link>
                                <ul className="dropdown-submenu dropdown-menu">
                                    <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='http://bit.ly/3JpS7ki'>Basic</Link></li>
                                    <li><Link className="dropdown-item"  target='_blank' rel='noreferrer'to='http://bit.ly/3L9T4yq'>Easy</Link></li>
                                    <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='http://bit.ly/3J0XZzf'>Medium</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> CS Fundamentals </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/operating-system-interview-questions/">Operating Systems</Link></li>
                    <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/networking-interview-questions/">Computer Networks</Link></li>
                    <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/dbms-interview-questions/">DBMS</Link></li>
                    <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/oops-interview-questions/">OOPS Concepts</Link></li>
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
