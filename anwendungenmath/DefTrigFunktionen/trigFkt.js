function init(){canvas1=document.getElementById("myCanvas"),ctx=canvas1.getContext("2d"),document.getElementById("Sinus").checked=!0,canvas1.addEventListener("mousedown",function(){mousedown=!0},!1),canvas1.addEventListener("mouseup",function(){mousedown=!1},!1),canvas1.addEventListener("mousemove",function(e){if(mousedown){var n=getMousePos(canvas1,e),t=n.x;if(t>=mx-r&&mx+r>=t){t-=mx;var i=my-n.y;0!=t&&(Winkel=Math.abs(Math.atan(i/t))),0==t&&i>0&&(Winkel=Math.PI/2),0==t&&0>i&&(Winkel=3*Math.PI/2),0>t&&i>0&&(Winkel=Math.PI-Winkel),0>t&&0>i&&(Winkel=Math.PI+Winkel),t>0&&0>i&&(Winkel=2*Math.PI-Winkel),zeichne()}}},!1),zeichne()}function OnChangeCheckbox1(e){e.checked&&(mode=1,Winkel=Math.PI/4,document.getElementById("Cosinus").checked=!1,document.getElementById("Tangens").checked=!1,zeichne())}function OnChangeCheckbox2(e){e.checked&&(mode=2,Winkel=Math.PI/4,document.getElementById("Sinus").checked=!1,document.getElementById("Tangens").checked=!1,zeichne())}function OnChangeCheckbox3(e){e.checked&&(mode=3,Winkel=Math.PI/4,document.getElementById("Sinus").checked=!1,document.getElementById("Cosinus").checked=!1,zeichne())}function Line(e,n,t,i){ctx.beginPath(),ctx.moveTo(map(0,e),map(1,n)),ctx.lineWidth="1",ctx.lineTo(map(0,t),map(1,i)),ctx.stroke()}function map(e,n){return s=2,.5>e&&(s=(n-xmin)/(xmax-xmin)*(W-Verschiebung)+Verschiebung),e>.5&&(s=(ymax-n)/(ymax-ymin)*H),s}function invmap(e,n){return ss=2,.5>e&&(ss=xmin+(n-Verschiebung)*(xmax-xmin)/(W-Verschiebung)),e>.5&&(ss=-n*(ymax-ymin)/H-ymin),ss}function beschriftung(){ctx.strokeStyle="black",Line(-4,0,xmax,0),Line(xmax-.1,-.1,xmax,0),Line(xmax-.1,.1,xmax,0),Line(1,-.02,1,.02),ctx.strokeText("1",map(0,1)-4,map(1,0)+12),Line(Math.PI/2,-.02,Math.PI/2,.02),ctx.strokeText(String.fromCharCode(960)+"/2",map(0,Math.PI/2)-6,map(1,0)+12),Line(Math.PI,-.02,Math.PI,.02),ctx.strokeText(String.fromCharCode(960),map(0,Math.PI)-4,map(1,0)+12),Line(3*Math.PI/2,-.02,3*Math.PI/2,.02),ctx.strokeText("3"+String.fromCharCode(960)+"/2",map(0,3*Math.PI/2)-8,map(1,0)+12),Line(0,ymin,0,ymax),Line(-.1,ymax-.1,0,ymax),Line(.1,ymax-.1,0,ymax),Line(-.02,1,.02,1),ctx.strokeText("1",map(0,0)-8,map(1,1)+4)}function zeichne(){ctx.clearRect(0,0,W,H),ctx.beginPath(),ctx.strokeStyle="black",ctx.lineWidth="1",beschriftung(),ctx.stroke(),ctx.beginPath(),ctx.arc(mx,my,r,0,2*Math.PI),ctx.stroke(),ctx.beginPath();for(var e=0;300>=e;e++){var n;n=0==e?xmin:(e-1)/deltax+xmin;var t=e/deltax+xmin,i=f(n),a=f(t);Math.abs(a-i)<1&&Line(n,i,t,a)}y0=f(Winkel),phi.innerHTML=Math.round(18e3*Winkel/Math.PI)/100,res.innerHTML=3==mode&&Math.abs(y0)>1e5?"nicht definiert":Math.round(1e3*y0)/1e3,x0=invmap(0,mx)+Math.cos(Winkel),Line(invmap(0,mx),0,x0,Math.sin(Winkel)),2==mode&&Line(x0,0,x0,Math.sin(Winkel)),3==mode&&Line(invmap(0,mx),0,invmap(0,mx+r),y0),ctx.strokeStyle="red",Line(0,0,Winkel,0),ctx.stroke(),ctx.beginPath(),ctx.arc(mx,my,r,2*Math.PI-Winkel,2*Math.PI),ctx.stroke(),ctx.beginPath(),ctx.strokeStyle="blue",1==mode&&Line(x0,0,x0,y0),2==mode&&Line(invmap(0,mx),0,x0,0),3==mode&&Line(invmap(0,mx+r),0,invmap(0,mx+r),y0),Line(Winkel,0,Winkel,y0),ctx.stroke()}function f(e){var n;return 1==mode&&(n=Math.sin(e)),2==mode&&(n=Math.cos(e)),3==mode&&(n=Math.tan(e)),n}function dostep(){Winkel+=5*Math.PI/180,Winkel>2*Math.PI&&(Winkel-=2*Math.PI),zeichne()}function getMousePos(e,n){var t=e.getBoundingClientRect();return{x:n.clientX-t.left,y:n.clientY-t.top}}W=500,H=200,Verschiebung=130,Ursprungx=Verschiebung,Ursprungy=H/2,deltax=40,xmax=6.3,xmin=0,ymax=1.7,ymin=-ymax,mx=Verschiebung/2,my=H/2,r=map(0,1)-Ursprungx;var x0,y0,mode=1,Winkel=Math.PI/4,canvas1,ctx,mousedown=!1;window.onload=init;