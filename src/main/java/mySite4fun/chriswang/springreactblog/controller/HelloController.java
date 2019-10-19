package mySite4fun.chriswang.springreactblog.controller;

import mySite4fun.chriswang.springreactblog.model.Message;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, the time now is: " + new Date() + "\n";
    }

    @RequestMapping("/greeting")
    public Message greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        Message m = new Message(name);
        System.out.println(m.toString());
        return m;
    }
}
