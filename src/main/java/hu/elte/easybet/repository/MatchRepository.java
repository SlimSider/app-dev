package hu.elte.easybet.repository;

import hu.elte.easybet.model.Match;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MatchRepository extends CrudRepository<Match, Long> {
    Optional<Match> findById(Long id);
}
