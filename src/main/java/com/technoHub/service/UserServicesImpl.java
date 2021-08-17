package com.technoHub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.technoHub.model.User;
import com.technoHub.repository.UserRepository;

@Service
public class UserServicesImpl implements UserServices{
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public User signUp(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}

	@Override
	public boolean isValidEmail(String email) {
		return !userRepository.existsById(email);
	}

	@Override
	public User editProfile(User user) {
		return userRepository.save(user);
	}
	
	
}
