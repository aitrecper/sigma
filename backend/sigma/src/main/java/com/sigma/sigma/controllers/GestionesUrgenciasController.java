package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.GestionesUrgencias;
import com.sigma.sigma.services.GestionesUrgenciasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gestionesUrgencias/")
public class GestionesUrgenciasController {

    @Autowired
    private GestionesUrgenciasService gestionesUrgenciasService;

    @GetMapping("")
    public List<GestionesUrgencias> getAllGestionesUrgencias(){
        return gestionesUrgenciasService.findAll();
    }

    @GetMapping("{id}")
    public GestionesUrgencias getGestionesUrgenciasById(@PathVariable Long id){
        return gestionesUrgenciasService.findById(id);
    }

    @PostMapping("")
    public GestionesUrgencias saveGestionesUrgencias(@RequestBody GestionesUrgencias gestionesUrgencias){
        return gestionesUrgenciasService.save(gestionesUrgencias);
    }

    @DeleteMapping
    public String deleteGestionesUrgencias(@RequestBody GestionesUrgencias gestionesUrgencias){
        return gestionesUrgenciasService.delete(gestionesUrgencias);
    }
    @DeleteMapping("{id}")
    public String deleteGestionesUrgencias(@PathVariable Long id){
        return gestionesUrgenciasService.deleteById(id);
    }

    @PutMapping("{id}")
    public GestionesUrgencias updateGestionesUrgencias(@RequestBody GestionesUrgencias gestionesUrgencias, @PathVariable Long id){
        gestionesUrgencias.setId(id);
        return gestionesUrgenciasService.update(gestionesUrgencias);
    }
}
