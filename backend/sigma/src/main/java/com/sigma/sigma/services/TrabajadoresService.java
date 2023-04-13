package com.sigma.sigma.services;

import com.sigma.sigma.entities.Trabajadores;
import com.sigma.sigma.repositories.TrabajadoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrabajadoresService {

    @Autowired
    private TrabajadoresRepository trabajadoresRepository;

    public List<Trabajadores> findAll() {
        return trabajadoresRepository.findAll();
    }

    public Trabajadores findById(Long id) {
        return trabajadoresRepository.findById(id).get();
    }

    public Trabajadores save(Trabajadores trabajadores) {
        return trabajadoresRepository.save(trabajadores);
    }

    public String delete(Trabajadores trabajadores) {
        trabajadoresRepository.delete(trabajadores);
        return "Trabajador eliminado con exito";
    }

    public String deleteById(Long id) {
        trabajadoresRepository.deleteById(id);
        return "Trabajador eliminado con exito";
    }

    public Trabajadores update(Trabajadores trabajadores) {
        return trabajadoresRepository.save(trabajadores);
    }
}
