package com.sigma.sigma.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "donaciones")
public class Donaciones {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "importe")
    private Double importe;

    @Column(name = "fecha")
    private String fecha;

    @Column(name = "concepto")
    private String concepto;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido_1")
    private String apellido1;

    @Column(name = "apellido_2")
    private String apellido2;

    @Column(name = "centro")
    private boolean centro;

    @Column(name = "feria")
    private boolean feria;
}
