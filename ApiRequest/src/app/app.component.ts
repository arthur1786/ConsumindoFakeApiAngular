import { Component } from '@angular/core';
import { CarroService } from './carro.service';
import { Icarros } from './ICarros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiRequest';

  constructor(private carroService: CarroService){

  }

  obterTodosCarros(){
    this.carroService.obterTodos()
      .then(carros => console.log(carros))
      .catch(error => console.log(error));
  }

  obterSomenteUm(){
    this.carroService.obterPorId(1)
      .then(carros => console.log(carros))
      .catch(error => console.log(error));
  }

  adicionarCarro(){
    const carro: Icarros = {
      nome: "Civic",
      marca: "Honda",
    };
    this.carroService.adicionar(carro)
      .then(carro => console.log("Adicionado"))
      .catch(error => console.log(error))
  }

  atualizar(){
    const carro: Icarros ={
      id:4,
      nome: "Corolla",
      marca: "Toyota"
    };
    this.carroService.atualizar(carro)
    .then(carro => console.log("Atualizado" , carro))
    .catch(error => console.error(error));
  }

  remover(){
    this.carroService.deletar(3)
      .then(res => console.log("Removido", res))
      .catch(error => console.error(error));
  }
}
