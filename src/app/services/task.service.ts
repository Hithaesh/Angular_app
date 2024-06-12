import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable}  from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }


  //Todo: Creating Observables and Subscribe
  getTasks(): Observable<Task[]> {

    // When returning observables, of from rxjs makes it into Observable
    //! Method-1:
    // const tasks = of(TASKS);
    // return tasks;

    //! Method-2:
    // return of(TASKS);

    //! Method-3:
    // This is after adding the HTTPCLIENT using this module to fetch the API
    // .get(expects a Observabe)
    return this.http.get<Task[]>(this.apiUrl)
  }


  //Todo: Adding a Method to DeleteTask
  deleteTasks(task: Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url); 
  }


  updateTaskReminder(task: Task) : Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions); 
  }


  addTasks(newTask: Task) : Observable<Task> {
    return this.http.post<Task>(this.apiUrl, newTask, httpOptions);
  }
}
