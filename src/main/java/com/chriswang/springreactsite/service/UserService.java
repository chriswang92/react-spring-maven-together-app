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
    private UserRepository repository;
    
    public Iterable<User> findAll() {
        return repository.findAll();
    }
    public User add(User user) throws Exception {
        try {
            return repository.save(user);
        } catch (Exception e) {
            throw new Exception(e);
        }
    }
}