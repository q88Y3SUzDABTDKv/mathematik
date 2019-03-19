function resizeCanvas(){var e=document.getElementById("containercanvas");e.width=e.offsetWidth,W=e.width,W>400&&(W=400),H=W,initmade?(resize1(),zeichneKurve()):init()}function init(){initmade=!0,window.addEventListener("resize",function(){resizeCanvas()}),canvas1=document.getElementById("myCanvas"),resize1(),ctx=canvas1.getContext("2d"),canvas1.addEventListener("click",function(e){var t=getMousePos(canvas1,e);Punkt0?Punkt1?Punkt2?Punkt3||(x3=Math.round(100*t.x/W)/10,y3=Math.round(100*t.y/H)/10,Punkt3=!0,document.getElementById("x3").value=x3,document.getElementById("y3").value=y3):(x2=Math.round(100*t.x/W)/10,y2=Math.round(100*t.y/H)/10,Punkt2=!0,document.getElementById("x2").value=x2,document.getElementById("y2").value=y2):(x1=Math.round(100*t.x/W)/10,y1=Math.round(100*t.y/H)/10,Punkt1=!0,document.getElementById("x1").value=x1,document.getElementById("y1").value=y1):(x0=Math.round(100*t.x/W)/10,y0=Math.round(100*t.y/H)/10,Punkt0=!0,document.getElementById("x0").value=x0,document.getElementById("y0").value=y0,document.getElementById("x1").value="",document.getElementById("y1").value="",document.getElementById("x2").value="",document.getElementById("y2").value="",document.getElementById("x3").value="",document.getElementById("y3").value=""),Punkt3&&(Punkt0=!1,Punkt1=!1,Punkt2=!1,Punkt3=!1,document.getElementById("comp").checked=!1,maus=!0,zeichne(),maus=!1)},!1),zeichne()}function resize1(){canvas1.width=W,canvas1.height=H}function zeichne(){document.getElementById("comp").checked?Zufallsfigur():(x0=document.getElementById("x0").value,y0=document.getElementById("y0").value,x1=document.getElementById("x1").value,y1=document.getElementById("y1").value,x2=document.getElementById("x2").value,y2=document.getElementById("y2").value,x3=document.getElementById("x3").value,y3=document.getElementById("y3").value,color=0),x4=2*x3-x2,y4=2*y3-y2,x5=2*x0-x1,y5=2*y0-y1,zeichneKurve()}function zeichneKurve(){ctx.clearRect(0,0,W,H),ctx.beginPath(),0==color&&(ctx.strokeStyle="black"),1==color&&(ctx.strokeStyle="red"),2==color&&(ctx.strokeStyle="green"),3==color&&(ctx.strokeStyle="blue"),ctx.lineWidth="1",ctx.font="14px Arial";var e=W/10*x3,t=H/10*y3;ctx.beginPath(),ctx.fillStyle="black",ctx.arc(e,t,2,0,2*Math.PI),ctx.fill(),x0>x3?ctx.fillText("P3",e-20,t+5):ctx.fillText("P3",e+5,t+5),ctx.beginPath();var a=W/10*x1,x=H/10*y1;ctx.arc(a,x,2,0,2*Math.PI),ctx.fill(),5>x1?ctx.fillText("P1",a-20,x+5):ctx.fillText("P1",a+5,x+5),ctx.beginPath();var c=W/10*x2,u=H/10*y2;ctx.arc(c,u,2,0,2*Math.PI),ctx.fill(),5>x2?ctx.fillText("P2",c-20,u+5):ctx.fillText("P2",c+5,u+5),ctx.beginPath(),x1i=W/10*x0,y1i=H/10*y0,ctx.arc(x1i,y1i,2,0,2*Math.PI),ctx.fill(),x3>x0?ctx.fillText("P0",x1i-20,y1i+5):ctx.fillText("P0",x1i+5,y1i+5),ctx.beginPath(),ctx.setLineDash([5,10]),ctx.moveTo(x1i,y1i),ctx.lineTo(a,x),ctx.moveTo(e,t),ctx.lineTo(c,u),ctx.stroke(),ctx.beginPath(),ctx.setLineDash([1,0]),ctx.moveTo(x1i,y1i);for(var l=1;n+1>l;l++){var o=l/n,d=1-o,y=W/10*(x0*d*d*d+3*o*d*(x1*d+x2*o)+x3*o*o*o),i=H/10*(y0*d*d*d+3*o*d*(y1*d+y2*o)+y3*o*o*o);ctx.lineTo(y,i),x1i=y,y1i=i}if(!maus)for(l=1;n+1>l;l++)o=l/n,d=1-o,y=W/10*(x3*d*d*d+3*o*d*(x4*d+x5*o)+x0*o*o*o),i=H/10*(y3*d*d*d+3*o*d*(y4*d+y5*o)+y0*o*o*o),ctx.lineTo(y,i),x1i=y,y1i=i;ctx.stroke()}function Zufallsfigur(){x0=Math.round(60*Math.random()+2)/10,document.getElementById("x0").value=x0,y0=Math.round(60*Math.random()+2)/10,document.getElementById("y0").value=y0,x1=Math.round(70*Math.random()+1)/10,document.getElementById("x1").value=x1,y1=Math.round(70*Math.random()+1)/10,document.getElementById("y1").value=y1,x2=Math.round(70*Math.random()+1)/10,document.getElementById("x2").value=x2,y2=Math.round(70*Math.random()+1)/10,document.getElementById("y2").value=y2,x3=Math.round(60*Math.random()+2)/10,document.getElementById("x3").value=x3,y3=Math.round(60*Math.random()+2)/10,document.getElementById("y3").value=y3,color=Math.round(3*Math.random())}function getMousePos(e,t){var n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}var H,W;n=20;var x0,y0,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,canvas1,ctx,color=0,Punkt0=!1,Punkt1=!1,Punkt2=!1,Punkt3=!1,maus=!1,initmade=!1;window.onload=resizeCanvas;