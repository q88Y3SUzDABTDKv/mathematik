var W,H;var Xmin=-8;var Xmax=8;var Ymin=-6;var Ymax=7;var ctx;var DiffX,DiffY;var term;var a1,b1,v1,a2,b2,v2;var x1,y1,x2,y2,x3,y3;var mx,my,r;var canvas1;var initmade=false;window.onload=resizeCanvas;function resizeCanvas(){var a=document.getElementById("containercanvas");a.width=a.offsetWidth;W=a.width;H=Math.round(0.8*W);if(initmade){resize1();zeichne()}else{init()}}function OnChangeradio1(a){if(a.checked){zeichne()}}function OnChangeradio2(a){if(a.checked){zeichne()}}function OnChangeradio3(a){if(a.checked){zeichne()}}function OnChangeradio4(a){if(a.checked){zeichne()}}function OnChangeradio5(a){if(a.checked){zeichne()}}function ok1(){a1=parseFloat(document.getElementById("a1").value);if(isNaN(a1)){alert("Fehler in a1");return false}b1=parseFloat(document.getElementById("b1").value);if(isNaN(b1)){alert("Fehler in b1");return false}v1=parseFloat(document.getElementById("v1").value);if(isNaN(v1)){alert("Fehler in v1");return false}a2=parseFloat(document.getElementById("a2").value);if(isNaN(a2)){alert("Fehler in a2");return false}b2=parseFloat(document.getElementById("b2").value);if(isNaN(b2)){alert("Fehler in b2");return false}v2=parseFloat(document.getElementById("v2").value);if(isNaN(v2)){alert("Fehler in v2");return false}if (a1*b2-a2*b1==0) {alert("Determinante=0"); return false;}return true}function ok2(){x1=parseFloat(document.getElementById("x1").value);if(isNaN(x1)){alert("Fehler in x1");return false}y1=parseFloat(document.getElementById("y1").value);if(isNaN(y1)){alert("Fehler in y1");return false}x2=parseFloat(document.getElementById("x2").value);if(isNaN(x2)){alert("Fehler in x2");return false}y2=parseFloat(document.getElementById("y2").value);if(isNaN(y2)){alert("Fehler in y2");return false}x3=parseFloat(document.getElementById("x3").value);if(isNaN(x3)){alert("Fehler in x3");return false}y3=parseFloat(document.getElementById("y3").value);if(isNaN(y3)){alert("Fehler in y3");return false}return true}function ok3(){mx=parseFloat(document.getElementById("mx").value);if(isNaN(mx)){alert("Fehler in mx");return false}my=parseFloat(document.getElementById("my").value);if(isNaN(my)){alert("Fehler in my");return false}r=parseFloat(document.getElementById("r").value);if(isNaN(r)||r<0){alert("Fehler in Radius");return false}return true}function f(x){hilf=eval(term);if(isNaN(hilf)){return 100000}return hilf}function init(){initmade=true;window.addEventListener("resize",function(a){resizeCanvas()});canvas1=document.getElementById("myCanvas");resize1();ctx=canvas1.getContext("2d");DiffX=Xmax-Xmin;DiffY=Ymax-Ymin;zeichne()}function resize1(){canvas1.width=W;canvas1.height=H}function zeichne(){if(!ok1()){return}zeichneKS();if(document.getElementById("Funktion").checked){term=document.getElementById("f").value;ergaenze_term();var a=1.234567;try{var c=f(a)}catch(b){Fehlerbehandlung();return}zeichne_funktion()}if(document.getElementById("Quadrat").checked){zeichne_quadrat()}if(document.getElementById("F").checked){zeichne_F()}if(document.getElementById("Dreieck").checked){if(!ok2()){return}zeichne_dreieck(x1,y1,x2,y2,x3,y3)}if(document.getElementById("Kreis").checked){if(!ok3()){return}zeichne_kreis(mx,my,r)}}function zeichne_dreieck(d,g,b,e,a,c){strecke(d,g,b,e,"green","blue");strecke(b,e,a,c,"green","blue");strecke(a,c,d,g,"green","blue")}function zeichne_F(){strecke(0,0,0,2,"green","blue");strecke(0,1,1,1,"green","blue");strecke(0,2,1.5,2,"green","blue")}function zeichne_quadrat(){strecke(0,0,1,0,"green","blue");strecke(1,0,1,1,"green","blue");strecke(1,1,0,1,"green","blue");strecke(0,1,0,0,"green","blue")}function zeichne_kreis(j,h,a){var d=0;var i=Math.PI/60;while(d<2*Math.PI){var c=j+a*Math.cos(d);var g=h+a*Math.sin(d);d+=i;var b=j+a*Math.cos(d);var e=h+a*Math.sin(d);strecke(c,g,b,e,"green","blue")}}function zeichneKS(){ctx.clearRect(0,0,W,H);ctx.beginPath();ctx.strokeStyle="black";ctx.lineWidth="1";ctx.font="10px Arial";var c=row(0);ctx.moveTo(0,c);ctx.lineTo(W,c);var b=Math.floor(Xmin);var a=Math.floor(Xmax);var e=c;var k=b;while(k<=a){var g=col(k);ctx.moveTo(g,e+3);ctx.lineTo(g,e-3);ctx.strokeText(k,g-3,e+10);k=k+1}ctx.moveTo(W-5,c-5);ctx.lineTo(W,c);ctx.moveTo(W-5,c+5);ctx.lineTo(W,c);var d=col(0);ctx.moveTo(d,0);ctx.lineTo(d,H);var j=Math.floor(Ymin);var i=Math.floor(Ymax);g=d;var h=j;while(h<=i){if(h==0){h=h+1}e=row(h);ctx.moveTo(g-3,e);ctx.lineTo(g+3,e);ctx.strokeText(h,g-12,e+3);h=h+1}ctx.moveTo(d-5,5);ctx.lineTo(d,0);ctx.moveTo(d+5,5);ctx.lineTo(d,0);ctx.stroke()}function zeichne_funktion(){var b=Xmin;var c=f(b);var d=DiffX/360;while(b+d<Xmax){var a=b+d;y2=f(a);if((isNaN(c))||(isNaN(y2))){}else{if((Math.abs(y2-c)<10)){strecke(b,c,a,y2,"green","blue")}}b=a;c=y2}}function quer(d,h,e,c,g){return(e*d+c*h+g)}function strecke(b,d,a,c,g,e){ctx.beginPath();ctx.strokeStyle=g;ctx.moveTo(col(b),row(d));ctx.lineTo(col(a),row(c));ctx.stroke();ctx.beginPath();ctx.strokeStyle=e;ctx.moveTo(col(quer(b,d,a1,b1,v1)),row(quer(b,d,a2,b2,v2)));ctx.lineTo(col(quer(a,c,a1,b1,v1)),row(quer(a,c,a2,b2,v2)));ctx.stroke()}function col(a){return((a-Xmin)/DiffX*W)}function row(a){return((Ymax-a)/DiffY*H)}function ergaenze_term(){term=term.replace(/asin/g,"hilfa");term=term.replace(/acos/g,"hilfb");term=term.replace(/atan/g,"hilfc");term=term.replace(/sin/g,"Math.sin");term=term.replace(/cos/g,"Math.cos");term=term.replace(/tan/g,"Math.tan");term=term.replace(/hilfa/g,"Math.asin");term=term.replace(/hilfb/g,"Math.acos");term=term.replace(/hilfc/g,"Math.atan");term=term.replace(/abs/g,"Math.abs");term=term.replace(/pow/g,"Math.pow");term=term.replace(/sqrt/g,"Math.sqrt");term=term.replace(/log/g,"Math.log");term=term.replace(/ln/g,"Math.log");term=term.replace(/exp/g,"Math.ixp");term=term.replace(/e/g,"Math.E");term=term.replace(/Math.ixp/g,"Math.exp");term=term.replace(/pi/g,"Math.PI")}function Fehlerbehandlung(){alert("Fehler im Funktionsterm. Bitte korrigieren.")};