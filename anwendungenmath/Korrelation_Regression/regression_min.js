function makeArray(){for(i=0;i<makeArray.arguments.length;i++)this[i]=makeArray.arguments[i]}function Fixed(e,l,a){var n=1;a>0&&(n/=Math.pow(10,a),-n>e?e-=.5*n:e>n?e+=.5*n:e=0),e=""+e;var t=0;"-"==e.charAt(0)&&(t=2,e=e.substring(1,e.length));var m="",u=e.lastIndexOf("E");0>u&&(u=e.lastIndexOf("e")),u>-1&&(m=e.substring(u,e.length),e=e.substring(0,u));var v=e.indexOf(".",0);for(-1==v&&(v=e.length,a>0&&(e+=".",v=e.length-1)),0==v&&(e="0"+e,v=1);a>0&&e.length-v-1<a;)e+="0";var r=e.length-v-1;for(r>a&&(e=0==a?e.substring(0,v):e.substring(0,v+a+1)),e+=m,t>0&&(e="-"+e);e.length<l;)e=" "+e;return e}function Prb(e){return 0>e?e=0:e>1&&(e=1),e}function PosV(e){return 0>e&&(e=-e),e}function makeArray(){for(i=0;i<makeArray.arguments.length;i++)this[i]=makeArray.arguments[i]}function myBubbleSort(e,l){for(var a=0;l-1>a;a++)for(var n=a+1;l>n;n++)if(Math.abs(e[n])<Math.abs(e[a])){var t=e[a];e[a]=e[n],e[n]=t}}function makeArray(){for(i=0;i<makeArray.arguments.length;i++)this[i]=makeArray.arguments[i]}function uttest(e,l,a,n,t){n[0]=e.element0.value,n[1]=e.element1.value,n[2]=e.element2.value,n[3]=e.element3.value,n[4]=e.element4.value,n[5]=e.element5.value,n[6]=e.element6.value,n[7]=e.element7.value,n[8]=e.element8.value,n[9]=e.element9.value,n[10]=e.element20.value,n[11]=e.element21.value,n[12]=e.element22.value,n[13]=e.element23.value,n[14]=e.element24.value,n[15]=e.element25.value,n[16]=e.element26.value,n[17]=e.element27.value,n[18]=e.element28.value,n[19]=e.element29.value,n[20]=e.element40.value,n[21]=e.element41.value,n[22]=e.element42.value,n[23]=e.element43.value,n[24]=e.element44.value,n[25]=e.element45.value,n[26]=e.element46.value,n[27]=e.element47.value,n[28]=e.element48.value,n[29]=e.element49.value,t[0]=e.element10.value,t[1]=e.element11.value,t[2]=e.element12.value,t[3]=e.element13.value,t[4]=e.element14.value,t[5]=e.element15.value,t[6]=e.element16.value,t[7]=e.element17.value,t[8]=e.element18.value,t[9]=e.element19.value,t[10]=e.element30.value,t[11]=e.element31.value,t[12]=e.element32.value,t[13]=e.element33.value,t[14]=e.element34.value,t[15]=e.element35.value,t[16]=e.element36.value,t[17]=e.element37.value,t[18]=e.element38.value,t[19]=e.element39.value,t[20]=e.element50.value,t[21]=e.element51.value,t[22]=e.element52.value,t[23]=e.element53.value,t[24]=e.element54.value,t[25]=e.element55.value,t[26]=e.element56.value,t[27]=e.element57.value,t[28]=e.element58.value,t[29]=e.element59.value;for(var m=30,u=30,v=30,r=30,i=0,d=0,y=0;m>y;y++)(""==n[y]||" "==n[y])&&(n[y]="",u-=1);for(var y=0;m>y;y++)(""==t[y]||" "==t[y])&&(t[y]="",v-=1);for(var y=0;m>y;y++)""!=n[y]&&""!=t[y]&&(l[d]=n[y],a[d]=t[y],d+=1,i+=1);for(var y=i;m>y;y++)l[y]=" ";for(var y=i;m>y;y++)a[y]=" ";document.getElementById("n").innerHTML=i,e.element0.value=l[0],e.element1.value=l[1],e.element2.value=l[2],e.element3.value=l[3],e.element4.value=l[4],e.element5.value=l[5],e.element6.value=l[6],e.element7.value=l[7],e.element8.value=l[8],e.element9.value=l[9],e.element20.value=l[10],e.element21.value=l[11],e.element22.value=l[12],e.element23.value=l[13],e.element24.value=l[14],e.element25.value=l[15],e.element26.value=l[16],e.element27.value=l[17],e.element28.value=l[18],e.element29.value=l[19],e.element40.value=l[20],e.element41.value=l[21],e.element42.value=l[22],e.element43.value=l[23],e.element44.value=l[24],e.element45.value=l[25],e.element46.value=l[26],e.element47.value=l[27],e.element48.value=l[28],e.element49.value=l[29],e.element10.value=a[0],e.element11.value=a[1],e.element12.value=a[2],e.element13.value=a[3],e.element14.value=a[4],e.element15.value=a[5],e.element16.value=a[6],e.element17.value=a[7],e.element18.value=a[8],e.element19.value=a[9],e.element30.value=a[10],e.element31.value=a[11],e.element32.value=a[12],e.element33.value=a[13],e.element34.value=a[14],e.element35.value=a[15],e.element36.value=a[16],e.element37.value=a[17],e.element38.value=a[18],e.element39.value=a[19],e.element50.value=a[20],e.element51.value=a[21],e.element52.value=a[22],e.element53.value=a[23],e.element54.value=a[24],e.element55.value=a[25],e.element56.value=a[26],e.element57.value=a[27],e.element58.value=a[28],e.element59.value=a[29];for(var o,s,g,A,k,f,h,c,w,M,x,b,I=0,B=0,E=0,F=0,H=0,y=0;i>y;y++)I+=1*l[y],E+=l[y]*l[y],H+=l[y]*a[y],B+=1*a[y],F+=a[y]*a[y];k=E-I*I/i,f=F-B*B/i,h=H-I*B/i,o=I/i,s=B/i,g=(E-i*o*o)/(i-1),A=(F-i*s*s)/(i-1),w=h/f,x=h/k,c=o-w*s,M=s-x*o,b=h/Math.sqrt(k*f),document.getElementById("mw1").innerHTML=Fixed(o,10,4),document.getElementById("mw2").innerHTML=Fixed(s,10,4),document.getElementById("s1").innerHTML=Fixed(Math.sqrt(g),10,4),document.getElementById("s2").innerHTML=Fixed(Math.sqrt(A),10,4),document.getElementById("a0").innerHTML=Fixed(c,10,4),document.getElementById("a1").innerHTML=Fixed(w,10,4),document.getElementById("b0").innerHTML=Fixed(M,10,4),document.getElementById("b1").innerHTML=Fixed(x,10,4),document.getElementById("r").innerHTML=Fixed(b,10,6);for(var y=10;r>y;y++)l[y]=" ",a[y]=" "}var data=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),data2=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),data1=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),data3=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),data4=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),data5=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),OldArray=new makeArray(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30),rankArray=new makeArray(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30),rankArray1=new makeArray(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30),rankArray2=new makeArray(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30),sum1=0,sum2=0,arr=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),data2=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),data1=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),data3=new makeArray(" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),data4=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),data5=new makeArray(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);