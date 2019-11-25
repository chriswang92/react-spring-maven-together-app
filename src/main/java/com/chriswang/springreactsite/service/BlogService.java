package com.chriswang.springreactsite.service;

import com.chriswang.springreactsite.model.Blog;
import com.chriswang.springreactsite.model.Book;
import com.chriswang.springreactsite.repository.BlogRepository;
import com.chriswang.springreactsite.utils.enums.BlogCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class BlogService {

    @Autowired
    BlogRepository repository;

    public Iterable<Blog> getAll() {
        return repository.findAll();
    }
    public Iterable<BlogCategory> getAllCategory() {
        return Arrays.asList(BlogCategory.values());
    }
    public Blog add(Blog blog) throws Exception {
        try {
            return repository.save(blog);
        } catch (Exception e) {
            throw new Exception(e);
        }
    }
}
