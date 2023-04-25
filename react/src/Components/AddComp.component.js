import React, { Component } from 'react' ;
import axios from 'axios';



export default class AddComp extends Component {

    state = {
        name : '',
        coeff : 0,
        backendMessage: '',
        backendMessageType: 'success'
    }

    constructor(props){
        super(props);

        this.OnChangeName = this.OnChangeName.bind(this);
        this.OnChangeCoeff = this.OnChangeCoeff.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    OnChangeName(e) {
        this.setState( {
            name : e.target.value
        });
    }
    OnChangeCoeff(e) {
        this.setState({
            coeff : e.target.value
        });
    }

    OnSubmit(e) {
        e.preventDefault();

        const payload = {
            name : this.state.name,
            priority : this.state.coeff,
        }

        console.log(payload)

        axios.post('http://localhost:5000/competences/add/', payload)
            .then(response => {
                // If the result key is true, then reset the form and display the message
                if (response.data.result) {
                    this.setState({name : '', coeff : 0, backendMessage: response.data.message, backendMessageType: 'success'})
                } else {
                    this.setState({backendMessage: response.data.message, backendMessageType: 'danger'})
                }
            })
    }
    
    
    render() {
        return(
            
            <div className="container">
                <h2> Veuillez entrer les compétences requises dans votre entreprise : </h2>

                {this.state.backendMessage && (
                <div className={`alert alert-${this.state.backendMessageType} alert-dismissible fade show`} role="alert">
                    {this.state.backendMessage}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                )}
                
                <form onSubmit={this.OnSubmit}>
                    <div className="form-group">
                        <label htmlFor="SkiillName"> Skill name :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.name} 
                            onChange={this.OnChangeName}
                            />
                    </div>
                          
                    <div className="form-group">
                        <label htmlFor="coef"> Coefficient :</label>
                        <input type="number" 
                            required
                            className="form-control"
                            value={this.state.coeff}
                            onChange={this.OnChangeCoeff}
                        /> <br />
                    </div>
                    <button type="submit" className="btn btn-primary"> Add skill </button>
                </form>
            </div>            
            )
            
        }
    }

