package com.security.spring_security.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.security.spring_security.dto.AuthRequest;
import com.security.spring_security.dto.AuthResponse;
import com.security.spring_security.dto.RegisterRequest;
import com.security.spring_security.entity.User;
import com.security.spring_security.repo.UserRepo;
import com.security.spring_security.security.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final UserRepo userRepo;
    private final JwtUtil jwtUtil;

    public void register(RegisterRequest request) {
        @SuppressWarnings("unused")
        User user = User.builder()
                        .username(request.getUsername())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .build();
    }

    public AuthResponse login(AuthRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        var user = userRepo.findByUsername(request.getUsername()).orElseThrow();

        String token = jwtUtil.generateToken(user.getUsername());

        return new AuthResponse(token);
    }
}