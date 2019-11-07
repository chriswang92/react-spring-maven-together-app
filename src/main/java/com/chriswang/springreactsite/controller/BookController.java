package com.chriswang.springreactsite.controller;

import com.chriswang.springreactsite.model.Book;
import com.chriswang.springreactsite.service.BookService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping(value = "books", method = RequestMethod.GET)
    public Iterable<Book> getAllBooks() {
        return bookService.getAllBooks();
    }
    @RequestMapping(value = "book", method = RequestMethod.POST)
    public void addBook() {
        bookService.addBook(new Book("Book"+ RandomStringUtils.randomAlphabetic(10)));
    }
}
