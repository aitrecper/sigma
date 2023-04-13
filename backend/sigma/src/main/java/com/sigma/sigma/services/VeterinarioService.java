package com.sigma.sigma.services;

import com.sigma.sigma.entities.Veterinario;
import com.sigma.sigma.repositories.VeterinarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VeterinarioService {

    @Autowired
    private VeterinarioRepository veterinarioRepository;

    public List<Veterinario> findAll(){
       return veterinarioRepository.findAll();
    }

    public Veterinario findById(Long id){
        return veterinarioRepository.findById(id).get();
    }

    public Veterinario save(Veterinario veterinario){
        return veterinarioRepository.save(veterinario);
    }

    public String delete(Veterinario veterinario) {
        veterinarioRepository.delete(veterinario);
        return "Veterinario eliminado con exito";
    }

    public String deleteById(Long id) {
        veterinarioRepository.deleteById(id);
        return "Veterinario eliminado con exito";
    }

    public Veterinario update(Veterinario veterinario){
        return veterinarioRepository.save(veterinario);
    }
}
