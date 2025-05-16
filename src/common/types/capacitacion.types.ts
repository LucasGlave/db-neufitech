export interface CapacitacionType {
    id: number;
    capacitador: string;
    fecha: Date;
    virtual: boolean;
    nota: string;
    capacitado_id: number;
    tipo: string;
}

export const capacitacionFields = [
    'capacitador',
    'fecha',
    'virtual',
    'nota',
    'capacitado_id',
    'tipo',
];
