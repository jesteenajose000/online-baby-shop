$(document).ready(function() {
var langArray = [];
$('.lang-dropdown option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})
$('#lang-list').html(langArray);
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');
$('#lang-list li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  $(".top-right").toggleClass('dropdown-open');
});

$(".btn-select").click(function(){
        $(".b").toggle();
        $(".top-right").toggleClass('dropdown-open');
    });
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  $('.btn-select').html(langArray[langIndex]);
}

$(".search-button").click(function(){
  $(".search-area").addClass("search-open");
});
$(".close").click(function(event) {
  event.stopPropagation(); 
  $(".search-area").removeClass("search-open");
});
$('.menu-image').on('click', function() {
  $('.side-bar').addClass('visible');
  $('body').addClass('sidebar-open');
 
});
$('.close').on('click', function() {
  $('.side-bar').removeClass('visible');
  $('body').removeClass('sidebar-open');
});

});



