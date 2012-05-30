/*
 Galleria v 1.2.5 2011-08-03
 http://galleria.aino.se

 Copyright (c) 2011, Aino
 Licensed under the MIT license.
*/
(function(e){var l=this,n=l.document,H=e(n),t=e(l),A=!0,B=3E4,C=!1,x=navigator.userAgent.toLowerCase(),I=l.location.hash.replace(/#\//,""),m=function(){var a=3,b=n.createElement("div"),d=b.getElementsByTagName("i");do b.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>";while(d[0]);return a>4?a:void 0}(),u=function(){return{html:n.documentElement,body:n.body,head:n.getElementsByTagName("head")[0],title:n.title}},J=function(){var a=[];e.each("data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image".split(" "),
function(b,d){a.push(d);/_/.test(d)&&a.push(d.replace(/_/g,""))});return a}(),K=function(a){var b;if(typeof a!=="object")return a;e.each(a,function(d,c){/^[a-z]+_/.test(d)&&(b="",e.each(d.split("_"),function(a,c){b+=a>0?c.substr(0,1).toUpperCase()+c.substr(1):c}),a[b]=c,delete a[d])});return a},D=function(a){return e.inArray(a,J)>-1?Galleria[a.toUpperCase()]:a},v={trunk:{},add:function(a,b,d,c){c=c||!1;this.clear(a);if(c)var e=b,b=function(){e();v.add(a,b,d)};this.trunk[a]=l.setTimeout(b,d)},clear:function(a){var b=
function(a){l.clearTimeout(this.trunk[a]);delete this.trunk[a]},d;if(a&&a in this.trunk)b.call(v,a);else if(typeof a==="undefined")for(d in this.trunk)this.trunk.hasOwnProperty(d)&&b.call(v,d)}},z=[],y=[],L=!1,s=!1,M=[],E=function(a){Galleria.theme=a;e.each(M,function(a,d){d._init.call(d)})},f=function(){return{array:function(a){return Array.prototype.slice.call(a,0)},create:function(a,b){var d=n.createElement(b||"div");d.className=a;return d},getScriptPath:function(a){a=a||e("script:last").attr("src");
a=a.split("/");if(a.length==1)return"";a.pop();return a.join("/")+"/"},animate:function(){var a=function(a){var b="transition WebkitTransition MozTransition OTransition".split(" "),c;if(l.opera)return!1;for(c=0;b[c];c++)if(typeof a[b[c]]!=="undefined")return b[c];return!1}((n.body||n.documentElement).style),b={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],d={_default:[0.25,0.1,0.25,1],galleria:[0.645,0.045,0.355,1],
galleriaIn:[0.55,0.085,0.68,0.53],galleriaOut:[0.25,0.46,0.45,0.94],ease:[0.25,0,0.25,1],linear:[0.25,0.25,0.75,0.75],"ease-in":[0.42,0,1,1],"ease-out":[0,0,0.58,1],"ease-in-out":[0.42,0,0.58,1]},c=function(a,b,c){var d={},c=c||"transition";e.each("webkit moz ms o".split(" "),function(){d["-"+this+"-"+c]=b});a.css(d)},i=function(a){c(a,"none","transition");Galleria.WEBKIT&&Galleria.TOUCH&&(c(a,"translate3d(0,0,0)","transform"),a.data("revert")&&(a.css(a.data("revert")),a.data("revert",null)))},j,
h,g,k,p,w,F;return function(o,q,r){r=e.extend({duration:400,complete:function(){},stop:!1},r);o=e(o);r.duration?a?(r.stop&&(o.unbind(b),i(o)),j=!1,e.each(q,function(a,b){F=o.css(a);f.parseValue(F)!=f.parseValue(b)&&(j=!0);o.css(a,F)}),j?(h=[],g=r.easing in d?d[r.easing]:d._default,k=" "+r.duration+"ms cubic-bezier("+g.join(",")+")",l.setTimeout(function(){o.one(b,function(a){return function(){i(a);r.complete.call(a[0])}}(o));if(Galleria.WEBKIT&&Galleria.TOUCH&&(p={},w=[0,0,0],e.each(["left","top"],
function(a,b){b in q&&(w[a]=f.parseValue(q[b])-f.parseValue(o.css(b))+"px",p[b]=q[b],delete q[b])}),w[0]||w[1]))o.data("revert",p),h.push("-webkit-transform"+k),c(o,"translate3d("+w.join(",")+")","transform");e.each(q,function(a){h.push(a+k)});c(o,h.join(","));o.css(q)},1)):l.setTimeout(function(){r.complete.call(o[0])},r.duration)):o.animate(q,r):(o.css(q),r.complete.call(o[0]))}}(),removeAlpha:function(a){if(m<9&&a){var b=a.style,a=(a=a.currentStyle)&&a.filter||b.filter||"";if(/alpha/.test(a))b.filter=
a.replace(/alpha\([^)]*\)/i,"")}},forceStyles:function(a,b){a=e(a);a.attr("style")&&a.data("styles",a.attr("style")).removeAttr("style");a.css(b)},revertStyles:function(){e.each(f.array(arguments),function(a,b){b=e(b);b.removeAttr("style");b.attr("style","");b.data("styles")&&b.attr("style",b.data("styles")).data("styles",null)})},moveOut:function(a){f.forceStyles(a,{position:"absolute",left:-1E4})},moveIn:function(){f.revertStyles.apply(f,f.array(arguments))},elem:function(a){return a instanceof
e?{$:a,dom:a[0]}:{$:e(a),dom:a}},hide:function(a,b,d){var d=d||function(){},c=f.elem(a),e=c.$,a=c.dom;e.data("opacity")||e.data("opacity",e.css("opacity"));c={opacity:0};b?f.animate(a,c,{duration:b,complete:m<9&&a?function(){f.removeAlpha(a);a.style.visibility="hidden";d.call(a)}:d,stop:!0}):m<9&&a?(f.removeAlpha(a),a.style.visibility="hidden"):e.css(c)},show:function(a,b,d){var d=d||function(){},c=f.elem(a),e=c.$,a=c.dom,j={opacity:parseFloat(e.data("opacity"))||1};if(b){if(m<9)e.css("opacity",0),
a.style.visibility="visible";f.animate(a,j,{duration:b,complete:m<9&&a?function(){j.opacity==1&&f.removeAlpha(a);d.call(a)}:d,stop:!0})}else m<9&&j.opacity==1&&a?(f.removeAlpha(a),a.style.visibility="visible"):e.css(j)},optimizeTouch:function(){var a,b,d,c,f={},j=function(a){a.preventDefault();f=e.extend({},a,!0)},h=function(){this.evt=f},g=function(){this.handler.call(a,this.evt)};return function(k){e(k).bind("touchend",function(k){a=k.target;for(c=!0;a.parentNode&&a!=k.currentTarget&&c;)b=e(a).data("events"),
d=e(a).data("fakes"),b&&"click"in b?(c=!1,k.preventDefault(),e(a).click(j).click(),b.click.pop(),e.each(b.click,h),e(a).data("fakes",b.click),delete b.click):d&&(c=!1,k.preventDefault(),e.each(d,g)),a=a.parentNode})}}(),addTimer:function(){v.add.apply(v,f.array(arguments));return this},clearTimer:function(){v.clear.apply(v,f.array(arguments));return this},wait:function(a){var a=e.extend({until:function(){return!1},success:function(){},error:function(){Galleria.raise("Could not complete wait function.")},
timeout:3E3},a),b=f.timestamp(),d,c,i=function(){c=f.timestamp();d=c-b;if(a.until(d))return a.success(),!1;if(c>=b+a.timeout)return a.error(),!1;l.setTimeout(i,10)};l.setTimeout(i,10)},toggleQuality:function(a,b){if(!(m!==7&&m!==8)&&a)typeof b==="undefined"&&(b=a.style.msInterpolationMode==="nearest-neighbor"),a.style.msInterpolationMode=b?"bicubic":"nearest-neighbor"},insertStyleTag:function(a){var b=n.createElement("style");u().head.appendChild(b);b.styleSheet?b.styleSheet.cssText=a:(a=n.createTextNode(a),
b.appendChild(a))},loadScript:function(a,b){var d=!1,c=e("<script>").attr({src:a,async:!0}).get(0);c.onload=c.onreadystatechange=function(){if(!d&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"))d=!0,c.onload=c.onreadystatechange=null,typeof b==="function"&&b.call(this,this)};u().head.appendChild(c)},parseValue:function(a){return typeof a==="number"?a:typeof a==="string"?(a=a.match(/\-?\d|\./g))&&a.constructor===Array?a.join("")*1:0:0},timestamp:function(){return(new Date).getTime()},
loadCSS:function(a,b,d){var c,i=!1,j;e("link[rel=stylesheet]").each(function(){if(RegExp(a).test(this.href))return c=this,!1});typeof b==="function"&&(d=b,b=void 0);d=d||function(){};if(c)return d.call(c,c),c;j=n.styleSheets.length;A&&(a+="?"+f.timestamp());e("#"+b).length?(e("#"+b).attr("href",a),j--,i=!0):(c=e("<link>").attr({rel:"stylesheet",href:a,id:b}).get(0),l.setTimeout(function(){var b=e('link[rel="stylesheet"], style');b.length?b.get(0).parentNode.insertBefore(c,b[0]):u().head.appendChild(c);
m?j>=31?Galleria.raise("You have reached the browser stylesheet limit (31)",!0):c.onreadystatechange=function(){if(!i&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"))i=!0}:/file:\/\//i.test(a)?i=!0:e.ajax({url:a,success:function(){i=!0},error:function(a){a.isRejected()&&Galleria.WEBKIT&&(i=!0)}})},10));typeof d==="function"&&f.wait({until:function(){return i&&n.styleSheets.length>j},success:function(){l.setTimeout(function(){d.call(c,c)},100)},error:function(){Galleria.raise("Theme CSS could not load",
!0)},timeout:1E4});return c}}}(),G=function(){var a=function(a,d,c,i){var j=this.getOptions("easing"),h=this.getStageWidth(),g={left:h*(a.rewind?-1:1)},k={left:0};if(c)g.opacity=0,k.opacity=1;e(a.next).css(g);f.animate(a.next,k,{duration:a.speed,complete:function(a){return function(){d();a.css({left:0})}}(e(a.next).add(a.prev)),queue:!1,easing:j});if(i)a.rewind=!a.rewind;if(a.prev){g={left:0};k={left:h*(a.rewind?1:-1)};if(c)g.opacity=1,k.opacity=0;e(a.prev).css(g);f.animate(a.prev,k,{duration:a.speed,
queue:!1,easing:j,complete:function(){e(this).css("opacity",0)}})}};return{fade:function(a,d){e(a.next).css("opacity",0).show();f.animate(a.next,{opacity:1},{duration:a.speed,complete:d});a.prev&&(e(a.prev).css("opacity",1).show(),f.animate(a.prev,{opacity:0},{duration:a.speed}))},flash:function(a,d){e(a.next).css("opacity",0);a.prev?f.animate(a.prev,{opacity:0},{duration:a.speed/2,complete:function(){f.animate(a.next,{opacity:1},{duration:a.speed,complete:d})}}):f.animate(a.next,{opacity:1},{duration:a.speed,
complete:d})},pulse:function(a,d){a.prev&&e(a.prev).hide();e(a.next).css("opacity",0).show();f.animate(a.next,{opacity:1},{duration:a.speed,complete:d})},slide:function(b,d){a.apply(this,f.array(arguments))},fadeslide:function(b,d){a.apply(this,f.array(arguments).concat([!0]))},doorslide:function(b,d){a.apply(this,f.array(arguments).concat([!1,!0]))}}}();Galleria=function(){var a=this;this._theme=void 0;this._options={};this._playing=!1;this._playtime=5E3;this._active=null;this._queue={length:0};
this._data=[];this._dom={};this._thumbnails=[];this._layers=[];this._firstrun=this._initialized=!1;this._stageHeight=this._stageWidth=0;this._target=void 0;this._id=Math.random();e.each("container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip".split(" "),function(b,c){a._dom[c]=f.create("galleria-"+c)});e.each("current total".split(" "),function(b,
c){a._dom[c]=f.create("galleria-"+c,"span")});var b=this._keyboard={keys:{UP:38,DOWN:40,LEFT:37,RIGHT:39,RETURN:13,ESCAPE:27,BACKSPACE:8,SPACE:32},map:{},bound:!1,press:function(c){var d=c.keyCode||c.which;d in b.map&&typeof b.map[d]==="function"&&b.map[d].call(a,c)},attach:function(a){var c,d;for(c in a)a.hasOwnProperty(c)&&(d=c.toUpperCase(),d in b.keys?b.map[b.keys[d]]=a[c]:b.map[d]=a[c]);if(!b.bound)b.bound=!0,H.bind("keydown",b.press)},detach:function(){b.bound=!1;b.map={};H.unbind("keydown",
b.press)}},d=this._controls={0:void 0,1:void 0,active:0,swap:function(){d.active=d.active?0:1},getActive:function(){return d[d.active]},getNext:function(){return d[1-d.active]}},c=this._carousel={next:a.$("thumb-nav-right"),prev:a.$("thumb-nav-left"),width:0,current:0,max:0,hooks:[],update:function(){var b=0,d=0,f=[0];e.each(a._thumbnails,function(a,c){c.ready&&(b+=c.outerWidth||e(c.container).outerWidth(!0),f[a+1]=b,d=Math.max(d,c.outerHeight||e(c.container).outerHeight(!0)))});a.$("thumbnails").css({width:b,
height:d});c.max=b;c.hooks=f;c.width=a.$("thumbnails-list").width();c.setClasses();a.$("thumbnails-container").toggleClass("galleria-carousel",b>c.width);c.width=a.$("thumbnails-list").width()},bindControls:function(){var b;c.next.bind("click",function(d){d.preventDefault();if(a._options.carouselSteps==="auto")for(b=c.current;b<c.hooks.length;b++){if(c.hooks[b]-c.hooks[c.current]>c.width){c.set(b-2);break}}else c.set(c.current+a._options.carouselSteps)});c.prev.bind("click",function(d){d.preventDefault();
if(a._options.carouselSteps==="auto")for(b=c.current;b>=0;b--)if(c.hooks[c.current]-c.hooks[b]>c.width){c.set(b+2);break}else{if(b===0){c.set(0);break}}else c.set(c.current-a._options.carouselSteps)})},set:function(a){for(a=Math.max(a,0);c.hooks[a-1]+c.width>=c.max&&a>=0;)a--;c.current=a;c.animate()},getLast:function(a){return(a||c.current)-1},follow:function(a){if(a===0||a===c.hooks.length-2)c.set(a);else{for(var b=c.current;c.hooks[b]-c.hooks[c.current]<c.width&&b<=c.hooks.length;)b++;a-1<c.current?
c.set(a-1):a+2>b&&c.set(a-b+c.current+2)}},setClasses:function(){c.prev.toggleClass("disabled",!c.current);c.next.toggleClass("disabled",c.hooks[c.current]+c.width>=c.max)},animate:function(){c.setClasses();var b=c.hooks[c.current]*-1;isNaN(b)||f.animate(a.get("thumbnails"),{left:b},{duration:a._options.carouselSpeed,easing:a._options.easing,queue:!1})}},i=this._tooltip={initialized:!1,open:!1,init:function(){i.initialized=!0;f.insertStyleTag(".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}");
a.$("tooltip").css("opacity",0.8);f.hide(a.get("tooltip"))},move:function(b){var c=a.getMousePosition(b).x,b=a.getMousePosition(b).y,d=a.$("tooltip"),e=b,f=d.outerHeight(!0)+1,i=d.outerWidth(!0),g=f+15,i=a.$("container").width()-i-2,f=a.$("container").height()-f-2;!isNaN(c)&&!isNaN(e)&&(c+=10,e-=30,c=Math.max(0,Math.min(i,c)),e=Math.max(0,Math.min(f,e)),b<g&&(e=g),d.css({left:c,top:e}))},bind:function(b,c){if(!Galleria.TOUCH){i.initialized||i.init();var d=function(b,c){i.define(b,c);e(b).hover(function(){f.clearTimer("switch_tooltip");
a.$("container").unbind("mousemove",i.move).bind("mousemove",i.move).trigger("mousemove");i.show(b);Galleria.utils.addTimer("tooltip",function(){a.$("tooltip").stop().show().animate({opacity:1});i.open=!0},i.open?0:500)},function(){a.$("container").unbind("mousemove",i.move);f.clearTimer("tooltip");a.$("tooltip").stop().animate({opacity:0},200,function(){a.$("tooltip").hide();f.addTimer("switch_tooltip",function(){i.open=!1},1E3)})})};typeof c==="string"?d(b in a._dom?a.get(b):b,c):e.each(b,function(b,
c){d(a.get(b),c)})}},show:function(b){var b=e(b in a._dom?a.get(b):b),c=b.data("tt"),d=function(a){l.setTimeout(function(a){return function(){i.move(a)}}(a),10);b.unbind("mouseup",d)};if(c=typeof c==="function"?c():c)a.$("tooltip").html(c.replace(/\s/,"&nbsp;")),b.bind("mouseup",d)},define:function(b,c){if(typeof c!=="function")var d=c,c=function(){return d};b=e(b in a._dom?a.get(b):b).data("tt",c);i.show(b)}},j=this._fullscreen={scrolled:0,crop:a._options.imageCrop,active:!1,keymap:a._keyboard.map,
enter:function(b){j.active=!0;f.hide(a.getActiveImage());a.$("container").addClass("fullscreen");j.scrolled=t.scrollTop();f.forceStyles(a.get("container"),{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1E4});var c={height:"100%",overflow:"hidden",margin:0,padding:0},d=a.getData();f.forceStyles(u().html,c);f.forceStyles(u().body,c);j.keymap=e.extend({},a._keyboard.map);a.attachKeyboard({escape:a.exitFullscreen,right:a.next,left:a.prev});if(a._options.fullscreenCrop!==void 0)a._options.imageCrop=
a._options.fullscreenCrop;if(d&&d.big&&d.image!==d.big){var c=new Galleria.Picture,i=c.isCached(d.big),g=a.getIndex(),h=a._thumbnails[g];a.trigger({type:Galleria.LOADSTART,cached:i,rewind:!1,index:g,imageTarget:a.getActiveImage(),thumbTarget:h});c.load(d.big,function(b){a._scaleImage(b,{complete:function(b){a.trigger({type:Galleria.LOADFINISH,cached:i,index:g,rewind:!1,imageTarget:b.image,thumbTarget:h});var c=a._controls.getActive().image;c&&e(c).width(b.image.width).height(b.image.height).attr("style",
e(b.image).attr("style")).attr("src",b.image.src)}})})}a.rescale(function(){f.addTimer("fullscreen_enter",function(){f.show(a.getActiveImage());typeof b==="function"&&b.call(a)},100);a.trigger(Galleria.FULLSCREEN_ENTER)});t.resize(function(){j.scale()})},scale:function(){a.rescale()},exit:function(b){j.active=!1;f.hide(a.getActiveImage());a.$("container").removeClass("fullscreen");f.revertStyles(a.get("container"),u().html,u().body);l.scrollTo(0,j.scrolled);a.detachKeyboard();a.attachKeyboard(j.keymap);
if(a._options.fullscreenCrop!==void 0)a._options.imageCrop=j.crop;a.rescale(function(){f.addTimer("fullscreen_exit",function(){f.show(a.getActiveImage());typeof b==="function"&&b.call(a)},50);a.trigger(Galleria.FULLSCREEN_EXIT)});t.unbind("resize",j.scale)}},h=this._idle={trunk:[],bound:!1,add:function(a,b){if(a){h.bound||h.addEvent();var a=e(a),c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=a.css(d));a.data("idle",{from:c,to:b,complete:!0,busy:!1});h.addTimer();h.trunk.push(a)}},remove:function(b){b=
jQuery(b);e.each(h.trunk,function(c,d){d.length&&!d.not(b).length&&(a._idle.show(b),a._idle.trunk.splice(c,1))});h.trunk.length||(h.removeEvent(),f.clearTimer("idle"))},addEvent:function(){h.bound=!0;a.$("container").bind("mousemove click",h.showAll)},removeEvent:function(){h.bound=!1;a.$("container").unbind("mousemove click",h.showAll)},addTimer:function(){f.addTimer("idle",function(){a._idle.hide()},a._options.idleTime)},hide:function(){a._options.idleMode&&(a.trigger(Galleria.IDLE_ENTER),e.each(h.trunk,
function(b,c){var d=c.data("idle");if(d)c.data("idle").complete=!1,f.animate(c,d.to,{duration:a._options.idleSpeed})}))},showAll:function(){f.clearTimer("idle");e.each(a._idle.trunk,function(b,c){a._idle.show(c)})},show:function(b){var c=b.data("idle");if(!c.busy&&!c.complete)c.busy=!0,a.trigger(Galleria.IDLE_EXIT),f.clearTimer("idle"),f.animate(b,c.from,{duration:a._options.idleSpeed/2,complete:function(){e(this).data("idle").busy=!1;e(this).data("idle").complete=!0}});h.addTimer()}},g=this._lightbox=
{width:0,height:0,initialized:!1,active:null,image:null,elems:{},keymap:!1,init:function(){a.trigger(Galleria.LIGHTBOX_OPEN);if(!g.initialized){g.initialized=!0;var b={},c=a._options,d="",c={overlay:"position:fixed;display:none;opacity:"+c.overlayOpacity+";filter:alpha(opacity="+c.overlayOpacity*100+");top:0;left:0;width:100%;height:100%;background:"+c.overlayBackground+";z-index:99990",box:"position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",
shadow:"position:absolute;background:#000;width:100%;height:100%;",content:"position:absolute;background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",info:"position:absolute;bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",close:"position:absolute;top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",image:"position:absolute;top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",
prevholder:"position:absolute;width:50%;top:0;bottom:40px;cursor:pointer;",nextholder:"position:absolute;width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",prev:"position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",next:"position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",
title:"float:left",counter:"float:right;margin-left:8px;"},i={};m===8&&(c.nextholder+="background:#000;filter:alpha(opacity=0);",c.prevholder+="background:#000;filter:alpha(opacity=0);");e.each(c,function(a,b){d+=".galleria-lightbox-"+a+"{"+b+"}"});f.insertStyleTag(d);e.each("overlay box content shadow title info close prevholder prev nextholder next counter image".split(" "),function(c,d){a.addElement("lightbox-"+d);b[d]=g.elems[d]=a.get("lightbox-"+d)});g.image=new Galleria.Picture;e.each({box:"shadow content close prevholder nextholder",
info:"title counter",content:"info image",prevholder:"prev",nextholder:"next"},function(a,b){var c=[];e.each(b.split(" "),function(a,b){c.push("lightbox-"+b)});i["lightbox-"+a]=c});a.append(i);e(b.image).append(g.image.container);e(u().body).append(b.overlay,b.box);f.optimizeTouch(b.box);(function(a){return a.hover(function(){e(this).css("color","#bbb")},function(){e(this).css("color","#444")})})(e(b.close).bind("click",g.hide).html("&#215;"));e.each(["Prev","Next"],function(a,c){var d=e(b[c.toLowerCase()]).html(/v/.test(c)?
"&#8249;&nbsp;":"&nbsp;&#8250;"),f=e(b[c.toLowerCase()+"holder"]);f.bind("click",function(){g["show"+c]()});m<8||Galleria.TOUCH?d.show():f.hover(function(){d.show()},function(){d.stop().fadeOut(200)})});e(b.overlay).bind("click",g.hide);if(Galleria.IPAD)a._options.lightboxTransitionSpeed=0}},rescale:function(b){var c=Math.min(t.width()-40,g.width),d=Math.min(t.height()-60,g.height),d=Math.min(c/g.width,d/g.height),c=Math.round(g.width*d)+40,d=Math.round(g.height*d)+60,c={width:c,height:d,"margin-top":Math.ceil(d/
2)*-1,"margin-left":Math.ceil(c/2)*-1};b?e(g.elems.box).css(c):e(g.elems.box).animate(c,{duration:a._options.lightboxTransitionSpeed,easing:a._options.easing,complete:function(){var b=g.image,c=a._options.lightboxFadeSpeed;a.trigger({type:Galleria.LIGHTBOX_IMAGE,imageTarget:b.image});e(b.container).show();f.show(b.image,c);f.show(g.elems.info,c)}})},hide:function(){g.image.image=null;t.unbind("resize",g.rescale);e(g.elems.box).hide();f.hide(g.elems.info);a.detachKeyboard();a.attachKeyboard(g.keymap);
g.keymap=!1;f.hide(g.elems.overlay,200,function(){e(this).hide().css("opacity",a._options.overlayOpacity);a.trigger(Galleria.LIGHTBOX_CLOSE)})},showNext:function(){g.show(a.getNext(g.active))},showPrev:function(){g.show(a.getPrev(g.active))},show:function(b){g.active=b=typeof b==="number"?b:a.getIndex();g.initialized||g.init();if(!g.keymap)g.keymap=e.extend({},a._keyboard.map),a.attachKeyboard({escape:g.hide,right:g.showNext,left:g.showPrev});t.unbind("resize",g.rescale);var c=a.getData(b),d=a.getDataLength();
f.hide(g.elems.info);g.image.load(c.big||c.image,function(a){g.width=a.original.width;g.height=a.original.height;e(a.image).css({width:"100.5%",height:"100.5%",top:0,zIndex:99998});f.hide(a.image);g.elems.title.innerHTML=c.title||"";g.elems.counter.innerHTML=b+1+" / "+d;t.resize(g.rescale);g.rescale()});e(g.elems.overlay).show();e(g.elems.box).show()}};return this};Galleria.prototype={constructor:Galleria,init:function(a,b){b=K(b);this._original={target:a,options:b,data:null};this._target=this._dom.target=
a.nodeName?a:e(a).get(0);y.push(this);if(this._target){this._options={autoplay:!1,carousel:!0,carouselFollow:!0,carouselSpeed:400,carouselSteps:"auto",clicknext:!1,dataConfig:function(){return{}},dataSelector:"img",dataSource:this._target,debug:void 0,dummy:void 0,easing:"galleria",extend:function(){},fullscreenCrop:void 0,fullscreenDoubleTap:!0,fullscreenTransition:void 0,height:"auto",idleMode:!0,idleTime:3E3,idleSpeed:200,imageCrop:!1,imageMargin:0,imagePan:!1,imagePanSmoothness:12,imagePosition:"50%",
imageTimeout:void 0,initialTransition:void 0,keepSource:!1,layerFollow:!0,lightbox:!1,lightboxFadeSpeed:200,lightboxTransitionSpeed:200,linkSourceImages:!0,maxScaleRatio:void 0,minScaleRatio:void 0,overlayOpacity:0.85,overlayBackground:"#0b0b0b",pauseOnInteraction:!0,popupLinks:!1,preload:2,queue:!0,show:0,showInfo:!0,showCounter:!0,showImagenav:!0,swipe:!0,thumbCrop:!0,thumbEventType:"click",thumbFit:!0,thumbMargin:0,thumbQuality:"auto",thumbnails:!0,touchTransition:void 0,transition:"fade",transitionInitial:void 0,
transitionSpeed:400,useCanvas:!1,width:"auto"};this._options.initialTransition=this._options.initialTransition||this._options.transitionInitial;b&&b.debug===!1&&(A=!1);if(b&&typeof b.imageTimeout==="number")B=b.imageTimeout;if(b&&typeof b.dummy==="string")C=b.dummy;e(this._target).children().hide();typeof Galleria.theme==="object"?this._init():M.push(this);return this}else Galleria.raise("Target not found.",!0)},_init:function(){var a=this;if(this._initialized)return Galleria.raise("Init failed: Gallery instance already initialized."),
this;this._initialized=!0;if(!Galleria.theme)return Galleria.raise("Init failed: No theme found."),this;e.extend(!0,this._options,Galleria.theme.defaults,this._original.options);(function(a){"getContext"in a&&(s=s||{elem:a,context:a.getContext("2d"),cache:{},length:0})})(n.createElement("canvas"));this.bind(Galleria.DATA,function(){this._original.data=this._data;this.get("total").innerHTML=this.getDataLength();var b=this.$("container"),d={width:0,height:0},j=function(){return a.$("stage").height()};
f.wait({until:function(){e.each(["width","height"],function(e,g){d[g]=a._options[g]&&typeof a._options[g]==="number"?a._options[g]:Math.max(f.parseValue(b.css(g)),f.parseValue(a.$("target").css(g)),b[g](),a.$("target")[g]());b[g](d[g])});return j()&&d.width&&d.height>10},success:function(){Galleria.WEBKIT?l.setTimeout(function(){a._run()},1):a._run()},error:function(){j()?Galleria.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:"+d.width+"px, height: "+
d.height+"px.",!0):Galleria.raise("Could not extract a stage height from the CSS. Traced height: "+j()+"px.",!0)},timeout:2E3})});this.append({"info-text":["info-title","info-description"],info:["info-text"],"image-nav":["image-nav-right","image-nav-left"],stage:["images","loader","counter","image-nav"],"thumbnails-list":["thumbnails"],"thumbnails-container":["thumb-nav-left","thumbnails-list","thumb-nav-right"],container:["stage","thumbnails-container","info","tooltip"]});f.hide(this.$("counter").append(this.get("current"),
" / ",this.get("total")));this.setCounter("&#8211;");f.hide(a.get("tooltip"));this.$("container").addClass(Galleria.TOUCH?"touch":"notouch");e.each(Array(2),function(b){var d=new Galleria.Picture;e(d.container).css({position:"absolute",top:0,left:0}).prepend(a._layers[b]=e(f.create("galleria-layer")).css({position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2})[0]);a.$("images").append(d.container);a._controls[b]=d});this.$("images").css({position:"relative",top:0,left:0,width:"100%",height:"100%"});
this.$("thumbnails, thumbnails-list").css({overflow:"hidden",position:"relative"});this.$("image-nav-right, image-nav-left").bind("click",function(b){a._options.clicknext&&b.stopPropagation();a._options.pauseOnInteraction&&a.pause();b=/right/.test(this.className)?"next":"prev";a[b]()});e.each(["info","counter","image-nav"],function(b,d){a._options["show"+d.substr(0,1).toUpperCase()+d.substr(1).replace(/-/,"")]===!1&&f.moveOut(a.get(d.toLowerCase()))});this.load();if(!this._options.keep_source&&!m)this._target.innerHTML=
"";this.get("errors")&&this.appendChild("target","errors");this.appendChild("target","container");if(this._options.carousel){var b=0,d=this._options.show;this.bind(Galleria.THUMBNAIL,function(){this.updateCarousel();++b==this.getDataLength()&&typeof d=="number"&&d>0&&this._carousel.follow(d)})}this._options.swipe&&(function(b){var d=[0,0],e=[0,0],h=!1,g=0,k,p={start:"touchstart",move:"touchmove",stop:"touchend"},l=function(a){a.originalEvent.touches&&a.originalEvent.touches.length>1||(k=a.originalEvent.touches?
a.originalEvent.touches[0]:a,e=[k.pageX,k.pageY],d[0]||(d=e),Math.abs(d[0]-e[0])>10&&a.preventDefault())},m=function(k){b.unbind(p.move,l);k.originalEvent.touches&&k.originalEvent.touches.length||h?h=!h:(f.timestamp()-g<1E3&&Math.abs(d[0]-e[0])>30&&Math.abs(d[1]-e[1])<100&&(k.preventDefault(),a[d[0]>e[0]?"next":"prev"]()),d=e=[0,0])};b.bind(p.start,function(a){a.originalEvent.touches&&a.originalEvent.touches.length>1||(k=a.originalEvent.touches?a.originalEvent.touches[0]:a,g=f.timestamp(),d=e=[k.pageX,
k.pageY],b.bind(p.move,l).one(p.stop,m))})}(a.$("images")),this._options.fullscreenDoubleTap&&this.$("stage").bind("touchstart",function(){var b,d,e,f,g,k;return function(p){k=Galleria.utils.timestamp();d=(p.originalEvent.touches?p.originalEvent.touches[0]:p).pageX;e=(p.originalEvent.touches?p.originalEvent.touches[0]:p).pageY;k-b<500&&d-f<20&&e-g<20?(a.toggleFullscreen(),p.preventDefault(),a.$("stage").unbind("touchend",arguments.callee)):(b=k,f=d,g=e)}}()));f.optimizeTouch(this.get("container"));
return this},_createThumbnails:function(){this.get("total").innerHTML=this.getDataLength();var a,b,d,c,i,j=this,h=this._options,g=function(){var a=j.$("thumbnails").find(".active");return!a.length?!1:a.find("img").attr("src")}(),k=typeof h.thumbnails==="string"?h.thumbnails.toLowerCase():null,p=function(a){return n.defaultView&&n.defaultView.getComputedStyle?n.defaultView.getComputedStyle(d.container,null)[a]:i.css(a)},w=function(a,b,c){return function(){e(c).append(a);j.trigger({type:Galleria.THUMBNAIL,
thumbTarget:a,index:b})}},m=function(a){h.pauseOnInteraction&&j.pause();var b=e(a.currentTarget).data("index");j.getIndex()!==b&&j.show(b);a.preventDefault()},o=function(a){a.scale({width:a.data.width,height:a.data.height,crop:h.thumbCrop,margin:h.thumbMargin,canvas:h.useCanvas,complete:function(a){var b=["left","top"],c,d;e.each(["Width","Height"],function(f,g){c=g.toLowerCase();if((h.thumbCrop!==!0||h.thumbCrop===c)&&h.thumbFit)d={},d[c]=a[c],e(a.container).css(d),d={},d[b[f]]=0,e(a.image).css(d);
a["outer"+g]=e(a.container)["outer"+g](!0)});f.toggleQuality(a.image,h.thumbQuality===!0||h.thumbQuality==="auto"&&a.original.width<a.width*3);j.trigger({type:Galleria.THUMBNAIL,thumbTarget:a.image,index:a.data.order})}})};this._thumbnails=[];this.$("thumbnails").empty();for(a=0;this._data[a];a++)c=this._data[a],h.thumbnails===!0?(d=new Galleria.Picture(a),b=c.thumb||c.image,this.$("thumbnails").append(d.container),i=e(d.container),d.data={width:f.parseValue(p("width")),height:f.parseValue(p("height")),
order:a},h.thumbFit&&h.thumbCrop!==!0?i.css({width:0,height:0}):i.css({width:d.data.width,height:d.data.height}),d.load(b,o),h.preload==="all"&&d.preload(c.image)):k==="empty"||k==="numbers"?(d={container:f.create("galleria-image"),image:f.create("img","span"),ready:!0},k==="numbers"&&e(d.image).text(a+1),this.$("thumbnails").append(d.container),l.setTimeout(w(d.image,a,d.container),50+a*20)):d={container:null,image:null},e(d.container).add(h.keepSource&&h.linkSourceImages?c.original:null).data("index",
a).bind(h.thumbEventType,m),g===b&&e(d.container).addClass("active"),this._thumbnails.push(d)},_run:function(){var a=this;a._createThumbnails();f.wait({until:function(){Galleria.OPERA&&a.$("stage").css("display","inline-block");a._stageWidth=a.$("stage").width();a._stageHeight=a.$("stage").height();return a._stageWidth&&a._stageHeight>50},success:function(){z.push(a);f.show(a.get("counter"));a._options.carousel&&a._carousel.bindControls();if(a._options.autoplay){a.pause();if(typeof a._options.autoplay===
"number")a._playtime=a._options.autoplay;a.trigger(Galleria.PLAY);a._playing=!0}a._firstrun?typeof a._options.show==="number"&&a.show(a._options.show):(a._firstrun=!0,a._options.clicknext&&!Galleria.TOUCH&&(e.each(a._data,function(a,d){delete d.link}),a.$("stage").css({cursor:"pointer"}).bind("click",function(){a._options.pauseOnInteraction&&a.pause();a.next()})),Galleria.History&&Galleria.History.change(function(b){isNaN(b)?l.history.go(-1):a.show(b,void 0,!0)}),e.each(Galleria.ready.callbacks,function(){this.call(a,
a._options)}),a.trigger(Galleria.READY),Galleria.theme.init.call(a,a._options),a._options.extend.call(a,a._options),/^[0-9]{1,4}$/.test(I)&&Galleria.History?a.show(I,void 0,!0):a._data[a._options.show]&&a.show(a._options.show))},error:function(){Galleria.raise("Stage width or height is too small to show the gallery. Traced measures: width:"+a._stageWidth+"px, height: "+a._stageHeight+"px.",!0)}})},load:function(a,b,d){var c=this;this._data=[];this._thumbnails=[];this.$("thumbnails").empty();typeof b===
"function"&&(d=b,b=null);a=a||this._options.dataSource;b=b||this._options.dataSelector;d=d||this._options.dataConfig;/^function Object/.test(a.constructor)&&(a=[a]);if(a.constructor===Array)return this.validate(a)?(this._data=a,this._parseData().trigger(Galleria.DATA)):Galleria.raise("Load failed: JSON Array not valid."),this;e(a).find(b).each(function(a,b){var b=e(b),f={},g=b.parent(),k=g.attr("href"),g=g.attr("rel");if(k)f.image=f.big=k;if(g)f.big=g;c._data.push(e.extend({title:b.attr("title")||
"",thumb:b.attr("src"),image:b.attr("src"),big:b.attr("src"),description:b.attr("alt")||"",link:b.attr("longdesc"),original:b.get(0)},f,d(b)))});this.getDataLength()?this.trigger(Galleria.DATA):Galleria.raise("Load failed: no data found.");return this},_parseData:function(){var a=this;e.each(this._data,function(b,d){if("thumb"in d===!1)a._data[b].thumb=d.image;if(!1 in d)a._data[b].big=d.image});return this},splice:function(){Array.prototype.splice.apply(this._data,f.array(arguments));return this._parseData()._createThumbnails()},
push:function(){Array.prototype.push.apply(this._data,f.array(arguments));return this._parseData()._createThumbnails()},_getActive:function(){return this._controls.getActive()},validate:function(){return!0},bind:function(a,b){a=D(a);this.$("container").bind(a,this.proxy(b));return this},unbind:function(a){a=D(a);this.$("container").unbind(a);return this},trigger:function(a){a=typeof a==="object"?e.extend(a,{scope:this}):{type:D(a),scope:this};this.$("container").trigger(a);return this},addIdleState:function(a,
b){this._idle.add.apply(this._idle,f.array(arguments));return this},removeIdleState:function(a){this._idle.remove.apply(this._idle,f.array(arguments));return this},enterIdleMode:function(){this._idle.hide();return this},exitIdleMode:function(){this._idle.showAll();return this},enterFullscreen:function(a){this._fullscreen.enter.apply(this,f.array(arguments));return this},exitFullscreen:function(a){this._fullscreen.exit.apply(this,f.array(arguments));return this},toggleFullscreen:function(a){this._fullscreen[this.isFullscreen()?
"exit":"enter"].apply(this,f.array(arguments));return this},bindTooltip:function(a,b){this._tooltip.bind.apply(this._tooltip,f.array(arguments));return this},defineTooltip:function(a,b){this._tooltip.define.apply(this._tooltip,f.array(arguments));return this},refreshTooltip:function(a){this._tooltip.show.apply(this._tooltip,f.array(arguments));return this},openLightbox:function(){this._lightbox.show.apply(this._lightbox,f.array(arguments));return this},closeLightbox:function(){this._lightbox.hide.apply(this._lightbox,
f.array(arguments));return this},getActiveImage:function(){return this._getActive().image||void 0},getActiveThumb:function(){return this._thumbnails[this._active].image||void 0},getMousePosition:function(a){return{x:a.pageX-this.$("container").offset().left,y:a.pageY-this.$("container").offset().top}},addPan:function(a){if(this._options.imageCrop!==!1){var a=e(a||this.getActiveImage()),b=this,d=a.width()/2,c=a.height()/2,i=parseInt(a.css("left"),10),j=parseInt(a.css("top"),10),h=i||0,g=j||0,k=0,p=
0,l=!1,n=f.timestamp(),o=0,q=0,r=function(b,c,d){if(b>0&&(q=Math.round(Math.max(b*-1,Math.min(0,c))),o!==q))if(o=q,m===8)a.parent()["scroll"+d](q*-1);else b={},b[d.toLowerCase()]=q,a.css(b)},N=function(a){if(!(f.timestamp()-n<50))l=!0,d=b.getMousePosition(a).x,c=b.getMousePosition(a).y};m===8&&(a.parent().scrollTop(g*-1).scrollLeft(h*-1),a.css({top:0,left:0}));this.$("stage").unbind("mousemove",N).bind("mousemove",N);f.addTimer("pan",function(){l&&(k=a.width()-b._stageWidth,p=a.height()-b._stageHeight,
i=d/b._stageWidth*k*-1,j=c/b._stageHeight*p*-1,h+=(i-h)/b._options.imagePanSmoothness,g+=(j-g)/b._options.imagePanSmoothness,r(p,g,"Top"),r(k,h,"Left"))},50,!0);return this}},proxy:function(a,b){if(typeof a!=="function")return function(){};b=b||this;return function(){return a.apply(b,f.array(arguments))}},removePan:function(){this.$("stage").unbind("mousemove");f.clearTimer("pan");return this},addElement:function(a){var b=this._dom;e.each(f.array(arguments),function(a,c){b[c]=f.create("galleria-"+
c)});return this},attachKeyboard:function(a){this._keyboard.attach.apply(this._keyboard,f.array(arguments));return this},detachKeyboard:function(){this._keyboard.detach.apply(this._keyboard,f.array(arguments));return this},appendChild:function(a,b){this.$(a).append(this.get(b)||b);return this},prependChild:function(a,b){this.$(a).prepend(this.get(b)||b);return this},remove:function(a){this.$(f.array(arguments).join(",")).remove();return this},append:function(a){var b,d;for(b in a)if(a.hasOwnProperty(b))if(a[b].constructor===
Array)for(d=0;a[b][d];d++)this.appendChild(b,a[b][d]);else this.appendChild(b,a[b]);return this},_scaleImage:function(a,b){var a=a||this._controls.getActive(),d,c=function(a){e(a.container).children(":first").css({top:Math.max(0,f.parseValue(a.image.style.top)),left:Math.max(0,f.parseValue(a.image.style.left)),width:f.parseValue(a.image.width),height:f.parseValue(a.image.height)})},b=e.extend({width:this._stageWidth,height:this._stageHeight,crop:this._options.imageCrop,max:this._options.maxScaleRatio,
min:this._options.minScaleRatio,margin:this._options.imageMargin,position:this._options.imagePosition},b);this._options.layerFollow&&this._options.imageCrop!==!0?typeof b.complete=="function"?(d=b.complete,b.complete=function(){d.call(a,a);c(a)}):b.complete=c:e(a.container).children(":first").css({top:0,left:0});a.scale(b);return this},updateCarousel:function(){this._carousel.update();return this},rescale:function(a,b,d){var c=this;typeof a==="function"&&(d=a,a=void 0);var e=function(){c._stageWidth=
a||c.$("stage").width();c._stageHeight=b||c.$("stage").height();c._scaleImage();c._options.carousel&&c.updateCarousel();c.trigger(Galleria.RESCALE);typeof d==="function"&&d.call(c)};Galleria.WEBKIT&&!a&&!b?f.addTimer("scale",e,10):e.call(c);return this},refreshImage:function(){this._scaleImage();this._options.imagePan&&this.addPan();return this},show:function(a,b,d){if(!(a===!1||!this._options.queue&&this._queue.stalled))if(a=Math.max(0,Math.min(parseInt(a,10),this.getDataLength()-1)),b=typeof b!==
"undefined"?!!b:a<this.getIndex(),!d&&Galleria.History)Galleria.History.set(a.toString());else return this._active=a,Array.prototype.push.call(this._queue,{index:a,rewind:b}),this._queue.stalled||this._show(),this},_show:function(){var a=this,b=this._queue[0],d=this.getData(b.index);if(d){var c=this.isFullscreen()&&"big"in d?d.big:d.image,i=this._controls.getActive(),j=this._controls.getNext(),h=j.isCached(c),g=this._thumbnails[b.index],k=function(b,c,d,g,h){return function(){a._queue.stalled=!1;
f.toggleQuality(c.image,a._options.imageQuality);a._layers[a._controls.active].innerHTML="";e(d.container).css({zIndex:0,opacity:0}).show();e(c.container).css({zIndex:1}).show();a._controls.swap();a._options.imagePan&&a.addPan(c.image);(b.link||a._options.lightbox)&&e(c.image).css({cursor:"pointer"}).bind("mouseup",function(){b.link?a._options.popupLinks?l.open(b.link,"_blank"):l.location.href=b.link:a.openLightbox()});Array.prototype.shift.call(a._queue);a._queue.length&&a._show();a._playCheck();
a.trigger({type:Galleria.IMAGE,index:g.index,imageTarget:c.image,thumbTarget:h.image})}}(d,j,i,b,g);this._options.carousel&&this._options.carouselFollow&&this._carousel.follow(b.index);if(this._options.preload){var p,m,n=this.getNext(),o;try{for(m=this._options.preload;m>0;m--)p=new Galleria.Picture,o=a.getData(n),p.preload(this.isFullscreen()&&"big"in o?o.big:o.image),n=a.getNext(n)}catch(q){}}f.show(j.container);e(a._thumbnails[b.index].container).addClass("active").siblings(".active").removeClass("active");
a.trigger({type:Galleria.LOADSTART,cached:h,index:b.index,rewind:b.rewind,imageTarget:j.image,thumbTarget:g.image});j.load(c,function(c){e(a._layers[1-a._controls.active]).html(d.layer||"").hide();a._scaleImage(c,{complete:function(c){"image"in i&&f.toggleQuality(i.image,!1);f.toggleQuality(c.image,!1);a._queue.stalled=!0;a.removePan();a.setInfo(b.index);a.setCounter(b.index);d.layer&&e(a._layers[1-a._controls.active]).show();a.trigger({type:Galleria.LOADFINISH,cached:h,index:b.index,rewind:b.rewind,
imageTarget:c.image,thumbTarget:a._thumbnails[b.index].image});var g=a._options.transition;e.each({initial:i.image===null,touch:Galleria.TOUCH,fullscreen:a.isFullscreen()},function(b,c){if(c&&a._options[b+"Transition"]!==void 0)return g=a._options[b+"Transition"],!1});g in G===!1?k():G[g].call(a,{prev:i.container,next:c.container,rewind:b.rewind,speed:a._options.transitionSpeed||400},k)}})})}},getNext:function(a){a=typeof a==="number"?a:this.getIndex();return a===this.getDataLength()-1?0:a+1},getPrev:function(a){a=
typeof a==="number"?a:this.getIndex();return a===0?this.getDataLength()-1:a-1},next:function(){this.getDataLength()>1&&this.show(this.getNext(),!1);return this},prev:function(){this.getDataLength()>1&&this.show(this.getPrev(),!0);return this},get:function(a){return a in this._dom?this._dom[a]:null},getData:function(a){return a in this._data?this._data[a]:this._data[this._active]},getDataLength:function(){return this._data.length},getIndex:function(){return typeof this._active==="number"?this._active:
!1},getStageHeight:function(){return this._stageHeight},getStageWidth:function(){return this._stageWidth},getOptions:function(a){return typeof a==="undefined"?this._options:this._options[a]},setOptions:function(a,b){typeof a==="object"?e.extend(this._options,a):this._options[a]=b;return this},play:function(a){this._playing=!0;this._playtime=a||this._playtime;this._playCheck();this.trigger(Galleria.PLAY);return this},pause:function(){this._playing=!1;this.trigger(Galleria.PAUSE);return this},playToggle:function(a){return this._playing?
this.pause():this.play(a)},isPlaying:function(){return this._playing},isFullscreen:function(){return this._fullscreen.active},_playCheck:function(){var a=this,b=0,d=f.timestamp(),c="play"+this._id;if(this._playing){f.clearTimer(c);var e=function(){b=f.timestamp()-d;b>=a._playtime&&a._playing?(f.clearTimer(c),a.next()):a._playing&&(a.trigger({type:Galleria.PROGRESS,percent:Math.ceil(b/a._playtime*100),seconds:Math.floor(b/1E3),milliseconds:b}),f.addTimer(c,e,20))};f.addTimer(c,e,20)}},setPlaytime:function(a){this._playtime=
a;return this},setIndex:function(a){this._active=a;return this},setCounter:function(a){typeof a==="number"?a++:typeof a==="undefined"&&(a=this.getIndex()+1);this.get("current").innerHTML=a;if(m){var a=this.$("counter"),b=a.css("opacity");parseInt(b,10)===1?f.removeAlpha(a[0]):this.$("counter").css("opacity",b)}return this},setInfo:function(a){var b=this,d=this.getData(a);e.each(["title","description"],function(a,e){var f=b.$("info-"+e);d[e]?f[d[e].length?"show":"hide"]().html(d[e]):f.empty().hide()});
return this},hasInfo:function(a){var b="title description".split(" "),d;for(d=0;b[d];d++)if(this.getData(a)[b[d]])return!0;return!1},jQuery:function(a){var b=this,d=[];e.each(a.split(","),function(a,c){c=e.trim(c);b.get(c)&&d.push(c)});var c=e(b.get(d.shift()));e.each(d,function(a,d){c=c.add(b.get(d))});return c},$:function(a){return this.jQuery.apply(this,f.array(arguments))}};e.each(J,function(a,b){var d=/_/.test(b)?b.replace(/_/g,""):b;Galleria[b.toUpperCase()]="galleria."+d});e.extend(Galleria,
{IE9:m===9,IE8:m===8,IE7:m===7,IE6:m===6,IE:m,WEBKIT:/webkit/.test(x),SAFARI:/safari/.test(x),CHROME:/chrome/.test(x),QUIRK:m&&n.compatMode&&n.compatMode==="BackCompat",MAC:/mac/.test(navigator.platform.toLowerCase()),OPERA:!!l.opera,IPHONE:/iphone/.test(x),IPAD:/ipad/.test(x),ANDROID:/android/.test(x),TOUCH:"ontouchstart"in n});Galleria.addTheme=function(a){a.name||Galleria.raise("No theme name specified");a.defaults=typeof a.defaults!=="object"?{}:K(a.defaults);var b=!1,d;typeof a.css==="string"?
(e("link").each(function(c,e){d=RegExp(a.css);if(d.test(e.href))return b=!0,E(a),!1}),b||e("script").each(function(c,e){d=RegExp("galleria\\."+a.name.toLowerCase()+"\\.");d.test(e.src)&&(b=e.src.replace(/[^\/]*$/,"")+a.css,f.addTimer("css",function(){f.loadCSS(b,"galleria-theme",function(){E(a)})},1))}),b||Galleria.raise("No theme CSS loaded")):E(a);return a};Galleria.loadTheme=function(a,b){var d=z.length,c=l.setTimeout(function(){Galleria.raise("Theme at "+a+" could not load, check theme path.",
!0)},5E3);Galleria.theme=void 0;f.loadScript(a,function(){l.clearTimeout(c);if(d){var a=[];e.each(Galleria.get(),function(c,d){var f=e.extend(d._original.options,{data_source:d._data},b);d.$("container").remove();var k=new Galleria;k._id=d._id;k.init(d._original.target,f);a.push(k)});z=a}})};Galleria.get=function(a){if(y[a])return y[a];else if(typeof a!=="number")return y;else Galleria.raise("Gallery index "+a+" not found")};Galleria.addTransition=function(a,b){G[a]=b};Galleria.utils=f;Galleria.log=
function(){return"console"in l&&"log"in l.console?l.console.log:function(){l.alert(f.array(arguments).join(", "))}}();Galleria.ready=function(a){e.each(z,function(b,d){a.call(d,d._options)});Galleria.ready.callbacks.push(a)};Galleria.ready.callbacks=[];Galleria.raise=function(a,b){var d=b?"Fatal error":"Error",c=function(a){var c='<div style="padding:4px;margin:0 0 2px;background:#'+(b?"811":"222")+'";>'+(b?"<strong>"+d+": </strong>":"")+a+"</div>";e.each(y,function(){var a=this.$("errors"),b=this.$("target");
a.length||(b.css("position","relative"),a=this.addElement("errors").appendChild("target","errors").$("errors").css({color:"#fff",position:"absolute",top:0,left:0,zIndex:1E5}));a.append(c)})};if(A){if(c(a),b)throw Error(d+": "+a);}else b&&!L&&(L=!0,b=!1,c("Image gallery could not load."))};Galleria.version=1.25;Galleria.requires=function(a,b){Galleria.version<a&&Galleria.raise(b||"You need to upgrade Galleria to version "+a+" to use one or more components.",!0)};Galleria.Picture=function(a){this.id=
a||null;this.image=null;this.container=f.create("galleria-image");e(this.container).css({overflow:"hidden",position:"relative"});this.original={width:0,height:0};this.ready=!1;this.tid=null};Galleria.Picture.prototype={cache:{},show:function(){f.show(this.image)},hide:function(){f.moveOut(this.image)},clear:function(){this.image=null},isCached:function(a){return!!this.cache[a]},preload:function(a){e(new Image).load(function(a,d){return function(){d[a]=a}}(a,this.cache)).attr("src",a)},load:function(a,
b){this.tid=l.setTimeout(function(a){return function(){Galleria.raise("Image not loaded in "+Math.round(B/1E3)+" seconds: "+a)}}(a),B);this.image=new Image;var d=!1,c=e(this.container),i=e(this.image),j=function(a,b,c){return function(){var d=function(){a.original={height:this.height,width:this.width};a.cache[c]=c;l.clearTimeout(a.tid);typeof b=="function"&&l.setTimeout(function(){b.call(a,a)},1)};!this.width||!this.height?l.setTimeout(function(a){return function(){a.width&&a.height?d.call(a):Galleria.raise("Could not extract width/height from image: "+
a.src+". Traced measures: width:"+a.width+"px, height: "+a.height+"px.")}}(this),2):d.call(this)}}(this,b,a);c.find("img").remove();i.css("display","block").appendTo(this.container);f.hide(this.image);if(this.cache[a])return this.image.src=a,j.call(this.image),this.container;e(this.image).load(j).error(function(){d?C?e(this).attr("src",C):Galleria.raise("Image not found: "+a):(d=!0,l.setTimeout(function(a,b){return function(){a.attr("src",b+"?"+f.timestamp())}}(e(this),a),50))}).attr("src",a);return this.container},
scale:function(a){a=e.extend({width:0,height:0,min:void 0,max:void 0,margin:0,complete:function(){},position:"center",crop:!1,canvas:!1},a);if(!this.image)return this.container;var b,d,c=this,i=e(c.container),j;f.wait({until:function(){b=a.width||i.width()||f.parseValue(i.css("width"));d=a.height||i.height()||f.parseValue(i.css("height"));return b&&d},success:function(){var h=(b-a.margin*2)/c.original.width,g=(d-a.margin*2)/c.original.height,i={"true":Math.max(h,g),width:h,height:g,"false":Math.min(h,
g)}[a.crop.toString()],h="";a.max&&(i=Math.min(a.max,i));a.min&&(i=Math.max(a.min,i));e.each(["width","height"],function(a,b){e(c.image)[b](c[b]=c.image[b]=Math.round(c.original[b]*i))});e(c.container).width(b).height(d);if(a.canvas&&s)s.elem.width=c.width,s.elem.height=c.height,h=c.image.src+":"+c.width+"x"+c.height,c.image.src=s.cache[h]||function(a){s.context.drawImage(c.image,0,0,c.original.width*i,c.original.height*i);try{return j=s.elem.toDataURL(),s.length+=j.length,s.cache[a]=j}catch(b){return c.image.src}}(h);
var l={},m={},h=function(a,b,d){var g=0;/\%/.test(a)?(a=parseInt(a,10)/100,b=c.image[b]||e(c.image)[b](),g=Math.ceil(b*-1*a+d*a)):g=f.parseValue(a);return g},n={top:{top:0},left:{left:0},right:{left:"100%"},bottom:{top:"100%"}};e.each(a.position.toLowerCase().split(" "),function(a,b){b==="center"&&(b="50%");l[a?"top":"left"]=b});e.each(l,function(a,b){n.hasOwnProperty(b)&&e.extend(m,n[b])});l=l.top?e.extend(l,m):m;l=e.extend({top:"50%",left:"50%"},l);e(c.image).css({position:"absolute",top:h(l.top,
"height",d),left:h(l.left,"width",b)});c.show();c.ready=!0;a.complete.call(c,c)},error:function(){Galleria.raise("Could not scale image: "+c.image.src)},timeout:1E3});return this}};e.extend(e.easing,{galleria:function(a,b,d,c,e){return(b/=e/2)<1?c/2*b*b*b+d:c/2*((b-=2)*b*b+2)+d},galleriaIn:function(a,b,d,c,e){return c*(b/=e)*b+d},galleriaOut:function(a,b,d,c,e){return-c*(b/=e)*(b-2)+d}});e.fn.galleria=function(a){return this.each(function(){e(this).data("galleria",(new Galleria).init(this,a))})}})(jQuery);


/*
 AnythingSlider v1.7.13 minified using Google Closure Compiler
 Original by Chris Coyier: http://css-tricks.com
 Get the latest version: https://github.com/ProLoser/AnythingSlider
*/

(function(d){d.anythingSlider=function(h,i){var a=this,b;a.el=h;a.$el=d(h).addClass("anythingBase").wrap('<div class="anythingSlider"><div class="anythingWindow" /></div>');a.$el.data("AnythingSlider",a);a.init=function(){a.options=b=d.extend({},d.anythingSlider.defaults,i);a.initialized=false;d.isFunction(b.onBeforeInitialize)&&a.$el.bind("before_initialize",b.onBeforeInitialize);a.$el.trigger("before_initialize",a);a.$wrapper=a.$el.parent().closest("div.anythingSlider").addClass("anythingSlider-"+ b.theme);a.$window=a.$el.closest("div.anythingWindow");a.win=window;a.$win=d(a.win);a.$controls=d('<div class="anythingControls"></div>').appendTo(b.appendControlsTo!==null&&d(b.appendControlsTo).length?d(b.appendControlsTo):a.$wrapper);a.$startStop=d('<a href="#" class="start-stop"></a>');b.buildStartStop&&a.$startStop.appendTo(b.appendStartStopTo!==null&&d(b.appendStartStopTo).length?d(b.appendStartStopTo):a.$controls);a.$nav=d('<ul class="thumbNav" />').appendTo(b.appendNavigationTo!==null&&d(b.appendNavigationTo).length? d(b.appendNavigationTo):a.$controls);a.flag=false;a.playing=b.autoPlay;a.slideshow=false;a.hovered=false;a.panelSize=[];a.currentPage=b.startPanel=parseInt(b.startPanel,10)||1;b.changeBy=parseInt(b.changeBy,10)||1;a.adj=b.infiniteSlides?0:1;a.width=a.$el.width();a.height=a.$el.height();a.outerPad=[a.$wrapper.innerWidth()-a.$wrapper.width(),a.$wrapper.innerHeight()-a.$wrapper.height()];b.playRtl&&a.$wrapper.addClass("rtl");if(b.expand)a.$outer=a.$wrapper.parent(),a.$window.css({width:"100%",height:"100%"}), a.checkResize();b.buildStartStop&&a.buildAutoPlay();b.buildArrows&&a.buildNextBackButtons();if(!b.autoPlay)b.autoPlayLocked=false;a.updateSlider();a.$lastPage=a.$currentPage;a.runTimes=d("div.anythingSlider").index(a.$wrapper)+1;a.regex=RegExp("panel"+a.runTimes+"-(\\d+)","i");a.runTimes===1&&a.makeActive();if(!d.isFunction(d.easing[b.easing]))b.easing="swing";b.pauseOnHover&&a.$wrapper.hover(function(){a.playing&&(a.$el.trigger("slideshow_paused",a),a.clearTimer(true))},function(){a.playing&&(a.$el.trigger("slideshow_unpaused", a),a.startStop(a.playing,true))});a.setCurrentPage(a.gotoHash()||b.startPage,false);a.slideControls(false);a.$wrapper.bind("mouseenter mouseleave",function(b){a.hovered=b.type==="mouseenter"?true:false;a.slideControls(a.hovered,false)});d(document).keyup(function(c){if(b.enableKeyboard&&a.$wrapper.is(".activeSlider")&&!c.target.tagName.match("TEXTAREA|INPUT|SELECT")&&(b.vertical||!(c.which===38||c.which===40)))switch(c.which){case 39:case 40:a.goForward();break;case 37:case 38:a.goBack()}});a.$items.delegate("a", "focus.AnythingSlider",function(c){var e=d(this).closest(".panel"),e=a.$items.index(e)+a.adj;a.$items.find(".focusedLink").removeClass("focusedLink");d(this).addClass("focusedLink");a.$window.scrollLeft(0);if(e>=a.currentPage+b.showMultiple||e<a.currentPage)a.gotoPage(e),c.preventDefault()});var c="slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed".split(" ");d.each("onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete".split(" "), function(f,e){d.isFunction(b[e])&&a.$el.bind(c[f],b[e])});d.isFunction(b.onSlideComplete)&&a.$el.bind("slide_complete",function(){setTimeout(function(){b.onSlideComplete(a)},0)});a.initialized=true;a.$el.trigger("initialized",a);a.startStop(a.playing)};a.updateSlider=function(){a.$el.children(".cloned").remove();a.$nav.empty();a.currentPage=a.currentPage||1;a.$items=a.$el.children();a.pages=a.$items.length;a.dir=b.vertical?"top":"left";b.showMultiple=b.vertical?1:parseInt(b.showMultiple,10)||1;if(b.showMultiple> 1){if(b.showMultiple>a.pages)b.showMultiple=a.pages;a.adjustMultiple=b.infiniteSlides&&a.pages>1?0:b.showMultiple-1;a.pages=a.$items.length-a.adjustMultiple}a.$controls.add(a.$nav).add(a.$startStop).add(a.$forward).add(a.$back)[a.pages<=1?"hide":"show"]();a.pages>1&&a.buildNavigation();b.infiniteSlides&&a.pages>1&&(a.$el.prepend(a.$items.filter(":last").clone().removeAttr("id").addClass("cloned")),b.showMultiple>1?a.$el.append(a.$items.filter(":lt("+b.showMultiple+")").clone().removeAttr("id").addClass("cloned").addClass("multiple")): a.$el.append(a.$items.filter(":first").clone().removeAttr("id").addClass("cloned")),a.$el.find(".cloned").each(function(){d(this).find("a,input,textarea,select,button,area").attr("disabled","disabled");d(this).find("[id]").removeAttr("id")}));a.$items=a.$el.children().addClass("panel"+(b.vertical?" vertical":""));a.setDimensions();b.resizeContents?(a.$items.css("width",a.width),a.$wrapper.css("width",a.getDim(a.currentPage)[0]),a.$wrapper.add(a.$items).css("height",a.height)):a.$win.load(function(){a.setDimensions()}); if(a.currentPage>a.pages)a.currentPage=a.pages;a.setCurrentPage(a.currentPage,false);a.$nav.find("a").eq(a.currentPage-1).addClass("cur")};a.buildNavigation=function(){if(b.buildNavigation&&a.pages>1){var c,f;a.$items.filter(":not(.cloned)").each(function(e){var g=e+1;c=(g===1?"first":"")+(g===a.pages?"last":"");f=d('<a href="#"></a>').addClass("panel"+g).wrap('<li class="'+c+'" />');a.$nav.append(f.parent());d.isFunction(b.navigationFormatter)?(c=b.navigationFormatter(g,d(this)),f.html("<span>"+ c+"</span>"),parseInt(f.find("span").css("text-indent"),10)<0&&f.addClass(b.tooltipClass).attr("title",c)):f.html("<span>"+g+"</span>");f.bind(b.clickControls,function(c){if(!a.flag&&b.enableNavigation)a.flag=true,setTimeout(function(){a.flag=false},100),a.gotoPage(g),b.hashTags&&a.setHash(g);c.preventDefault()})});if(b.navigationSize!==false&&parseInt(b.navigationSize,10)<a.pages)a.$controls.find(".anythingNavWindow").length||a.$nav.before('<ul><li class="prev"><a href="#"><span>'+b.backText+"</span></a></li></ul>").after('<ul><li class="next"><a href="#"><span>'+ b.forwardText+"</span></a></li></ul>").wrap('<div class="anythingNavWindow"></div>'),a.navWidths=a.$nav.find("li").map(function(){return d(this).innerWidth()+Math.ceil(parseInt(d(this).find("span").css("left"),10)/2||0)}).get(),a.navLeft=1,a.$nav.width(a.navWidth(1,a.pages+1)+5),a.$controls.find(".anythingNavWindow").width(a.navWidth(1,b.navigationSize+1)).end().find(".prev,.next").bind(b.clickControls,function(c){if(!a.flag)a.flag=true,setTimeout(function(){a.flag=false},200),a.navWindow(a.navLeft+ b.navigationSize*(d(this).is(".prev")?-1:1));c.preventDefault()})}};a.navWidth=function(b,f){var d;d=Math.min(b,f);for(var g=Math.max(b,f),j=0;d<g;d++)j+=a.navWidths[d-1]||0;return j};a.navWindow=function(c){var d=a.pages-b.navigationSize+1,c=c<=1?1:c>1&&c<d?c:d;if(c!==a.navLeft)a.$controls.find(".anythingNavWindow").animate({scrollLeft:a.navWidth(1,c),width:a.navWidth(c,c+b.navigationSize)},{queue:false,duration:b.animationTime}),a.navLeft=c};a.buildNextBackButtons=function(){a.$forward=d('<span class="arrow forward"><a href="#"><span>'+ b.forwardText+"</span></a></span>");a.$back=d('<span class="arrow back"><a href="#"><span>'+b.backText+"</span></a></span>");a.$back.bind(b.clickBackArrow,function(c){if(b.enableArrows&&!a.flag)a.flag=true,setTimeout(function(){a.flag=false},100),a.goBack();c.preventDefault()});a.$forward.bind(b.clickForwardArrow,function(c){if(b.enableArrows&&!a.flag)a.flag=true,setTimeout(function(){a.flag=false},100),a.goForward();c.preventDefault()});a.$back.add(a.$forward).find("a").bind("focusin focusout",function(){d(this).toggleClass("hover")}); a.$back.appendTo(b.appendBackTo!==null&&d(b.appendBackTo).length?d(b.appendBackTo):a.$wrapper);a.$forward.appendTo(b.appendForwardTo!==null&&d(b.appendForwardTo).length?d(b.appendForwardTo):a.$wrapper);a.$arrowWidth=a.$forward.width()};a.buildAutoPlay=function(){a.$startStop.html("<span>"+(a.playing?b.stopText:b.startText)+"</span>").bind(b.clickSlideshow,function(c){b.enableStartStop&&(a.startStop(!a.playing),a.makeActive(),a.playing&&!b.autoPlayDelayed&&a.goForward(true));c.preventDefault()}).bind("focusin focusout", function(){d(this).toggleClass("hover")})};a.checkResize=function(c){clearTimeout(a.resizeTimer);a.resizeTimer=setTimeout(function(){var d=a.$outer.width()-a.outerPad[0],e=(a.$outer[0].tagName==="BODY"?a.$win.height():a.$outer.height())-a.outerPad[1];if(a.width*b.showMultiple!==d||a.height!==e)a.setDimensions(),a.gotoPage(a.currentPage,a.playing,null,-1);typeof c==="undefined"&&a.checkResize()},500)};a.setDimensions=function(){var c,f,e,g=0,j={width:"100%",height:"100%"},h=b.showMultiple>1?a.width|| a.$window.width()/b.showMultiple:a.$window.width(),i=a.$win.width();if(b.expand)c=a.$outer.width()-a.outerPad[0],a.height=f=a.$outer.height()-a.outerPad[1],a.$wrapper.add(a.$window).add(a.$items).css({width:c,height:f}),a.width=h=b.showMultiple>1?c/b.showMultiple:c;a.$items.each(function(k){e=d(this).children();if(b.resizeContents)c=a.width,f=a.height,d(this).css({width:c,height:f}),e.length&&e[0].tagName==="EMBED"&&e.attr(j),e[0].tagName==="OBJECT"&&e.find("embed").attr(j),e.length===1&&e.css(j); else{c=d(this).width()||a.width;e.length===1&&c>=i&&(c=e.width()>=i?h:e.width(),e.css("max-width",c));d(this).css("width",c);f=e.length===1?e.outerHeight(true):d(this).height();if(f<=a.outerPad)f=a.height;d(this).css("height",f)}a.panelSize[k]=[c,f,g];g+=b.vertical?f:c});a.$el.css(b.vertical?"height":"width",g)};a.getDim=function(c){if(a.pages<1||isNaN(c))return[a.width,a.height];var c=b.infiniteSlides&&a.pages>1?c:c-1,d,e=a.panelSize[c][0],g=a.panelSize[c][1];if(b.showMultiple>1)for(d=1;d<b.showMultiple;d++)e+= a.panelSize[(c+d)%b.showMultiple][0],g=Math.max(g,a.panelSize[c+d][1]);return[e,g]};a.goForward=function(c){a.gotoPage(a.currentPage+b.changeBy*(b.playRtl?-1:1),c)};a.goBack=function(c){a.gotoPage(a.currentPage+b.changeBy*(b.playRtl?1:-1),c)};a.gotoPage=function(c,f,e,g){f!==true&&(f=false,a.startStop(false),a.makeActive());/^[#|.]/.test(c)&&d(c).length&&(c=d(c).closest(".panel").index()+a.adj);b.changeBy!==1&&(c<0&&(c+=a.pages),c>a.pages&&(c-=a.pages));if(!(a.pages<=1)){a.$lastPage=a.$currentPage; if(typeof c!=="number")c=b.startPanel,a.setCurrentPage(c);if(!f||!b.isVideoPlaying(a))c>a.pages+1-a.adj&&(c=!b.infiniteSlides&&!b.stopAtEnd?1:a.pages),c<a.adj&&(c=!b.infiniteSlides&&!b.stopAtEnd?a.pages:1),a.currentPage=c>a.pages?a.pages:c<1?1:a.currentPage,a.$currentPage=a.$items.eq(a.currentPage-a.adj),a.exactPage=c,a.targetPage=c===0?a.pages-a.adj:c>a.pages?1-a.adj:c-a.adj,a.$targetPage=a.$items.eq(a.targetPage),g=g||b.animationTime,g>=0&&a.$el.trigger("slide_init",a),a.slideControls(true,false), f!==true&&(f=false),(!f||b.stopAtEnd&&c===a.pages)&&a.startStop(false),g>=0&&a.$el.trigger("slide_begin",a),setTimeout(function(d){b.resizeContents||(d=a.getDim(c),a.$wrapper.filter(":not(:animated)").animate({width:d[0]||a.width,height:d[1]||a.height},{queue:false,duration:g<0?0:g,easing:b.easing}));d={};d[a.dir]=-a.panelSize[b.infiniteSlides&&a.pages>1?c:c-1][2];a.$el.filter(":not(:animated)").animate(d,{queue:false,duration:g,easing:b.easing,complete:function(){a.endAnimation(c,e,g)}})},parseInt(b.delayBeforeAnimate, 10)||0)}};a.endAnimation=function(c,d,e){c===0?(a.$el.css(a.dir,-a.panelSize[a.pages][2]),c=a.pages):c>a.pages&&(a.$el.css(a.dir,-a.panelSize[1][2]),c=1);a.exactPage=c;a.setCurrentPage(c,false);a.$items.removeClass("activePage").eq(c-a.adj).addClass("activePage");a.hovered||a.slideControls(false);e>=0&&a.$el.trigger("slide_complete",a);typeof d==="function"&&d(a);b.autoPlayLocked&&!a.playing&&setTimeout(function(){a.startStop(true)},b.resumeDelay-(b.autoPlayDelayed?b.delay:0))};a.setCurrentPage=function(c, d){c=parseInt(c,10);if(!(a.pages<1||c===0||isNaN(c))){c>a.pages+1-a.adj&&(c=a.pages-a.adj);c<a.adj&&(c=1);b.buildNavigation&&a.$nav.find(".cur").removeClass("cur").end().find("a").eq(c-1).addClass("cur");!b.infiniteSlides&&b.stopAtEnd&&(a.$wrapper.find("span.forward")[c===a.pages?"addClass":"removeClass"]("disabled").end().find("span.back")[c===1?"addClass":"removeClass"]("disabled"),c===a.pages&&a.playing&&a.startStop());if(!d){var e=a.getDim(c);a.$wrapper.css({width:e[0],height:e[1]}).add(a.$window).scrollLeft(0); a.$el.css(a.dir,-a.panelSize[b.infiniteSlides&&a.pages>1?c:c-1][2])}a.currentPage=c;a.$currentPage=a.$items.removeClass("activePage").eq(c-a.adj).addClass("activePage")}};a.makeActive=function(){a.$wrapper.is(".activeSlider")||(d(".activeSlider").removeClass("activeSlider"),a.$wrapper.addClass("activeSlider"))};a.gotoHash=function(){var c=a.win.location.hash,f=c.indexOf("&"),e=c.match(a.regex);e===null&&!/^#&/.test(c)?(c=c.substring(0,f>=0?f:c.length),e=d(c).closest(".anythingBase")[0]===a.el?d(c).closest(".panel").index(): null):e!==null&&(e=b.hashTags?parseInt(e[1],10):null);return e};a.setHash=function(b){var d="panel"+a.runTimes+"-",e=a.win.location.hash;if(typeof e!=="undefined")a.win.location.hash=e.indexOf(d)>0?e.replace(a.regex,d+b):e+"&"+d+b};a.slideControls=function(c){var d=c?0:b.animationTime,e=c?b.animationTime:0,g=c?1:0,h=c?0:1;b.toggleControls&&a.$controls.stop(true,true).delay(d)[c?"slideDown":"slideUp"](b.animationTime/2).delay(e);b.buildArrows&&b.toggleArrows&&(!a.hovered&&a.playing&&(h=1,g=0),a.$forward.stop(true, true).delay(d).animate({right:h*a.$arrowWidth,opacity:g},b.animationTime/2),a.$back.stop(true,true).delay(d).animate({left:h*a.$arrowWidth,opacity:g},b.animationTime/2))};a.clearTimer=function(b){if(a.timer&&(a.win.clearInterval(a.timer),!b&&a.slideshow))a.$el.trigger("slideshow_stop",a),a.slideshow=false};a.startStop=function(c,d){c!==true&&(c=false);if((a.playing=c)&&!d)a.$el.trigger("slideshow_start",a),a.slideshow=true;b.buildStartStop&&(a.$startStop.toggleClass("playing",c).find("span").html(c? b.stopText:b.startText),parseInt(a.$startStop.find("span").css("text-indent"),10)<0&&a.$startStop.addClass(b.tooltipClass).attr("title",c?b.stopText:b.startText));c?(a.clearTimer(true),a.timer=a.win.setInterval(function(){b.isVideoPlaying(a)?b.resumeOnVideoEnd||a.startStop():a.goForward(true)},b.delay)):a.clearTimer()};a.init()};d.anythingSlider.defaults={theme:"default",expand:false,resizeContents:true,vertical:false,showMultiple:false,easing:"swing",buildArrows:true,buildNavigation:true,buildStartStop:true, appendForwardTo:null,appendBackTo:null,appendControlsTo:null,appendNavigationTo:null,appendStartStopTo:null,toggleArrows:false,toggleControls:false,startText:"Start",stopText:"Stop",forwardText:"&raquo;",backText:"&laquo;",tooltipClass:"tooltip",enableArrows:true,enableNavigation:true,enableStartStop:true,enableKeyboard:true,startPanel:1,changeBy:1,hashTags:true,infiniteSlides:true,navigationFormatter:null,navigationSize:false,autoPlay:false,autoPlayLocked:false,autoPlayDelayed:false,pauseOnHover:true, stopAtEnd:false,playRtl:false,delay:3E3,resumeDelay:15E3,animationTime:600,delayBeforeAnimate:0,clickForwardArrow:"click",clickBackArrow:"click",clickControls:"click focusin",clickSlideshow:"click",resumeOnVideoEnd:true,addWmodeToObject:"opaque",isVideoPlaying:function(){return false}};d.fn.anythingSlider=function(h,i){return this.each(function(){var a,b=d(this).data("AnythingSlider");(typeof h).match("object|undefined")?b?b.updateSlider():new d.anythingSlider(this,h):/\d/.test(h)&&!isNaN(h)&&b?(a= typeof h==="number"?h:parseInt(d.trim(h),10),a>=1&&a<=b.pages&&b.gotoPage(a,false,i)):/^[#|.]/.test(h)&&d(h).length&&b.gotoPage(h,false,i)})}})(jQuery);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*global jQuery */
/*!	
* FitText.js 1.0
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
	
	$.fn.fitText = function( kompressor, options ) {
	    
	    var settings = {
        'minFontSize' : Number.NEGATIVE_INFINITY,
        'maxFontSize' : Number.POSITIVE_INFINITY
      };
	
			return this.each(function(){
				var $this = $(this);              // store the object
				var compressor = kompressor || 1; // set the compressor
        
        if ( options ) { 
          $.extend( settings, options );
        }
        
        // Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function () {
					$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				};

				// Call once to set.
				resizer();
				
				// Call on resize. Opera debounces their resize by default. 
      	$(window).resize(resizer);
      	
			});

	};

})( jQuery );

$(function(){
		
		//Initializing Galleria
		Galleria.loadTheme('http://www.cityshantyband.com/wp-content/themes/handcraftedshanty/js/themes/miniml/galleria.miniml.min.js');

    	// Initialize Galleria
    	$('#galleria').galleria({
        width:650,
        height:366,
        showInfo:true
    	});
		
		//Adding skip links
		
		if($("#featured").length > 0){
			$("#content").addClass("content-hide");
			
			//Adding skip links
			$(".home #content").prepend('<div class="skip-link featured-skip-hide" id="featured-skip" rel="section"><a href="#featured">Back to top </a></div> <!--.skip-link-->');
		
			$("#featured").append('<div class="skip-link content-skip-show " id="content-skip" rel="section"><a href="#content">Down to content</a></div> <!--.skip-link--> ');
		}
		
		$('.single h1, .page h1').fitText();
		
		//Down to content
		
		$('.skip-link a[href="#content"]').click(function(event){
			var $anchor = $(this);
			$("#content").removeClass("content-hide");
			$('#intro h1').fitText(1.5);
			$('html, body').stop().animate({
				scrollTop: $("#content").offset().top
			}, 750 ,'easeInOutExpo' , function() {
					$("#featured").addClass("content-hide").removeAttr('style');
				$("#featured-skip").removeClass("featured-skip-hide").addClass('featured-skip-show');                    		
				$('#content-skip').addClass('content-skip-hide').removeClass('content-skip-show');
				$(window).scrollTop(0).smartresize();
			});
			event.preventDefault();
		});
            
        //Up to featured
		
		$('.skip-link a[href="#featured"]').click(function(event){
		
			var $anchor = $(this);
			
			$("#featured").removeClass("content-hide");
			
			$(window).scrollTop($("#content").offset().top);
			$('html, body').stop().animate({scrollTop: $("#featured").offset().top}, 750 ,'easeInOutExpo' , function() {
			
					$("#content").addClass("content-hide");
					$("#featured-skip").addClass("featured-skip-hide").removeClass('featured-skip-show');
					$('#content-skip').addClass('content-skip-show').removeClass('content-skip-hide');
			});
	
			event.preventDefault();
	
		});
		
		$(window).smartresize(function(){
			bigHeads($("#featured h1"), 12 , 150);
			$("#featured").height($(window).height());
		});
		
		function bigHeads($el, minFontSize, maxFontSize){
				widths = [];
				$el.each(function(){
					 widths.push($(this).width());
				});
				var maxWidth = Math.max.apply(this, widths );
				$el.each(function(){
	  				$this = $(this);
	  				scaleFactor = $this.parent().width() / maxWidth;
	  				currentFontSize = $this.css('font-size').replace('px' , '');
	  				newFontSize = Math.max(Math.min(maxFontSize , Math.round(currentFontSize * scaleFactor)) , minFontSize);
	  				$this.css('font-size' , newFontSize);
				});
	  	}
	  	
		$('#feat-slider').anythingSlider({
		theme : "csb-featured",
		expand: true,
		buildStartStop : false,
		autoPlay : false,
		buildArrows : false,
		onBeforeInitialize : function(){
		$("#featured").height($(window).height());
		//$(window).resize();
		},
		onInitialized : function(){
		$(window).smartresize();
		}
		});
	  		  	
});

(function($) {

var event = $.event,
	resizeTimeout;

event.special[ "smartresize" ] = {
	setup: function() {
		$( this ).bind( "resize", event.special.smartresize.handler );
	},
	teardown: function() {
		$( this ).unbind( "resize", event.special.smartresize.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments;

		// set correct event type
        event.type = "smartresize";

		if(resizeTimeout)
			clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			jQuery.event.handle.apply( context, args );
		}, execAsap === "execAsap"? 0 : 100);
	}
}

$.fn.smartresize = function( fn ) {
	return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
};

})(jQuery);