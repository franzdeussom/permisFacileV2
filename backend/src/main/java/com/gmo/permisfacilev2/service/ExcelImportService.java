package com.gmo.permisfacilev2.service;

import com.gmo.permisfacilev2.domain.Question;
import com.gmo.permisfacilev2.domain.Reponse;
import com.gmo.permisfacilev2.repository.QuestionRepository;
import com.gmo.permisfacilev2.repository.ReponseRepository;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.NumberToTextConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Iterator;
import java.util.Set;

@Component
public class ExcelImportService {

    public static final String FILENAME = "data.xls";
    public static final String SHEETNAME = "QuestionsAnswers";

    @Autowired
    private ReponseRepository reponseRepository;
    @Autowired
    private QuestionRepository questionRepository;


    @PostConstruct
    public void excelImport () {

        questionRepository.deleteAll();
        reponseRepository.deleteAll();

        InputStream resourceAsStream = ExcelImportService.class.getResourceAsStream("/"+FILENAME);

        try {
            HSSFWorkbook workbook = new HSSFWorkbook(resourceAsStream);

            HSSFSheet sheet = workbook.getSheet(SHEETNAME);
            if (sheet == null) return;

            Iterator<Row> rowIterator = sheet.rowIterator();
            rowIterator.next();
            rowIterator.next();

            while (rowIterator.hasNext()) {
                Row row = rowIterator.next();
                if(row.getRowNum()==307){
                    return;
                }
                saveQuestions(row);
            }

            IOUtils.closeQuietly(resourceAsStream);

        } catch (IOException e) {
            throw new IllegalStateException(e);
        } finally {
            IOUtils.closeQuietly(resourceAsStream);
        }
    }

    private void saveQuestions(Row row) {

        Question question = new Question();
        LocalDate now = LocalDate.now();
        question.setDateCreation(now);
        question.setLastUpdate(now);


        //image
        Cell cell = row.getCell(0);
        if (cell != null && StringUtils.isNotBlank(cell.getStringCellValue())) {
            question.setImage(cell.getStringCellValue().trim());
        }

        //numero
        cell = row.getCell(4);
        if (cell != null) {
            cell.setCellType(CellType.NUMERIC);
            BigDecimal decimal = new BigDecimal(cell.getNumericCellValue());
            question.setNumero(decimal.longValue());
        }

        //intituleFr
        String intituleFr;
        cell = row.getCell(5);
        if (cell != null && StringUtils.isNotBlank(cell.getStringCellValue())) {
            question.setIntitule(cell.getStringCellValue());
        } else {
            throw new IllegalArgumentException("intituleFr of row nber: " + row.getRowNum() + " is null");
        }

        //reponse type
        Boolean reponseUnique = false;
        cell = row.getCell(6);
        if (cell != null) {
            cell.setCellType(CellType.BOOLEAN);
            reponseUnique = new Boolean(cell.getBooleanCellValue());
        }

        if (reponseUnique) {//question reponse unique
            // en fr
            Reponse reponse = new Reponse();
            reponse.setReponseUnique(true);
            reponse.setBonneReponse(true);
            cell = row.getCell(7);//reponseOFr
            if(cell != null && cell.getCellType() == CellType.NUMERIC) {
                reponse.setIntitule(NumberToTextConverter.toText(cell.getNumericCellValue()));
            }else {
                if (cell != null && StringUtils.isNotBlank(cell.getStringCellValue())) {
                    reponse.setIntitule(cell.getStringCellValue());
                } else {
                    throw new IllegalArgumentException("reponseUniqueFr of row nber: " + row.getRowNum() + " is null");
                }
            }
            //reponse = reponseRepository.saveAndFlush(reponse);
            question.getReponses().add(reponse);
        }


        if (!reponseUnique) {// question reponse choix multiple
            //reponse choix 1 fr
            Reponse reponse1 = new Reponse();
            reponse1.setReponseUnique(false);

            cell = row.getCell(8);
            if (cell != null && StringUtils.isNotBlank(cell.getStringCellValue())) {
                reponse1.setIntitule(cell.getStringCellValue());

                cell = row.getCell(9);
                if (cell != null) {
                    cell.setCellType(CellType.BOOLEAN);
                    reponse1.setBonneReponse(cell.getBooleanCellValue());
                } else {
                    throw new IllegalArgumentException("choix of row nber: " + row.getRowNum() + " reponseChoix1Fr is null");
                }
                //reponse1 = reponseRepository.saveAndFlush(reponse1);
                question.getReponses().add(reponse1);
            }

            //reponse choix 2 fr
            Reponse reponse2 = new Reponse();
            reponse2.setReponseUnique(false);

            cell = row.getCell(10);
            if (cell != null && StringUtils.isNotBlank(cell.getStringCellValue())) {
                reponse2.setIntitule(cell.getStringCellValue());

                cell = row.getCell(11);
                if (cell != null) {
                    cell.setCellType(CellType.BOOLEAN);
                    reponse2.setBonneReponse(cell.getBooleanCellValue());
                } else {
                    throw new IllegalArgumentException("choix of row nber: " + row.getRowNum() + " reponseChoix1Fr is null");
                }
                //reponse2 = reponseRepository.saveAndFlush(reponse2);
                question.getReponses().add(reponse2);
            }

            //reponse choix 3  fr
            Reponse reponse3 = new Reponse();
            reponse3.setReponseUnique(false);

            cell = row.getCell(12);
            if (cell != null && StringUtils.isNotBlank(cell.getStringCellValue())) {
                reponse3.setIntitule(cell.getStringCellValue());

                cell = row.getCell(13);
                if (cell != null) {
                    cell.setCellType(CellType.BOOLEAN);
                    reponse3.setBonneReponse(cell.getBooleanCellValue());
                } else {
                    throw new IllegalArgumentException("choix of row nber: " + row.getRowNum() + " reponseChoix1Fr is null");
                }
                //reponse3 = reponseRepository.saveAndFlush(reponse3);
                question.getReponses().add(reponse3);
            }

            //reponse choix 4  fr
            Reponse reponse4 = new Reponse();
            reponse4.setReponseUnique(false);

            cell = row.getCell(14);
            if (cell != null && StringUtils.isNotBlank(cell.getStringCellValue())) {
                reponse4.setIntitule(cell.getStringCellValue());

                cell = row.getCell(15);
                if (cell != null) {
                    cell.setCellType(CellType.BOOLEAN);
                    reponse4.setBonneReponse(cell.getBooleanCellValue());
                } else {
                    throw new IllegalArgumentException("choix of row nber: " + row.getRowNum() + " reponseChoix1Fr is null");
                }
                //reponse4 = reponseRepository.saveAndFlush(reponse4);
                question.getReponses().add(reponse4);
            }
        }
        question = questionRepository.save(question);
    }
}
