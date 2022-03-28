import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { StudentService } from "../../services/student.service";
import { Departamento, Provincia, Distrito } from "../../model/ubigeo";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
  providers: [StudentService]
})
export class AddComponent implements OnInit {
  form: FormGroup;
  file: any;
  submitted = false;

  public selectedDepartamento: Departamento = { id: 0, name: "Seleccione un departamento" };
  public selectedProvincia: Provincia = { id: 0, departamentoId: 0, name: "Seleccione una provincia" };
  public selectedDistrito: Distrito = { id: 0, provinciaId: 0, name: "Seleccione un distrito" };
  public departamentos: Departamento[] = [];
  public provincias: Provincia[] = [];
  public distritos: Distrito[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private studentService: StudentService) {
    this.form = this.formBuilder.group({
      documentNumber: ["", Validators.required],
      documentType: ["", Validators.required],
      lastnameP: ["", Validators.required],
      lastnameM: ["", Validators.required],
      name: ["", Validators.required],
      birthdate: ["", Validators.required],
      location: ["", Validators.required],
      departamento: ["", Validators.required],
      provincia: ["", Validators.required],
      distrito: ["", Validators.required],
      referenceLocation: ["", Validators.required],
      civilStatus: ["", Validators.required],
      photo: ["", Validators.required],
      gender: ["", Validators.required]
    });
  }

  ngOnInit(): void{
    this.departamentos = this.studentService.getDepartamentos();
  }
    onSelectedDepartamento(id:any):void{
      this.provincias = this.studentService.getProvincias().filter(provincia => provincia.departamentoId == id.target.value);
    }

    onSelectedProvincia(id:any):void{
      this.distritos = this.studentService.getDistritos().filter(distrito => distrito.provinciaId == id.target.value);
    }

    saveStudent() {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      this.studentService.addStudent(this.form.value).subscribe(data => {
        console.log("Estudiante agregado exitosamente!");
        this.studentService.getStudents();
        this.router.navigateByUrl("/estudiante");
      });
    }

    onFileSelected(event: any) {
      const file:File = event.target.files[0];
    if (file) {
      this.file=file
      console.log(file)
    }
  }
}
