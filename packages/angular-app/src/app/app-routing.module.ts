import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { HintsComponent } from "./views/hints/hints.component";
import { SubgraphComponent } from "./views/subgraph/subgraph.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home Component'
    }
  },
  {
    path:'hints',
    component: HintsComponent,
    data: {
      title: 'Hints Component'
    }
  },
  {
    path:'subgraph',
    component: SubgraphComponent,
    data: {
      title: 'Subgraph Component'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
