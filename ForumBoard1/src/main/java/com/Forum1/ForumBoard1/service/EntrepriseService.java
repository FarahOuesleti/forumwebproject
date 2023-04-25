package com.Forum1.ForumBoard1.service;

import java.util.List;

import com.Forum1.ForumBoard1.entity.Entreprise;

public interface EntrepriseService {
	
	List<Entreprise> getAllEntreprises();
	
	Entreprise saveEntreprise(Entreprise entreprise);
	
	Entreprise getEntrepriseById(int EtrpID);
	
	Entreprise updateEntreprise(Entreprise entreprise);
	
	void deleteEntrepriseById(int EtrpID);
	
	Boolean getAllEntrepriseEmailsAndPasswords(String ExpMail, String ExpPass);

}
