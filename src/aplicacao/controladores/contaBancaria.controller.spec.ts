import { Test, TestingModule } from '@nestjs/testing';
import { ContaBancariaController } from '../controladores/contaBancaria.controller';

describe('ContaBancariaController', () => {
  let controller: ContaBancariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContaBancariaController],
    }).compile();

    controller = module.get<ContaBancariaController>(ContaBancariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
