export interface DatosContactoType {
    id: number;
    nombre_completo: string;
    pais: string;
    provincia: string;
    ciudad: string;
    direccion: string;
    relacion: string;
    celular: number;
    email: string;
    paciente_id: number;
}

export const datosContactoFields = [
    'nombre_completo',
    'pais',
    'provincia',
    'ciudad',
    'direccion',
    'relacion',
    'celular',
    'email',
    'paciente_id',
];
