package com.chriswang.springreactsite.service;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import com.chriswang.springreactsite.model.User;
import com.chriswang.springreactsite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }
    public User addUser(User user) {
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            return null;
        }
    }
}