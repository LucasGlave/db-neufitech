export interface DispositivoDeInteraccionType {
    id: number;
    tipo_de_dispositivo_id: number;
    numero_serie: string;
    propietario_id: number;
}

export const dispositivoDeInteraccionFields = [
    'tipo_de_dispositivo_id',
    'numero_serie',
    'propietario_id',
];
