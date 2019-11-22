package com.chriswang.springreactsite;

import com.chriswang.springreactsite.model.Blog;
import com.chriswang.springreactsite.model.Book;
import com.chriswang.springreactsite.model.User;
import com.chriswang.springreactsite.repository.BlogRepository;
import com.chriswang.springreactsite.repository.BookRepository;
import com.chriswang.springreactsite.repository.UserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * @author CWang
 */
@Component
public class Dataloader implements ApplicationRunner {

    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BlogRepository blogRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        for (int i=0;i<3;i++) {
            bookRepository.save(new Book("AutoLoadedBook - "+ RandomStringUtils.randomAlphabetic(10)));
            userRepository.save(new User("AutoLoadedUser - "+ RandomStringUtils.randomAlphabetic(10)));
            blogRepository.save(new Blog("AutoLoadedBlog - "+ RandomStringUtils.randomAlphabetic(10),
                    "AutoLoadedBlogContent - "+ RandomStringUtils.randomAlphabetic(30)));
        }
    }
}
