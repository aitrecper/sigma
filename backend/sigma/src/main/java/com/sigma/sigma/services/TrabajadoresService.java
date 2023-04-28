package com.sigma.sigma.services;

import com.sigma.sigma.entities.Trabajadores;
import com.sigma.sigma.entities.Usuario;
import com.sigma.sigma.repositories.TrabajadoresRepository;
import com.sigma.sigma.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrabajadoresService {

    @Autowired
    private TrabajadoresRepository trabajadoresRepository;

    @Autowired
    private UsuarioRepository usuariosRepository;

    public List<Trabajadores> findAll() {
        return trabajadoresRepository.findAll();
    }

    public Trabajadores findById(Long id) {
        return trabajadoresRepository.findById(id).get();
    }

    public Trabajadores save(Trabajadores trabajadores) {
        Usuario usuario = usuariosRepository.findById(Long.valueOf(trabajadores.getUsuario().getId())).get();
        trabajadores.setUsuario(usuario);
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
