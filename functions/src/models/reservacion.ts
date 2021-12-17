/* Modelo representa el concepto de Reservacion */
/*============ Reservacion ============*/
export interface Reservacion {
    idReservacion? :string,
    titulo: string,
    descripcion: string,
    fechaCreacion: string,
    fechaAsignacion: string,
    fechaRealizacion: string,
    observacion: string,
    prioridad: number,
    tipo: number,
    estado: number
}

export function Reservacion(data :any, id?:string){
    const { titulo, descripcion, fechaCreacion, fechaAsignacion, fechaRealizacion, observacion, estado, prioridad, tipo } = data;

    let object :Reservacion = { 
        idReservacion: id,                
        titulo: titulo,
        descripcion: descripcion,
        fechaCreacion : fechaCreacion,
        fechaAsignacion: fechaAsignacion,
        fechaRealizacion: fechaRealizacion,
        observacion: observacion,
        estado: estado,
        prioridad: prioridad,
        tipo: tipo
    };
    return object;
}