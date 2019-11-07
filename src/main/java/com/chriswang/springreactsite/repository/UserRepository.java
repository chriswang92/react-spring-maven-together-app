package com.chriswang.springreactsite.repository;

import com.chriswang.springreactsite.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * @author CWang
 */
public interface UserRepository extends CrudRepository<User, Long> {
}
