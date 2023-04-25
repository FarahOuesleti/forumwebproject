import React, { Component } from 'react';
import OffreStageService from '../../Services/OffreStageService.js';

export default class ListeOffreStage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            OffreStage: []
        };}

      componentDidMount(){
        OffreStageService.getOffreStages().then((response) => {
        
          this.setState({ OffreStage: response.data });
        });}
      
    
    render() {

        console.log(this.state.OffreStage)
        return (<div>
                <h2 className="text-center">OffreStage List</h2>
                <div className="row"><table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Nom du Stage </th>
                                <th> Type du Stage </th>
                                <th> Durée du Stage </th>
                                <th> Date Début du Stage </th>
                                <th> Cible des Etudiants </th>
                                <th> Competences Requises </th>
                                <th> Competences Supplementaires </th>
                                <th> Descriptif </th>
                                <th> Type </th>
                                <th> disponibiltés entretien </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.OffreStage.map((OffreStage) => (
                            <tr key= {OffreStage.StageID}>
                                <td> {OffreStage.StageName }</td>
                                <td> {OffreStage.StageType }</td>
                                <td> {OffreStage.StageDuree }</td>
                                <td> {OffreStage.StageDateDebut }</td>
                                <td> {OffreStage.CibleEtudiants }</td>
                                <td> {OffreStage.CompetencesRequises }</td>
                                <td> {OffreStage.CompetencesSupplementaires }</td>
                                <td> {OffreStage.DescriptifStage }</td>
                                <td> {OffreStage.DispoEntretien }</td>
                            </tr>))}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
}

