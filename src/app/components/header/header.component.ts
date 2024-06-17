import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean | undefined = false;
  subscription: Subscription | undefined;

//Todo: We need to handle the case, when Add button is clicked, the Add-Task Component should be visible.
//! Using Dependency Injection
  constructor(private uiService: UiService, private router: Router) {
    //Todo: Setting up the subscription
    // Toggling the button. Between ADD and CLOSE
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => {
      this.showAddTask = value; 
      // Observable is passed from the service file.
      // value = servicefile(showAddTask value opposite to it) 
      // this.subject.next(this.showAddTask)
    });
   }

  ngOnInit(): void {
    
  }


  //Todo: When we click on ADD, it should display CLOSE(Red) color.
  //Todo: Change the showAddTask value
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  //Todo: ADD/CLOSE Button will be visible only in the '/' Path.
  hasRoute(route: string){
    console.log(this.router.url);
    return this.router.url === route;
  }
}
