import {Component} from '@angular/core';
import {getData} from './app.data';
import * as GC from '@grapecity/spread-sheets';

/**
 * spread表单
 */
@Component({
  selector: 'app-spread-form',
  templateUrl: './spread-form.component.html',
  styleUrls: ['./spread-form.component.css']
})
export class SpreadFormComponent {

  autoGenerateColumns = false;
  activeSheetIndex = 0;
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

  /**
   * spread初始化回调
   * @param $event 参数
   */
  initSpread($event: any): void {
    this.spread = $event.spread;
    let spread = this.spread;
    spread.suspendPaint();
    let spreadNS = GC.Spread.Sheets;
    spread.setSheetCount(3);
    let self = this;
    spread.bind(spreadNS.Events.ActiveSheetChanged, function(e: any, args: any) {
      self.activeSheetIndex = spread.getActiveSheetIndex();
    });
    spread.resumePaint();
  }

  /**
   * 添加sheet
   */
  addSheet(): void {
    this.spread.addSheet(this.spread.getSheetCount());
  }

  /**
   * 移除掉一个sheet，移除当前选中的sheet
   */
  removeSheet(): void {
    const activeIndex = this.spread.getActiveSheetIndex();
    if (activeIndex >= 0) {
      this.spread.removeSheet(activeIndex);
    }
  }

  /**
   * 清空sheet,所有的sheet都会清除掉
   */
  clearSheets(): void {
    this.spread.clearSheets();
  }

  /**
   * 设置当前活动的sheet。注意下标从0开始
   */
  changeActiveSheetIndex(e: any): void {
    this.activeSheetIndex = parseInt(e.target.value);
  }

  setActiveSheetIndex(): void {
    let spread = this.spread;
    let index = this.activeSheetIndex;
    if (!isNaN(index)) {
      index = parseInt(<any> index);
      if (0 <= index && index < spread.getSheetCount()) {
        spread.setActiveSheetIndex(index);
      }
    }
  }

}
