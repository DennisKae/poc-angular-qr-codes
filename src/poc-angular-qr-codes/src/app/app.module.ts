import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanPageComponent } from './pages/scan-page/scan-page.component';
import { GeneratePageComponent } from './pages/generate-page/generate-page.component';

import { NgxKjuaModule } from 'ngx-kjua';

@NgModule({
  declarations: [
    AppComponent,
    ScanPageComponent,
    GeneratePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxKjuaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
