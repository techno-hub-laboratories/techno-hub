package com.technoHub.service;

import com.technoHub.model.User;

public interface UserServices {
	public User signUp(User user);
	
	public User editProfile( User user);

	boolean isValidEmail(String email);
}
