(function($){$.fn.mouseParallax=function(settings){settings=jQuery.extend({direction:'y',selector:'content',rateX:1,rateY:1},settings);
var select='.'+settings.selector;
if(this.css('position')=='static'){
	this.css('position','relative');
}
this.css('padding','0px');
this.find(select).css({'position':'absolute','margin':'0px'});
var w=this.outerWidth(),h=this.outerHeight(),cw=this.find(select).outerWidth(),ch=this.find(select).outerHeight();
this.css('overflow','hidden');
var ratiox=cw/w;
var ratioy=ch/h;
var ofsy=this.offset().top;
var ofsx=this.offset().left;

if(settings.direction=='x'){
	this.mousemove(function(e){
	var amuntX=e.pageX-ofsx;
	$(this).scrollLeft(ratiox*amuntX*settings.rateX);
	});
}
else if(settings.direction=='y'){
	this.mousemove(function(e){
	var amuntY=e.pageY-ofsy;
	$(this).scrollTop(ratioy*amuntY*settings.rateY);
	});
}
else if(settings.direction=='xy'){
	this.mousemove(function(e){
	var amuntY=e.pageY-ofsy;
	var amuntX=e.pageX-ofsx;
	$(this).scrollTop(ratioy*amuntY*settings.rateY);
	$(this).scrollLeft(ratiox*amuntX*settings.rateX);
	});
}
};})(jQuery);
