import { Module } from '@nestjs/common';
import { CepService } from './cep.service';
import { CepController } from './cep.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        })],
    providers: [CepService],
    controllers: [CepController]
})
export class CepModule {
    
}
