package com.Forum1.ForumBoard1.service.impl;

import java.util.ArrayList;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import com.Forum1.ForumBoard1.entity.Student;

import com.Forum1.ForumBoard1.service.StudentService;
import com.Forum1.ForumBoard1.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	private StudentRepository studentRepository;
	
	/*@Autowired
    private PasswordEncoder passwordEncoder;*/
	
	public StudentServiceImpl(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}

	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public Student getStudentById(int StdID) {
		return studentRepository.findById(StdID).get();
	}

	@Override
	public Student updateStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public void deleteStudentById(int StdID) {
		studentRepository.deleteById(StdID);	
	}
	
	
	
	
	public Boolean getAllStudentEmailsAndPasswords( String StdMail ,  String StdPass ) {
	    List<Student> results = studentRepository.findAll();

	    boolean exists = false;

	    for (Student result : results) {
	        if ( result.getStdMail().equals(StdMail)  && result.getStdPass().equals(StdPass) )
	        	exists = true;
		    return exists;

	    }
	    return (exists);
	}
	
	
	
	
	
   /* public LoginMessage  loginStudent(LoginController logicontroller) {
    	List<Student> sts = getAllStudents();
        Student student1 = studentRepository.findByEmail(logicontroller.getEmail());
        if (student1 != null) {
            String password = logicontroller.getPass();
            String encodedPassword = student1.getStdPass();
            Boolean isPwdRight = false; //passwordEncoder.matches(password, encodedPassword);
            if (password==encodedPassword) { isPwdRight=true; }
            if (isPwdRight) {
                Optional<Student> student = studentRepository.findByEmail(logicontroller.getEmail());
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
  /*  @Override
    public String loginStudent(LoginController logicontroller) {
        String ch="mrigel";
        return ch;
 
 
    }*/
	
}
