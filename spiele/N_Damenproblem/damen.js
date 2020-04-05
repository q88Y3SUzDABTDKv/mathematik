var N=8;var W=320;var canvas;var ctx;x1=new Array(12);var anzahl=0;var eff_anz=0;loesung=new Array(1788);board=new Array(12);var ende;var Weiter;var LZ;var nostop=true;var timer;var delay=100;var geschlagen=false;var stop=false;window.onload=init;function init(){canvas=document.getElementById("myCanvas");ctx=canvas.getContext("2d");for(var a=0;a<12;a++){board[a]=new Array(12)}for(var a=0;a<1788;a++){loesung[a]=new Array(12)}zeichne()}function zeichne(){ctx.clearRect(0,0,W,W);var a=W/N-1;var d=a*N;ctx.beginPath();for(var c=0;c<=N;c++){ctx.moveTo(1,a*c+1);ctx.lineTo(d+1,a*c+1)}for(var b=0;b<=N;b++){ctx.moveTo(a*b+1,1);ctx.lineTo(a*b+1,d+1)}ctx.stroke()}function set(c,b){var a=W/N-1;ctx.beginPath();ctx.fillStyle="blue";ctx.arc((c+0.5)*a,(b+0.5)*a,(a-20)/2,0,2*Math.PI);ctx.fill()}function clear(c,b){var a=W/N-1;ctx.beginPath();ctx.fillStyle="white";ctx.fillRect(c*a+2,b*a+2,a-2,a-2)}function Startn(){stop=true;document.getElementById("run_stop").disabled=true;N=parseInt(document.getElementById("Anz").value);if(N<4){N=4}if(N>12){N=12}document.getElementById("Anz").value=N;ende=Math.ceil(N/2);zeichne();LZ=0;Weiter=true;for(var a=0;a<12;a++){for(var b=0;b<12;b++){board[a][b]=false}}document.getElementById("label2").firstChild.data="Klicken Sie auf Start";document.getElementById("label").firstChild.data="Anzahl Lösungen: 0";document.getElementById("label1").firstChild.data="Effektive Anzahl nichtkongruenter Lösungen: 0"}function Start(){stop=true;document.getElementById("Anz").disabled=true;document.getElementById("run_stop").disabled=true;N=parseInt(document.getElementById("Anz").value);if(N<4){N=4}if(N>12){N=12}document.getElementById("Anz").value=N;ende=Math.ceil(N/2);zeichne();LZ=0;Weiter=true;for(var a=0;a<12;a++){for(var c=0;c<12;c++){board[a][c]=false}}stop=false;document.getElementById("run_stop").value="Stop";document.getElementById("run_stop").disabled=false;document.getElementById("run_stop").onclick=function(){if(stop){stop=false;document.getElementById("run_stop").value="Stop";document.getElementById("label2").firstChild.data="Zum Anhalten klicken Sie auf Stop";document.getElementById("start").disabled=true;document.getElementById("Anz").disabled=true;NeueStellung();runstep()}else{document.getElementById("run_stop").value="Go";stop=true;document.getElementById("Anz").disabled=false}};document.getElementById("start").disabled=true;geschlagen=false;anzahl=0;eff_anz=0;for(var b=0;b<N;b++){x1[b]=0}document.getElementById("label2").firstChild.data="Zum Anhalten klicken Sie auf Stop";set(0,0);document.getElementById("label").firstChild.data="Anzahl Lösungen: 0";document.getElementById("label1").firstChild.data="Effektive Anzahl nichtkongruenter Lösungen: 0";runstep()}function step(){test();if(!geschlagen){if(LZ==(N-1)){var a=true;anzahl++;testaufkongruenz();nostop=document.getElementById("ohneHalt").checked;if(nostop){NeueStellung()}else{stop=true;document.getElementById("Anz").disabled=false;document.getElementById("start").disabled=false;document.getElementById("run_stop").value="Go";document.getElementById("label2").firstChild.data="Für Weiter klicken Sie auf Go"}}else{LZ++;x1[LZ]=0;set(0,LZ)}if(!a){runstep()}}}function test(){geschlagen=Dame_geschlagen();if(geschlagen){timer=setTimeout(function(){NeueStellung()},delay)}}function runstep(){if(Weiter){step()}else{document.getElementById("start").disabled=false;if(!stop){document.getElementById("label2").firstChild.data="Fertig! Für Neustart klicken Sie auf Start";document.getElementById("run_stop").disabled=true;document.getElementById("Anz").disabled=false}else{document.getElementById("label2").firstChild.data="Für Weiter klicken Sie auf Go"}}}function Dame_geschlagen(){for(var a=0;a<LZ;a++){if(x1[a]==x1[LZ]){return true}if(Math.abs(x1[a]-x1[LZ])==LZ-a){return true}}return false}function NeueStellung(){delay=document.getElementById("Delay").value;clear(x1[LZ],LZ);while((++x1[LZ]>=N)&&(LZ>0)){LZ--;clear(x1[LZ],LZ)}set(x1[LZ],LZ);Weiter=(((x1[0]!=ende)||(LZ!=0))&&(!stop));geschlagen=false;clearTimeout(timer);runstep()}function gostep(){document.getElementById("run_stop").disabled=true;document.getElementById("stopbutton").disabled=false;document.getElementById("label2").firstChild.data="Ich rechne ...";NeueStellung()}function setzeboard(){for(var a=0;a<N;a++){for(var c=0;c<N;c++){board[a][c]=false}}for(var b=0;b<N;b++){board[b][x1[b]]=true}}function testaufkongruenz(){setzeboard();var c=false;for(var a=0;a<eff_anz;a++){c=sameboard(a);if(c){a=eff_anz}}if(!c){for(var b=0;b<N;b++){loesung[eff_anz][b]=x1[b]}eff_anz++;document.getElementById("label").firstChild.data="Lösung "+anzahl+" : neu!";document.getElementById("label1").firstChild.data="Anzahl nichtkongruenter Lösungen: "+eff_anz}else{document.getElementById("label").firstChild.data="Lösung "+anzahl+" : alt!";document.getElementById("label1").firstChild.data="Anzahl nichtkongruenter Lösungen: "+eff_anz}}function sameboard(c){oboard=new Array(N);for(var b=0;b<N;b++){oboard[b]=new Array(N)}for(var a=0;a<N;a++){for(var d=0;d<N;d++){oboard[a][d]=false}}for(var a=0;a<N;a++){oboard[a][loesung[c][a]]=true}if(testEqualMatrix(oboard)){return true}oboard=rotateMatrix(oboard);if(testEqualMatrix(oboard)){return true}oboard=rotateMatrix(oboard);if(testEqualMatrix(oboard)){return true}oboard=rotateMatrix(oboard);if(testEqualMatrix(oboard)){return true}oboard=mirrorMatrix(oboard);if(testEqualMatrix(oboard)){return true}oboard=rotateMatrix(oboard);if(testEqualMatrix(oboard)){return true}oboard=rotateMatrix(oboard);if(testEqualMatrix(oboard)){return true}oboard=rotateMatrix(oboard);return testEqualMatrix(oboard)}function testEqualMatrix(b){for(var a=0;a<N;a++){for(var c=0;c<N;c++){if(board[a][c]!=b[a][c]){return false}}}return true}function rotateMatrix(b){result=new Array(N);for(var c=0;c<N;c++){result[c]=new Array(N)}for(var a=0;a<N;a++){for(var d=0;d<N;d++){result[N-1-d][a]=b[a][d]}}return result}function mirrorMatrix(b){result=new Array(N);for(var c=0;c<N;c++){result[c]=new Array(N)}for(var a=0;a<N;a++){for(var d=0;d<N;d++){result[d][a]=b[a][d]}}return result};