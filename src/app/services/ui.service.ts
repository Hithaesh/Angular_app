import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask() : void {
    this.showAddTask = ! this.showAddTask;
    this.subject.next(this.showAddTask); // To feed a new value to the subject next(theValue)
  }


  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
