package com.Forum1.ForumBoard1.repository;

import java.util.List;
//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Forum1.ForumBoard1.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {

	/*@Query("SELECT s.StdMail, s.StdPass FROM Student s")
	List<Object[]> findAllBy();
	*/
	//Optional<Student> findOneByEmailAndPassword(String StdMail, String StdPass);
	 
	//Student findByEmail(String StdMail);
}
