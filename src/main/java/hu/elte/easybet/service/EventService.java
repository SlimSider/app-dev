package hu.elte.easybet.service;

import hu.elte.easybet.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.elte.easybet.repository.EventRepository;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Iterable<Event> findAll() {
        return eventRepository.findAll();
    }


    public Event create(Event event) {
        System.out.println(event.toString());
        if(eventRepository.findById(event.getId()).isPresent()){
            
        }
        return eventRepository.save(event);
    }
    
    public Event update(Long id, Event event) {
        return eventRepository.save(event);
    }


    public void delete(Long id) {
        eventRepository.delete(id);
    }

    public Event read(Long id) {
        return eventRepository.findOne(id);
    }

   /* public void addMessage(int id, IssueMessage message) {
        Issue issue = issueRepository.findOne(id);
        message.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
        issue.getMessages().add(message);
        issueRepository.save(issue);
    }*/
}