//package mySite4fun.chriswang.springreactblog.dao;
//
//import UserRowMapper;
//import User;
//
//import java.sql.PreparedStatement;
//import java.sql.SQLException;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import org.springframework.dao.DataAccessException;
//import org.springframework.jdbc.core.PreparedStatementCallback;
//import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
//import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
//import org.springframework.jdbc.core.namedparam.SqlParameterSource;
//import org.springframework.jdbc.support.GeneratedKeyHolder;
//import org.springframework.jdbc.support.KeyHolder;
//import org.springframework.stereotype.Repository;
//@Repository
//public class UserDaoImpl implements UserDao {
//
//
//    NamedParameterJdbcTemplate template;
//
//    public UserDaoImpl(NamedParameterJdbcTemplate template) {
//        this.template = template;
//    }
//
//    @Override
//    public List<User> findAll() {
//        return template.query("select * from user", new UserRowMapper());
//    }
//
//    @Override
//    public void insertUser(User user) {
//
//    }
//
//    @Override
//    public void updateUser(User user) {
//
//    }
//
//    @Override
//    public void executeUpdateUser(User user) {
//
//    }
//
//    @Override
//    public void deleteUser(User user) {
//
//    }
//}
