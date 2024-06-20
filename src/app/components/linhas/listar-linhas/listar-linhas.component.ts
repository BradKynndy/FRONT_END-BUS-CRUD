import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-linhas',
  templateUrl: './listar-linhas.component.html',
  styleUrls: ['./listar-linhas.component.css']
})
export class ListarLinhasComponent {

  listalinha: any[] = 
  [
    {Id: 1, nomelinha: "AV. Eduardo", pontoPartida: "AV. Eduardo", pontoFinal: "AV. GUILHERME COTCHING", situacao: true},
    {Id: 2, nomelinha: "AV. Eduardo", pontoPartida: "AV. Eduardo", pontoFinal: "AV. GUILHERME COTCHING", situacao: true}


  ]

}
