package com.sigma.sigma.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "veterinario")
public class Veterinario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "clinica")
    private String clinica;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "cif")
    private String cif;

    // getters y setters
}