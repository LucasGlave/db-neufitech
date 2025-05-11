import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoUsuarioController } from './contenido-usuario.controller';

describe('ContenidoUsuarioController', () => {
  let controller: ContenidoUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContenidoUsuarioController],
    }).compile();

    controller = module.get<ContenidoUsuarioController>(ContenidoUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
