package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.Facturas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturasRepository extends JpaRepository<Facturas,Long> {
}
