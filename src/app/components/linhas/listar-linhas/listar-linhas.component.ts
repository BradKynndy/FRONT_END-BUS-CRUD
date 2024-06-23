import { Component } from '@angular/core';
import { ILinha } from 'src/app/Model/ILinha.model';
import { LinhaService } from 'src/app/services/linhas.service';

@Component({
  selector: 'app-listar-linhas',
  templateUrl: './listar-linhas.component.html',
  styleUrls: ['./listar-linhas.component.css']
})
export class ListarLinhasComponent {

  listalinhas:  ILinha[] = [];


  constructor(private linhasService: LinhaService) {


  }

  ngOnInit(): void {

    this.carregarlinhas();

  }

  carregarlinhas(): void {

    this.linhasService.buscarTodos().subscribe(retorno =>{


      this.listalinhas = retorno;
  }
  )

  }

  deletar(linha: ILinha ): void{
    this.linhasService.excluir(linha).subscribe(()=> { //TODO: REMOVI .ID DE LINHA
      this.linhasService.exibirMensagem(
        'SISTEMA',
        '${produto.nome} foi excluido com sucesso!',
        'toast-error');

      });


      }

}
