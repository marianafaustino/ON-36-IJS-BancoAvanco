import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';


describe('Service de cliente', ()=>{
  test('Deve criar um cliente', ()=>{
    const clienteService = new ClienteService()

    const retornado = clienteService.criarCliente('Mariana Faustino')

    expect(retornado).toStrictEqual(new Cliente('Mariana Faustino', 9))
  })
})
