import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProjectComponent } from "./project/project.component";


export const routes: Routes = [
  {
    path:'admin',
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'project',component:ProjectComponent}
  ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{}
