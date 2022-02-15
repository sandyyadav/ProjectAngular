import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetectComponent } from './detect/detect.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'detect',component:DetectComponent},
  {path:'**',redirectTo:'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
