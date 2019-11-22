package com.chriswang.springreactsite.service;

import com.chriswang.springreactsite.model.Blog;
import com.chriswang.springreactsite.model.Book;
import com.chriswang.springreactsite.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BlogService {

    @Autowired
    BlogRepository repository;

    public Iterable<Blog> getAll() {
        return repository.findAll();
    }
    public Blog add(Blog blog) throws Exception {
        try {
            return repository.save(blog);
        } catch (Exception e) {
            throw new Exception(e);
        }
    }
}
