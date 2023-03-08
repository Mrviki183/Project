package com.example.demo.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.book;
import com.example.demo.Repository.bookrepo;

@Service
public class bookService {
	@Autowired
	private bookrepo stu;
	public book savedata(book s) {
		return stu.save(s);
	}
	public List<book> findall(){
		return stu.findAll();
	}
	public void deleteDepartmentById(int id) {
		stu.deleteById(id); 
	}
	public book updatedata(book s) {
		return stu.saveAndFlush(s);
    }
	
}