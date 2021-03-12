package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Equipment;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment,Integer> {
	
	

}
