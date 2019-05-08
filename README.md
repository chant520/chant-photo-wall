# 社交Feed流图片布局
> 用纯css实现三种Feed流中的图片布局：
>1. 宫格式布局  
>2. 拼图式布局  
>3. 瀑布流式布局。

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


>参考文章
>
>[那些你不知道的社交Feed流图片布局 ——人人都是产品经理(风筝KK)][text1]  
>[伪类匹配列表数目实现微信群头像CSS布局的技巧——张鑫旭][text2]



[image1]: /readme/gongge-one-image.png "一张图的特俗情况"
[image2]: /readme/gongge-more-image.png "多张图的布局"
[image3]: /readme/pintu-all-image.png "拼图式布局全部预览"

[text1]: http://www.woshipm.com/pd/1538864.html "那些你不知道的社交Feed流图片布局 ————人人都是产品经理(风筝KK)"
[text2]: https://www.zhangxinxu.com/wordpress/2019/03/nth-last-child-css-layout/ "伪类匹配列表数目实现微信群头像CSS布局的技巧——张鑫旭"