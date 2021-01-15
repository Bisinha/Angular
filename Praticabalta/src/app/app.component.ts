import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Todos: any[] = [];
  public title: String = 'Minhas Tarefas';

  constructor(){
    this.Todos.push('Passear com o cachorro');
    this.Todos.push('Ir ao supermercado');
    this.Todos.push('Cortar o cabelo');
  }
}
