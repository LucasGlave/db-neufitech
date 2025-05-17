export interface ContenidoUsuarioType {
    id: number;
    propietario_id: number;
    tipo: string;
    contenido: string;
}

export const contenidoUsuarioFields = ['propietario_id', 'tipo', 'contenido'];

export const enumFieldsTipos = ['rutas', 'rutinas', 'notas'];
