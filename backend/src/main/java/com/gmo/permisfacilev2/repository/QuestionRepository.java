package com.gmo.permisfacilev2.repository;

import com.gmo.permisfacilev2.domain.Question;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data SQL repository for the Question entity.
 */
@SuppressWarnings("unused")
@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findByNumeroGreaterThan(Long numero);
}
