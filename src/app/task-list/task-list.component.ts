import { Component } from '@angular/core';
import { IPriority, IStatus, ITask, PriorityType, StatusType } from '../models/component.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  readonly LIST_STATES: StatusType[] = ['COMPLETED', 'PENDING', 'PROGRESS']
  readonly LIST_OBJECT_STATES: IStatus[] = [
    { key: 'COMPLETED', text: 'Completado' },
    { key: 'PENDING', text: 'Pendiente' },
    { key: 'PROGRESS', text: 'En progreso' }
  ]

  readonly LIST_PRIORITIES: PriorityType[] = ['HIGH', 'LOW', 'MEDIUM']
  readonly LIST_OBJECTS_PRIORITIES: IPriority[] = [
    { key: 'HIGH', text: 'Alta' },
    { key: 'LOW', text: 'Baja' },
    { key: 'MEDIUM', text: 'Medio' }
  ]

  list_task: ITask[] = [
    {
      priority: 'HIGH',
      task: 'Aprender Typescript',
      status: 'PENDING'
    },
    {
      priority: 'LOW',
      task: 'Cocinar',
      status: 'PENDING'
    }
  ]

  task: ITask = {
    priority: 'HIGH',
    task: 'Aprender Typescript',
    status: 'PENDING'
  }

  colorText = 'white'
  inputValue = ''

  changeStatus(): void {
    console.log(this.task);

  }

  refresh(): void {
    this.list_task = [
      {
        priority: 'HIGH',
        task: 'Aprender Typescript',
        status: 'PENDING'
      },
      {
        priority: 'LOW',
        task: 'Cocinar',
        status: 'PENDING'
      }
    ]
  }

  updateTask(): void {
    this.list_task[1] = {
      priority: 'LOW',
      task: this.inputValue,
      status: 'PENDING'
    }
  }

  trackByItems(index: number, name: ITask): number {
    return index;
  }
}
