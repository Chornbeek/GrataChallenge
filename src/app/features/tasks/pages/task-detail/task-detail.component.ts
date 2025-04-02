import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../../services/task.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
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
    
    constructor(private router: Router) { }
    task: any;
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
                return this.taskService.getTaskById(id); // make sure this exists
            })
        ).subscribe({
            next: task => {
                this.task = task;
                this.loading = false;
            },
            error: err => {
                this.error = 'Error loading task.';
                this.loading = false;
            }
        });
    }
    goBack() {
        this.router.navigate(['/tasks']);
    }

    editTask(): void {
        this.router.navigate([`/tasks/${this.task.id}/edit`]);
    }



}
