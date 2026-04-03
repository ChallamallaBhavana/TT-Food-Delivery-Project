package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")

public class UserController {

    @Autowired
    private UserService userService;

    // Register
    @PostMapping("/register")
    public Model register(@RequestBody dto d) {
        return userService.registerUser(d);
    }

    // Login
    @PostMapping("/login")
    public Model login(@RequestBody dto d) {
        return userService.loginUser(d);
    }

    // Get All Users
    @GetMapping("/all")
    public List<Model> getUsers() {
        return userService.getAllUsers();
    }
}