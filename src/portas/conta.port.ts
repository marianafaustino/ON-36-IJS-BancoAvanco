import { ContaBancaria } from "src/contaBancaria/contaBancaria.model";

export interface IContaPort {
    lerContas(): ContaBancaria[];
    guardarContas(contas: ContaBancaria[]): void;
}