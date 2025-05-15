export interface OrganizacionType {
    id: number;
    nombre: string;
    pais: string;
    provincia: string;
    ciudad: string;
    direccion: string;
}

export const organizacionFields = [
    'nombre',
    'pais',
    'provincia',
    'ciudad',
    'direccion',
];
