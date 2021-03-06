package com.chriswang.springreactsite.service;

import com.chriswang.springreactsite.model.Book;
import com.chriswang.springreactsite.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookService {

    @Autowired
    BookRepository repository;

    public Iterable<Book> getAll() {
        return repository.findAll();
    }
    public Book add(Book book) throws Exception {
        try {
            return repository.save(book);
        } catch (Exception e) {
            throw new Exception(e);
        }
    }
}
