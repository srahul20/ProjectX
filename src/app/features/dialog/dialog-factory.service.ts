import { Injectable } from '@angular/core'

import { first } from 'rxjs/operators'

// Components
import { DialogComponent } from './dialog.component'

// Models
import { DialogData } from './dialog.model'
import { DialogOptions } from './dialog.model'

// Services
import { DialogService } from './dialog.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'


@Injectable({
  providedIn: 'root'
})
export class DialogFactoryService<T = undefined> {
  constructor(private dialog: MatDialog) {}

  open(
    dialogData: DialogData<T>,
    options: DialogOptions = { width: 'auto', disableClose: false }
  ): DialogService<T> {
    const dialogRef = this.dialog.open<DialogComponent<T>, DialogData<T>>(
      DialogComponent,
      {
        ...this.fetchOptions(options),
        data: dialogData
      }
    )

    dialogRef.afterClosed().pipe(first())

    return new DialogService(dialogRef)
  }

  private fetchOptions({
    width,
    disableClose
  }: DialogOptions): Pick<
    MatDialogConfig<DialogData<T>>,
    'width' | 'disableClose'
  > {
    return {
      // width: `${width}`,
      width: width,
      disableClose
    }
  }
}