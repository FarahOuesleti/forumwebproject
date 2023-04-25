package com.Forum1.ForumBoard1.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Forum1.ForumBoard1.entity.OffreStage;
import com.Forum1.ForumBoard1.repository.OffreStageRepository;
import com.Forum1.ForumBoard1.service.OffreStageService;


@Service
public class OffreStageServiceImpl implements OffreStageService{

	private OffreStageRepository offrestageRepository;
	
	public OffreStageServiceImpl(OffreStageRepository offrestageRepository) {
		super();
		this.offrestageRepository = offrestageRepository;
	}

	@Override
	public List<OffreStage> getAllOffreStages() {
		return offrestageRepository.findAll();
	}
	
	@Override
	public OffreStage saveOffreStage(OffreStage offrestage) {
		return offrestageRepository.save(offrestage);
	}

	@Override
	public OffreStage getOffreStageById(int OfsID) {
		return offrestageRepository.findById(OfsID).get();
	}

	@Override
	public OffreStage updateOffreStage(OffreStage offrestage) {
		return offrestageRepository.save(offrestage);
	}

	@Override
	public void deleteOffreStageById(int OfsID) {
		offrestageRepository.deleteById(OfsID);	
	}
}
