package com.Forum1.ForumBoard1.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Forum1.ForumBoard1.entity.Admin;
import com.Forum1.ForumBoard1.entity.Student;
import com.Forum1.ForumBoard1.service.AdminService;
import com.Forum1.ForumBoard1.repository.AdminRepository;


@Service
public class AdminServiceImpl implements AdminService {

	private AdminRepository adminRepository;
	
	public AdminServiceImpl(AdminRepository adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}

	@Override
	public List<Admin> getAllAdmins() {
		return adminRepository.findAll();
	}
	@Override
	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}

	@Override
	public Admin getAdminById(int admID) {
		return adminRepository.findById(admID).get();
	}

	@Override
	public Admin updateAdmin(Admin admin) {
		return adminRepository.save(admin);
	}

	@Override
	public void deleteAdminById(int admID) {
		adminRepository.deleteById(admID);	
	}
	
	public Boolean getAllAdminEmailsAndPasswords( String AdmMail ,  String AdmPass ) {
	    List<Admin> results = adminRepository.findAll();

	    boolean exists = false;

	    for (Admin result : results) {
	        if ( result.getAdmMail().equals(AdmMail)  && result.getAdmPass().equals(AdmPass) )
	        	exists = true;
		    return exists;

	    }
	    return (exists);
	}
	
}