import { Module } from '@nestjs/common';
import { GerenteService } from '../servicos/gerente.service';
import { GerenteController } from '../controladores/gerente.controller';
import { ContaBancariaFactory } from '../../dominio/fabrica/contaBancaria.factory';

@Module({
  providers: [GerenteService, ContaBancariaFactory],
  controllers: [GerenteController]
})
export class GerenteModule {}
