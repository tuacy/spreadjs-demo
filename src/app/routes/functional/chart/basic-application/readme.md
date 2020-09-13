使用最受欢迎的电子表格图标来可视化你的数据，支持图标的类型包括柱状图，折线图，饼状图，面积图，条形图，XY散点图，股票图，组合图，雷达图，旭日图，树状图以及对趋势线，误差线以及其他自定义选项的额外支持。图表也可以从Excel文件导入或者导出到Excel文件。

如果你需要使用图表功能，你需要添加图表的 JS 文件引用到页面的头部，并且放置在Spread Sheets的引用之后。例如：

```javascript
<head>

       <script src='.../spreadjs/gc.spread.sheets.all.x.x.x.min.js' type='text/javascript'></script>
       <script src='.../spreadjs/plugins/gc.spread.sheets.chart.x.x.x.min.js' type='text/javascript'></script>
              
</head>

```

然后你就可以通过调用 **sheet.charts.add** 方法来创建图表。例如:

```typescript
sheet.charts.add('Chart1', GC.Spread.Sheets.Charts.ChartType.columnClustered, 0, 100, 400, 300, "A1:D4");
```



你可以通过 **sheet.charts.get** 方法来获取一个图表的实例，通过 **sheet.charts.remove** 方法来移除sheet上的一个图表，也可以通过 **sheet.charts.clear** 方法来清空sheet上的所有chart。



```typescript
    var chart = sheet.charts.all()[index ?]; // get chart by index
    var chart1 = sheet.charts.get('Chart1') // get chart by name
    sheet.charts.remove("Chart1");
    sheet.charts.clear();
```

一个图表是由许多子元素构成的， 你可以通过chart的API来自定义它们:

**Chart Title**: chart的标题

你可以通过如下方式来获取或者设置一个chart的标题 (标题可设置的属性包括:text, back color, fore color, font and fontSize)

```js
var title = chart.title();
    title.text = "Sample";
    title.fontFamily = "Calibri Light";
    chart.title(title);
```

**Series**: chart的系列

你可以从chart的series collection中获取、添加或者移除一个系列, 也可以自定义一个系列的属性 (系列可设置的属性包括：name, border width, border color, yValue, xValue and fill color)，具体请参照如下的示例代码：

```js
var series = chart.series();
    var seriesItem = series.get(index ?);
    chart.series.remove(index ?);
    chart.series.add(seriesItem);
    seriesItem.name = "Sheet1!$G$1";
    seriesItem.yValues = "Sheet1!$G$2:$G$4";
    seriesItem.backColor = "#f15253";
    seriesItem.border.width = 2;
    series.set(index ?, seriesItem);
```

**Data Labels**: 数据标签，用于标识数据点的详情

你可以通过如下方式来获取或者设置一个chart的数据标签的样式

- **showValue**
- **showSeriesName**
- **showCategoryName**
- **showPercentage**
- **separator**
- **position**
- **format**
- **color**
- **transparency**
- **backColor**
- **backColorTransparency**
- **borderColor**
- **borderWidth**
- **borderColorTransparency**

```js
var dataLabels = chart.dataLabels();
    dataLabels.showValue = true;
    dataLabels.showSeriesName = false;
    dataLabels.showCategoryName = false;
    var dataLabelPosition = GC.Spread.Sheets.Charts.DataLabelPosition;
    dataLabels.position = dataLabelPosition.outsideEnd; // this position contains many options, different chart type applies different position value
    chart.series().set(1,dataLabels);
```

SpreadJS 提供了28种chart类型，你可以获取当前chart的类型或者将它改为另一个不同的类型。

```js
var chartType = chart.chartType();
```

SpreadJS 图表支持对于空值单元格或#N/A值单元格的控制处理，如下。

- **gaps: 空值将被过滤**
- **zero: 空值将被当做0值处理**
- **connected: 空值将被过滤并且线形将跳过空值区域**

```js
    chart.displayBlanksAs(GC.Spread.Sheets.Charts.DisplayBlanksAs.gaps);
    chart.displayNaAsBlank(true);
```

SpreadJS 图表支持对于隐藏行列的控制处理，如下。

```js
    chart.ignoreHidden(false);
```

SpreadJS 支持导入时保留或者忽略不受支持的图标类型

```js
    sheet.charts.preserveUnsupportedChart(true, function(chart, chartHost) {
      var paintElement= document.createElement('div');
      var type= chart.chartType();
      paintElement.innerHTML = 'Unsupported Chart Type:' + type;
      chartHost.appendChild(paintElement);
    })
```