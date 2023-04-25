import React, { Component } from 'react' ;
import axios from 'axios';


export default class AddOffreStage extends Component {
    state = {
        StageID : '',
        StageName :'',
        StageType : '',
        StageDuree : '',
        StageDateDebut : new Date(),
        CibleEtudiants : '',
        CompetencesRequises : '',
        CompetencesSupplementaires : '',
        DescriptifStage : '',
        DispoEntretien : '',
}

    constructor(props) {
        super(props);

        this.OnChangeStageID = this.OnChangeStageID.bind(this);
        this.OnChangeStageName = this.OnChangeStageName.bind(this);
        this.OnChangeStageType = this.OnChangeStageType.bind(this);
        this.OnChangeStageDuree = this.OnChangeStageDuree.bind(this);
        this.OnChangeStageDateDebut = this.OnChangeStageDateDebut.bind(this);
        this.OnChangeCibleEtudiants = this.OnChangeCibleEtudiants.bind(this);
        this.OnChangeCompetencesRequises = this.OnChangeCompetencesRequises.bind(this);
        this.OnChangeCompetencesSupplementaires = this.OnChangeCompetencesSupplementaires.bind(this);
        this.OnChangeDescriptifStage = this.OnChangeDescriptifStage.bind(this);
        this.OnChangeDispoEntretien = this.OnChangeDispoEntretien.bind(this);
        
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    componentDidMount() {
    }

    OnChangeStageID(e){
        this.setState({
            StageID : e.target.value
        })
    }
   
    OnChangeStageName(e){
        this.setState({
            StageName : e.target.value
        })
    }
   
    OnChangeStageType(e){
        this.setState({
            StageType : e.target.value
        })
    }

    OnChangeStageDuree(e){
        this.setState({
            StageDuree : e.target.value
        })
    }

    OnChangeStageDateDebut(e){
        this.setState({
            StageDateDebut : e.target.value
        })
    }

    OnChangeCibleEtudiants(e){
        this.setState({
            CibleEtudiants : e.target.value
        })
    }

    OnChangeCompetencesRequises(e){
        this.setState({
            CompetencesRequises : e.target.value
        })
    }

    OnChangeCompetencesSupplementaires(e){
        this.setState({
            CompetencesSupplementaires : e.target.value
        })
    }

    OnChangeDescriptifStage(e){
        this.setState({
            DescriptifStage : e.target.value
        })
    }

    OnChangeDispoEntretien(e){
        this.setState({
            DispoEntretien : e.target.value
        })
    }

    OnSubmit(e) {
        e.preventDefault();

        const OffreStage=  {
            StageID : this.state.StageID,
            StageName : this.state.StageName,
            StageType : this.state.StageType,
            StageDuree : this.state.StageDuree,
            StageDateDebut : this.state.StageDateDebut,
            CibleEtudiants : this.state.CibleEtudiants,
            CompetencesRequises : this.state.CompetencesRequises,
            CompetencesSupplementaires : this.state.CompetencesSupplementaires,
            DescriptifStage : this.state.DescriptifStage,
            DispoEntretien : this.state.DispoEntretien,
        }
    
           

   axios.post('http://localhost:8080/offrestages',OffreStage)
   .then(res => console.log(res.data));

    }
    
    render() {
        return(
            <div className="container">

                <form onSubmit={this.OnSubmit}>
                <div className="form-group">
                        <label htmlFor="nomStg"> Nom du Stage :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.StageName} 
                            onChange={this.OnChangeStageName}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="typestg"> Type du Stage : PFE - Technique - Observation - Supplémentaire </label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.StageType} 
                            onChange={this.OnChangeStageType}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="StagDuree"> Durée du Stage :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.StageDuree} 
                            onChange={this.OnChangeStageDuree}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stgDDebut"> Date Début du Stage :</label>
                        <input type="Date" 
                            required
                            className="form-control" 
                            value={this.state.StageDateDebut} 
                            onChange={this.OnChangeStageDateDebut}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cible"> Cible des Etudiants pour ce stage :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.CibleEtudiants} 
                            onChange={this.OnChangeCibleEtudiants}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CR"> Les Competences Requises pour ce stage :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.CompetencesRequises} 
                            onChange={this.OnChangeCompetencesRequises}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CS"> Les Competences Supplementaires pour ce stage :</label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.CompetencesSupplementaires}
                            onChange={this.OnChangeCompetencesSupplementaires}
                        /> <br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descip"> Le Descriptif de ce Stage:</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.DescriptifStage} 
                            onChange={this.OnChangeDescriptifStage}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dispoEntr"> Liste des disponibiltés pour l'entretien :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.DispoEntretien} 
                            onChange={this.OnChangeDispoEntretien}
                            />
                    </div>
                    
                    <button type="submit" className="btn btn-primary"> Ajouter Offre Stage </button>
                </form>

            </div>
        )
    }
}