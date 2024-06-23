import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './template/home/home.component';

import { ListarLinhasComponent } from './components/linhas/listar-linhas/listar-linhas.component';
import { CadastrarLinhasComponent } from './components/linhas/cadastrar-linhas/cadastrar-linhas.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Toast, ToastrModule } from 'ngx-toastr';
import { AtualizarLinhasComponent } from './components/linhas/atualizar-linhas/atualizar-linhas.component';


import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastrarLinhasComponent,
    ListarLinhasComponent,
    AtualizarLinhasComponent,
    CadastrarLinhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module.forChild({ /* options */})
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
