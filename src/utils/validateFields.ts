import { BadRequestException } from '@nestjs/common';

// Controller

export function validateRequiredFields(data: any, requiredFields: string[]) {
    const missing = requiredFields.filter(
        (field) =>
            data[field] == null ||
            (typeof data[field] === 'string' && data[field].trim() === ''),
    );

    if (missing.length) {
        throw new BadRequestException(
            `Faltan campos obligatorios: ${missing.join(', ')}`,
        );
    }
}

export function validateOptionalFields(data: any, optionalFields: string[]) {
    const hasAtLeastOne = optionalFields.some(
        (field) =>
            data[field] != null &&
            (typeof data[field] !== 'string' || data[field].trim() !== ''),
    );

    if (!hasAtLeastOne) {
        throw new BadRequestException(
            `Debe haber al menos un campo válido: ${optionalFields.join(', ')}`,
        );
    }
}

// Service

export function validateEnum(data: string, allowed: any[]) {
    if (!allowed.includes(data)) {
        throw new BadRequestException(
            `Invalid value: ${data}. Allowed values are: ${allowed.join(', ')}`,
        );
    }
}
