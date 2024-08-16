import { Controller, Get } from '@nestjs/common';
import { CepService } from './cep.service';

@Controller('cep')
export class CepController {
    constructor(
        private readonly cepService: CepService
    ){}

    @Get()
    async findAll(): Promise<any>{
        return this.cepService.findAll()
    }
    
}
