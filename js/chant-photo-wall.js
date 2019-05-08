$(function(){
    //一张图片
    // let only_one_img = $('.photo-lattice ul li:only-child img');
    // // console.log(only_one_img);
    // only_one_img.each(function(a,b){
    //     let that = $(this);
    //     let img_height = that.height();
    //     let img_width  = that.width();
    //     if(0.5 <= img_width / img_height <= 2){
    //         that.attr('style','max-width:164px;height:164px');
    //     }
    // })

    //当图片为四张时
    $('.photo-lattice li:first-child:nth-last-child(4) ~li:even').css('margin-right','80px')
    let only_four_img = $('.photo-lattice li:first-child:nth-last-child(4),.photo-lattice li:first-child:nth-last-child(4) ~li')
    if(only_four_img.length){
        only_four_img.each(function(i,e){
            console.log(e);
        })
        // let temp = only_four_img.parent();
        // console.log(temp);
    }
    
})