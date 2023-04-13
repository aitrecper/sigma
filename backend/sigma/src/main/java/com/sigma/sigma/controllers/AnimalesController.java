package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Animales;
import com.sigma.sigma.services.AnimalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animales/")
public class AnimalesController {

    @Autowired
    private AnimalesService animalesService;

    @GetMapping("")
    public List<Animales> getAnimales() {
        return animalesService.findAll();
    }

    @GetMapping("/{id}")
    public Animales getAnimalesById(@PathVariable Long id) {
        return animalesService.findById(id);
    }

    @PostMapping("")
    public Animales addAnimales(@RequestBody Animales animales) {
        return animalesService.save(animales);
    }

    @PutMapping("/{id}")
    public Animales updateAnimales(@PathVariable Long id, @RequestBody Animales animales) {
        return animalesService.update(id, animales);
    }

    @DeleteMapping("")
    public String deleteAnimales( @RequestBody Animales animales) {
        return animalesService.delete(animales);
    }

    @DeleteMapping("/{id}")
    public String deleteAnimalesById(@PathVariable Long id) {
        return animalesService.deleteById(id);
    }

}
