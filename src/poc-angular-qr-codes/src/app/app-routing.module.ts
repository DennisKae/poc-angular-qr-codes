import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { ScanPageComponent } from './pages/scan-page/scan-page.component';
import { GeneratePageComponent } from './pages/generate-page/generate-page.component';


const routes: Routes = [

  {
    path: 'generate',
    component: GeneratePageComponent
  },
  {
    path: 'scan',
    component: ScanPageComponent
  },
  {
    path: '',
    redirectTo: 'generate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
