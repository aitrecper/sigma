package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByUsuario(String usuario);
    Usuario findByMail(String mail);
}
