// JavaScript Document
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
$(document).ready(function(){
    $('box box-img01').dblclick(function(){
        // do something
        alert('Picture fade out...')
        $(this).fadeOut().slow();
    });
});