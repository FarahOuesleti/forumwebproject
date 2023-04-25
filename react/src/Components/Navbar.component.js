import React, { Component } from 'react' ;
import {Link} from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;

export default class Navbar extends Component {
    render() {
        return(

            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                    <a className='navbar-brand' href="https://www.melkartje.com/" target="_blank"  rel="noreferrer"> <img src="./Melkart.png.png" style={{width:"100px", height:"100px"}} alt='MELKART JE' /> </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/"> &nbsp; Acceuil &nbsp; </Link>
                        </li> 
                        <li >
                            <Link to="/AddComp" className="nav-item"> &nbsp; Add Skill &nbsp; </Link> 
                        </li> 
                        <li className="nav-item">
                            <Link to="/AddDep" > &nbsp; Add Department &nbsp; </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AddCandid" > &nbsp; Add Candidate &nbsp; </Link>
                        </li>
                    </ul>
                </nav>
            </div>
)
}
}
