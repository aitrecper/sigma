package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Veterinario;
import com.sigma.sigma.services.VeterinarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class VeterinarioController {

    @Autowired
    private VeterinarioService veterinarioService;

    @GetMapping("/veterinario")
    public List<Veterinario> findAll(){
        return veterinarioService.findAll();
    }

    @GetMapping(value = "/veterinario/{id}")
    public Veterinario findById(@PathVariable Long id){
        return veterinarioService.findById(id);
    }

    @PostMapping("/veterinario/add")
    public Veterinario save(@RequestBody Veterinario veterinario){
        if(veterinario.getClinica() == null) veterinario.setClinica("Propia");
        return veterinarioService.save(veterinario);
    }

    @PutMapping(value = "/veterinario/update/{id}")
    public Veterinario update(@RequestBody Veterinario veterinario, @PathVariable Long id){
        veterinario.setId(id);
        return veterinarioService.update(veterinario);
    }

    @DeleteMapping("/veterinario/delete")
    public String delete(@RequestBody Veterinario veterinario ){
        return veterinarioService.delete(veterinario);
    }

    @DeleteMapping(value = "/veterinario/delete/{id}")
    public String delete(@PathVariable Long id){
        return veterinarioService.deleteById(id);
    }
}
