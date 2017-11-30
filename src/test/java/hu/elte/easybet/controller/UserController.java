package hu.elte.easybet.controller;

import hu.elte.easybet.model.User;
import hu.elte.easybet.service.UserService;
import hu.elte.easybet.utility.Response;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Response<User> get(@PathVariable("id") int id) {
        Optional<User> optionalUser = userService.get(id);

        if (optionalUser.isPresent()) {
            return Response.ok(optionalUser.get());
        }

        return Response.error("No such user!");
    }

    @PostMapping("/login")
    public Response<User> login(
        @RequestParam(value = "username") String username,
        @RequestParam(value = "password") String password
    ) {
        Optional<User> optionalUser = userService.login(username, password);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            
            return Response.ok(user);
        }

        return Response.error("Wrong username-password pair!");
    }

    @PostMapping("/register")
    public Response<User> register(
        @RequestParam(value = "username") String username,
        @RequestParam(value = "password") String password
    ) {
        Optional<User> optionalUser = userService.register(username, password);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            
            return Response.ok(user);
        }

        return Response.error("Username is already in use!");
    }
}