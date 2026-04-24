package com.example.MontoApp.model;

import jakarta.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String telefono;

    // Este token se usará para el link público (ej: /publico/estado/abc-123)
    private String tokenAcceso = UUID.randomUUID().toString();

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @OneToMany(mappedBy = "cliente")
    private List<Venta> ventas;

    // Getters y Setters
}