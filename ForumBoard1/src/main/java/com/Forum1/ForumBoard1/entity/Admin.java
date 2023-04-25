package com.Forum1.ForumBoard1.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int AdmID;
	
	@Column(name="a_mail")
	private String AdmMail;
	
	@Column(name="a_passwd")
	private String AdmPass;
	
	
    public Admin() {
		
	}

    

	public Admin(int admID, String admMail, String admPass) {
		super();
		this.AdmID = admID;
		this.AdmMail = admMail;
		this.AdmPass = admPass;
	}



	public int getAdmID() {
		return AdmID;
	}


	public void setAdmID(int admID) {
		AdmID = admID;
	}


	public String getAdmMail() {
		return AdmMail;
	}


	public void setAdmMail(String admMail) {
		AdmMail = admMail;
	}


	public String getAdmPass() {
		return AdmPass;
	}


	public void setAdmPass(String admPass) {
		AdmPass = admPass;
	}
    
    


}
