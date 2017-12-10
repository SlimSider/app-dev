package hu.elte.easybet.service;

import hu.elte.easybet.model.Match;
import hu.elte.easybet.repository.MatchRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MatchService {

    @Autowired
    private MatchRepository matchRepository;

    public Iterable<Match> findAll() {
        return matchRepository.findAll();
    }


    public Match create(Match match) {
        return matchRepository.save(match);
    }
    
    public Optional<Match> findById(Long id) {
        return Optional.of(matchRepository.findOne(id));
    }
    
    public Match update(Long id, Match match) {
        System.out.println(match.toString());
        return matchRepository.save(match);
    }


    public void delete(Long id) {
        matchRepository.delete(id);
    }

    public Match read(Long id) {
        return matchRepository.findOne(id);
    }
}