import {Component} from '@angular/core';
import * as GC from '@grapecity/spread-sheets';

/**
 * 函数使用通配符
 */
@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.css']
})
export class WildcardComponent {

  spread: GC.Spread.Sheets.Workbook;
  hostStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    float: 'left'
  };

  constructor() {
  }

  initSpread($event: any): void {
    this.spread = $event.spread;
    let spread = this.spread;
    let spreadNS = GC.Spread.Sheets;
    let sheet = spread.sheets[0];

    spread.suspendPaint();
    sheet.options.allowCellOverflow = true;

    let array = [
      ['Tree', 'Height', 'Age', 'Yield', 'Profit', 'Height'],
      ['=App?e', '>10', null, null, null, '<16'],
      ['=P*'],
      ['Tree', 'Height', 'Age', 'Yield', 'Profit'],
      ['Apple', 18, 20, 14, 105],
      ['Pear', 12, 12, 10, 96],
      ['Cherry', 13, 14, 9, 105],
      ['AppLe', 14, 15, 10, 75],
      ['Pear', 9, 8, 8, 76.8],
      ['Apple', 8, 9, 6, 45]
    ];
    sheet.setArray(0, 0, array);

    sheet.setColumnWidth(0, 100);
    let table = sheet.tables.add('Table1', 0, 0, 3, 6, spreadNS.Tables.TableThemes.medium9);
    table.rowFilter().filterButtonVisible();

    table = sheet.tables.add('Table2', 4, 0, 7, 5, spreadNS.Tables.TableThemes.medium9);
    table.rowFilter().filterButtonVisible();

    table = sheet.tables.add('Table3', 12, 0, 5, 6, spreadNS.Tables.TableThemes.medium9);
    table.rowFilter().filterButtonVisible();
    sheet.addSpan(12, 1, 1, 5);
    sheet.setValue(12, 0, 'Formula Result');
    sheet.setValue(12, 1, 'Formula with wildcard');

    sheet.addSpan(13, 1, 1, 5);
    sheet.setValue(13, 1, '=DCOUNT(A4:E10,"Age",A1:F3)');
    sheet.setFormula(13, 0, 'DCOUNT(A4:E10,"Age",A1:F3)');

    sheet.addSpan(14, 1, 1, 5);
    sheet.setValue(14, 1, '=SEARCH("?t", B1)');
    sheet.setFormula(14, 0, 'SEARCH("?t", B1)');

    sheet.addSpan(15, 1, 1, 5);
    sheet.setValue(15, 1, '=VLOOKUP("Ch*",A5:B10,2,0)');
    sheet.setFormula(15, 0, 'VLOOKUP("Ch*",A5:B10,2,0)');

    sheet.addSpan(17, 1, 1, 5);
    sheet.setValue(17, 1, '=COUNTIF(A5:B11,"App?e")');
    sheet.setFormula(17, 0, 'COUNTIF(A5:B11,"App?e")');

    sheet.setValue(18, 1, '=SEARCH("=P~*",A3)');
    sheet.setFormula(18, 0, 'SEARCH("=P~*",A3)');

    spread.resumePaint();
  }

}
