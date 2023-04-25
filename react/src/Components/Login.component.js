import React, { Component } from 'react' ;
import {Link} from 'react-router-dom' ;
import EtudiantLogin from "./LoginComponents/EtudiantLogin.Component"
import ExposantLogin from "./LoginComponents/ExposantLogin.Component"
import AdminLogin from "./LoginComponents/AdminLogin.Component"


export default class Login extends Component {

    render() {
        return(
            <div> 
                <br></br>
                    <br></br>
                    <br></br>
                    <h2> Bonjour ! Vous souhaitez vous authentifier en tant que : </h2>
                    <br></br>
                    <br></br>
                    <Link to="/EtudiantLogin" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Etudiant</Link>
                    <br></br>
                    <br></br>
                    <Link to="/ExposantLogin" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Exposant</Link>
                    <br></br>
                    <br></br>
                    <Link to="/AdminLogin" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Administrateur</Link>
                    <br></br>
                    <br></br>
               
            </div> 
               
            ) ;   
                    
            }
}
