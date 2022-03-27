package com.example.demo.services;

import com.example.demo.models.estudianteModel;
import com.example.demo.repositories.estudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class estudianteService {
    @Autowired // Sin necesidad de instanciar - Spring detecta la instacia existente
    estudianteRepository EstudianteRepository;

    public ArrayList<estudianteModel> getStudents(){
        return (ArrayList<estudianteModel>) EstudianteRepository.findAll();  // listado de todos los estudiantes
    }

    public estudianteModel saveStudent(estudianteModel estudiante){
        // asignamos el id en el background
        // este metodo tambien funciona como edit si especificamos el id explicitamente
        return EstudianteRepository.save(estudiante);
    }
}
