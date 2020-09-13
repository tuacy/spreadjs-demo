import {Component} from '@angular/core';
import '@grapecity/spread-sheets-resources-zh';
import * as GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-charts';

GC.Spread.Common.CultureManager.culture('zh-cn');

function _getElementById(id: string): any {
  return document.getElementById(id);
}

const chartType = [
  [{
    typeDesc: 'Clustered Column',
    type: GC.Spread.Sheets.Charts.ChartType.columnClustered
  }, {
    typeDesc: 'Stacked Column',
    type: GC.Spread.Sheets.Charts.ChartType.columnStacked
  }, {
    typeDesc: '100% Stacked Column',
    type: GC.Spread.Sheets.Charts.ChartType.columnStacked100
  }],
  [{
    typeDesc: 'Line',
    type: GC.Spread.Sheets.Charts.ChartType.line
  }, {
    typeDesc: 'Stacked Line',
    type: GC.Spread.Sheets.Charts.ChartType.lineStacked
  }, {
    typeDesc: '100% Stacked Line',
    type: GC.Spread.Sheets.Charts.ChartType.lineStacked100
  }, {
    typeDesc: 'Line With Markers',
    type: GC.Spread.Sheets.Charts.ChartType.lineMarkers
  }, {
    typeDesc: 'Stacked Line With Markers',
    type: GC.Spread.Sheets.Charts.ChartType.lineMarkersStacked
  }, {
    typeDesc: '100% Stacked Line With Markers',
    type: GC.Spread.Sheets.Charts.ChartType.lineMarkersStacked100
  }],
  [{
    typeDesc: 'Pie',
    type: GC.Spread.Sheets.Charts.ChartType.pie
  }, {
    typeDesc: 'Doughnut',
    type: GC.Spread.Sheets.Charts.ChartType.doughnut
  }],
  [{
    typeDesc: 'Clustered Bar',
    type: GC.Spread.Sheets.Charts.ChartType.barClustered
  }, {
    typeDesc: 'Stacked Bar',
    type: GC.Spread.Sheets.Charts.ChartType.barStacked
  }, {
    typeDesc: '100% Stacked Bar',
    type: GC.Spread.Sheets.Charts.ChartType.barStacked100
  }],
  [{
    typeDesc: 'Area',
    type: GC.Spread.Sheets.Charts.ChartType.area
  }, {
    typeDesc: 'Stacked Area',
    type: GC.Spread.Sheets.Charts.ChartType.areaStacked
  }, {
    typeDesc: '100% Stacked Area',
    type: GC.Spread.Sheets.Charts.ChartType.areaStacked100
  }],
  [{
    typeDesc: 'Scatter',
    type: GC.Spread.Sheets.Charts.ChartType.xyScatter
  }, {
    typeDesc: 'Scatter With Smooth Lines And Markers',
    type: GC.Spread.Sheets.Charts.ChartType.xyScatterSmooth
  }, {
    typeDesc: 'Scatter With Smooth Lines',
    type: GC.Spread.Sheets.Charts.ChartType.xyScatterSmoothNoMarkers
  }, {
    typeDesc: 'Scatter With Straight Lines And Markers',
    type: GC.Spread.Sheets.Charts.ChartType.xyScatterLines
  }, {
    typeDesc: 'Scatter With Straight Lines',
    type: GC.Spread.Sheets.Charts.ChartType.xyScatterLinesNoMarkers
  }, {
    typeDesc: 'Bubble',
    type: GC.Spread.Sheets.Charts.ChartType.bubble
  }],
  [{
    typeDesc: 'High-Low-Close',
    type: GC.Spread.Sheets.Charts.ChartType.stockHLC
  }, {
    typeDesc: 'Open-High-Low-Close',
    type: GC.Spread.Sheets.Charts.ChartType.stockOHLC
  }, {
    typeDesc: 'Volume-High-Low-Close',
    type: GC.Spread.Sheets.Charts.ChartType.stockVHLC
  }, {
    typeDesc: 'Volume-Open-High-Low-Close',
    type: GC.Spread.Sheets.Charts.ChartType.stockVOHLC
  }]
];

/**
 * 基本应用
 */
@Component({
  selector: 'app-basic-application',
  templateUrl: './basic-application.component.html',
  styleUrls: ['./basic-application.component.css']
})
export class BasicApplicationComponent {

  groupType = '0';
  chartType = '0';
  displayBlanksAs = '1';
  displayNaNAsBlank = false;
  ignoreHidden = false;
  spread: GC.Spread.Sheets.Workbook;
  hostStyle = {
    width: 'calc(100% - 280px)',
    height: '100%',
    overflow: 'hidden',
    float: 'left'
  };


  initSpread($event: any): void {
    this.spread = $event.spread;
    let spread = this.spread;
    spread.suspendPaint();
    spread.setSheetCount(2);
    let sheet1 = spread.getSheet(0);
    sheet1.name('Common Chart');
    let sheet2 = spread.getSheet(1);
    sheet2.name('Custom Chart');
    this.initSheet(sheet1);
    this.initSheet(sheet2);
    // add chart
    this.initChart(sheet1);
    this.initChart(sheet2);
    // custom chart
    this.customChartStyle(sheet2);
    spread.resumePaint();
    this.changeTypeSelect();
  }

  initSheet(sheet: GC.Spread.Sheets.Worksheet): void {
    sheet.suspendPaint();
    // prepare data for chart
    let dataArray = [
      ['', 'Chrome', 'FireFox', 'IE', 'Safari', 'Edge', 'Opera', 'Other'],
      ['2015', 0.5651, 0.1734, 0.1711, 0.427, 0, 0.184, 0.293],
      ['2016', 0.6230, 0.1531, 0.1073, 0.464, 0.311, 0.166, 0.225],
      ['2017', 0.6360, 0.1304, 0.834, 0.589, 0.443, 0.223, 0.246]
    ];
    sheet.setArray(0, 0, dataArray);
    sheet.resumePaint();
  }

  initChart(sheet: GC.Spread.Sheets.Worksheet): void {
    // add common chart
    sheet.charts.add('Chart1', GC.Spread.Sheets.Charts.ChartType.columnClustered, 0, 100, 800, 300, 'A1:H4');
  }

  customChartStyle(sheet: GC.Spread.Sheets.Worksheet): void {
    let changeChart = sheet.charts.all()[0];
    this.changeChartStyle(changeChart);
  }

  changeChartStyle(chart: GC.Spread.Sheets.Charts.Chart): void {
    // change orientation
    this.switchOrientation(chart);
    // change legend
    this.changeChartLegend(chart);
    // change chartArea
    this.changeChartArea(chart);
    // change chartTitle
    this.changeChartTitle(chart);
    // change dataLabels
    this.changeChartDataLabels(chart);
    // change axisTitles
    this.changeChartAxisTitles(chart);
    // change axesLine
    this.changeChartAxesLine(chart);
    // change series
    this.changeSeries(chart);
    // change gridLine
    this.changeGridLine(chart);
    // change seriesBorder
    this.changeSeriesBorder(chart);
  }

  switchOrientation(chart: GC.Spread.Sheets.Charts.Chart): void {
    chart.switchDataOrientation();
  }

  changeChartLegend(chart: GC.Spread.Sheets.Charts.Chart): void {
    let legend = chart.legend();
    legend.visible = true;
    let legendPosition = GC.Spread.Sheets.Charts.LegendPosition;
    legend.position = legendPosition.top;
    chart.legend(legend);
  }

  changeChartArea(chart: GC.Spread.Sheets.Charts.Chart): void {
    let chartArea = chart.chartArea();
    chartArea.backColor = 'rgba(93,93,93,1)';
    chartArea.color = 'rgba(255,255,255,1)';
    chartArea.fontSize = 14;
    chart.chartArea(chartArea);
  }

  changeChartTitle(chart: GC.Spread.Sheets.Charts.Chart): void {
    let title = chart.title();
    title.text = 'Browser Market Share';
    title.fontSize = 18;
    chart.title(title);
  }

  changeChartDataLabels(chart: GC.Spread.Sheets.Charts.Chart): void {
    let dataLabels = chart.dataLabels();
    dataLabels.showValue = true;
    dataLabels.showSeriesName = false;
    dataLabels.showCategoryName = false;
    dataLabels.format = '0.00%';
    let dataLabelPosition = GC.Spread.Sheets.Charts.DataLabelPosition;
    dataLabels.position = dataLabelPosition.outsideEnd;
    chart.dataLabels(dataLabels);
    let series0 = chart.series().get(0);
    series0.dataLabels = {
      showSeriesName: true,
      showCategoryName: true,
      separator: ';',
      position: GC.Spread.Sheets.Charts.DataLabelPosition.center,
      color: 'red',
      backColor: 'white',
      borderColor: 'blue',
      borderWidth: 2
    };
    chart.series().set(0, series0);

    let series2 = chart.series().get(2);
    series2.dataLabels = {
      showSeriesName: true,
      separator: '/',
      position: GC.Spread.Sheets.Charts.DataLabelPosition.insideEnd,
      color: 'yellow',
      backColor: 'white',
      borderColor: 'green',
      borderWidth: 1
    };
    chart.series().set(2, series2);

    let series4 = chart.series().get(4);
    series4.dataLabels = {
      showCategoryName: true,
      separator: ':',
      position: GC.Spread.Sheets.Charts.DataLabelPosition.above,
      color: 'blue',
      backColor: 'white',
      borderColor: 'red',
      borderWidth: 2.5
    };
    chart.series().set(4, series4);
  }

  changeChartAxisTitles(chart: GC.Spread.Sheets.Charts.Chart): void {
    let axes = chart.axes();
    axes.primaryCategory.title.text = 'Year';
    axes.primaryCategory.title.fontSize = 14;
    chart.axes(axes);
  }

  changeChartAxesLine(chart: GC.Spread.Sheets.Charts.Chart): void {
    let axes = chart.axes();
    axes.primaryValue.format = '0%';
    chart.axes(axes);
  }

  changeSeries(chart: GC.Spread.Sheets.Charts.Chart): void {
    let series = chart.series();
    let seriesItem = series.get(6);
    seriesItem.backColor = '#a3cf62';
    series.set(6, seriesItem);
  }

  changeGridLine(chart: GC.Spread.Sheets.Charts.Chart): void {
    let axes = chart.axes();
    axes.primaryCategory.majorGridLine.visible = false;
    axes.primaryValue.majorGridLine.visible = false;
    chart.axes(axes);
  }

  changeSeriesBorder(chart: GC.Spread.Sheets.Charts.Chart): void {
    let series = chart.series().get();
    for (let i = 0; i < series.length; i++) {
      let seriesItem = series[i];
      seriesItem.border.color = 'rgb(255,255,255)';
      seriesItem.border.width = 1;
      chart.series().set(i, seriesItem);
    }
  }

  getActiveChart(sheet: GC.Spread.Sheets.Worksheet): GC.Spread.Sheets.Charts.Chart | null {
    let activeChart = null;
    // tslint:disable-next-line:typedef
    sheet.charts.all().forEach(function(chart: GC.Spread.Sheets.Charts.Chart) {
      if (chart.isSelected()) {
        activeChart = chart;
      }
    });
    return activeChart;
  }

  judgeIsEmptyOneCell(sheet: GC.Spread.Sheets.Worksheet, range: GC.Spread.Sheets.Range): boolean {
    if (range && range.rowCount === 1 && range.colCount === 1) {
      let cell = sheet.getCell(range.row, range.col);
      if (!cell.text()) {
        return true;
      }
    }
    return false;
  }

  changeTypeSelect(e?: any): void {
    // tslint:disable-next-line:radix
    let index = parseInt(this.groupType || '0');
    if (index !== null && index !== undefined && index < chartType.length) {
      _getElementById('typeSelect').innerHTML = '';
      let typeArray = chartType[index];
      for (let i = 0; i < typeArray.length; i++) {
        let item = typeArray[i];
        let option = document.createElement('option');
        let value: any = document.createAttribute('value');
        value.nodeValue = i;
        option.setAttributeNode(value);
        option.innerHTML = item.typeDesc;
        _getElementById('typeSelect').appendChild(option);
      }
    }
  }

  insertChart(): void {
    let activeSheet = this.spread.getActiveSheet();
    let dataRange = activeSheet.getSelections()[0];
    if (!this.judgeIsEmptyOneCell(activeSheet, dataRange)) {
      let rangeToFormula = GC.Spread.Sheets.CalcEngine.rangeToFormula;
      let dataFormula = rangeToFormula(dataRange);
      // tslint:disable-next-line:radix
      let groupIndex = parseInt(this.groupType);
      // tslint:disable-next-line:radix
      let typeIndex = parseInt(this.chartType);
      if (groupIndex < chartType.length) {
        let typeArray = chartType[groupIndex];
        if (typeIndex < typeArray.length) {
          let type = typeArray[typeIndex].type;
          try {
            activeSheet.charts.add('', type, 30, 120, 500, 300, dataFormula, GC.Spread.Sheets.Charts.RowCol.rows);
          } catch (e) {
            alert(e.message);
          }
        }
      }
    }
  }

  switchRowColumn(): void {
    let activeSheet = this.spread.getActiveSheet();
    let activeChart = this.getActiveChart(activeSheet);
    if (activeChart) {
      let isSwitched = activeChart.switchDataOrientation();
      if (!isSwitched) {
        alert('\'Can\'t switch row/column');
      }
    }
  }

  removeChart(): void {
    let activeSheet = this.spread.getActiveSheet();
    let activeChart = this.getActiveChart(activeSheet);
    if (activeChart) {
      activeSheet.charts.remove(activeChart.name());
    }
  }

  removeAllChart(): void {
    let activeSheet = this.spread.getActiveSheet();
    activeSheet.charts.clear();
  }

  ignoreHiddenRowAndColumn(): void {
    let activeSheet = this.spread.getActiveSheet();
    let activeChart = this.getActiveChart(activeSheet);
    // tslint:disable-next-line:no-unused-expression
    activeChart && activeChart.ignoreHidden(this.ignoreHidden);
  }

  displayBlanksCells(): void {
    let activeSheet = this.spread.getActiveSheet();
    let activeChart = this.getActiveChart(activeSheet);
    let index = parseInt(this.displayBlanksAs, 10);
    if (index !== null && index !== undefined) {
      if (activeChart != null) {
        activeChart.displayBlanksAs(index);
      }
    }
  }

  showNAAsBlanks(): void {
    let activeSheet = this.spread.getActiveSheet();
    let activeChart = this.getActiveChart(activeSheet);
    if (activeChart != null) {
      activeChart.displayNaAsBlank(this.displayNaNAsBlank);
    }
  }
}
