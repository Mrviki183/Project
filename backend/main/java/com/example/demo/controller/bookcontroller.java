package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.book;
import com.example.demo.service.bookService;

import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin
@RestController
public class bookcontroller {
		
 @Autowired
 private bookService ss;
 
 @PostMapping("/savedata")
 public String savingstudent(@RequestBody book s) {
	  ss.savedata(s);
	  return "saved";
 }
 
 @GetMapping("/findall")
public List<book> listing() {
	 return ss.findall();
 }
 
 @DeleteMapping("/deleteById/{id}")
 public void deleteDepartmentById(@PathVariable("id") int id) {
	  ss.deleteDepartmentById(id);
 }
 @PutMapping("/update")
 public Boolean updatestudent(@RequestBody book s) {
	 return ss.updatedata(s)!=null;   
 }
}