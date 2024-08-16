import { Cliente } from "../../dominio/cliente/cliente.model";

export interface IClientePort {
    lerClientes(): Cliente[];
    guardarClientes(clientes: Cliente[]): void;
    buscarClientePeloId(id: number): Cliente | undefined;
}