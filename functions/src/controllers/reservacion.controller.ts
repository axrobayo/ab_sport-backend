import { Request, Response } from "express";
import { db } from "../index";
import { Reservacion } from "../models/reservacion";
import { Respuesta } from "../models/respuesta";

export async function createReservacion(req: Request, res: Response) {           
    try{                    
        const newReservacion = Reservacion(req.body);
        newReservacion.horario =  new Date().toISOString();
        const ReservacionAdded = await db.collection("Reservacion").add(newReservacion);                            
        return res.status(201).json(Respuesta('Reservacion agregada', `La Reservacion fue agregada correctamente con el id ${ReservacionAdded.id}`, newReservacion));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function consultarReservacion(req: Request, res: Response) {           
    try{
        const doc = await db.collection("Reservacion").doc(req.params.id).get();
        if(!doc) {
            return res.status(404).json(Respuesta('Reservacion no encontrada', `Reservacion con el id ${req.params.id} no encontrado`, {req}));               
        }        
        return res.status(200).json(Reservacion(doc.data(), doc.id));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function listReservacion(req: Request, res: Response) {       
    try {        
        let snapshot = await db.collection("Reservacion").get();
        return res.status(200).json(snapshot.docs.map(doc => Reservacion(doc.data(), doc.id)));                
    } catch (err) {
        return handleError(res, err);
    }       
};


function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}