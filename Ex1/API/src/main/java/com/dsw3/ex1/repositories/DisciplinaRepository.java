package com.dsw3.ex1.repositories;

import com.dsw3.ex1.entities.Disciplina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
    Disciplina findByNome(String disciplinaNome);
}
