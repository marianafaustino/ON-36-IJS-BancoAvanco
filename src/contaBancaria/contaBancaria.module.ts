import { Module } from "@nestjs/common";
import { ContasService } from "./contaBancaria.service";
import { ContaBancariaController } from "./contaBancaria.controller";
import { ContaBancariaFactory } from "./contaBancaria.factory";
import { ClienteService } from "../cliente/cliente.service";

@Module({
    providers: [ContasService, ContaBancariaFactory, ClienteService],
    controllers: [ContaBancariaController],
    exports: [ContasService]
})export class ContaBancariaModule{}