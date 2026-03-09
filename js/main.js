$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
    var $hellologo = $('#helloworld');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
        else{
            $hellologo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  
      $logo.slideDown('slow');
      $hellologo.slideUp('slow');

	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
      $hellologo.slideDown('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 800,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });

/* --- Lógica del Carrusel de Proyectos --- */
let slideIndex = [1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// Avance automático cada 3 segundos
setInterval(function() {
  plusSlides(1, 0);
  plusSlides(1, 1);
  plusSlides(1, 2);
  plusSlides(1, 3);
  plusSlides(1, 4);
}, 6000);
