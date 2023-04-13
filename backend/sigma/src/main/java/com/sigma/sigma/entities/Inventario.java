package com.sigma.sigma.entities;

import com.sigma.sigma.TipoAnimal;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
@Table(name = "inventario")
public class Inventario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Column(name = "producto")
    private String producto;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Tipo tipo;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EstadoProducto estadoProducto;

    @NotNull
    private Date fechaDonacion;

    private Date caducidad;

    private Boolean prioridadDeUso;

    @Enumerated(EnumType.STRING)
    private TipoAnimal tipoAnimal;

    // constructores, getters y setters
}

enum Tipo {
    COMIDA, MEDICAMENTO, MOBILIARIO, JUGUETES
}

enum EstadoProducto {
    ABIERTO, CERRADO
}