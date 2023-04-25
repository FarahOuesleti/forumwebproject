package com.Forum1.ForumBoard1.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.Forum1.ForumBoard1.entity.OffreStage;


public interface OffreStageService {
	
	List<OffreStage> getAllOffreStages();
	
	OffreStage saveOffreStage(OffreStage offrestage);
	
	OffreStage getOffreStageById(int OfsID);
	
	OffreStage updateOffreStage(OffreStage offrestage);
	
	void deleteOffreStageById(int OfsID);

}
