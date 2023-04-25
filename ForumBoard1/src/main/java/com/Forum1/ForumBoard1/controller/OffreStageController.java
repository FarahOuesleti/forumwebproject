package com.Forum1.ForumBoard1.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Forum1.ForumBoard1.service.OffreStageService;
import com.Forum1.ForumBoard1.entity.OffreStage;
import com.Forum1.ForumBoard1.entity.Student;
import com.Forum1.ForumBoard1.exception.ResourceNotFoundException;
import com.Forum1.ForumBoard1.repository.OffreStageRepository;


@Controller
@RequestMapping("/api/v1/")
public class OffreStageController {

	private OffreStageService offrestageService;
	
	@Autowired
	private OffreStageRepository offrestageRepository;
	
	
	public OffreStageController(OffreStageService offrestageService) {
		super();
		this.offrestageService = offrestageService;
	}
	
	@GetMapping("/offrestages")
	@ResponseBody
	public List<OffreStage> getAllOffreStages() {
	    return offrestageRepository.findAll();
	}
	
	// create student rest api
	@PostMapping("/offrestages")
	@ResponseBody
	public OffreStage createOffreStage(@RequestBody OffreStage offrestage) {
		return offrestageRepository.save(offrestage);
	}
	
	// get employee by id rest api
	@GetMapping("/offrestages/{OfsID}")
	@ResponseBody
	public ResponseEntity<OffreStage> getOffreStageById(@PathVariable int OfsID) {
		OffreStage offrestage = offrestageRepository.findById(OfsID).orElseThrow(() -> new ResourceNotFoundException("offre de stage not exist with id :" + OfsID));
		return ResponseEntity.ok(offrestage);
	}
	// update student rest api
	
	@PutMapping("/offrestages/{StdID}")
	
	public ResponseEntity<OffreStage> updateOffreStage(@PathVariable int OfdID, @RequestBody OffreStage offrestageDetails){
		OffreStage offrestage = offrestageRepository.findById(OfdID)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + OfdID));
		
		offrestage.setStageType(offrestageDetails.getStageType());
		offrestage.setDuree(offrestageDetails.getDuree());
		offrestage.setDateDebut(offrestageDetails.getDateDebut());
		offrestage.setCibleEtudiants(offrestageDetails.getCibleEtudiants());
		offrestage.setCompetencesRequises(offrestageDetails.getCompetencesRequises());
		offrestage.setCompetencesSupplementaires(offrestageDetails.getCompetencesSupplementaires()); 
		offrestage.setDescriptifStage(offrestageDetails.getDescriptifStage()); 
		
		OffreStage updatedOffreStage = offrestageRepository.save(offrestage);
		return ResponseEntity.ok(updatedOffreStage);
	}
	
	// delete offre de stage rest api
	@DeleteMapping("/offrestages/{OfdID}")
	@ResponseBody
	public ResponseEntity<Map<String, Boolean>> deleteOffreStage(@PathVariable int OfdID){
		OffreStage offrestage = offrestageRepository.findById(OfdID)
				.orElseThrow(() -> new ResourceNotFoundException("Offre de Stage not exist with id :" + OfdID));
		
		offrestageRepository.delete(offrestage);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
