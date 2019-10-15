package mySite4fun.chriswang.springreactblog.utils;

import mySite4fun.chriswang.springreactblog.model.User;
import org.json.JSONObject;

public class Utilities {
    public static JSONObject createJSONObject(Object obj) {
        JSONObject jsonObject = null;
        if (obj.getClass().equals(User.class)) {
            jsonObject = new JSONObject();
            jsonObject.put("id", ((User) obj).getId());
            jsonObject.put("username", ((User) obj).getUsername());
            jsonObject.put("password", ((User) obj).getPassword());
//            JSONObject userInfo = new JSONObject();
//            userInfo.put("username", ((User) obj).getUsername());
//            userInfo.put("password", ((User) obj).getPassword());
//            jsonObject.put("userInfo", userInfo);
        }
        return jsonObject;
    }
}
