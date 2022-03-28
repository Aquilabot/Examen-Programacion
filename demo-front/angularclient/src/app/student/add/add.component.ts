import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { StudentService } from "../../services/student.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  form: FormGroup;
  file: any;
  submitted = false;

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
