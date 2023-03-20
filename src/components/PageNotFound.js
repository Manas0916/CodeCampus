import React from 'react'
import PageNotFounds from './images/error404.png'
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="container d-flex flex-column align-items-center mt-2">
            <h2 className="text-center" style={{fontWeight: "bolder", fontSize: "3rem"}}>404: The Page you are Looking for isn't here</h2>
            <p className="text-center" style={{ fontSize: "0.9rem"}}><strong>You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation</strong></p>
            <img className="img-fluid mt-2" src={PageNotFounds} alt="page not found" style={{width: "50%"}} />
            <Link className="btn btn-outline-light mx-2 my-3 cursor-pointer" to={"/"} style={{"backgroundColor": "#8430D3", "color":"white"}}>Go Back to Home</Link>
        </div>
    )
}

export default PageNotFound;