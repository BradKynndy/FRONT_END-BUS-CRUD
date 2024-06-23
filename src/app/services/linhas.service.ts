import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ILinha } from '../Model/ILinha.model';
import { Toast, ToastrService } from 'ngx-toastr'; //TODO: foi instalado a versão 14 do toastr  npm install ngx-toastr@14 --save 
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinhaService {

private URL : string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService,) {}

  buscarTodos() : Observable<ILinha[]>
  {

  return this.http.get<ILinha[]>(this.URL).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibirErro(erro))

  );
  }

  buscarID(id : number) : Observable<ILinha>
  {

  return this.http.get<ILinha[]>(`${this.URL}/${id}`).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibirErro(erro))

  );

  }

  exibirErro(e: any): Observable<any>
  {

      this.exibirMensagem('Erro!!', 'Não foi possivel realizar a operação', 'toast-erro');

      return EMPTY;
  }



  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{

    this.toastr.show(mensagem, titulo, {closeButton:true, progressBar: true}, tipo);


  }

  cadastrar(produto: ILinha): Observable<ILinha>
  {
    return this.http.post<ILinha[]>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );


  }

  atualizar(produto: ILinha): Observable<ILinha>
  {
    return this.http.put<ILinha[]>(`${this.URL}/${produto.id}`,produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );


  }

  excluir (produto: ILinha): Observable<ILinha>
  {
    return this.http.delete<any>(`${this.URL}/${produto.id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }


}