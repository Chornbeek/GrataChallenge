import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';



@NgModule({
    
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
