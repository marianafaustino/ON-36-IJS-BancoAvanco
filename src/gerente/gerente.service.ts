import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/cliente/cliente.model';

@Injectable()
export class GerenteService {
    clientes: Cliente[] = []


}
