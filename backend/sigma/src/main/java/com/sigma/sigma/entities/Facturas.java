package com.sigma.sigma.entities;

import com.sigma.sigma.Tipologia;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "facturas")
public class Facturas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_factura")
    private Long numFactura;

    @Column(name = "fecha")
    private String fecha;

    @Column(name = "importe")
    private Double importe;

    @Column(name = "num_factura_real")
    private Long numFacturaReal;

    @Column(name = "tipologia")
    private Tipologia tipologia;

    @Column(name = "fichero")
    private String fichero;

    @Column(name = "concepto")
    private String concepto;

    @Column(name = "pagada")
    private Boolean pagada;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Column(name = "chip")
    private int chip;

    @Column(name = "jaula")
    private int jaula;
}
