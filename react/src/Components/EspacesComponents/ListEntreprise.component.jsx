import React, { Component } from 'react';
import EntrepriseService from '../../Services/EntrepriseService';

class ListEntreprise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entreprise: []
        };
    }

    componentDidMount() {
        EntrepriseService.getEntreprises().then((response) => {

            this.setState({ entreprise: response.data });
        });
    }


    render() {

        console.log(this.state.entreprise)
        return (
            <div>
                <h2 className="text-center">Entreprise List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> nom de l'entreprise </th>
                                <th> Nom de Represantant </th>
                                <th> prenom de Represantant </th>
                                <th> Email </th>
                                <th> linkedIn </th>
                                <th> Adresse De l'Entreprise </th>
                                <th> Contact </th>
                                <th> Pack choisis </th>
                                <th> Type </th>
                                <th> Domaine D'activite </th>
                                <th> Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.entreprise.map((entreprise) => (
                                <tr key={entreprise.ExpID}>
                                    <td> {entreprise.ExpName} </td>
                                    <td> {entreprise.CEOName}</td>
                                    <td> {entreprise.CEOLastName}</td>
                                    <td> {entreprise.ExpMail}</td>
                                    <td> {entreprise.ExpLinkedIn}</td>
                                    <td> {entreprise.ExpLadress}</td>
                                    <td> {entreprise.ExpTlf}</td>
                                    <td> {entreprise.ExpPack}</td>
                                    <td> {entreprise.ExpType}</td>
                                    <td> {entreprise.ExpDomaineActivite}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default ListEntreprise;
