import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GerenteModule } from './aplicacao/modulos/gerente.module';
import { ContasService } from './aplicacao/servicos/contaBancaria.service';
import { ClienteService } from './aplicacao/servicos/cliente.service';
import { ClienteController } from '../src/aplicacao/controladores/cliente.controller';
import { ContaBancariaController } from './aplicacao/controladores/contaBancaria.controller';
import { CepService } from './infraestrutura/cep/cep.service';
import { CepController } from './infraestrutura/cep/cep.controller';
import { CepModule } from './infraestrutura/cep/cep.module';
import { ContaBancariaModule } from '../src/aplicacao/modulos/contaBancaria.module';
import { ContaBancariaFactory } from './dominio/fabrica/contaBancaria.factory';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [GerenteModule, CepModule, ContaBancariaModule,  HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
})],
  controllers: [AppController, ClienteController, ContaBancariaController, CepController],
  providers: [AppService, ContasService, ClienteService, CepService, ContaBancariaFactory],
})
export class AppModule {}
