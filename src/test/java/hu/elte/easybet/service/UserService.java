package hu.elte.easybet.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.elte.easybet.model.User;
import hu.elte.easybet.repository.UserRepository;
import hu.elte.easybet.utility.Response;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public Optional<User> loginWithId(String name, String password) {
        Optional<User> optionalUser = userRepository.findByName(name);
        return optionalUser.filter(user -> user.getPassword().equals(password));
    }
    
    public Optional<User> loginWithEmail(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        return optionalUser.filter(user -> user.getPassword().equals(password));
    }

    public Optional<User> register(String name, String password) {
        Optional<User> optionalUser = userRepository.findByName(name);

        if(optionalUser.isPresent()) {
            return Optional.empty();
        } else {
            User user = new User();

            user.setUsername(name);
            user.setPassword(password);

            userRepository.save(user);

            return Optional.of(user);
        }
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
}