import {Component} from '@angular/core';
import * as GC from '@grapecity/spread-sheets';

/**
 * INDIRECT 函数
 */
@Component({
  selector: 'app-indirect',
  templateUrl: './indirect.component.html',
  styleUrls: ['./indirect.component.css']
})
export class IndirectComponent {

  spread: GC.Spread.Sheets.Workbook;
  hostStyle = {
    width: 'calc(100% - 280px)',
    height: '100%',
    overflow: 'hidden',
    float: 'left'
  };

  constructor() {
  }

  initSpread($event: any): void {
    this.spread = $event.spread;
    let spread = this.spread;
    spread.suspendPaint();
    let sheet = spread.sheets[0], sheet2 = spread.sheets[1];

    sheet.setArray(0, 0, [['b1', 1], ['A', 2], ['B', 3]]);
    sheet2.setArray(0, 0, [['b3', 1], ['A', 3], ['B', 5]]);

    sheet.setValue(3, 0, 'Random');
    sheet.setFormula(3, 1, '=RANDBETWEEN(1,100)');
    sheet.setValue(4, 0, 'Now');
    sheet.setFormula(4, 1, '=NOW()');

    sheet.setArray(8, 0, [['Formula', 'Description', 'Result']]);
    sheet.setColumnWidth(0, 165);
    sheet.setColumnWidth(1, 285);
    const sampleData = [
      ['=INDIRECT("A1")', 'Value of A1 => "b1"'],
      ['=INDIRECT(A1)', 'Value of the reference of A1 => value of b1 => 1'],
      ['=INDIRECT("A"&(1+2))', 'Value of A3 => "B"'],
      ['=INDIRECT(A3&B2)', 'Value of B2 => 2'],
      ['=INDIRECT("Sheet2!"&A1)', 'Value of Sheet2\'s B1'],
      ['=INDIRECT("Sheet2!A1")', 'Value of Sheet2\'s A1']
    ];

    for (let i = 0, len = sampleData.length; i < len; i++) {
      let data = sampleData[i], row = 6 + i;
      sheet.setArray(row, 0, [data]);
      sheet.setFormula(row, 2, data[0]);
    }
    spread.resumePaint();
  }

  addIndirectCustomName($event: any): void {
    let name = (document.getElementById('customName') as HTMLInputElement).value,
      ref = (document.getElementById('customReference') as HTMLInputElement).value,
      row = 15;

    if (name) {
      let sheet = this.spread.sheets[0];
      sheet.addCustomName(name, ref, 0, 0, '');
      sheet.setArray(row, 0, [['=INDIRECT(name1)', 'name1 is a custom name, if a valid cell reference is defined by it then use the value otherwise #REF!']]);
      sheet.setFormula(row, 2, '=INDIRECT(' + name + ')');
    }
  }

}
