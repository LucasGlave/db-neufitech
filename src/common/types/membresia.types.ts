export interface MembresiaType {
    id: number;
    verificado: boolean;
    propietario_id: number;
    sistema_id: number;
    programaIds: number[];
}

export const membresiaFields = ['propietario_id', 'sistema_id'];
export const membresiaCheckFields = [
    'documento',
    'nombre_sistema',
    'version_sistema',
];
export const membresiaFieldsPatch = ['verificado', 'programaIds'];
