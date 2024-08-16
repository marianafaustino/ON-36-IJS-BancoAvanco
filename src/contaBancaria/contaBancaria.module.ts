import { Module } from "@nestjs/common";
import { ContasService } from "../aplicacao/servicos/contaBancaria.service";
import { ContaBancariaController } from "../aplicacao/controladores/contaBancaria.controller";
import { ContaBancariaFactory } from "../dominio/fabrica/contaBancaria.factory";
import { ClienteService } from "../aplicacao/servicos/cliente.service";

@Module({
    providers: [ContasService, ContaBancariaFactory, ClienteService],
    controllers: [ContaBancariaController],
    exports: [ContasService]
})export class ContaBancariaModule{}