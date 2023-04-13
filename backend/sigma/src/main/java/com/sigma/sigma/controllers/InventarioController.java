package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Inventario;
import com.sigma.sigma.services.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventario/")
public class InventarioController {

    @Autowired
    private InventarioService inventarioService;

    @GetMapping("")
    public List<Inventario> findAll(){
        return inventarioService.findAll();
    }

    @GetMapping("/{id}")
    public Inventario findById(Long id){
        return inventarioService.findById(id);
    }

    @PostMapping("")
    public Inventario save(@RequestBody Inventario inventario){
        return inventarioService.save(inventario);
    }

    @PutMapping("/{id}")
    public Inventario update(@PathVariable Long id, @RequestBody Inventario inventario){
        inventario.setId(id);
        return inventarioService.update( inventario);
    }

    @DeleteMapping("")
    public String delete(@RequestBody Inventario inventario){
        return inventarioService.delete(inventario);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        return inventarioService.deleteById(id);
    }
}
