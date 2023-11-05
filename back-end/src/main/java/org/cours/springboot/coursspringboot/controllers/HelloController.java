package org.cours.springboot.coursspringboot.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping("/")
    public String bienvenueSpring(){
        return "Bienvenue au site des voitures";
    }
}
