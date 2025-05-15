export interface ContenidoUsuarioType {
    id: number;
    propietario_id: number;
    tipo: string;
    ultima_edicion: Date;
    contenido: string;
}

export const contenidoUsuarioFields = [
    'propietario_id',
    'tipo',
    'ultima_edicion',
    'contenido',
];
