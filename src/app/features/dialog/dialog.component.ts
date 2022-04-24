import { Component, Inject, TemplateRef } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


/**
 * A common component rendered as a Material dialog
 */
@Component({
  selector: 'esm-dialog',
  styleUrls: ['dialog.component.scss'],
  template: `
  
    <div mat-dialog-content>
    <!-- <button mat-icon-button class="close-button" (click)='cancel()'>
        <mat-icon class="close-icon" color="warn">close</mat-icon>
    </button> -->
      <p class="dialog-paragraph">{{ data.headerText }}</p>
      <ng-container [ngTemplateOutlet]="data.template"></ng-container>
    </div>
  `
})
export class DialogComponent<T> {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      headerText: string
      template: TemplateRef<any>
      context: T
    }
  ) { }
  cancel() {
    this.dialogRef.close();
  }
}