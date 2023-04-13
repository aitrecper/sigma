package com.sigma.sigma.services;

import com.sigma.sigma.entities.Donaciones;
import com.sigma.sigma.repositories.DonacionesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonacionesService {

    @Autowired
    private DonacionesRepository donacionesRepository;

    public List<Donaciones> findAll() {
        return donacionesRepository.findAll();
    }

    public Donaciones findById(Long id) {
        return donacionesRepository.findById(id).get();
    }

    public Donaciones save(Donaciones donaciones) {
        return donacionesRepository.save(donaciones);
    }

    public String delete(Donaciones donaciones) {
        donacionesRepository.delete(donaciones);
        return "Donación eliminada correctamente";
    }
    public String deleteById(Long id) {
        donacionesRepository.deleteById(id);
        return "Donación eliminada correctamente";
    }

    public Donaciones update(Donaciones donaciones) {
        return donacionesRepository.save(donaciones);
    }
}
