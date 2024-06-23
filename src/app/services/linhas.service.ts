import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ILinha } from '../Model/ILinha.model';
import { Toast, ToastrService } from 'ngx-toastr';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinhaService {
  private URL: string = 'http://localhost:3000/linhas';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<ILinha[]> {
    return this.http.get<ILinha[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  buscarID(id: number): Observable<ILinha> {
    return this.http.get<ILinha>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  exibirErro(e: any): Observable<any> {
    this.exibirMensagem('Erro!!', 'Não foi possivel realizar a operação', 'toast-erro');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo);
  }

  private obterMaiorId(): Observable<number> {
    return this.http.get<ILinha[]>(this.URL).pipe(
      map(linhas => linhas.length ? Math.max(...linhas.map(linha => linha.id ?? 0)) : 0)
    );
  }

  cadastrar(linha: ILinha): Observable<ILinha> {
    return this.obterMaiorId().pipe(
      switchMap(maiorId => {
        linha.id = maiorId + 1;
        return this.http.post<ILinha>(this.URL, linha).pipe(
          map(retorno => retorno),
          catchError(erro => this.exibirErro(erro))
        );
      })
    );
  }

  atualizar(linha: ILinha): Observable<ILinha> {
    return this.http.put<ILinha>(`${this.URL}/${linha.id}`, linha).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  excluir(linha: ILinha): Observable<ILinha> {
    return this.http.delete<any>(`${this.URL}/${linha.id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }
}
