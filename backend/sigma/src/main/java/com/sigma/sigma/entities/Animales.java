package com.sigma.sigma.entities;

import com.sigma.sigma.TipoAnimal;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
@Table(name = "animales")
public class Animales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "edad")
    private Float edad;

    @Column(name = "genero")
    private String genero;

    @Column(name = "imagen")
    private String imagen;

    @Column(name = "jaula")
    private String jaula;

    @Column(name = "raza")
    private String raza;

    @Column(name = "tipo_animal")
    private String tipoAnimal;

    @Column(name = "chip")
    private String chip;

    @Column(name = "pasaporte")
    private String pasaporte;

    @Column(name = "salud")
    private boolean salud;

    @Column(name = "historial_vete")
    private boolean historialVete;

    @Column(name = "gato")
    private boolean gato;

    @Column(name = "perro")
    private boolean perro;

    @Column(name = "niños")
    private boolean niños;

    @Column(name = "fecha_llegada")
    private Date fechaLlegada;

    @Column(name = "ppp")
    private boolean ppp;

    @Column(name = "esterilizado")
    private boolean esterilizado;

    @Column(name = "compartir_jaula")
    private boolean compartirJaula;


}
