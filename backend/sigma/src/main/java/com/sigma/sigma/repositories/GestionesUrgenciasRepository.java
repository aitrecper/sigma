package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.GestionesUrgencias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GestionesUrgenciasRepository extends JpaRepository<GestionesUrgencias,Long> {
}
