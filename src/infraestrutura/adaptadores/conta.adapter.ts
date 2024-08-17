import { IContaPort } from '../portas/conta.port';
import { ContaBancaria } from '../contaBancaria/contaBancaria.model';
import * as fs from 'fs';
import * as path from 'path';

export class ContaAdapter implements IContaPort {
    private readonly arquivoContas = path.resolve('src/contas/contas.json');

    lerContas(): ContaBancaria[] {
        const dados = fs.readFileSync(this.arquivoContas, 'utf-8');
        return JSON.parse(dados) as ContaBancaria[];
    }

    guardarContas(contas: ContaBancaria[]): void {
        fs.writeFileSync(this.arquivoContas, JSON.stringify(contas, null, 2), 'utf-8');
    }
}