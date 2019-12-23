// Programm zur Simulation Swisslotto auf www.mathematik.ch
// AUTHOR and Copyright: Bernhard Berchtold
// Dezember 2004: Altes Zahlenlotto
// Dezember 2012: Aenderung für Swisslotto
// 17. Nov 2015 ersetzt nun php-Programm

   var n=1;
   var z1,z2,z3,z4,z5,z6;
   var s1;
   var zahl=new Array(6);

  function ziehung()
    {  var R=new Array(6); 	
    	R[0]= Math.floor(42*Math.random())+1;
        var anzahl=1;
        while (anzahl<6) {
           var gleich=false;
           R[anzahl]= Math.floor(42*Math.random())+1;
           for (var i=0; i<anzahl; i++)
             if (R[anzahl]==R[i]) {gleich=true; break;}
           if (!gleich) anzahl++;
        }
        // Ziehung des Sterns (von 6 Sternen)
        R[6]=Math.floor(6*Math.random())+1;      
        return R;
    }

 function vergleichzahlen(zahl,z1,z2,z3,z4,z5,z6)
 { var a=0;
   for (var i = 0;  i < 6;  i++)
      if (zahl[i]==z1) a++;
   for (i = 0;  i < 6;  i++)
      if (zahl[i]==z2) a++;
   for (i = 0;  i < 6;  i++)
      if (zahl[i]==z3) a++;
   for (i = 0;  i < 6;  i++)
      if (zahl[i]==z4) a++;
   for (i = 0;  i < 6;  i++)
      if (zahl[i]==z5) a++;
   for (i = 0;  i < 6;  i++)
      if (zahl[i]==z6) a++;  
  return a;	
 }

 function vergleichsterne(zahl,s1)
 { var b=0;
   if (zahl[6]==s1) b++;     
   return b;	
 }
 
 function ziehe() {
   document.getElementById("txt").innerHTML="<p><b>Resultate der Simulation Swisslotto</b></p>";
   n=parseInt(document.getElementById("n").value);
   if (isNaN(n) || n<1) n=1; if (n>1000) n=1000;
   var ok=chkFormular();
   if (!ok) return;   
   document.getElementById("n").value=n;
   document.getElementById("z1").value=z1;
   document.getElementById("z2").value=z2;
   document.getElementById("z3").value=z3;
   document.getElementById("z4").value=z4;
   document.getElementById("z5").value=z5;
   document.getElementById("z6").value=z6;
   document.getElementById("s1").value=s1;
   var gewinn=false;
   for (var i=1; i<n+1; i++) {  // Ziehung
    zahl = ziehung();
    // Vergleich
    var a = vergleichzahlen(zahl,z1,z2,z3,z4,z5,z6);
    var b = vergleichsterne(zahl,s1);
    if (a==1) var z=" Zahl richtig, "; else var z=" Zahlen richtig, ";
    if (b==1) var s=" Glückszahl richtig"; else var s=" Glückszahl falsch"; 
    if ((n>1) &&  (a>=3))
        { gewinn=true;
          document.getElementById("txt").innerHTML+="Spiel "+i+": "+a+z+s+"<br>";
        }
    if (n==1) {
        document.getElementById("txt").innerHTML+="Die Zufallszahlen des Computers heissen:<br>";
        document.getElementById("txt").innerHTML+=zahl[0]+"&nbsp;&nbsp;&nbsp;&nbsp;";
        document.getElementById("txt").innerHTML+=zahl[1]+"&nbsp;&nbsp;&nbsp;&nbsp;";  
        document.getElementById("txt").innerHTML+=zahl[2]+"&nbsp;&nbsp;&nbsp;&nbsp;";
        document.getElementById("txt").innerHTML+=zahl[3]+"&nbsp;&nbsp;&nbsp;&nbsp;";
		document.getElementById("txt").innerHTML+=zahl[4]+"&nbsp;&nbsp;&nbsp;&nbsp;";
        document.getElementById("txt").innerHTML+=zahl[5]+"<br>";
        document.getElementById("txt").innerHTML+="Die gezogene Glückszahl ist ";
        document.getElementById("txt").innerHTML+=zahl[6]+"<br><br>";   
        document.getElementById("txt").innerHTML+="<b>"+a+z+s+"</b><br>";    
    }
  }
  if ((n>1) && (!gewinn)) document.getElementById("txt").innerHTML+="Sie haben leider in keinem der "+n+" Spiele gewonnen.";  
 }
 
 function generatenumbers()
 {
  var R =new Array(5);
  R[0]= Math.floor(42*Math.random())+1;
  anzahl=1;
  while (anzahl<6) {
     gleich=false;
     R[anzahl]= Math.floor(42*Math.random())+1;
     for (i=0; i<anzahl; i++)
        if (R[anzahl]==R[i]) {gleich=true; break;}
     if (!gleich) anzahl++;
   }
 document.getElementById("z1").value=R[0];
 document.getElementById("z2").value=R[1];
 document.getElementById("z3").value=R[2];
 document.getElementById("z4").value=R[3];
 document.getElementById("z5").value=R[4];
 document.getElementById("z6").value=R[5];
 }

 function generatestar()
 { s1=Math.floor(6*Math.random())+1;
 document.getElementById("s1").value=s1;
 }
 
 function chkFormular()
 {
  if (document.getElementById("z1").value == '') 
     {alert ("Wert für z1 eingeben!");
      return false};
  z1 = parseInt(document.getElementById("z1").value); 
  if  ((z1<1) || (z1>42))
     {alert ("falscher Wert für z1");
      document.getElementById("z1").value = ''; 
      return false};    
   if (document.getElementById("z2").value == '') 
     {alert ("Wert für z2 eingeben!");
      return false};
  z2 = parseInt(document.getElementById("z2").value); 
  if  ((z2<1) || (z2>42) || (z2==z1))
     {alert ("falscher Wert für z2");
      document.getElementById("z2").value = ''; 
      return false}; 
  if (document.getElementById("z3").value == '') 
     {alert ("Wert für z3 eingeben!");
      return false};
  z3 = parseInt(document.getElementById("z3").value); 
  if  ((z3<1) || (z3>42) || (z3==z1) || (z3==z2))
     {alert ("falscher Wert für z3");
      document.getElementById("z3").value = ''; 
      return false};    
  if (document.getElementById("z4").value == '') 
     {alert ("Wert für z4 eingeben!");
      return false};
  z4 = parseInt(document.getElementById("z4").value); 
  if  ((z4<1) || (z4>42) || (z4==z1) || (z4==z2) || (z4==z3))
     {alert ("falscher Wert für z4");
      document.getElementById("z4").value = ''; 
      return false};    
  if (document.getElementById("z5").value == '') 
     {alert ("Wert für z5 eingeben!");
      return false};
  z5 = parseInt(document.getElementById("z5").value); 
  if  ((z5<1) || (z5>42) || (z5==z1) || (z5==z2) || (z5==z3) || (z5==z4))
     {alert ("falscher Wert für z5");
      document.getElementById("z5").value = ''; 
      return false};
  if (document.getElementById("z6").value == '') 
     {alert ("Wert für z6 eingeben!");
      return false};
  z6 = parseInt(document.getElementById("z6").value); 
  if  ((z6<1) || (z6>42) || (z6==z1) || (z6==z2) || (z6==z3) || (z6==z4) || (z6==z5))
     {alert ("falscher Wert für z6");
      document.getElementById("z6").value = ''; 
      return false};	  
  if (document.getElementById("s1").value == '') 
     {alert ("Wert für s1 eingeben!");
      return false};
  s1 = parseInt(document.getElementById("s1").value); 
  if  ((s1<1) || (s1>6) )
     {alert ("falscher Wert für s1");
      document.getElementById("s1").value = ''; 
      return false};
  return true;	  
 }