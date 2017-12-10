package hu.elte.easybet.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "bets")
@Data
@AllArgsConstructor
@NoArgsConstructor
//@EqualsAndHashCode(callSuper = true)
public class Bet extends BaseEntity{

    @Column(nullable = false)
    private boolean active;
    
    @Column(nullable = false)
    private boolean winner;
    
    @Column(nullable = false)
    private double stake;

    @Column(nullable = false)
    private double winnableStake;
    
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "Bet_User", 
        joinColumns = { @JoinColumn(name = "bets_id") }, 
        inverseJoinColumns = { @JoinColumn(name = "users_id") }
    )
    private List<User> users;
    
    @ManyToOne(optional=false)
    @JoinColumn(name = "events_id", referencedColumnName = "id")
    private Event connectedEvent;

}
