package hu.elte.easybet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.elte.easybet.model.Bet;
import hu.elte.easybet.repository.BetRepository;

/**
 * @author Godzsák Dávid <godzsakdavid@gmail.com>
 */
@Service
public class BetService {

    @Autowired
    private BetRepository betRepository;

    public Iterable<Bet> findAll() {
        return betRepository.findAll();
    }


    public Bet create(Bet bet) {
        if(betRepository.findById(bet.getId()).isPresent()){
            
        }
        return betRepository.save(bet);
    }
    
    public Bet update(Bet bet) {
        return betRepository.save(bet);
    }


    public void delete(Long id) {
        betRepository.delete(id);
    }

    public Bet read(Long id) {
        return betRepository.findOne(id);
    }

   /* public void addMessage(int id, IssueMessage message) {
        Issue issue = issueRepository.findOne(id);
        message.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
        issue.getMessages().add(message);
        issueRepository.save(issue);
    }*/
}