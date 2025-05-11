import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoUsuarioService } from './contenido-usuario.service';

describe('ContenidoUsuarioService', () => {
  let service: ContenidoUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContenidoUsuarioService],
    }).compile();

    service = module.get<ContenidoUsuarioService>(ContenidoUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
