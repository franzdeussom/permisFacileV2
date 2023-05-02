package com.gmo.permisfacilev2.repository;

import com.gmo.permisfacilev2.domain.UserDevice;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data SQL repository for the UserDevice entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserDeviceRepository extends JpaRepository<UserDevice, Long> {

    Optional<UserDevice> findOneByLogin(String login);
}
