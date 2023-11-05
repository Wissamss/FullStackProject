package org.cours.springboot.coursspringboot.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Proprietaire {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nom;
    private String prenom;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="proprietaire")
    @JsonIgnore
    private List<Voiture> voitures;

    public Proprietaire(String nom, String prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
}
