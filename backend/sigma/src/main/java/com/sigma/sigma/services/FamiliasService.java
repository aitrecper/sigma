package com.sigma.sigma.services;

import com.sigma.sigma.entities.Familias;
import com.sigma.sigma.repositories.FamiliasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FamiliasService {

    @Autowired
    private FamiliasRepository familiasRepository;

    public List<Familias> findAll(){
        return familiasRepository.findAll();
    }

    public Optional<Familias> findById(Long id){
        return familiasRepository.findById(id);
    }

    public Familias save(Familias familias){

        return familiasRepository.save(familias);
    }

    public String delete(Familias familias){
        familiasRepository.delete(familias);
        return "Familia eliminada con éxito";
    }

    public String deleteById(Long id){
        familiasRepository.deleteById(id);
        return "Familia eliminada con exito";
    }

}
