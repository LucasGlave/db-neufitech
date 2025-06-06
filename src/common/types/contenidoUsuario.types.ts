export interface ContenidoUsuarioType {
    id: number;
    propietario_id: number;
    tipo: string;
    contenido: string;
}

export const contenidoUsuarioFields = ['propietario_id', 'tipo', 'contenido'];

export const createDefaultsFields = ['categorias'];

export const enumFieldsTipos = ['rutas', 'rutinas', 'notas', 'categorias'];
