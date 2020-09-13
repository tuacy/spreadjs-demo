import {Component} from '@angular/core';
import * as GC from '@grapecity/spread-sheets';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent {

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
    let salesData = [
      ['SalesPers', 'Birth', 'Region', 'SaleAmt', 'ComPct', 'ComAmt'],
      ['Joe', new Date('2000/01/23'), 'North', 260, 0.1, 26],
      ['Robert', new Date('1988/08/21'), 'South', 660, 0.15, 99],
      ['Michelle', new Date('1995/08/03'), 'East', 940, 0.15, 141],
      ['Erich', new Date('1994/05/23'), 'West', '', 0, 49.2],
      ['Dafna', new Date('1992/07/21'), 'North', 800, 0.15, 120],
      ['Rob', new Date('1995/11/03'), 'South', 900, 0.15, 135],
      ['Jonason', new Date('1987/02/11'), 'West', 300, 0.17, 110],
      ['Enana', new Date('1997/04/01'), 'West', 310, 0.16, 99.2],
      ['Robin', new Date('1991/12/28'), 'East', 450, 0.18, 35],
      ['Dania', new Date('1997/02/15'), 'North', 500, 0.10, 76]
    ];
    let sheet = spread.getSheet(0);
    sheet.suspendPaint();
    sheet.setArray(8, 1, salesData);
    sheet.setFormula(12, 6, '=E13*F13');

    let filter = new GC.Spread.Sheets.Filter.HideRowFilter(new GC.Spread.Sheets.Range(9, 1, salesData.length - 1, salesData[0].length));
    sheet.rowFilter(filter);
    let condition = new GC.Spread.Sheets.ConditionalFormatting.Condition(GC.Spread.Sheets.ConditionalFormatting.ConditionType.textCondition,
      {
        compareType: GC.Spread.Sheets.ConditionalFormatting.TextCompareType.contains,
        expected: 'th'
      }
    );
    // 筛选出col3里面包含th的
    filter.addFilterItem(3, condition);
    filter.filter(3);

    sheet.setText(0, 2, 'Filter the data and check the formula result changes.');
    sheet.setArray(2, 2, [['Ignore hidden rows', 'SUM ComAmt'], ['', 'MAX ComAmt'], ['', ''], ['Ignore error', 'SUM ComAmt'], ['', 'MAX ComAmt']]);

    sheet.setFormula(2, 4, '=AGGREGATE(9,5,G10:G19)');
    sheet.setFormula(3, 4, '=AGGREGATE(14,5,G10:G19, 1)');
    sheet.setFormula(5, 4, '=AGGREGATE(9,6,G10:G19)');
    sheet.setFormula(6, 4, '=AGGREGATE(14,6,G10:G19, 1)');

    sheet.setFormula(2, 5, '=FORMULATEXT(E3)');
    sheet.setFormula(3, 5, '=FORMULATEXT(E4)');
    sheet.setFormula(5, 5, '=FORMULATEXT(E6)');
    sheet.setFormula(6, 5, '=FORMULATEXT(E7)');

    this.initStyle(sheet);
    sheet.resumePaint();
  }

  initStyle(sheet: GC.Spread.Sheets.Worksheet): void {
    sheet.defaults.colWidth = 100;
    sheet.setColumnWidth(2, 140);
    sheet.getRange(9, 2, 10, 1).formatter('yyyy/mm/dd');

    sheet.addSpan(2, 2, 2, 1);
    sheet.addSpan(5, 2, 2, 1);

    let lineStyle = GC.Spread.Sheets.LineStyle.thin;
    let sheetArea = GC.Spread.Sheets.SheetArea.viewport;
    let lineBorder = new GC.Spread.Sheets.LineBorder('orange', lineStyle);
    sheet.getRange(0, 2, 1, 3).setBorder(lineBorder, {outline: true});

    lineBorder = new GC.Spread.Sheets.LineBorder('red', lineStyle);
    sheet.getRange(2, 2, 2, 5).setBorder(lineBorder, {outline: true});

    lineBorder = new GC.Spread.Sheets.LineBorder('green', lineStyle);
    sheet.getRange(5, 2, 2, 5).setBorder(lineBorder, {outline: true});

    lineBorder = new GC.Spread.Sheets.LineBorder('blue', lineStyle);
    sheet.getRange(8, 1, 11, 6).setBorder(lineBorder, {outline: true});

  }

}
