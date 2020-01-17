package com.chriswang.springreactsite.utils.enums;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public enum BlogCategory {
    DEFAULT(0, "Default"),
    LIFE(1, "Life"),
    FITNESS(2, "Fitness"),
    PROGRAMMING(3, "Programming"),
    FRONTEND(4, "Frontend");
    public static final List<BlogCategory> VALUES = Collections.unmodifiableList(Arrays.asList(values()));
    public static final int SIZE = BlogCategory.values().length;
    private static final Random RANDOM = new Random();
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
    public static BlogCategory randomCategory() {
        return VALUES.get(RANDOM.nextInt(SIZE));
    }
}
