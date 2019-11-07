package com.chriswang.springreactsite.service;

import com.chriswang.springreactsite.model.Book;
import com.chriswang.springreactsite.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public Iterable<Book> getAllBooks() {
        return bookRepository.findAll();
    }
    public void addBook(Book book) {
        bookRepository.save(book);
    }
}
