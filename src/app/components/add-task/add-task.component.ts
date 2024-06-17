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

  //Todo: Now we handle Add-user Component display based on the toggle button.
  //! showAddTask = false, display button(ADD) and do not show the Add-Task Component.
  //! showAddTask = true, display button(Close) and show the Add-Task Component.
  
  @Output() onAddTask = new EventEmitter<Task>();
  constructor(private uiService: UiService) {
    //Todo: Subscription to the observable passed from the onToggle method() from uiService file.
    // Todo: Repeat the same thing done in the header Component, but change the HTML based on *ngIf showAddTask
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
