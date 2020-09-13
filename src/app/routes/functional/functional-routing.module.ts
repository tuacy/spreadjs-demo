import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InitializationSpreadComponent} from './workbook/initialization-spread/initialization-spread.component';
import {SpreadFormComponent} from './workbook/spread-form/spread-form.component';
import {InitializationFormComponent} from './form/initialization-form/initialization-form.component';
import {RowAndColumnComponent} from './form/row-and-column/row-and-column.component';
import {BasicFunctionComponent} from './formula-function/basic-function/basic-function.component';
import {IndirectComponent} from './formula-function/indirect/indirect.component';
import {AggregateComponent} from './formula-function/aggregate/aggregate.component';
import {WildcardComponent} from './formula-function/wildcard/wildcard.component';
import {BasicApplicationComponent} from './chart/basic-application/basic-application.component';
import {ExportImportComponent} from './workbook/export-import/export-import.component';


const routes: Routes = [
  {
    /**
     * 工作簿
     */
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
      },
      /**
       * 导入导出
       */
      {
        path: 'export-import',
        component: ExportImportComponent,
      }
    ]
  }, {
    /**
     * 表单
     */
    path: 'form',
    children: [
      /**
       * 初始化表单
       */
      {
        path: 'initialization-form',
        component: InitializationFormComponent,
      },
      /**
       * 行与列
       */
      {
        path: 'row-and-column',
        component: RowAndColumnComponent,
      }
    ]
  }, {
    /**
     * 公式函数
     */
    path: 'formula-function',
    children: [
      /**
       * 基本函数
       */
      {
        path: 'basic-function',
        component: BasicFunctionComponent,
      },
      /**
       * INDIRECT 函数
       */
      {
        path: 'indirect',
        component: IndirectComponent,
      },
      /**
       * AGGREGATE 函数
       */
      {
        path: 'aggregate',
        component: AggregateComponent,
      },
      /**
       * 函数使用通配符
       */
      {
        path: 'wildcard',
        component: WildcardComponent,
      }
    ]
  }, {
    /**
     * 图表
     */
    path: 'chart',
    children: [
      /**
       * 基本应用
       */
      {
        path: 'basic-application',
        component: BasicApplicationComponent,
      },
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
