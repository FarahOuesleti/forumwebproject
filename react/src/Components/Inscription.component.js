import React, { Component } from 'react' ;

export default class Inscription extends Component {

    render() {
            return(
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2> Bonjour ! Vous souhaitez vous inscrire en tant que : </h2>
                    <br></br>
                    <br></br>
                    <a href="/InscriptionEtudiant" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Etudiant</a>
                    <br></br>
                    <br></br>
                    <a href="/InscriptionExposant" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Expoasant</a>
                    <br></br>
                    <br></br>
                    <a href="/InscriptionAdmin" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Administrateur</a>
                    <br></br>
                    <br></br>
                </div>
            );
    }
}