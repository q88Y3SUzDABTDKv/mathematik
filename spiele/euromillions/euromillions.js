var n=1;var z1,z2,z3,z4,z5;var s1,s2;var zahl=new Array(6);const Kosten_pro_Tipp=2.2;function ziehung(){var c=new Array(6);c[0]=Math.floor(50*Math.random())+1;var d=1;while(d<5){var b=false;c[d]=Math.floor(50*Math.random())+1;for(var a=0;a<d;a++){if(c[d]==c[a]){b=true;break}}if(!b){d++}}c[5]=0;c[6]=0;while(c[5]==c[6]){c[5]=Math.floor(12*Math.random())+1;c[6]=Math.floor(12*Math.random())+1}return c}function vergleichzahlen(g,j,h,f,e,c){var b=0;for(var d=0;d<5;d++){if(g[d]==j){b++}}for(d=0;d<5;d++){if(g[d]==h){b++}}for(d=0;d<5;d++){if(g[d]==f){b++}}for(d=0;d<5;d++){if(g[d]==e){b++}}for(d=0;d<5;d++){if(g[d]==c){b++}}return b}function vergleichsterne(e,d,c){var a=0;if(e[5]==d){a++}if(e[6]==d){a++}if(e[5]==c){a++}if(e[6]==c){a++}return a}function gewinn1(d,c){var e=0;if((d==5)&&(c==2)){e=59710300}if((d==5)&&(c==1)){e=436000}if((d==5)&&(c==0)){e=61530}if((d==4)&&(c==2)){e=3305}if((d==4)&&(c==1)){e=165}if((d==4)&&(c==0)){e=105}if((d==3)&&(c==2)){e=58}if((d==3)&&(c==1)){e=20}if((d==2)&&(c==2)){e=15}if((d==3)&&(c==0)){e=12}if((d==1)&&(c==2)){e=10}if((d==2)&&(c==1)){e=8}if((d==2)&&(c==0)){e=4.3}return e}function ziehe(){document.getElementById("txt").innerHTML="<h2>Resultate der Simulation Euromillions</h2>";n=parseInt(document.getElementById("n").value);if(isNaN(n)||n<1){n=1}if(n>1000){n=1000}var h=chkFormular();if(!h){return}document.getElementById("n").value=n;document.getElementById("z1").value=z1;document.getElementById("z2").value=z2;document.getElementById("z3").value=z3;document.getElementById("z4").value=z4;document.getElementById("z5").value=z5;document.getElementById("s1").value=s1;document.getElementById("s2").value=s2;var g=runde(n*Kosten_pro_Tipp);var l=0;var e=false;for(var d=1;d<n+1;d++){zahl=ziehung();var k=vergleichzahlen(zahl,z1,z2,z3,z4,z5);var j=vergleichsterne(zahl,s1,s2);if(k==1){var f=" Zahl und "}else{var f=" Zahlen und "}if(j==1){var m=" Stern richtig"}else{var m=" Sterne richtig"}if((n>1)&&(((k==1)&&(j==2))||((k>1)&&(j>=0))||(k>2))){e=true;document.getElementById("txt").innerHTML+="Spiel "+d+": "+k+f+j+m+"<br>";l+=gewinn1(k,j)}if(n==1){document.getElementById("txt").innerHTML+="Die Zufallszahlen des Computers heissen:<br>";document.getElementById("txt").innerHTML+=zahl[0]+"&nbsp;&nbsp;&nbsp;&nbsp;";document.getElementById("txt").innerHTML+=zahl[1]+"&nbsp;&nbsp;&nbsp;&nbsp;";document.getElementById("txt").innerHTML+=zahl[2]+"&nbsp;&nbsp;&nbsp;&nbsp;";document.getElementById("txt").innerHTML+=zahl[3]+"&nbsp;&nbsp;&nbsp;&nbsp;";document.getElementById("txt").innerHTML+=zahl[4]+"<br>";document.getElementById("txt").innerHTML+="Die gezogenen Sterne sind:  ";document.getElementById("txt").innerHTML+=zahl[5]+"&nbsp;&nbsp;&nbsp;&nbsp;";document.getElementById("txt").innerHTML+=zahl[6]+"<br><br>";document.getElementById("txt").innerHTML+="<h3>Sie haben "+k+f+j+m+"</h3>";l+=gewinn1(k,j)}}l=runde(l);if((n>1)&&(!e)){document.getElementById("txt").innerHTML+="Sie haben leider in keinem der "+n+" Spiele etwas gewonnen<br><br>"}var c=runde(l-g);document.getElementById("txt").innerHTML+="<br>Sie haben total <b>"+g+"</b> Euro eingesetzt<br>";document.getElementById("txt").innerHTML+="Sie haben total <b>"+l+"</b> Euro gewonnen<br>";if(c>0){document.getElementById("txt").innerHTML+="Sie haben insgesamt einen Gewinn von <b>"+c+"</b> Euro erzielt!<br>"}if(c==0){document.getElementById("txt").innerHTML+="Sie haben weder gewonnen noch verloren!<br>"}if(c<0){c=c*(-1);document.getElementById("txt").innerHTML+="Sie haben insgesamt einen Verlust von <b>"+c+"</b> Euro erlitten!<br>"}}function generatenumbers(){var a=new Array(4);a[0]=Math.floor(50*Math.random())+1;anzahl=1;while(anzahl<5){gleich=false;a[anzahl]=Math.floor(50*Math.random())+1;for(i=0;i<anzahl;i++){if(a[anzahl]==a[i]){gleich=true;break}}if(!gleich){anzahl++}}document.getElementById("z1").value=a[0];document.getElementById("z2").value=a[1];document.getElementById("z3").value=a[2];document.getElementById("z4").value=a[3];document.getElementById("z5").value=a[4]}function generatestars(){s1=0;s2=0;while(s1==s2){s1=Math.floor(12*Math.random())+1;s2=Math.floor(12*Math.random())+1}document.getElementById("s1").value=s1;document.getElementById("s2").value=s2}function runde(a){return Math.round(10*a)/10}function chkFormular(){if(document.getElementById("z1").value==""){alert("Wert für z1 eingeben!");return false}z1=parseInt(document.getElementById("z1").value);if((z1<1)||(z1>50)){alert("falscher Wert für z1");document.getElementById("z1").value="";return false}if(document.getElementById("z2").value==""){alert("Wert für z2 eingeben!");return false}z2=parseInt(document.getElementById("z2").value);if((z2<1)||(z2>50)||(z2==z1)){alert("falscher Wert für z2");document.getElementById("z2").value="";return false}if(document.getElementById("z3").value==""){alert("Wert für z3 eingeben!");return false}z3=parseInt(document.getElementById("z3").value);if((z3<1)||(z3>50)||(z3==z1)||(z3==z2)){alert("falscher Wert für z3");document.getElementById("z3").value="";return false}if(document.getElementById("z4").value==""){alert("Wert für z4 eingeben!");return false}z4=parseInt(document.getElementById("z4").value);if((z4<1)||(z4>50)||(z4==z1)||(z4==z2)||(z4==z3)){alert("falscher Wert für z4");document.getElementById("z4").value="";return false}if(document.getElementById("z5").value==""){alert("Wert für z5 eingeben!");return false}z5=parseInt(document.getElementById("z5").value);if((z5<1)||(z5>50)||(z5==z1)||(z5==z2)||(z5==z3)||(z5==z4)){alert("falscher Wert für z5");document.getElementById("z5").value="";return false}if(document.getElementById("s1").value==""){alert("Wert für s1 eingeben!");return false}s1=parseInt(document.getElementById("s1").value);if((s1<1)||(s1>12)){alert("falscher Wert für s1");document.getElementById("s1").value="";return false}if(document.getElementById("s2").value==""){alert("Wert für s2 eingeben!");return false}s2=parseInt(document.getElementById("s2").value);if((s2<1)||(s2>12)||(s2==s1)){alert("falscher Wert für s2");document.getElementById("s2").value="";return false}return true};