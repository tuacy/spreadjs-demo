import {Component} from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import {getData} from './app.data';

/**
 * 初始化spread
 */
@Component({
  selector: 'app-initialization-spread',
  templateUrl: './initialization-spread.component.html',
  styleUrls: ['./initialization-spread.component.css']
})
export class InitializationSpreadComponent {

  autoGenerateColumns = false;
  dataSource: any[];
  spread: GC.Spread.Sheets.Workbook;
  hostStyle = {
    width: '100%',
    height: '100%'
  };

  constructor() {
    this.dataSource = getData();
  }

  initSpread($event: any): void {
    this.spread = $event.spread;
  }

}
