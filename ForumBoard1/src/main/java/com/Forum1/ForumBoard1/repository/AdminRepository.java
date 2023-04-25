package com.Forum1.ForumBoard1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Forum1.ForumBoard1.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin,Integer> {

}
