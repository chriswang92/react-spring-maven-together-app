package com.chriswang.springreactsite;
//
//import com.zaxxer.hikari.*;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.*;
//import javax.sql.DataSource;
//
//@Configuration
//public class DatabaseConfig {
//
//    @Value("${spring.datasource.url}")
//    private String dbUrl;
//
//    @Value("${spring.datasource.driverClassName")
//    private String driverClassName;
//
//    @Bean
//    public DataSource dataSource() {
//        HikariConfig config = new HikariConfig();
//        config.setJdbcUrl(dbUrl);
//        config.setDriverClassName(driverClassName);
//        config.setUsername("postgres");
//        config.setPassword("a$920705");
//        return new HikariDataSource(config);
//    }
//}