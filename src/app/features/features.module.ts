import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { ViewSDKClient } from './pdfviewer/view-sdk.service';
import { DialogComponent } from './dialog/dialog.component';
import { DialogFactoryService } from './dialog/dialog-factory.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PdfviewerComponent, DialogComponent],
  exports:[PdfviewerComponent, DialogComponent],
  providers:[ViewSDKClient, DialogFactoryService]
})
export class FeaturesModule { }
