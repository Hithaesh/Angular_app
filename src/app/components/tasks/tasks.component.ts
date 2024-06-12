import { Component } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //Todo: To use the Service file to get the data from BackEnd.
  //Step-1: Initialize an empty array
  //Step-2: Add the service file in CONSTRUCTOR(){}
  //Step-3: Do all the below steps inside the ngOnInit() : void {}
  //Step-3: Use the service file variable to access the method inside the Service file as a class method
  tasks : Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log(this.taskService.getTasks());
    this.taskService.getTasks().subscribe((tasks) => {
      (this.tasks = tasks);
    });
  }

  deleteTask(task: Task){
    this.taskService.deleteTasks(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder; // making it opposite to what it is.
    console.log(task.reminder);
    // If we reload. the update is not UPDATED.
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    // console.log("Add task"); // going to service file
    this.taskService.addTasks(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
