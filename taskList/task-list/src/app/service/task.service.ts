import { Injectable } from '@angular/core';
import {Task} from '../components/Task';
import {HttpClient, HttpHeaders} from '@angular/common/http'

//para metodos asincronicos
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'aplication/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }


  deletTask(task:Task): Observable<Task>{
    const url = "${this.apiUrl}/${task.id}";
    return this.http.delete<Task>(url,httpOptions);
  }

  updateTaskReminder(task:Task): Observable<Task>{
    const url = "${this.apiUrl}/${task.id}";
    return this.http.put<Task>(url,task,httpOptions)
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }

}
