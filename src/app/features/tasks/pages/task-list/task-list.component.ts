import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TaskService } from '../../../../services/task.service';
import { Task } from '../../../../models/task.model';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-task-list',
  standalone: true,
    imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, RouterModule, MatSortModule],

  template: `
    <div class="task-list-container">
      <table mat-table [dataSource]="dataSource" matSort>
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Due Date</th>
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Priority</th>
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>

        <ng-container matColumnDef="title">
             <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>
            <td mat-cell *matCellDef="let task">{{task.title}}</td>
        </ng-container>

        <ng-container matColumnDef="dueDate">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Due Date</th>
          <td mat-cell *matCellDef="let task">{{task.dueDate | date}}</td>
        </ng-container>
        <ng-container matColumnDef="priority">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Priority</th>
            <td mat-cell *matCellDef="let task">{{task.priority}}</td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
          <td mat-cell *matCellDef="let task">{{task.status}}</td>
        </ng-container>
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Actions</th>
          <td mat-cell *matCellDef="let task">
            <button mat-icon-button [routerLink]="[task.id]">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" (click)="deleteTask(task.id)">
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <button mat-fab color="primary" class="fab-button" routerLink="new">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    .task-list-container {
      padding: 20px;
      position: relative;
    }
    table {
      width: 100%;
    }
    .fab-button {
      position: fixed;
      bottom: 24px;
      right: 24px;
    }
  `]
})
export class TaskListComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['title', 'dueDate', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource<Task>();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        this.loadTasks();
        this.dataSource.sortingDataAccessor = (item, property) => {
            if (property === 'priority') {
                const priorityOrder = { High: 3, Medium: 2, Low: 1 };
                return priorityOrder[item.priority] || 0;
            }
            return (item as any)[property];
        }
    }

    loadTasks(): void {
        this.taskService.getTasks().subscribe(tasks => {
            this.dataSource.data = tasks;
            this.dataSource.sort = this.sort;
        });
    }


  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
    }

}
