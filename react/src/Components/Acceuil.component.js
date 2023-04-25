import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EspaceAdmin from './EspacesComponents/EspaceAdmin.component';
import EspaceEtudiant from './EspacesComponents/EspaceEtudiant.component';
import EspaceExposant from './EspacesComponents/EspaceExposant.component';

export default class Acceuil extends Component {
    render() {
        return (
            <div>
                <EspaceEtudiant />
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <footer>
                    <img src="téléchargé.png" alt="FEE" width="100%"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                </footer>
            </div>
        );
    }
}
