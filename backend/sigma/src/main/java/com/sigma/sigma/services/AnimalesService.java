package com.sigma.sigma.services;

import com.sigma.sigma.entities.Animales;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sigma.sigma.repositories.AnimalesRepository;

import java.util.List;

@Service
public class AnimalesService {

    @Autowired
    private AnimalesRepository animalesRepository;

    public List<Animales> findAll(){
        return animalesRepository.findAll();
    }

    public Animales findById(Long id){
        return animalesRepository.findById(id).get();
    }

    public Animales save(Animales animales){
        return animalesRepository.save(animales);
    }

    public String delete(Animales animales){
        animalesRepository.delete(animales);
        return "Animal eliminado correctamente";
    }
    public String deleteById(Long id){
        animalesRepository.deleteById(id);
        return "Animal eliminado correctamente";
    }

    public Animales update(Long id, Animales animales){
        return animalesRepository.save(animales);
    }
}
