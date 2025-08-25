import { Test, TestingModule } from '@nestjs/testing';
import { DatosContactoController } from './datos-contacto.controller';
import { DatosContactoService } from './datos-contacto.service';

describe('DatosContactoController', () => {
    let controller: DatosContactoController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DatosContactoController],
            providers: [
                {
                    provide: DatosContactoService,
                    useValue: {
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        findByPaciente: jest.fn(),
                        searchByRelacion: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<DatosContactoController>(
            DatosContactoController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
