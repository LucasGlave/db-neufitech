import { Test, TestingModule } from '@nestjs/testing';
import { CredencialController } from './credenciales.controller';

describe('CredencialController', () => {
  let controller: CredencialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CredencialController],
    }).compile();

    controller = module.get<CredencialController>(CredencialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
