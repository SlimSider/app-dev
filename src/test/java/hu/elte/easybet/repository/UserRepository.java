package hu.elte.easybet.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.easybet.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    public Optional<User> findByName(String name);
    public Optional<User> findById(Long id);
    public Optional<User> findByEmail(String email);
}