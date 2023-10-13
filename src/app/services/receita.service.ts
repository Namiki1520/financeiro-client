import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environment'
import { Receita } from '../models/Receita';


@Injectable({
    providedIn: 'root'
})

export class ReceitaService {

    constructor( private httpClient:HttpClient){

    }

    private readonly baseURL = environment["endPoint"];

    AdicionarReceita(receita:Receita){
        return this.httpClient.post<Receita>(`${this.baseURL}/AdicionarReceita`, receita)
    }

    ListarReceitasUsuario(emailUsuario: string) {
        return this.httpClient.get(`${this.baseURL}/ListarReceitasUsuario?emailUsuario=${emailUsuario}`);
    }

    AtualizarReceita(receita:Receita){
        return this.httpClient.put<Receita>(`${this.baseURL}/AtualizarReceita`, receita)
    }

    ObterReceita(id: number) {
        return this.httpClient.get(`${this.baseURL}/ObterReceita?id=${id}`);
    }
}