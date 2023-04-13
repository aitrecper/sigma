package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Veterinario;
import com.sigma.sigma.services.VeterinarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/veterinario/")
public class VeterinarioController {

    @Autowired
    private VeterinarioService veterinarioService;

    @GetMapping
    public List<Veterinario> findAll(){
        return veterinarioService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Veterinario findById(Long id){
        return veterinarioService.findById(id);
    }

    @PostMapping
    public Veterinario save(@RequestBody Veterinario veterinario){
        return veterinarioService.save(veterinario);
    }

    @PutMapping(value = "/{id}")
    public Veterinario update(@RequestBody Veterinario veterinario, @PathVariable Long id){
        veterinario.setId(id);
        return veterinarioService.update(veterinario);
    }

    @DeleteMapping()
    public String delete(@RequestBody Veterinario veterinario ){
        return veterinarioService.delete(veterinario);
    }

    @DeleteMapping(value = "/{id}")
    public String delete(@PathVariable Long id){
        return veterinarioService.deleteById(id);
    }
}
