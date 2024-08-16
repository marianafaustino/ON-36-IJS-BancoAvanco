import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GerenteModule } from './gerente/gerente.module';
import { ContasService } from './contaBancaria/contaBancaria.service';
import { ClienteService } from './cliente/cliente.service';
import { ClienteController } from './cliente/cliente.controller';
import { ContaBancariaController } from './contaBancaria/contaBancaria.controller';
import { CepService } from './cep/cep.service';
import { CepController } from './cep/cep.controller';
import { CepModule } from './cep/cep.module';
import { ContaBancariaModule } from './contaBancaria/contaBancaria.module';
import { ContaBancariaFactory } from './contaBancaria/contaBancaria.factory';
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
