import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Student } from "../model/student";
@Injectable({
  providedIn: "root"
})
export class StudentService {

  AUTH_SERVER: string = "http://localhost:8080";
  student: Student[] = [];
  constructor(private httpClient: HttpClient) {}

  getStudents() {
    return this.httpClient.get<Student[]>(this.AUTH_SERVER + "/estudiante");
  }

  addStudent(student: Student) {
    return this.httpClient.post(this.AUTH_SERVER + "/estudiante", student);
  }

  getStudentId(id: String) {
    return this.httpClient.get<Student>(this.AUTH_SERVER + "/estudiante/" + id);
  }

  updateStudent(student: Student) {
    return this.httpClient.post<Student>(this.AUTH_SERVER + "/estudiante" + student.id, student);
  }

  deleteStudent(id: number) {
    return this.httpClient.delete(this.AUTH_SERVER + "/estudiante/" + id);
  }

  getExcel() {
    return this.httpClient.get<any>(this.AUTH_SERVER+'/estudiante/export/excel',{
      responseType: 'arraybuffer' as 'json'
    });
  }

  getStudentByDocument(documentNumber: String, documentType: String) {
    return this.httpClient.get<Student[]>(this.AUTH_SERVER + "/estudiante/querydocAND/" + documentNumber + "/" + documentType);
  }

  getStudentByNames(name: String, lastNameP: String, lastNameM: String) {
    return this.httpClient.get<Student[]>(this.AUTH_SERVER + "/estudiante/querynameAND/" + name + "/" + lastNameP + "/" + lastNameM);
  }

  getStudentByUbigeo(departamento?: String, provincia?: String, distrito?: String) {
    return this.httpClient.get<Student[]>(this.AUTH_SERVER + "/estudiante/queryubigeoOR/" + departamento + "/" + provincia + "/" + distrito);
  }
}
