import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

import { Gerente } from "./classes/gerente";
import { Cliente } from "./classes/cliente";
import { TipoConta } from "./enums/tipoConta";
import { Endereco } from "./classes/endereco";
  

// Testando classes Endereco, Cliente e Gerente e o método de abertura de conta
const gerente = new Gerente()
const enderecoClienteTeste = new Endereco()
const clienteTeste = new Cliente('Mariana', enderecoClienteTeste, '2199999999')

const novaContaTeste = gerente.abrirConta(clienteTeste, TipoConta.ContaCorrente, 100)
console.log(novaContaTeste)

