import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../../services/task.service';
import { Task } from '../../../../models/task.model';

@Component({
    selector: 'app-task-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule
    ],
    template: `
    <div class="task-form-container">
      <h2>Create New Task</h2>
      <form [formGroup]="taskForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline">
          <mat-label>Title</mat-label>
          <input matInput formControlName="title" required>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Description</mat-label>
          <textarea matInput formControlName="description" rows="4"></textarea>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Due Date</mat-label>
          <input matInput [matDatepicker]="picker" formControlName="dueDate">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
          <mat-error *ngIf="taskForm.get('dueDate')?.hasError('notFutureDate')">
            Due date must be in the future.
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Priority</mat-label>
          <mat-select formControlName="priority">
            <mat-option value="Low">Low</mat-option>
            <mat-option value="Medium">Medium</mat-option>
            <mat-option value="High">High</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Status</mat-label>
          <mat-select formControlName="status">
            <mat-option value="Pending">Pending</mat-option>
            <mat-option value="InProgress">In Progress</mat-option>
            <mat-option value="Completed">Completed</mat-option>
          </mat-select>
        </mat-form-field>

        <div class="actions">
          <button mat-button type="button" routerLink="/tasks">Cancel</button>
          <button mat-raised-button color="primary" type="submit" [disabled]="!taskForm.valid">
            Save Task
          </button>
        </div>
      </form>
    </div>
  `,
    styles: [`
    .task-form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    mat-form-field {
      width: 100%;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 16px;
    }
  `]
})
export class TaskFormComponent implements OnInit {
    taskForm: FormGroup;
    taskId: number | null = null;

    constructor(
        private fb: FormBuilder,
        private taskService: TaskService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.taskForm = this.fb.group({
            title: ['', Validators.required],
            description: [''],
            dueDate: [null, [Validators.required, this.futureDateValidator]],
            priority: ['Medium', Validators.required],
            status: ['Pending', Validators.required]
        });
    }

    ngOnInit(): void {
        this.taskId = Number(this.route.snapshot.paramMap.get('id'));

        if (this.taskId) {
            this.taskService.getTask(this.taskId).subscribe((task: Task) => {
                this.taskForm.patchValue(task);

                // Add the id control for update requests
                this.taskForm.addControl('id', this.fb.control(task.id));
            });
        }
    }

    onSubmit(): void {
        if (this.taskForm.valid) {
            const taskData = this.taskForm.value;

            if (this.taskId) {
                this.taskService.updateTask(this.taskId, taskData).subscribe(() => {
                    this.router.navigate(['/tasks']);
                });
            } else {
                this.taskService.createTask(taskData).subscribe(() => {
                    this.router.navigate(['/tasks']);
                });
            }
        }
    }

    futureDateValidator(control: AbstractControl): ValidationErrors | null {
        const selectedDate = new Date(control.value);
        const today = new Date();

        // Normalize to 00:00:00
        today.setHours(0, 0, 0, 0);

        if (selectedDate <= today) {
            return { notFutureDate: true };
        }
        return null;
    }
}
