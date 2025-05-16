export interface OrigenType {
    id: number;
    tipo: string;
    foreign_key: number;
}

export const origenFields = ['tipo', 'foreign_key'];

export const origenTipo = ['profesional', 'organizacion'];
