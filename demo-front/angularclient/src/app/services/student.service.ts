import {
  Injectable
} from "@angular/core";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import {
  Student
} from "../model/student";
import {
  Departamento,
  Provincia,
  Distrito
} from "../model/ubigeo";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  AUTH_SERVER: string = "http://localhost:8080";
  student: Student[] = [];
  constructor(private httpClient: HttpClient) {}

  getStudents() {
    return this.httpClient.get < Student[] > (this.AUTH_SERVER + "/estudiante");
  }

  addStudent(student: Student) {
    return this.httpClient.post(this.AUTH_SERVER + "/estudiante", student);
  }

  getStudentId(id: String) {
    return this.httpClient.get < Student > (this.AUTH_SERVER + "/estudiante/" + id);
  }

  updateStudent(student: Student) {
    return this.httpClient.post(this.AUTH_SERVER + "/estudiante", student);
  }

  deleteStudent(id: number) {
    return this.httpClient.delete(this.AUTH_SERVER + "/estudiante/" + id);
  }

  getExcel() {
    return this.httpClient.get < any > (this.AUTH_SERVER + '/estudiante/export/excel', {
      responseType: 'arraybuffer'as 'json'
    });
  }

  getStudentByDocument(documentNumber: String, documentType: String) {
    return this.httpClient.get < Student[] > (this.AUTH_SERVER + "/estudiante/querydocAND/" + documentNumber + "/" + documentType);
  }

  getStudentByNames(name: String, lastNameP: String, lastNameM: String) {
    return this.httpClient.get < Student[] > (this.AUTH_SERVER + "/estudiante/querynameAND/" + name + "/" + lastNameP + "/" + lastNameM);
  }

  getStudentByUbigeo(departamento ? : String, provincia ? : String, distrito ? : String) {
    return this.httpClient.get < Student[] > (this.AUTH_SERVER + "/estudiante/queryubigeoOR/" + departamento + "/" + provincia + "/" + distrito);
  }

  private departamentos: Departamento[] = [{
      id: 1,
      name: "Amazonas"
    },
    {
      id: 2,
      name: "Ancash"
    },
    {
      id: 3,
      name: "Apurimac"
    },
    {
      id: 4,
      name: "Arequipa"
    },
    {
      id: 5,
      name: "Ayacucho"
    },
    {
      id: 6,
      name: "Cajamarca"
    },
    {
      id: 7,
      name: "Cusco"
    },
    {
      id: 8,
      name: "Huancavelica"
    },
    {
      id: 9,
      name: "Huanuco"
    },
    {
      id: 10,
      name: "Ica"
    },
    {
      id: 11,
      name: "JunÃ­n"
    },
    {
      id: 12,
      name: "La Libertad"
    },
    {
      id: 13,
      name: "Lambayeque"
    },
    {
      id: 14,
      name: "Lima"
    },
    {
      id: 15,
      name: "Loreto"
    },
    {
      id: 16,
      name: "Madre De Dios"
    },
    {
      id: 17,
      name: "Moquegua"
    },
    {
      id: 18,
      name: "Pasco"
    },
    {
      id: 19,
      name: "Piura"
    },
    {
      id: 20,
      name: "Puno"
    },
    {
      id: 21,
      name: "San Martin"
    },
    {
      id: 22,
      name: "Tacna"
    },
    {
      id: 23,
      name: "Tumbes"
    },
    {
      id: 24,
      name: "Ucayali"
    }
  ];

  private provincias: Provincia[] = [{
      id: +"0101",
      departamentoId: +"01",
      name: "Bagua"
    },
    {
      id: +"0102",
      departamentoId: +"01",
      name: "Chachapoyas"
    },
    {
      id: +"0103",
      departamentoId: +"01",
      name: "Utcubamba"
    },
    {
      id: +"0201",
      departamentoId: +"02",
      name: "Casma"
    },
    {
      id: +"0202",
      departamentoId: +"02",
      name: "Huaraz"
    },
    {
      id: +"0203",
      departamentoId: +"02",
      name: "Huaylas"
    },
    {
      id: +"0204",
      departamentoId: +"02",
      name: "Santa"
    },
    {
      id: +"0301",
      departamentoId: +"03",
      name: "Abancay"
    },
    {
      id: +"0302",
      departamentoId: +"03",
      name: "Andahuaylas"
    },
    {
      id: +"0401",
      departamentoId: +"04",
      name: "Arequipa"
    },
    {
      id: +"0402",
      departamentoId: +"04",
      name: "Camana"
    },
    {
      id: +"0403",
      departamentoId: +"04",
      name: "Caylloma"
    },
    {
      id: +"0404",
      departamentoId: +"04",
      name: "Islay"
    },
    {
      id: +"0501",
      departamentoId: +"05",
      name: "Huamanga"
    },
    {
      id: +"0601",
      departamentoId: +"06",
      name: "Cajamarca"
    },
    {
      id: +"0602",
      departamentoId: +"06",
      name: "Chota"
    },
    {
      id: +"0603",
      departamentoId: +"06",
      name: "Cutervo"
    },
    {
      id: +"0604",
      departamentoId: +"06",
      name: "Jaen"
    },
    {
      id: +"0701",
      departamentoId: +"07",
      name: "Canchis"
    },
    {
      id: +"0702",
      departamentoId: +"07",
      name: "Cusco"
    },
    {
      id: +"0703",
      departamentoId: +"07",
      name: "La Convencion"
    },
    {
      id: +"0704",
      departamentoId: +"07",
      name: "Urubamba"
    },
    {
      id: +"0801",
      departamentoId: +"08",
      name: "Huancavelica"
    },
    {
      id: +"0901",
      departamentoId: +"09",
      name: "Huanuco"
    },
    {
      id: +"0902",
      departamentoId: +"09",
      name: "Leoncio Prado"
    },
    {
      id: +"1001",
      departamentoId: +"10",
      name: "Chincha"
    },
    {
      id: +"1002",
      departamentoId: +"10",
      name: "Ica"
    },
    {
      id: +"1003",
      departamentoId: +"10",
      name: "Nazca"
    },
    {
      id: +"1004",
      departamentoId: +"10",
      name: "Pisco"
    },
    {
      id: +"1101",
      departamentoId: +"11",
      name: "Huancayo"
    },
    {
      id: +"1102",
      departamentoId: +"11",
      name: "Chanchamayo"
    },
    {
      id: +"1103",
      departamentoId: +"11",
      name: "Huancayo"
    },
    {
      id: +"1104",
      departamentoId: +"11",
      name: "Jauja"
    },
    {
      id: +"1105",
      departamentoId: +"11",
      name: "Satipo"
    },
    {
      id: +"1106",
      departamentoId: +"11",
      name: "Tarma"
    },
    {
      id: +"1107",
      departamentoId: +"11",
      name: "Yauli"
    },
    {
      id: +"1201",
      departamentoId: +"12",
      name: "Chepen"
    },
    {
      id: +"1202",
      departamentoId: +"12",
      name: "Pacasmayo"
    },
    {
      id: +"1203",
      departamentoId: +"12",
      name: "Sanchez Carrion"
    },
    {
      id: +"1204",
      departamentoId: +"12",
      name: "Trujillo"
    }, {
      id: +"1301",
      departamentoId: +"13",
      name: "Chiclayo"
    },
    {
      id: +"1302",
      departamentoId: +"13",
      name: "Lambayeque"
    }, {
      id: +"1401",
      departamentoId: +"14",
      name: "Barranca"
    },
    {
      id: +"1402",
      departamentoId: +"14",
      name: "Callao"
    },
    {
      id: +"1403",
      departamentoId: +"14",
      name: "CaÃ±ete"
    },
    {
      id: +"1404",
      departamentoId: +"14",
      name: "Huaral"
    },
    {
      id: +"1405",
      departamentoId: +"14",
      name: "Huaura"
    },
    {
      id: +"1406",
      departamentoId: +"14",
      name: "Lima"
    }, {
      id: +"1501",
      departamentoId: +"15",
      name: "Alto Amazonas"
    },
    {
      id: +"1502",
      departamentoId: +"15",
      name: "Maynas"
    }, {
      id: +"1601",
      departamentoId: +"16",
      name: "Tambopata"
    }, {
      id: +"1701",
      departamentoId: +"17",
      name: "Ilo"
    },
    {
      id: +"1702",
      departamentoId: +"17",
      name: "Mariscal Nieto"
    }, {
      id: +"1801",
      departamentoId: +"18",
      name: "Oxapampa"
    },
    {
      id: +"1802",
      departamentoId: +"18",
      name: "Pasco"
    }, {
      id: +"1901",
      departamentoId: +"19",
      name: "Paita"
    },
    {
      id: +"1902",
      departamentoId: +"19",
      name: "Piura"
    },
    {
      id: +"1903",
      departamentoId: +"19",
      name: "Sullana"
    },
    {
      id: +"1904",
      departamentoId: +"19",
      name: "Talara"
    },
    {
      id: +"1901",
      departamentoId: +"19",
      name: "Sechura "
    }, {
      id: +"2001",
      departamentoId: +"20",
      name: "Juliaca"
    },
    {
      id: +"2002",
      departamentoId: +"20",
      name: "Puno"
    },
    {
      id: +"2003",
      departamentoId: +"20",
      name: "San Roman"
    }, {
      id: +"2101",
      departamentoId: +"21",
      name: "Mariscal Caceres"
    },
    {
      id: +"2102",
      departamentoId: +"21",
      name: "Moyobamba"
    },
    {
      id: +"2103",
      departamentoId: +"21",
      name: "Rioja"
    },
    {
      id: +"2104",
      departamentoId: +"21",
      name: "San Martin"
    }, {
      id: +"2201",
      departamentoId: +"22",
      name: "Jorge Basadre"
    },
    {
      id: +"2202",
      departamentoId: +"22",
      name: "Tacna"
    }, {
      id: +"2301",
      departamentoId: +"23",
      name: "Tumbes"
    },
    {
      id: +"2302",
      departamentoId: +"23",
      name: "Zarumilla"
    }, {
      id: +"2401",
      departamentoId: +"24",
      name: "Coronel Portillo"
    }
  ];

  private distritos: Distrito[] = [
    {
      id: +"010101",
      provinciaId: +"0101",
      name: "Bagua"
    },
    {
      id: +"010201",
      provinciaId: +"0102",
      name: "Chachapoyas"
    },
    {
      id: +"010301",
      provinciaId: +"0103",
      name: "Bagua Grande"
    },
    {
      id: +"020101",
      provinciaId: +"0201",
      name: "Casma"
    },
    {
      id: +"020201",
      provinciaId: +"0202",
      name: "Huaraz"
    },
    {
      id: +"020301",
      provinciaId: +"0203",
      name: "Caraz"
    },
    {
      id: +"020401",
      provinciaId: +"0204",
      name: "Chimbote"
    },
    {
      id: +"020402",
      provinciaId: +"0204",
      name: "Nuevo Chimbote"
    },
    {
      id: +"030101",
      provinciaId: +"0301",
      name: "Abancay"
    },
    {
      id: +"030201",
      provinciaId: +"0302",
      name: "Andahuaylas"
    },
    {
      id: +"040101",
      provinciaId: +"0401",
      name: "Arequipa"
    },
    {
      id: +"040102",
      provinciaId: +"0401",
      name: "Bustamante Y Rivero"
    },
    {
      id: +"040103",
      provinciaId: +"0401",
      name: "Cayma"
    },
    {
      id: +"040104",
      provinciaId: +"0401",
      name: "Cercado"
    },
    {
      id: +"040105",
      provinciaId: +"0401",
      name: "Cerro Colorado"
    },
    {
      id: +"040106",
      provinciaId: +"0401",
      name: "Jacobo Hunter"
    },
    {
      id: +"040107",
      provinciaId: +"0401",
      name: "Mariano Melgar"
    },
    {
      id: +"040108",
      provinciaId: +"0401",
      name: "Paucarpata"
    },
    {
      id: +"040109",
      provinciaId: +"0401",
      name: "Socabaya"
    },
    {
      id: +"040110",
      provinciaId: +"0401",
      name: "Castilla"
    },
    {
      id: +"040201",
      provinciaId: +"0402",
      name: "Camana"
    },
    {
      id: +"040301",
      provinciaId: +"0403",
      name: "Majes"
    },
    {
      id: +"040401",
      provinciaId: +"0404",
      name: "Mollendo"
    },
    {
      id: +"050101",
      provinciaId: +"0501",
      name: "Ayacucho"
    },
    {
      id: +"060101",
      provinciaId: +"0601",
      name: "Cajamarca"
    },
    {
      id: +"060201",
      provinciaId: +"0602",
      name: "Chota"
    },
    {
      id: +"060301",
      provinciaId: +"0603",
      name: "Cutervo"
    },
    {
      id: +"060401",
      provinciaId: +"0604",
      name: "Jaen"
    },
    {
      id: +"070101",
      provinciaId: +"0701",
      name: "Sicuani"
    },
    {
      id: +"070201",
      provinciaId: +"0702",
      name: "Cusco"
    },
    {
      id: +"070202",
      provinciaId: +"0702",
      name: "San Jeronimo"
    },
    {
      id: +"070203",
      provinciaId: +"0702",
      name: "Puno"
    },
    {
      id: +"070301",
      provinciaId: +"0703",
      name: "Santa Ana"
    },
    {
      id: +"070401",
      provinciaId: +"0704",
      name: "Machupicchu"
    },
    {
      id: +"070402",
      provinciaId: +"0704",
      name: "Urubamba"
    },
    {
      id: +"080101",
      provinciaId: +"0801",
      name: "Huancavelica"
    },
    {
      id: +"090101",
      provinciaId: +"0901",
      name: "Huanuco"
    },
    {
      id: +"100101",
      provinciaId: +"1001",
      name: "Chincha Alta"
    },
    {
      id: +"100201",
      provinciaId: +"1002",
      name: "Pueblo Nuevo"
    },
    {
      id: +"100202",
      provinciaId: +"1002",
      name: "Parcona"
    },
    {
      id: +"100301",
      provinciaId: +"1003",
      name: "Marcona"
    },
    {
      id: +"100302",
      provinciaId: +"1003",
      name: "Nazca"
    },
    {
      id: +"100401",
      provinciaId: +"1004",
      name: "Pisco"
    },
    {
      id: +"110101",
      provinciaId: +"1101",
      name: "Chilca"
    },
    {
      id: +"110101",
      provinciaId: +"1101",
      name: "El Tambo"
    },
    {
      id: +"110201",
      provinciaId: +"1102",
      name: "Chanchamayo"
    },
    {
      id: +"110202",
      provinciaId: +"1102",
      name: "Pichanaki"
    },
    {
      id: +"110203",
      provinciaId: +"1102",
      name: "San RamÃ³n"
    },
    {
      id: +"110301",
      provinciaId: +"1103",
      name: "El Tambo"
    },
    {
      id: +"110302",
      provinciaId: +"1103",
      name: "Huancayo"
    },
    {
      id: +"110401",
      provinciaId: +"1104",
      name: "Jauja"
    },
    {
      id: +"110501",
      provinciaId: +"1105",
      name: "San MartÃ­n De Pangoa"
    },
    {
      id: +"110502",
      provinciaId: +"1105",
      name: "Satipo"
    },
    {
      id: +"110601",
      provinciaId: +"1106",
      name: "Tarma"
    },
    {
      id: +"110701",
      provinciaId: +"1107",
      name: "La Oroya"
    },
    {
      id: +"120101",
      provinciaId: +"1201",
      name: "Chepen"
    },
    {
      id: +"120201",
      provinciaId: +"1202",
      name: "Pacasmayo"
    },
    {
      id: +"120301",
      provinciaId: +"1203",
      name: "Huamachuco"
    },
    {
      id: +"120401",
      provinciaId: +"1204",
      name: "El Porvenir"
    },
    {
      id: +"120402",
      provinciaId: +"1204",
      name: "La Esperanza"
    },
    {
      id: +"120403",
      provinciaId: +"1204",
      name: "Trujillo"
    },
    {
      id: +"120404",
      provinciaId: +"1204",
      name: "Victor Larco"
    },
    {
      id: +"130101",
      provinciaId: +"1301",
      name: "Chiclayo"
    },
    {
      id: +"130102",
      provinciaId: +"1301",
      name: "Jose Leonardo Ortiz"
    },
    {
      id: +"130201",
      provinciaId: +"1302",
      name: "Lambayeque"
    },
    {
      id: +"140101",
      provinciaId: +"1401",
      name: "Barranca"
    },
    {
      id: +"140201",
      provinciaId: +"1402",
      name: "Bellavista"
    },
    {
      id: +"140202",
      provinciaId: +"1402",
      name: "Callao"
    },
    {
      id: +"140203",
      provinciaId: +"1402",
      name: "La Punta"
    },
    {
      id: +"140204",
      provinciaId: +"1402",
      name: "Ventanilla"
    },
    {
      id: +"140301",
      provinciaId: +"1403",
      name: "Asia"
    },
    {
      id: +"140302",
      provinciaId: +"1403",
      name: "Imperial"
    },
    {
      id: +"140303",
      provinciaId: +"1403",
      name: "San Pedro De Mala"
    },
    {
      id: +"140304",
      provinciaId: +"1403",
      name: "San Vicente De CaÃ±ete"
    },
    {
      id: +"140401",
      provinciaId: +"1404",
      name: "Chancay"
    },
    {
      id: +"140402",
      provinciaId: +"1404",
      name: "Huaral"
    },
    {
      id: +"140501",
      provinciaId: +"1405",
      name: "Huacho"
    },
    {
      id: +"140601",
      provinciaId: +"1406",
      name: "Ate"
    },
    {
      id: +"140602",
      provinciaId: +"1406",
      name: "Barranco"
    },
    {
      id: +"140603",
      provinciaId: +"1406",
      name: "BreÃ±a"
    },
    {
      id: +"140604",
      provinciaId: +"1406",
      name: "Callao"
    },
    {
      id: +"140605",
      provinciaId: +"1406",
      name: "Carabayllo"
    },
    {
      id: +"140606",
      provinciaId: +"1406",
      name: "Cercado De Lima"
    },
    {
      id: +"140607",
      provinciaId: +"1406",
      name: "Chaclacayo"
    },
    {
      id: +"140608",
      provinciaId: +"1406",
      name: "Chorrillos"
    },
    {
      id: +"140609",
      provinciaId: +"1406",
      name: "Comas"
    },
    {
      id: +"140610",
      provinciaId: +"1406",
      name: "El Agustino"
    },
    {
      id: +"140611",
      provinciaId: +"1406",
      name: "Independencia"
    },
    {
      id: +"140612",
      provinciaId: +"1406",
      name: "JesÃºs MarÃ­a"
    },
    {
      id: +"140613",
      provinciaId: +"1406",
      name: "La Molina"
    },
    {
      id: +"140614",
      provinciaId: +"1406",
      name: "La Molina"
    },
    {
      id: +"140615",
      provinciaId: +"1406",
      name: "La Victoria"
    },
    {
      id: +"140616",
      provinciaId: +"1406",
      name: "Lima"
    },
    {
      id: +"140617",
      provinciaId: +"1406",
      name: "Lince"
    },
    {
      id: +"140618",
      provinciaId: +"1406",
      name: "Los Olivos"
    },
    {
      id: +"140619",
      provinciaId: +"1406",
      name: "Lurigancho"
    },
    {
      id: +"140620",
      provinciaId: +"1406",
      name: "Lurin"
    },
    {
      id: +"140621",
      provinciaId: +"1406",
      name: "Magdalena"
    },
    {
      id: +"140622",
      provinciaId: +"1406",
      name: "Magdalena Del Mar"
    },
    {
      id: +"140623",
      provinciaId: +"1406",
      name: "Miraflores"
    },
    {
      id: +"140624",
      provinciaId: +"1406",
      name: "Pueblo Libre"
    },
    {
      id: +"140625",
      provinciaId: +"1406",
      name: "Puente Piedra"
    },
    {
      id: +"140626",
      provinciaId: +"1406",
      name: "Rimac"
    },
    {
      id: +"140627",
      provinciaId: +"1406",
      name: "San Borja"
    },
    {
      id: +"140628",
      provinciaId: +"1406",
      name: "San Isidro"
    },
    {
      id: +"140629",
      provinciaId: +"1406",
      name: "San Juan De Lurigancho"
    },
    {
      id: +"140630",
      provinciaId: +"1406",
      name: "San Juan De Miraflores"
    },
    {
      id: +"140631",
      provinciaId: +"1406",
      name: "San Luis"
    },
    {
      id: +"140632",
      provinciaId: +"1406",
      name: "San Martin De Porres"
    },
    {
      id: +"140633",
      provinciaId: +"1406",
      name: "San Miguel"
    },
    {
      id: +"140634",
      provinciaId: +"1406",
      name: "Santa Anita"
    },
    {
      id: +"140635",
      provinciaId: +"1406",
      name: "Santiago De Surco"
    },
    {
      id: +"140636",
      provinciaId: +"1406",
      name: "Surco"
    },
    {
      id: +"140637",
      provinciaId: +"1406",
      name: "Surquillo"
    },
    {
      id: +"140638",
      provinciaId: +"1407",
      name: "Villa El Salvador"
    },
    {
      id: +"140639",
      provinciaId: +"1408",
      name: "Villa Maria Del Triunfo"
    },
    {
      id: +"140640",
      provinciaId: +"1501",
      name: "Villa MarÃ­a Del Triunfo"
    },
    {
      id: +"150101",
      provinciaId: +"1501",
      name: "Yurimaguas"
    },
    {
      id: +"150201",
      provinciaId: +"1501",
      name: "Belen"
    },
    {
      id: +"160101",
      provinciaId: +"1601",
      name: "Tambopata"
    },
    {
      id: +"170101",
      provinciaId: +"1701",
      name:"Ilo"
    },
    {
      id: +"170102",
      provinciaId: +"1701",
      name:"Pacocha"
    },
    {
      id: +"170201",
      provinciaId: +"1702",
      name:"Moquegua"
    },
    {
      id: +"170202",
      provinciaId: +"1702",
      name:"Torata"
    },
    {
      id: +"180101",
      provinciaId: +"1801",
      name:"Oxapampa"
    },
    {
      id: +"180102",
      provinciaId: +"1801",
      name:"Chaupimarca"
    },
    {
      id: +"180103",
      provinciaId: +"1801",
      name:"Yanacancha"
    },
    {
      id: +"190101",
      provinciaId: +"1901",
      name:"Paita"
    },
    {
      id: +"190201",
      provinciaId: +"1902",
      name:"Castilla"
    },
    {
      id: +"190202",
      provinciaId: +"1902",
      name:"Catacaos"
    },
    {
      id: +"190203",
      provinciaId: +"1902",
      name:"Chulucanas"
    },
    {
      id: +"190204",
      provinciaId: +"1902",
      name:"Piura"
    },
    {
      id: +"190205",
      provinciaId: +"1902",
      name:"Tambogrande"
    },
    {
      id: +"190301",
      provinciaId: +"1903",
      name:"Sullana"
    },
    {
      id: +"190401",
      provinciaId: +"1904",
      name:"PariÃ±as"
    },
    {
      id: +"190501",
      provinciaId: +"1905",
      name:"Sechura"
    },
    {
      id: +"190601",
      provinciaId: +"1906",
      name:"Jesus"
    },
    {
      id: +"200101",
      provinciaId: +"2001",
      name:"Cercado"
    },
    {
      id: +"200201",
      provinciaId: +"2002",
      name:"Puno"
    },
    {
      id: +"200301",
      provinciaId: +"2003",
      name:"Juliaca"
    },
    {
      id: +"210101",
      provinciaId: +"2101",
      name:"Juanjui"
    },
    {
      id: +"210201",
      provinciaId: +"2102",
      name:"Moyobamba"
    },
    {
      id: +"210301",
      provinciaId: +"2103",
      name:"Nueva Cajamarca"
    },
    {
      id: +"210302",
      provinciaId: +"2103",
      name:"Rioja"
    },
    {
      id: +"210401",
      provinciaId: +"2104",
      name:"Tarapoto"
    },
    {
      id: +"220101",
      provinciaId: +"2201",
      name:"Ilabaya"
    },
    {
      id: +"220201",
      provinciaId: +"2202",
      name:"Cono Sur"
    },
    {
      id: +"220202",
      provinciaId: +"2202",
      name:"Tacna"
    },
    {
      id: +"220301",
      provinciaId: +"2203",
      name:"Tumbes"
    },
    {
      id: +"230201",
      provinciaId: +"2302",
      name:"Aguas Verdes"
    },
    {
      id: +"240101",
      provinciaId: +"2401",
      name:"Calleria"
    },
    {
      id: +"240102",
      provinciaId: +"2401",
      name:"Yarinacocha"
    }
  ];

  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
  getProvincias(): Provincia[] {
    return this.provincias;
  }
  getDistritos(): Distrito[] {
    return this.distritos;
  }
}
