package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Familias;
import com.sigma.sigma.services.FamiliasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/familias/")
public class FamiliasController {

    @Autowired
    private FamiliasService familiasService;

    @GetMapping("")
    public List<Familias> getAllFamilias(){
        return familiasService.findAll();
    }

    @GetMapping("/{id}")
    public Familias getFamiliasById(Long id){
        return familiasService.findById(id);
    }

    @PostMapping("")
    public Familias saveFamilias(Familias familias){
        return familiasService.save(familias);
    }

    @PutMapping("/{id}")
    public Familias updateFamilias(Familias familias, @PathVariable Long id){
        familias.setIdFamilia(id);
        return familiasService.save(familias);
    }

    @DeleteMapping("/{id}")
    public String deleteFamilias(Long id){
        return familiasService.deleteById(id);
    }

    @DeleteMapping("")
    public String deleteAllFamilias(@RequestBody Familias familias){
        return familiasService.delete(familias);
    }
}
