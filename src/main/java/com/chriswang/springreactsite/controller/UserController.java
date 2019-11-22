package com.chriswang.springreactsite.controller;

import com.chriswang.springreactsite.model.User;
import com.chriswang.springreactsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "user", method = RequestMethod.GET)
    public Iterable<User> getAllUsers() {
        return userService.findAll();
    }

    @RequestMapping(value = "user", method = RequestMethod.POST)
    public User addUser(@RequestBody User user) throws Exception {
        return userService.add(user);
    }
}
