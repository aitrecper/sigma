package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Donaciones;
import com.sigma.sigma.services.DonacionesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donaciones/")
public class DonacionesController {

    @Autowired
    private DonacionesService donacionesService;

    @GetMapping
    public List<Donaciones> getDonaciones(){
        return donacionesService.findAll();
    }

    @GetMapping("/{id}")
    public Donaciones getDonacionesById(Long id){
        return donacionesService.findById(id);
    }

    @PutMapping
    public Donaciones updateDonaciones(@RequestBody Donaciones donaciones){
        return donacionesService.save(donaciones);
    }

    @DeleteMapping("")
    public String deleteDonaciones(@RequestBody Donaciones donaciones){
        return donacionesService.delete(donaciones);
    }

    @DeleteMapping("/{id}")
    public String deleteDonacionesById(Long id){
        return donacionesService.deleteById(id);
    }
}
