import {Application} from 'express';
import { registro } from './controllers/autenticacion.controllers';
import { listReservacion, createReservacion, consultarReservacion } from './controllers/reservacion.controller';

export function routes(app: Application){
    app.get('/api/reservacion', listReservacion);    
    app.post('/api/reservacion', createReservacion);
    app.get('/api/reservacion/:id', consultarReservacion);
    app.post('/api/registro', registro);
}