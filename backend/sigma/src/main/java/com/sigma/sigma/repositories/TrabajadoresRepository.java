package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.Trabajadores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrabajadoresRepository extends JpaRepository<Trabajadores,Long> {
}
