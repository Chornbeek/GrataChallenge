import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return of([
            {
                id: 1,
                title: 'B Task',
                description: 'This is task B',
                dueDate: new Date(),
                priority: 'High',
                status: 'Pending'
            },
            {
                id: 2,
                title: 'A Task',
                description: 'This is task A',
                dueDate: new Date(),
                priority: 'Low',
                status: 'InProgress'
            },
            {
                id: 3,
                title: 'C Task',
                description: 'This is task C',
                dueDate: new Date(),
                priority: 'Medium',
                status: 'Completed'
            }
        ]);
    }




  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    getTaskById(id: string): Observable<Task> {
        const mockTask: Task = {
            id: Number(id),
            title: 'Mock Task Title',
            description: 'This is a mock task description.',
            dueDate: new Date(),
            priority: 'High',
            status: 'InProgress',

        };

        return of(mockTask);
        //return this.http.get<Task>(`${this.apiUrl}/tasks/${id}`);
    }
} 