package com.Forum1.ForumBoard1.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Entreprise")
public class Entreprise {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ExpID;
	
	@Column(name="e_name")
	private String ExpName;
	
	@Column(name="e_r_name")
	private String CEOName;
	
	@Column(name="e_r_lastname")
	private String CEOLastName;
	
	
	@Column(name="e_linkedin")
	private String ExpLinkedIn;
	
	@Column(name="e_adrs")
	private String ExpLadress;
	
	@Column(name="e_mail")
	private String ExpMail;
	
	@Column(name="e_passwd")
	private String ExpPass;
	
	@Column(name="e_tlf")
	private String ExpTlf;
	
	@Column(name="e_pack")
	private String ExpPack;
	
	@Column(name="type")
	private String ExpType;
	
	@Column(name="dom_ac")
	private String ExpDomaineActivite;
	
	
	
	public Entreprise() {
		
	}

	public Entreprise(int ExpID, String ExpName, String name, String e_lastName, String linkedIn, String ExpLadress,
			String ExpMail, String ExpPass, String ExpTlf, String ExpPack, String type, String domaineActivite) {
		super();
		this.ExpID = ExpID;
		this.ExpName = ExpName;
		this.CEOName = name;
		this.CEOLastName = e_lastName;
		this.ExpLinkedIn = linkedIn;
		this.ExpLadress = ExpLadress;
		this.ExpMail = ExpMail;
		this.ExpPass = ExpPass;
		this.ExpTlf = ExpTlf;
		this.ExpPack = ExpPack;
		this.ExpType = type;
		this.ExpDomaineActivite = domaineActivite;
	}

	public int getExpID() {
		return ExpID;
	}

	public void setExpID(int ExpID) {
		ExpID = ExpID;
	}

	public String getExpName() {
		return ExpName;
	}

	public void setExpName(String ExpName) {
		ExpName = ExpName;
	}

	public String getExpLadress() {
		return ExpLadress;
	}

	public void setExpLadress(String ExpLadress) {
		ExpLadress = ExpLadress;
	}

	public String getExpMail() {
		return ExpMail;
	}

	public void setExpMail(String ExpMail) {
		ExpMail = ExpMail;
	}

	public String getExpPass() {
		return ExpPass;
	}

	public void setExpPass(String ExpPass) {
		ExpPass = ExpPass;
	}

	public String getExpTlf() {
		return ExpTlf;
	}

	public void setExpTlf(String ExpTlf) {
		ExpTlf = ExpTlf;
	}

	public String getExpPack() {
		return ExpPack;
	}

	public void setExpPack(String ExpPack) {
		ExpPack = ExpPack;
	}

	public String getName() {
		return CEOName;
	}

	public void setName(String name) {
		this.CEOName = name;
	}

	public String getE_lastName() {
		return CEOLastName;
	}

	public void setE_lastName(String e_lastName) {
		this.CEOLastName = e_lastName;
	}

	public String getLinkedIn() {
		return ExpLinkedIn;
	}

	public void setLinkedIn(String linkedIn) {
		this.ExpLinkedIn = linkedIn;
	}

	public String getType() {
		return ExpType;
	}

	public void setType(String type) {
		ExpType = type;
	}

	public String getDomaineActivite() {
		return ExpDomaineActivite;
	}

	public void setDomaineActivite(String domaineActivite) {
		ExpDomaineActivite = domaineActivite;
	}
	
	
	
	
}
