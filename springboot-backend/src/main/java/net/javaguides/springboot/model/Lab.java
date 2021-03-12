package net.javaguides.springboot.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "labs")
public class Lab{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	 
	private int labId;
	
	@Column(name="labTest")
	private String labTest;
	
	@Column(name="testResult")
	private String testResult;
	
	@Column(name="patient")
	private String patient;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="consultant")
	private String consultant;
	
	@Column(name="date")
	private String date;
	
	@Column(name="time")
	private String time;
	
	public Lab() {
		
	}
		
	public Lab(String labTest, String testResult, String patient, String gender, String consultant, String date,
			String time) {
		super();
		this.labTest = labTest;
		this.testResult = testResult;
		this.patient = patient;
		this.gender = gender;
		this.consultant = consultant;
		this.date = date;
		this.time = time;
	}
	
	
	public int getLabId() {
		return labId;
	}
	public void setLabId(int labId) {
		this.labId = labId;
	}
	public String getLabTest() {
		return labTest;
	}
	public void setLabTest(String labTest) {
		this.labTest = labTest;
	}
	public String getTestResult() {
		return testResult;
	}
	public void setTestResult(String testResult) {
		this.testResult = testResult;
	}
	public String getPatient() {
		return patient;
	}
	public void setPatient(String patient) {
		this.patient = patient;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getConsultant() {
		return consultant;
	}
	public void setConsultant(String consultant) {
		this.consultant = consultant;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
	
	
}

 