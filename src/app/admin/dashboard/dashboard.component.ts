import { Component, OnInit, TemplateRef } from '@angular/core';
import { DialogFactoryService } from 'src/app/features/dialog/dialog-factory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pdfUrl:any = "../../../assets/pdfs/demo.pdf";
  constructor(private dialog: DialogFactoryService) { }

  ngOnInit() {
  }

  openDialog(template:TemplateRef<any>){
    this.dialog.open({template:template,headerText:'this is header'})
  }

}
