export interface MembresiaType {
    id: number;
    verificado: boolean;
    id_paciente: number;
    id_sistema: number;
    programaIds: number[];
}

export const membresiaFields = ['id_paciente', 'id_sistema'];
export const membresiaFieldsPatch = ['verificado', 'programaIds'];
