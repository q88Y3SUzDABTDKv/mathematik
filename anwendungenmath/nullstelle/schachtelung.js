var Xmin;var Xmax=Xmin+1;var term;var xl;var xr;var yl;var yr;var niters=0;var anz;var nichts=false;window.onload=init;function ok1(){var hilf=document.getElementById("Xmin").value;var check=pruefe_grenze(hilf);if(!check){return false}Xmin=eval(hilf);if(isNaN(Xmin)){return false}return true}function pruefe_grenze(a){if(a.split(",").length-1>0){return false}if(a.split(".").length-1>1){return false}if((a.length>2)&&(a.charAt(0)=="-")&&(a.charAt(1)=="0")&&(a.charAt(2)!=".")){return false}if((a.length>1)&&(a.charAt(0)=="0")&&(a.charAt(1)!=".")){return false}return true}function f(x){hilf=eval(term);return hilf}function init(){document.getElementById("Step").disabled=false;document.getElementById("Run").disabled=false;anz=document.getElementById("Anz").value;if(anz>14){anz=14;document.getElementById("Anz").value=14}if(anz<1){anz=1;document.getElementById("Anz").value=1}term=document.getElementById("f").value;ergaenze_term();var a=1.234567;try{var c=f(a)}catch(b){Fehlerbehandlung();return}if(!ok1()){return}niters=0;nichts=false;xl=Math.floor(Xmin);xr=xl+1;document.getElementById("Xr").innerHTML=""+xr;document.getElementById("xl").innerHTML="x"+niters+"l: "+xl;document.getElementById("xr").innerHTML="x"+niters+"r: "+xr;document.getElementById("message").innerHTML="Klick auf Run oder Step"}function dostep(){if(f(xl)==0){document.getElementById("message").innerHTML="Nullstelle = "+xl;niters=anz;document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true;return}if(f(xr)==0){document.getElementById("message").innerHTML="Nullstelle = "+xr;niters=anz;document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true;return}niters++;findroot();if(nichts){return}yl=f(xl);yr=f(xr);document.getElementById("xl").innerHTML="x"+niters+"l: "+round(xl,niters);document.getElementById("xr").innerHTML="x"+niters+"r: "+round(xr,niters);if(niters==anz){document.getElementById("message").innerHTML="Ziel erreicht!";document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true}}function run(){while(niters<anz&&!nichts){dostep()}}function findroot(){var a=xl;var c=Math.pow(10,-niters);while(isNaN(f(a))&&a<=xr){a=a+c;a=round(a,niters);if(a>xr){document.getElementById("message").innerHTML="Keine Nullstelle im Intervall!";nichts=true;document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true;return}}a=xl;while(isNaN(f(a))||isNaN(f(a+c))||f(a)==Infinity||f(a+c)==Infinity||f(a)==-Infinity||f(a+c)==-Infinity||f(a)*f(a+c)>0){a=a+c;a=round(a,niters);if(a>=xr){document.getElementById("message").innerHTML="Keine Nullstelle im Intervall!";nichts=true;document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true;return}}xl=a;var b=xr;xr=a+c;a=round(xr,niters);if(xr>b){document.getElementById("message").innerHTML="Keine Nullstelle im Intervall!";nichts=true;document.getElementById("Step").disabled=true;document.getElementById("Run").disabled=true;return}}function round(a,c){var b=Math.pow(10,c);return Math.round(b*a)/b}function ergaenze_term(){term=term.replace(/asin\(/g,"hilfa");term=term.replace(/acos\(/g,"hilfb");term=term.replace(/atan\(/g,"hilfc");term=term.replace(/sin\(/g,"Math.sin(");term=term.replace(/cos\(/g,"Math.cos(");term=term.replace(/tan\(/g,"Math.tan(");term=term.replace(/hilfa/g,"Math.asin(");term=term.replace(/hilfb/g,"Math.acos(");term=term.replace(/hilfc/g,"Math.atan(");term=term.replace(/abs\(/g,"Math.abs(");term=term.replace(/pow\(/g,"Math.pow(");term=term.replace(/sqrt\(/g,"Math.sqrt(");term=term.replace(/log\(/g,"Math.log(");term=term.replace(/ln\(/g,"Math.log(");term=term.replace(/exp\(/g,"Math.ixp");term=term.replace(/e/g,"Math.E");term=term.replace(/Math.ixp/g,"Math.exp(");term=term.replace(/pi/g,"Math.PI")}function Fehlerbehandlung(){alert("Fehler im Funktionsterm. Bitte korrigieren.")}function infos(){var a=window.open("info_schachtelung.html","Infofenster","width=350,height=600,left=100,top=100");a.focus()};