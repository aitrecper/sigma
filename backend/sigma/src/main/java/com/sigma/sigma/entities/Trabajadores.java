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

    @Column(name = "APELLIDO")
    private String apellido;

    @Column(name = "APELLIDO2")
    private String apellido2;

    @Column(name = "DNI")
    private String dni;

    @Column(name = "DIRECCION")
    private String direccion;

    @Column(name = "horario")
    private String horario;

    @Column(name = "horas_semana")
    private double horasSemana;

    @Column(name = "TELEFONO")
    private int telefono;

    @Column(name = "salario")
    private float salario;

    @Column(name = "edad")
    private int edad;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_usuario", referencedColumnName = "id")
    private Usuario usuario;

}