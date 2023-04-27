package com.sigma.sigma.entities;

import com.sigma.sigma.constants.Genero;
import com.sigma.sigma.constants.TipoAnimal;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
@Table(name = "familias")
public class Familias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_familia")
    private Long idFamilia;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido_1")
    private String apellido1;

    @Column(name = "apellido_2")
    private String apellido2;

    @Column(name = "genero")
    @Enumerated(EnumType.STRING)
    private Genero genero;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "poblacion")
    private String poblacion;

    @Column(name = "pais")
    private String pais;

    @Column(name = "telefono")
    private String telefono;

    @Column(name = "dni")
    private String dni;

    @Column(name = "mail")
    private String mail;

    @Column(name = "tipo_vivienda")
    private String tipoVivienda;

    @Column(name = "tamaño")
    private String tamano;

    @Column(name = "terraza")
    private boolean terraza;

    @Column(name = "balcon")
    private boolean balcon;

    @Column(name = "jardin")
    private boolean jardin;

    @Column(name = "edad_miembros_familia")
    private String edadMiembrosFamilia;

    @Column(name = "alergias")
    private String alergias;

    @Column(name = "horas_solo")
    private int horasSolo;

    @Column(name = "acceso_exterior")
    private boolean accesoExterior;

    @Column(name = "otros_animales")
    private boolean otrosAnimales;

    @Column(name = "gatos")
    private boolean gatos;

    @Column(name = "perros")
    private boolean perros;

    @Column(name = "niños")
    private boolean ninos;

    @Column(name = "otro_esterilizado")
    private boolean otroEsterilizado;

    @Column(name = "tipo_animal_busca")
    @Enumerated(EnumType.STRING)
    private TipoAnimal tipoAnimalBusca;

    @Column(name = "compromiso_esterilizacion")
    private boolean compromisoEstirilizacion;

    @Column(name = "animales_con_dolencias")
    private String animalesConDolencias;

    @Column(name = "animal_interesado")
    private String animalInteresado;

    @Column(name = "adopcion")
    private boolean adopcion;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_animal")
    private Animales animales;

    @Column(name = "nombre_adoptado")
    private String nombreAdoptado;

    @Column(name = "fecha_adopcion")
    private Date fechaAdopcion;

    @Column(name = "esterilizado")
    private boolean esterilizado;
}
