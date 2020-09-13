import {Component} from '@angular/core';
import * as GC from '@grapecity/spread-sheets';

const spreadNS = GC.Spread.Sheets;
const SheetArea = spreadNS.SheetArea;

@Component({
  selector: 'app-row-and-column',
  templateUrl: './row-and-column.component.html',
  styleUrls: ['./row-and-column.component.css']
})
export class RowAndColumnComponent {

  spread: GC.Spread.Sheets.Workbook;
  rowIndex: string;
  columnIndex: string;
  hostStyle = {
    width: 'calc(100% - 280px)',
    height: '100%',
    overflow: 'hidden',
    float: 'left'
  };

  constructor() {
    this.rowIndex = '';
    this.columnIndex = '';
  }

  initSpread($event: any): void {
    let spread = this.spread = $event.spread;
    let sheet = spread.getSheet(0);

    sheet.suspendPaint();
    sheet.setRowCount(2, SheetArea.colHeader);
    sheet.setRowCount(10, SheetArea.viewport);
    sheet.setColumnCount(2, SheetArea.rowHeader);
    sheet.setColumnCount(6, SheetArea.viewport);
    sheet.setRowHeight(4, 0);
    sheet.setColumnWidth(2, 0);
    spread.options.resizeZeroIndicator = spreadNS.ResizeZeroIndicator.enhanced;
    for (let rowIndex = 0; rowIndex <= 9; rowIndex++) {
      sheet.setText(rowIndex, 0, 'Value');
      sheet.setFormula(rowIndex, 1, 'RandBetween(45,85)');
    }
    sheet.resumePaint();
  }

  /*
     * Add a row in viewport area.
     */
  addRow(): void {
    let spread = this.spread;
    let sheet = spread.getActiveSheet();

    if (sheet) {
      sheet.addRows(sheet.getRowCount(SheetArea.viewport), 1);
    }
  }

  /*
  * Delete a row in viewport area.
  */
  addColumn(): void {
    let spread = this.spread;
    let sheet = spread.getActiveSheet();

    if (sheet) {
      sheet.addColumns(sheet.getColumnCount(SheetArea.viewport), 1);
    }
  }

  /*
  * Add a column in viewport area.
  */
  deleteRow(): void {
    let spread = this.spread;
    let sheet = spread.getActiveSheet();

    if (sheet) {
      sheet.deleteRows(sheet.getRowCount(SheetArea.viewport) - 1, 1);
    }
  }

  /*
  * Delete a column in viewport area.
  */
  deleteColumn(): void {
    let spread = this.spread;
    let sheet = spread.getActiveSheet();

    if (sheet) {
      sheet.deleteColumns(sheet.getColumnCount(SheetArea.viewport) - 1, 1);
    }
  }

  setRowIndex($event): void {
    this.rowIndex = $event.target.value;
  }

  setColumnIndex($event): void {
    this.columnIndex = $event.target.value;
  }

  /*
  * Show or hide the specified row.
  */
  checkRowVisble($event): void {
    let spread = this.spread;
    let sheet = spread.getActiveSheet();
    let rowIndex = parseInt(this.rowIndex);

    if (!isNaN(rowIndex)) {
      sheet.setRowVisible(rowIndex, $event.target.checked);
    }
  }

  /*
  * Auto fit or not fit the specified row.
  */
  checkRowAutoFit($event): void {
    let spread = this.spread;
    let sheet = spread.getActiveSheet();
    let rowIndex = parseInt(this.rowIndex);

    if (!isNaN(rowIndex)) {
      let checked = $event.target.checked;

      if (checked) {
        sheet.autoFitRow(rowIndex);
      }
    }
  }

  /*
  * Show or hide the specified column.
  */
  checkColumnVisible($event): void {
    let spread = this.spread;
    let sheet = spread.getActiveSheet();
    let columnIndex = parseInt(this.columnIndex);

    if (!isNaN(columnIndex)) {
      sheet.setColumnVisible(columnIndex, $event.target.checked);
    }
  }

  /*
  * Auto fit or not fit the specified column.
  */
  checkColumnAutoFit($event): void {
    let spread = this.spread;
    let sheet = spread.getActiveSheet();
    let columnIndex = parseInt(this.columnIndex);

    if (!isNaN(columnIndex)) {
      let checked = $event.target.checked;

      if (checked) {
        sheet.autoFitColumn(columnIndex);
      }
    }
  }

  setResizeZeroIndicator($event): void {
    let spread = this.spread;
    spread.options.resizeZeroIndicator = +$event.target.value;
    spread.repaint();
  }

}
