package com.sigma.sigma.services;

import com.sigma.sigma.entities.GestionesUrgencias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GestionesUrgenciasService {

    @Autowired
    private GestionesUrgenciasService gestionesUrgenciasService;

    public List<GestionesUrgencias> findAll() {
        return gestionesUrgenciasService.findAll();
    }

    public GestionesUrgencias findById(Long id) {
        return gestionesUrgenciasService.findById(id);
    }

    public GestionesUrgencias save(GestionesUrgencias gestionesUrgencias) {
        return gestionesUrgenciasService.save(gestionesUrgencias);
    }

    public String delete(GestionesUrgencias gestionesUrgencias) {
        gestionesUrgenciasService.delete(gestionesUrgencias);

        return "Gestiones/Urgencias eliminado con exito";
    }

    public String deleteById(Long id) {
        gestionesUrgenciasService.deleteById(id);

        return "Gestiones/Urgencias eliminado con exito";
    }

    public GestionesUrgencias update(GestionesUrgencias gestionesUrgencias) {
        return gestionesUrgenciasService.update(gestionesUrgencias);
    }
}
