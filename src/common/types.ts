export interface PacienteType {
    id: number;
    nombre_completo: string;
    pais: string;
    provincia: string;
    ciudad: string;
    direccion: string;
    documento: number;
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
    'documento',
    'fecha_nacimiento',
    'diagnostico',
    'origen_id',
    'obra_social_id',
];

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

export interface ProgramaType {
    id: number;
    nombre: string;
    membresia_id: number;
}

export const programaFields = ['nombre', 'membresia_id'];

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

export interface ObraSocialType {
    id: number;
    nombre: string;
}

export const obraSocialFields = ['nombre'];

export interface SistemaType {
    id: number;
    version: string;
    nombre: string;
}

export const sistemaFields = ['version', 'nombre'];

export interface SolicitudDeCambioType {
    id: number;
    profesional_id: number;
    paciente_id: number;
    tipo: string;
    contenido: string;
    estado: string;
}

export const solicitudDeCambioFields = [
    'profesional_id',
    'paciente_id',
    'tipo',
    'contenido',
    'estado',
];

export interface TipoDispositivoType {
    id: number;
    tipo: string;
}

export const tipoDispositivoFields = ['tipo'];

export interface DispositivoType {
    id: number;
    dispositivo: string;
    modelo: string;
    propietario_id: number;
}

export const dispositivoFields = ['dispositivo', 'modelo', 'propietario_id'];

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

export interface ContenidoUsuarioType {
    id: number;
    propietario_id: number;
    tipo: string;
    contenido: string;
}

export const contenidoUsuarioFields = [
    'propietario_id',
    'tipo_propietario',
    'tipo',
    'contenido',
];

export const updateContenidoUsuarioFields = [
    'propietario_id',
    'tipo_propietario',
];

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

export interface MembresiaType {
    id: number;
    verificado: boolean;
    id_paciente: number;
    id_sistema: number;
    programaIds: number[];
}

export const membresiaFields = ['id_paciente', 'id_sistema'];

export interface PropietarioType {
    id: number;
    tipo: string;
    foreign_key: number;
}

export const propietarioFields = ['tipo', 'foreign_key'];

export interface OrigenType {
    id: number;
    tipo: string;
    foreign_key: number;
}

export const origenFields = ['tipo', 'foreign_key'];

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
