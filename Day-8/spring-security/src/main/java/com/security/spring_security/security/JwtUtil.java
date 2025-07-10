package com.security.spring_security.security;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil{
    private final String secret ="this is a security program";
    private final Long expiration =1000 * 60 * 60 * 1L;

    private Key getSigninKey(){
        return Keys.hmacShaKeyFor(secret.getBytes());
    }
 
    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(getSigninKey(), SignatureAlgorithm.HS256)
            .compact();
    }
 
    public String extractUsername(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(getSigninKey())
            .build()
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
 
    public boolean validateToken(String token) {
        try{
        Jwts.parserBuilder().setSigningKey(getSigninKey())
            .build()
            .parseClaimsJws(token);
        return true;
        }
        catch (JwtException jwtException){
        System.out.println(jwtException);
        return false;
        }
    }
}