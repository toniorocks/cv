import { Servicio } from './servicio';

export class Paquete{
    id:number;
    nombre:string;
    descripcion:string;
    soporte:string;
    monto_por_hora:number;
    servicio:Servicio[];
}