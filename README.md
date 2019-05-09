# 社交Feed流图片布局
> 用纯css实现三种Feed流中的图片布局：
>1. 宫格式布局  
>2. 拼图式布局  
>3. 瀑布流式布局。

### 安装
```
    <!-- 样式 -->
    <link rel="stylesheet" href="./css/style.css">
    <!-- jquery 瀑布流必须使用jqury -->
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
    <!-- 宫格式布局 和 拼图式布局 js文件 -->
    <script src="./js/chant-photo-wall.js?id=5646567657"></script>
    <!-- 瀑布流布局 js文件 -->
    <script src="./js/chant-photo-waterfall.js?id=3453453453"></script>
    
```

## 宫格式布局
类似于微信朋友圈的照片布局格式，整体布局是 `9 x 9` 的宫格布局  

使用案例
> 将容器`DIV`的`class`设置为`photo-lattice`

```html
<div class="photo-lattice">
    <ul>
        <li><img src="./images/5120-1440.jpg" alt=""></li>
    </ul>
</div>
```

效果图  

![oneimage][image1]
![moreimage][image2]

## 拼图式布局
这种布局方式是将几个图片拼成一个矩形，样式新颖类似杂志的排版，因此也叫杂志式布局，不过因为其对图片的要求较高，因此多应用在图片社交中。  

使用案例
> 将容器`DIV`的`class`设置为`photo-puzzle`

```html
<div class="photo-puzzle">
    <ul>
        <li><img src="./images/5120-1440.jpg" alt=""></li>
    </ul>
</div>
```

效果图  

![pintuimage][image3]

## 瀑布流布局
>瀑布流对于图片的展现，是高效而具有吸引力的，用户一眼扫过的快速阅读模式可以在短时间内获得更多的信息量,而瀑布流里懒加载模式又避免了用户鼠标点击的翻页操作，瀑布流的主要特性便是错落有致，定宽而不定高的设计让页面区别于传统的矩阵式图片布局模式，巧妙的利用视觉层级，视线的任意流动又缓解了视觉疲劳，同时给人以不拘一格的感觉，切中年轻一族的个性化心理。

使用案例
> 将容器`DIV`的`id`设置为`chant-photo-waterfall`

```html
<div id="chant-photo-waterfall">
</div>
```

效果图  

![pintuimage][image3]

>参考文章
>
>[那些你不知道的社交Feed流图片布局 ——人人都是产品经理(风筝KK)][text1]  
>[伪类匹配列表数目实现微信群头像CSS布局的技巧——张鑫旭][text2]



[image1]: /readme/gongge-one-image.png "一张图的特俗情况"
[image2]: /readme/gongge-more-image.png "多张图的布局"
[image3]: /readme/pintu-all-image.png "拼图式布局全部预览"

[text1]: http://www.woshipm.com/pd/1538864.html "那些你不知道的社交Feed流图片布局 ————人人都是产品经理(风筝KK)"
[text2]: https://www.zhangxinxu.com/wordpress/2019/03/nth-last-child-css-layout/ "伪类匹配列表数目实现微信群头像CSS布局的技巧——张鑫旭"