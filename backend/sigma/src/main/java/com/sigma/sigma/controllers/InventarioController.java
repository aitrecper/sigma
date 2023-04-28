package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Inventario;
import com.sigma.sigma.services.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class InventarioController {

    @Autowired
    private InventarioService inventarioService;

    @GetMapping("/inventario/")
    public List<Inventario> findAll(){
        return inventarioService.findAll();
    }

    @GetMapping("/inventario/{id}")
    public Optional<Inventario> findById(@PathVariable Long id){
        return inventarioService.findById(id);
    }

    @PostMapping("/inventario/add")
    public Inventario save(@RequestBody Inventario inventario){
        return inventarioService.save(inventario);
    }

    @PutMapping("/inventario/update/{id}")
    public Inventario update(@PathVariable Long id, @RequestBody Inventario inventario){
        inventario.setId(id);
        return inventarioService.update( inventario);
    }

    @DeleteMapping("/inventario/delete")
    public String delete(@RequestBody Inventario inventario){
        return inventarioService.delete(inventario);
    }

    @DeleteMapping("/inventario/delete/{id}")
    public String delete(@PathVariable Long id){
        return inventarioService.deleteById(id);
    }
}
