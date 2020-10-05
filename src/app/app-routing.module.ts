import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';

const routes: Routes = [
  {path: 'launch.html', component: LaunchComponent},
  {path: 'app.html', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
