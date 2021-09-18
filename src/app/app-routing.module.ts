import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';

const routes: Routes = [
  { path: "", component: ListEmployeeComponent },
  { path: "list-employee", component: ListEmployeeComponent },
  { path: "create-employee", component: CreateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
