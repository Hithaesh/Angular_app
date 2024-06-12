import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() taskItem: Task | undefined;

  //@Output() deleteTask =  new EventEmitter<Task>();
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  //Toggle
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes; // Using the imported svg-icons

  onDelete(task: any) {
    console.log(task);
    // this.deleteTask.emit(event)
    this.onDeleteTask.emit(task)
  }
  
  onToggle(task: any){
    this.onToggleReminder.emit(task);
  }

}
