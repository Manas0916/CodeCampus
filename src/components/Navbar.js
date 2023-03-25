import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import moon from './images/DMI/moon.png';
import sun from './images/DMI/sun.png';


const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top shadow-lg`} data-bs-theme="dark">
            <div className="container-fluid">
                {/* navbar color */}
                {/* style={{color : "#d8b3fe"}} */}
                <Link className="navbar-brand" to="/" style={{ color: props.mode === 'dark' ? '#d8b3fe' : '#9235e4' }}><b><strong>CodeCampus</strong></b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item"> <Link className="nav-link active title" aria-current="page" to="/">HOME</Link> </li>
                        <li className="nav-item"> <Link className="nav-link active title" to="/about">ABOUT</Link> </li>

                        <li className="nav-item dropdown" >
                            <Link className="nav-link active dropdown-toggle title" to="/" role="button" data-mdb-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" id="navbarDropdownMenuLink" aria-expanded="false"> PROGRAMMING LANGUAGES </Link>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                <li>
                                    <Link className="dropdown-item" to='/' style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`} > C &raquo;</Link>
                                    <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}} >
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/c-programming-language/?ref=ghm" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>LEARN C TUTORIAL</Link></li>
                                        <li>
                                            <Link className="dropdown-item" to="/" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>PRACTICE CODING QUESTIONS &raquo;</Link>
                                            <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/c?badge_type=c&filters%5Bdifficulty%5D%5B%5D=easy' style={{color: props.mode==='dark'?'#9235e4':'black'}}>EASY</Link></li>
                                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/c?badge_type=c&filters%5Bdifficulty%5D%5B%5D=medium' style={{color: props.mode==='dark'?'#9235e4':'black'}}>MEDIUM</Link></li>
                                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/c?badge_type=c&filters%5Bdifficulty%5D%5B%5D=hard' style={{color: props.mode==='dark'?'#9235e4':'black'}}>HARD</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to='/' style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}> C++ &raquo;</Link>
                                    <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/c-plus-plus/?ref=shm" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>LEARN C++ TUTORIAL</Link></li>
                                        <li>
                                            <Link className="dropdown-item" to="/" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>PRACTICE CODING QUESTIONS &raquo;</Link>
                                            <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                                <li><Link className="dropdown-item" target='_blank' rel='noreferrer' id={`${props.mode==='dark'?'a':'b'}`} to='https://practice.geeksforgeeks.org/explore?page=1&category[]=CPP&difficulty[]=-1&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab' style={{color: props.mode==='dark'?'#9235e4':'black'}}>BASIC</Link></li>
                                                <li><Link className="dropdown-item" target='_blank' rel='noreferrer' id={`${props.mode==='dark'?'a':'b'}`} to='https://practice.geeksforgeeks.org/explore?page=1&category[]=CPP&difficulty[]=0&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab' style={{color: props.mode==='dark'?'#9235e4':'black'}}>EASY</Link></li>
                                                <li><Link className="dropdown-item" target='_blank' rel='noreferrer' id={`${props.mode==='dark'?'a':'b'}`} to='https://practice.geeksforgeeks.org/explore?page=1&category[]=CPP&difficulty[]=1&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab' style={{color: props.mode==='dark'?'#9235e4':'black'}}>MEDIUM</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li >
                                    <Link className="dropdown-item" to='/' style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}> JAVA &raquo;</Link>
                                    <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/java-tutorial/" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>LEARN JAVA TUTORIAL</Link></li>
                                        <li>
                                            <Link className="dropdown-item" to="/" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>PRACTICE CODING QUESTIONS &raquo;</Link>
                                            <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' rel='noreferrer' to='http://bit.ly/3JpS7ki' style={{color: props.mode==='dark'?'#9235e4':'black'}}>BASIC</Link></li>
                                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' rel='noreferrer' to='http://bit.ly/3L9T4yq' style={{color: props.mode==='dark'?'#9235e4':'black'}}>EASY</Link></li>
                                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' rel='noreferrer' to='http://bit.ly/3J0XZzf' style={{color: props.mode==='dark'?'#9235e4':'black'}}>MEDIUM</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li >
                                    <Link className="dropdown-item" to='/' style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}> PYTHON &raquo;</Link>
                                    <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                        <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/python-programming-language/" style={{color: props.mode==='dark'?'#9235e4':'black'}}>LEARN PYTHON TUTORIAL</Link></li>
                                        <li>
                                            <Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} to="https://www.geeksforgeeks.org/python-exercises-practice-questions-and-solutions/" target='_blank' rel='noreferrer' style={{color: props.mode==='dark'?'#9235e4':'black'}}>PRACTICE CODING QUESTIONS</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle title" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> CS FUNDAMENTALS </Link>
                            <ul className="dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' to="https://www.interviewbit.com/operating-system-interview-questions/" style={{color: props.mode==='dark'?'#9235e4':'black'}}>OPERATING SYSTEMS</Link></li>
                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' to="https://www.interviewbit.com/networking-interview-questions/" style={{color: props.mode==='dark'?'#9235e4':'black'}}>COMPUTER NETWORKS</Link></li>
                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' to="https://www.interviewbit.com/dbms-interview-questions/" style={{color: props.mode==='dark'?'#9235e4':'black'}}>DBMS</Link></li>
                                <li><Link className="dropdown-item" id={`${props.mode==='dark'?'a':'b'}`} target='_blank' to="https://www.interviewbit.com/oops-interview-questions/" style={{color: props.mode==='dark'?'#9235e4':'black'}}>OOPS CONCEPTS</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle title" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> WEB DEVELOPMENT </Link>
                            <ul className="dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.codewithharry.com/tutorial/html-home/" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>HTML</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.codewithharry.com/tutorial/css-home/" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>CSS</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.codewithharry.com/tutorial/js/" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>JAVASCRIPT</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/bootstrap5/index.php" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>BOOTSTRAP</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.youtube.com/playlist?list=PLu0W_9lII9agwhy658ZPA0MTStKUJTWPi" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>GIT</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item"> <Link className="nav-link active title" target='_blank' to="https://www.codewithharry.com/tutorial/php/">PHP</Link> </li>

                        <li className="nav-item"> <Link className="nav-link active title" target='_blank' to="https://www.codewithharry.com/tutorial/react-home/">REACT JS</Link> </li>

                        <li className="nav-item"> <Link className="nav-link active title" target='_blank' to="https://www.w3schools.com/nodejs/default.asp">NODE JS</Link> </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle title" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> SQL </Link>
                            <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to="https://www.geeksforgeeks.org/sql-tutorial/?ref=ghm" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>LEARN SQL TUTORIAL</Link></li>
                                <li>
                                    <Link className="dropdown-item" to="/" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>PRACTICE CODING QUESTIONS &raquo;</Link>
                                    <ul className="dropdown-submenu dropdown-menu" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}}>
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/sql?badge_type=sql&filters%5Bdifficulty%5D%5B%5D=easy' style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>EASY</Link></li>
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/sql?badge_type=sql&filters%5Bdifficulty%5D%5B%5D=medium' style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>MEDIUM</Link></li>
                                        <li><Link className="dropdown-item" target='_blank' rel='noreferrer' to='https://www.hackerrank.com/domains/sql?badge_type=sql&filters%5Bdifficulty%5D%5B%5D=hard' style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>HARD</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown" >
                            <Link className="nav-link active dropdown-toggle title" to="/" role="button" data-mdb-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" id="navbarDropdownMenuLink" aria-expanded="false"> QUIZZES </Link>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor: props.mode==='dark'?'#505266':'white', borderRadius: '10px'}} >
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/c/c_quiz.php" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>C QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/cpp/cpp_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>C++ QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/java/java_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>JAVA QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/python/python_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>PYTHON QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/sql/sql_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>SQL QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/html/html_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>HTML QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/css/css_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>CSS QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/js/js_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>JAVASCRIPT QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/bootstrap5/bootstrap_quiz.php" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>BOOTSTRAP QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/git/git_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>GIT QUIZ</Link></li>
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/php/php_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>PHP QUIZ</Link></li>  
                                <li><Link className="dropdown-item" target='_blank' to="https://www.w3schools.com/react/react_quiz.asp" style={{color: props.mode==='dark'?'#9235e4':'black'}} id={`${props.mode==='dark'?'a':'b'}`}>REACT JS QUIZ</Link></li>  
                            </ul>
                        </li>

                        <li className="nav-item"> <Link className="nav-link active title" to="/virtuallab">VIRTUAL LABS</Link> </li>
                    </ul>
                    <div className='mx-3'>
                        {props.mode === 'dark' ? <img src={sun} alt="" style={{ cursor: 'pointer', width: "30px" }} onClick={props.toggleMode} /> : <img src={moon} alt="" style={{ cursor: 'pointer', width: "30px" }} onClick={props.toggleMode} />}
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
