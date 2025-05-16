export interface ProfesionalType {
    id: number;
    nombre_completo: string;
    pais: string;
    provincia: string;
    ciudad: string;
    especialización: string;
    email: string;
    celular: string;
    organizacion_id: number;
}

export const profesionalFields = [
    'nombre_completo',
    'pais',
    'provincia',
    'ciudad',
    'especialización',
    'email',
    'celular',
];
