package com.example.sistema.controller;

import com.example.sistema.model.Evento;
import com.example.sistema.service.EventoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/eventos")
public class EventoController {

    private final EventoService eventoService;

    public EventoController(EventoService eventoService) {
        this.eventoService = eventoService;
    }

    @GetMapping
    public ResponseEntity<List<Evento>> listarEventos() {
        return ResponseEntity.ok(eventoService.listarEventos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evento> buscarEvento(@PathVariable Long id) {
        Evento evento = eventoService.buscarEvento(id);
        return evento == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(evento);
    }

    @PostMapping
    public ResponseEntity<Evento> criarEvento(@RequestBody Evento evento) {
        evento.setId(null);
        return ResponseEntity.status(201).body(eventoService.salvarEvento(evento));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Evento> atualizarEvento(@PathVariable Long id, @RequestBody Evento evento) {
        if (eventoService.buscarEvento(id) == null) {
            return ResponseEntity.notFound().build();
        }

        evento.setId(id);
        return ResponseEntity.ok(eventoService.salvarEvento(evento));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirEvento(@PathVariable Long id) {
        if (eventoService.buscarEvento(id) == null) {
            return ResponseEntity.notFound().build();
        }

        eventoService.excluirEvento(id);
        return ResponseEntity.noContent().build();
    }
}
