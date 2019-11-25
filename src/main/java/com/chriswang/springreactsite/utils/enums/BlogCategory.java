package com.chriswang.springreactsite.utils.enums;

public enum BlogCategory {
    DEFAULT(0, "Default"),
    LIFE(1, "Life"),
    FITNESS(2, "Fitness"),
    PROGRAMMING(3, "Programming"),
    FRONTEND(4, "Frontend");
    public static final int size = BlogCategory.values().length;
    public final int id;
    public final String label;
    private BlogCategory(int id, String label) {
        this.id = id;
        this.label = label;
    }
    @Override
    public String toString() {
        return "BlogCategory{" +
                "id=" + id +
                ", label='" + label + '\'' +
                '}';
    }
}
