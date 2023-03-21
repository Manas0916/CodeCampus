import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';


const Navbar = (props) => {
    return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            {/* navbar color */}
            {/* style={{color : "#d8b3fe"}} */}
            <Link className="navbar-brand" to="/"><b><strong>CodeCampus</strong></b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">Home</Link> </li>
                    <li className="nav-item"> <Link className="nav-link active" to="/about">About</Link> </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link active dropdown-toggle" to="/" role="button" data-mdb-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" id="navbarDropdownMenuLink" aria-expanded="false"> Programming Languages </Link>

                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li >
                                <Link className="dropdown-item" to='/'> C++ &raquo;</Link>
                                <ul className="dropdown-submenu dropdown-menu">
                                    <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/c-plus-plus/?ref=shm">Learn C++ Tutorial</Link></li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Practice Coding Questions &raquo;</Link>
                                        <ul className="dropdown-submenu dropdown-menu">
                                            <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://practice.geeksforgeeks.org/explore?page=1&category[]=CPP&difficulty[]=-1&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab'>Basic</Link></li>
                                            <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://practice.geeksforgeeks.org/explore?page=1&category[]=CPP&difficulty[]=0&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab'>Easy</Link></li>
                                            <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://practice.geeksforgeeks.org/explore?page=1&category[]=CPP&difficulty[]=1&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab'>Medium</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li >
                                <Link className="dropdown-item" to='/'> Java &raquo;</Link>
                                <ul className="dropdown-submenu dropdown-menu">
                                    <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/java-tutorial/">Learn Java Tutorial</Link></li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Practice Coding Questions &raquo;</Link>
                                        <ul className="dropdown-submenu dropdown-menu">
                                            <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='http://bit.ly/3JpS7ki'>Basic</Link></li>
                                            <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='http://bit.ly/3L9T4yq'>Easy</Link></li>
                                            <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='http://bit.ly/3J0XZzf'>Medium</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li >
                                <Link className="dropdown-item" to='/'> Python &raquo;</Link>
                                <ul className="dropdown-submenu dropdown-menu">
                                    <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/python-programming-language/">Learn Python Tutorial</Link></li>
                                    <li>
                                        <Link className="dropdown-item" to="https://www.geeksforgeeks.org/python-exercises-practice-questions-and-solutions/" target='_blank' rel='noreferrer'>Practice Coding Questions</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> CS Fundamentals </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/operating-system-interview-questions/">Operating Systems</Link></li>
                            <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/networking-interview-questions/">Computer Networks</Link></li>
                            <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/dbms-interview-questions/">DBMS</Link></li>
                            <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/oops-interview-questions/">OOPS Concepts</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"> <Link className="nav-link active" to="/virtuallab">Virtual Labs</Link> </li>
                </ul>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                <input className="form-check-input" aria-checked = 'false' style ={{cursor: 'pointer'}} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
        </div>
        
    </nav>
    );
}

export default Navbar;
