import{B as s,Lb as h,M as n,P as l,h as i,m as o,x as r}from"./chunk-AZOQ36F7.js";var p=class a{constructor(t){this.http=t}baseUrl="http://localhost:5115/api/Tasks";_loading=new i(!1);loading$=this._loading.asObservable();getTasks(){return this._loading.next(!0),this.http.get(this.baseUrl).pipe(r(this.handleError),s(()=>this._loading.next(!1)))}getTask(t){return this._loading.next(!0),this.http.get(`${this.baseUrl}/${t}`).pipe(r(this.handleError),s(()=>this._loading.next(!1)))}createTask(t){return this._loading.next(!0),this.http.post(this.baseUrl,t).pipe(r(this.handleError),s(()=>this._loading.next(!1)))}updateTask(t,e){return this._loading.next(!0),this.http.put(`${this.baseUrl}/${t}`,e).pipe(r(this.handleError),s(()=>this._loading.next(!1)))}deleteTask(t){return this._loading.next(!0),this.http.delete(`${this.baseUrl}/${t}`).pipe(r(this.handleError),s(()=>this._loading.next(!1)))}handleError(t){let e="An unknown error occurred";return t.error instanceof ErrorEvent?e=`Client error: ${t.error.message}`:e=`Server error ${t.status}: ${t.message}`,alert(e),o(()=>new Error(e))}static \u0275fac=function(e){return new(e||a)(l(h))};static \u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"})};export{p as a};
