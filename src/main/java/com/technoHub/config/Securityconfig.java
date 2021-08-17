package com.technoHub.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class Securityconfig extends WebSecurityConfigurerAdapter {
	
	@Bean
	public UserDetailsService getUserDetailservice() {
		return new Userdetailservice();
	}
	
	@Bean
	public BCryptPasswordEncoder getpasswordEncoded() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public DaoAuthenticationProvider authenticationprovider() {
		DaoAuthenticationProvider dauAuthenticationProvider = new DaoAuthenticationProvider();
		
		dauAuthenticationProvider.setUserDetailsService(this.getUserDetailservice());
		dauAuthenticationProvider.setPasswordEncoder(getpasswordEncoded());
		
		return dauAuthenticationProvider;
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(this.authenticationprovider());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
			.antMatchers("/user/**").hasRole("USER")
			.antMatchers("/**").permitAll()
			.and().formLogin().loginPage("/login").and().csrf().disable().cors().disable();
	}
}
