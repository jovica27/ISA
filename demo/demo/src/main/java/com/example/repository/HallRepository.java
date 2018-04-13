package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.example.domain.Hall;

public interface HallRepository extends Repository<Hall, Long>{
	
	public List<Hall> findAll();
	public Hall findById(Long id);
	
	@Query(value = "SELECT * FROM hall h where h.cinema_id = :cinemaID", nativeQuery=true)
	public List<Hall> findByCinemaID(@Param("cinemaID") Long cinemaID);
	
	public void save(Hall hall);

}
