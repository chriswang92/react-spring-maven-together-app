package com.chriswang.springreactsite.repository;

import com.chriswang.springreactsite.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
