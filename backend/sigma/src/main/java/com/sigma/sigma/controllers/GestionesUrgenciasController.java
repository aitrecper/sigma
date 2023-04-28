package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.GestionesUrgencias;
import com.sigma.sigma.services.GestionesUrgenciasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class GestionesUrgenciasController {

    @Autowired
    private GestionesUrgenciasService gestionesUrgenciasService;

    @GetMapping("/gestiones/")
    public List<GestionesUrgencias> getAllGestionesUrgencias(){
        return gestionesUrgenciasService.findAll();
    }

    @GetMapping("/gestiones/{id}")
    public Optional<GestionesUrgencias> getGestionesUrgenciasById(@PathVariable Long id){
        return gestionesUrgenciasService.findById(id);
    }

    @PostMapping("/gestiones/add")
    public GestionesUrgencias saveGestionesUrgencias(@RequestBody GestionesUrgencias gestionesUrgencias){
        return gestionesUrgenciasService.save(gestionesUrgencias);
    }

    @DeleteMapping("/gest/delete")
    public String deleteGestionesUrgencias(@RequestBody GestionesUrgencias gestionesUrgencias){
        return gestionesUrgenciasService.delete(gestionesUrgencias);
    }
    @DeleteMapping("/gestiones/delete/{id}")
    public String deleteGestionesUrgencias(@PathVariable Long id){
        return gestionesUrgenciasService.deleteById(id);
    }

    @PutMapping("/gestiones/update/{id}")
    public GestionesUrgencias updateGestionesUrgencias(@RequestBody GestionesUrgencias gestionesUrgencias, @PathVariable Long id){
        gestionesUrgencias.setId(id);
        return gestionesUrgenciasService.update(gestionesUrgencias);
    }
}
