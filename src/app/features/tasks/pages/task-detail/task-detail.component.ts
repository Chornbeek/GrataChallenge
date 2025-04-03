import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../../services/task.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Task } from '../../../../models/task.model';

@Component({
    selector: 'app-task-detail',
    standalone: true,
    imports: [
        CommonModule,
        DatePipe
    ],
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
    private route = inject(ActivatedRoute);
    private taskService = inject(TaskService);
    private router = inject(Router);

    task: Task | null = null;
    loading = true;
    error: string | null = null;
    taskId: number | null = null;

    ngOnInit() {
        this.taskId = Number(this.route.snapshot.paramMap.get('id'));

        this.route.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id');
                if (!id) {
                    this.error = 'Invalid task ID.';
                    return of(null);
                }
                return this.taskService.getTask(Number(id)); 
            })
        ).subscribe({
            next: (task: Task | null) => {
                this.task = task;
                this.loading = false;
            },
            error: () => {
                this.error = 'Error loading task.';
                this.loading = false;
            }
        });
    }


    goBack() {
        this.router.navigate(['/tasks']);
    }

    editTask(): void {
        if (this.task) {
            this.router.navigate([`/tasks/${this.task.id}/edit`]);
        }
    }
}
