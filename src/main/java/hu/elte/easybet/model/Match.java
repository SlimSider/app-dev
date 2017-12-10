package hu.elte.easybet.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "matches")
@Data
@AllArgsConstructor
@NoArgsConstructor
//@EqualsAndHashCode(callSuper = true)
public class Match extends BaseEntity{

    @Column(nullable = false)
    private String home;
    
    @Column(nullable = false)
    private String away;
    
    @Column(nullable = false)
    private Boolean isActive;

    @Column
    private int homeScore;
    
    @Column
    private int awayScore;
    
    @Column
    private int htHomeScore;
    
    @Column
    private int htAwayScore;

    @JsonIgnore
    @OneToMany(mappedBy="match", cascade = CascadeType.ALL)
    private List<Event> events;
    
}
