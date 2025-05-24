export interface SolicitudDeCambioType {
    id: number;
    profesional_id: number;
    paciente_id: number;
    tipo: string;
    metodo: string;
    contenido: string;
    estado: string;
}

export const SolicitudDeCambioFields = [
    'profesional_id',
    'paciente_id',
    'tipo',
    'metodo',
    'contenido',
];

export const SolicitudDeCambioTipoEnum = [
    'ruta',
    'rutina',
    'nota',
    'categorias',
];

export const SolicitudDeCambioEstadoEnum = [
    'aceptado',
    'pendiente',
    'rechazado',
];

export const SolicitudDeCambioMetodoEnum = [
    'agregar',
    'actualizar',
    'eliminar',
];
