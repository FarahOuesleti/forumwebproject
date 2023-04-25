package com.Forum1.ForumBoard1.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "offre_stage")
public class OffreStage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int OfsID;
	
	@Column(name="s_type")
	private String StageType; //(pfe,technique, observation),
	
	@Column(name="s_duree")
	private String duree ;
	
	@Column(name="s_ddebut")
	private String dateDebut; 
	
	@Column(name="s_cibetud")
	private String cibleEtudiants ;  
	
	@Column(name="s_comreq")
	private String competencesRequises ;
	
	@Column(name="s_compsupp")
	private String competencesSupplementaires ;
	
	@Column(name="s_desc")
	private String descriptifStage;

	public OffreStage(int ofsID, String stageType, String duree, String dateDebut, String cibleEtudiants,
			String competencesRequises, String competencesSupplementaires, String descriptifStage) {
		super();
		this.OfsID = ofsID;
		this.StageType = stageType;
		this.duree = duree;
		this.dateDebut = dateDebut;
		this.cibleEtudiants = cibleEtudiants;
		this.competencesRequises = competencesRequises;
		this.competencesSupplementaires = competencesSupplementaires;
		this.descriptifStage = descriptifStage;
	}

	public int getOfsID() {
		return OfsID;
	}

	public void setOfsID(int ofsID) {
		OfsID = ofsID;
	}

	public String getStageType() {
		return StageType;
	}

	public void setStageType(String stageType) {
		StageType = stageType;
	}

	public String getDuree() {
		return duree;
	}

	public void setDuree(String duree) {
		this.duree = duree;
	}

	public String getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(String dateDebut) {
		this.dateDebut = dateDebut;
	}

	public String getCibleEtudiants() {
		return cibleEtudiants;
	}

	public void setCibleEtudiants(String cibleEtudiants) {
		this.cibleEtudiants = cibleEtudiants;
	}

	public String getCompetencesRequises() {
		return competencesRequises;
	}

	public void setCompetencesRequises(String competencesRequises) {
		this.competencesRequises = competencesRequises;
	}

	public String getCompetencesSupplementaires() {
		return competencesSupplementaires;
	}

	public void setCompetencesSupplementaires(String competencesSupplementaires) {
		this.competencesSupplementaires = competencesSupplementaires;
	}

	public String getDescriptifStage() {
		return descriptifStage;
	}

	public void setDescriptifStage(String descriptifStage) {
		this.descriptifStage = descriptifStage;
	}
	
	
	
}
