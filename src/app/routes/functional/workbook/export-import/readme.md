使用前端导入导出, 你需要将相关的js文件添加的document的head区域。例如:

```
<head>
   ...
   <script src='.../gc.spread.sheets.all.x.x.x.min.js' type='text/javascript'></script>
   <script src='.../interop/gc.spread.excelio.x.x.x.min.js' type='text/javascript'></script>
</head>
```

初始化Workbook实例和ExcelIO实例。

```js
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'));
    var excelIo = new GC.Spread.Excel.IO();
```

接下来你就可以使用**open**方法将excel文件导入为spread json，使用 **save** 方法将spread json导出为excel文件。

例如:

```js
    //import excel file to SpreadJS json
    excelIo.open(excelFile, function (json) {
        var workbookObj = json;
        workbook.fromJSON(workbookObj);
    }, function (e) {
        // process error
        console.log(e);
    });
    //export SpreadJS json to excel file
    excelio.save(json, function (blob) {
        //do whatever you want with blob
        //such as you can save it
    }, function (e) {
        //process error
        console.log(e);
    });
```

同时，你还打开或保存一个带有密码保护的excel文件，只需要在**open**和**save**方法中传入参数**options{password:xxxx}**即可。例如:

```js
    //import excel file to SpreadJS json
    excelIo.open(excelFile, function (json) {
        var workbookObj = json;
        workbook.fromJSON(workbookObj);
    }, function (e) {
        // process error
        console.log(e);
    },{password:xxxx});
    //export SpreadJS json to excel file
    excelio.save(json, function (blob) {
        //do whatever you want with blob
        //such as you can save it
    }, function (e) {
        //process error
        console.log(e);
    },{password:xxxx});
```

为了提高文件导入的速度，你可以使用**calcOnDemand**属性来指定是否仅在需要时才计算公式。例如:

```js
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), {calcOnDemand: false});
    var excelIo = new GC.Spread.Excel.IO();
```

ExcelIO导出时保存工作表的滚动位置。下次打开工作簿时，会自动滚动到上次的位置。

这实际上记录了工作表的左上方单元格。例如，如果保存工作簿时左上角的单元格是A22，则再次打开工作表时，该表将自动滚动以使该单元格位于左上角。

这在用户编辑大型工作簿时尤其有用。当重新打开工作簿后，他们不必一直滚动回到他们上次编辑的位置，而是可以从停下来的地方继续工作。