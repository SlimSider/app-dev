package hu.elte.easybet.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="USERS")
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity{
    
    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private Double balance;
    
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    private enum Role{GUEST,USER,ADMIN};

}