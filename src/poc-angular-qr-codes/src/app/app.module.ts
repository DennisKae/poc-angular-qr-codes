import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanPageComponent } from './pages/scan-page/scan-page.component';
import { GeneratePageComponent } from './pages/generate-page/generate-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanPageComponent,
    GeneratePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
