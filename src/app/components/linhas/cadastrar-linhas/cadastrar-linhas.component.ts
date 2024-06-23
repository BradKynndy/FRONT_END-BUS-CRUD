import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ILinha } from 'src/app/Model/ILinha.model';
import { LinhaService } from 'src/app/services/linhas.service';

@Component({
  selector: 'app-cadastrar-linhas',
  templateUrl: './cadastrar-linhas.component.html',
  styleUrls: ['./cadastrar-linhas.component.css']
})

export class CadastrarLinhasComponent implements OnInit
{

  constructor(private linhaService: LinhaService, private router: Router) {}

    linha: ILinha = {
      numLinha: '',
      nomelinha: '',
      pontoPartida: '',
      pontoFinal: '',
      situacao: true
    };


    ngOnInit(): void{}

    salvarLinha(): void
     {
        this.linhaService.cadastrar(this.linha).subscribe(retorno => {
          this.linha = retorno;
          this.linhaService.exibirMensagem(
            'Sistema',
            `${this.linha.numLinha} foi cadastrado com sucesso. ID: ${this.linha.id}`,
            'toast-success'
          );
          this.router.navigate(['/linhas'])




        });


     }

    }



/*
export class CadastrarLinhasComponent {

    listaProdutos:  ILinha[] = [];


    constructor(private linhaService: LinhaService) {


    }

    ngOnInit(): void {

      this.carregarProdutos();

    }

    carregarProdutos(): void {

      this.linhaService.buscarTodos().subscribe(retorno =>{


        this.listaProdutos = retorno;
    }
    )

    }

    deletar(linha: ILinha ): void{
      this.linhaService.excluir(linha.id!).subscribe(()=> {
        this.linhaService.exibirMensagem(
          'SISTEMA',
          '${linha.numLinha} foi excluido com sucesso!',
          'toast-error');

        });


        }

}*/
