import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApothecaryAboutComponent } from './apothecary-about/apothecary-about.component';
import { HerbsSectionComponent } from './herbs-section/herbs-section.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'herbs',
    pathMatch: 'full'
  },
  {
    path: 'herbs',
    component: HerbsSectionComponent
  },
  {
    path: 'about',
    component: ApothecaryAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
