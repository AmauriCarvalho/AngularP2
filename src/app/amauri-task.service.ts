import { Injectable } from '@angular/core';
interface tasks{
  tarefa: string;
}

@Injectable()
export class AmauriTaskService {
  lista: Array<tasks> = [];
  constructor() { }

  getLista(){
    const list = window.localStorage.getItem('lista');
    if (list){
      this.lista = JSON.parse(list);
    }
    return this.lista;
  }

  addTask(tarefa: string){
    this.lista.push({tarefa});
    window.localStorage.setItem('lista', JSON.stringify(this.lista));
  }

  removeTasks(index: number){
    this.lista.splice(index, 1);
    window.localStorage.setItem('lista', JSON.stringify(this.lista));
  }

}