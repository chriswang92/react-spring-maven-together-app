package mySite4fun.chriswang.springreactblog.controller;

import mySite4fun.chriswang.springreactblog.model.User;
import mySite4fun.chriswang.springreactblog.utils.Utilities;
import org.json.JSONArray;
import org.springframework.web.bind.annotation.*;

import org.json.JSONObject;

import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("api/")
public class UserController {

    private static List<User> addedUsers = new LinkedList<>();
    private static int userId = 0;

    @RequestMapping(value = "user", method = RequestMethod.GET)
    public String getUser() {
//        System.out.println("The user added is: "+user+"\n username = " + user.getUsername() + "\n password = " + user.getPassword());
//        user.setId(++userId);
        JSONArray jsonArray = new JSONArray();
        for (User u : addedUsers) {
            JSONObject userJson = Utilities.createJSONObject(u);
            jsonArray.put(userJson);
        }
        System.out.println("The users returned=" + jsonArray.toString());
        return jsonArray.toString();
    }

    @RequestMapping(value = "user", method = RequestMethod.POST)
    public String addUser(@RequestBody User user) {
        System.out.println("The user added is: "+user+"\n username = " + user.getUsername() + "\n password = " + user.getPassword());
        user.setId(++userId);
        JSONObject response = Utilities.createJSONObject(user);
        if (response != null) {
            addedUsers.add(user);
        }
        return response.toString();
    }
}
