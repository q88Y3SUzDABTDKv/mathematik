var W;var H;var Xmin;var Xmax;var Ymin;var Ymax;var ctx;var DiffX;var DiffY;var term;var xalt;var xneu;var yalt;var yneu;var niters=0;var max_iters;var epsilon;var initmade=false;window.onload=resizeCanvas;function resizeCanvas(){var a=document.getElementById("containercanvas");a.width=a.offsetWidth;W=a.width;if(W>400){W=400}H=W;if(initmade){resize1();zeichneKS();zeichne_funktion();zeichne_x(xalt,xneu,yalt,yneu)}else{init()}}function ok1(){var hilf=document.getElementById("Xmin").value;var check=pruefe_grenze(hilf);if(!check){return false}Xmin=eval(hilf);if(isNaN(Xmin)){return false}hilf=document.getElementById("Xmax").value;var check=pruefe_grenze(hilf);if(!check){return false}Xmax=eval(hilf);if(isNaN(Xmax)){return false}if(-Xmin==Xmax){Xmax=1.02*Xmax}DiffX=Xmax-Xmin;if(DiffX<=0){return false}return true}function pruefe_grenze(a){if(a.split(",").length-1>0){return false}if(a.split(".").length-1>1){return false}if((a.length>2)&&(a.charAt(0)=="-")&&(a.charAt(1)=="0")&&(a.charAt(2)!=".")){return false}if((a.length>1)&&(a.charAt(0)=="0")&&(a.charAt(1)!=".")){return false}return true}function f(x){hilf=eval(term);return hilf}function init(){initmade=true;window.addEventListener("resize",function(a){resizeCanvas()});canvas1=document.getElementById("myCanvas");resize1();ctx=canvas1.getContext("2d");reset()}function resize1(){canvas1.width=W;canvas1.height=H}function reset(){document.getElementById("Step").disabled=false;document.getElementById("Run").disabled=false;epsilon=document.getElementById("eps").value;max_iters=document.getElementById("max").value;if(max_iters>200){max_iters=200;document.getElementById("max").value=max_iters}if(max_iters<1){max_iters=1;document.getElementById("max").value=max_iters}xalt=parseFloat(document.getElementById("x0").value);document.getElementById("xn").innerHTML="x0: "+xalt;document.getElementById("xneu").innerHTML="              ";term=document.getElementById("f").value;ergaenze_term();var a=xalt;try{yalt=f(xalt)}catch(c){Fehlerbehandlung();return}if(!ok1()){melde("Fehler bei Grenzen KS!");return}DiffX=Xmax-Xmin;BerechneYGrenzen();zeichneKS();zeichne_funktion();if(isNaN(yalt)){melde("x1 existiert nicht!");return}ctx.beginPath();ctx.strokeStyle="red";ctx.lineWidth="1";var b=col(xalt);ctx.moveTo(b,row(0));ctx.lineTo(b,row(yalt));ctx.stroke();document.getElementById("xn").innerHTML="x0: "+xalt;document.getElementById("message").innerHTML="Klick auf Run oder Step";niters=0}function dostep(){niters++;if(niters>1){xalt=xneu;yalt=yneu}xneu=f(xalt);if(isNaN(yalt)||yalt==-Infinity||yalt==Infinity){melde("x"+niters+" existiert nicht!");niters=max_iters;return}yneu=f(xneu);if(isNaN(yneu)||yneu==-Infinity||yneu==Infinity){var b=niters+1;var a=niters-1;melde("x"+b+" existiert nicht!");document.getElementById("xn").innerHTML="x"+a+": "+xalt;document.getElementById("xneu").innerHTML="x"+niters+": "+xneu;niters=max_iters;return}zeichneKS();zeichne_funktion();zeichne_x(xalt,xneu,yalt,yneu);b=niters-1;document.getElementById("xn").innerHTML="x"+b+": "+xalt;document.getElementById("xneu").innerHTML="x"+niters+": "+xneu;if(Math.abs(xneu-xalt)<epsilon){document.getElementById("message").innerHTML="Ziel nach "+niters+" Schritten erreicht!";document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true}else{if(niters==max_iters){document.getElementById("message").innerHTML="Ziel nach "+niters+" Schritten nicht erreicht!";document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true}}}function run(){if(niters==0){dostep()}while(Math.abs(xneu-xalt)>epsilon&&niters<max_iters){dostep()}}function melde(a){document.getElementById("xneu").innerHTML="              ";document.getElementById("message").innerHTML=a;document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true}function zeichneKS(){ctx.clearRect(0,0,W,H);ctx.beginPath();ctx.strokeStyle="black";ctx.lineWidth="1";ctx.font="10px Arial";var e=row(0);ctx.moveTo(0,e);ctx.lineTo(W,e);var b=Math.floor(Xmin);var a=Math.floor(Xmax);var j=e;var o=b;if(DiffX<=20){while(o<=a){var k=col(o);ctx.moveTo(k,j+3);ctx.lineTo(k,j-3);ctx.strokeText(o,k-3,j+10);o=o+1}}o=b+5-b%5;if(DiffX>20&&DiffX<80){while(o<=a){var k=col(o);ctx.moveTo(k,j+3);ctx.lineTo(k,j-3);ctx.strokeText(o,k-5,j+10);o=o+5}}ctx.moveTo(W-5,e-5);ctx.lineTo(W,e);ctx.moveTo(W-5,e+5);ctx.lineTo(W,e);var i=col(0);ctx.moveTo(i,0);ctx.lineTo(i,H);var n=Math.floor(Ymin);var m=Math.floor(Ymax);k=i;var l=n;if(DiffY<=20){while(l<=m){if(l==0){l=l+1}j=row(l);ctx.moveTo(k-3,j);ctx.lineTo(k+3,j);ctx.strokeText(l,k-12,j+3);l=l+1}}l=n+5-n%5;if(DiffY>20&&DiffY<80){while(l<=m){if(l==0){l=l+5}j=row(l);ctx.moveTo(k-3,j);ctx.lineTo(k+3,j);ctx.strokeText(l,k-16,j+3);l=l+5}}ctx.moveTo(i-5,5);ctx.lineTo(i,0);ctx.moveTo(i+5,5);ctx.lineTo(i,0);var h=col(Xmin);var d=row(Xmin);var g=col(Xmax);var c=row(Xmax);ctx.moveTo(h,d);ctx.lineTo(g,c);ctx.stroke()}function zeichne_x(i,d,b,h){ctx.beginPath();ctx.strokeStyle="red";var a=col(i);var e=row(b);var g=col(d);var c=row(h);ctx.moveTo(a,row(0));ctx.lineTo(a,e);ctx.lineTo(g,e);ctx.stroke();ctx.beginPath();ctx.strokeStyle="blue";ctx.moveTo(g,e);ctx.lineTo(g,row(0));ctx.stroke()}function zeichne_funktion(){ctx.beginPath();ctx.strokeStyle="green";var a=Xmin;var c=DiffX/W;while(isNaN(f(a))){a=a+c}var j=a;var g=f(a);var b=row(g);var h=col(a);ctx.moveTo(h,b);for(var e=h+1;e<W;e++){a=Xmin+DiffX/W*e;var d=f(a);if(Math.abs(d-g)<DiffY/2&&!isNaN(d)){ctx.lineTo(e,row(d))}else{ctx.moveTo(e,row(d))}g=d}ctx.stroke()}function BerechneYGrenzen(){var a=Xmin;var b=DiffX/100;while(isNaN(f(a))){a=a+b}Ymin=f(a);Ymax=Ymin;while(a+b<=Xmax){a=a+b;var c=f(a);if(!isNaN(c)&&c<Ymin){Ymin=c}if(!isNaN(c)&&c>Ymax){Ymax=c}}DiffY=Ymax-Ymin;if(DiffY<50){Ymin=Ymin-0.1*DiffY;Ymax=Ymax+0.1*DiffY}if(Ymax>50){Ymax=50}if(Ymin<-50){Ymin=-50}DiffY=Ymax-Ymin}function col(a){return((a-Xmin)/DiffX*W)}function row(a){return((Ymax-a)/DiffY*H)}function ergaenze_term(){term=term.replace(/asin\(/g,"hilfa");term=term.replace(/acos\(/g,"hilfb");term=term.replace(/atan\(/g,"hilfc");term=term.replace(/sin\(/g,"Math.sin(");term=term.replace(/cos\(/g,"Math.cos(");term=term.replace(/tan\(/g,"Math.tan(");term=term.replace(/hilfa/g,"Math.asin(");term=term.replace(/hilfb/g,"Math.acos(");term=term.replace(/hilfc/g,"Math.atan(");term=term.replace(/abs\(/g,"Math.abs(");term=term.replace(/pow\(/g,"Math.pow(");term=term.replace(/sqrt\(/g,"Math.sqrt(");term=term.replace(/log\(/g,"Math.log(");term=term.replace(/ln\(/g,"Math.log(");term=term.replace(/exp\(/g,"Math.ixp");term=term.replace(/e/g,"Math.E");term=term.replace(/Math.ixp/g,"Math.exp(");term=term.replace(/pi/g,"Math.PI")}function Fehlerbehandlung(){alert("Fehler im Funktionsterm. Bitte korrigieren.")};