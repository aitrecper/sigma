package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Voluntarios;
import com.sigma.sigma.services.VoluntariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voluntarios/")
public class VoluntariosRepository {

    @Autowired
    private VoluntariosService voluntariosRepository;

    @GetMapping
    public List<Voluntarios> findAll(){
        return voluntariosRepository.findAll();
    }

    @GetMapping("{id}")
    public Voluntarios findById(Long id){
        return voluntariosRepository.findById(id);
    }

    @PostMapping
    public Voluntarios save(@RequestBody Voluntarios voluntarios){
        return voluntariosRepository.save(voluntarios);
    }


    @PutMapping("{id}")
    public Voluntarios update(@RequestBody Voluntarios voluntarios, @PathVariable Long id){
        voluntarios.setId(id);
        return voluntariosRepository.save(voluntarios);
    }

    @DeleteMapping
    public void delete(@RequestBody Voluntarios voluntarios){
        voluntariosRepository.delete(voluntarios);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id){
        voluntariosRepository.deleteById(id);
    }
}
