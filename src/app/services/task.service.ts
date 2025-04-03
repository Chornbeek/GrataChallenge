import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private baseUrl = 'http://localhost:5115/api/Tasks';

    private _loading = new BehaviorSubject<boolean>(false);
    loading$ = this._loading.asObservable();

    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        this._loading.next(true);
        return this.http.get<Task[]>(this.baseUrl).pipe(
            catchError(this.handleError),
            finalize(() => this._loading.next(false))
        );
    }

    getTask(id: number): Observable<Task> {
        this._loading.next(true);
        return this.http.get<Task>(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError),
            finalize(() => this._loading.next(false))
        );
    }

    createTask(task: Task): Observable<Task> {
        this._loading.next(true);
        return this.http.post<Task>(this.baseUrl, task).pipe(
            catchError(this.handleError),
            finalize(() => this._loading.next(false))
        );
    }

    updateTask(id: number, task: Task): Observable<void> {
        this._loading.next(true);
        return this.http.put<void>(`${this.baseUrl}/${id}`, task).pipe(
            catchError(this.handleError),
            finalize(() => this._loading.next(false))
        );
    }

    deleteTask(id: number): Observable<void> {
        this._loading.next(true);
        return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError),
            finalize(() => this._loading.next(false))
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMsg = 'An unknown error occurred';
        if (error.error instanceof ErrorEvent) {
            errorMsg = `Client error: ${error.error.message}`;
        } else {
            errorMsg = `Server error ${error.status}: ${error.message}`;
        }
        // For demo purposes, use alert. Replace with a toast/snackbar in real apps
        alert(errorMsg);
        return throwError(() => new Error(errorMsg));
    }

    


}