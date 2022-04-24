import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgLayoutComponent } from './ig-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialLibModule } from '../material-lib.module';
import { RouterModule } from '@angular/router';

export const route = []

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialLibModule,
    RouterModule
  ],
  declarations: [IgLayoutComponent],
  exports: [IgLayoutComponent],
  providers:[]
})
export class IgLayoutModule { }
