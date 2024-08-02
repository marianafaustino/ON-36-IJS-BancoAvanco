import { Module } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { GerenteController } from './gerente.controller';
import { ContaBancariaFactory } from 'src/contaBancaria/contaBancaria.factory';

@Module({
  providers: [GerenteService, ContaBancariaFactory],
  controllers: [GerenteController]
})
export class GerenteModule {}
