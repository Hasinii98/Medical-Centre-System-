package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="equipment")
public class Equipment {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)	 

@Column(name="equipmentId")
private int equipmentId;

@Column(name="equipmentName")
private String equipmentName;

@Column(name="count")
private String count;


public Equipment() {
	
}


public Equipment(String equipmentName, String count) {
	super();
	this.equipmentName = equipmentName;
	this.count = count;
}
public int getEquipmentId() {
	return equipmentId;
}
public void setEquipmentId(int equipmentId) {
	this.equipmentId = equipmentId;
}
public String getEquipmentName() {
	return equipmentName;
}
public void setEquipmentName(String equipmentName) {
	this.equipmentName = equipmentName;
}
public String getCount() {
	return count;
}
public void setCount(String count) {
	this.count = count;
}



	
}
