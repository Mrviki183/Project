package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.book;

 

public interface bookrepo extends JpaRepository<book, Integer>
{
	
}