import React, { Component } from 'react' ;
import axios from 'axios';


export default class AddCandid extends Component {
    
    state = {
            name : '' ,
            surname :'',
            CIN : '',
            DateNaissance : new Date() ,
            E_mail : '',
            Phone : 0 ,
            DepCible : '',
            PourcTab : new Map(), 
            skills : [],
            ScoreDep : new Map(), 
            Departements : []
        }

    constructor(props) {
        super(props);

        this.OnChangeName = this.OnChangeName.bind(this);
        this.OnChangeSurname = this.OnChangeSurname.bind(this);
        this.OnChangeCIN = this.OnChangeCIN.bind(this);
        this.OnChangeDateNaiss = this.OnChangeDateNaiss.bind(this);
        this.OnChangeMail = this.OnChangeMail.bind(this);
        this.OnChangePhone = this.OnChangePhone.bind(this);
        this.OnChangeDepCible = this.OnChangeDepCible.bind(this);
        this.OnChangePourcTab = this.OnChangePourcTab.bind(this);
        this.OnChangeScoreDep = this.OnChangeScoreDep.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);

        
    }

    componentDidMount() {
      
        axios.get('http://localhost:5000/Competences/')
        .then(result =>{ //console.log('uuuup');
       // console.log(result.data);
        //console.log('data imported successfully');
            //if (result.data.length > 0) {
                this.setState({
                    skills : result.data.map(skill => skill) 
                    
                    //skills : result.data.map(skill => skill.nom)
                })

            //}
            //console.log('Dooown');
            //console.log(this.state.skills)
        }
        )

        // traitement 2 : remplissage tab scores par departement

        // importation tab departements
        axios.get('http://localhost:5000/Departements/')
        .then(res=>{
            this.setState({
                Departements : res.data.map(Departement => Departement )
            })
        })

        // calcul du score pour chaque departement
       // let ScoreDepartement = [];
            for (let Dep in this.state.Departements ) {
                //ScoreDepartement[Dep]= Dep => {
                this.state.ScoreDep.set(Dep.nom, () => { 

                    let sumR=0;
                    let sumS=0;
                    for(let R in Dep.CompRequis) {
                        sumR+=R.coeff * this.state.PourcTab.get(R);
                    }
                    for(let S in Dep.CompSupp) {
                        sumS+=S.coeff * this.state.PourcTab.get(S);
                    }
                    console.log('AAAAAAA');
                    console.log(sumR);
                    return ( 3*sumR/Dep.CompRequis.length + 2*sumS / Dep.CompSupp.length ) / 5
            });
            }
            console.log('this is the array : ');
            console.log(this.state.ScoreDep);
        /*
            this.setState({
                ScoreDep : ScoreDepartement
            })
        */
            // searching max 
            let max=0;
            let maxD='';
            for (let score in this.state.ScoreDep ) {
                console.log("score type is : ");
                console.log(score);
                //if ( score >= max ) {max=score ; maxD=Dep ;}
            }
        
            this.setState( {                
                maxScore : maxD 
            })
            // binary var
            let f=false; 
            if ( this.maxScore == this.DepCible ) { f= true}

            this.setState({
                assorti : f     
            })

            const restCand = {
                assorti : this.state.assorti,
                maxScore : this.state.maxScore,
                ScoreDep : this.state.ScoreDep 
            }

            axios.post('http://localhost:5000/Candidates/add',restCand)
            .then(resultat => console.log(resultat.data));
                
    }

    OnChangeName(e) {
        this.setState({
            name : e.target.value
        })
    }
    OnChangeSurname(e) {
        this.setState({
            surname : e.target.value
        })
    }
    OnChangeCIN(e) {
        this.setState({
            CIN : e.target.value
        })
    }
    OnChangeDateNaiss(e) {
        this.setState({
            DateNaissance : e.target.value
        })
    }
    OnChangeMail(e) {
        this.setState({
            E_mail : e.target.value
        })
    }
    OnChangePhone(e) {
        this.setState({
            Phone : e.target.value
        })
    }
    OnChangeDepCible(e) {
        this.setState({
            DepCible : e.target.value
        })
    }
   
     OnChangePourcTab(a,nommSkill) {
        this.state.PourcTab.set( nommSkill , a.target.value );
        console.log(nommSkill);
        this.setState({
            PourcTab : this.state.PourcTab,
        });
        
    }

    OnChangeScoreDep(e) {
        this.setState({
            ScoreDep : e.target.value
        })
    }

    OnSubmit(e) {
        e.preventDefault();


        console.log(e);
        const Cand = {
            name : this.state.name,
            surname : this.state.surname,
            CIN : this.state.CIN,
            DateNaissance : this.state.DateNaissance,
            E_mail : this.state.E_mail,
            Phone : this.state.Phone,
            DepCible : this.state.DepCible,
            PourcTab : this.state.PourcTab,
            ScoreDep : this.state.ScoreDep,
            skills : [] // array of all skills imported from database to which the admin will assign scores
        }
        console.log(Cand);

     

       axios.post('http://localhost:5000/Candidates/add',Cand)
       .then(res => console.log(res.data));
       
       /*
        axios({
            // Endpoint to send files
            baseURL: "http//localhost:5000/Candidates/add",
            method: "POST",
        
            // Attaching the form data
            data: Cand,
          })
        .then(res => console.log(res.data));
*/
    }


    render() {
        return(
            <div className="container">
                <h2> Veuillez entrer les informations et scores relatifs au candidat : </h2>
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
                        <label htmlFor="CandName"> Name :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.name} 
                            onChange={this.OnChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CandSurname"> Surname :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.surname} 
                            onChange={this.OnChangeSurname}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CIN"> CIN :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.CIN} 
                            onChange={this.OnChangeCIN}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Mail"> E_mail :</label>
                        <input type="email" 
                            required
                            className="form-control" 
                            value={this.state.E_mail} 
                            onChange={this.OnChangeMail}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="DepCible"> Departement Cible (choix du candidat) :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.DepCible} 
                            onChange={this.OnChangeDepCible}
                            />
                    </div>

                {
                    <div className="form-group">
                        <label htmlFor="DateNaiss"> Date de Naissance :</label>
                        <input type="Date" 
                            required
                            className="form-control" 
                            value={this.state.DateNaissance} 
                            onChange={this.OnChangeDateNaiss}
                            />
                    </div> 
                }

                    <div className="form-group">
                        <label htmlFor="Phone"> Phone :</label>
                        <input type="number" 
                            required
                            className="form-control"
                            
                            value={this.state.Phone}
                            onChange={this.OnChangePhone}
                        /> <br />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tabPour
                        "> Entrer les scores relatifs à chaque compétence :</label>
                        {
                            this.state.skills.map((competence, index) => {return (
                                <div key={index}> 
                                    <p>{competence.nom}</p>
                                    <input type="Number"
                                            className="form-control"
                                            
                                            //value={this.state.PourcTab[competence]}
                                            //onChange={this.OnChangePourcTab(competence.nom)} /> <br /> 
                                            onChange={(e)=>this.OnChangePourcTab(e,competence.nom) }    /> <br />    
                                            {console.log(this.state.PourcTab)}                                 
                                </div> 
                                )
                            })
                        }
                    </div>

                    <button type="submit" className="btn btn-primary"> Add Candidate </button>
                </form>
            </div>            
        )
    }

}