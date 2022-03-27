package com.example.demo.repositories;

import com.example.demo.models.estudianteModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface estudianteRepository extends CrudRepository<estudianteModel, Long> {
    ArrayList<estudianteModel>findAll();
    estudianteModel save(estudianteModel EstudianteModel);
    void delete(estudianteModel EstudianteModel);

    //abstract query with multiple parameters
    //Tipo y Numero de documento
    public abstract ArrayList<estudianteModel> findByDocumentNumbeOrDocumentType(String documentNumber, String documentType);
    public abstract ArrayList<estudianteModel> findByDocumentNumbeAndDocumentType(String documentNumber, String documentType);
    
    //Apellidos y Nombres
    public abstract ArrayList<estudianteModel> findByLastnamePOrLastnameMOrName(String lastnameP, String lastnameM, String name);
    public abstract ArrayList<estudianteModel> findByLastnamePAndLastnameMAndName(String lastnameP, String lastnameM, String name);

    //Ubigeo (departamento/provincia/distrito)
    public abstract ArrayList<estudianteModel> findByDepartamentoOrProvinciaOrDistrito(String departamento, String provincia, String distrito);
    public abstract ArrayList<estudianteModel> findByDepartamentoAndProvinciaAndDistrito(String departamento, String provincia, String distrito);
}
