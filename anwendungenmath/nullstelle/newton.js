var W;var H;var Xmin;var Xmax;var Ymin;var Ymax;var ctx;var DiffX;var DiffY;var term;var xalt;var xneu;var yalt;var yneu;var y1,y2;var niters=0;var max_iters;var epsilon;var initmade=false;window.onload=resizeCanvas;function resizeCanvas(){var a=document.getElementById("containercanvas");a.width=a.offsetWidth;W=a.width;if(W>400){W=400}H=W;if(initmade){resize1();zeichneKS();zeichne_funktion();zeichne_x(xalt,"red");zeichne_Tangente(y1,y2);if(!isNaN(xneu)){zeichne_x(xneu,"blue")}}else{init()}}function ok1(){var hilf=document.getElementById("Xmin").value;var check=pruefe_grenze(hilf);if(!check){return false}Xmin=eval(hilf);if(isNaN(Xmin)){return false}hilf=document.getElementById("Xmax").value;var check=pruefe_grenze(hilf);if(!check){return false}Xmax=eval(hilf);if(isNaN(Xmax)){return false}if(-Xmin==Xmax){Xmax=1.02*Xmax}DiffX=Xmax-Xmin;if(DiffX<=0){return false}return true}function pruefe_grenze(a){if(a.split(",").length-1>0){return false}if(a.split(".").length-1>1){return false}if((a.length>2)&&(a.charAt(0)=="-")&&(a.charAt(1)=="0")&&(a.charAt(2)!=".")){return false}if((a.length>1)&&(a.charAt(0)=="0")&&(a.charAt(1)!=".")){return false}return true}function f(x){hilf=eval(term);return hilf}function init(){initmade=true;window.addEventListener("resize",function(a){resizeCanvas()});canvas1=document.getElementById("myCanvas");resize1();ctx=canvas1.getContext("2d");reset()}function resize1(){canvas1.width=W;canvas1.height=H}function reset(){document.getElementById("Step").disabled=false;document.getElementById("Run").disabled=false;epsilon=document.getElementById("eps").value;max_iters=document.getElementById("max").value;if(max_iters>100){max_iters=100;document.getElementById("max").value=max_iters}if(max_iters<1){max_iters=1;document.getElementById("max").value=max_iters}xalt=parseFloat(document.getElementById("x0").value);document.getElementById("xn").innerHTML="x0: "+xalt;document.getElementById("abl").innerHTML="              ";document.getElementById("xneu").innerHTML="              ";document.getElementById("yneu").innerHTML="              ";term=document.getElementById("f").value;ergaenze_term();var a=xalt;try{yalt=f(xalt)}catch(b){Fehlerbehandlung();return}if(!ok1()){melde("Fehler bei Grenzen KS!");return}DiffX=Xmax-Xmin;BerechneYGrenzen();zeichneKS();zeichne_funktion();zeichne_x(xalt,"red");if(isNaN(yalt)){melde("Funktionswert von x0 existiert nicht!");return}document.getElementById("yn").innerHTML="y0: "+yalt;if(yalt==0){melde("Nullstelle = "+xalt);document.getElementById("yn").innerHTML="y0: "+yalt;return}document.getElementById("message").innerHTML="Klick auf Run oder Step";niters=0}function dostep(){niters++;if(niters>1){xalt=xneu;yalt=yneu}var b=get_deriv(xalt);if(isNaN(b)||b==-Infinity||b==Infinity){melde("Ableitung bei xalt existiert nicht!");document.getElementById("yn").innerHTML="y0: "+yalt;niters=max_iters;return}if(b!=0){xneu=xalt-yalt/b}y1=Tangentenpunkt(Xmin,b);y2=Tangentenpunkt(Xmax,b);zeichneKS();zeichne_funktion();zeichne_x(xalt,"red");zeichne_Tangente(y1,y2);if(b==0){melde("Ableitung bei "+xalt+" ist Null");document.getElementById("yn").innerHTML="y0: "+yalt;niters=max_iters;return}yneu=f(xneu);zeichne_x(xneu,"blue");var a=niters-1;document.getElementById("xn").innerHTML="x"+a+": "+xalt;document.getElementById("yn").innerHTML="y"+a+": "+yalt;document.getElementById("abl").innerHTML="Steigung bei x"+a+": "+b;document.getElementById("xneu").innerHTML="x"+niters+": "+xneu;document.getElementById("yneu").innerHTML="y"+niters+": "+yneu;if(Math.abs(xneu-xalt)<epsilon){yneu=f(xneu);document.getElementById("yneu").innerHTML="y"+niters+": "+yneu;document.getElementById("message").innerHTML="Ziel nach "+niters+" Schritten erreicht!";document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true}else{if(niters==max_iters){document.getElementById("message").innerHTML="Ziel nach "+niters+" Schritten nicht erreicht!";document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true}}}function run(){if(niters==0){dostep()}while(Math.abs(xneu-xalt)>epsilon&&niters<max_iters){dostep()}}function melde(a){document.getElementById("yn").innerHTML="              ";document.getElementById("abl").innerHTML="              ";document.getElementById("xneu").innerHTML="              ";document.getElementById("yneu").innerHTML="              ";document.getElementById("message").innerHTML=a;document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true}function melde1(a){document.getElementById("message").innerHTML=a;document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true}function get_deriv(a){var c=DiffX/1000;if(c>0.001){c=0.001}var d=a-c;var b=a+c;var g=f(d);var e=f(b);return(e-g)/(2*c)}function zeichneKS(){ctx.clearRect(0,0,W,H);ctx.beginPath();ctx.strokeStyle="black";ctx.lineWidth="1";ctx.font="10px Arial";var c=row(0);ctx.moveTo(0,c);ctx.lineTo(W,c);var b=Math.floor(Xmin);var a=Math.floor(Xmax);var e=c;var k=b;if(DiffX<=20){while(k<=a){var g=col(k);ctx.moveTo(g,e+3);ctx.lineTo(g,e-3);ctx.strokeText(k,g-3,e+10);k=k+1}}k=b+5-b%5;if(DiffX>20&&DiffX<80){while(k<=a){var g=col(k);ctx.moveTo(g,e+3);ctx.lineTo(g,e-3);ctx.strokeText(k,g-5,e+10);k=k+5}}ctx.moveTo(W-5,c-5);ctx.lineTo(W,c);ctx.moveTo(W-5,c+5);ctx.lineTo(W,c);var d=col(0);ctx.moveTo(d,0);ctx.lineTo(d,H);var j=Math.floor(Ymin);var i=Math.floor(Ymax);g=d;var h=j;if(DiffY<=20){while(h<=i){if(h==0){h=h+1}e=row(h);ctx.moveTo(g-3,e);ctx.lineTo(g+3,e);ctx.strokeText(h,g-12,e+3);h=h+1}}h=j+5-j%5;if(DiffY>20&&DiffY<80){while(h<=i){if(h==0){h=h+5}e=row(h);ctx.moveTo(g-3,e);ctx.lineTo(g+3,e);ctx.strokeText(h,g-16,e+3);h=h+5}}ctx.moveTo(d-5,5);ctx.lineTo(d,0);ctx.moveTo(d+5,5);ctx.lineTo(d,0);ctx.stroke()}function zeichne_x(a,b){ctx.beginPath();ctx.strokeStyle=b;var d=col(a);ctx.moveTo(d,0);ctx.lineTo(d,H);ctx.stroke()}function zeichne_funktion(){ctx.beginPath();ctx.strokeStyle="green";var a=Xmin;var c=DiffX/W;while(isNaN(f(a))){a=a+c}var j=a;var g=f(a);var b=row(g);var h=col(a);ctx.moveTo(h,b);for(var e=h+1;e<W;e++){a=Xmin+DiffX/W*e;var d=f(a);if(Math.abs(d-g)<DiffY/2&&!isNaN(d)){ctx.lineTo(e,row(d))}else{ctx.moveTo(e,row(d))}g=d}ctx.stroke()}function zeichne_Tangente(b,a){ctx.beginPath();ctx.strokeStyle="red";ctx.moveTo(0,row(b));ctx.lineTo(W,row(a));ctx.stroke()}function BerechneYGrenzen(){var a=Xmin;var b=DiffX/100;while(isNaN(f(a))){a=a+b}Ymin=f(a);Ymax=Ymin;while(a+b<=Xmax){a=a+b;var c=f(a);if(!isNaN(c)&&c<Ymin){Ymin=c}if(!isNaN(c)&&c>Ymax){Ymax=c}}DiffY=Ymax-Ymin;if(DiffY<50){Ymin=Ymin-0.1*DiffY;Ymax=Ymax+0.1*DiffY}if(Ymax>50){Ymax=50}if(Ymin<-50){Ymin=-50}DiffY=Ymax-Ymin}function Tangentenpunkt(b,a){return a*(b-xalt)+yalt}function col(a){return((a-Xmin)/DiffX*W)}function row(a){return((Ymax-a)/DiffY*H)}function ergaenze_term(){term=term.replace(/asin\(/g,"hilfa");term=term.replace(/acos\(/g,"hilfb");term=term.replace(/atan\(/g,"hilfc");term=term.replace(/sin\(/g,"Math.sin(");term=term.replace(/cos\(/g,"Math.cos(");term=term.replace(/tan\(/g,"Math.tan(");term=term.replace(/hilfa/g,"Math.asin(");term=term.replace(/hilfb/g,"Math.acos(");term=term.replace(/hilfc/g,"Math.atan(");term=term.replace(/abs\(/g,"Math.abs(");term=term.replace(/pow\(/g,"Math.pow(");term=term.replace(/sqrt\(/g,"Math.sqrt(");term=term.replace(/log\(/g,"Math.log(");term=term.replace(/ln\(/g,"Math.log(");term=term.replace(/exp\(/g,"Math.ixp");term=term.replace(/e/g,"Math.E");term=term.replace(/Math.ixp/g,"Math.exp(");term=term.replace(/pi/g,"Math.PI")}function Fehlerbehandlung(){alert("Fehler im Funktionsterm. Bitte korrigieren.")}function infos(){var a=window.open("info_newton.html","Infofenster","width=350,height=600,left=100,top=100");a.focus()};