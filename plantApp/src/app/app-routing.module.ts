import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetectComponent } from './detect/detect.component';
import { LearningModuleComponent } from './learning-module/learning-module.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'detect',component:DetectComponent},
  {path:'LearningModule',component:LearningModuleComponent},
  {path:'**',redirectTo:'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
