import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public texto: string;

  constructor() { }

  ngOnInit(): void {
    this.texto = 'Olá! Tudo bem?';
  }

  submit(): void {
    this.texto = 'Clicou!';
  }

}
