import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Student } from '../../model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  documentType:String=""
  documentNumber:String=""
  lastnameP:string=""
  lastnameM:string=""
  name:string=""
  distrito:string="" //el ubigeo se puede obtener usando el distrito
  students:Student[]=[]

  constructor(private service:StudentService,private router:Router,private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.service.getStudents().subscribe(data=>{
      this.students=data
    })
  }

  goToEdit(student:Student){
    localStorage.setItem("id",student.id.toString())
    this.router.navigate(["edit"])
  }

  delete(student:Student){
    this.service.deleteStudent(student.id).subscribe(data=>{
      this.getStudents();
    })
  }

  generarReporte(){
    this.service.getExcel().subscribe(response => this.downLoadFile(response, "application/ms-excel"));
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
            a.href = url;
            a.download = 'report.xlsx';
            a.click();
  }

  filtrarDoc(){
    let student = new Student()
    student.documentNumber=this.documentNumber
    student.documentType=this.documentType
    console.log(student);
    this.service.getStudentByDocument(this.documentNumber,this.documentType).subscribe(data=>{
      console.log(data)
      this.students=data
    })
  }

  filtrarName(){
    let student = new Student()
    student.name=this.name
    student.lastnameP=this.lastnameP
    student.lastnameM=this.lastnameM
    console.log(student);
    this.service.getStudentByNames(this.name,this.lastnameP,this.lastnameM).subscribe(data=>{
      console.log(data)
      this.students=data
    })
  }

  filtrarUbigeo(){
    let student = new Student()
    student.distrito=this.distrito
    console.log(student);
    this.service.getStudentByUbigeo(undefined, undefined, this.distrito).subscribe(data=>{
      console.log(data)
      this.students=data
    })
  }

}
