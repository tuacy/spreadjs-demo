import {NgModule} from '@angular/core';


import {RouteRoutingModule} from './routes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FunctionalModule} from './functional/functional.module';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule,
    FunctionalModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule {
}
