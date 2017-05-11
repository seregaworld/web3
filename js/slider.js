(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
	$('.slide').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var k_id=0;
	var slideTime;
	slideCount = $("#s .slide").size();
	var animSlide = function(arrow, id_p){
		clearTimeout(slideTime);
		$('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		if(id_p!=-1)
			k_id=id_p;
		if (k_id==3){
			document.getElementById('shopia-section-one-content-rhomb-image4').style.backgroundPosition="-315px -61px";
			document.getElementById('shopia-section-one-content-rhomb-image1').style.backgroundPosition="-367px -65px";
			k_id=0;
		}
		else{
		document.getElementById('shopia-section-one-content-rhomb-image'+String(k_id+1)).style.backgroundPosition="-315px -61px";
		document.getElementById('shopia-section-one-content-rhomb-image'+String(k_id+2)).style.backgroundPosition="-367px -65px";
			k_id++;
		   
		}
	}
/* ------------------------------------------------------------*/    

	var $adderSpan = '';
	document.getElementById("shopia-section-one-content-rhomb-image1").style.backgroundPosition="-367px -65px";
	document.getElementById("shopia-section-one-content-rhomb-image1").addEventListener('click', function(event) {
	document.getElementById("shopia-section-one-content-rhomb-image1").style.backgroundPosition="-367px -65px";
	document.getElementById("shopia-section-one-content-rhomb-image2").style.backgroundPosition="-315px -61px";
	document.getElementById("shopia-section-one-content-rhomb-image3").style.backgroundPosition="-315px -61px";
	document.getElementById("shopia-section-one-content-rhomb-image4").style.backgroundPosition="-315px -61px";
	var goToNum = "0";
	animSlide(goToNum,3);
}, true);
	document.getElementById("shopia-section-one-content-rhomb-image2").addEventListener('click', function(event) {
	document.getElementById("shopia-section-one-content-rhomb-image2").style.backgroundPosition="-367px -65px";
	document.getElementById("shopia-section-one-content-rhomb-image3").style.backgroundPosition="-315px -61px";
	document.getElementById("shopia-section-one-content-rhomb-image1").style.backgroundPosition="-315px -61px";
	document.getElementById("shopia-section-one-content-rhomb-image4").style.backgroundPosition="-315px -61px";
	var goToNum = "1";
	animSlide(goToNum,0);
}, true);
	document.getElementById("shopia-section-one-content-rhomb-image3").addEventListener('click', function(event) {
	document.getElementById("shopia-section-one-content-rhomb-image3").style.backgroundPosition="-367px -65px";
	document.getElementById("shopia-section-one-content-rhomb-image2").style.backgroundPosition="-315px -61px";
	document.getElementById("shopia-section-one-content-rhomb-image1").style.backgroundPosition="-315px -61px";
	document.getElementById("shopia-section-one-content-rhomb-image4").style.backgroundPosition="-315px -61px";
	var goToNum = "2";
	animSlide(goToNum,1);
}, true);
	document.getElementById("shopia-section-one-content-rhomb-image4").addEventListener('click', function(event) {
	document.getElementById("shopia-section-one-content-rhomb-image4").style.backgroundPosition="-367px -65px";
	document.getElementById("shopia-section-one-content-rhomb-image2").style.backgroundPosition="-315px -61px";
	document.getElementById("shopia-section-one-content-rhomb-image3").style.backgroundPosition="-315px -61px";
	document.getElementById("shopia-section-one-content-rhomb-image1").style.backgroundPosition="-315px -61px";
	var goToNum = "3";
	animSlide(goToNum,2);
}, true);
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next',-1)}, hwTimeOut);}
			}
	$('#s').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();
});
})(jQuery);
