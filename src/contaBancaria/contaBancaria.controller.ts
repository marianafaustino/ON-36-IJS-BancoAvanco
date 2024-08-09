import { Controller, Put, Body } from '@nestjs/common';
import { ContasService } from './contaBancaria.service';
import { TipoConta } from 'src/enums/tipoConta';
import { Cliente } from 'src/cliente/cliente.model';

@Controller('conta')
export class ContaBancariaController {
    constructor(
        private readonly ContasService: ContasService
    ){}

    @Put('nova-conta')
        criarContaBancaria(@Body('tipo') tipo: TipoConta, @Body('idCliente') idCliente: number, @Body('idGerente') idGerente: number): Cliente{
            return this.ContasService.criarContaBancaria(tipo, idCliente, idGerente)
        }  
    
    @Put()
        excluirContaBancaria(@Body('tipo') TipoConta: TipoConta, @Body('idCliente') idCliente: number): Cliente{
            return this.ContasService.excluirContaBancaria(idCliente, TipoConta)
        }
    
    @Put('alterar-tipo-conta')
        alterarTipoConta(@Body('tipoContaAtual') tipoContaAtual: TipoConta, @Body('novoTipoConta') novoTipoConta: TipoConta, @Body('idCliente') idCliente: number): Cliente{
            return this.ContasService.alterarTipoConta(idCliente, tipoContaAtual, novoTipoConta)
        }
}
