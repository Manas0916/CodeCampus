import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import moon from './images/DMI/moon.png';
import sun from './images/DMI/sun.png';
// import PropTypes from 'prop-types';


const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top shadow-lg`} data-bs-theme="dark">
            <div className="container-fluid">
                {/* navbar color */}
                {/* style={{color : "#d8b3fe"}} */}
                <Link className="navbar-brand" to="/" style={{color: props.mode==='dark'?'#d8b3fe':'#9235e4'}}><b><strong>CodeCampus</strong></b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">HOME</Link> </li>
                        <li className="nav-item"> <Link className="nav-link active" to="/about">ABOUT</Link> </li>

                        <li className="nav-item dropdown" >
                            <Link className="nav-link active dropdown-toggle" to="/" role="button" data-mdb-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" id="navbarDropdownMenuLink" aria-expanded="false"> PROGRAMMING LANGUAGES </Link>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                                <li>
                                    <Link className="dropdown-item" to='/'> C &raquo;</Link>
                                    <ul className="dropdown-submenu dropdown-menu">
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/c-programming-language/?ref=ghm">Learn C Tutorial</Link></li>
                                        <li>
                                            <Link className="dropdown-item" to="/">Practice Coding Questions &raquo;</Link>
                                            <ul className="dropdown-submenu dropdown-menu">
                                                <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/c?badge_type=c&filters%5Bdifficulty%5D%5B%5D=easy'>Easy</Link></li>
                                                <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/c?badge_type=c&filters%5Bdifficulty%5D%5B%5D=medium'>Medium</Link></li>
                                                <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/c?badge_type=c&filters%5Bdifficulty%5D%5B%5D=hard'>Hard</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
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
                                    <Link className="dropdown-item" to='/'> JAVA &raquo;</Link>
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
                                    <Link className="dropdown-item" to='/'> PYTHON &raquo;</Link>
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
                            <Link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> CS FUNDAMENTALS </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/operating-system-interview-questions/">OPERATING SYSTEMS</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/networking-interview-questions/">COMPUTER NETWORKS</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/dbms-interview-questions/">DBMS</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.interviewbit.com/oops-interview-questions/">OOPS CONCEPTS</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> WEB DEVELOPMENT </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" target='_blank' to="https://www.codewithharry.com/tutorial/html-home/">HTML</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.codewithharry.com/tutorial/css-home/">CSS</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.codewithharry.com/tutorial/js/">JAVASCRIPT</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item"> <Link className="nav-link active" target='_blank' to="https://www.codewithharry.com/tutorial/php/">PHP</Link> </li>

                        <li className="nav-item"> <Link className="nav-link active" target='_blank' to="https://www.codewithharry.com/tutorial/react-home/">REACT<b>.</b>JS</Link> </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> SQL </Link>
                            <ul className="dropdown-submenu dropdown-menu">
                                <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/sql-tutorial/?ref=ghm">Learn SQL Tutorial</Link></li>
                                <li>
                                    <Link className="dropdown-item" to="/">Practice Coding Questions &raquo;</Link>
                                    <ul className="dropdown-submenu dropdown-menu">
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/sql?badge_type=sql&filters%5Bdifficulty%5D%5B%5D=easy'>Easy</Link></li>
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/sql?badge_type=sql&filters%5Bdifficulty%5D%5B%5D=medium'>Medium</Link></li>
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/sql?badge_type=sql&filters%5Bdifficulty%5D%5B%5D=hard'>Hard</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item"> <Link className="nav-link active" to="/virtuallab">VIRTUAL LABS</Link> </li>

                    </ul>
                </div>
                <div className="mx-3">
                    {props.mode==='dark'?<img src={sun} alt="" width="20px"/>:''}
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?<img src={sun} alt="" width="20px" />:''}</label> */}
                    <input className="form-check-input" aria-checked='false' style={{ cursor: 'pointer' }} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?<img src={moon} alt="" width="20px" />:''}</label> */}
                </div>
                <div className="mx-2">
                    {props.mode==='light'?<img src={moon} alt="" width="20px"/>:''}
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
