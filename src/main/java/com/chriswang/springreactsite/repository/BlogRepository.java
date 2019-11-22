package com.chriswang.springreactsite.repository;

import com.chriswang.springreactsite.model.Blog;
import org.springframework.data.repository.CrudRepository;

public interface BlogRepository extends CrudRepository<Blog, Long> {

//    List<Book> findByName(String name);

}