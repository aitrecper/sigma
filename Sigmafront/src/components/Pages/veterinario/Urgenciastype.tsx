export interface UrgenciasVeterinarias {
    id: number;
    descripcion: string;
    fechaVencimiento: string;
    prioridad: "baja" | "media" | "alta";
    estado: "pendiente" | "en_proceso" | "completada";
    urgente: boolean;
  idGestion: number;
  nombre: string;
  chip: number;
  jaula: number;
  diagnostico: string;
  historico: string;
  ficheros: boolean;
}
  export default UrgenciasVeterinarias;