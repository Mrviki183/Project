	package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "book")
public class book {
	@Id
	@Column(name = "S_no")
	private int S_no ;
	@Column(name = "fantasy")
	private String fantasy ;
	@Column(name = "Science_Fiction")
	private String Science_Fiction;
	@Column(name = "Horror")
	private String Horror;
	@Column(name="Romance")
	private String Romance;
	@Column(name="Thriller")
	private String Thriller;
	@Column(name="Mystery")
	private String Mystery;
	

	
	public int getS_no() {
		return S_no;
	}

	public void setS_no(int s_no) {
		S_no = s_no;
	}

	public String getFantasy() {
		return fantasy;
	}

	public void setFantasy(String fantasy) {
		this.fantasy = fantasy;
	}

	public String getScience_Fiction() {
		return Science_Fiction;
	}

	public void setScience_Fiction(String science_Fiction) {
		Science_Fiction = science_Fiction;
	}

	public String getHorror() {
		return Horror;
	}

	public void setHorror(String horror) {
		Horror = horror;
	}

	public String getRomance() {
		return Romance;
	}

	public void setRomance(String romance) {
		Romance = romance;
	}

	public String getThriller() {
		return Thriller;
	}

	public void setThriller(String thriller) {
		Thriller = thriller;
	}

	public String getMystery() {
		return Mystery;
	}

	public void setMystery(String mystery) {
		Mystery = mystery;
	}
	


	public book(int S_no,String fantasy, String Science_Fiction, String Horror,String Romance,String Thriller,String Mystery) {
		super();
		this.S_no=S_no;
		this.fantasy = fantasy;
		this.Science_Fiction = Science_Fiction;
		this.Horror = Horror;	
		this.Romance = Romance;	
		this.Thriller = Thriller;	
		this.Mystery = Mystery;
	}
	
	public book() {}
}