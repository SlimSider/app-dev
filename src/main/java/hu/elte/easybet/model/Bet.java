package hu.elte.easybet.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "bets")
@Data
@AllArgsConstructor
@NoArgsConstructor
//@EqualsAndHashCode(callSuper = true)
public class Bet extends BaseEntity{

    private Boolean active;
    
    private Boolean winner;
    
    @Column(nullable = false)
    private double stake;

    @Column(nullable = false)
    private double winnableStake;
    
    @ManyToOne(optional=false)
    @JoinColumn(name="users_id", referencedColumnName="id")
    private User user;
    
    @ManyToOne(optional=false)
    @JoinColumn(name = "events_id", referencedColumnName = "id")
    private Event connectedEvent;

}
