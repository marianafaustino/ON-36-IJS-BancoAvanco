import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GerenteModule } from './gerente/gerente.module';
import { ContasService } from './contaBancaria/contaBancaria.service';
import { ClienteService } from './cliente/cliente.service';
import { ClienteController } from './cliente/cliente.controller';
import { ContaBancariaController } from './contaBancaria/contaBancaria.controller';

@Module({
  imports: [GerenteModule],
  controllers: [AppController, ClienteController, ContaBancariaController],
  providers: [AppService, ContasService, ClienteService],
})
export class AppModule {}
