package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.Animales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimalesRepository extends JpaRepository<Animales,Long> {
}
