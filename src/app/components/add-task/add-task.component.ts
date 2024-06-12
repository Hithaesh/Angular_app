import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit{
  text: string = "";
  day: string = "";
  reminder: boolean = false;


  @Output() onAddTask = new EventEmitter<Task>();
  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a task");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //Todo: - emit event
    this.onAddTask.emit(newTask);

    this.text = ""
    this.day = ""
    this.reminder = false;
  }
}
