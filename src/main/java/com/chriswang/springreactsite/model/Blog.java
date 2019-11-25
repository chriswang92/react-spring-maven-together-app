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
    private String[] category;

    public Blog() {
    }

    public Blog(String title) {
        this(title, "", new String[] {BlogCategory.DEFAULT.label});
    }

    public Blog(String title, String content) {
        this(title, content, new String[] {BlogCategory.DEFAULT.label});
    }
    public Blog(String title, String content, String[] category) {
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

    public String[] getCategory() {
        return category;
    }

    public void setCategory(String[] category) {
        this.category = category;
    }

}