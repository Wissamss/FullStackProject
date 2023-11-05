package org.cours.springboot.coursspringboot.controllers;

import org.cours.springboot.coursspringboot.Repositories.VoitureRepository;
import org.cours.springboot.coursspringboot.models.Voiture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureController {
    @Autowired
    private VoitureRepository voitureRepository;

    @RequestMapping("/voitures")
    public Iterable<Voiture> getVoitures(){
        return voitureRepository.findAll();
    }

    @PostMapping("/voitures")
    public void addVoiture(@RequestBody Voiture voiture){
        voitureRepository.save(voiture);
    }

    @DeleteMapping("/voitures/{id}")
    public void deleteVoiture(@PathVariable long id){
        voitureRepository.deleteById(id);
    }
}
