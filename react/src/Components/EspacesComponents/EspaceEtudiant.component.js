import React, { Component } from 'react'
import ListEntreprise from './ListEntreprise.component';
import ListeOffreStage from './ListeOffreStage.component';


export default class EspaceEtudiant extends Component { 
    render() {
        //<ListOffreStage />
        //<ListEntreprise />
        return (
            <div>
            <h1>Bonjour dans votre Espace Etudiant </h1>
            
            
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="/ListeOffreStage" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Consulter la liste des Offres de Stage </a>
                    <br></br>
                    <br></br>
                    <a href="/ListEntreprise" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Consulter la liste des Exposants </a>
                    <br></br>
                    <br></br>
                    <a href="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Attentes Forum </a>
                    <br></br>
                    <br></br>
                    <a href="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> feedback Forum </a>
                    <br></br>
                    <br></br>
            
            
            </div>
        );
    }
    
}