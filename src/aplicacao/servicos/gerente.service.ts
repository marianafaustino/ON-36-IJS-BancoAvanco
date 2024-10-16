import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/dominio/cliente.model';

@Injectable()
export class GerenteService {
    clientes: Cliente[] = []


}
