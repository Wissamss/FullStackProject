package org.cours.springboot.coursspringboot.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Voiture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String marque;
    private String modele;
    private String couleur;
    private String immatricule;
    private int annee;
    private int prix;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name="proprietaire")
    private Proprietaire proprietaire;


    public Voiture(String marque, String modele, String couleur, String immatricule, int annee, int prix) {
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.immatricule = immatricule;
        this.annee = annee;
        this.prix = prix;
    }
}
