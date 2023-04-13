package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.Familias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamiliasRepository extends JpaRepository<Familias,Long> {
}
