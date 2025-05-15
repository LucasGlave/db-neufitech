export interface PacienteType {
    id: number;
    nombre_completo: string;
    pais: string;
    provincia: string;
    ciudad: string;
    direccion: string;
    fecha_nacimiento: Date;
    diagnostico: string;
    origen_id: number;
    obra_social_id: number;
}

export const pacienteFields = [
    'nombre_completo',
    'pais',
    'provincia',
    'ciudad',
    'direccion',
    'fecha_nacimiento',
    'diagnostico',
    'origen_id',
    'obra_social_id',
];
