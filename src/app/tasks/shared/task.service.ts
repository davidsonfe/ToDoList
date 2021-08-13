import { environment } from './../../../environments/environment';
import { Task } from './task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    //@ts-ignore
    { id: 1, description: 'Tarefa 1', completed: false },
    //@ts-ignore
    { id: 2, description: 'Tarefa 2', completed: false },
    //@ts-ignore
    { id: 3, description: 'Tarefa 3', completed: false },
    //@ts-ignore
    { id: 4, description: 'Tarefa 4', completed: false },
    //@ts-ignore
    { id: 5, description: 'Tarefa 5', completed: false },
  ];

  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    //@ts-ignore
    const task = this.tasks.find((value) => value.id == id);
  }

  save(task: Task) {
    if (task.id) {
      //@ts-ignore
      const taskArr = this.getById(task.id);
      //@ts-ignore
      taskArr.description = task.description;
      //@ts-ignore
      taskArr.completed = task.completed;

    } else {
      const lastId = this.tasks[this.tasks.length-1].id;
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
    }

  }

  delete (id: number) {
    //@ts-ignore
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);

  }

}
