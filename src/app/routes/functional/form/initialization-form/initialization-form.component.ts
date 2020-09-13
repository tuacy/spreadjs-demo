import {Component} from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import {getData} from '../../workbook/spread-form/app.data';
@Component({
  selector: 'app-initialization-form',
  templateUrl: './initialization-form.component.html',
  styleUrls: ['./initialization-form.component.css']
})
export class InitializationFormComponent {

  autoGenerateColumns = false;
  dataSource: any[];
  spread: GC.Spread.Sheets.Workbook;
  hostStyle = {
    width: 'calc(100% - 280px)',
    height: '100%',
    overflow: 'hidden',
    float: 'left'
  };

  constructor() {
    this.dataSource = getData();
  }

  initSpread($event: any): void {
    this.spread = $event.spread;
  }

  addSheet(): void {
    let spread = this.spread;
    spread.addSheet(spread.getSheetCount());
  }

  removeSheet(): void {
    let spread = this.spread;
    if (spread.getSheetCount() > 0) {
      spread.removeSheet(0);
    }
  }

  clearSheet(): void {
    let spread = this.spread;
    spread.clearSheets();
  }

}
