import axios from 'axios';
import React, { Component } from 'react' ;

// Beginner way of importing js file into react component
//import ScriptTag from 'react-script-tag';



export default class AddDep extends Component {     
    
    constructor(props) {
        super();
/*
        const Demo = props => (
            <ScriptTag type="text/javascript" src="../../../back/routes/Admin/Human-Resources/ArraySkill.js" />
            )
*/

        this.state = {
            nom : '',
            besoin : 0,
            skills : [], // array of all skills imported from database to insert in the checkboxes
            CompRequis : [],
            CompSupp : [],
            backendMessage: '',
            backendMessageType: 'success'
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBesoin = this.onChangeBesoin.bind(this);
        this.onChangeCompReq = this.onChangeCompReq.bind(this);
        this.onChangeCompSupp = this.onChangeCompSupp.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);

    }
    


    componentDidMount() {
        // Display the loading image
        // Fetch the user profile info from the backend
        
        // Save info to state.user
        // Remove the loading image

        axios.get('http://localhost:5000/competences/')
            .then(result =>{ console.log('uuuup');
            console.log(result.data);
                //if (result.data.length > 0) {
                    this.setState({
                        skills : result.data.map(skill => skill) 
                        //skills : result.data.map(skill => skill.nom)
                    })

                    console.log('middle');
                    console.log(this.state.skills);
                //}
                console.log('Dooown');
                console.log(this.state.skills)
            }
            )
        
            //CompRequis : [{name :'Problem solving', coeff : 7}]
        }
    

    onChangeName(e) {
        this.setState({
            nom : e.target.value
        });
    }
    onChangeBesoin(e) {
        this.setState({
            besoin : e.target.value
        });
    }
    
    onChangeCompReq(a) {
        this.state.CompRequis.push(a.target.value);
        this.setState({
            CompRequis : this.state.CompRequis
        });
    }
    onChangeCompSupp(a) {
        this.state.CompSupp.push(a.target.value)
        this.setState({
            CompSupp : this.state.CompSupp
        });
    }

    OnSubmit(e) {
        e.preventDefault();

        const Dep = {
            nom : this.state.nom,
            besoin : this.state.besoin,
            CompRequis : this.state.CompRequis,
            CompSupp : this.state.CompSupp,
        }

        console.log(Dep);

        axios.post('http://localhost:5000/Departements/add',Dep)
        .then(response => {
            if (response.data.result) {
                console.log('succssssss');
                console.log(response);
                this.setState ({
                    nom : this.state.nom,
                    besoin : this.state.besoin,
                    CompRequis : [],
                    CompSupp : [],
                    skills : [],
                    backendMessage: response.data.message,
                    backendMessageType: 'success'
                })}
            else {
                this.setState({
                    backendMessage: response.data.message, 
                    backendMessageType: 'danger'
            })}}
        );

    }
    
    
    render() {
        return(
            <div className="container">
                <h2> Veuillez entrer les Departements de votre entreprise et les compétences correspondantes  : </h2>

                {this.state.backendMessage && (
                <div className={`alert alert-${this.state.backendMessageType} alert-dismissible fade show`} role="alert">
                    {this.state.backendMessage}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                )}

                <form onSubmit={this.OnSubmit} >
                    <div className="form-group">
                        <label htmlFor="DeppName"> <b>Departement name :</b></label>
                        <input type="text" className="form-control" 
                        value={this.state.nom}
                        onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="BesoinHR"> <b>Nombre de ressources humaines demandées dans ce departement :</b></label>
                        <input type="number" className="form-control"
                                value={this.state.besoin}
                                onChange={this.onChangeBesoin} 
                        /> <br />
                    </div>
                    <div className="form-group">
                    <label htmlFor="CReq"> <b>Compétences requises dans ce departement : </b></label> <br />
                    <div>
                        { this.state.skills.map((Competence, index) => { return (
                            <div key={index}> 
                                <input type="Checkbox"
                                        value={Competence.nom}
                                        onChange={this.onChangeCompReq}/> &nbsp;
                                        {Competence.nom}
                            </div>    
                        )
                        }) 
                        }  
                    </div> <br/>

                    <label htmlFor="CSupp"> <b> Compétences supplementaires pour ce departement : </b> </label> <br />
                    <div>
                    { this.state.skills.map((Competence, index) => { return (
                            <div key={index}> 
                                <input type="Checkbox"
                                        value={Competence.nom}
                                        onChange={this.onChangeCompSupp}/> &nbsp;
                                            {Competence.nom}
                            </div>    
                        )
                        }) 
                        }  
                    </div>
                                  
                      
                    </div>
                    <button type="submit" className="btn btn-primary"> Add departement </button>
                </form>
            </div>
    
    )
    }
    
}