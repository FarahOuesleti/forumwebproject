package com.Forum1.ForumBoard1.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Forum1.ForumBoard1.service.EntrepriseService;
import com.Forum1.ForumBoard1.entity.Entreprise;
import com.Forum1.ForumBoard1.entity.Student;
import com.Forum1.ForumBoard1.exception.ResourceNotFoundException;
import com.Forum1.ForumBoard1.repository.EntrepriseRepository;


@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/api/v1/")
public class EntrepriseController {

	private EntrepriseService entrepriseService;
	@Autowired
	private EntrepriseRepository entrepriseRepository;
	
	public EntrepriseController(EntrepriseService entrepriseService) {
		super();
		this.entrepriseService = entrepriseService;
	}
	
	
	
	@GetMapping("/entreprises")
	@ResponseBody
	public List<Entreprise> getAllEntreprises() {
	    return entrepriseRepository.findAll();
	}
	
	// create entreprise rest api
	@PostMapping("/entreprises")
	@ResponseBody
	public Entreprise createEntreprise(@RequestBody Entreprise entreprise) {
		return entrepriseRepository.save(entreprise);
	}
	
	// get employee by id rest api
	@GetMapping("/entreprises/{ExpID}")
	@ResponseBody
	public ResponseEntity<Entreprise> getEntrepriseById(@PathVariable int ExpID) {
		Entreprise entreprise = entrepriseRepository.findById(ExpID).orElseThrow(() -> new ResourceNotFoundException("entreprise not exist with id :" + ExpID));
		return ResponseEntity.ok(entreprise);
	}
	
	// update student rest api
	
	@PutMapping("/entreprises/{ExpID}")
	
	public ResponseEntity<Entreprise> updateEntreprise(@PathVariable int ExpID, @RequestBody Entreprise entrepriseDetails){
		Entreprise entreprise = entrepriseRepository.findById(ExpID)
				.orElseThrow(() -> new ResourceNotFoundException("Entreprise not exist with id :" + ExpID));
		
		entreprise.setExpName(entrepriseDetails.getExpName());
		entreprise.setExpLadress(entrepriseDetails.getExpLadress());
		entreprise.setExpMail(entrepriseDetails.getExpMail());
		entreprise.setExpPass(entrepriseDetails.getExpPass());
		entreprise.setExpTlf(entrepriseDetails.getExpTlf());
		entreprise.setExpPack(entrepriseDetails.getExpPack());
		entreprise.setName(entrepriseDetails.getName());
		entreprise.setE_lastName(entrepriseDetails.getE_lastName());
		entreprise.setLinkedIn(entrepriseDetails.getLinkedIn());
		entreprise.setType(entrepriseDetails.getType());
		entreprise.setDomaineActivite(entrepriseDetails.getDomaineActivite());
		
		
		Entreprise updatedEntreprise = entrepriseRepository.save(entreprise);
		return ResponseEntity.ok(updatedEntreprise);
	}
	
	// delete entreprise rest api
	@DeleteMapping("/entreprises/{ExpID}")
	@ResponseBody
	public ResponseEntity<Map<String, Boolean>> deleteEntreprise(@PathVariable int ExpID){
		Entreprise entreprise = entrepriseRepository.findById(ExpID)
				.orElseThrow(() -> new ResourceNotFoundException("entreprise not exist with id :" + ExpID));
		
		entrepriseRepository.delete(entreprise);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	@GetMapping("/entreprises/{ExpMail}/{ExpPass}")
	@ResponseBody
	public Boolean getAllEntrepriseEmailsAndPasswords(@PathVariable String ExpMail , @PathVariable String ExpPass ) {
		List<Entreprise> results = entrepriseRepository.findAll();
	    boolean exists = false;

	    for (Entreprise result : results) {
	        if  ( result.getExpMail().equals(ExpMail)  && result.getExpPass().equals(ExpPass) )
	            exists = true;
		    return exists;
	    }

	    return exists;
	    }
	
	
/*
	// handler method to handle list entreprises and return mode and view
	@GetMapping("/entreprises")
	public String listEntreprises(Model model) {
		model.addAttribute("entreprises", entrepriseService.getAllEntreprises());
		return "entreprises";
	}
	
	@GetMapping("/entreprises/new")
	public String createEntrepriseForm(Model model) {
		
		// create student object to hold student form data
		Entreprise entreprise = new Entreprise();
		model.addAttribute("entreprise", entreprise);
		return "create_entreprise";
		
	}
	
	@PostMapping("/entreprises")
	public String saveEntreprise(@ModelAttribute("entreprise") Entreprise entreprise) {
		entrepriseService.saveEntreprise(entreprise);
		return "redirect:/entreprises";
	}
	
	@GetMapping("/entreprises/edit/{ExpID}")
	public String editEntrepriseForm(@PathVariable int ExpID, Model model) {
		model.addAttribute("entreprise", entrepriseService.getEntrepriseById(ExpID));
		return "edit_entreprise";
	}

	@PostMapping("/entreprises/{ExpID}")
	public String updateEntreprise(@PathVariable int ExpID,
			@ModelAttribute("entreprise") Entreprise entreprise,
			Model model) {
		
		// get entreprise from database by id
		Entreprise existingEntreprise = entrepriseService.getEntrepriseById(ExpID);
		existingEntreprise.setExpID(ExpID);
		existingEntreprise.setExpName(entreprise.getExpName());
		existingEntreprise.setExpLadress(entreprise.getExpLadress());
		existingEntreprise.setExpMail(entreprise.getExpMail());
		existingEntreprise.setExpPass(entreprise.getExpPass());
		existingEntreprise.setExpTlf(entreprise.getExpTlf());
		existingEntreprise.setExpPack(entreprise.getExpPack());
		
		// save updated entreprise object
		entrepriseService.updateEntreprise(existingEntreprise);
		return "redirect:/entreprises";		
	}
	
	// handler method to handle delete Entreprise request
	
	@GetMapping("/entreprises/{StdID}")
	public String deleteEntreprise(@PathVariable int ExpID) {
		entrepriseService.deleteEntrepriseById(ExpID);
		return "redirect:/entreprises";
	}
	*/
}
