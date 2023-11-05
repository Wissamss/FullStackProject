package org.cours.springboot.coursspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Main {
    /*
    @Autowired
    private VoitureRepository voitureRepository;
    @Autowired
    private ProprietaireRepository proprietaireRepository;

     */

    public static void main(String[] args){
        SpringApplication.run(Main.class, args);

    }

/*
    @Bean
    CommandLineRunner runner(){
        return args->{
            Proprietaire proprietaire1 = new Proprietaire("Ali" , "Hassan");
            Proprietaire proprietaire2 = new Proprietaire("Najat" , "Bani");
            proprietaireRepository.save(proprietaire1);
            proprietaireRepository.save(proprietaire2);
            voitureRepository.save(new Voiture("Toyota", "Corolla", "Grise", "A-1-9090", 2018, 95000));
            voitureRepository.save(new Voiture("Ford", "Fiesta", "Rouge", "A-2-8090", 2015, 90000));
            voitureRepository.save(new Voiture("Honda", "CRV", "Bleu", "A-3-7090", 2016, 140000));
        };
    }

 */
}
