import React, { Component } from 'react';
import axios from 'axios';


export default class InscriptionExposant extends Component {


    constructor(props) {
        super(props);
        this.state = {
            //ExpID : 0 ,
            ExpMail: '',
            ExpPass: '',
            ExpName: '',
            CEOName: '',
            CEOLastName: '',
            ExpLinkedIn: '',
            ExpLadress: '',
            ExpTlf: '',
            ExpPack: '',
            ExpType: '',
            ExpDomaineActivite: '',
        }

        //this.OnChangeExpID = this.OnChangeExpID.bind(this);
        this.OnChangeExpMail = this.OnChangeExpMail.bind(this);
        this.OnChangeExpPass = this.OnChangeExpPass.bind(this);
        this.OnChangeExpName = this.OnChangeExpName.bind(this);
        this.OnChangeCEOName = this.OnChangeCEOName.bind(this);
        this.OnChangeCEOLastName = this.OnChangeCEOLastName.bind(this);
        this.OnChangeExpLinkedIn = this.OnChangeExpLinkedIn.bind(this);
        this.OnChangeExpLadress = this.OnChangeExpLadress.bind(this);
        this.OnChangeExpTlf = this.OnChangeExpTlf.bind(this);
        this.OnChangeExpPack = this.OnChangeExpPack.bind(this);
        this.OnChangeExpType = this.OnChangeExpType.bind(this);
        this.OnChangeExpDomaineActivite = this.OnChangeExpDomaineActivite.bind(this);

        this.OnSubmit = this.OnSubmit.bind(this);
    }

    componentDidMount() {
    }
    /*
        OnChangeExpID(e){
            this.setState({
                ExpID : e.target.value
            })
        }
        */
    OnChangeExpMail(e) {
        this.setState({
            ExpMail: e.target.value
        })
    }
    OnChangeExpPass(e) {
        this.setState({
            ExpPass: e.target.value
        })
    }
    OnChangeExpName(e) {
        this.setState({
            ExpName: e.target.value
        })
    }
    OnChangeCEOLastName(e) {
        this.setState({
            CEOLastName: e.target.value
        })
    }
    OnChangeCEOName(e) {
        this.setState({
            CEOName: e.target.value
        })
    }
    OnChangeExpLinkedIn(e) {
        this.setState({
            ExpLinkedIn: e.target.value
        })
    }
    
    OnChangeExpLadress(e) {
        this.setState({
            ExpLadress: e.target.value
        })
    }
    OnChangeExpTlf(e) {
        this.setState({
            ExpTlf: e.target.value
        })
    }
    OnChangeExpPack(e) {
        this.setState({
            ExpPack: e.target.value
        })
    }
    OnChangeExpType(e) {
        this.setState({
            ExpType: e.target.value
        })
    }
    OnChangeExpDomaineActivite(e) {
        this.setState({
            ExpDomaineActivite: e.target.value
        })
    }



    OnSubmit(e) {
        e.preventDefault();

        const Exposant = {
            //ExpID: this.state.ExpID,
            ExpMail: this.state.ExpMail,
            ExpPass: this.state.ExpPass,
            ExpName: this.state.ExpName,
            CEOName: this.state.CEOName,
            CEOLastName: this.state.CEOLastName,
            ExpLinkedIn: this.state.ExpLinkedIn,
            ExpLadress: this.state.ExpLadress,
            ExpTlf: this.state.ExpTlf,
            ExpPack: this.state.ExpPack,
            ExpType: this.state.ExpType,
            ExpDomaineActivite: this.state.ExpDomaineActivite,
        }

        axios.post('http://localhost:8080/api/v1/Entreprises', Exposant)
            .then(res => console.log(res.data));
        console.log("hello");
    }


    render() {
        return (
            <div className="container">

                <form onSubmit={this.OnSubmit}>

                    <div className="form-group">
                        <label htmlFor="Mail"> Mail de l'Entreprise :</label>
                        <input type="email"
                            required
                            className="form-control"
                            value={this.state.ExpMail}
                            onChange={this.OnChangeExpMail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password :</label>
                        <input type="Password"
                            required
                            className="form-control"
                            value={this.state.ExpPass}
                            onChange={this.OnChangeExpPass}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CandName"> Nom de l'Entreprise :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ExpName}
                            onChange={this.OnChangeExpName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CEOName"> Nom du représentant :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.CEOName}
                            onChange={this.OnChangeCEOName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CandSurname"> Surnom du représentant :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.CEOLastName}
                            onChange={this.OnChangeCEOLastName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Linkedin"> Lien LinkedIn de l'Entreprise :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ExpLinkedIn}
                            onChange={this.OnChangeExpLinkedIn}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Phone"> Numéro de Téléphone de l'Entreprise :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ExpTlf}
                            onChange={this.OnChangeExpTlf}
                        /> <br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adr"> Adresse siège :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ExpLadress}
                            onChange={this.OnChangeExpLadress}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pack"> Pack de collaboration Choisi par l'Entreprise :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ExpPack}
                            onChange={this.OnChangeExpPack}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type"> Type de votre Entreprise : Startup/PME/GE etc :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ExpType}
                            onChange={this.OnChangeExpType}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="DomaineActivite"> Domaine d'Activite de votre Entreprise :</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ExpDomaineActivite}
                            onChange={this.OnChangeExpDomaineActivite}
                        />
                    </div>




                    <button type="submit" className="btn btn-primary"> Ajouter Exposant </button>
                </form>

            </div>
        )
    }


}