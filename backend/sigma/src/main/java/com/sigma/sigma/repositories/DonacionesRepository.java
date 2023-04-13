package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.Donaciones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonacionesRepository extends JpaRepository<Donaciones,Long> {
}
