package com.Forum1.ForumBoard1.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.Forum1.ForumBoard1.service.StudentService;

import com.Forum1.ForumBoard1.entity.Student;

import com.Forum1.ForumBoard1.exception.ResourceNotFoundException;
import com.Forum1.ForumBoard1.repository.StudentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/api/v1/")
public class StudentController {

	
	@Autowired
	private StudentRepository studentRepository;
	

	
	public StudentController(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}

	@GetMapping("/students")
	@ResponseBody
	public List<Student> getAllStudents() {
	    return studentRepository.findAll();
	}

	// create student rest api
	@PostMapping("/students")
	@ResponseBody
	public Student createStudent(@RequestBody Student student) {
		return studentRepository.save(student);
	}
	
	// get student by id rest api
		@GetMapping("/students/{StdID}")
		@ResponseBody
		public ResponseEntity<Student> getStudentById(@PathVariable int StdID) {
			Student student = studentRepository.findById(StdID).orElseThrow(() -> new ResourceNotFoundException("student not exist with id :" + StdID));
			return ResponseEntity.ok(student);
		}
		
		// update student rest api
		
		@PutMapping("/students/{StdID}")
		public ResponseEntity<Student> updateStudent(@PathVariable int StdID, @RequestBody Student studentDetails){
			Student student = studentRepository.findById(StdID)
					.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + StdID));
			
			student.setStdFName(studentDetails.getStdFName());
			student.setStdLName(studentDetails.getStdLName());
			student.setStdMail(studentDetails.getStdMail());
			student.setStdPass(studentDetails.getStdPass());
			student.setStdTlf(studentDetails.getStdTlf());
			student.setStdLevel(studentDetails.getStdLevel()); 
			student.setStdConfirmation(studentDetails.getStdConfirmation()); 
			student.setCin(studentDetails.getCin()); 
			student.setStdSector(studentDetails.getStdSector()); 
			student.setStdAdr(studentDetails.getStdAdr()); 
			
			Student updatedStudent = studentRepository.save(student);
			return ResponseEntity.ok(updatedStudent);
		}
		
		// delete student rest api
		@DeleteMapping("/students/{StdID}")
		@ResponseBody
		public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable int StdID){
			Student student = studentRepository.findById(StdID)
					.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + StdID));
			
			studentRepository.delete(student);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		
		
		
		
		
		
		@GetMapping("/students/{StdMail}/{StdPass}")
		@ResponseBody
		public Boolean getAllStudentEmailsAndPasswords(@PathVariable String StdMail , @PathVariable String StdPass ) {
			List<Student> results = studentRepository.findAll();
		    boolean exists = false;

		    for (Student result : results) {
		        if  ( result.getStdMail().equals(StdMail)  && result.getStdPass().equals(StdPass) )
		            exists = true;
			    return exists;
		    }

		    return exists;
		    }
		
		
		
	/*	@GetMapping("/students/{StdMail}/{StdPass}")
		@ResponseBody
		public ResponseEntity<Boolean> getAllStudentEmailsAndPasswords(@PathVariable String StdMail , @PathVariable String StdPass ) {
		    List<Object[]> results = studentRepository.findAllBy();
		    List<StudentDTO> studentDTOs = new ArrayList<>();
		    boolean exists = false;

		    for (Object[] result : results) {
		       // studentDTOs.add(new StudentDTO((String) result[0], (String) result[1]));
		        if ((String) result[0] == StdMail  && (String) result[1] == StdPass )
		        	exists = true;
		    }
		   // boolean exists = false;
		   /* for (StudentDTO dto : studentDTOs) {
		        if (dto.getStdMail().equals(StdMail) && dto.getStdPass().equals(StdPass)) {
		            exists = true;
		            break;
		        }
		    }
		    return ResponseEntity.ok(exists);
		}*/
		
		
		/*
		@GetMapping("/students/login")
		@ResponseBody
	    public LoginMessage  loginStudent(LoginController logicontroller) {
	        
	        Student student1 = studentRepository.findByEmail(logicontroller.getEmail());
	        if (student1 != null) {
	            String password = logicontroller.getPass();
	            String encodedPassword = student1.getStdPass();
	            Boolean isPwdRight = false; //passwordEncoder.matches(password, encodedPassword);
	            if (password==encodedPassword) { isPwdRight=true; }
	            if (isPwdRight) {
	                Optional<Student> student = studentRepository.findOneByEmailAndPassword(logicontroller.getEmail(), encodedPassword);
	                if (student.isPresent()) {
	                    return new LoginMessage("Login Success", true);
	                } else {
	                    return new LoginMessage("Login Failed", false);
	                }
	            } else {
	 
	                return new LoginMessage("password Not Match", false);
	            }
	        }else {
	            return new LoginMessage("Email not exits", false);
	        }
	 
	 
	    }*/



	
	/*@GetMapping("/students/new")
	public String createStudentForm(Model model) {
		
		// create student object to hold student form data
		Student student = new Student();
		model.addAttribute("student", student);
		return "create_student";
		
	}
	
	@PostMapping("/students")
	public String saveStudent(@ModelAttribute("student") Student student) {
		studentService.saveStudent(student);
		return "redirect:/students";
	}
	
	@GetMapping("/students/edit/{StdID}")
	public String editStudentForm(@PathVariable int StdID, Model model) {
		model.addAttribute("student", studentService.getStudentById(StdID));
		return "edit_student";
	}

	@PostMapping("/students/{StdID}")
	public String updateStudent(@PathVariable int StdID,
			@ModelAttribute("student") Student student,
			Model model) {
		
		// get student from database by id
		Student existingStudent = studentService.getStudentById(StdID);
		existingStudent.setStdID(StdID);
		existingStudent.setStdFName(student.getStdFName());
		existingStudent.setStdLName(student.getStdLName());
		existingStudent.setStdMail(student.getStdMail());
		existingStudent.setStdPass(student.getStdPass());
		existingStudent.setStdTlf(student.getStdTlf());
		existingStudent.setStdLevel(student.getStdLevel());
		existingStudent.setStdConfirmation(student.getStdConfirmation());
		
		// save updated student object
		studentService.updateStudent(existingStudent);
		return "redirect:/students";		
	}
	
	// handler method to handle delete student request
	
	@GetMapping("/students/{StdID}")
	public String deleteStudent(@PathVariable int StdID) {
		studentService.deleteStudentById(StdID);
		return "redirect:/students";
	}*/
	
}
