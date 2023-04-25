import React, { Component } from 'react';
import StudentService from '../../Services/StudentService';


export default class InscriptionEtudiant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StdID: 0,
            StdMail: '',
            StdPass: '',
            Cin: '',
            StdFName: '',
            StdLName: '',
            StdLinkedIn: '',
            StdAdr: '',
            StdTlf: '',
            StdSector: '',
            StdLevel: '',
            StdConfirmation: ''
        }
        this.OnChangeStdID = this.OnChangeStdID.bind(this);
        this.OnChangeStdMail = this.OnChangeStdMail.bind(this);
        this.OnChangeStdPass = this.OnChangeStdPass.bind(this);
        this.OnChangeStdCIN = this.OnChangeStdCIN.bind(this);
        this.OnChangeStdFName = this.OnChangeStdFName.bind(this);
        this.OnChangeStdLName = this.OnChangeStdLName.bind(this);
        this.OnChangeStdLinkedIn = this.OnChangeStdLinkedIn.bind(this);
        this.OnChangeStdAdr = this.OnChangeStdAdr.bind(this);
        this.OnChangeStdTlf = this.OnChangeStdTlf.bind(this);
        this.OnChangeStdSector = this.OnChangeStdSector.bind(this);
        this.OnChangeStdLevel = this.OnChangeStdLevel.bind(this);
        this.OnChangeStdConfirmation = this.OnChangeStdConfirmation.bind(this);

        this.saveStudent = this.saveStudent.bind(this);
    }

    componentDidMount() {
        return
    }

    /*componentDidMount() {
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.StdID).then( (res) =>{
                let student = res.data;
                this.setState({StdFName: student.StdFName,
                    StdLName: student.StdLName,
                    StdMail : student.StdMail,
                    Cin : student.Cin,
                    StdPass : student.StdPass,
                    StdTlf : student.StdTlf,
                    StdSector : student.StdSector,
                    StdLevel : student.StdLevel,
                    StdConfirmation : student.StdConfirmation,
                    StdAdr : student.StdAdr
                    
                });
            });
        }   
    }*/

    saveStudent = (e) => {
        e.preventDefault();
        let student = {
            stdFName: this.state.StdFName,
            stdLName: this.state.StdLName,
            stdMail: this.state.StdMail,
            stdTlf: this.state.StdTlf,
            stdPass: this.state.StdPass,
            stdSector: this.state.StdSector,
            stdLevel: this.state.StdLevel,
            stdConfirmation: this.state.StdConfirmation,
            stdAdr: this.state.StdAdr,
            cin: this.state.Cin
        };


        // step 5
        // if(this.state.id === '_add'){
        StudentService.createStudent(student).then(res => {
            console.log('student => ' + JSON.stringify(student));
            this.props.history.push('/students');
        })
        /*else{
            StudentService.updateStudent(studente, this.state.StdID).then( res => {
                this.props.history.push('/students');
            });
        }*/
    }

    OnChangeStdID(e) {
        this.setState({
            StdID: e.target.value
        })
    }
    OnChangeStdMail(e) {
        this.setState({
            StdMail: e.target.value
        })
    }

    OnChangeStdPass(e) {
        this.setState({
            StdPass: e.target.value
        })
    }
    OnChangeStdCIN(e) {
        this.setState({
            Cin: e.target.value
        })
    }
    OnChangeStdFName(e) {
        this.setState({
            StdFName: e.target.value
        })
    }
    OnChangeStdLName(e) {
        this.setState({
            StdLName: e.target.value
        })
    }
    OnChangeStdLinkedIn(e) {
        this.setState({
            StdLinkedIn: e.target.value
        })
    }
    OnChangeStdAdr(e) {
        this.setState({
            StdAdr: e.target.value
        })
    }
    OnChangeStdTlf(e) {
        this.setState({
            StdTlf: e.target.value
        })
    }
    OnChangeStdSector(e) {
        this.setState({
            StdSector: e.target.value
        })
    }
    OnChangeStdLevel(e) {
        this.setState({
            StdLevel: e.target.value
        })
    }
    OnChangeStdConfirmation(e) {
        this.setState({
            StdConfirmation: e.target.value
        })
    }

    cancel() {
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Etudiant</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Nom : </label>
                                        <input placeholder="Nom" name="firstName" className="form-control"
                                            value={this.state.StdFName} onChange={this.OnChangeStdFName} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name : </label>
                                        <input placeholder="Prenom" name="lastName" className="form-control"
                                            value={this.state.StdLName} onChange={this.OnChangeStdLName} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email : </label>
                                        <input placeholder="Addresse Email" name="emailId" className="form-control"
                                            value={this.state.StdMail} onChange={this.OnChangeStdMail} />
                                    </div>
                                    <div className="form-group">
                                        <label> Mot de passe : </label>
                                        <input placeholder="Mot de passe" type="Password" name="Password" className="form-control"
                                            value={this.state.StdPass} onChange={this.OnChangeStdPass} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name : </label>
                                        <input placeholder="Cin" name="Cin" className="form-control"
                                            value={this.state.Cin} onChange={this.OnChangeStdCIN} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email : </label>
                                        <input placeholder="Lien Linkedin" name="Linkedin" className="form-control"
                                            value={this.state.StdLinkedIn} onChange={this.OnChangeStdLinkedIn} />
                                    </div>
                                    <div className="form-group">
                                        <label> Numéro de Téléphone de l'Etudiant :  : </label>
                                        <input placeholder="Numero" name="Num" className="form-control"
                                            value={this.state.StdTlf} onChange={this.OnChangeStdTlf} />
                                    </div>
                                    <div className="form-group">
                                        <label> Adresse Habitat de l'Etudiant : : </label>
                                        <input placeholder="adresse" name="adresse" className="form-control"
                                            value={this.state.StdAdr} onChange={this.OnChangeStdAdr} />
                                    </div>
                                    <div className="form-group">
                                        <label> Niveau d'étude de l'Etudiant : </label>
                                        <input placeholder="Lien Linkedin" name="Linkedin" className="form-control"
                                            value={this.state.StdLevel} onChange={this.OnChangeStdLevel} />
                                    </div>
                                    <div className="form-group">
                                        <label> Confirmez-vous votre participation au Forum de cette Année ? : </label>
                                        <input placeholder="Lien Linkedin" name="Linkedin" className="form-control"
                                            value={this.state.StdConfirmation} onChange={this.OnChangeStdConfirmation} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


}

