import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/cliente/cliente.model';
import * as path from 'path';
import * as fs from 'fs'
import { ContaBancaria } from 'src/contas/contaBancaria.model';
import { TipoConta } from 'src/enums/tipoConta';
import { ContaBancariaFactory } from 'src/contas/contaBancaria.factory';

@Injectable()
export class GerenteService {
    clientes: Cliente[] = []

    private readonly arquivoClientes = path.resolve('src/cliente/clientes.json');
    private readonly arquivoContas = path.resolve('src/contas/contas.json');
    
    constructor(
        private readonly contaBancariaFactory: ContaBancariaFactory
    ){}

    private lerContas(): ContaBancaria[]{
        const dados = fs.readFileSync(this.arquivoContas, 'utf-8')
        return JSON.parse(dados) as ContaBancaria[]
    }

    private guardarContas(conta: ContaBancaria[]):void{
        fs.writeFileSync(this.arquivoContas, JSON.stringify(conta, null, 2), 'utf-8')
    }

    private lerClientes(): Cliente[]{
        const dados = fs.readFileSync(this.arquivoClientes, 'utf-8')
        return JSON.parse(dados) as Cliente[]
    }

    private guardarClientes(cliente:Cliente[]):void{
        fs.writeFileSync(this.arquivoClientes, JSON.stringify(cliente, null, 2), 'utf-8')
    }

    criarContaBancaria(tipo: TipoConta, idCliente: number, idGerente: number): Cliente{
        const novaConta = this.contaBancariaFactory.construirConta(tipo, idGerente, idCliente)
        return this.atualizarContaCliente(idCliente, novaConta)

    }

    atualizarContaCliente(id:number, conta: ContaBancaria): Cliente{
        const clientes = this.lerClientes()
        
        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(id))
        
        if(clientes[indiceCliente]?.contas?.length){
            clientes[indiceCliente].contas.push(conta)
        }else{
            clientes[indiceCliente].contas = [conta]
        }

        this.guardarClientes(clientes)
        return clientes[indiceCliente]
    }

    excluirContaBancaria(idCliente: number, tipoConta: TipoConta): Cliente {
        const clientes = this.lerClientes();
        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(idCliente));
    
        const cliente = clientes[indiceCliente];
        if (cliente.contas) {
            cliente.contas = cliente.contas.filter(conta => conta.tipo !== tipoConta);
        }
    
        this.guardarClientes(clientes);

        let contas = this.lerContas();
        contas = contas.filter(conta => !(conta.tipo === tipoConta && conta.proprietario.id === idCliente));
        this.guardarContas(contas);
    
        return cliente;
    }

    alterarTipoConta(idCliente: number, tipoContaAtual: TipoConta, novoTipoConta: TipoConta): Cliente {
        const clientes = this.lerClientes();

        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(idCliente));

        const cliente = clientes[indiceCliente];
        const conta = cliente.contas?.find(conta => conta.tipo === tipoContaAtual);
        console.log(conta)

        conta.tipo = novoTipoConta;
        this.guardarClientes(clientes);
        return cliente;
    }
    

    criarCliente(nome: string): Cliente{
        const clientes = this.lerClientes()
        const novoCliente = {
            nome,
            id: clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1
        }
        clientes.push(novoCliente)
        this.guardarClientes(clientes)
        return novoCliente
    }

    buscarClientePeloId(id: number): Cliente{
        const clientes = this.lerClientes()
        const cliente = clientes.find(cliente => cliente.id === Number(id))

        if(!cliente){
            console.log(`O cliente com id ${id} não foi encontrado`)
        }

        return cliente
    }

    excluirCliente(idCliente: number): void {
        const clientes = this.lerClientes();
        const contas = this.lerContas();
    
        const clientesAtualizados = clientes.filter(cliente => cliente.id !== idCliente);
    
        const contasAtualizadas = contas.filter(conta => conta.proprietario?.id !== idCliente);
    
        this.guardarClientes(clientesAtualizados);
        this.guardarContas(contasAtualizadas);
      }


}
