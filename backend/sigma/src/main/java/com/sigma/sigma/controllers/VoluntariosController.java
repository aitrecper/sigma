package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Voluntarios;
import com.sigma.sigma.services.VoluntariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class VoluntariosController {

    @Autowired
    private VoluntariosService voluntariosRepository;

    @GetMapping("/voluntarios")
    public List<Voluntarios> findAll(){
        return voluntariosRepository.findAll();
    }

    @GetMapping("/voluntarios/{id}")
    public Voluntarios findById(@PathVariable Long id){
        return voluntariosRepository.findById(id);
    }

    @PostMapping("/voluntarios/add")
    public Voluntarios save(@RequestBody Voluntarios voluntarios){
        return voluntariosRepository.save(voluntarios);
    }


    @PutMapping("/voluntarios/update/{id}")
    public Voluntarios update(@RequestBody Voluntarios voluntarios, @PathVariable Long id){
        voluntarios.setId(id);
        return voluntariosRepository.save(voluntarios);
    }

    @DeleteMapping("/voluntarios/delete")
    public void delete(@RequestBody Voluntarios voluntarios){
        voluntariosRepository.delete(voluntarios);
    }

    @DeleteMapping("/voluntarios/delete/{id}")
    public String delete(@PathVariable Long id){
        return voluntariosRepository.deleteById(id);
    }
}
