package org.cours.springboot.coursspringboot.Repositories;
import org.cours.springboot.coursspringboot.models.Voiture;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;

@RepositoryRestController

public interface VoitureRepository extends CrudRepository<Voiture, Long> {
    List<Voiture> findByModele(@Param("modele") String modele);
    List<Voiture> findByCouleur(@Param("couleur") String couleur);


}
