import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit{
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean | undefined;
  subscription : Subscription | undefined;

  @Output() onAddTask = new EventEmitter<Task>();
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value; // value = servicefile(showAddTask value opposite to it) // this.subject.next(this.showAddTask)
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a Task");
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
