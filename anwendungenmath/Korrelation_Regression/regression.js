function makeArray(){for(i=0;i<makeArray.arguments.length;i++){this[i]=makeArray.arguments[i]}}function Fixed(k,j,b){var h=1;if(b>0){h/=Math.pow(10,b);if(k<-h){k-=0.5*h}else{if(k>h){k+=0.5*h}else{k=0}}}k=""+k;var c=0;if(k.charAt(0)=="-"){c=2;k=k.substring(1,k.length)}var f="";var g=k.lastIndexOf("E");if(g<0){g=k.lastIndexOf("e")}if(g>-1){f=k.substring(g,k.length);k=k.substring(0,g)}var d=k.indexOf(".",0);if(d==-1){d=k.length;if(b>0){k+=".";d=k.length-1}}if(d==0){k="0"+k;d=1}while((b>0)&&((k.length-d-1)<b)){k+="0"}var a=k.length-d-1;if(a>b){if(b==0){k=k.substring(0,d)}else{k=k.substring(0,d+b+1)}}k+=f;if(c>0){k="-"+k}while(k.length<j){k=" "+k}return k}function Prb(a){if(a<0){a=0}else{if(a>1){a=1}}return a}function PosV(a){if(a<0){a=-a}return a}function makeArray(){for(i=0;i<makeArray.arguments.length;i++){this[i]=makeArray.arguments[i]}}function myBubbleSort(e,c){for(var b=0;b<(c-1);b++){for(var a=b+1;a<c;a++){if(Math.abs(e[a])<Math.abs(e[b])){var d=e[b];e[b]=e[a];e[a]=d}}}}function makeArray(){for(i=0;i<makeArray.arguments.length;i++){this[i]=makeArray.arguments[i]}}var data=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ");var data2=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ");var data1=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ");var data3=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ");var data4=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);var data5=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);var OldArray=new makeArray(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);var rankArray=new makeArray(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);var rankArray1=new makeArray(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);var rankArray2=new makeArray(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);var sum1=0;var sum2=0;var arr=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);var data2=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ");var data1=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ");var data3=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ");var data4=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);var data5=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);function uttest(n,m,l,h){for(var A=0;A<10;A++){l[A]=parseFloat(document.getElementById("el"+A).value);h[A]=parseFloat(document.getElementById("el"+(A+10)).value)}for(var A=10;A<20;A++){l[A]=parseFloat(document.getElementById("el"+(A+10)).value);h[A]=parseFloat(document.getElementById("el"+(A+20)).value)}for(var A=20;A<30;A++){l[A]=parseFloat(document.getElementById("el"+(A+20)).value);h[A]=parseFloat(document.getElementById("el"+(A+30)).value)}var g=30;var s=30;var q=30;var u=30;var e=0;var c=0;var v=0;var w=0;for(var y=0;y<g;y++){if(l[y]==""||l[y]==" "||isNaN(l[y])){l[y]="";s=s-1}}for(var y=0;y<g;y++){if(h[y]==""||h[y]==" "||isNaN(h[y])){h[y]="";q=q-1}}for(var y=0;y<g;y++){if(l[y]!=""&&h[y]!=""){n[w]=l[y];m[w]=h[y];w++;e++}}for(var y=e;y<g;y++){n[y]=" "}for(var y=e;y<g;y++){m[y]=" "}document.getElementById("n").innerHTML=e;for(var A=0;A<10;A++){document.getElementById("el"+A).value=n[A];document.getElementById("el"+(A+10)).value=m[A]}for(var A=10;A<20;A++){document.getElementById("el"+(A+10)).value=n[A];document.getElementById("el"+(A+20)).value=m[A]}for(var A=20;A<30;A++){document.getElementById("el"+(A+20)).value=n[A];document.getElementById("el"+(A+30)).value=m[A]}var E=0;var C=0;var D=0;var B=0;var f=0;var z;var x;var I;var d;var b;var a;var G;var k;var F;var J;var H;var p;var o;var t;for(var y=0;y<e;y++){E+=n[y]*1;D+=n[y]*n[y];f+=n[y]*m[y];C+=m[y]*1;B+=m[y]*m[y]}G=D-E*E/e;k=B-C*C/e;F=f-E*C/e;z=E/e;x=C/e;d=(D-e*z*z)/(e-1);b=(B-e*x*x)/(e-1);H=F/k;o=F/G;J=z-H*x;p=x-o*z;t=F/Math.sqrt(G*k);document.getElementById("mw1").innerHTML=Fixed(z,10,4);document.getElementById("mw2").innerHTML=Fixed(x,10,4);document.getElementById("s1").innerHTML=Fixed(Math.sqrt(d),10,4);document.getElementById("s2").innerHTML=Fixed(Math.sqrt(b),10,4);document.getElementById("a0").innerHTML=Fixed(J,10,4);document.getElementById("a1").innerHTML=Fixed(H,10,4);document.getElementById("b0").innerHTML=Fixed(p,10,4);document.getElementById("b1").innerHTML=Fixed(o,10,4);document.getElementById("r").innerHTML=Fixed(t,10,6);for(var y=10;y<u;y++){n[y]=" ";m[y]=" "}};