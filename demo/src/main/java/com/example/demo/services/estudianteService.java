package com.example.demo.services;

import com.example.demo.models.estudianteModel;
import com.example.demo.util.agecalculation;
import com.example.demo.repositories.estudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class estudianteService {
    @Autowired // Sin necesidad de instanciar - Spring detecta la instacia existente
    estudianteRepository EstudianteRepository;

    public ArrayList<estudianteModel> getStudents(){
        return (ArrayList<estudianteModel>) EstudianteRepository.findAll();  // listado de todos los estudiantes
    }

    public estudianteModel saveStudent(estudianteModel estudiante){
        // asignamos el id en el background
        // este metodo tambien funciona como EDIT si especificamos el id explicitamente
        agecalculation calc = new agecalculation();
        estudiante.setAge(calc.agecalculation(estudiante.getBirthdate()));
        return EstudianteRepository.save(estudiante);
    }

    public Optional<estudianteModel> getStudent(Long id){
        return EstudianteRepository.findById(id);
    }

    public ArrayList<estudianteModel> getByDocOrDocType(String documentNumber, String documentType){
        return EstudianteRepository.findByDocumentNumberOrDocumentType(documentNumber, documentType);
    }

    public ArrayList<estudianteModel> getByDocAndDocType(String documentNumber, String documentType){
        return EstudianteRepository.findByDocumentNumberAndDocumentType(documentNumber, documentType);
    }

    public ArrayList<estudianteModel> getByLastnamePOrLastnameMOrName(String lastnameP, String lastnameM, String name){
        return EstudianteRepository.findByLastnamePOrLastnameMOrName(lastnameP, lastnameM, name);
    }

    public ArrayList<estudianteModel> getByLastnamePAndLastnameMAndName(String lastnameP, String lastnameM, String name){
        return EstudianteRepository.findByLastnamePAndLastnameMAndName(lastnameP, lastnameM, name);
    }

    public ArrayList<estudianteModel> getByDepartamentoOrProvinciaOrDistrito(String departamento, String provincia, String distrito){
        return EstudianteRepository.findByDepartamentoOrProvinciaOrDistrito(departamento, provincia, distrito);
    }

    public ArrayList<estudianteModel> getByDepartamentoAndProvinciaAndDistrito(String departamento, String provincia, String distrito){
        return EstudianteRepository.findByDepartamentoAndProvinciaAndDistrito(departamento, provincia, distrito);
    }

    public boolean deleteStudent(Long id){
        try{ //en caso de que el id no exista, se lanza una excepcion
            EstudianteRepository.deleteById(id);
            return true;
        }catch (Exception err){
            return false;
        }
    }
}
