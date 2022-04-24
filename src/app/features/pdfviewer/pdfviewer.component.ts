import {  Component, Input, OnChanges } from '@angular/core';
import {ViewSDKClient} from './view-sdk.service';

@Component({
  selector: 'pdf-viewer',
  templateUrl: './pdfviewer.component.html',
})
export class PdfviewerComponent implements OnChanges {


  @Input("pdfUrl") pdfUrl: string = '';
  @Input("readOnly") readOnly: boolean = false;
  @Input("uploadUrl") uploadUrl: string = '';
  @Input("pdfName") pdfName: string = "demo.pdf";
  @Input("commenterName") commenterName: string = "Rahul sir";
  @Input("viewerConfig") viewerConfig = {
    showAnnotationTools: true,
    enableFormFilling: true,
    showLeftHandPanel: true,
    showDownloadPDF: true,
    showPrintPDF: true,
    showPageControls: true,
    dockPageControls: true,
    defaultViewMode: "FIT_WIDTH", /* Allowed possible values are "FIT_PAGE", "FIT_WIDTH" or "". */
  };

  constructor(private viewSDKClient: ViewSDKClient) { }

  ngOnChanges() {
    if(!this.pdfUrl) return;
    this.viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      /* By default the embed mode will be Full Window */

      this.viewSDKClient.previewFile('pdf-div', this.viewerConfig, this.pdfUrl, this.readOnly, this.pdfName);
      this.viewSDKClient.reqisterCallBack(this.commenterName);
      this.viewSDKClient.registerSaveApiHandler(this.uploadUrl);
    });

  }
}
