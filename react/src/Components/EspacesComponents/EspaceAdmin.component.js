import React, { Component } from 'react'
import ListEtudiant from './ListEtudiant.component.jsx';
import ListEntreprise from './ListEntreprise.component.jsx';


export default class EspaceAdmin extends Component { 
    //<ListEtudiant />
    //<ListEntreprise />
    render() {
        return (
            <div>
            <h1>Welcome to the Admin Dashboard</h1>
           
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="/ListEtudiant" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Consulter la liste des Etudiants </a>
                    <br></br>
                    <br></br>
                    <a href="/ListEntreprise" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Consulter la liste des Expoasants </a>
                    <br></br>
                    <br></br>
                    <a href="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Voir des pourcentages et leur analyse </a>
                    <br></br>
                    <br></br>
            
            </div>
        );
    }
}