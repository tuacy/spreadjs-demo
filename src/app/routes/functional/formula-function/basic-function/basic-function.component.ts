import {Component} from '@angular/core';

import * as GC from '@grapecity/spread-sheets';

/**
 * 基本函数
 */
@Component({
  selector: 'app-basic-function',
  templateUrl: './basic-function.component.html',
  styleUrls: ['./basic-function.component.css']
})
export class BasicFunctionComponent {

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
    let sheet = spread.getActiveSheet();
    spread.suspendPaint();
    let data = [
      ['Math - Grade 5'],
      ['Assignments'],
      ['Student', 1, 2, 3, 4, 5, , 'Avg. Score'],
      ['Anna Mull', 76, 52, 91, 87, 98],
      ['Anna Sthesia', 95, 95, 94, 98, 95],
      ['Barb Ackue', 86, 83, 84, 89, 90],
      ['Barb Dwyer', 59, 40, 60, 20, 66],
      ['Barry Wine', 75, 55, 64, 76, 89],
      ['Bob Frapples', 91, 80, 72, 98, 95],
      ['Brock Lee', 86, 77, 89, 76, 70],
      ['Buck Kinnear', 100, 95, 94, 92, 91],
      ['Cliff Hanger', 97, 98, 99, 81, 89],
      ['Cory Ander', 53, 69, 93, 60, 95],
      [''],
      ['Average Score:'],
      ['Highest Score:'],
      ['Lowest Score:'],
      ['Median Score:'],
    ];
    let formulasR = [
      ['=AVERAGE(C4:G4)'],
      ['=AVERAGE(C5:G5)'],
      ['=AVERAGE(C6:G6)'],
      ['=AVERAGE(C7:G7)'],
      ['=AVERAGE(C8:G8)'],
      ['=AVERAGE(C9:G9)'],
      ['=AVERAGE(C10:G10)'],
      ['=AVERAGE(C11:G11)'],
      ['=AVERAGE(C12:G12)'],
      ['=AVERAGE(C13:G13)']
    ];
    let formulasB = [
      ['=AVERAGE(C4:C13)', '=AVERAGE(D4:D13)', '=AVERAGE(E4:E13)', '=AVERAGE(F4:F13)', '=AVERAGE(G4:G13)'],
      ['=MAX(C4:C13)', '=MAX(D4:D13)', '=MAX(E4:E13)', '=MAX(F4:F13)', '=MAX(G4:G13)'],
      ['=MIN(C4:C13)', '=MIN(D4:D13)', '=MIN(E4:E13)', '=MIN(F4:F13)', '=MIN(G4:G13)'],
      ['=MEDIAN(C4:C13)', '=MEDIAN(D4:D13)', '=MEDIAN(E4:E13)', '=MEDIAN(F4:F13)', '=MEDIAN(G4:G13)'],
    ];
    sheet.setArray(0, 1, data);
    sheet.setArray(3, 8, formulasR, true);
    sheet.setArray(14, 2, formulasB, true);
    sheet.setRowHeight(0, 40);
    sheet.getCell(0, 1).font('Bold 19px Arial').vAlign(spreadNS.VerticalAlign.center);

    sheet.addSpan(1, 1, 1, 8);
    sheet.getCell(1, 1).font('Bold 13px Arial')
      .hAlign(spreadNS.HorizontalAlign.center)
      .backColor('rgb(56,83,145')
      .foreColor('white')
      .vAlign(spreadNS.VerticalAlign.center);

    sheet.getRange(2, 1, 1, 8).font('Bold 13px Arial')
      .backColor('rgb(219,225,240)')
      .vAlign(spreadNS.VerticalAlign.center)
      .borderBottom(new spreadNS.LineBorder('black', spreadNS.LineStyle.thin));
    sheet.getCell(2, 8).hAlign(spreadNS.HorizontalAlign.right).backColor('rgb(184,198,228)');

    sheet.getRange(3, 1, 10, 8).font('12px Arial');

    sheet.getRange(14, 1, 4, 8).backColor('rgb(230,230,230)');
    sheet.getRange(14, 1, 4, 1).font('Bold 12px Arial').hAlign(spreadNS.HorizontalAlign.right);
    // tslint:disable-next-line:typedef
    [110, 70, 70, 70, 70, 70, 10, 80].forEach(function(val, index) {
      sheet.setColumnWidth(index + 1, val);
    });

    sheet.conditionalFormats.add3ScaleRule(
      spreadNS.ConditionalFormatting.ScaleValueType.lowestValue, null, 'rgb(231,114,111)',
      spreadNS.ConditionalFormatting.ScaleValueType.percentile, 50, 'rgb(252,252,255)',
      spreadNS.ConditionalFormatting.ScaleValueType.highestValue, null, 'rgb(122,188,129)',
      [new GC.Spread.Sheets.Range(3, 8, 10, 1)]);

    spread.resumePaint();

    this.initExcel2010(spread);
  }

  initExcel2010(spread: GC.Spread.Sheets.Workbook): void {
    let spreadNS = GC.Spread.Sheets;
    let sheet = spread.getSheet(1);
    sheet.name('Excel 2010 Functions');

    sheet.setColumnWidth(0, 200);
    sheet.setColumnWidth(1, 400);
    sheet.setColumnWidth(2, 80);
    sheet.getRange(-1, 0, -1, 1).wordWrap(true);
    sheet.getRange(-1, 1, -1, 1).wordWrap(true);

    let data = [
      ['Formula', 'Description', 'Result'],
      ['=BETA.DIST(2,8,10,TRUE,1,3)', 'Cumulative beta probability density function'],
      ['=BETA.DIST(2,8,10,FALSE,1,3)', 'Beta probability density function'],
      ['=CEILING.PRECISE(4.3)', 'Rounds 4.3 up to the nearest multiple of 1.'],
      ['=CEILING.PRECISE(-4.3)', 'Rounds -4.3 up to the nearest multiple of 1. Rounds toward 0 because the number is negative.'],
      ['=CEILING.PRECISE(4.3, 2)', 'Rounds 4.3 up to the nearest multiple of 2.'],
      ['=CHISQ.DIST(0.5,1,TRUE)', 'The chi-squared distribution for 0.5, returned as the cumulative distribution function, using 1 degree of freedom.'],
      ['=CHISQ.DIST(2,3,FALSE)', 'The chi-squared distribution for 2, returned as the probability density function, using 3 degrees of freedom.'],
      ['=CHISQ.INV(0.93,1)', 'Inverse of the left-tailed probability of the chi-squared distribution for 0.93, using 1 degree of freedom.'],
      ['=CHISQ.INV(0.6,2)', 'Inverse of the left-tailed probability of the chi-squared distribution for 0.6, using 2 degrees of freedom.'],
      ['=CONFIDENCE.T(0.05,1,50)', 'Confidence interval for the mean of a population based on a sample size of 50, with a 5% significance level and a standard deviation of 1. This is based on a Student\'s t-distribution.'],
      ['=COVARIANCE.S({2,4,8},{5,8,11})', 'Sample covariance for the data points entered as an array in the function.'],
      ['=ERF.PRECISE(0.74500)', 'Error function integrated between 0 and 0.74500 (0.707929)'],
      ['=ERFC.PRECISE(0.74500)', 'Complementary ERF function of 0.74500.'],
      ['=F.DIST(15.2069,6,4,TRUE)', 'F probability using the cumulative distribution function (TRUE cumulative argument).'],
      ['=F.DIST(15.2069,6,4,FALSE)', 'F probability using the probability density function (FALSE cumulative argument).'],
      ['=F.INV(0.01,6,4)', 'Inverse of the F probability distribution.'],
      ['=FLOOR.PRECISE(-3.2)', 'Rounds -3.2 down to the nearest multiple of -1'],
      ['=FLOOR.PRECISE(3.2)', 'Rounds 3.2 down to the nearest multiple of 1'],
      ['=FLOOR.PRECISE(3.2, 2)', 'Rounds 3.2 down to the nearest multiple of 2'],
      ['=GAMMALN.PRECISE(4)', 'Natural logarithm of the gamma function at 4'],
      ['=HYPGEOM.DIST(1,4,8,20,TRUE)', 'Cumulative hypergeometric distribution function.'],
      ['=HYPGEOM.DIST(1,4,8,20,FALSE)', 'Probability hypergeometric distribution function.'],
      ['=ISO.CEILING(4.3)', 'Rounds 4.3 up to nearest multiple of 1'],
      ['=ISO.CEILING(-4.3)', 'Rounds -4.3 up to nearest multiple of 1'],
      ['=ISO.CEILING(4.3, 2)', 'Rounds 4.3 up to the nearest multiple of 2'],
      ['=LOGNORM.DIST(4,3.5,1.2,TRUE)', 'Cumulative lognormal distribution at 4.'],
      ['=LOGNORM.DIST(4,3.5,1.2,FALSE)', 'Probability lognormal distribution at 4.'],
      ['=NEGBINOM.DIST(10,5,0.25,TRUE)', 'Cumulative negative binomial distribution.'],
      ['=NEGBINOM.DIST(10,5,0.25,FALSE)', 'Probability negative binomial distribution.'],
      ['=NETWORKDAYS.INTL(DATE(2006,1,1),DATE(2006,1,31))', 'Results in 22 future workdays. Subtracts 9 nonworking weekend days (5 Saturdays and 4 Sundays) from the 31 total days between the two dates. By default, Saturday and Sunday are considered non-working days.'],
      ['=NETWORKDAYS.INTL(DATE(2006,2,28),DATE(2006,1,31))', 'Results in -21, which is 21 workdays in the past.'],
      ['=NETWORKDAYS.INTL(DATE(2006,1,1),DATE(2006,2,1),7,{"2006/1/2","2006/1/16"})', 'Results in 22 future workdays by sutracting 10 nonworking days (4 Fridays, 4 Saturdays, 2 Holidays) from the 32 days between Jan 1 2006 and Feb 1 2006. Uses the 7 argument for weekend, which is Friday and Saturday. There are also two holidays in this time period.'],
      ['=NETWORKDAYS.INTL(DATE(2006,1,1),DATE(2006,2,1),"0010001",{"2006/1/2","2006/1/16"})', 'Results in 20 future workdays. Same time period as above, but with Sunday and Wednesday as weekend days.'],
      ['=NORM.S.DIST(1.333333,TRUE)', 'Normal cumulative distribution function at 1.333333.'],
      ['=NORM.S.DIST(1.333333,FALSE)', 'Normal probability distribution function at 1.333333.'],
      ['=PERCENTRANK.EXC({1,2,3,4,6,6,7,8,9}, 7)', 'Returns the rank of the value 7 from the array.'],
      ['=PERCENTRANK.EXC({1,2,3,4,6,6,7,8,9}, 5.43)', 'Returns the rank of the value 5.43 in the array.'],
      ['=PERCENTRANK.EXC({1,2,3,4,6,6,7,8,9}, 5.43, 1)', 'Returns the rank of the value 5.43 in the array, displaying only 1 significant digit in the result (the default is 3).'],
      ['=PERCENTILE.EXC({1,2,3,4,5,6}, 0.25)', 'Interpolates when the value for the specified percentile lies between two values in the array.'],
      ['=QUARTILE.EXC({1,2,3,4,5,6,7,8,9,10,11},1)', 'Locates the position of the first quartile (3).'],
      ['=QUARTILE.EXC({1,2,3,4,5,6,7,8,9,10,11},3)', 'Locates the position of the third quartile (9).'],
      ['=RANK.AVG(95, {89, 88, 92, 101, 94, 97, 95})', 'Finds the rank (the position) of the value 95 in the array (descending order). In this case, 95 was the 3rd one in descending order.'],
      ['=RANK.AVG(95, {89, 88, 92, 101, 94, 97, 95}, 1)', 'Finds the rank (the position) of the value 95 in the array (ascending order). In this case, 95 was the 5th one in ascending order.'],
      ['=T.DIST(60,1,TRUE)', 'Student\'s left-tailed t-distribution for 60, returned as the cumulative distribution function, using 1 degree of freedom.'],
      ['=T.DIST(8,3,FALSE)', 'Student\'s left-tailed t-distribution for 8, returned as the probability density function, using 3 degrees of freedom.'],
      ['=T.INV(0.05464,60)', 'The t-value of the Student\'s t-distribution based on specified arguments.'],
      ['=WORKDAY.INTL(DATE(2012,1,1),30,0)', 'Using a 0 for the Weekend argument results in a #NUM! error.'],
      ['=WORKDAY.INTL(DATE(2012,1,1),90,11)', 'Finds the date 90 workdays from 1/1/2012, counting only Sundays as a weekend day (Weekend argument is 11).'],
      ['=TEXT(WORKDAY.INTL(DATE(2012,1,1),30,17), "m/dd/yyyy")', 'Uses the TEXT function to format the resulting serial number (40944) in a "m/dd/yyyy" format. Finds the date 30 workdays from 1/1/2012, counting only Saturdays as a weekend day (Weekend argument is 17).']
    ];

    sheet.setArray(0, 0, data, false);
    let r;
    let i;
    let len = data.length;
    for (r = 1; r < len; r++) {
      sheet.setFormula(r, 2, data[r][0]);
    }

    let arrayFormulaData: [string, string, number, number?][] = [
      ['=MODE.MULT({1,2,3,4,3,2,1,2,1,3})', 'The formula must be entered as an array formula. It returns 1, 2, and 3 as the modes because they each appear 3 times. If the formula is not entered as an array formula, the single result is 1.', 3]
    ];

    len = arrayFormulaData.length;
    for (i = 0; i < len; i++) {
      // tslint:disable-next-line:one-variable-per-declaration
      let cur = arrayFormulaData[i],
        rows = cur[2],
        cols = cur[3] || 1;
      sheet.addSpan(r, 0, rows, 1);
      sheet.setValue(r, 0, cur[0]);
      sheet.addSpan(r, 1, rows, 1);
      sheet.setValue(r, 1, cur[1]);
      sheet.setArrayFormula(r, 2, rows, cols, cur[0]);
      r += rows;
    }

    for (i = 1; i < r; i++) {
      sheet.autoFitRow(i);
    }

    sheet.getRange(-1, 2, -1, 1).formatter('.######');
    sheet.setFormatter(48, 2, 'M/d/yyyy', null);

    let table = sheet.tables.add('FunctionTable', 0, 0, 50, 3, spreadNS.Tables.TableThemes.medium9);
    table.rowFilter().filterButtonVisible();

    // Array formula with merge cells, set style like above table rows
    let rowStyle = sheet.getActualStyle(48, 0);
    sheet.getRange(50, 0, 3, 3).backColor(rowStyle.backColor);
    sheet.getRange(49, 0, 4, 3).setBorder(rowStyle.borderBottom, {
      all: true
    });
  }

}
