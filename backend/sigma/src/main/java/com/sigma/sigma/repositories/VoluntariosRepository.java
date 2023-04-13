package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.Voluntarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoluntariosRepository extends JpaRepository<Voluntarios, Long> {
}
