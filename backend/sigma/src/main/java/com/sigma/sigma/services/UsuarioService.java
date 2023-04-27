package com.sigma.sigma.services;

import com.sigma.sigma.entities.Usuario;
import com.sigma.sigma.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario>findById(Long id) {
        return usuarioRepository.findById(id);
    }

    public Usuario getUsuarioByMail(String mail) {
        return usuarioRepository.findByMail(mail);
    }

    public Usuario addUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public String deleteUsuarioById(Long Id) {
        usuarioRepository.deleteById(Id);
        return "Usuario eliminado";
    }

    public Usuario updateUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}
