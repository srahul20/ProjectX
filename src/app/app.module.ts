import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgLayoutModule } from './ig-layout/ig-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLibModule } from './material-lib.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { FeaturesModule } from './features/features.module';
import { ViewSDKClient } from './features/pdfviewer/view-sdk.service';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { NgConfigureModule } from './build-config/configure.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgLayoutModule,
    BrowserAnimationsModule,
    MaterialLibModule,
    AdminRoutingModule,
    AdminModule,
    FeaturesModule,
    HttpClientModule,
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
