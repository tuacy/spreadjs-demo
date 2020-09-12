import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InitializationSpreadComponent} from './workbook/initialization-spread/initialization-spread.component';
import {SpreadFormComponent} from './workbook/spread-form/spread-form.component';


const routes: Routes = [
  {
    path: 'workbook',
    children: [
      /**
       * 初始化spread
       */
      {
        path: 'initialization-spread',
        component: InitializationSpreadComponent,
      },
      /**
       * spread表单
       */
      {
        path: 'spread-form',
        component: SpreadFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class FunctionalRoutingModule {
}
