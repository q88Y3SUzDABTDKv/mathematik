var W,H;var cellw;var backIndex;var sol=new Array(9);for(var i=0;i<9;i++){sol[i]=new Array(9)}var locked=new Array(9);for(i=0;i<9;i++){locked[i]=new Array(9)}var help1=new Array(9);for(i=0;i<9;i++){help1[i]=new Array(9)}var prob=new Array(9);for(i=0;i<9;i++){prob[i]=new Array(9)}var savesol=new Array(9);for(i=0;i<9;i++){savesol[i]=new Array(9)}var saveuser=new Array(9);for(i=0;i<9;i++){saveuser[i]=new Array(9);for(var j=0;j<9;j++){saveuser[i][j]=new Array(2)}}var forbidden=new Array(9);for(i=0;i<9;i++){forbidden[i]=new Array(9);for(j=0;j<9;j++){forbidden[i][j]=new Array(9)}}var back=new Array(500);var xCur=0;var yCur=0;var xNew=0;var yNew=0;var savemessage="";var create=false;var comp;var unloesbar;var help;var ctx;var canvas1;var initmade=false;var digit=6;var Nummer="";var faerben=false;const Diagfarbe="#FFFFE0";function resizeCanvas(){var a=document.getElementById("containercanvas");a.width=a.offsetWidth;W=a.width;if(W>400){W=400}H=W;cellw=Math.floor(W/digit);if(initmade){resize1();zeichne()}else{init()}}function init(){initmade=true;window.addEventListener("resize",function(a){resizeCanvas()});canvas1=document.getElementById("myCanvas");canvas1.addEventListener("click",function(d){var b=getMousePos(canvas1,d);var a=b.x;var e=b.y;xNew=Math.floor(a/cellw);yNew=Math.floor(e/cellw);if(xNew<0||yNew<0||xNew>digit-1||yNew>digit-1){return}getInfo();zeichne()},false);resize1();ctx=canvas1.getContext("2d");document.getElementById("Infos").addEventListener("click",infos);document.getElementById("9x9").checked=false;document.getElementById("Loa").disabled=true;problem(rand(2)+1)}function initPuzzle(){aktiviere_zifferbuttons();for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){sol[b][a]=" ";locked[b][a]=false;for(var d=0;d<digit;d++){forbidden[b][a][d]=false}}}document.getElementById("Show").checked=false;document.getElementById("Hilfe").checked=false;document.getElementById("wahl").selectedIndex="0";hilfebuttons_bgweiss();deaktiviere_hilfebuttons();backIndex=0;xNew=0;yNew=0;comp=false;unloesbar=false;help=false;if(!create){document.getElementById("message").innerHTML="Klick auf 'Create' oder Auswahl aus 'Prob'"}streiche(0)}function resize1(){canvas1.width=W;canvas1.height=H}function OnChangeCheckbox3(a){document.getElementById("Loa").disabled=true;if(a.checked){digit=9;document.getElementById("Z9x9").style.display="inline-block";document.getElementById("H9x9").style.display="inline-block"}else{digit=6;document.getElementById("Z9x9").style.display="none";document.getElementById("H9x9").style.display="none"}cellw=Math.floor(W/digit);problem(rand(2)+1)}function OnChangeCheckbox1(a){help=a.checked;getInfo()}function OnChangeCheckbox2(d){var b,a;if(d.checked){aktiviere_hilfebuttons()}else{deaktiviere_hilfebuttons();for(b=0;b<digit;b++){for(a=0;a<digit;a++){help1[b][a]=false}}zeichne()}}function OnChangeCheckbox4(a){faerben=a.checked;zeichne()}function streiche(k){var g,e,b,l;c=String.fromCharCode(48+k);for(g=0;g<digit;g++){for(e=0;e<digit;e++){help1[g][e]=false}}if(k>0){for(g=0;g<digit;g++){for(e=0;e<digit;e++){if(sol[g][e]!=" "){help1[g][e]=true}if(sol[g][e]==c){for(b=0;b<digit;b++){help1[b][e]=true;help1[g][b]=true}var f=3*(Math.floor(g/3));var d=(digit/3)*(Math.floor(e/(digit/3)));for(b=f;b<f+3;b++){for(l=d;l<d+(digit/3);l++){help1[b][l]=true}}if(g==e){for(var h=0;h<digit;h++){help1[h][h]=true}}if(g+e==digit-1){for(var a=0;a<digit;a++){help1[a][digit-1-a]=true}}}}}}zeichne()}function lock(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){locked[b][a]=(sol[b][a]!=" ")}}zeichne()}function zeichne(){ctx.clearRect(0,0,W,H);ctx.font="20px Arial";for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){ctx.fillStyle="white";if(faerben&b==a){ctx.fillStyle=Diagfarbe}if(faerben&b+a==digit-1){ctx.fillStyle=Diagfarbe}if(help1[b][a]){ctx.fillStyle="LightGreen"}if(b==xNew&&a==yNew){ctx.fillStyle="cyan"}ctx.rect(cellw*b,cellw*a,cellw,cellw);ctx.fill();ctx.stroke();ctx.beginPath();ctx.strokeStyle="black";ctx.rect(cellw*b,cellw*a,cellw,cellw);ctx.stroke();ctx.beginPath();if(a%3==0&&digit==9){line(0,cellw*a+1,cellw*digit,cellw*a+1)}if(a%2==0&&digit==6){line(0,cellw*a+1,cellw*digit,cellw*a+1)}if(b%3==0){line(cellw*b+1,0,cellw*b+1,cellw*digit)}ctx.stroke();ctx.beginPath();if(locked[b][a]){ctx.fillStyle="red"}else{ctx.fillStyle="black"}ctx.fillText(""+sol[b][a],cellw*b+cellw/2-6,cellw*a+cellw/2+8);ctx.stroke()}}}function proof(g,e,h){for(var b=0;b<digit;b++){if(sol[b][e]==h){return false}}for(var l=0;l<digit;l++){if(sol[g][l]==h){return false}}var f=3*(Math.floor(g/3));var d=(digit/3)*(Math.floor(e/(digit/3)));for(var b=f;b<f+3;b++){for(var l=d;l<d+digit/3;l++){if(sol[b][l]==h){return false}}}if(g==e){for(var a=0;a<digit;a++){if(sol[a][a]==h){return false}}}if(g+e==digit-1){for(var k=0;k<digit;k++){if(sol[k][digit-1-k]==h){return false}}}return true}function possibilities(b,a){var e="";if(locked[b][a]){return"       "}for(var f=0;f<digit;f++){if(proof(b,a,String.fromCharCode(49+f))){if(e!=""){e+=","}e+=String.fromCharCode(49+f)}}return e}function count(b,a){var f=0;if(locked[b][a]&&!comp){return 0}if(sol[b][a]!=" "&&comp){return 0}for(var e=0;e<digit;e++){if(comp){if(proof(b,a,String.fromCharCode(49+e))&&!forbidden[b][a][e]){f++}}else{if(proof(b,a,String.fromCharCode(49+e))){f++}}}return f}function eingabe(b){if(b==0&&!locked[xNew][yNew]){sol[xNew][yNew]=" ";zeichne();return}var a=b+48;if(setvalue(xNew,yNew,String.fromCharCode(a))){if(document.getElementById("Hilfe").checked){streiche(a-48);hilfebuttons_bgweiss();document.getElementById("H"+b).style.backgroundColor="LightGreen"}zeichne();getInfo();if(solved()){document.getElementById("message").innerHTML=Nummer+": gelöst. Gratuliere!";document.getElementById("Show").checked=false;document.getElementById("Hilfe").checked=false;OnChangeCheckbox2(document.getElementById("Hilfe"))}}}function hilf(e){streiche(e);hilfebuttons_bgweiss();document.getElementById("H"+e).style.backgroundColor="LightGreen";var a=false;for(var d=0;d<digit;d++){for(var b=0;b<digit;b++){if(sol[d][b]==String.fromCharCode(48+e)){xNew=d;yNew=b;a=true;b=digit;d=digit}}}if(!a){xNew=-1}zeichne()}function keyPress(a){switch(a){case 40:if(yNew<digit-1){yNew++;getInfo()}break;case 38:if(yNew>0){yNew--;getInfo()}break;case 39:if(xNew<digit-1){xNew++;getInfo()}break;case 37:if(xNew>0){xNew--;getInfo()}break;case 46:if(!locked[xNew][yNew]){sol[xNew][yNew]=" "}break;case 32:event.preventDefault();break;default:c=String.fromCharCode(a);if((a>48+digit||a<49)&&c!=" "){return}if(setvalue(xNew,yNew,c)){if(document.getElementById("Hilfe").checked){streiche(a-48);hilfebuttons_bgweiss();document.getElementById("H"+c).style.backgroundColor="LightGreen";getInfo()}if(solved()){document.getElementById("message").innerHTML=Nummer+": gelöst. Gratuliere!";document.getElementById("Show").checked=false;document.getElementById("Hilfe").checked=false;OnChangeCheckbox2(document.getElementById("Hilfe"))}}break}zeichne()}function setvalue(d,b,e){var a=e.charCodeAt(0);if(a<49||a>48+digit){return false}if(locked[d][b]){return false}if(comp&&(sol[d][b]!=" ")){return false}if(forbidden[d][b][parseInt(e)-1]){return false}if(proof(d,b,e)){xCur=d;yCur=b;xNew=d;yNew=b;back[backIndex]=digit*xCur+yCur;backIndex++;sol[xCur][yCur]=e;if(comp){forbidden[xCur][yCur][parseInt(e)-1]=true}return true}return false}function getrow(a){return Math.floor(a%digit)}function getcol(a){return Math.floor(a/digit)}function getcell(a,b){return(digit*a+b)}function possible_move(){for(var a=0;a<digit;a++){for(var b=0;b<digit;b++){if(sol[a][b]==" "&&count(a,b)==0){return false}}}return true}function setting(){var n=0;var g=-1;var a=-1;var p=false;var h=false;var f=false;var e=false;var b=false;if(solved()){return}if(unloesbar){return}comp=true;if(!possible_move()){backtrack()}for(var k=0;k<digit;k++){for(var q=0;q<digit;q++){var o=count(k,q);if(o==1){p=true;g=k;a=q;k=9;q=9}if(o==2&&!p){f=true;g=k;a=q}if(o==3&&!p&&!f){e=true;g=k;a=q}if(o==4&&!p&&!f&&!e){b=true;g=k;a=q}}}var m=0;var l=0;do{if(!p&&!f&&!e&&!b){do{l=rand(digit*digit)}while(sol[getcol(l)][getrow(l)]!=" ");g=getcol(l);a=getrow(l)}n=0;do{if(!forbidden[g][a][n]){h=setvalue(g,a,String.fromCharCode(49+n))}n++}while(n<digit&&!h);p=false;f=false;e=false;b=false;m++}while(!h&&m<500);if(m==500){unloesbar=true;return}}function anzleere(){var d=0;for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(sol[b][a]==" "){d++}}}return d}function solved(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(sol[b][a]==" "){return false}}}return true}function create1(){var b=new Array(digit);var a;var d;comp=true;initPuzzle();b=permutation();for(a=0;a<digit;a++){setvalue(Math.floor(a%3),Math.floor(a/3),String.fromCharCode(49+b[a]))}if(digit==9){b=permutation();for(a=0;a<digit;a++){setvalue(3+Math.floor(a%3),3+Math.floor(a/3),String.fromCharCode(49+b[a]))}b=permutation();for(a=0;a<digit;a++){setvalue(6+Math.floor(a%3),6+Math.floor(a/3),String.fromCharCode(49+b[a]))}}d=dosolve()}function permutation(){var e=digit;var b=new Array(e);b[0]=Math.floor(e*Math.random());var d=1;while(d<e){b[d]=Math.floor(e*Math.random());for(var a=0;a<d;a++){if(b[d]==b[a]){a=d+1}}if(a==d){d++}}return b}function speichern_in_prob(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){prob[b][a]=sol[b][a]}}}function eindeutig(){var h;var e,f,g;save();h=dosolve();speichern_in_prob();load();trials=0;do{h=false;for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(count(b,a)>1){e=b;f=a;for(g=0;g<digit;g++){if(g==parseInt(prob[e][f])-1){g++}if(setvalue(e,f,String.fromCharCode(49+g))){locked[e][f]=true;h=dosolve();if(h){speichern_in_prob();load();setvalue(e,f,String.fromCharCode(49+g));g=digit;b=digit;a=digit;save()}else{unloesbar=false;load()}}}}}}trials++}while(h&&trials<10)}function docreate(){var a=setTimeout(function(){docreate1()},10);document.getElementById("wahl").selectedIndex="0";document.getElementById("message").innerHTML="Geduld! Falls fertig, erscheint hier die Anzahl Zeichen"}function docreate1(){var h,e,b,l,g,k;var e=29;var b=32;create=true;create1();save_user();var a=0;if(digit==9){e=51;b=55}do{load_user();h=0;do{var f=rand(digit*digit);g=getcol(f);k=getrow(f);if(sol[g][k]!=" "){sol[g][k]=" ";for(l=0;l<digit;l++){forbidden[g][k][l]=false}h++}}while(h<b);eindeutig();a++}while(anzleere()<e&&a<20);create=false;comp=false;var h=digit*digit-anzleere();if(a<20){Nummer="Aktuelles Problem";document.getElementById("message").innerHTML=Nummer+": "+h+" Zeichen";save_user();zeichne()}else{document.getElementById("message").innerHTML="Create nicht gelungen! Klicken Sie nochmals auf Create"}}function solvebutton(){deaktiviere_zifferbuttons();if(solved()){return}lock();var a=dosolve();if(a){document.getElementById("message").innerHTML=Nummer+": Gelöst!";document.getElementById("Show").checked=false;document.getElementById("Hilfe").checked=false;OnChangeCheckbox2(document.getElementById("Hilfe"))}else{if(document.getElementById("message").innerHTML=="zu wenig Zahlen"){}else{document.getElementById("message").innerHTML="unlösbar!"}}}function dosolve(){if(solved()){return true}var b=false;if(((digit==6)&&(anzleere()>31))||(anzleere()>64)){document.getElementById("message").innerHTML="zu wenig Zahlen";return false}comp=true;var a=0;do{setting();a++;b=solved()}while(!b&&!unloesbar&&(a<20000));return b}function backtrack(){var f,a;var e=false;if(backIndex==0){return}if(locked[xCur][yCur]){unloesbar=true;return}sol[xCur][yCur]=" ";if(count(xCur,yCur)>0){var b=0;do{if(!forbidden[xCur][yCur][b]){e=setvalue(xCur,yCur,String.fromCharCode(49+b))}b++}while(b<digit&&!e)}if(!e){do{f=xCur;a=yCur;backIndex--;xCur=getcol(back[backIndex]);yCur=getrow(back[backIndex]);if(locked[xCur][yCur]){unloesbar=true;return}if(f!=xCur||a!=yCur){for(b=0;b<digit;b++){forbidden[f][a][b]=false}}sol[xCur][yCur]=" "}while(!possible_move()||unloesbar)}}function save(){for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){savesol[b][a]=sol[b][a]}}}function load(){initPuzzle();for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){locked[b][a]=setvalue(b,a,savesol[b][a])}}}function save_user(){savemessage=document.getElementById("message").innerHTML;document.getElementById("Loa").disabled=false;for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(locked[b][a]){saveuser[b][a][0]=sol[b][a];saveuser[b][a][1]=" "}else{saveuser[b][a][0]=" ";saveuser[b][a][1]=sol[b][a]}}}}function load_user(){initPuzzle();document.getElementById("message").innerHTML=savemessage;var d=savemessage.lastIndexOf(":");Nummer=savemessage.substr(0,d);for(var b=0;b<digit;b++){for(var a=0;a<digit;a++){if(saveuser[b][a][0]!=" "){locked[b][a]=setvalue(b,a,saveuser[b][a][0])}if(saveuser[b][a][1]!=" "){setvalue(b,a,saveuser[b][a][1])}}}zeichne()}function getInfo(){if(help){document.getElementById("Verf").innerHTML=possibilities(xNew,yNew)}else{document.getElementById("Verf").innerHTML="           "}}function rand(a){return Math.floor(Math.random()*a)}function line(b,e,a,d){ctx.moveTo(b,e);ctx.lineTo(a,d)}function getMousePos(b,a){var d=b.getBoundingClientRect();return{x:a.clientX-d.left,y:a.clientY-d.top}}function deaktiviere_zifferbuttons(){for(var a=1;a<digit+1;a++){document.getElementById(String.fromCharCode(a+48)).disabled=true}}function aktiviere_zifferbuttons(){for(var a=1;a<digit+1;a++){document.getElementById(String.fromCharCode(a+48)).disabled=false}}function deaktiviere_hilfebuttons(){for(var a=1;a<digit+1;a++){document.getElementById("H"+String.fromCharCode(a+48)).disabled=true;document.getElementById("H"+a).style.backgroundColor="white"}}function aktiviere_hilfebuttons(){for(var a=1;a<digit+1;a++){document.getElementById("H"+String.fromCharCode(a+48)).disabled=false}}function hilfebuttons_bgweiss(){for(var a=1;a<digit+1;a++){document.getElementById("H"+a).style.backgroundColor="white"}}function infos(){var a=window.open("infos.html","Infofenster","width=350,height=600,left=100,top=100");a.focus()};