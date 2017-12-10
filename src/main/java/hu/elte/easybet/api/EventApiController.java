package hu.elte.easybet.api;

import hu.elte.easybet.model.Event;
import hu.elte.easybet.service.EventService;
import hu.elte.easybet.service.UserService;
import hu.elte.easybet.service.annotations.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static hu.elte.easybet.model.User.Role.ADMIN;
import static hu.elte.easybet.model.User.Role.USER;

@RestController
@RequestMapping("/api/event")
public class EventApiController {

    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;

    @Role({ADMIN, USER})
    @GetMapping
    private ResponseEntity<Iterable<Event>> list() {
        Iterable<Event> category = eventService.findAll();
        return ResponseEntity.ok(category);
    }

    @Role(ADMIN)
    @PostMapping
    private ResponseEntity<Event> create(@RequestBody Event event) {
        Event saved = eventService.create(event);
        return ResponseEntity.ok(saved);
    }

    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Event> read(@PathVariable Long id) {
        Event read = eventService.read(id);
        return ResponseEntity.ok(read);
    }
    
    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Event> update(@PathVariable Long id, @RequestBody Event category) {
        Event updated = eventService.update(id, category);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable Long id) {
        eventService.delete(id);
        return ResponseEntity.ok().build();
    }
}