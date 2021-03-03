# ECharts-设置 X 轴 axisLabel 自适应

## 前言

在制作#Eharts 的柱状图时经常会遇到 axisLabel 的长度过长时文字会堆叠在一起的情况:

[echarts](https://upload-images.jianshu.io/upload_images/12797375-397f010519828446.png?imageMogr2/auto-orient/strip|imageView2/2/w/1098/format/webp)

有些网站选择倾斜 axisLabel 来显示,或者让 axisLabel 完全竖直,效果都很差,我这里采用计算 x 轴刻度宽度的方法来进行换行处理:

[demo1](https://upload-images.jianshu.io/upload_images/12797375-0a516be08fb69ad3.png?imageMogr2/auto-orient/strip|imageView2/2/w/1042/format/webp)

echarts 将柱状图分为 grid,X 轴 Label 和 Y 轴 Label 三个部分;

我们首先计算每个 X 轴 Label 大致可以显示多少个字:

```js
var xAxisData = ['something...', 'something...', 'something...', 'something...'];
var gridWidth = 681; //可以根据canvas的宽度和grid的right,left,width进行计算
var fontsize = 14; //字体大小
var wordNum = parseInt(gridWidth / xAxisData.length / fontsize);
```

然后在 xAxis.axisLabel 的 formatter 中设置换行:

```js
 xAxis: {
     data: xAxisData,
     type: 'category',
     axisLabel: {
         interval: 0,
         formatter: function (value, index) {
             var strs = value.split('');
             var str = ''
             for (var i = 0, s; s = strs[i++];) {
                 str += s;
                 if (!(i % wordNum)) str += '\n';
             }
             return str
         }
     }
 }
```

这时我们发现如果 grid 的 bottom 默认为 60,意味着 x 轴到 canvas 底部只能放下 3 行文字,所以我们需要调整 grid 的高度来放下更多的行:

计算最多有多少行,并根据最大行数设置 chart 容器高度:

```js
var xAxisData = ['something...', 'something...', 'something...', 'something...'];
var gridWidth = 681;
var fontsize = 14; //字体大小默认12px,这里设置成14可以保证label之间的间距
var wordNum = parseInt(gridWidth / xAxisData.length / fontsize);
var maxLine = 0;
for (var i = 0; i < xAxisData.length; i++) {
  var flag = parseInt(xAxisData[i].length / wordNum) + 1;
  if (flag > maxLine) maxLine = flag;
}
//改变chart容器高度,340为dom的height减去grid的高度和top:
//此句放在echarts.init(dom)之前:
document.getElementById(id).style.height += 340 + max * 12 + 'px';
```

设置 grid 的 bottom:

```js
grid: {
  bottom: (max + 1) * 12, //字体大小默认12px
}
```

这样设置好就可以像上图那样自适应显示

当我们使用的 dataZoom 工具是时候:.

[](https://upload-images.jianshu.io/upload_images/12797375-63479ec48d4082cc.png?imageMogr2/auto-orient/strip|imageView2/2/w/934/format/webp)

为了让我们的缩放 grid 的时候重新计算每行显示多少字体,我们可以使用监听 datazoom 事件来完成:

```js
myChart.on('datazoom', function(params) {
  if (params.batch) {
    var start = params.batch[0].start;
    var end = params.batch[0].end;
  } else {
    var start = params.start;
    var end = params.end;
  }
  var cur_col_num = ((end - start) / 100) * xAxisData.length; //计算缩放后可以显示几个柱子
  wordNum = parseInt(Math.ceil(gridWidth / cur_col_num) / 14); //重新计算wordNum
});
```

因为缩放的时候会触发我们设置的 axisLabel 的 formatter,所以只要重新计算 wordNum,我们的 label 就会随着缩放而改变每行显示的字:

[](https://upload-images.jianshu.io/upload_images/12797375-c23c997bcc58d0b3.gif?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp)
