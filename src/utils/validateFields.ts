import { BadRequestException } from '@nestjs/common';

export function validateRequiredFields(data: any, requiredFields: string[]) {
    const missing = requiredFields.filter((field) => data[field] == null || (typeof data[field] === 'string' && data[field].trim() === ''));

    if (missing.length) {
        throw new BadRequestException(`Faltan campos obligatorios: ${missing.join(', ')}`);
    }
}
