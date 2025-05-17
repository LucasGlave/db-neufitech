export interface CapacitacionType {
    id: number;
    capacitador_id: string;
    fecha: Date;
    virtual: boolean;
    nota: string;
    capacitado_id: number;
    tipo: string;
}

export const capacitacionFields = [
    'fecha',
    'virtual',
    'nota',
    'capacitador_id',
    'capacitado_id',
    'tipo',
];

export const enumFieldsTipos = [
    'paciente',
    'profesional',
    'organizacion',
    'contacto',
];
