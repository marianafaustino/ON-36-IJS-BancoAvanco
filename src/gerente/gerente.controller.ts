import { Controller, Post, Body, Get, Param, Patch, Put } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { Cliente } from 'src/cliente/cliente.model';
import { TipoConta } from 'src/enums/tipoConta';
import { ContaBancaria } from 'src/contas/contaBancaria.model';

@Controller('gerente')
export class GerenteController {
    constructor(private readonly gerenteService: GerenteService){}

    @Post('novo-cliente')
    criarCliente(@Body('nome') nome: string):Cliente{
        return this.gerenteService.criarCliente(nome)
    }

    @Get(':id')
    buscarClientePeloId(@Param('id') id: number): Cliente{
        return this.gerenteService.buscarClientePeloId(id)
    }

    @Put('nova-conta')
        criarContaBancaria(@Body('tipo') tipo: TipoConta, @Body('idCliente') idCliente: number): Cliente{
            return this.gerenteService.criarContaBancaria(tipo, idCliente)
        }  
    
    
}
