import React, { Component } from 'react' ;
import {Link} from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;

export default class NavbarShort extends Component {
    render() {
        return(

            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                    <a className='navbar-brand' href="http://www.enicarthage.rnu.tn/fr/actualite/consultation-06-2023/1355" target="_blank"  rel="noreferrer"> <img src="./blue.png" style={{width:"100px", height:"100px"}} alt='Enicarthage Forum' /> </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/"> &nbsp; Acceuil &nbsp; </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Inscription"> &nbsp; Créer un compte &nbsp; </Link>
                        </li> 
                        <li >
                            <Link to="/Login" className="nav-item"> &nbsp; Connectez-vous !  &nbsp; </Link> 
                        </li> 
                        
                    </ul>
                </nav>
            </div>
)
}
}
