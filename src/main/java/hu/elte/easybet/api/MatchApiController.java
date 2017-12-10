package hu.elte.easybet.api;

import hu.elte.easybet.service.MatchService;
import hu.elte.easybet.service.UserService;
import hu.elte.easybet.service.annotations.Role;
import hu.elte.easybet.model.Match;
import hu.elte.easybet.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/match")
public class MatchApiController {

    @Autowired
    private MatchService matchService;

    @Autowired
    private UserService userService;

    @GetMapping
    private ResponseEntity<Iterable<Match>> list() {
        Iterable<Match> match = matchService.findAll();
        return ResponseEntity.ok(match);
    }

    @Role(User.Role.ADMIN)
    @PostMapping
    private ResponseEntity<Match> create(@RequestBody Match match) {
        Match saved = matchService.create(match);
        return ResponseEntity.ok(saved);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @GetMapping("/{id}")
    private ResponseEntity<Match> read(@PathVariable Long id) {
        Match read = matchService.read(id);
        return ResponseEntity.ok(read);
    }

    @Role(User.Role.ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Match> update(@PathVariable Long id, @RequestBody Match match) {
        Match updated = matchService.update(id, match);
        return ResponseEntity.ok(updated);
    }

    @Role(User.Role.ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable Long id) {
        matchService.delete(id);
        return ResponseEntity.ok().build();
    }
}