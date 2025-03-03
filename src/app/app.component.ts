import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskListModule } from './task-list/task-list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17-course-for-work';
}
