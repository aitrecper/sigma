package com.sigma.sigma.controllers;

import com.sigma.sigma.entities.Usuario;
import com.sigma.sigma.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @GetMapping("/users")
    public List<Usuario> getUsers(){
        return usuarioService.findAll();
    }

    @GetMapping("/users/{id}")
    public Optional<Usuario> getUser(@PathVariable Long id){
        return usuarioService.findById(id);
    }


    @GetMapping("/users/{mail}")
    public Usuario getUserEmail(@PathVariable String mail){
        return usuarioService.getUsuarioByMail(mail);
    }

    @PostMapping("/users/add")
    public Usuario addUser(@RequestBody Usuario user){
        return usuarioService.addUsuario(user);
    }

    @PutMapping("/users/update/{id}")
    public Usuario updateUser(@PathVariable int id, @RequestBody Usuario user){
        user.setId(id);
        return usuarioService.updateUsuario(user);
    }

    @DeleteMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable Long id){
        return usuarioService.deleteUsuarioById(id);
    }
}
