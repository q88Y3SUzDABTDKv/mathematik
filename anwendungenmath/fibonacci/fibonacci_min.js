function rekursiv(){var e=chkFormular();if(e){var t=new Array;t[0]=Zahl1,t[1]=Zahl2;for(var a=0;anz>a;a++)t[a+2]=t[a]+t[a+1];for(document.getElementById("txt").innerHTML="<b>Resultat</b><br>",a=3;anz+2>=a;a++)(t[a-1]>1e14||t[a-1]<-1e14)&&(t[a-1]=t[a-1].toPrecision(14)),document.getElementById("txt").innerHTML+="Zahl "+a+" = "+t[a-1]+"<br>"}}function calc(e){var t=(1+Math.sqrt(5))/2,a=(1-Math.sqrt(5))/2;return 1/Math.sqrt(5)*(Math.pow(t,e)-Math.pow(a,e))}function explizit(){var e=chkFormular1();if(e){var t=Zahl1exp*calc(n-2)+Zahl2exp*calc(n-1);t=t>1e14||-1e14>t?t.toPrecision(14):Math.round(t),document.getElementById("txt1").innerHTML="<b>Resultat</b><br><br>",document.getElementById("txt1").innerHTML+="Die "+n+"-te Zahl ist <b>"+t+"</b>"}}function chkFormular(){return""==document.getElementById("Zahl1").value?(alert("Wert für Zahl1 eingeben!"),!1):(Zahl1=parseInt(document.getElementById("Zahl1").value),isNaN(Zahl1)?(alert("Falscher Wert für Zahl1"),document.getElementById("Zahl1").value="",!1):""==document.getElementById("Zahl2").value?(alert("Wert für Zahl2 eingeben!"),!1):(Zahl2=parseInt(document.getElementById("Zahl2").value),isNaN(Zahl2)?(alert("Falscher Wert für Zahl2"),document.getElementById("Zahl2").value="",!1):""==document.getElementById("anz").value?(alert("Wert für Anzahl Zahlen eingeben!"),!1):(anz=parseInt(document.getElementById("anz").value),isNaN(anz)||1>anz||anz>100?(alert("Anzahl ist von 1 bis 100"),document.getElementById("anz").value="",!1):!0)))}function chkFormular1(){return""==document.getElementById("Zahl1exp").value?(alert("Wert für Zahl1 eingeben!"),!1):(Zahl1exp=parseInt(document.getElementById("Zahl1exp").value),isNaN(Zahl1exp)?(alert("Falscher Wert für Zahl1"),document.getElementById("Zahl1exp").value="",!1):""==document.getElementById("Zahl2exp").value?(alert("Wert für Zahl2 eingeben!"),!1):(Zahl2exp=parseInt(document.getElementById("Zahl2exp").value),isNaN(Zahl2exp)?(alert("Falscher Wert für Zahl2"),document.getElementById("Zahl2exp").value="",!1):""==document.getElementById("n").value?(alert("Wert für n eingeben!"),!1):(n=parseInt(document.getElementById("n").value),isNaN(n)||3>n||n>1421?(alert("n von 3 bis 1421"),document.getElementById("n").value="",!1):!0)))}var Zahl1,Zahl2,anz,Zahl1exp,Zahl2exp,n;