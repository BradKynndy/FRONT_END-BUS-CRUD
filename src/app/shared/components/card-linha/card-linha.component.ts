import { Component, Input, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-card-linha',
  templateUrl: './card-linha.component.html',
  styleUrls: ['./card-linha.component.css']
})
export class CardLinhaComponent {

  @Input() id: number = 0;
  @Input() numLinha : string  = "";
  @Input() nomelinha : string  = "";
  @Input() pontoPartida : string  = "";
  @Input() pontoFinal : string  = "";
  @Input() situacao : boolean  = true;

  constructor() {}

  ngOnInit(): void {}

}
