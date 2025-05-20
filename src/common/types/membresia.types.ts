export interface MembresiaType {
    id: number;
    verificado: boolean;
    id_propietario: number;
    id_sistema: number;
    programaIds: number[];
}

export const membresiaFields = ['propietario_id', 'id_sistema'];
export const membresiaCheckFields = [
    'documento',
    'nombre_sistema',
    'version_sistema',
];
export const membresiaFieldsPatch = ['verificado', 'programaIds'];
