package hu.elte.easybet.repository;

import hu.elte.easybet.model.Bet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Godzsák Dávid <godzsakdavid@gmail.com>
 */
@Repository
public interface BetRepository extends CrudRepository<Bet, Long> {
    Optional<Bet> findById(Long id);
}
