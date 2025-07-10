package com.security.spring_security.dto;
 
import lombok.Data;

@Data
public class RegisterRequest {
	private String username;
	private String password;
}