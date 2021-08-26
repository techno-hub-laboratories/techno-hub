package com.technoHub.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Entity
public class User {
	@Id
	private String email;
	private String firstName;
	private String lastName;
	private String mobileNumber;
	private String gender;
	private String address;
	private String password;
	private String description;
	private String Role = "ROLE_USER";

	public User() {
	}

	public User(String firstName, String lastName, String mobileNumber, String address, String email, String password,
			String gender, String description) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.description = description;
	}
}
