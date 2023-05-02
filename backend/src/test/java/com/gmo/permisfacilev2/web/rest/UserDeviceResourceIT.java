package com.gmo.permisfacilev2.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.gmo.permisfacilev2.IntegrationTest;
import com.gmo.permisfacilev2.domain.UserDevice;
import com.gmo.permisfacilev2.repository.UserDeviceRepository;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import javax.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link UserDeviceResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class UserDeviceResourceIT {

    private static final String DEFAULT_DEVICE_ID = "AAAAAAAAAA";
    private static final String UPDATED_DEVICE_ID = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE_REGISTRATION = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_REGISTRATION = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_LAST_UPDATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_LAST_UPDATE = LocalDate.now(ZoneId.systemDefault());

    private static final String ENTITY_API_URL = "/api/user-devices";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private UserDeviceRepository userDeviceRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restUserDeviceMockMvc;

    private UserDevice userDevice;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserDevice createEntity(EntityManager em) {
        UserDevice userDevice = new UserDevice()
            .deviceId(DEFAULT_DEVICE_ID)
            .dateRegistration(DEFAULT_DATE_REGISTRATION)
            .lastUpdate(DEFAULT_LAST_UPDATE);
        return userDevice;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserDevice createUpdatedEntity(EntityManager em) {
        UserDevice userDevice = new UserDevice()
            .deviceId(UPDATED_DEVICE_ID)
            .dateRegistration(UPDATED_DATE_REGISTRATION)
            .lastUpdate(UPDATED_LAST_UPDATE);
        return userDevice;
    }

    @BeforeEach
    public void initTest() {
        userDevice = createEntity(em);
    }

    @Test
    @Transactional
    void createUserDevice() throws Exception {
        int databaseSizeBeforeCreate = userDeviceRepository.findAll().size();
        // Create the UserDevice
        restUserDeviceMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(userDevice)))
            .andExpect(status().isCreated());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeCreate + 1);
        UserDevice testUserDevice = userDeviceList.get(userDeviceList.size() - 1);
        assertThat(testUserDevice.getDeviceId()).isEqualTo(DEFAULT_DEVICE_ID);
        assertThat(testUserDevice.getDateRegistration()).isEqualTo(DEFAULT_DATE_REGISTRATION);
        assertThat(testUserDevice.getLastUpdate()).isEqualTo(DEFAULT_LAST_UPDATE);
    }

    @Test
    @Transactional
    void createUserDeviceWithExistingId() throws Exception {
        // Create the UserDevice with an existing ID
        userDevice.setId(1L);

        int databaseSizeBeforeCreate = userDeviceRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restUserDeviceMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(userDevice)))
            .andExpect(status().isBadRequest());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllUserDevices() throws Exception {
        // Initialize the database
        userDeviceRepository.saveAndFlush(userDevice);

        // Get all the userDeviceList
        restUserDeviceMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(userDevice.getId().intValue())))
            .andExpect(jsonPath("$.[*].deviceId").value(hasItem(DEFAULT_DEVICE_ID)))
            .andExpect(jsonPath("$.[*].dateRegistration").value(hasItem(DEFAULT_DATE_REGISTRATION.toString())))
            .andExpect(jsonPath("$.[*].lastUpdate").value(hasItem(DEFAULT_LAST_UPDATE.toString())));
    }

    @Test
    @Transactional
    void getUserDevice() throws Exception {
        // Initialize the database
        userDeviceRepository.saveAndFlush(userDevice);

        // Get the userDevice
        restUserDeviceMockMvc
            .perform(get(ENTITY_API_URL_ID, userDevice.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(userDevice.getId().intValue()))
            .andExpect(jsonPath("$.deviceId").value(DEFAULT_DEVICE_ID))
            .andExpect(jsonPath("$.dateRegistration").value(DEFAULT_DATE_REGISTRATION.toString()))
            .andExpect(jsonPath("$.lastUpdate").value(DEFAULT_LAST_UPDATE.toString()));
    }

    @Test
    @Transactional
    void getNonExistingUserDevice() throws Exception {
        // Get the userDevice
        restUserDeviceMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putNewUserDevice() throws Exception {
        // Initialize the database
        userDeviceRepository.saveAndFlush(userDevice);

        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();

        // Update the userDevice
        UserDevice updatedUserDevice = userDeviceRepository.findById(userDevice.getId()).get();
        // Disconnect from session so that the updates on updatedUserDevice are not directly saved in db
        em.detach(updatedUserDevice);
        updatedUserDevice.deviceId(UPDATED_DEVICE_ID).dateRegistration(UPDATED_DATE_REGISTRATION).lastUpdate(UPDATED_LAST_UPDATE);

        restUserDeviceMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedUserDevice.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedUserDevice))
            )
            .andExpect(status().isOk());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
        UserDevice testUserDevice = userDeviceList.get(userDeviceList.size() - 1);
        assertThat(testUserDevice.getDeviceId()).isEqualTo(UPDATED_DEVICE_ID);
        assertThat(testUserDevice.getDateRegistration()).isEqualTo(UPDATED_DATE_REGISTRATION);
        assertThat(testUserDevice.getLastUpdate()).isEqualTo(UPDATED_LAST_UPDATE);
    }

    @Test
    @Transactional
    void putNonExistingUserDevice() throws Exception {
        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();
        userDevice.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restUserDeviceMockMvc
            .perform(
                put(ENTITY_API_URL_ID, userDevice.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(userDevice))
            )
            .andExpect(status().isBadRequest());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchUserDevice() throws Exception {
        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();
        userDevice.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restUserDeviceMockMvc
            .perform(
                put(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(userDevice))
            )
            .andExpect(status().isBadRequest());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamUserDevice() throws Exception {
        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();
        userDevice.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restUserDeviceMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(userDevice)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateUserDeviceWithPatch() throws Exception {
        // Initialize the database
        userDeviceRepository.saveAndFlush(userDevice);

        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();

        // Update the userDevice using partial update
        UserDevice partialUpdatedUserDevice = new UserDevice();
        partialUpdatedUserDevice.setId(userDevice.getId());

        partialUpdatedUserDevice.deviceId(UPDATED_DEVICE_ID);

        restUserDeviceMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedUserDevice.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedUserDevice))
            )
            .andExpect(status().isOk());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
        UserDevice testUserDevice = userDeviceList.get(userDeviceList.size() - 1);
        assertThat(testUserDevice.getDeviceId()).isEqualTo(UPDATED_DEVICE_ID);
        assertThat(testUserDevice.getDateRegistration()).isEqualTo(DEFAULT_DATE_REGISTRATION);
        assertThat(testUserDevice.getLastUpdate()).isEqualTo(DEFAULT_LAST_UPDATE);
    }

    @Test
    @Transactional
    void fullUpdateUserDeviceWithPatch() throws Exception {
        // Initialize the database
        userDeviceRepository.saveAndFlush(userDevice);

        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();

        // Update the userDevice using partial update
        UserDevice partialUpdatedUserDevice = new UserDevice();
        partialUpdatedUserDevice.setId(userDevice.getId());

        partialUpdatedUserDevice.deviceId(UPDATED_DEVICE_ID).dateRegistration(UPDATED_DATE_REGISTRATION).lastUpdate(UPDATED_LAST_UPDATE);

        restUserDeviceMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedUserDevice.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedUserDevice))
            )
            .andExpect(status().isOk());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
        UserDevice testUserDevice = userDeviceList.get(userDeviceList.size() - 1);
        assertThat(testUserDevice.getDeviceId()).isEqualTo(UPDATED_DEVICE_ID);
        assertThat(testUserDevice.getDateRegistration()).isEqualTo(UPDATED_DATE_REGISTRATION);
        assertThat(testUserDevice.getLastUpdate()).isEqualTo(UPDATED_LAST_UPDATE);
    }

    @Test
    @Transactional
    void patchNonExistingUserDevice() throws Exception {
        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();
        userDevice.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restUserDeviceMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, userDevice.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(userDevice))
            )
            .andExpect(status().isBadRequest());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchUserDevice() throws Exception {
        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();
        userDevice.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restUserDeviceMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(userDevice))
            )
            .andExpect(status().isBadRequest());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamUserDevice() throws Exception {
        int databaseSizeBeforeUpdate = userDeviceRepository.findAll().size();
        userDevice.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restUserDeviceMockMvc
            .perform(
                patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(userDevice))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the UserDevice in the database
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteUserDevice() throws Exception {
        // Initialize the database
        userDeviceRepository.saveAndFlush(userDevice);

        int databaseSizeBeforeDelete = userDeviceRepository.findAll().size();

        // Delete the userDevice
        restUserDeviceMockMvc
            .perform(delete(ENTITY_API_URL_ID, userDevice.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<UserDevice> userDeviceList = userDeviceRepository.findAll();
        assertThat(userDeviceList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
