
package com.example.sistema.service;

import com.example.sistema.model.Evento;
import com.example.sistema.repository.EventoRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventoService {

    private final EventoRepository eventoRepository;

    public EventoService(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    public List<Evento> listarEventos() {
        return eventoRepository.findAll();
    }

    public Evento buscarEvento(Long id) {
        return eventoRepository.findById(id).orElse(null);
    }

    public Evento salvarEvento(Evento evento) {
        return eventoRepository.save(evento);
    }

    public void excluirEvento(Long id) {
        eventoRepository.deleteById(id);
    }
}
