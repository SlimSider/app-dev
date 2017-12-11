package hu.elte.easybet.repository;

import hu.elte.easybet.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);
}
