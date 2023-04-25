package com.Forum1.ForumBoard1.service;

import java.util.List;

import com.Forum1.ForumBoard1.entity.Admin;

public interface AdminService {

	List<Admin> getAllAdmins();

	Admin saveAdmin(Admin admin);
	
	Admin getAdminById(int admID);
	
	Admin updateAdmin(Admin admin);
	
	void deleteAdminById(int admID);
	
	Boolean getAllAdminEmailsAndPasswords( String EtrpMail ,  String EtrpPass );

}
