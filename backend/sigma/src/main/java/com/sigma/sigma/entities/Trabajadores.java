package com.sigma.sigma.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "trabajadores")
public class Trabajadores {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOMBRE")
    private String nombre;

    @Column(name = "APELLIDO_1")
    private String apellido1;

    @Column(name = "APELLIDO_2")
    private String apellido2;

    @Column(name = "USUARIO")
    private String usuario;

    @Column(name = "CONTRASEÑA")
    private String contrasena;

    @Column(name = "DNI")
    private String dni;

    @Column(name = "DIRECCION")
    private String direccion;

    @Column(name = "POBLACION")
    private String poblacion;

    @Column(name = "PAIS")
    private String pais;

    @Column(name = "TELEFONO")
    private String telefono;

    @Column(name = "MAIL")
    private String mail;

}