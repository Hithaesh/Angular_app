import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean | undefined = false;
  subcription: Subscription | undefined;


  constructor(private uiService: UiService) {
    this.subcription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value; // value = servicefile(showAddTask value opposite to it) // this.subject.next(this.showAddTask)
    });
   }

  ngOnInit(): void {
    
  }


  //Todo: When we click on ADD, it should display CLOSE(Red) color.
  //Todo: Change the showAddTask value
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
