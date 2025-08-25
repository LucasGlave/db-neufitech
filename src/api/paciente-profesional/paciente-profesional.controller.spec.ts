import { Test, TestingModule } from '@nestjs/testing';
import { PacienteProfesionalController } from './paciente-profesional.controller';
import { PacienteProfesionalService } from './paciente-profesional.service';

describe('PacienteProfesionalController', () => {
    let controller: PacienteProfesionalController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PacienteProfesionalController],
            providers: [
                {
                    provide: PacienteProfesionalService,
                    useValue: {
                        findAll: jest.fn(),
                        findByPaciente: jest.fn(),
                        findByProfesional: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<PacienteProfesionalController>(
            PacienteProfesionalController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
