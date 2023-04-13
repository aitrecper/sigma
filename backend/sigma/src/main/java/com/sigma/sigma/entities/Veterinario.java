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

    @Column(name = "veterinario")
    private String veterinario;

    @Column(name = "profesional")
    private String profesional;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "cif")
    private String cif;

    // getters y setters
}