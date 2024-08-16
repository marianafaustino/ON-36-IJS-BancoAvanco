import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class CepService {
    constructor(private readonly httpService: HttpService){}

    async findAll(): Promise<AxiosResponse<any>> {
        return this.httpService.axiosRef
        .get('http://viacep.com.br/ws/01001000/json/')
        .then((res)=> res.data)
    }
}
