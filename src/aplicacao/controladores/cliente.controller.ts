import { Controller, Post, Get, Body, Param,Delete } from '@nestjs/common';
import { ClienteService } from '../../aplicacao/servicos/cliente.service';
import { Cliente } from '../../dominio/cliente/cliente.model';

@Controller('cliente')
export class ClienteController {
    constructor(
        private readonly ClienteService: ClienteService
    ){}

    @Post('novo-cliente')
    criarCliente(@Body('nome') nome: string):Cliente{
        return this.ClienteService.criarCliente(nome)
    }

    @Get(':id')
    buscarClientePeloId(@Param('id') id: number): Cliente{
        return this.ClienteService.buscarClientePeloId(id)
    }

    @Delete()
        excluirCliente(@Body('idCliente') idCliente: number):void{
            return this.ClienteService.excluirCliente(idCliente)
        }
}
