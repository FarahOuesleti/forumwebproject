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

import com.Forum1.ForumBoard1.entity.Admin;
import com.Forum1.ForumBoard1.entity.Student;
import com.Forum1.ForumBoard1.exception.ResourceNotFoundException;
import com.Forum1.ForumBoard1.repository.AdminRepository;
import com.Forum1.ForumBoard1.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller

@RequestMapping("/api/v1/")
public class AdminController {

	private AdminService adminService;
	@Autowired
	private AdminRepository adminRepository;
	
	
	public AdminController(AdminService adminService) {
		super();
		this.adminService = adminService;
	}
	
	@GetMapping("/admins")
	@ResponseBody
	public List<Admin> getAllAdmins() {
	    return adminRepository.findAll();
	}
	
	
	// get employee by id rest api
	@GetMapping("/admins/{AdmID}")
	@ResponseBody
	public ResponseEntity<Admin> getAdminById(@PathVariable int AdmID) {
		Admin admin = adminRepository.findById(AdmID).orElseThrow(() -> new ResourceNotFoundException("Admin not exist with id :" + AdmID));
		return ResponseEntity.ok(admin);
	}
	
	
	// create admin rest api
	@PostMapping("/admins")
	@ResponseBody
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminRepository.save(admin);
	}

	// update admin rest api
	
	@PutMapping("/admins/{AdmID}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable int AdmID, @RequestBody Admin adminDetails){
		Admin admin = adminRepository.findById(AdmID)
				.orElseThrow(() -> new ResourceNotFoundException("Admin not exist with id :" + AdmID));
		
		admin.setAdmMail(adminDetails.getAdmMail());
		admin.setAdmPass(adminDetails.getAdmPass());

		
		Admin updatedAdmin = adminRepository.save(admin);
		return ResponseEntity.ok(updatedAdmin);
	}
	
	// delete admin rest api
	@DeleteMapping("/admins/{AdmID}")
	@ResponseBody
	public ResponseEntity<Map<String, Boolean>> deleteAdmin(@PathVariable int AdmID){
		Admin admin = adminRepository.findById(AdmID)
				.orElseThrow(() -> new ResourceNotFoundException("Admin not exist with id :" + AdmID));
		
		adminRepository.delete(admin);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/admins/{AdmMail}/{AdmPass}")
	@ResponseBody
	public Boolean getAllAdminEmailsAndPasswords(@PathVariable String AdmMail , @PathVariable String AdmPass ) {
		List<Admin> results = adminRepository.findAll();
	    boolean exists = false;

	    for (Admin result : results) {
	        if  ( result.getAdmMail().equals(AdmMail)  && result.getAdmPass().equals(AdmPass) )
	            exists = true;
		    return exists;
	    }

	    return exists;
	    }
	
/*	
	// handler method to handle list admins and return mode and view
	@GetMapping("/admins")
	public String listStudents(Model model) {
		model.addAttribute("admins", adminService.getAllAdmins());
		return "admins";
	}
	
	@GetMapping("/admins/new")
	public String createAdminForm(Model model) {
		
		// create student object to hold admin form data
		Admin admin = new Admin();
		model.addAttribute("admin", admin);
		return "create_admin";
		
	}
	
	@PostMapping("/admins")
	public String saveAdmin(@ModelAttribute("admin") Admin admin) {
		adminService.saveAdmin(admin);
		return "redirect:/admins";
	}
	
	@GetMapping("/admins/edit/{AdmID}")
	public String editAdminForm(@PathVariable int admID, Model model) {
		model.addAttribute("admin", adminService.getAdminById(admID));
		return "edit_admin";
	}

	@PostMapping("/admins/{AdmID}")
	public String updateAdmin(@PathVariable int AdmID,
			@ModelAttribute("admin") Admin admin,
			Model model) {
		
		// get student from database by id
		Admin existingAdmin = adminService.getAdminById(AdmID);
		existingAdmin.setAdmID(AdmID);
		existingAdmin.setAdmMail(admin.getAdmMail());
		existingAdmin.setAdmPass(admin.getAdmPass());
	
		
		
		// save updated admin object
		adminService.updateAdmin(existingAdmin);
		return "redirect:/admins";		
	}
	
	// handler method to handle delete admin request
	
	@GetMapping("/admins/{AdmID}")
	public String deleteAdmin(@PathVariable int AdmID) {
		adminService.deleteAdminById(AdmID);
		return "redirect:/admins";
	}
	*/
}
