import { Cliente } from "src/cliente/cliente.model";

export interface IClientePort {
    lerClientes(): Cliente[];
    guardarClientes(clientes: Cliente[]): void;
}