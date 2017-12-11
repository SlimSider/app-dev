package hu.elte.easybet.api;

import hu.elte.easybet.model.Bet;
import hu.elte.easybet.service.BetService;
import hu.elte.easybet.service.UserService;
import hu.elte.easybet.service.annotations.Role;
import hu.elte.easybet.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bet")
public class BetApiController {

    @Autowired
    private BetService betService;

    @Autowired
    private UserService userService;

    @Role({User.Role.ADMIN, User.Role.USER})
    @GetMapping
    private ResponseEntity<Iterable<Bet>> list() {
        Iterable<Bet> bet = betService.findAll();
        return ResponseEntity.ok(bet);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @PostMapping
    private ResponseEntity<Bet> create(@RequestBody Bet bet) {
        Bet saved = betService.create(bet);
        System.out.println(saved);
        return ResponseEntity.ok(saved);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @GetMapping("/{id}")
    private ResponseEntity<Bet> read(@PathVariable Long id) {
        Bet read = betService.read(id);
        return ResponseEntity.ok(read);
    }

    @Role(User.Role.ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable Long id) {
        betService.delete(id);
        return ResponseEntity.ok().build();
    }
}