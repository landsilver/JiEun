(function($){
 $(function(){
  
  var $ham = $('.ham'),
      $gnbHam = $('#gnbHam'),
      $wrap = $('.wrap');
  
  $gnbHam.hide();
  $wrap.hide();
  
  $ham.on('click', function(){
   
   $gnbHam.show();
   $wrap.show();
   
  });
  
  $wrap.on('click', function(){
   
   $gnbHam.hide();
   $wrap.hide();
   
  });
  
  
  var $dd = $('dd'),
      $dt = $('dt');
  
  $dt.on('click', function(){
   $dd.hide();
   $(this).next().toggle();
   
  });
  
  
  var $faq = $('.f1'),
      $csc = $('.f2'),
      $faq2 = $('.faq2'),
      $csc2 = $('.csc2');
  
  $csc2.on('change', function(){
   
   if($f1.is(":hidden")){$f2.show();}
   
  });

      
  
  
  
  
 });
})(jQuery)