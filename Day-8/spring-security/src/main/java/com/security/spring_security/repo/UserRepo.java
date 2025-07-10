package com.security.spring_security.repo;
 
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.spring_security.entity.User;
 
public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}