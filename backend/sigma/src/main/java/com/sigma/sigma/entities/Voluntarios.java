package com.sigma.sigma.entities;

import com.sigma.sigma.constants.AccionRealizar;
import com.sigma.sigma.constants.HorarioDisponible;
import com.sigma.sigma.util.DiasDisponibles;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Type;

import java.util.Map;
import java.util.Objects;

@Entity
@Data
@Table(name = "voluntarios")
public class Voluntarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido_1")
    private String apellido1;

    @Column(name = "apellido_2")
    private String apellido2;

    @Column(name = "dni")
    private String dni;

    @Column(name = "mail")
    private String mail;

    @Column(name = "telefono")
    private Integer telefono;

//    @Column(name = "dias_disponibles")
//    @Enumerated(EnumType.STRING)
//    private DiasDisponibles diasDisponibles;

    @Column(name = "dias_disponibles")
    private String diasDisponibles;

    @Column(name = "horario_disponible")
    @Enumerated(EnumType.STRING)
    private HorarioDisponible horarioDisponibles;

    @Column(name = "edad")
    private Integer edad;

    @Column(name = "donacion")
    private Float donacion;

    @Column(name = "cuenta_bancaria")
    private String cuentaBancaria;

    @Column(name = "accion_a_realizar")
    @Enumerated(EnumType.STRING)
    private AccionRealizar accionRealizar;

}