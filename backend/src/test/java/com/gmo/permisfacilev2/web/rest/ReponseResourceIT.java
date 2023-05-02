package com.gmo.permisfacilev2.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.gmo.permisfacilev2.IntegrationTest;
import com.gmo.permisfacilev2.domain.Reponse;
import com.gmo.permisfacilev2.repository.ReponseRepository;
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
 * Integration tests for the {@link ReponseResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class ReponseResourceIT {

    private static final String DEFAULT_INTITULE = "AAAAAAAAAA";
    private static final String UPDATED_INTITULE = "BBBBBBBBBB";

    private static final Boolean DEFAULT_REPONSE_UNIQUE = false;
    private static final Boolean UPDATED_REPONSE_UNIQUE = true;

    private static final Boolean DEFAULT_BONNE_REPONSE = false;
    private static final Boolean UPDATED_BONNE_REPONSE = true;

    private static final String ENTITY_API_URL = "/api/reponses";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ReponseRepository reponseRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restReponseMockMvc;

    private Reponse reponse;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Reponse createEntity(EntityManager em) {
        Reponse reponse = new Reponse()
            .intitule(DEFAULT_INTITULE)
            .reponseUnique(DEFAULT_REPONSE_UNIQUE)
            .bonneReponse(DEFAULT_BONNE_REPONSE);
        return reponse;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Reponse createUpdatedEntity(EntityManager em) {
        Reponse reponse = new Reponse()
            .intitule(UPDATED_INTITULE)
            .reponseUnique(UPDATED_REPONSE_UNIQUE)
            .bonneReponse(UPDATED_BONNE_REPONSE);
        return reponse;
    }

    @BeforeEach
    public void initTest() {
        reponse = createEntity(em);
    }

    @Test
    @Transactional
    void createReponse() throws Exception {
        int databaseSizeBeforeCreate = reponseRepository.findAll().size();
        // Create the Reponse
        restReponseMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(reponse)))
            .andExpect(status().isCreated());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeCreate + 1);
        Reponse testReponse = reponseList.get(reponseList.size() - 1);
        assertThat(testReponse.getIntitule()).isEqualTo(DEFAULT_INTITULE);
        assertThat(testReponse.getReponseUnique()).isEqualTo(DEFAULT_REPONSE_UNIQUE);
        assertThat(testReponse.getBonneReponse()).isEqualTo(DEFAULT_BONNE_REPONSE);
    }

    @Test
    @Transactional
    void createReponseWithExistingId() throws Exception {
        // Create the Reponse with an existing ID
        reponse.setId(1L);

        int databaseSizeBeforeCreate = reponseRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restReponseMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(reponse)))
            .andExpect(status().isBadRequest());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkIntituleIsRequired() throws Exception {
        int databaseSizeBeforeTest = reponseRepository.findAll().size();
        // set the field null
        reponse.setIntitule(null);

        // Create the Reponse, which fails.

        restReponseMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(reponse)))
            .andExpect(status().isBadRequest());

        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkReponseUniqueIsRequired() throws Exception {
        int databaseSizeBeforeTest = reponseRepository.findAll().size();
        // set the field null
        reponse.setReponseUnique(null);

        // Create the Reponse, which fails.

        restReponseMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(reponse)))
            .andExpect(status().isBadRequest());

        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllReponses() throws Exception {
        // Initialize the database
        reponseRepository.saveAndFlush(reponse);

        // Get all the reponseList
        restReponseMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(reponse.getId().intValue())))
            .andExpect(jsonPath("$.[*].intitule").value(hasItem(DEFAULT_INTITULE)))
            .andExpect(jsonPath("$.[*].reponseUnique").value(hasItem(DEFAULT_REPONSE_UNIQUE.booleanValue())))
            .andExpect(jsonPath("$.[*].bonneReponse").value(hasItem(DEFAULT_BONNE_REPONSE.booleanValue())));
    }

    @Test
    @Transactional
    void getReponse() throws Exception {
        // Initialize the database
        reponseRepository.saveAndFlush(reponse);

        // Get the reponse
        restReponseMockMvc
            .perform(get(ENTITY_API_URL_ID, reponse.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(reponse.getId().intValue()))
            .andExpect(jsonPath("$.intitule").value(DEFAULT_INTITULE))
            .andExpect(jsonPath("$.reponseUnique").value(DEFAULT_REPONSE_UNIQUE.booleanValue()))
            .andExpect(jsonPath("$.bonneReponse").value(DEFAULT_BONNE_REPONSE.booleanValue()));
    }

    @Test
    @Transactional
    void getNonExistingReponse() throws Exception {
        // Get the reponse
        restReponseMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putNewReponse() throws Exception {
        // Initialize the database
        reponseRepository.saveAndFlush(reponse);

        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();

        // Update the reponse
        Reponse updatedReponse = reponseRepository.findById(reponse.getId()).get();
        // Disconnect from session so that the updates on updatedReponse are not directly saved in db
        em.detach(updatedReponse);
        updatedReponse.intitule(UPDATED_INTITULE).reponseUnique(UPDATED_REPONSE_UNIQUE).bonneReponse(UPDATED_BONNE_REPONSE);

        restReponseMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedReponse.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedReponse))
            )
            .andExpect(status().isOk());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
        Reponse testReponse = reponseList.get(reponseList.size() - 1);
        assertThat(testReponse.getIntitule()).isEqualTo(UPDATED_INTITULE);
        assertThat(testReponse.getReponseUnique()).isEqualTo(UPDATED_REPONSE_UNIQUE);
        assertThat(testReponse.getBonneReponse()).isEqualTo(UPDATED_BONNE_REPONSE);
    }

    @Test
    @Transactional
    void putNonExistingReponse() throws Exception {
        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();
        reponse.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restReponseMockMvc
            .perform(
                put(ENTITY_API_URL_ID, reponse.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(reponse))
            )
            .andExpect(status().isBadRequest());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchReponse() throws Exception {
        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();
        reponse.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restReponseMockMvc
            .perform(
                put(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(reponse))
            )
            .andExpect(status().isBadRequest());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamReponse() throws Exception {
        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();
        reponse.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restReponseMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(reponse)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateReponseWithPatch() throws Exception {
        // Initialize the database
        reponseRepository.saveAndFlush(reponse);

        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();

        // Update the reponse using partial update
        Reponse partialUpdatedReponse = new Reponse();
        partialUpdatedReponse.setId(reponse.getId());

        partialUpdatedReponse.intitule(UPDATED_INTITULE).reponseUnique(UPDATED_REPONSE_UNIQUE).bonneReponse(UPDATED_BONNE_REPONSE);

        restReponseMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedReponse.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedReponse))
            )
            .andExpect(status().isOk());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
        Reponse testReponse = reponseList.get(reponseList.size() - 1);
        assertThat(testReponse.getIntitule()).isEqualTo(UPDATED_INTITULE);
        assertThat(testReponse.getReponseUnique()).isEqualTo(UPDATED_REPONSE_UNIQUE);
        assertThat(testReponse.getBonneReponse()).isEqualTo(UPDATED_BONNE_REPONSE);
    }

    @Test
    @Transactional
    void fullUpdateReponseWithPatch() throws Exception {
        // Initialize the database
        reponseRepository.saveAndFlush(reponse);

        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();

        // Update the reponse using partial update
        Reponse partialUpdatedReponse = new Reponse();
        partialUpdatedReponse.setId(reponse.getId());

        partialUpdatedReponse.intitule(UPDATED_INTITULE).reponseUnique(UPDATED_REPONSE_UNIQUE).bonneReponse(UPDATED_BONNE_REPONSE);

        restReponseMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedReponse.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedReponse))
            )
            .andExpect(status().isOk());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
        Reponse testReponse = reponseList.get(reponseList.size() - 1);
        assertThat(testReponse.getIntitule()).isEqualTo(UPDATED_INTITULE);
        assertThat(testReponse.getReponseUnique()).isEqualTo(UPDATED_REPONSE_UNIQUE);
        assertThat(testReponse.getBonneReponse()).isEqualTo(UPDATED_BONNE_REPONSE);
    }

    @Test
    @Transactional
    void patchNonExistingReponse() throws Exception {
        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();
        reponse.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restReponseMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, reponse.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(reponse))
            )
            .andExpect(status().isBadRequest());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchReponse() throws Exception {
        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();
        reponse.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restReponseMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(reponse))
            )
            .andExpect(status().isBadRequest());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamReponse() throws Exception {
        int databaseSizeBeforeUpdate = reponseRepository.findAll().size();
        reponse.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restReponseMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(reponse)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Reponse in the database
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteReponse() throws Exception {
        // Initialize the database
        reponseRepository.saveAndFlush(reponse);

        int databaseSizeBeforeDelete = reponseRepository.findAll().size();

        // Delete the reponse
        restReponseMockMvc
            .perform(delete(ENTITY_API_URL_ID, reponse.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Reponse> reponseList = reponseRepository.findAll();
        assertThat(reponseList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
