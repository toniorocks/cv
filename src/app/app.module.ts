import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PublicCvModule } from '@app/public-cv/public-cv.module';
import { AdminModule } from '@app/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublicCvModule,
    AdminModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
