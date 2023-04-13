package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Trabajadores;
import com.sigma.sigma.services.TrabajadoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trabajadores/")
public class TrabajadoresController {

    @Autowired
    private TrabajadoresService trabajadoresService;

    @GetMapping
    public List<Trabajadores> findAll(){
        return trabajadoresService.findAll();
    }

    @GetMapping(value = "{id}")
    public Trabajadores findById(Long id){
        return trabajadoresService.findById(id);
    }

    @PostMapping("")
    public Trabajadores save(@RequestBody Trabajadores trabajadores){
        return trabajadoresService.save(trabajadores);
    }

    @PutMapping(value = "{id}")
    public Trabajadores update(@RequestBody Trabajadores trabajadores, @PathVariable Long id){
        trabajadores.setId(id);
        return trabajadoresService.update(trabajadores);
    }

    @DeleteMapping("")
    public void delete(@RequestBody Trabajadores trabajadores){
        trabajadoresService.delete(trabajadores);
    }

    @DeleteMapping(value = "{id}")
    public void delete(@PathVariable Long id){
        trabajadoresService.deleteById(id);
    }
}
