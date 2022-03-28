import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student: Student = new Student;
  form: FormGroup;
  constructor(private fb: FormBuilder,private service:StudentService,private router: Router){
    this.form = this.fb.group({
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
      gender: ["", Validators.required],
      age: ["", Validators.required]
    });
  }

  //carga datos de persona
  ngOnInit(): void {
    this.loadStudent()
  }

  loadStudent(){ //load student using shared data
    this.student=JSON.parse(localStorage.getItem("student") || '{}'); //parsed
    this.form.controls['documentNumber'].setValue(this.student.documentNumber);
    this.form.controls['documentType'].setValue(this.student.documentType);
    this.form.controls['lastnameP'].setValue(this.student.lastnameP);
    this.form.controls['lastnameM'].setValue(this.student.lastnameM);
    this.form.controls['name'].setValue(this.student.name);
    this.form.controls['birthdate'].setValue(this.student.birthdate);
    this.form.controls['location'].setValue(this.student.location);
    this.form.controls['departamento'].setValue(this.student.departamento);
    this.form.controls['provincia'].setValue(this.student.provincia);
    this.form.controls['distrito'].setValue(this.student.distrito);
    this.form.controls['referenceLocation'].setValue(this.student.referenceLocation);
    this.form.controls['civilStatus'].setValue(this.student.civilStatus);
    this.form.controls['photo'].setValue(this.student.photo);
  }

  editStudent(){
    this.student=this.form.value
    this.student.id=+(localStorage.getItem("id") || '{}'); //parsed
    console.log(this.student.id)
    this.service.updateStudent(this.student).subscribe(res=>{
      console.log("Estudiante editado exitosamente!")
      this.router.navigateByUrl('/estudiante');
    })
  }

  onUpload(e:any){

  }
}
