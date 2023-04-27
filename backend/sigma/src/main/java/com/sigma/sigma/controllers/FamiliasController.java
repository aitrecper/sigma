package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Familias;
import com.sigma.sigma.services.FamiliasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class FamiliasController {

    @Autowired
    private FamiliasService familiasService;

    @GetMapping("/familias")
    public List<Familias> getAllFamilias(){
        return familiasService.findAll();
    }

    @GetMapping("/familias/{id}")
    public Optional<Familias> getFamiliasById(@PathVariable Long id){
        return familiasService.findById(id);
    }

    @PostMapping("/familias/add")
    public Familias saveFamilias(@RequestBody Familias familias){
        return familiasService.save(familias);
    }

    @PutMapping("/familias/update/{id}")
    public Familias updateFamilias(@RequestBody Familias familias, @PathVariable Long id){
        System.out.println("id: " + id);
        familias.setIdFamilia(id);
        System.out.println(familias);
        return familiasService.save(familias);
    }

    @DeleteMapping("/familias/delete/{id}")
    public String deleteFamilias(@PathVariable Long id){
        return familiasService.deleteById(id);
    }

    @DeleteMapping("/familias/delete")
    public String deleteAllFamilias(@RequestBody Familias familias){
        return familiasService.delete(familias);
    }
}
