package com.gmo.permisfacilev2.domain;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A UserDevice.
 */
@Entity
@Table(name = "user_device")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class UserDevice implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "device_id")
    private String deviceId;

    @Column(name = "date_registration")
    private LocalDate dateRegistration;

    @Column(name = "last_update")
    private LocalDate lastUpdate;

    @Column(name = "login")
    private String login;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public UserDevice id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDeviceId() {
        return this.deviceId;
    }

    public UserDevice deviceId(String deviceId) {
        this.setDeviceId(deviceId);
        return this;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public LocalDate getDateRegistration() {
        return this.dateRegistration;
    }

    public UserDevice dateRegistration(LocalDate dateRegistration) {
        this.setDateRegistration(dateRegistration);
        return this;
    }

    public void setDateRegistration(LocalDate dateRegistration) {
        this.dateRegistration = dateRegistration;
    }

    public LocalDate getLastUpdate() {
        return this.lastUpdate;
    }

    public UserDevice lastUpdate(LocalDate lastUpdate) {
        this.setLastUpdate(lastUpdate);
        return this;
    }

    public void setLastUpdate(LocalDate lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserDevice)) {
            return false;
        }
        return id != null && id.equals(((UserDevice) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "UserDevice{" +
            "id=" + getId() +
            ", deviceId='" + getDeviceId() + "'" +
            ", dateRegistration='" + getDateRegistration() + "'" +
            ", lastUpdate='" + getLastUpdate() + "'" +
            "}";
    }
}
