package com.example.MontoApp.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    
    @Column(unique = true)
    private String email;
    
    private String password;

    // Relación: Un usuario puede tener muchos clientes
    @OneToMany(mappedBy = "usuario")
    private List<Cliente> clientes;

    // Getters y Setters
}