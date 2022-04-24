//TODO Add the models
import { TemplateRef } from '@angular/core';

export interface DialogData<T = undefined> {
  headerText?: string;
  template: TemplateRef<any>;
  context?: T;
}
export interface DialogOptions {
    width: string;
    disableClose: boolean;
  }