function ziehung(){var e=new Array(6);e[0]=Math.floor(42*Math.random())+1;for(var t=1;6>t;){var n=!1;e[t]=Math.floor(42*Math.random())+1;for(var l=0;t>l;l++)if(e[t]==e[l]){n=!0;break}n||t++}return e[6]=Math.floor(6*Math.random())+1,e}function vergleichzahlen(e,t,n,l,r,a,z){for(var m=0,d=0;6>d;d++)e[d]==t&&m++;for(d=0;6>d;d++)e[d]==n&&m++;for(d=0;6>d;d++)e[d]==l&&m++;for(d=0;6>d;d++)e[d]==r&&m++;for(d=0;6>d;d++)e[d]==a&&m++;for(d=0;6>d;d++)e[d]==z&&m++;return m}function vergleichsterne(e,t){var n=0;return e[6]==t&&n++,n}function ziehe(){document.getElementById("txt").innerHTML="<p><b>Resultate der Simulation Swisslotto</b></p>",n=parseInt(document.getElementById("n").value),(isNaN(n)||1>n)&&(n=1),n>1e3&&(n=1e3);var e=chkFormular();if(e){document.getElementById("n").value=n,document.getElementById("z1").value=z1,document.getElementById("z2").value=z2,document.getElementById("z3").value=z3,document.getElementById("z4").value=z4,document.getElementById("z5").value=z5,document.getElementById("z6").value=z6,document.getElementById("s1").value=s1;for(var t=!1,l=1;n+1>l;l++){zahl=ziehung();var r=vergleichzahlen(zahl,z1,z2,z3,z4,z5,z6),a=vergleichsterne(zahl,s1);if(1==r)var z=" Zahl richtig, ";else var z=" Zahlen richtig, ";if(1==a)var m=" Glückszahl richtig";else var m=" Glückszahl falsch";n>1&&r>=3&&(t=!0,document.getElementById("txt").innerHTML+="Spiel "+l+": "+r+z+m+"<br>"),1==n&&(document.getElementById("txt").innerHTML+="Die Zufallszahlen des Computers heissen:<br>",document.getElementById("txt").innerHTML+=zahl[0]+"&nbsp;&nbsp;&nbsp;&nbsp;",document.getElementById("txt").innerHTML+=zahl[1]+"&nbsp;&nbsp;&nbsp;&nbsp;",document.getElementById("txt").innerHTML+=zahl[2]+"&nbsp;&nbsp;&nbsp;&nbsp;",document.getElementById("txt").innerHTML+=zahl[3]+"&nbsp;&nbsp;&nbsp;&nbsp;",document.getElementById("txt").innerHTML+=zahl[4]+"&nbsp;&nbsp;&nbsp;&nbsp;",document.getElementById("txt").innerHTML+=zahl[5]+"<br>",document.getElementById("txt").innerHTML+="Die gezogene Glückszahl ist ",document.getElementById("txt").innerHTML+=zahl[6]+"<br><br>",document.getElementById("txt").innerHTML+="<b>"+r+z+m+"</b><br>")}n>1&&!t&&(document.getElementById("txt").innerHTML+="Sie haben leider in keinem der "+n+" Spiele gewonnen.")}}function generatenumbers(){var e=new Array(5);for(e[0]=Math.floor(42*Math.random())+1,anzahl=1;6>anzahl;){for(gleich=!1,e[anzahl]=Math.floor(42*Math.random())+1,i=0;anzahl>i;i++)if(e[anzahl]==e[i]){gleich=!0;break}gleich||anzahl++}document.getElementById("z1").value=e[0],document.getElementById("z2").value=e[1],document.getElementById("z3").value=e[2],document.getElementById("z4").value=e[3],document.getElementById("z5").value=e[4],document.getElementById("z6").value=e[5]}function generatestar(){s1=Math.floor(6*Math.random())+1,document.getElementById("s1").value=s1}function chkFormular(){return""==document.getElementById("z1").value?(alert("Wert für z1 eingeben!"),!1):(z1=parseInt(document.getElementById("z1").value),1>z1||z1>42?(alert("falscher Wert für z1"),document.getElementById("z1").value="",!1):""==document.getElementById("z2").value?(alert("Wert für z2 eingeben!"),!1):(z2=parseInt(document.getElementById("z2").value),1>z2||z2>42||z2==z1?(alert("falscher Wert für z2"),document.getElementById("z2").value="",!1):""==document.getElementById("z3").value?(alert("Wert für z3 eingeben!"),!1):(z3=parseInt(document.getElementById("z3").value),1>z3||z3>42||z3==z1||z3==z2?(alert("falscher Wert für z3"),document.getElementById("z3").value="",!1):""==document.getElementById("z4").value?(alert("Wert für z4 eingeben!"),!1):(z4=parseInt(document.getElementById("z4").value),1>z4||z4>42||z4==z1||z4==z2||z4==z3?(alert("falscher Wert für z4"),document.getElementById("z4").value="",!1):""==document.getElementById("z5").value?(alert("Wert für z5 eingeben!"),!1):(z5=parseInt(document.getElementById("z5").value),1>z5||z5>42||z5==z1||z5==z2||z5==z3||z5==z4?(alert("falscher Wert für z5"),document.getElementById("z5").value="",!1):""==document.getElementById("z6").value?(alert("Wert für z6 eingeben!"),!1):(z6=parseInt(document.getElementById("z6").value),1>z6||z6>42||z6==z1||z6==z2||z6==z3||z6==z4||z6==z5?(alert("falscher Wert für z6"),document.getElementById("z6").value="",!1):""==document.getElementById("s1").value?(alert("Wert für s1 eingeben!"),!1):(s1=parseInt(document.getElementById("s1").value),1>s1||s1>6?(alert("falscher Wert für s1"),document.getElementById("s1").value="",!1):!0)))))))}var n=1,z1,z2,z3,z4,z5,z6,s1,zahl=new Array(6);