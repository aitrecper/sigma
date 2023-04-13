package com.sigma.sigma.services;

import com.sigma.sigma.entities.Voluntarios;
import com.sigma.sigma.repositories.VoluntariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoluntariosService {

    @Autowired
    private VoluntariosRepository voluntariosRepository;

    public List<Voluntarios> findAll() {
        return voluntariosRepository.findAll();
    }

    public Voluntarios findById(Long id) {
        return voluntariosRepository.findById(id).get();
    }

    public Voluntarios save(Voluntarios voluntarios) {
        return voluntariosRepository.save(voluntarios);
    }

    public String delete(Voluntarios voluntarios) {
        voluntariosRepository.delete(voluntarios);
        return "Voluntario eliminado";
    }

    public String deleteById(Long id) {
        voluntariosRepository.deleteById(id);
        return "Voluntario eliminado";
    }

    public Voluntarios update(Voluntarios voluntarios) {
        return voluntariosRepository.save(voluntarios);
    }
}
