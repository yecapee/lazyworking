var amios = {};

amios.blockSlideInit = function(){
  var offset = function(i){
     if( $(window).width() > 992 ){
      return { 'top':-100*i+'%', 'left':100*i+'%' };
     }else{
      return { 'top':'auto','left':'auto' };
     };
  };

  $('.sub-block-slide').each(function(){
    $(this).css('overflow-y','hidden');
        $(this).find('.page').each(function(i){
          $(this).css(offset(i))
        });
  });
};

amios.blockSlideTo = function(id){
  var offset = $('#'+id).offset();
  var parents = $('#'+id).parent();
  parents.animate({scrollLeft:parents.scrollLeft()+offset.left-parents.offset().left}, 350);
};

amios.opening = function(){
    var lbar = 0;
    var timeloop = function(){
      if(lbar < 100){
        lbar++;
        $('.loadtext').html(lbar+'%');
        $('.statusline').css('width',lbar+'%');
        setTimeout( timeloop, 1);       
      }else{
        $('.transitions').animate({'opacity':0},600,function(){ $(this).remove(); })
      }
    }

    timeloop();
};

amios.domInit = function(){

  $('.subtitle li.hook').click(function(){
       $('.subtitle li').removeClass('active');
       $(this).addClass('active');
      var tar = $(this).html().match(/<(span)>(.+)<\/\1>/)[2].toLowerCase().replace(/ /g,"_");
      var tarY = $('#'+tar).offset().top;
      $('.main-block').animate({
          scrollTop: $('.main-block').scrollTop()+tarY-80
      }, 600);
  });

  if( $(window).width() > 992 ){
      $('.main-block').css('height',$(window).height()-80+'px');
  }else{
      $('.main-block').css('height','auto');
  };

  $(".scroll").mCustomScrollbar({
      mouseWheelPixels: 150,
      autoHideScrollbar:true,
      theme:"minimal-dark"
  });

};



// $('.sub-block').css('height',$(window).height()-80+'px');

$( window ).resize(function() {
    amios.blockSlideInit();
    amios.domInit();
});

$(window).on("load",function(){
    amios.opening();
    amios.blockSlideInit();
    amios.domInit();
});

