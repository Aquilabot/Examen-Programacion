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
      documentType:['',Validators.required],
      documentId: ['', Validators.required],
      name:['',Validators.required],
      lastName:['',Validators.required],
      birthdayDate: ['', Validators.required],
      departamento:['',Validators.required],
      provincia:['',Validators.required],
      distrito:['',Validators.required],
      photo:['',Validators.required],
      gender:['',Validators.required],
      age:['',Validators.required]
    });
  }

  //carga datos de persona
  ngOnInit(): void {
    this.loadStudent()
  }

  loadStudent(){
    let id=localStorage.getItem("id")|| '{}';
    this.service.getStudentId(id).subscribe(data=>{
      this.student=data,
      console.log(this.student.studentId)
      this.form.setValue({
        documentNumber:this.student.documentNumber,
        documentType:this.student.documentType,
        name:this.student.name,
        lastNameP:this.student.lastNameP,
        lastNameM:this.student.lastNameM,
        birthdate:this.student.birthdate,
        age:this.student.age,
        location:this.student.location,
        departamento:this.student.departamento,
        provincia:this.student.provincia,
        distrito:this.student.distrito,
        referenceLocation:this.student.referenceLocation,
        civilStatus:this.student.civilStatus,
        photo:this.student.photo
      });
    })
  }

  editStudent(){
    this.student=this.form.value
    this.student.studentId=localStorage.getItem("id") || '{}';
    console.log(this.student.studentId)
    this.service.updateStudent(this.student).subscribe(res=>{
      console.log("Estudiante editado exitosamente!")
      this.router.navigateByUrl('/list');
    })
  }

  onUpload(e:any){

  }
}
