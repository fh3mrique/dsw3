package com.dsw3.ex1.api;

import com.dsw3.ex1.entities.Disciplina;
import com.dsw3.ex1.repositories.DisciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disciplinas")
public class DisciplinaController {

    @Autowired
    private DisciplinaRepository repository;

    @GetMapping
    public List<Disciplina> disciplinas(){
        return repository.findAll();
    }

    @PostMapping("/votar")
    public ResponseEntity<?> votar(@RequestParam String disciplinaNome){
        Disciplina disciplina = repository.findByNome(disciplinaNome);
        if (disciplina != null) {
            disciplina.setVotos(disciplina.getVotos() + 1);
            repository.save(disciplina);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
