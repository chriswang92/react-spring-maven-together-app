package com.chriswang.springreactsite.controller;

import com.chriswang.springreactsite.model.Blog;
import com.chriswang.springreactsite.service.BlogService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/")
public class BlogController {

    @Autowired
    private BlogService service;

    @RequestMapping(value = "blog", method = RequestMethod.GET)
    public Iterable<Blog> getAll() {
        return service.getAll();
    }
    @RequestMapping(value = "blog", method = RequestMethod.POST)
    public Blog add(@RequestBody Blog blog) throws Exception {
        return service.add(blog);
    }
}
