package com.chriswang.springreactsite.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.net.URI;
import java.net.URISyntaxException;

@Configuration
public class DatabaseConfig {
    // for production: heroku app use
//    @Bean
//    public BasicDataSource dataSource() throws URISyntaxException {
//        URI dbUri = new URI(System.getenv("DATABASE_URL"));
//
//        String username = dbUri.getUserInfo().split(":")[0];
//        String password = dbUri.getUserInfo().split(":")[1];
//        String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath();
//
//        BasicDataSource basicDataSource = new BasicDataSource();
//        basicDataSource.setUrl(dbUrl);
//        basicDataSource.setUsername(username);
//        basicDataSource.setPassword(password);
//        basicDataSource.setDriverClassName("org.postgresql.Driver");
//
//        return basicDataSource;
//    }

    // for local: development use
    @Value("${spring.datasource.url}")
    private String dbUrl;

    @Value("${spring.datasource.driverClassName}")
    private String driverClassName;
    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(dbUrl);
        config.setDriverClassName(driverClassName);
        config.setUsername("postgres");
        config.setPassword("a$920705");
        return new HikariDataSource(config);
    }
}