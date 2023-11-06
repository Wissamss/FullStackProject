package org.cours.springboot.coursspringboot.controllers;

import org.cours.springboot.coursspringboot.Repositories.VoitureRepository;
import org.cours.springboot.coursspringboot.models.Voiture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureController {
    @Autowired
    private VoitureRepository voitureRepository;

    @RequestMapping("/voitures")
    public Iterable<Voiture> getVoitures(){
        return voitureRepository.findAll();
    }

    @RequestMapping("/voitures/{id}")
    public Optional<Voiture> getVoitureById(@PathVariable long id){
        return voitureRepository.findById(id);
    }

    @PutMapping("/voitures/{id}")
    public Voiture updateVoiture(@PathVariable long id, @RequestBody Voiture updatedVoiture){
        if (voitureRepository.existsById(id)) {
            updatedVoiture.setId(id);
            return voitureRepository.save(updatedVoiture);
        }
        return updatedVoiture;
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
