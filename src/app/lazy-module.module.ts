import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {path: 'lazy-load', component: LazyComponentComponent}
]


@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModuleModule { }
