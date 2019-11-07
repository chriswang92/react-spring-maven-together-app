package com.chriswang.springreactsite.mapper;

//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//import com.chriswang.springreactsite.model.User;
//import org.springframework.jdbc.core.RowMapper;
//
//public class UserRowMapper implements RowMapper<User> {
//    @Override
//    public User mapRow(ResultSet rs, int arg1) throws SQLException {
//        User user = new User();
//        user.setId(Long.valueOf(rs.getString("id")));
//        user.setUsername(rs.getString("username"));
//        user.setPassword(rs.getString("password"));
//        return user;
//    }
//}