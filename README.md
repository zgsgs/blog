# sacredwood.github.io
这是赵高升的个人主页

##简单的介绍
最近在学习React框架，并且已经完成基础知识部分的学习。所以计划在最近的一至两周里采用React架构来搭建一个个人主页，内容是展示在学习React中遇到的一些问题，并且是如何解决的以及自己的一些心得体会。同时，也希望自己有一天为开源事业奉献一点点绵薄之力。

其实我也是刚刚用了四天时间学习如何使用gitHub（其实，自己英语蛮差的），如何使用gitHub搭建个人主页，好在一切还算顺利，在第三天我突然有了一个想法：既然gitHub给了我一个可以任意涂鸦的画板，我为什么不画点什么呢？所以，才有了今天的简单介绍。就用刚学的React练手！第四天我终于把React环境搭好了，一切都算是准备就绪了，还在等什么呢？Let's Go!
--Des,Three,2016.

##关于React自定义组件属性顺序的实验

###实验结果：定义属性顺序与传入顺序无关。
我在HTML里面见到的标签属性大多不受传入顺序的影响，因为属性名和值是键：值对的关系，我们能通过Key找到对应的Value。（姑且这么人认为吧）

###实验内容：
1.将<link rel="stylesheet" type="text/css" href="theme.css">中的rel、type、href属性调换顺序，观察样式变化。

2.对照自定义组件<Select />
组件内部：const { source, label, record, options,table } = this.props;
组件被调用： <SelectInput label="性别" source="gender" />
调换顺序，观察样式变化。
