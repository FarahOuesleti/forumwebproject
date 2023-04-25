import React, { Component } from 'react' ;
import axios from 'axios';
import SkillArray from './SkillArray.component';

export default class Result extends Component {

    state = {
        Departements : [],
        Candidates : [{"Cname": "o","Csurname": "o","Cmail": "p@gmail.com","Cscore": 55}],
        sortedCandidates :[]
    }

    constructor(props) {
        super();
   
    }
        componentDidMount() {
            // import departemnts
            axios.get('http://localhost:5000/Departements/')
            .then(res => { console.log(res.data) 
                this.setState({
                    Departements : res.data.map(Dep => Dep.nom)
                })
        }) 
            // importing candidates
            axios.get('http://localhost:5000/Candidates/')
            .then(result => {console.log(result.data);
                this.setState({
                    Candidates : result.data.map((Cand) =>{ 
                        let CCand = {"Cname": Cand.name,"Csurname": Cand.surname,"Cmail": Cand.E_mail,"Cscore": Cand.ScoreDep}
                        return CCand ;
                    })
                })
                
        }) 
        
        }   

       

    render() {
        return(
            <div> 
               
               
                {
                    this.state.Departements.map((DepName)=> {

                    (
                    <div className="container"> 
                        <h2>Candidates Model</h2>         
                        <table title={DepName} class="table">
                            <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Score</th>
                            </tr>
                            </thead>
                        </table>
                    
                    
                    
                        { this.state.Candidates.map( (Cand) => {return (
                            
                            <div>    
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>{Cand.Cname}</td>
                                        <td>{Cand.surname}</td>
                                        <td>{Cand.E_mail}</td>
                                        <td>{Cand.Cscore.get('DepName')}</td>

                                    </tr>
                                    </tbody>
                                </table>
                            </div> )})}
                    </div>
                    )})}
                            

                    
           
            </div> )
           
        
    }
}