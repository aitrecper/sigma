package com.sigma.sigma.entities;

import com.sigma.sigma.constants.EstadoProducto;
import com.sigma.sigma.constants.Tipo;
import com.sigma.sigma.constants.TipoAnimal;
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
    @Column(name = "tipo")
    private Tipo tipo;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "estado_producto")
    private EstadoProducto estadoProducto;

    @NotNull
    @Column(name = "fecha_donacion")
    private Date fechaDonacion;

    @Column(name = "caducidad")
    private Date caducidad;

    @Column(name = "prioridad_de_uso")
    private Boolean prioridadDeUso;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_animal")
    private TipoAnimal tipoAnimal;

}



