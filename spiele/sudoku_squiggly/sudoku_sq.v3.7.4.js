var W,H;var cellw;var backIndex;var sol=new Array(9);for(var i=0;i<9;i++){sol[i]=new Array(9)}var locked=new Array(9);for(i=0;i<9;i++){locked[i]=new Array(9)}var help1=new Array(9);for(i=0;i<9;i++){help1[i]=new Array(9)}var prob=new Array(9);for(i=0;i<9;i++){prob[i]=new Array(9)}var solut=new Array(9);for(i=0;i<9;i++){solut[i]=new Array(9)}var savesol=new Array(9);for(i=0;i<9;i++){savesol[i]=new Array(9)}var saveuser=new Array(9);for(i=0;i<9;i++){saveuser[i]=new Array(9);for(var j=0;j<9;j++){saveuser[i][j]=new Array(2)}}var forbidden=new Array(9);for(i=0;i<9;i++){forbidden[i]=new Array(9);for(j=0;j<9;j++){forbidden[i][j]=new Array(9)}}var back=new Array(500);var xCur=0;var yCur=0;var xNew=0;var yNew=0;var Nummer="";var create=false;var comp;var unloesbar;var help;var ctx;var canvas1;var initmade=false;var digit=6;var savemessage="";var savemessageBox="";var block=new Array(9);var block6nr=new Array(9);for(i=0;i<9;i++){block6nr[i]=["","","","","",""]}var block9nr=new Array(9);for(i=0;i<9;i++){block9nr[i]=["","","","","","","","",""]}var block6gel=new Array(9);var block9gel=new Array(9);var blockuser=["","","","","","","","",""];var anzblock=0;var zushg=true;var bnr=0;var bnruser=0;var anzcreate=0;var neueBoxstruktur=false;var erfolgstruktur=true;var blockgelungen;const farbe=["#FFFF00","#DAA520","#BC8F8F","#EEE8AA","#BDB76B","#FFD700","#FFFFE0","#FFE5D5","#FFA07A"];var vert6=new Array(9);for(i=0;i<9;i++){vert6[i]=new Array(6)}var vert9=new Array(9);for(i=0;i<9;i++){vert9[i]=new Array(9)}var eingabeprob=false;function resizeCanvas(){var a=document.getElementById("containercanvas");a.width=a.offsetWidth;W=a.width;if(W>400){W=400}H=W;cellw=Math.floor(W/digit);if(initmade){resize1();if(bnr==10){zeichneBlock()}else{zeichne()}}else{init()}}function init(){initmade=true;window.addEventListener("resize",function(a){resizeCanvas()});canvas1=document.getElementById("myCanvas");canvas1.addEventListener("click",function(d){var b=getMousePos(canvas1,d);var a=b.x;var e=b.y;xNew=Math.floor(a/cellw);yNew=Math.floor(e/cellw);if(xNew<0||yNew<0||xNew>digit-1||yNew>digit-1){return}if(bnr!=10){getInfo();zeichne()}else{zeichneBlock()}},false);resize1();ctx=canvas1.getContext("2d");erzeugeBloecke(0);problem(rand(6)+1)}function initPuzzle(){document.getElementById("Resultat").innerHTML="";document.getElementById("Antwort").innerHTML="";document.getElementById("messageBox").innerHTML="";document.getElementById("wahl").selectedIndex="0";document.getElementById("right").style.display="none";if(!create){document.getElementById("zifferbuttons").style.display="inline-block";document.getElementById("steuerbuttons1").style.display="inline-block";document.getElementById("steuerbuttons2").style.display="inline-block";document.getElementById("chb3u4").style.display="inline-block";document.getElementById("bNBCle").style.display="inline-block"}if(bnr==10){bnr=0;erzeugeBloecke(0)}for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){sol[b][a]=" ";locked[b][a]=false;for(var d=0;d<digit;d++){forbidden[b][a][d]=false}}}if(digit==6){document.getElementById("9x9").checked=false}xNew=0;yNew=0;comp=false;create=false;help=false;if(!eingabeprob){backIndex=0;document.getElementById("Show").checked=false;document.getElementById("Hilfe").checked=false;hilfebuttons_bgweiss();deaktiviere_hilfebuttons();document.getElementById("Sol").disabled=false;document.getElementById("testeind").style.display="none";document.getElementById("Loa").disabled=true;if(neueBoxstruktur){document.getElementById("message").innerHTML="<b>Create oder CreateUser</b>"}else{document.getElementById("message").innerHTML="<b>Create, CreateUser oder Auswahl aus 'Prob'</b>"}}streiche(0)}function clearf(){document.getElementById("Resultat").innerHTML="";document.getElementById("Antwort").innerHTML="";document.getElementById("messageBox").innerHTML="";document.getElementById("wahl").selectedIndex="0";document.getElementById("right").style.display="none";if(bnr==10){bnr=0;erzeugeBloecke(0);document.getElementById("steuerbuttons2").style.display="inline-block";document.getElementById("bNBCle").style.display="none"}for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){sol[b][a]=" ";locked[b][a]=false;for(var d=0;d<digit;d++){forbidden[b][a][d]=false}}}if(digit==6){document.getElementById("9x9").checked=false}xNew=0;yNew=0;comp=false;create=false;help=false;if(!eingabeprob){document.getElementById("Sol").disabled=false;backIndex=0;document.getElementById("zifferbuttons").style.display="none";document.getElementById("steuerbuttons1").style.display="none";document.getElementById("Show").checked=false;document.getElementById("Hilfe").checked=false;hilfebuttons_bgweiss();deaktiviere_hilfebuttons();document.getElementById("testeind").style.display="none";if(neueBoxstruktur){document.getElementById("message").innerHTML="<b>Create oder CreateUser</b>"}else{document.getElementById("message").innerHTML="<b>Create, CreateUser oder Auswahl aus 'Prob'</b>"}}streiche(0)}function resize1(){canvas1.width=W;canvas1.height=H}function OnChangeCheckbox3(a){document.getElementById("wahl").selectedIndex="0";document.getElementById("probneu6").selectedIndex="0";document.getElementById("probneu9").selectedIndex="0";document.getElementById("Loa").disabled=true;anzcreate=0;if(a.checked){digit=9;document.getElementById("prob6").style.display="none";document.getElementById("prob9").style.display="inline-block";document.getElementById("Z9x9").style.display="inline-block";document.getElementById("H9x9").style.display="inline-block"}else{digit=6;document.getElementById("prob6").style.display="inline-block";document.getElementById("prob9").style.display="none";document.getElementById("Z9x9").style.display="none";document.getElementById("H9x9").style.display="none"}erzeugeBloecke(bnr);cellw=Math.floor(W/digit);problem(rand(8)+1)}function OnChangeCheckbox1(a){help=a.checked;getInfo()}function OnChangeCheckbox2(d){var b,a;if(d.checked){aktiviere_hilfebuttons()}else{deaktiviere_hilfebuttons();for(b=0;b<digit;b++){for(a=0;a<digit;a++){help1[b][a]=false}}zeichne()}}function erzeugeBloecke(b){var d=new Array(9);unloesbar=false;if(digit==6){d[0]=["000111021222","102030402131","504151324252","031323041405","243415253545","334353445455"];d[1]=["001020300131","404132423334","505152435344","112122132314","021203040515","245425354555"];d[2]=["001020212223","304050314132","010203040515","111213142425","333435455554","514252435344"];d[3]=["001011121314","010203040515","202122232434","253545444333","304050314151","324252535455"];d[4]=["001020011121","304050314151","021222031323","324252334353","041424051525","344454354555"];d[5]=["001020213141","010203130414","051525353444","111222322324","304050515242","334353544555"]}else{d[0]=["001001112112223223","203040506031415142","708061718152627263","020313041424051506","334353344454354555","827383647484758586","251626360717270818","463747572838485868","655666766777877888"];d[1]=["000111020313141516","102030211222232425","405031415161627263","607080718182738374","324252334353344454","040506071708182838","644555657585847686","352636465666273757","476777874858687888"];d[2]=["001020304001113112","020313142434441525","040506071626361737","081827283848474657","212232424123334353","354555546463655666","506070516152627273","586878886777878685","807181828374847576"];d[3]=["001020011121021222","031323041424051525","061626071727081828","304050606171727374","314151425262435363","323334354536463738","445464555647574858","657585848382818070","667686677787687888"];d[4]=["001020011121021222","304050314151324252","607080617181627282","031323041424051525","334353344454354555","637383647484657585","061626071727081828","364656374757384858","667686677787687888"];d[5]=["001020304031413233","011121021222031304","051525140616260717","081828384858273757","232434445443534555","353646566647656474","425251506070806171","627282816373838485","677787768675687888"]}for(var a=0;a<digit;a++){block[a]=d[b][a]}}function markiereBoxrand(){var e,d,h;for(var g=0;g<digit;g++){for(var f=0;f<digit;f++){e=findeBoxnr(g,f);if(g<digit-1){d=findeBoxnr(g+1,f)}if(f<digit-1){h=findeBoxnr(g,f+1)}if((d!=e)&&(g<digit-1)){line(cellw*(g+1)+1,cellw*f,cellw*(g+1)+1,cellw*(f+1)+1)}if((h!=e)&&(f<digit-1)){line(cellw*g,cellw*(f+1)+1,cellw*(g+1),cellw*(f+1)+1)}}}}function streiche(f){var d,b,e,g,a;c=String.fromCharCode(48+f);for(d=0;d<digit;d++){for(b=0;b<digit;b++){help1[d][b]=false}}if(f>0){for(d=0;d<digit;d++){for(b=0;b<digit;b++){if(sol[d][b]!=" "){help1[d][b]=true}if(sol[d][b]==c){for(e=0;e<digit;e++){help1[e][b]=true;help1[d][e]=true}a=findeBoxnr(d,b);for(var h=0;h<digit;h++){e=parseInt(block[a].charAt(2*h));g=parseInt(block[a].charAt(2*h+1));help1[e][g]=true}}}}}zeichne()}function lock(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){locked[b][a]=(sol[b][a]!=" ")}}zeichne()}function richtig(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(sol[b][a]!=" "&&sol[b][a]!=solut[b][a]){document.getElementById("Antwort").innerHTML="Leider falsch";canvas1.focus();return}}}document.getElementById("Antwort").innerHTML="Alles korrekt!";canvas1.focus()}function zeichne(){ctx.clearRect(0,0,W,H);ctx.font="20px Arial";faerbebloecke();ctx.beginPath();for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(help1[b][a]){ctx.fillStyle="LightGreen";ctx.rect(cellw*b,cellw*a,cellw,cellw);ctx.fill()}if(b==xNew&&a==yNew){ctx.fillStyle="cyan";ctx.rect(cellw*b,cellw*a,cellw,cellw);ctx.fill()}ctx.beginPath();ctx.strokeStyle="gray";ctx.rect(cellw*b,cellw*a,cellw,cellw);ctx.stroke();ctx.beginPath();if(locked[b][a]){ctx.fillStyle="red"}else{ctx.fillStyle="black"}ctx.fillText(""+sol[b][a],cellw*b+cellw/2-6,cellw*a+cellw/2+8);ctx.stroke()}}ctx.beginPath();ctx.strokeStyle="black";ctx.rect(1,1,cellw*digit,cellw*digit);markiereBoxrand();ctx.stroke()}function zeichneBlock(){ctx.clearRect(0,0,W,H);for(var h=0;h<digit;h++){for(var f=0;f<digit;f++){if(h==xNew&&f==yNew){if(findeBoxnr(h,f)==-1){if(h>0){var o=findeBoxnr(h-1,f)}if(h<digit-1){var q=findeBoxnr(h+1,f)}if(f>0){var b=findeBoxnr(h,f-1)}if(f<digit-1){var l=findeBoxnr(h,f+1)}if(o==anzblock||q==anzblock||b==anzblock||l==anzblock||!zushg||block[anzblock]==""){block[anzblock]=block[anzblock]+h+""+f;zushg=true;var n=block[anzblock].length/2+1;if(n<digit+1){document.getElementById("messageBox").innerHTML="<b>Fügen Sie Feld "+n+" der Box "+(anzblock+1)+" hinzu.</b>"}else{document.getElementById("messageBox").innerHTML="<b>Fügen Sie Feld 1 der Box "+(anzblock+2)+" hinzu.</b>"}if((block[anzblock].length<2*digit)&&(freieNachbarn(h,f)==0)){var p=false;for(var g=0;g<block[anzblock].length/2-1;g++){var a=parseInt(block[anzblock].charAt(2*g));var d=parseInt(block[anzblock].charAt(2*g+1));if(freieNachbarn(a,d)>0){p=true}}if(!p){zushg=false;document.getElementById("messageBox").innerHTML="<b>Keine freien Nachbarn mehr.</b> Ev. gelingt Create später nicht, da kein eindeutiges Problem für diese Struktur existiert.";document.getElementById("messageBox").innerHTML+="<br><br><b>Fügen Sie Feld "+n+" der Box "+(anzblock+1)+" hinzu.</b>"}}}}}ctx.beginPath();ctx.strokeStyle="gray";ctx.rect(cellw*h,cellw*f,cellw,cellw);ctx.stroke()}}ctx.beginPath();ctx.strokeStyle="black";ctx.rect(1,1,cellw*digit,cellw*digit);ctx.stroke();for(var e=0;e<=anzblock;e++){faerbeBlock(e)}if((block[anzblock].length==2*digit)&&(anzblock<digit-1)){anzblock++}if(anzblock==digit-1){for(var h=0;h<digit;h++){for(var f=0;f<digit;f++){var m=findeBoxnr(h,f);if(m==-1){block[anzblock]=block[anzblock]+h+""+f}}}bnr=1;blockgelungen=10;erfolgstruktur=false;neueBoxstruktur=true;document.getElementById("messageBox").innerHTML="";document.getElementById("message").innerHTML="";document.getElementById("message").innerHTML="<b>Create oder CreateUser</b>";document.getElementById("steuerbuttons2").style.display="inline-block";zeichne();clearf()}}function compzeichneBlock(){ctx.clearRect(0,0,W,H);while(anzblock<digit){for(var e=0;e<digit;e++){for(var b=0;b<digit;b++){if((findeBoxnr(e,b)==-1)&&(freieNachbarn(e,b)>0)){block[anzblock]=e+""+b;b=digit;e=digit}}}if(block[anzblock]==""){return false}do{var g=block[anzblock].length/2-1;var e=parseInt(block[anzblock].charAt(2*g));var b=parseInt(block[anzblock].charAt(2*g+1));if(freieNachbarn(e,b)>0){setzeFeld(e,b)}else{var d=false;for(var h=0;h<block[anzblock].length/2-1;h++){var a=parseInt(block[anzblock].charAt(2*h));var f=parseInt(block[anzblock].charAt(2*h+1));if(freieNachbarn(a,f)>0){d=true;setzeFeld(a,f);h=block[anzblock].length/2-1}}if(!d){return false}}}while(block[anzblock].length<2*digit);anzblock++}anzblock=digit-1;return true}function setzeFeld(f,e){var k=false;while(!k){var m=rand(4);switch(m){case 0:if(f>0){var d=findeBoxnr(f-1,e)}if(d==-1){block[anzblock]=block[anzblock]+(f-1)+""+e;k=true}break;case 1:if(f<digit-1){var l=findeBoxnr(f+1,e)}if(l==-1){block[anzblock]=block[anzblock]+(f+1)+""+e;k=true}break;case 2:if(e>0){var h=findeBoxnr(f,e-1)}if(h==-1){block[anzblock]=block[anzblock]+f+""+(e-1);k=true}break;case 3:if(e<digit-1){var g=findeBoxnr(f,e+1)}if(g==-1){block[anzblock]=block[anzblock]+f+""+(e+1);k=true}break}}}function faerbebloecke(){for(var d=0;d<digit;d++){ctx.beginPath();ctx.fillStyle=farbe[d];for(var e=0;e<digit;e++){var b=parseInt(block[d].charAt(2*e));var a=parseInt(block[d].charAt(2*e+1));ctx.rect(cellw*b+1,cellw*a+1,cellw-2,cellw-2)}ctx.fill()}}function findeBoxnr(e,d){var f=-1;var b=0;while(b<digit){for(var g=0;g<digit;g++){if((parseInt(block[b].charAt(2*g))==e)&&(parseInt(block[b].charAt(2*g+1))==d)){return b}}b++}return f}function erzeugeStruktur(){bnr=10;anzblock=0;anzcreate=0;document.getElementById("chb3u4").style.display="none";document.getElementById("zifferbuttons").style.display="none";document.getElementById("steuerbuttons1").style.display="none";document.getElementById("steuerbuttons2").style.display="none";document.getElementById("message").innerHTML="Klicken Sie auf die Felder, die zur Box hinzugefügt werden sollen. Sie können nur Felder zu einer Box hinzufügen, die Nachbar eines existierenden Feldes der Box sind, ausser es gibt keine freien Nachbarn mehr.<br>";document.getElementById("message").innerHTML+="Sie sollten darauf achten, keine eingeschlossenenen Leerfelder zu erzeugen.<br>";document.getElementById("message").innerHTML+="Die letzte Box wird vom Computer hinzugefügt.<br><br>";document.getElementById("message").innerHTML+="'NeueBoxstruktur User' startet den Prozess neu.<br>";document.getElementById("message").innerHTML+="'Clear' bricht den Prozess ab und ladet Boxstruktur von p1.<br>";for(var a=1;a<digit;a++){block[a]=""}block[0]="00";xNew=0;yNew=0;document.getElementById("messageBox").innerHTML="<b>Fügen Sie Feld 2 der Box 1 hinzu</b>";zeichneBlock()}function comperzeugeStruktur(){document.getElementById("zifferbuttons").style.display="none";document.getElementById("steuerbuttons1").style.display="none";document.getElementById("steuerbuttons2").style.display="none";document.getElementById("bNBCle").style.display="none";anzcreate=0;blockgelungen=10;erfolgstruktur=false;var a=0;bnr=1;document.getElementById("NBsC").disabled=true;do{anzblock=0;for(var e=0;e<digit;e++){block[e]=""}var f=compzeichneBlock();if(!f){a++}}while(!f&&(a<400));document.getElementById("NBsC").disabled=false;for(var e=0;e<digit;e++){for(var d=0;d<digit;d++){ctx.beginPath();ctx.strokeStyle="gray";ctx.rect(cellw*e,cellw*d,cellw,cellw);ctx.stroke()}}ctx.beginPath();ctx.strokeStyle="black";ctx.rect(1,1,cellw*digit,cellw*digit);ctx.stroke();document.getElementById("messageBox").innerHTML="";document.getElementById("message").innerHTML="";if(a==400){document.getElementById("message").innerHTML="Konnte Boxstruktur nicht erzeugen.<br> Klicken Sie nochmals auf 'NeueBoxstruktur Computer'"}else{document.getElementById("steuerbuttons2").style.display="inline-block";neueBoxstruktur=true;blockgelungen=10;for(var b=0;b<=anzblock;b++){faerbeBlock(b)}document.getElementById("message").innerHTML="<b>Create oder CreateUser</b>";clearf()}}function freieNachbarn(b,a){var d=0;if((b>0)&&(findeBoxnr(b-1,a)==-1)){d++}if((b<digit-1)&&(findeBoxnr(b+1,a)==-1)){d++}if((a>0)&&(findeBoxnr(b,a-1)==-1)){d++}if((a<digit-1)&&(findeBoxnr(b,a+1)==-1)){d++}return d}function faerbeBlock(d){ctx.beginPath();ctx.fillStyle=farbe[d];for(var e=0;e<block[d].length/2;e++){var b=parseInt(block[d].charAt(2*e));var a=parseInt(block[d].charAt(2*e+1));ctx.rect(cellw*b+1,cellw*a+1,cellw-2,cellw-2)}ctx.fill()}function proof(b,a,h){var f;for(var d=0;d<digit;d++){if(sol[d][a]==h){return false}}for(var e=0;e<digit;e++){if(sol[b][e]==h){return false}}f=findeBoxnr(b,a);for(var g=0;g<digit;g++){d=parseInt(block[f].charAt(2*g));e=parseInt(block[f].charAt(2*g+1));if(sol[d][e]==h){return false}}return true}function possibilities(b,a){var e="";if(locked[b][a]){return"       "}for(var f=0;f<digit;f++){if(proof(b,a,String.fromCharCode(49+f))){if(e!=""){e+=","}e+=String.fromCharCode(49+f)}}return e}function count(b,a){var f=0;if(locked[b][a]&&!comp){return 0}if(sol[b][a]!=" "&&comp){return 0}for(var e=0;e<digit;e++){if(comp){if(proof(b,a,String.fromCharCode(49+e))&&!forbidden[b][a][e]){f++}}else{if(proof(b,a,String.fromCharCode(49+e))){f++}}}return f}function eingabe(b){if(digit*digit==anzleere()&&!eingabeprob){return}if(b==0&&!locked[xNew][yNew]){sol[xNew][yNew]=" ";zeichne();document.getElementById("Antwort").innerHTML="";return}var a=b+48;document.getElementById("Sav").disabled=false;if(eingabeprob){hinweisEingabe()}if(setvalue(xNew,yNew,String.fromCharCode(a))){if(document.getElementById("Hilfe").checked){streiche(a-48);hilfebuttons_bgweiss();document.getElementById("H"+b).style.backgroundColor="LightGreen"}if(!eingabeprob){document.getElementById("right").style.display="inline-block"}document.getElementById("Resultat").innerHTML="";document.getElementById("Antwort").innerHTML="";document.getElementById("messageBox").innerHTML="";zeichne();getInfo();if(solved()){document.getElementById("Hilfe").checked=false;OnChangeCheckbox2(document.getElementById("Hilfe"));document.getElementById("message").innerHTML="<b>"+Nummer+" gelöst. Gratuliere!</b><br><br>Klick auf 'Create' versucht eine neue Problemstellung für diese Boxstruktur zu finden.";document.getElementById("zifferbuttons").style.display="none";document.getElementById("steuerbuttons1").style.display="none";document.getElementById("right").style.display="none";zeichne()}}}function hinweisEingabe(){document.getElementById("Sol").disabled=true;document.getElementById("testeind").style.display="inline-block";document.getElementById("message").innerHTML="Geben Sie die Ziffern ein und prüfen Sie die Stellung auf Eindeutigkeit.<br>";document.getElementById("message").innerHTML+="Sobald sie eindeutig ist, erscheint der Button 'Save aktuelles ...' und Sie können sie unter 'Probneu' speichern."}function hilf(e){streiche(e);hilfebuttons_bgweiss();document.getElementById("H"+e).style.backgroundColor="LightGreen";var a=false;for(var d=0;d<digit;d++){for(var b=0;b<digit;b++){if(sol[d][b]==String.fromCharCode(48+e)){xNew=d;yNew=b;a=true;b=digit;d=digit}}}if(!a){xNew=-1}zeichne()}function keyPress(a){switch(a){case 40:if(yNew<digit-1){yNew++;getInfo()}break;case 38:if(yNew>0){yNew--;getInfo()}break;case 39:if(xNew<digit-1){xNew++;getInfo()}break;case 37:if(xNew>0){xNew--;getInfo()}break;case 46:if(!locked[xNew][yNew]){sol[xNew][yNew]=" "}document.getElementById("Antwort").innerHTML="";break;case 32:event.preventDefault();break;default:if(digit*digit==anzleere()&&!eingabeprob){return}c=String.fromCharCode(a);if((a>48+digit||a<49)&&c!=" "){return}if(eingabeprob){hinweisEingabe()}document.getElementById("Sav").disabled=false;if(setvalue(xNew,yNew,c)){if(document.getElementById("Hilfe").checked){streiche(a-48);hilfebuttons_bgweiss();document.getElementById("H"+c).style.backgroundColor="LightGreen";getInfo()}if(!eingabeprob){document.getElementById("right").style.display="inline-block"}document.getElementById("Resultat").innerHTML="";document.getElementById("Antwort").innerHTML="";document.getElementById("messageBox").innerHTML="";if(solved()){document.getElementById("Hilfe").checked=false;OnChangeCheckbox2(document.getElementById("Hilfe"));document.getElementById("message").innerHTML="<b>"+Nummer+" gelöst. Gratuliere!</b><br><br>Klick auf 'Create' versucht eine neue Problemstellung für diese Boxstruktur zu finden.";document.getElementById("zifferbuttons").style.display="none";document.getElementById("steuerbuttons1").style.display="none";document.getElementById("right").style.display="none"}}break}if(bnr<10){zeichne()}}function setvalue(d,b,e){var a=e.charCodeAt(0);if(a<49||a>48+digit){return false}if(locked[d][b]){return false}if(comp&&(sol[d][b]!=" ")){return false}if(forbidden[d][b][parseInt(e)-1]){return false}if(proof(d,b,e)){xCur=d;yCur=b;xNew=d;yNew=b;back[backIndex]=digit*xCur+yCur;backIndex++;sol[xCur][yCur]=e;if(comp){forbidden[xCur][yCur][parseInt(e)-1]=true}return true}return false}function getrow(a){return Math.floor(a%digit)}function getcol(a){return Math.floor(a/digit)}function getcell(a,b){return(digit*a+b)}function possible_move(){for(var a=0;a<digit;a++){for(var b=0;b<digit;b++){if(sol[a][b]==" "&&count(a,b)==0){return false}}}return true}function setting(){var n=0;var g=-1;var a=-1;var p=false;var h=false;var f=false;var e=false;var b=false;if(solved()){return}if(unloesbar){return}comp=true;if(!possible_move()){backtrack()}for(var k=0;k<digit;k++){for(var q=0;q<digit;q++){var o=count(k,q);if(o==1){p=true;g=k;a=q;k=9;q=9}if(o==2&&!p){f=true;g=k;a=q}if(o==3&&!p&&!f){e=true;g=k;a=q}if(o==4&&!p&&!f&&!e){b=true;g=k;a=q}}}var m=0;var l=0;do{if(!p&&!f&&!e&&!b){do{l=rand(digit*digit)}while(sol[getcol(l)][getrow(l)]!=" ");g=getcol(l);a=getrow(l)}n=0;do{if(!forbidden[g][a][n]){h=setvalue(g,a,String.fromCharCode(49+n))}n++}while(n<digit&&!h);p=false;f=false;e=false;b=false;m++}while(!h&&m<100);if(m==100){unloesbar=true;return}}function anzleere(){var d=0;for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(sol[b][a]==" "){d++}}}return d}function solved(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(sol[b][a]==" "){return false}}}return true}function create1(){var d=new Array(digit);var b;var h;comp=true;initPuzzle();var g;if(bnr==0){g=0}if(bnr>0){if(blockgelungen<10){g=blockgelungen}else{g=rand(digit)}}var a=1;do{d=permutation();for(b=0;b<digit;b++){var e=block[g].charAt(2*b);var f=block[g].charAt(2*b+1);setvalue(e,f,String.fromCharCode(49+d[b]))}h=dosolve();if(!h){a++}}while(!h&&a<10);unloesbar=(a==10);if(h){blockgelungen=g}}function permutation(){var b=new Array(digit);b[0]=rand(digit);var d=1;while(d<digit){b[d]=rand(digit);for(var a=0;a<d;a++){if(b[d]==b[a]){a=d+1}}if(a==d){d++}}return b}function speichern_in_prob(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){prob[b][a]=sol[b][a]}}}function speichern_in_solut(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){solut[b][a]=sol[b][a]}}}function eindeutig(){var h;var e,f,g;save();h=dosolve();speichern_in_prob();load();trials=0;do{h=false;for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(count(b,a)>1){e=b;f=a;for(g=0;g<digit;g++){if(g==parseInt(prob[e][f])-1){g++}if(setvalue(e,f,String.fromCharCode(49+g))){locked[e][f]=true;h=dosolve();if(h){speichern_in_prob();load();setvalue(e,f,String.fromCharCode(49+g));g=digit;b=digit;a=digit;save()}else{unloesbar=false;load()}}}}}}trials++}while(h&&trials<10)}function docreate(){create=true;document.getElementById("messageBox").innerHTML="";document.getElementById("zifferbuttons").style.display="none";document.getElementById("steuerbuttons1").style.display="none";document.getElementById("chb3u4").style.display="none";document.getElementById("bNBCle").style.display="none";document.getElementById("testeind").style.display="none";unloesbar=false;document.getElementById("wahl").selectedIndex="0";document.getElementById("message").innerHTML="Geduld! Ich versuche, eine eindeutige Problemstellung für diese Boxstruktur zu finden.<br>Falls gelungen, erscheint hier die Anzahl Ziffern, sonst erscheint eine Meldung des Misserfolgs.";var a=setTimeout(function(){docreate1()},20)}function docreate1(){var g,a,m,h,b,l;var a=25;var m=29;create1();if(unloesbar){document.getElementById("chb3u4").style.display="inline-block";document.getElementById("bNBCle").style.display="inline-block";create=false;comp=false;document.getElementById("message").innerHTML="<b>Create nicht gelungen!</b><br>Klicken Sie nochmals auf Create.";anzcreate++;if(anzcreate>4){document.getElementById("message").innerHTML="<b>Create nicht gelungen!</b>";if(erfolgstruktur){document.getElementById("messageBox").innerHTML="Eindeutige Problemstellung ist für diese Struktur schon mal gelungen, aber schwierig zu finden.<br>Wählen Sie nochmal 'Create' falls Sie noch Geduld haben, sonst 'NeueBoxstruktur...' oder ein Problem aus 'Prob'.<br>"}else{document.getElementById("messageBox").innerHTML="Eindeutige Problemstellung ist für diese Struktur eventuell unmöglich.<br>Wählen Sie 'NeueBoxstruktur...' oder ein Problem aus 'Prob'.<br>Sie können es aber auch noch einige Male mit 'Create' versuchen - vielleicht klappt es ja doch noch.<br>"}}return}save_user();var k=0;if(digit==9){a=50;m=54}do{load_user();g=0;do{var f=rand(digit*digit);b=getcol(f);l=getrow(f);if(sol[b][l]!=" "){sol[b][l]=" ";for(h=0;h<digit;h++){forbidden[b][l][h]=false}g++}}while(g<m);eindeutig();k++}while(anzleere()<a&&k<20);save_user();create=false;comp=false;var g=digit*digit-anzleere();document.getElementById("steuerbuttons2").style.display="inline-block";document.getElementById("bNBCle").style.display="inline-block";document.getElementById("chb3u4").style.display="inline-block";if(k<20){Nummer="aktuelles Problem: ";document.getElementById("message").innerHTML="<b>"+Nummer+g+" Ziffern</b>";savemessage=document.getElementById("message").innerHTML;anzcreate=0;zeichne();document.getElementById("Sav").disabled=false;if(digit==6&&!erfolgstruktur){save6neu()}if(digit==9&&!erfolgstruktur){save9neu()}document.getElementById("zifferbuttons").style.display="inline-block";document.getElementById("steuerbuttons2").style.display="inline-block";vert=["","","","","","","","",""];for(var f=0;f<digit;f++){for(var e=0;e<digit;e++){if(locked[f][e]){vert[f]+=sol[f][e]}else{vert[f]+=" "}}}dosolve();speichern_in_solut();initPuzzle();for(var f=0;f<digit;f++){for(var e=0;e<digit;e++){prob[f][e]=vert[f].charAt(e);if(prob[f][e]=="-"){prob[f][e]=" "}locked[f][e]=setvalue(f,e,prob[f][e])}}zeichne();document.getElementById("message").innerHTML=savemessage;if(!erfolgstruktur){erfolgstruktur=true;document.getElementById("messageBox").innerHTML=savemessageBox}else{document.getElementById("saveaktprob").style.display="inline-block";document.getElementById("messageBox").innerHTML="Sie können das Problem mit 'Save aktuelles Problem...' in 'Probneu' speichern"}}else{document.getElementById("zifferbuttons").style.display="none";document.getElementById("steuerbuttons2").style.display="none";document.getElementById("message").innerHTML="<b>Create nicht gelungen!</b><br>Klicken Sie nochmals auf Create."}}function solvebutton(){if(solved()){return}document.getElementById("messageBox").innerHTML="";lock();var a=dosolve();if(a){document.getElementById("message").innerHTML="<b>"+Nummer+" gelöst!</b><br><br>Klick auf 'Create' versucht eine neue Problemstellung für diese Boxstruktur zu finden.";document.getElementById("steuerbuttons1").style.display="none";document.getElementById("right").style.display="none";document.getElementById("Antwort").innerHTML="";streiche(0);zeichne()}else{if(document.getElementById("message").innerHTML=="<b>zu wenig Zahlen</b>"){}else{document.getElementById("message").innerHTML="<b>unlösbar!</b>"}}}function dosolve(){if(solved()){return true}var b=false;if(((digit==6)&&(anzleere()>31))||(anzleere()>72)){document.getElementById("message").innerHTML="<b>zu wenig Zahlen</b>";return false}comp=true;document.getElementById("zifferbuttons").style.display="none";var a=0;do{setting();a++;b=solved()}while(!b&&!unloesbar&&(a<4000));return b}function backtrack(){var f,a;var e=false;if(backIndex==0){return}if(locked[xCur][yCur]){unloesbar=true;return}sol[xCur][yCur]=" ";if(count(xCur,yCur)>0){var b=0;do{if(!forbidden[xCur][yCur][b]){e=setvalue(xCur,yCur,String.fromCharCode(49+b))}b++}while(b<digit&&!e)}if(!e){do{f=xCur;a=yCur;backIndex--;xCur=getcol(back[backIndex]);yCur=getrow(back[backIndex]);if(typeof locked[xCur]=="undefined"){unloesbar=true;return}if(locked[xCur][yCur]){unloesbar=true;return}if(f!=xCur||a!=yCur){for(b=0;b<digit;b++){forbidden[f][a][b]=false}}sol[xCur][yCur]=" "}while(!possible_move()||unloesbar)}}function save(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){savesol[b][a]=sol[b][a]}}}function load(){initPuzzle();if(!comp){document.getElementById("message").innerHTML="                           "}for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){locked[b][a]=setvalue(b,a,savesol[b][a])}}}function richtig_load(){initPuzzle();for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){sol[b][a]=savesol[b][a]}}}function testload(){initPuzzle();for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){locked[b][a]=setvalue(b,a,savesol[b][a])}}}function save_user(){bnruser=bnr;savemessage=document.getElementById("message").innerHTML;document.getElementById("Loa").disabled=false;for(var b=0;b<digit;b++){blockuser[b]=block[b];for(var a=0;a<digit;a++){if(locked[b][a]){saveuser[b][a][0]=sol[b][a];saveuser[b][a][1]=" "}else{saveuser[b][a][0]=" ";saveuser[b][a][1]=sol[b][a]}}}}function load_user(){bnr=bnruser;initPuzzle();for(var b=0;b<digit;b++){block[b]=blockuser[b]}for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(saveuser[b][a][0]!=" "){locked[b][a]=setvalue(b,a,saveuser[b][a][0])}if(saveuser[b][a][1]!=" "){setvalue(b,a,saveuser[b][a][1])}}}zeichne();document.getElementById("message").innerHTML=savemessage}function getInfo(){if(help){document.getElementById("Verf").innerHTML=possibilities(xNew,yNew)}else{document.getElementById("Verf").innerHTML="           "}}function rand(a){return Math.floor(Math.random()*a)}function line(b,e,a,d){ctx.moveTo(b,e);ctx.lineTo(a,d)}function getMousePos(b,a){var d=b.getBoundingClientRect();return{x:a.clientX-d.left,y:a.clientY-d.top}}function deaktiviere_hilfebuttons(){for(var a=1;a<digit+1;a++){document.getElementById("H"+String.fromCharCode(a+48)).disabled=true;document.getElementById("H"+a).style.backgroundColor="white"}}function aktiviere_hilfebuttons(){for(var a=1;a<digit+1;a++){document.getElementById("H"+String.fromCharCode(a+48)).disabled=false}}function hilfebuttons_bgweiss(){for(var a=1;a<digit+1;a++){document.getElementById("H"+a).style.backgroundColor="white"}}function save6neu(){if(eingabeprob){document.getElementById("message").innerHTML="";eingabeprob=false}var a=document.getElementById("probneu6");var f=a.length-1;if(f==9){document.getElementById("messageBox").innerHTML="Sie haben bereits 9 neue Probleme gespeichert.<br>Problem wird nicht gespeichert.";return}document.getElementById("messageBox").innerHTML="Problem ist unter 'Probneu' als np"+(f+1)+" gespeichert.";savemessageBox=document.getElementById("messageBox").innerHTML;if(document.getElementById("message").innerHTML.indexOf("Save aktuelles")>-1){document.getElementById("message").innerHTML=""}var e=document.createElement("option");e.text="np"+(f+1);a.add(e);block6gel[f]=blockgelungen;for(var d=0;d<digit;d++){block6nr[f][d]=block[d]}vert6[f]=["","","","","",""];for(var d=0;d<digit;d++){for(var b=0;b<digit;b++){if(locked[d][b]){vert6[f][d]+=sol[d][b]}else{vert6[f][d]+=" "}}}}function save9neu(){if(eingabeprob){document.getElementById("message").innerHTML="";eingabeprob=false}var a=document.getElementById("probneu9");var f=a.length-1;if(f==9){document.getElementById("messageBox").innerHTML="Sie haben bereits 9 neue Probleme gespeichert.<br>Problem wird nicht gespeichert.<br>";return}document.getElementById("messageBox").innerHTML="Problem ist unter 'Probneu' als np"+(f+1)+" gespeichert.<br>";savemessageBox=document.getElementById("messageBox").innerHTML;if(document.getElementById("message").innerHTML.indexOf("Save aktuelles")>-1){document.getElementById("message").innerHTML=""}var e=document.createElement("option");e.text="np"+(f+1);a.add(e);block9gel[f]=blockgelungen;for(var d=0;d<digit;d++){block9nr[f][d]=block[d]}vert9[f]=["","","","","","","","",""];for(var d=0;d<digit;d++){for(var b=0;b<digit;b++){if(locked[d][b]){vert9[f][d]+=sol[d][b]}else{vert9[f][d]+=" "}}}}function problemneu(e){if(e==0){return}document.getElementById("probneu6").selectedIndex="0";document.getElementById("probneu9").selectedIndex="0";eingabeprob=false;document.getElementById("testeind").style.display="none";erfolgstruktur=true;document.getElementById("saveaktprob").style.display="none";unloesbar=false;initPuzzle();if(document.getElementById("9x9").checked){vert=vert9[e-1];blockgelungen=block9gel[e-1];for(var b=0;b<digit;b++){block[b]=block9nr[e-1][b]}}else{problemneu6(e)}for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){prob[b][a]=vert[b][a];if(prob[b][a]==""){prob[b][a]=" "}locked[b][a]=setvalue(b,a,prob[b][a])}}dosolve();speichern_in_solut();initPuzzle();for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){prob[b][a]=vert[b].charAt(a);if(prob[b][a]=="-"){prob[b][a]=" "}locked[b][a]=setvalue(b,a,prob[b][a])}}zeichne();Nummer="pn"+e;var d=digit*digit-anzleere();document.getElementById("message").innerHTML="<b>Problem neu "+e+": "+d+" Ziffern</b>"}function problemneu6(b){vert=vert6[b-1];blockgelungen=block6gel[b-1];for(var a=0;a<digit;a++){block[a]=block6nr[b-1][a]}}function usersaveneu(){document.getElementById("saveaktprob").style.display="none";eingabeprob=false;document.getElementById("testeind").style.display="none";document.getElementById("Resultat").innerHTML="";neueBoxstruktur=false;bnruser=bnr;save();if(digit==6){save6neu()}else{save9neu()}}function dotest(){save_user();if(((digit==6)&&(anzleere()>31))||(anzleere()>72)){document.getElementById("message").innerHTML="<b>zu wenig Zahlen</b>";return}document.getElementById("testeind").style.display="none";document.getElementById("Resultat").innerHTML="<b>Ich teste...</b>";if(digit==9){document.getElementById("Resultat").innerHTML+="<b> Das dauert ein bisschen.</b>"}var a=setTimeout(function(){testeindeutig()},20)}function testeindeutig(){lock();save();unloesbar=false;var g=dosolve();if(!g){document.getElementById("Resultat").innerHTML="";document.getElementById("testeind").style.display="inline-block";load_user();document.getElementById("Resultat").innerHTML="<b>Problem unlösbar!</b><br>Korrigieren Sie die Stellung.";return}speichern_in_prob();for(var d=0;d<digit;d++){for(var b=0;b<digit;b++){if(locked[d][b]==" "){var a=1;do{testload();var h=String.fromCharCode(48+a);if(h!=prob[d][b]){setvalue(d,b,h);unloesbar=false;g=dosolve();if(g){var e=vergleich();if(!e){testload();zeichne();document.getElementById("testeind").style.display="inline-block";load_user();document.getElementById("Resultat").innerHTML="<b>nicht eindeutig!</b><br>Korrigieren bzw. ergänzen Sie die Stellung.";return}}}a++}while(a<=digit)}}}testload();if(digit==6&&!erfolgstruktur){save6neu()}if(digit==9&&!erfolgstruktur){save9neu()}document.getElementById("zifferbuttons").style.display="inline-block";document.getElementById("steuerbuttons2").style.display="inline-block";vert=["","","","","","","","",""];for(var d=0;d<digit;d++){for(var b=0;b<digit;b++){if(locked[d][b]){vert[d]+=sol[d][b]}else{vert[d]+=" "}}}dosolve();speichern_in_solut();initPuzzle();for(var d=0;d<digit;d++){for(var b=0;b<digit;b++){prob[d][b]=vert[d].charAt(b);if(prob[d][b]=="-"){prob[d][b]=" "}locked[d][b]=setvalue(d,b,prob[d][b])}}zeichne();Nummer="aktuelles Problem";var f=digit*digit-anzleere();document.getElementById("message").innerHTML="<b>"+Nummer+": "+f+" Ziffern</b>";document.getElementById("saveaktprob").style.display="none";if(!erfolgstruktur){erfolgstruktur=true;document.getElementById("messageBox").innerHTML=savemessageBox}else{document.getElementById("saveaktprob").style.display="inline-block";document.getElementById("messageBox").innerHTML="Sie können das Problem mit 'Save aktuelles Problem...' in 'Probneu' speichern"}document.getElementById("testeind").style.display="none";document.getElementById("Resultat").innerHTML="<b>eindeutig!</b>";document.getElementById("Sol").disabled=false}function vergleich(){for(i=0;i<digit;i++){for(j=0;j<digit;j++){if(sol[i][j]!=prob[i][j]){return false}}}return true}function createuser(){eingabeprob=true;initPuzzle();hinweisEingabe()};