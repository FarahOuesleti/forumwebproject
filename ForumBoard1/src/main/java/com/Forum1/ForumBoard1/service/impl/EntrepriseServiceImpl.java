package com.Forum1.ForumBoard1.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Forum1.ForumBoard1.entity.Entreprise;
import com.Forum1.ForumBoard1.entity.Student;
import com.Forum1.ForumBoard1.service.EntrepriseService;
import com.Forum1.ForumBoard1.repository.EntrepriseRepository;

@Service
public class EntrepriseServiceImpl implements EntrepriseService {

	private EntrepriseRepository entrepriseRepository;
	
	public EntrepriseServiceImpl(EntrepriseRepository entrepriseRepository) {
		super();
		this.entrepriseRepository = entrepriseRepository;
	}

	@Override
	public List<Entreprise> getAllEntreprises() {
		return entrepriseRepository.findAll();
	}
	
	
	@Override
	public Entreprise saveEntreprise(Entreprise entreprise) {
		return entrepriseRepository.save(entreprise);
	}

	@Override
	public Entreprise getEntrepriseById(int ExpID) {
		return entrepriseRepository.findById(ExpID).get();
	}

	@Override
	public Entreprise updateEntreprise(Entreprise entreprise) {
		return entrepriseRepository.save(entreprise);
	}

	@Override
	public void deleteEntrepriseById(int ExpID) {
		entrepriseRepository.deleteById(ExpID);	
	}
	
	
	public Boolean getAllEntrepriseEmailsAndPasswords( String ExpMail ,  String ExpPass ) {
	    List<Entreprise> results = entrepriseRepository.findAll();

	    boolean exists = false;

	    for (Entreprise result : results) {
	        if ( result.getExpMail().equals(ExpMail)  && result.getExpPass().equals(ExpPass) )
	        	exists = true;
		    return exists;

	    }
	    return (exists);
	}
}
