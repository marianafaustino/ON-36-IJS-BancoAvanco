import { Controller, Post, Body, Get, Param, Patch, Put, Delete } from '@nestjs/common';
import { GerenteService } from '../servicos/gerente.service';

@Controller('gerente')
export class GerenteController {
    constructor(private readonly gerenteService: GerenteService){}
}
