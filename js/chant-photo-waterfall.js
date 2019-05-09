$(function(){
    let chant_waterfall = $('#chant-photo-waterfall:only-child')
    if(chant_waterfall.length){
        let height = chant_waterfall.height();
        let width = chant_waterfall.width();
        let rootImage = "http://cued.xunlei.com/demos/publ/img/";
        let columnNumber = 2;
        let indexImage   = 0;
        if(width > 560){
            columnNumber = Math.floor(width/280)
        }
        let start = 0,htmlColumn = '';
        for(start;start<columnNumber;++start){
            ++indexImage;
            htmlColumn += "<div class='water-fall-item'>";
            htmlColumn += getImage(start,columnNumber,rootImage);
            htmlColumn += "</div>" ;
        }
        chant_waterfall.html(htmlColumn)
        let item_element = $('#chant-photo-waterfall>.water-fall-item');
        item_element.attr('style','width:'+Math.floor((width- (4*columnNumber)) / columnNumber)+'px')
        console.log(columnNumber,width)
    }

    function getImage(a,b,c){
        let html = '', i = 0;
        for (i=0; i<10; ++i) {
            indexImage = a + b * i;
            let index = getIndex(indexImage);
            html = html + '<a href="###" class="pic_a"><img src="'+ c + "P_" + index +'.jpg" /></a>';
        }
        return html;
    }

    function getIndex(indexImage) {
		var index = indexImage;
		if (index < 10) {
			index = "00" + index;	
		} else if (index < 100) {
			index = "0" + index;	
		}
		return index;
	}
})