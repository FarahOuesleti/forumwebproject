package com.Forum1.ForumBoard1.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "student")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int StdID;
	
	@Column(name="Cin",unique=true)
	private String Cin;
	
	@Column(name="StdFName")
	private String StdFName;
	
	@Column(name="StdLName")
	private String StdLName;
	
	@Column(name="StdMail")
	private String StdMail;
	
	@Column(name="StdPass")
	private String StdPass;
	
	@Column(name="StdTlf")
	private String StdTlf;
	
	@Column(name="StdSector")
	private String StdSector;
	
	@Column(name="StdLevel")
	private String StdLevel;
	
	@Column(name="StdConfirmation")
	private String StdConfirmation;
	
	@Column(name="StdAdr")
	private String StdAdr;
	
	public Student() {
		
	}
	
	public Student(int stdID, String cin, String stdFName, String stdLName, String stdMail, String stdPass, String stdTlf,
			String stdSector, String stdLevel, String stdConfirmation, String stdAdr) {
		super();
		this.StdID = stdID;
		this.Cin = cin;
		this.StdFName = stdFName;
		this.StdLName = stdLName;
		this.StdMail = stdMail;
		this.StdPass = stdPass;
		this.StdTlf = stdTlf;
		this.StdSector = stdSector;
		this.StdLevel = stdLevel;
		this.StdConfirmation = stdConfirmation;
		this.StdAdr = stdAdr;
	}

	public int getStdID() {
		return StdID;
	}

	public void setStdID(int stdID) {
		StdID = stdID;
	}

	public String getStdFName() {
		return StdFName;
	}

	public void setStdFName(String stdFName) {
		StdFName = stdFName;
	}

	public String getStdLName() {
		return StdLName;
	}

	public void setStdLName(String stdLName) {
		StdLName = stdLName;
	}

	public String getStdMail() {
		return StdMail;
	}

	public void setStdMail(String stdMail) {
		StdMail = stdMail;
	}

	public String getStdPass() {
		return StdPass;
	}

	public void setStdPass(String stdPass) {
		StdPass = stdPass;
	}

	public String getStdTlf() {
		return StdTlf;
	}

	public void setStdTlf(String stdTlf) {
		StdTlf = stdTlf;
	}

	public String getStdLevel() {
		return StdLevel;
	}

	public void setStdLevel(String stdLevel) {
		StdLevel = stdLevel;
	}

	public String getStdConfirmation() {
		return StdConfirmation;
	}

	public void setStdConfirmation(String stdConfirmation) {
		StdConfirmation = stdConfirmation;
	}

	public String getCin() {
		return Cin;
	}

	public void setCin(String cin) {
		Cin = cin;
	}

	public String getStdSector() {
		return StdSector;
	}

	public void setStdSector(String stdSector) {
		StdSector = stdSector;
	}

	public String getStdAdr() {
		return StdAdr;
	}

	public void setStdAdr(String stdAdr) {
		StdAdr = stdAdr;
	}


	

}