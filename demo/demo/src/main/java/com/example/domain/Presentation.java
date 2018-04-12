package com.example.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "presentation")
public class Presentation implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "presentation_id", nullable = false, updatable = false)
    private Long id;
	
	@Column(name = "date", nullable = false)
    private String date;
	
	
	@Column(name = "time", nullable = false)
	private String time;
	
	@ManyToOne
    @JoinColumn(name="performance_id", nullable=false)
    private Performance performance;

	
	@OneToMany(mappedBy="presentation")
    private Set<Card> cards;

	
	@Column(name = "discount")
	private int discount;
	

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public Performance getPerformance() {
		return performance;
	}


	public void setPerformance(Performance performance) {
		this.performance = performance;
	}


	

	public Set<Card> getCards() {
		return cards;
	}


	public void setCards(Set<Card> cards) {
		this.cards = cards;
	}


	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}

	

	public int getDiscount() {
		return discount;
	}


	public void setDiscount(int discount) {
		this.discount = discount;
	}


	public Presentation() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Presentation(String date, String time, Performance performance, Set<Card> cards, int discount) {
		super();
		this.date = date;
		this.time = time;
		this.performance = performance;
		this.cards = cards;
		this.discount = discount;
	}


	


	




	
	

}
