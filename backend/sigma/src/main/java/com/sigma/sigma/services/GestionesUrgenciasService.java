package com.sigma.sigma.services;

import com.sigma.sigma.entities.GestionesUrgencias;
import com.sigma.sigma.repositories.GestionesUrgenciasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GestionesUrgenciasService {

    @Autowired
    private GestionesUrgenciasRepository gestionesUrgenciasRepository;

    public List<GestionesUrgencias> findAll() {
        return gestionesUrgenciasRepository.findAll();
    }

    public Optional<GestionesUrgencias> findById(Long id) {
        return gestionesUrgenciasRepository.findById(id);
    }

    public GestionesUrgencias save(GestionesUrgencias gestionesUrgencias) {
        return gestionesUrgenciasRepository.save(gestionesUrgencias);
    }

    public String delete(GestionesUrgencias gestionesUrgencias) {
        gestionesUrgenciasRepository.delete(gestionesUrgencias);

        return "Gestiones/Urgencias eliminado con exito";
    }

    public String deleteById(Long id) {
        gestionesUrgenciasRepository.deleteById(id);

        return "Gestiones/Urgencias eliminado con exito";
    }

    public GestionesUrgencias update(GestionesUrgencias gestionesUrgencias) {
        return gestionesUrgenciasRepository.save(gestionesUrgencias);
    }
}
