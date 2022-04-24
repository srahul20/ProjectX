import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { FeaturesModule } from '../features/features.module';
import { MaterialLibModule } from '../material-lib.module';


@NgModule({
  imports: [
    CommonModule,
    FeaturesModule,
    MaterialLibModule
  ],
  exports:[],
  declarations: [DashboardComponent,ProjectComponent]
})
export class AdminModule { }
