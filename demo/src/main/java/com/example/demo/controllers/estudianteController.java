package com.example.demo.controllers;

import com.example.demo.models.estudianteModel;
import com.example.demo.services.estudianteService;
import com.example.demo.util.excel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/estudiante")
public class estudianteController {
    @Autowired
    estudianteService EstudianteService;

    @GetMapping()
    public ArrayList<estudianteModel> getStudents(){
        return EstudianteService.getStudents();
    }

    @PostMapping()
    public estudianteModel saveStudent(@RequestBody estudianteModel estudiante){
        return this.EstudianteService.saveStudent(estudiante);
    }

    @GetMapping("/{id}")
    public Optional<estudianteModel> getStudent(@PathVariable Long id){
        return EstudianteService.getStudent(id);
    }

    @GetMapping("/querydocOR")
    public ArrayList<estudianteModel> getByDocOrDocType(@RequestParam String documentNumber, @RequestParam String documentType){
        return EstudianteService.getByDocOrDocType(documentNumber, documentType);
    }

    @GetMapping("/querydocAND")
    public ArrayList<estudianteModel> getByDocAndDocType(@RequestParam String documentNumber, @RequestParam String documentType){
        return EstudianteService.getByDocAndDocType(documentNumber, documentType);
    }

    @GetMapping("/querynameOR")
    public ArrayList<estudianteModel> getByLastnamePOrLastnameMOrName(@RequestParam String lastnameP, @RequestParam String lastnameM, @RequestParam String name){
        return EstudianteService.getByLastnamePOrLastnameMOrName(lastnameP, lastnameM, name);
    }

    @GetMapping("/querynameAND")
    public ArrayList<estudianteModel> getByLastnamePAndLastnameMAndName(@RequestParam String lastnameP, @RequestParam String lastnameM, @RequestParam String name){
        return EstudianteService.getByLastnamePAndLastnameMAndName(lastnameP, lastnameM, name);
    }

    @GetMapping("/queryubigeoOR")
    public ArrayList<estudianteModel> getByDepartamentoOrProvinciaOrDistrito(@RequestParam String departamento, @RequestParam String provincia, @RequestParam String distrito){
        return EstudianteService.getByDepartamentoOrProvinciaOrDistrito(departamento, provincia, distrito);
    }

    @GetMapping("/queryubigeoAND")
    public ArrayList<estudianteModel> getByDepartamentoAndProvinciaAndDistrito(@RequestParam String departamento, @RequestParam String provincia, @RequestParam String distrito){
        return EstudianteService.getByDepartamentoAndProvinciaAndDistrito(departamento, provincia, distrito);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id){
        boolean checkS = EstudianteService.deleteStudent(id);
        if(checkS){
            return "Estudiante " + id + " eliminado";
        }else{
            return "Estudiante con id "+ id +" no ha podido ser eliminado";
        }
    }

    @GetMapping(path={"/export/excel"})
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("dd-MM-yyyy_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());
             
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);
             
        ArrayList<estudianteModel> personas = EstudianteService.getStudents();
             
        excel excelExport = new excel(personas);
             
        excelExport.export(response);
    }
}