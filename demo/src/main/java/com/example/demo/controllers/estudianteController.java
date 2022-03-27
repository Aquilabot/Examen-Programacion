package com.example.demo.controllers;

import com.example.demo.models.estudianteModel;
import com.example.demo.services.estudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
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
}
