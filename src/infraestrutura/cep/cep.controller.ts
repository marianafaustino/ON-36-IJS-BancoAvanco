import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';

@Controller('cep')
export class CepController {
    constructor(
        private readonly cepService: CepService
    ){}

    @Get(':cep')
    async findAll(@Param('cep') cep: string): Promise<any>{
        return this.cepService.findAll(cep)
    }
    
}
