import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { PacienteProfesionalService } from './paciente-profesional.service';
import { PacienteProfesional } from '../../common/entities/pacienteProfesional.entity';
import { Paciente } from '../../common/entities/paciente.entity';
import { Profesional } from '../../common/entities/profesional.entity';

describe('PacienteProfesionalService', () => {
    let service: PacienteProfesionalService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PacienteProfesionalService,
                {
                    provide: getModelToken(PacienteProfesional),
                    useValue: {
                        findAndCountAll: jest.fn(),
                    },
                },
                {
                    provide: getModelToken(Paciente),
                    useValue: {},
                },
                {
                    provide: getModelToken(Profesional),
                    useValue: {},
                },
            ],
        }).compile();

        service = module.get<PacienteProfesionalService>(
            PacienteProfesionalService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
