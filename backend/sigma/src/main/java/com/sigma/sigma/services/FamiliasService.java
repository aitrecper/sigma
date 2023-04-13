package com.sigma.sigma.services;

import com.sigma.sigma.entities.Familias;
import com.sigma.sigma.repositories.FamiliasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FamiliasService {

    @Autowired
    private FamiliasRepository familiasRepository;

    public List<Familias> findAll(){
        return familiasRepository.findAll();
    }

    public Familias findById(Long id){
        return familiasRepository.findById(id).get();
    }

    public Familias save(Familias familias){
        return familiasRepository.save(familias);
    }

    public String delete(Familias familias){
        familiasRepository.delete(familias);
        return "Familia eliminada con exito";
    }

    public String deleteById(Long id){
        familiasRepository.deleteById(id);
        return "Familia eliminada con exito";
    }

    public Familias update(Familias familias){
        return familiasRepository.save(familias);
    }
}
