package com.gmo.permisfacilev2.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Question.
 */
@Entity
@Table(name = "question")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Question implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "intitule", nullable = false)
    private String intitule;

    @Column(name = "image")
    private String image;

    @Column(name = "date_creation")
    private LocalDate dateCreation;

    @Column(name = "last_update")
    private LocalDate lastUpdate;

    @Column(name = "numero")
    private Long numero;

    @Column(name = "rep1")
    private String rep1 = "NEUTRAL";

    @Column(name = "rep2")
    private String rep2 = "NEUTRAL";

    @Column(name = "rep3")
    private String rep3 = "NEUTRAL";

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "question_id", referencedColumnName = "id")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "question" }, allowSetters = true)
    private Set<Reponse> reponses = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Question id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIntitule() {
        return this.intitule;
    }

    public Question intitule(String intitule) {
        this.setIntitule(intitule);
        return this;
    }

    public void setIntitule(String intitule) {
        this.intitule = intitule;
    }

    public String getImage() {
        return this.image;
    }

    public Question image(String image) {
        this.setImage(image);
        return this;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public LocalDate getDateCreation() {
        return this.dateCreation;
    }

    public Question dateCreation(LocalDate dateCreation) {
        this.setDateCreation(dateCreation);
        return this;
    }

    public void setDateCreation(LocalDate dateCreation) {
        this.dateCreation = dateCreation;
    }

    public LocalDate getLastUpdate() {
        return this.lastUpdate;
    }

    public Question lastUpdate(LocalDate lastUpdate) {
        this.setLastUpdate(lastUpdate);
        return this;
    }

    public void setLastUpdate(LocalDate lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Long getNumero() {
        return numero;
    }

    public void setNumero(Long numero) {
        this.numero = numero;
    }

    public String getRep1() {
        return rep1;
    }

    public void setRep1(String rep1) {
        this.rep1 = rep1;
    }

    public String getRep2() {
        return rep2;
    }

    public void setRep2(String rep2) {
        this.rep2 = rep2;
    }

    public String getRep3() {
        return rep3;
    }

    public void setRep3(String rep3) {
        this.rep3 = rep3;
    }

    public Set<Reponse> getReponses() {
        return this.reponses;
    }

    public void setReponses(Set<Reponse> reponses) {
        if (this.reponses != null) {
            this.reponses.forEach(i -> i.setQuestion(null));
        }
        if (reponses != null) {
            reponses.forEach(i -> i.setQuestion(this));
        }
        this.reponses = reponses;
    }

    public Question reponses(Set<Reponse> reponses) {
        this.setReponses(reponses);
        return this;
    }

    public Question addReponses(Reponse reponse) {
        this.reponses.add(reponse);
        reponse.setQuestion(this);
        return this;
    }

    public Question removeReponses(Reponse reponse) {
        this.reponses.remove(reponse);
        reponse.setQuestion(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Question)) {
            return false;
        }
        return id != null && id.equals(((Question) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Question{" +
            "id=" + getId() +
            ", intitule='" + getIntitule() + "'" +
            ", image='" + getImage() + "'" +
            ", dateCreation='" + getDateCreation() + "'" +
            ", lastUpdate='" + getLastUpdate() + "'" +
            "}";
    }
}
