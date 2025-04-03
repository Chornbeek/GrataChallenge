import './polyfills.server.mjs';
import{a as B,d as z}from"./chunk-CKT2WZAX.mjs";import{a as Y,b as Z}from"./chunk-EBSWFUJL.mjs";import{C as h,O as J,Q as W,R as X,a as G}from"./chunk-YH4HWRFK.mjs";import{J as x,K as w,Ka as k,La as _,Ob as H,Q as n,Qa as i,R as y,Ra as l,Rb as L,S as T,Sa as s,Za as E,ab as D,bb as b,cb as S,ea as R,eb as A,ec as O,fb as I,gc as j,hc as F,j as C,jb as c,mc as N,oc as P,qb as m,qc as U,ra as d,tc as Q,u as M,uc as q,vc as V,wc as K}from"./chunk-CQFMMMPW.mjs";var it=["*",[["mat-toolbar-row"]]],lt=["*","mat-toolbar-row"],mt=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275dir=T({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0})}}return t})(),$=(()=>{class t{constructor(e,o,r){this._elementRef=e,this._platform=o,this._document=r}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static{this.\u0275fac=function(o){return new(o||t)(d(R),d(G),d(L))}}static{this.\u0275cmp=n({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,r,nt){if(o&1&&S(nt,mt,5),o&2){let v;A(v=I())&&(r._toolbarRows=v)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(_(r.color?"mat-"+r.color:""),k("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[m],ngContentSelectors:lt,decls:2,vars:0,template:function(o,r){o&1&&(D(it),b(0),b(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0})}}return t})();var tt=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=y({type:t})}static{this.\u0275inj=w({imports:[h,h]})}}return t})();var p=class t{toggleSidenav(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=n({type:t,selectors:[["app-layout"]],standalone:!0,features:[m],decls:13,vars:0,consts:[["color","primary"],["mat-icon-button","",3,"click"],[1,"spacer"],["mat-button","","routerLink","/tasks","routerLinkActive","active"],[1,"container"]],template:function(e,o){e&1&&(i(0,"mat-toolbar",0)(1,"button",1),E("click",function(){return o.toggleSidenav()}),i(2,"mat-icon"),c(3,"menu"),l()(),i(4,"span"),c(5,"Task Management System"),l(),s(6,"span",2),i(7,"button",3)(8,"mat-icon"),c(9,"list"),l(),c(10," Tasks "),l()(),i(11,"div",4),s(12,"router-outlet"),l())},dependencies:[tt,$,X,J,W,Z,Y,K,U,Q,q],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}.active[_ngcontent-%COMP%]{background-color:#ffffff1a}"]})};var f=class t{title="Task Management System";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=n({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,template:function(e,o){e&1&&s(0,"app-layout")},dependencies:[p],encapsulation:2})};var ot=[{path:"",loadComponent:()=>import("./chunk-MDMMLTOX.mjs").then(t=>t.TaskListComponent)},{path:"new",loadComponent:()=>import("./chunk-SWZCBPUQ.mjs").then(t=>t.TaskFormComponent)},{path:":id",loadComponent:()=>import("./chunk-GIA4SYHF.mjs").then(t=>t.TaskDetailComponent)},{path:":id/edit",loadComponent:()=>import("./chunk-SWZCBPUQ.mjs").then(t=>t.TaskFormComponent)}];var et=[{path:"",component:p,children:[{path:"",redirectTo:"tasks",pathMatch:"full"},{path:"tasks",children:ot}]}];var u=class t{intercept(a,e){return e.handle(a).pipe(M(o=>(console.error("HTTP Error:",o),C(()=>o))))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})};var rt={providers:[V(et),j(F()),{provide:O,useClass:u,multi:!0},B(),P()]};var ct={providers:[z()]},at=H(rt,ct);var dt=()=>N(f,at),Xt=dt;export{Xt as a};
