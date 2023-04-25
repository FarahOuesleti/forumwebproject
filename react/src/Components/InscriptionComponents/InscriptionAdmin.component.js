import React, { Component } from 'react';
import axios from 'axios';

export default class InscriptionAdmin extends Component {
    state = {
        AdmID: 0,
        AdmMail: '',
        AdmPass: ''
    }

    constructor(props) {
        super(props);

        this.OnChangeAdmID = this.OnChangeAdmID.bind(this);
        this.OnChangeAdmMail = this.OnChangeAdmMail.bind(this);
        this.OnChangeAdmPass = this.OnChangeAdmPass.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    componentDidMount() {
    }

    OnChangeAdmID(e) {
        this.setState({
            AdmID: e.target.value
        })
    }
    OnChangeAdmMail(e) {
        this.setState({
            AdmMail: e.target.value
        })
    }
    OnChangeAdmPass(e) {
        this.setState({
            AdmPass: e.target.value
        })
    }

    OnSubmit(e) {
        e.preventDefault();
        const Admin = {
            admID: this.state.AdmID,
            admMail: this.state.AdmMail,
            admPass: this.state.AdmPass,
        }

        axios.post('http://localhost:8080/api/v1/admins', Admin)
            .then(res => console.log(res.data));
        console.log("hello");
    }


    render() {
        return (
            <div className="container">

                <form onSubmit={this.OnSubmit}>

                    <div className="form-group">
                        <label htmlFor="Mail"> Mail de l'Administrateur :</label>
                        <input type="email"
                            required
                            className="form-control"
                            value={this.state.AdmMail}
                            onChange={this.OnChangeAdmMail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password Administrateur :</label>
                        <input type="Password"
                            required
                            className="form-control"
                            value={this.state.AdmPass}
                            onChange={this.OnChangeAdmPass}
                        />
                    </div>



                    <button type="submit" className="btn btn-primary"> Ajouter Administrateur </button>
                </form>

            </div>
        )
    }
}