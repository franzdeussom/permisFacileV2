package com.gmo.permisfacilev2.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Reponse.
 */
@Entity
@Table(name = "reponse")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Reponse implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "intitule", nullable = false)
    private String intitule;

    @NotNull
    @Column(name = "reponse_unique", nullable = false)
    private Boolean reponseUnique;

    @Column(name = "bonne_reponse")
    private Boolean bonneReponse;

    @ManyToOne
    @JsonIgnoreProperties(value = { "reponses" }, allowSetters = true)
    private Question question;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Reponse id(Long id) {
        this.setId(id);
        return this;
    }

    public Reponse() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIntitule() {
        return this.intitule;
    }

    public Reponse intitule(String intitule) {
        this.setIntitule(intitule);
        return this;
    }

    public void setIntitule(String intitule) {
        this.intitule = intitule;
    }

    public Boolean getReponseUnique() {
        return this.reponseUnique;
    }

    public Reponse reponseUnique(Boolean reponseUnique) {
        this.setReponseUnique(reponseUnique);
        return this;
    }

    public void setReponseUnique(Boolean reponseUnique) {
        this.reponseUnique = reponseUnique;
    }

    public Boolean getBonneReponse() {
        return this.bonneReponse;
    }

    public Reponse bonneReponse(Boolean bonneReponse) {
        this.setBonneReponse(bonneReponse);
        return this;
    }

    public void setBonneReponse(Boolean bonneReponse) {
        this.bonneReponse = bonneReponse;
    }

    public Question getQuestion() {
        return this.question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Reponse question(Question question) {
        this.setQuestion(question);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Reponse)) {
            return false;
        }
        return id != null && id.equals(((Reponse) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Reponse{" +
            "id=" + getId() +
            ", intitule='" + getIntitule() + "'" +
            ", reponseUnique='" + getReponseUnique() + "'" +
            ", bonneReponse='" + getBonneReponse() + "'" +
            "}";
    }
}
