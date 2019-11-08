package com.chriswang.springreactsite;

//import com.chriswang.springreactsite.model.Book;
//import com.chriswang.springreactsite.model.User;
//import com.chriswang.springreactsite.repository.BookRepository;
//import com.chriswang.springreactsite.repository.UserRepository;
//import org.apache.commons.lang3.RandomStringUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class Dataloader implements ApplicationRunner {
//
//    @Autowired
//    private BookRepository bookRepository;
//    @Autowired
//    private UserRepository userRepository;
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        for (int i=0;i<10;i++) {
//            bookRepository.save(new Book("AutoLoadedBook - "+ RandomStringUtils.randomAlphabetic(10)));
//        }
//        for (int ii=0;ii<10;ii++) {
//            userRepository.save(new User("AutoLoadedUser - "+ RandomStringUtils.randomAlphabetic(10)));
//        }
//    }
//}
