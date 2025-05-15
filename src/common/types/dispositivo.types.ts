export interface DispositivoType {
    id: number;
    dispositivo: string;
    modelo: string;
    propietario_id: number;
}

export const dispositivoFields = ['dispositivo', 'modelo', 'propietario_id'];
