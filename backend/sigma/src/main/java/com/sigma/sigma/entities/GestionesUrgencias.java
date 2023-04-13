package com.sigma.sigma.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "gestiones_urgencias")
public class GestionesUrgencias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "chip")
    private String chip;

    @Column(name = "jaula")
    private String jaula;

    @Column(name = "diagnostico")
    private String diagnostico;

    @Column(name = "urgencia")
    private boolean urgencia;


}
