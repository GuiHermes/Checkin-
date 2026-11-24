
package com.example.sistema.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import java.time.LocalDate;

@Entity
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    // numero de participantes 
    private Integer nParticipantes; 

    //organiazcodr do eenventoo 
    private String orgEvento;

    private LocalDate data;

    private String local;

    
    public Evento() {
    }

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Integer getNParticipantes() {
        return nParticipantes;
    }

    public void setNParticipantes(Integer nParticipantes) {
        this.nParticipantes = nParticipantes;
    }

    public String getOrgEvento() {
        return orgEvento;
    }

    public void setOrgEvento(String orgEvento) {
        this.orgEvento = orgEvento;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }
}
