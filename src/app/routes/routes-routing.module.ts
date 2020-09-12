import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {environment} from '../../environments/environment';
import {FunctionalModule} from './functional/functional.module';


const routes: Routes = [
  {
    path: 'functional',
    loadChildren: () => FunctionalModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
