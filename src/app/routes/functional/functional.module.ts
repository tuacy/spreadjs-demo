import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FunctionalRoutingModule} from './functional-routing.module';
import {InitializationSpreadComponent} from './workbook/initialization-spread/initialization-spread.component';
import {SharedModule} from '../../shared/shared.module';
import {SpreadFormComponent} from './workbook/spread-form/spread-form.component';
import {InitializationFormComponent} from './form/initialization-form/initialization-form.component';
import {RowAndColumnComponent} from './form/row-and-column/row-and-column.component';
import {BasicFunctionComponent} from './formula-function/basic-function/basic-function.component';
import {IndirectComponent} from './formula-function/indirect/indirect.component';
import {AggregateComponent} from './formula-function/aggregate/aggregate.component';
import {WildcardComponent} from './formula-function/wildcard/wildcard.component';
import { BasicApplicationComponent } from './chart/basic-application/basic-application.component';
import { ExportImportComponent } from './workbook/export-import/export-import.component';


@NgModule({
  declarations: [InitializationSpreadComponent, SpreadFormComponent, InitializationFormComponent, RowAndColumnComponent, BasicFunctionComponent, IndirectComponent, AggregateComponent, WildcardComponent, BasicApplicationComponent, ExportImportComponent],
  imports: [
    CommonModule,
    SharedModule,
    FunctionalRoutingModule
  ]
})
export class FunctionalModule {
}
