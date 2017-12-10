package hu.elte.easybet.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "events")
@Data
@AllArgsConstructor
@NoArgsConstructor
//@EqualsAndHashCode(callSuper = true)
public class Event extends BaseEntity {

    @Column(nullable = false)
    private double homeOdds;
    
    @Column(nullable = false)
    private double drawOdds;
    
    @Column(nullable = false)
    private double awayOdds;
    
    @Column
    private Boolean isActive;

    @Column(nullable = false)
    //@Enumerated(EnumType.STRING)
    private String type; 

    @ManyToOne(optional=false)
    @JoinColumn(name="matches_id", referencedColumnName="id")
    private Match match;
    
    @OneToMany(mappedBy="connectedEvent", cascade = CascadeType.ALL)
    private List<Bet> bets;

    public enum EventType {
        WINNER, HT_WINNER, MGS_OVERT;
    }
}
