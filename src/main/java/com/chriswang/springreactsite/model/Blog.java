package com.chriswang.springreactsite.model;

import com.chriswang.springreactsite.utils.enums.BlogCategory;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name= "Blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    @Column(columnDefinition="TEXT")
    private String content;
    private String[] category;
    private OffsetDateTime createDateTime;
    private Long createByUserId;

    public Blog() {
        this("defaultTitle","defaultDesc","defaultContent",new String[] {BlogCategory.DEFAULT.label}, (long) 1);
    }

    public Blog(String title) {
        this(title, "defaultDesc","defaultContent", new String[] {BlogCategory.DEFAULT.label}, (long) 1);
    }
    public Blog(String title, String description) {
        this(title, description, "defaultContent", new String[] {BlogCategory.DEFAULT.label}, (long) 1);
    }
    public Blog(String title, String description, String content) {
        this(title, description, content, new String[] {BlogCategory.DEFAULT.label}, (long) 1);
    }
    public Blog(String title, String description, String content, String[] category) {
        this(title, description, content, new String[] {BlogCategory.DEFAULT.label}, (long) 1);
    }
    public Blog(String title, String description, String content, String[] category, Long createByUserId) {
        this.title = title;
        this.description = description;
        this.content = content;
        this.category = category;
        this.createByUserId=createByUserId;
        this.createDateTime=OffsetDateTime.now();
    }
    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public OffsetDateTime getCreateDateTime() {
        return createDateTime;
    }

    public void setCreateDateTime(OffsetDateTime createDateTime) {
        this.createDateTime = createDateTime;
    }

    public Long getCreateByUserId() {
        return createByUserId;
    }

    public void setCreateByUserId(Long createByUserId) {
        this.createByUserId = createByUserId;
    }
}