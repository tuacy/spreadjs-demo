import {Component} from '@angular/core';
import {jsonData} from './app.data';
import '@grapecity/spread-sheets-resources-zh';
import * as GC from '@grapecity/spread-sheets';
import * as IOModule from '@grapecity/spread-excelio';
import '@grapecity/spread-sheets-charts';
import {saveAs} from 'file-saver';

GC.Spread.Common.CultureManager.culture('zh-cn');

/**
 * 导入导出
 */
@Component({
  selector: 'app-export-import',
  templateUrl: './export-import.component.html',
  styleUrls: ['./export-import.component.css']
})
export class ExportImportComponent {

  spread: GC.Spread.Sheets.Workbook;
  hostStyle = {
    width: 'calc(100% - 280px)',
    height: '100%',
    overflow: 'hidden',
    float: 'left'
  };
  importExcelFile: any;
  exportFileName = 'export.xlsx';
  password: string;

  constructor() {
  }

  initSpread($event: any): void {
    this.spread = $event.spread;
    let spread = this.spread;
    spread.options.calcOnDemand = true;
    spread.fromJSON(jsonData);
  }

  changeFileDemo(e: any): void {
    this.importExcelFile = e.target.files[0];
  }

  changePassword(e: any): void {
    this.password = e.target.value;
  }

  changeExportFileName(e: any): void {
    this.exportFileName = e.target.value;
  }

  loadExcel(e: any): void {
    let spread = this.spread;
    let excelIo = new IOModule.IO();
    let excelFile = this.importExcelFile;
    let password = this.password;
    // here is excel IO API
    excelIo.open(excelFile, function(json: any) {
      let workbookObj = json;
      spread.fromJSON(workbookObj);
      // tslint:disable-next-line:no-shadowed-variable
    }, function(e: any) {
      // process error
      alert(e.errorMessage);
    }, {password: password});
  }

  saveExcel(e: any): void {
    let spread = this.spread;
    let excelIo = new IOModule.IO();

    let fileName = this.exportFileName;
    let password = this.password;
    if (fileName.substr(-5, 5) !== '.xlsx') {
      fileName += '.xlsx';
    }

    let json: any = spread.toJSON();

    // here is excel IO API
    excelIo.save(json, function(blob: any) {
      saveAs(blob, fileName);
      // tslint:disable-next-line:no-shadowed-variable
    }, function(e: any) {
      // process error
      console.log(e);
    }, {password: password});

  }

}
