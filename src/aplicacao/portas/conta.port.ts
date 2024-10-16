import { ContaBancaria } from "../../dominio/conta/contaBancaria.model";

export interface IContaPort {
    lerContas(): ContaBancaria[];
    guardarContas(contas: ContaBancaria[]): void;
}