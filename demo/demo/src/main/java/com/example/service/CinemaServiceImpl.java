package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.Cinema;
import com.example.repository.CinemaRepository;


@Service
public class CinemaServiceImpl implements CinemaService {

	@Autowired
	private CinemaRepository cinemaRepository;
	
	@Override
	public List<Cinema> getAll() {
		
		return cinemaRepository.findAll();
		
	}

	@Override
	public Cinema getCinemaByID(Long id) {
		
		return cinemaRepository.findById(id);
		
	}

	@Override
	public boolean registerCinema(Cinema c) {
		
		cinemaRepository.save(c);
		return true;
		
		
	}

	@Override
	public Cinema getCinemaByName(String name) {
		
		return cinemaRepository.findByName(name);
	}

}