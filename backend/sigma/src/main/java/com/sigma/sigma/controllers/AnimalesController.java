package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Animales;
import com.sigma.sigma.entities.Facturas;
import com.sigma.sigma.entities.Familias;
import com.sigma.sigma.services.AnimalesService;
import com.sigma.sigma.services.FacturasService;
import com.sigma.sigma.services.FamiliasService;
import com.sigma.sigma.util.AnimalesPdf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api")
public class AnimalesController {

    @Autowired
    private AnimalesService animalesService;

    @Autowired
    private FamiliasService familiasService;


    @GetMapping("/animales")
    public List<Animales> getAnimales() {
        return animalesService.findAll();
    }

    @GetMapping("/animales/{id}")
    public Animales getAnimalesById(@PathVariable Long id) {
        return animalesService.findById(id);
    }

    @PostMapping("/animales/add")
    public Animales addAnimales(@RequestBody Animales animales) {
        return animalesService.save(animales);
    }

    @PutMapping("animales/update/{id}")
    public Animales updateAnimales(@PathVariable Long id, @RequestBody Animales animales) {
        return animalesService.update(id, animales);
    }

    @DeleteMapping("animales/delete")
    public String deleteAnimales( @RequestBody Animales animales) {
        return animalesService.delete(animales);
    }

    @DeleteMapping("animales/delete/{id}")
    public String deleteAnimalesById(@PathVariable Long id) {
        return animalesService.deleteById(id);
    }

    @GetMapping("animales/adopcion/{idFamilia}")
    public List<Animales> adoptabilidad( @PathVariable Long idFamilia) {

        Familias familia = familiasService.findById(idFamilia).get();

        List<Animales> adoptables = new ArrayList<Animales>();

        List<Animales> animales = animalesService.findAll();

        for(Animales animal : animales){
            if(familia.isGatos() == animal.isGato() && familia.isNinos() == animal.isNiños() && familia.isPerros() == animal.isPerro())
                adoptables.add(animal);
        }

        return adoptables;
    }

}
