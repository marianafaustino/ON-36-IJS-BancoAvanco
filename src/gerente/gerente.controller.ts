import { Controller, Post, Body, Get, Param, Patch, Put, Delete } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { Cliente } from 'src/cliente/cliente.model';
import { TipoConta } from 'src/enums/tipoConta';
import { ContaBancaria } from 'src/contaBancaria/contaBancaria.model';

@Controller('gerente')
export class GerenteController {
    constructor(private readonly gerenteService: GerenteService){}
}
