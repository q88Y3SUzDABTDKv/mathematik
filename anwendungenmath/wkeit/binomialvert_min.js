function resizeCanvas(){var e=document.getElementById("containercanvas");e.width=e.offsetWidth,W=e.width,H=W/2,initmade?(resize1(),30>=n&&zeichne()):init()}function Bikoeff(e,n){var t;t=n>e?0:1,n>e-n&&(n=e-n);for(var a=1;n>=a;a++)t=t*(e-a+1)/a;return t}function calcwk(e,n){for(x=0;e>=x;x++)wkeit[x]=Bikoeff(e,x)*Math.pow(n,x)*Math.pow(1-n,e-x)}function init(){initmade=!0,window.addEventListener("resize",function(){resizeCanvas()}),canvas1=document.getElementById("myCanvas"),resize1(),ctx=canvas1.getContext("2d"),rechne()}function resize1(){canvas1.width=W,canvas1.height=H}function pfalse(){alert("falscher Wert für p"),document.getElementById("p").value=""}function rechne(){if(""==document.getElementById("n").value)return alert("Wert für n eingeben!"),void 0;if(n=parseInt(document.getElementById("n").value),n>1e3&&(n=1e3,document.getElementById("n").value=n),""==document.getElementById("p").value)return alert("Wert für p eingeben!"),void 0;for(var Hilf=document.getElementById("p").value,i=0,op=!1,dezpunkt=!1;i<Hilf.length;){var Zahl=Hilf.charCodeAt(i);if(46==Zahl){if(dezpunkt)return pfalse(),void 0;dezpunkt=!0}if(42>Zahl||Zahl>57||44==Zahl||0==i&&48>Zahl||i==Hilf.length-1&&48>Zahl)return pfalse(),void 0;if(48>Zahl&&op)return pfalse(),void 0;48>Zahl&&46!=Zahl&&(dezpunkt=!1),op=48>Zahl,i++}if(p=parseFloat(eval(Hilf)),void 0==p||0>p||p>1||isNaN(p))return pfalse(),void 0;if(""==document.getElementById("a").value)return alert("Wert für a eingeben!"),void 0;if(a=parseInt(document.getElementById("a").value),0>a&&(a=0),a>n&&(a=n),document.getElementById("a").value=a,""==document.getElementById("b").value)return alert("Wert für b eingeben!"),void 0;b=parseInt(document.getElementById("b").value),a>b&&(b=a),b>n&&(b=n),document.getElementById("b").value=b,summe=0,calcwk(n,p);for(var x=a;b>=x;x++)summe+=wkeit[x];mue=n*p,sigma=Math.sqrt(mue*(1-p)),schreibeWerte(),30>=n?zeichne():ctx.clearRect(0,0,W,H)}function zeichne(){ctx.clearRect(0,0,W,H),ctx.font="11px Arial";for(var e=W/(n+1),t=0;n>=t;t++)ctx.fillStyle=a>t||t>b?"rgb(10,36,106)":"green",ctx.fillRect(t*e,(H-20)*(1-2.5*wkeit[t]),e,2.5*(H-20)*wkeit[t]),ctx.fillText(t,t*e+e/2,H-5)}function schreibeWerte(){var e=sigma*sigma;document.getElementById("N").innerHTML=n,document.getElementById("P").innerHTML=Math.round(1e3*p)/1e3,document.getElementById("A").innerHTML=a,document.getElementById("B").innerHTML=b,document.getElementById("MU").innerHTML=runde(mue),document.getElementById("VAR").innerHTML=runde(e),document.getElementById("SIGMA").innerHTML=runde(sigma),document.getElementById("RESBI").innerHTML=Math.round(1e6*summe)/1e6}function runde(e){return Math.round(1e5*e)/1e5}var W,H,n,p,a,b,mue,sigma,wkeit=new Array,summe,canvas1,initmade=!1;window.onload=resizeCanvas;