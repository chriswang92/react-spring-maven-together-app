package com.chriswang.springreactsite.model;

import com.chriswang.springreactsite.utils.enums.BlogCategory;

import javax.persistence.*;

@Entity
@Table(name= "Blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String content;
    private BlogCategory category;

    public Blog() {
    }

    public Blog(String title) {
        this(title, "", BlogCategory.DEFAULT);
    }

    public Blog(String title, String content) {
        this(title, content, BlogCategory.DEFAULT);
    }
    public Blog(String title, String content, BlogCategory category) {
        this.title = title;
        this.content = content;
        this.category = category;
    }
    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", category='" + category.toString() + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public BlogCategory getCategory() {
        return category;
    }

    public void setCategory(BlogCategory category) {
        this.category = category;
    }

}