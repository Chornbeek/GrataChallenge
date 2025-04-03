import './polyfills.server.mjs';
import{a as M}from"./chunk-MXUMIX72.mjs";import{$a as l,D as g,Ea as T,Ia as m,N as d,Q as _,Qa as a,Ra as e,W as u,Wa as D,Wb as E,X as k,Yb as S,Za as f,Zb as b,i as x,jb as i,kb as v,lb as p,pc as y,qa as r,qb as h,sb as C,sc as w,tb as I}from"./chunk-CQFMMMPW.mjs";import"./chunk-5XUXGTUW.mjs";function V(n,o){n&1&&(a(0,"div"),i(1,"Loading..."),e())}function B(n,o){if(n&1&&(a(0,"div"),i(1),e()),n&2){let t=l();r(),v(t.error)}}function P(n,o){if(n&1){let t=D();a(0,"div")(1,"h2"),i(2),e(),a(3,"p")(4,"strong"),i(5,"Description:"),e(),i(6),e(),a(7,"p")(8,"strong"),i(9,"Due Date:"),e(),i(10),C(11,"date"),e(),a(12,"p")(13,"strong"),i(14,"Priority:"),e(),i(15),e(),a(16,"p")(17,"strong"),i(18,"Status:"),e(),i(19),e(),a(20,"button",1),f("click",function(){u(t);let c=l();return k(c.goBack())}),i(21,"Back to Tasks"),e(),a(22,"button",1),f("click",function(){u(t);let c=l();return k(c.editTask())}),i(23,"Edit Task"),e()()}if(n&2){let t=l();r(2),v(t.task.title),r(4),p(" ",t.task.description,""),r(4),p(" ",I(11,5,t.task.dueDate),""),r(5),p(" ",t.task.priority,""),r(4),p(" ",t.task.status,"")}}var N=class n{route=d(y);taskService=d(M);router=d(w);task=null;loading=!0;error=null;taskId=null;ngOnInit(){this.taskId=Number(this.route.snapshot.paramMap.get("id")),this.route.paramMap.pipe(g(o=>{let t=o.get("id");return t?this.taskService.getTask(Number(t)):(this.error="Invalid task ID.",x(null))})).subscribe({next:o=>{this.task=o,this.loading=!1},error:()=>{this.error="Error loading task.",this.loading=!1}})}goBack(){this.router.navigate(["/tasks"])}editTask(){this.task&&this.router.navigate([`/tasks/${this.task.id}/edit`])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["app-task-detail"]],standalone:!0,features:[h],decls:3,vars:3,consts:[[4,"ngIf"],[3,"click"]],template:function(t,s){t&1&&T(0,V,2,0,"div",0)(1,B,2,1,"div",0)(2,P,24,7,"div",0),t&2&&(m("ngIf",s.loading),r(),m("ngIf",s.error),r(),m("ngIf",s.task&&!s.loading&&!s.error))},dependencies:[b,E,S]})};export{N as TaskDetailComponent};
