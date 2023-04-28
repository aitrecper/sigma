package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Trabajadores;
import com.sigma.sigma.services.TrabajadoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TrabajadoresController {

    @Autowired
    private TrabajadoresService trabajadoresService;

    @GetMapping("/trabajadores")
    public List<Trabajadores> findAll(){
        return trabajadoresService.findAll();
    }

    @GetMapping(value = "/trabajadores/{id}")
    public Trabajadores findById(@PathVariable Long id){
        return trabajadoresService.findById(id);
    }

    @PostMapping("/trabajadores/add")
    public Trabajadores save(@RequestBody Trabajadores trabajadores){

        return trabajadoresService.save(trabajadores);
    }

    @PutMapping(value = "/trabajadores/update/{id}")
    public Trabajadores update(@RequestBody Trabajadores trabajadores, @PathVariable Long id){
        trabajadores.setId(id);
        return trabajadoresService.update(trabajadores);
    }

    @DeleteMapping("/trabajadores/delete")
    public void delete(@RequestBody Trabajadores trabajadores){
        trabajadoresService.delete(trabajadores);
    }

    @DeleteMapping(value = "/trabajadores/delete/{id}")
    public void delete(@PathVariable Long id){
        trabajadoresService.deleteById(id);
    }
}
