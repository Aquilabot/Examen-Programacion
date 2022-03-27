package com.example.demo.util;

import java.io.IOException;
import java.util.ArrayList;
 
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
 
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.example.demo.models.estudianteModel;

public class excel {
    private XSSFWorkbook workbook;
    private XSSFSheet sheet;
    private ArrayList<estudianteModel> listEstudiante;

    public excel(ArrayList<estudianteModel> listPersonas) {
        this.listEstudiante = listPersonas;
        workbook = new XSSFWorkbook();
    }
 
 
    private void writeHeaderLine() {
        sheet = workbook.createSheet("Personas");
         
        Row row = sheet.createRow(0);
         
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setBold(true);
        font.setFontHeight(16);
        style.setFont(font);
         
        createCell(row, 0, "Tipo de documento", style);
        createCell(row, 1, "Numero de documento", style);
        createCell(row, 2, "Nombres", style);    
        createCell(row, 3, "Apellido Paterno", style);
        createCell(row, 4, "Apellido Materno", style);
        createCell(row, 6, "Genero", style);
        createCell(row, 5, "Fecha de Nacimiento", style);
        createCell(row, 7, "Edad", style);
        createCell(row, 8, "Ubigeo", style);
        createCell(row, 9, "Direccion", style);
        createCell(row, 10, "Referencia", style);
        createCell(row , 11, "Estado Civil", style);
        createCell(row, 12, "Foto link", style);
    }
     
    private void createCell(Row row, int columnCount, Object value, CellStyle style) {
        sheet.autoSizeColumn(columnCount);
        Cell cell = row.createCell(columnCount);
        if (value instanceof Integer) {
            cell.setCellValue((Integer) value);
        } else if (value instanceof Boolean) {
            cell.setCellValue((Boolean) value);
        }else {
            cell.setCellValue((String) value);
        }
        cell.setCellStyle(style);
    }
     
    private void writeDataLines() {
        int rowCount = 1;
 
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setFontHeight(16);
        style.setFont(font);
                 
        for (estudianteModel estudiante : listEstudiante) {
            Row row = sheet.createRow(rowCount++);
            int columnCount = 0;
             
            createCell(row, columnCount++, estudiante.getDocumentType(), style);
            createCell(row, columnCount++, estudiante.getDocumentNumber(), style);
            createCell(row, columnCount++, estudiante.getName(), style);
            createCell(row, columnCount++, estudiante.getLastnameP(), style);
            createCell(row, columnCount++, estudiante.getLastnameM(), style);
            createCell(row, columnCount++, estudiante.getGender(), style);
            createCell(row, columnCount++, estudiante.getBirthdate(), style);
            createCell(row, columnCount++, estudiante.getAge(), style);
            createCell(row, columnCount++, estudiante.getDepartamento() + " " +
                    estudiante.getProvincia() + " " + estudiante.getDistrito(), style);
            createCell(row, columnCount, estudiante.getLocation(), style);
            createCell(row, columnCount, estudiante.getReferenceLocation(), style);
            createCell(row, columnCount, estudiante.getCivilStatus(), style);
            createCell(row, columnCount, estudiante.getPhoto(), style);
        }
    }
     
    public void export(HttpServletResponse response) throws IOException {
        writeHeaderLine();
        writeDataLines();

        ServletOutputStream outputStream = response.getOutputStream();
        workbook.write(outputStream);
        workbook.close();

        outputStream.close();
    }
}