import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{

  Id : number = 1;
  nomeLinha : string = "Vila Sabrina";
  linha : string = "2033";
  pontoPartida : string = "Vila Sabrina";
  pontoFinal : string = "casa da mãe joana";
  situacao : boolean = true;









  constructor() 
  {
    console.log(this.linha)


  }

  ngOnInit(): void {
    
  }
}
