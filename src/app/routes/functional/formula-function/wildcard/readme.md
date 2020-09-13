| 通配符              | Match               |
| ------------------- | ------------------- |
| ?                   | 任意单个字符        |
| *                   | 任意字符            |
| ~ 后跟 ?, *, 或者 ~ | ?, *, 或者 ~ 的字符 |

**注意:** 通配符只能在匹配条件为等于 (=) 的时候使用； 它不能在其它比较条件中使用 (>,<,!=,<=,>=)。

通配符能够在以下函数的条件参数中使用：

- **AVERAGEIF**
- **AVERAGEIFS**
- **COUNTIF**
- **COUNTIFS**
- **SUMIF**
- **SUMIFS**
- **MATCH**
- **SEARCH**
- **VLOOKUP**
- **HLOOKUP**
- **DAVERAGE**
- **DGET**
- **DMAX**
- **DMIN**
- **DPRODUCT**
- **DSTDEV**
- **DSTDEVP**
- **DSUM**
- **DVAR**
- **DVARP**