function resizeCanvas(){var e=document.getElementById("containercanvas");e.width=e.offsetWidth,W=e.width,W>400&&(W=400),H=W,initmade?(resize1(),zeichneKS(),zeichne_funktion(),zeichne_x(xalt,xneu,yalt,yneu)):init()}function ok1(){var hilf=document.getElementById("Xmin").value,check=pruefe_grenze(hilf);if(!check)return!1;if(Xmin=eval(hilf),isNaN(Xmin))return!1;hilf=document.getElementById("Xmax").value;var check=pruefe_grenze(hilf);return check?(Xmax=eval(hilf),isNaN(Xmax)?!1:(-Xmin==Xmax&&(Xmax=1.02*Xmax),DiffX=Xmax-Xmin,0>=DiffX?!1:!0)):!1}function pruefe_grenze(e){return e.split(",").length-1>0?!1:e.split(".").length-1>1?!1:e.length>2&&"-"==e.charAt(0)&&"0"==e.charAt(1)&&"."!=e.charAt(2)?!1:e.length>1&&"0"==e.charAt(0)&&"."!=e.charAt(1)?!1:!0}function f(x){return hilf=eval(term)}function init(){initmade=!0,window.addEventListener("resize",function(){resizeCanvas()}),canvas1=document.getElementById("myCanvas"),resize1(),ctx=canvas1.getContext("2d"),reset()}function resize1(){canvas1.width=W,canvas1.height=H}function reset(){document.getElementById("Step").disabled=!1,document.getElementById("Run").disabled=!1,epsilon=document.getElementById("eps").value,max_iters=document.getElementById("max").value,max_iters>200&&(max_iters=200,document.getElementById("max").value=max_iters),1>max_iters&&(max_iters=1,document.getElementById("max").value=max_iters),xalt=parseFloat(document.getElementById("x0").value),document.getElementById("xn").innerHTML="x0: "+xalt,document.getElementById("xneu").innerHTML="              ",term=document.getElementById("f").value,ergaenze_term();try{yalt=f(xalt)}catch(e){return Fehlerbehandlung(),void 0}if(!ok1())return melde("Fehler bei Grenzen KS!"),void 0;if(DiffX=Xmax-Xmin,BerechneYGrenzen(),zeichneKS(),zeichne_funktion(),isNaN(yalt))return melde("x1 existiert nicht!"),void 0;ctx.beginPath(),ctx.strokeStyle="red",ctx.lineWidth="1";var t=col(xalt);ctx.moveTo(t,row(0)),ctx.lineTo(t,row(yalt)),ctx.stroke(),document.getElementById("xn").innerHTML="x0: "+xalt,document.getElementById("message").innerHTML="Klick auf Run oder Step",niters=0}function dostep(){if(niters++,niters>1&&(xalt=xneu,yalt=yneu),xneu=f(xalt),isNaN(yalt)||yalt==-1/0||1/0==yalt)return melde("x"+niters+" existiert nicht!"),niters=max_iters,void 0;if(yneu=f(xneu),isNaN(yneu)||yneu==-1/0||1/0==yneu){var e=niters+1,t=niters-1;return melde("x"+e+" existiert nicht!"),document.getElementById("xn").innerHTML="x"+t+": "+xalt,document.getElementById("xneu").innerHTML="x"+niters+": "+xneu,niters=max_iters,void 0}zeichneKS(),zeichne_funktion(),zeichne_x(xalt,xneu,yalt,yneu),e=niters-1,document.getElementById("xn").innerHTML="x"+e+": "+xalt,document.getElementById("xneu").innerHTML="x"+niters+": "+xneu,Math.abs(xneu-xalt)<epsilon?(document.getElementById("message").innerHTML="Ziel nach "+niters+" Schritten erreicht!",document.getElementById("Step").disabled=!0,document.getElementById("Run").disabled=!0):niters==max_iters&&(document.getElementById("message").innerHTML="Ziel nach "+niters+" Schritten nicht erreicht!",document.getElementById("Step").disabled=!0,document.getElementById("Run").disabled=!0)}function run(){for(0==niters&&dostep();Math.abs(xneu-xalt)>epsilon&&max_iters>niters;)dostep()}function melde(e){document.getElementById("xneu").innerHTML="              ",document.getElementById("message").innerHTML=e,document.getElementById("Step").disabled=!0,document.getElementById("Run").disabled=!0}function zeichneKS(){ctx.clearRect(0,0,W,H),ctx.beginPath(),ctx.strokeStyle="black",ctx.lineWidth="1",ctx.font="10px Arial";var e=row(0);ctx.moveTo(0,e),ctx.lineTo(W,e);var t=Math.floor(Xmin),n=Math.floor(Xmax),i=e,r=t;if(20>=DiffX)for(;n>=r;){var a=col(r);ctx.moveTo(a,i+3),ctx.lineTo(a,i-3),ctx.strokeText(r,a-3,i+10),r+=1}if(r=t+5-t%5,DiffX>20&&80>DiffX)for(;n>=r;){var a=col(r);ctx.moveTo(a,i+3),ctx.lineTo(a,i-3),ctx.strokeText(r,a-5,i+10),r+=5}ctx.moveTo(W-5,e-5),ctx.lineTo(W,e),ctx.moveTo(W-5,e+5),ctx.lineTo(W,e);var m=col(0);ctx.moveTo(m,0),ctx.lineTo(m,H);var o=Math.floor(Ymin),c=Math.floor(Ymax);a=m;var l=o;if(20>=DiffY)for(;c>=l;)0==l&&(l+=1),i=row(l),ctx.moveTo(a-3,i),ctx.lineTo(a+3,i),ctx.strokeText(l,a-12,i+3),l+=1;if(l=o+5-o%5,DiffY>20&&80>DiffY)for(;c>=l;)0==l&&(l+=5),i=row(l),ctx.moveTo(a-3,i),ctx.lineTo(a+3,i),ctx.strokeText(l,a-16,i+3),l+=5;ctx.moveTo(m-5,5),ctx.lineTo(m,0),ctx.moveTo(m+5,5),ctx.lineTo(m,0);var x=col(Xmin),f=row(Xmin),s=col(Xmax),d=row(Xmax);ctx.moveTo(x,f),ctx.lineTo(s,d),ctx.stroke()}function zeichne_x(e,t,n,i){ctx.beginPath(),ctx.strokeStyle="red";{var r=col(e),a=row(n),m=col(t);row(i)}ctx.moveTo(r,row(0)),ctx.lineTo(r,a),ctx.lineTo(m,a),ctx.stroke(),ctx.beginPath(),ctx.strokeStyle="blue",ctx.moveTo(m,a),ctx.lineTo(m,row(0)),ctx.stroke()}function zeichne_funktion(){ctx.beginPath(),ctx.strokeStyle="green";for(var e=Xmin,t=DiffX/W;isNaN(f(e));)e+=t;var n=f(e),i=row(n),r=col(e);ctx.moveTo(r,i);for(var a=r+1;W>a;a++){e=Xmin+DiffX/W*a;var m=f(e);Math.abs(m-n)<DiffY/2&&!isNaN(m)?ctx.lineTo(a,row(m)):ctx.moveTo(a,row(m)),n=m}ctx.stroke()}function BerechneYGrenzen(){for(var e=Xmin,t=DiffX/100;isNaN(f(e));)e+=t;for(Ymin=f(e),Ymax=Ymin;Xmax>=e+t;){e+=t;var n=f(e);!isNaN(n)&&Ymin>n&&(Ymin=n),!isNaN(n)&&n>Ymax&&(Ymax=n)}DiffY=Ymax-Ymin,50>DiffY&&(Ymin-=.1*DiffY,Ymax+=.1*DiffY),Ymax>50&&(Ymax=50),-50>Ymin&&(Ymin=-50),DiffY=Ymax-Ymin}function col(e){return(e-Xmin)/DiffX*W}function row(e){return(Ymax-e)/DiffY*H}function ergaenze_term(){term=term.replace(/asin\(/g,"hilfa"),term=term.replace(/acos\(/g,"hilfb"),term=term.replace(/atan\(/g,"hilfc"),term=term.replace(/sin\(/g,"Math.sin("),term=term.replace(/cos\(/g,"Math.cos("),term=term.replace(/tan\(/g,"Math.tan("),term=term.replace(/hilfa/g,"Math.asin("),term=term.replace(/hilfb/g,"Math.acos("),term=term.replace(/hilfc/g,"Math.atan("),term=term.replace(/abs\(/g,"Math.abs("),term=term.replace(/pow\(/g,"Math.pow("),term=term.replace(/sqrt\(/g,"Math.sqrt("),term=term.replace(/log\(/g,"Math.log("),term=term.replace(/ln\(/g,"Math.log("),term=term.replace(/exp\(/g,"Math.ixp"),term=term.replace(/e/g,"Math.E"),term=term.replace(/Math.ixp/g,"Math.exp("),term=term.replace(/pi/g,"Math.PI")}function Fehlerbehandlung(){alert("Fehler im Funktionsterm. Bitte korrigieren.")}var W,H,Xmin,Xmax,Ymin,Ymax,ctx,DiffX,DiffY,term,xalt,xneu,yalt,yneu,niters=0,max_iters,epsilon,initmade=!1;window.onload=resizeCanvas;