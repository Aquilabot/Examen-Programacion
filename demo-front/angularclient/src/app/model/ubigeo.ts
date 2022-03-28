export interface Departamento {
  id: number;
  name: string;
}

export interface Provincia {
  id: number;
  departamentoId: number;
  name: string;
}

export interface Distrito {
  id: number;
  provinciaId: number;
  name: string;
}
