import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILinha } from 'src/app/Model/ILinha.model';
import { LinhaService } from 'src/app/services/linhas.service';


@Component({
  selector: 'app-atualizar-linhas',
  templateUrl: './atualizar-linhas.component.html',
  styleUrls: ['./atualizar-linhas.component.css']
})
export class AtualizarLinhasComponent {

  constructor(private linhaService: LinhaService, private router: Router, private activateRouter: ActivatedRoute) {}

    linha: ILinha = {
      numLinha: '',
      nomelinha: '',
      pontoPartida: '',
      pontoFinal: '',
      situacao: true
    };


      ngOnInit(): void{

        const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
        this.linhaService.buscarID(id).subscribe(retorno => { this.linha = retorno; });


      }



      salvarlinha(): void
       {
          this.linhaService.atualizar(this.linha).subscribe(retorno => {
            this.linha = retorno;
            this.linhaService.exibirMensagem(
              'Sistema',
              `${this.linha.numLinha} foi atualizado com sucesso. ID: ${this.linha.id}`,
              'toast-success'
            );
            this.router.navigate(['/linhas'])




          })


       }

}
