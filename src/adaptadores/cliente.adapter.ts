import { IClientePort } from '../portas/cliente.port';
import { Cliente } from '../cliente/cliente.model';
import * as fs from 'fs';
import * as path from 'path';

export class ClienteAdapter implements IClientePort {
    private readonly arquivoClientes = path.resolve('src/cliente/clientes.json');

    lerClientes(): Cliente[] {
        const dados = fs.readFileSync(this.arquivoClientes, 'utf-8');
        return JSON.parse(dados) as Cliente[];
    }

    guardarClientes(clientes: Cliente[]): void {
        fs.writeFileSync(this.arquivoClientes, JSON.stringify(clientes, null, 2), 'utf-8');
    }
}