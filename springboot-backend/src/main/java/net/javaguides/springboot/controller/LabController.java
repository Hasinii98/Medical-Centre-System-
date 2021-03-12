package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Lab;
import net.javaguides.springboot.repository.LabRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class LabController {

	@Autowired
	private LabRepository labRepository;
	
	//get all labReports
	
	@GetMapping("/labs")
	public List<Lab> getAlllabs(){
		return labRepository.findAll();
	}
	
	//create lab rest api
	@PostMapping("/labs")
	public Lab createLab(@RequestBody Lab lab) {
		return labRepository.save(lab);
	}
		
	
	//get lab by id rest api
	
     @GetMapping("/labs/{labId}")
	public ResponseEntity<Lab> getLabById(@PathVariable  int labId) {
    	 
    	 Lab lab  = labRepository.findById(labId)
    			 .orElseThrow(()-> new ResourceNotFoundException("Lab details does not exist with id:" + labId));
    	 
		return ResponseEntity.ok(lab);
	}
	
     //update labDetails rest api
     @PutMapping("/labs/{labId}")
     public ResponseEntity<Lab> updateLab(@PathVariable  int labId,@RequestBody Lab labDetails){
    	 
    	 
    	 Lab lab  = labRepository.findById(labId)
    			 .orElseThrow(()-> new ResourceNotFoundException("Lab details does not exist with id:" + labId));
    	 
    	 lab.setLabId(labDetails.getLabId());
    	 lab.setLabTest(labDetails.getLabTest());
    	 lab.setTestResult(labDetails.getTestResult());
    	 lab.setPatient(labDetails.getPatient());
    	 lab.setGender(labDetails.getGender());
    	 lab.setConsultant(labDetails.getConsultant());
    	 lab.setDate(labDetails.getDate());
    	 lab.setTime(labDetails.getTime());
    	 
    	 Lab updateLab = labRepository.save(lab);
    	 return ResponseEntity.ok(updateLab);    	 
    	 
     }
     
     
     
     
     //delete labDetails rest api
     @DeleteMapping("/labs/{labId}")
     public ResponseEntity<Map<String,Boolean>> deleteLab(@PathVariable int labId){
    	 
    	 Lab lab  = labRepository.findById(labId)
    			 .orElseThrow(()-> new ResourceNotFoundException("Lab details does not exist with id:" + labId));
    	 
    	 labRepository.delete(lab);
    	 Map<String, Boolean>response = new HashMap<>();
    	 response.put("deleted" , Boolean.TRUE);
    	 
    	 return ResponseEntity.ok(response);
    	 
    	 
     }
     
}














