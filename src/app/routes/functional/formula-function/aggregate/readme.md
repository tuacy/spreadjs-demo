AGGREGATE 函数可将19种不同的聚合计算应用于列表或数组，并提供忽略隐藏行和错误值的选项。



SpreadJS支持AGGREGATE函数来执行聚合操作。 语法与Excel相同。



```
    //Returns the sum of the values contained in the range A1:C5.
    =AGGREGATE(9, 4, A1:C5)
    //Returns the max value in the range A1:C5.
    =AGGREGATE(4, 3, A1:C5)
    //Returns the second largest value in the range A1:C5.
    =AGGREGATE(14, 3, A1:C5, 2)
```

**AGGREGATE 第一个参数是编号（1-19），表示使用的函数。**



| 函数编号 | 函数            |
| -------- | --------------- |
| 1        | AVERAGE         |
| 2        | COUNT           |
| 3        | COUNTA          |
| 4        | MAX             |
| 5        | MIN             |
| 6        | PRODUCT         |
| 7        | STDEV.S         |
| 8        | STDEV.P         |
| 9        | SUM             |
| 10       | VAR.S           |
| 11       | VAR.P           |
| 12       | MEDIAN          |
| 13       | MODE.SNGL       |
| 14       | LARGE           |
| 15       | SMALL           |
| 16       | PERCENTILE.INC  |
| 17       | QUARTILE.INC    |
| 18       | APERCENTILE.EXC |
| 19       | QUARTILE.EXC    |

**AGGREGATE 第二个参数指定在计算中忽略某些值。**

| 选项     | 行为                                                |
| -------- | --------------------------------------------------- |
| 0 或省略 | 忽略嵌套的SUBTOTAL和AGGREGATE函数                   |
| 1        | 忽略隐藏的行，嵌套的SUBTOTAL和AGGREGATE函数         |
| 2        | 忽略错误的数据，嵌套的SUBTOTAL和AGGREGATE函数       |
| 3        | 忽略隐藏的行，错误值，嵌套的SUBTOTAL和AGGREGATE函数 |
| 4        | 不忽略                                              |
| 5        | 忽略隐藏的行                                        |
| 6        | 忽略错误的数据                                      |
| 7        | 忽略隐藏的行和错误的数据                            |

函数编号1-13中，其余参数为一个或多个引用。

函数编号14-19需要一个数组或对引用作为第三个参数，并使用k来指定该函数的参数。

```
    =AGGREGATE(function_num, options, ref1, [ref2], ...)  // function_num 1-13
    =AGGREGATE(function_num, options, array, k) // function_num 14-19
```

