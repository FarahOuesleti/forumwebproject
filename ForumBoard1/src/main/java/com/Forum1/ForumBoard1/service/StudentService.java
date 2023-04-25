package com.Forum1.ForumBoard1.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.Forum1.ForumBoard1.entity.Student;


public interface StudentService {

	List<Student> getAllStudents();
	
	Student saveStudent(Student student);
	
	Student getStudentById(int StdID);
	
	Student updateStudent(Student student);
	
	void deleteStudentById(int StdID);
	
	Boolean getAllStudentEmailsAndPasswords(String StdMail , String StdPass );
	
	//String loginMessage(LoginController loginController);
}
