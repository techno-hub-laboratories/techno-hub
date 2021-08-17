package com.technoHub.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Entity
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String firstName;
	private String lastName;
	private String userId;
	private String mobileNumber;
	private String category;
	private String subject;
	private String description;
	private Date date;

	public Request() {
	}

	public Request(String userId, String mobileNumber, String firstName, String lastName, String category,
			String subject,
			String description) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.userId = userId;
		this.mobileNumber = mobileNumber;
		this.subject = subject;
		this.category = category;
		this.description = description;
		this.date = new Date();
	}
}
