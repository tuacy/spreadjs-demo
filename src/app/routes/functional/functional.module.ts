import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FunctionalRoutingModule} from './functional-routing.module';
import {InitializationSpreadComponent} from './workbook/initialization-spread/initialization-spread.component';
import {SharedModule} from '../../shared/shared.module';
import { SpreadFormComponent } from './workbook/spread-form/spread-form.component';


@NgModule({
  declarations: [InitializationSpreadComponent, SpreadFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FunctionalRoutingModule
  ]
})
export class FunctionalModule {
}
