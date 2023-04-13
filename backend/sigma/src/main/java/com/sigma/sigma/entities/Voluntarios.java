package com.sigma.sigma.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "voluntarios")
public class Voluntarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido1")
    private String apellido1;

    @Column(name = "apellido2")
    private String apellido2;

    @Column(name = "dni")
    private String dni;

    @Column(name = "mail")
    private String mail;

    @Column(name = "telefono")
    private Integer telefono;

    @Column(name = "dias_disponibles")
    private DiasDisponibles diasDisponibles;

    @Column(name = "horario_disponible")
    private HorarioDisponible horarioDisponible;

    @Column(name = "edad")
    private Integer edad;

    @Column(name = "donacion")
    private Float donacion;
    private String cuentaBancaria;
    private AccionRealizar accionRealizar;

    public enum DiasDisponibles {
        LUNES,
        MARTES,
        MIERCOLES,
        JUEVES,
        VIERNES,
        SABADO,
        DOMINGO,
        ENTRE_SEMANA,
        FIN_DE_SEMANA
    }

    public enum HorarioDisponible {
        MAÑANA,
        MEDIO_DIA,
        TARDE
    }

    public enum AccionRealizar {
        LIMPIEZA,
        COMIDA,
        PASEO
    }

}