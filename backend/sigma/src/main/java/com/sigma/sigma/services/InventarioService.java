package com.sigma.sigma.services;

import com.sigma.sigma.entities.Inventario;
import com.sigma.sigma.repositories.InventarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventarioService {

    @Autowired
    private InventarioRepository inventarioRepository;

    public List<Inventario> findAll() {
        return inventarioRepository.findAll();
    }

    public Inventario findById(Long id) {
        return inventarioRepository.findById(id).get();
    }

    public Inventario save(Inventario inventario) {
        return inventarioRepository.save(inventario);
    }


    public String delete(Inventario inventario) {
        inventarioRepository.delete(inventario);
        return "Inventario eliminado";
    }

    public String deleteById(Long id) {
        inventarioRepository.deleteById(id);
        return "Inventario eliminado";
    }

    public Inventario update(Inventario inventario) {
        return inventarioRepository.save(inventario);
    }
}
