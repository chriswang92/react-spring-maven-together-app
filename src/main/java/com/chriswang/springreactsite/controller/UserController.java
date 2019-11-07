package com.chriswang.springreactsite.controller;

import com.chriswang.springreactsite.model.User;
import com.chriswang.springreactsite.service.UserService;
import com.chriswang.springreactsite.utils.Utilities;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.json.JSONObject;

import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    UserService userService;

//    private static List<User> addedUsers = new LinkedList<>();
//    private static int userId = 0;
//
//    @RequestMapping(value = "user", method = RequestMethod.GET)
//    public String getUser() {
////        System.out.println("The user added is: "+user+"\n username = " + user.getUsername() + "\n password = " + user.getPassword());
////        user.setId(++userId);
//        JSONArray jsonArray = new JSONArray();
//        for (User u : addedUsers) {
//            JSONObject userJson = Utilities.createJSONObject(u);
//            jsonArray.put(userJson);
//        }
//        System.out.println("The users returned=" + jsonArray.toString());
//        return jsonArray.toString();
//    }

    @RequestMapping(value = "users", method = RequestMethod.GET)
    public Iterable<User> getAllUsers() {
        return userService.findAll();
    }

    @RequestMapping(value = "user", method = RequestMethod.POST)
    public String addUser(@RequestBody User user) {
//        System.out.println("The user added is: "+user+"\n username = " + user.getUsername() + "\n password = " + user.getPassword());
//        user.setId(++userId);
//        JSONObject response = Utilities.createJSONObject(user);
//        if (response != null) {
//            addedUsers.add(user);
//        }
        String response = userService.addUser(user);
        System.out.println("Add user response="+response);
        return response;
    }
}
