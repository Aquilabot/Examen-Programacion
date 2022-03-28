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

    @RequestMapping(path = "/querydocOR/{documentNumber}/{documentType}", method = RequestMethod.GET)
    public ArrayList<estudianteModel> getByDocOrDocType(@PathVariable String documentNumber, @PathVariable String documentType){
        return EstudianteService.getByDocOrDocType(documentNumber, documentType);
    }

    @RequestMapping(path = "/querydocAND/{documentNumber}/{documentType}", method = RequestMethod.GET)
    public ArrayList<estudianteModel> getByDocAndDocType(@PathVariable String documentNumber, @PathVariable String documentType){
        return EstudianteService.getByDocAndDocType(documentNumber, documentType);
    }

    @RequestMapping(path = "/querynameOR/{lastnameP}/{lastnameM}/{name}", method = RequestMethod.GET)
    public ArrayList<estudianteModel> getByLastnamePOrLastnameMOrName(@PathVariable String lastnameP, @PathVariable String lastnameM, @PathVariable String name){
        return EstudianteService.getByLastnamePOrLastnameMOrName(lastnameP, lastnameM, name);
    }

    @RequestMapping(path = "/querynameAND/{lastnameP}/{lastnameM}/{name}", method = RequestMethod.GET)
    public ArrayList<estudianteModel> getByLastnamePAndLastnameMAndName(@PathVariable String lastnameP, @PathVariable String lastnameM, @PathVariable String name){
        return EstudianteService.getByLastnamePAndLastnameMAndName(lastnameP, lastnameM, name);
    }

    @RequestMapping(path = "/queryubigeoOR/{departamento}/{provincia}/{distrito}", method = RequestMethod.GET)
    public ArrayList<estudianteModel> getByDepartamentoOrProvinciaOrDistrito(@PathVariable String departamento, @PathVariable String provincia, @PathVariable String distrito){
        return EstudianteService.getByDepartamentoOrProvinciaOrDistrito(departamento, provincia, distrito);
    }

    @RequestMapping(path = "/queryubigeoAND/{departamento}/{provincia}/{distrito}", method = RequestMethod.GET)
    public ArrayList<estudianteModel> getByDepartamentoAndProvinciaAndDistrito(@PathVariable String departamento, @PathVariable String provincia, @PathVariable String distrito){
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
             
        ArrayList<estudianteModel> estudiantes = EstudianteService.getStudents();
             
        excel excelExport = new excel(estudiantes);
             
        excelExport.export(response);
    }
}