import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = 'Nova tarefa';

  constructor(
    private octivatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const id = this.octivatedRoute.snapshot.paramMap.get('id');
    if (id) {
      //@ts-ignore
      this.task = this.taskService.getById(parseInt(id));
      this.title = 'Alternando tarefa';
    }
  }

  onSubmit() {
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }

}