package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register user
    public Model registerUser(dto d) {

        Model user = new Model();
        user.setName(d.getName());
        user.setEmail(d.getEmail());
        user.setPassword(d.getPassword());

        return userRepository.save(user);
    }

    // Login user
    public Model loginUser(dto d) {

        List<Model> users = userRepository.findAll();

        for(Model user : users) {

            if(user.getEmail().equals(d.getEmail()) &&
               user.getPassword().equals(d.getPassword())) {

                return user;
            }

        }

        return null;
    }

    // Get all users
    public List<Model> getAllUsers() {

        return userRepository.findAll();

    }

}