import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from 'src/environments/environment';
import { Icarros } from './ICarros';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<Icarros[]>(`${API_PATH}Carros`).toPromise();
  }

  obterPorId(id:Number){
    return this.httpClient.get<Icarros>(`${API_PATH}Carros/${id}`).toPromise();
  }

  adicionar(carro: Icarros){
    return this.httpClient.post<Icarros>(`${API_PATH}Carros`, carro).toPromise();
  }

  atualizar(carro: Icarros){
    return this.httpClient.put<Icarros>(`${API_PATH}Carros/${carro.id}`, carro).toPromise();
  }

  deletar(carroId : number){
    return this.httpClient.delete<Icarros>(`${API_PATH}Carros/${carroId}`).toPromise();
  }
}
