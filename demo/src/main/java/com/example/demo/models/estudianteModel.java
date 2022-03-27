package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table (name = "student")
public class estudianteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String documentType;
    private String documentNumber;
    private String lastnameP;
    private String lastnameM;
    private String name;
    private String gender;
    private String birthdate; // (dd/mm/yyyy)
    private int age;
    private String location;
    private String departamento;
    private String provincia;
    private String distrito;
    private String referenceLocation;
    private String civilStatus;
    private String photo; // (url)

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDocumentType() {
        return this.documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getDocumentNumber() {
        return this.documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }

    public String getLastnameP() {
        return this.lastnameP;
    }

    public void setLastnameP(String lastnameP) {
        this.lastnameP = lastnameP;
    }

    public String getLastnameM() {
        return this.lastnameM;
    }

    public void setLastnameM(String lastnameM) {
        this.lastnameM = lastnameM;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthdate() {
        return this.birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDepartamento() {
        return this.departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getProvincia() {
        return this.provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getDistrito() {
        return this.distrito;
    }

    public void setDistrito(String distrito) {
        this.distrito = distrito;
    }

    public String getReferenceLocation() {
        return this.referenceLocation;
    }

    public void setReferenceLocation(String referenceLocation) {
        this.referenceLocation = referenceLocation;
    }

    public String getCivilStatus() {
        return this.civilStatus;
    }

    public void setCivilStatus(String civilStatus) {
        this.civilStatus = civilStatus;
    }

    public String getPhoto() {
        return this.photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}