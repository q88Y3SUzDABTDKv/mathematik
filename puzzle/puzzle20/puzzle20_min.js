function Setze_n(e){var l;for(l=0;25>=l;l++)a[l]=l,b[l]=0;for(n=e,z=0,Zugnr=0,document.getElementById("label").firstChild.data="Viel Erfolg!",5>n&&(a[5]=0,a[10]=0,a[15]=0,a[20]=0,a[21]=0,a[22]=0,a[23]=0,a[24]=0,a[25]=0,b[5]=-1,b[10]=-1,b[15]=-1,b[20]=-1,b[21]=-1,b[22]=-1,b[23]=-1,b[24]=-1,b[25]=-1),4>n&&(a[4]=0,a[9]=0,a[14]=0,a[16]=0,a[17]=0,a[18]=0,a[19]=0,b[4]=-1,b[9]=-1,b[14]=-1,b[16]=-1,b[17]=-1,b[18]=-1,b[19]=-1),l=1;25>=l;l++)Bildwechsel(l,Nr[l]);for(l=26;51>=l;l++)Bildwechsel(l,Leer);if(3==n){for(l=4;14>=l;l+=5)Bildwechsel(l,Weiss),Bildwechsel(l+1,Weiss),Bildwechsel(l+26,Weiss),Bildwechsel(l+27,Weiss);for(l=16;25>=l;l++)Bildwechsel(l,Weiss),Bildwechsel(l+26,Weiss)}if(4==n){for(l=5;20>=l;l+=5)Bildwechsel(l,Weiss),Bildwechsel(l+26,Weiss);for(l=21;25>=l;l++)Bildwechsel(l,Weiss),Bildwechsel(l+26,Weiss)}}function Bildwechsel(e,b){document.getElementById(e).src=b.src}function Ziehe(e){5>n&&(a[5]=0,a[10]=0,a[15]=0,a[20]=0,a[21]=0,a[22]=0,a[23]=0,a[24]=0,a[25]=0),4>n&&(a[4]=0,a[9]=0,a[14]=0,a[16]=0,a[17]=0,a[18]=0,a[19]=0),a[e]>0&&0==z&&(z=e,Bildwechsel(z,Leer),Bildwechsel(26,Nr[z]),a[e]=0)}function Zurueck(e){5>n&&(b[5]=-1,b[10]=-1,b[15]=-1,b[20]=-1,b[21]=-1,b[22]=-1,b[23]=-1,b[24]=-1,b[25]=-1),4>n&&(b[4]=-1,b[9]=-1,b[14]=-1,b[16]=-1,b[17]=-1,b[18]=-1,b[19]=-1),0==b[e-26]&&z>0?(6>z&&(b[e-26]=z),z>5&&11>z&&(b[e-26]=z+95),z>10&&16>z&&(b[e-26]=z+990),z>15&&21>z&&(b[e-26]=z+9985),z>20&&26>z&&(b[e-26]=z+99980),Bildwechsel(26,Leer),Bildwechsel(e,Nr[z]),z=0,Zugnr++,Zugnr==n*n&&(geloest=pruefe(),document.getElementById("label").firstChild.data=geloest?"Gratuliere!":"Leider falsch!")):b[e-26]>0&&(Bildwechsel(e,Leer),Hilf=b[e-26],Hilf>1e5&&(Hilf-=99980),Hilf>1e4&&(Hilf-=9985),Hilf>1e3&&(Hilf-=990),Hilf>100&&(Hilf-=95),Bildwechsel(Hilf,Nr[Hilf]),b[e-26]=0,a[Hilf]=Hilf,Zugnr--)}function pruefe(){return 3==n?(zielsumme=1106,b[1]+b[2]+b[3]!=zielsumme?!1:b[6]+b[7]+b[8]!=zielsumme?!1:b[11]+b[12]+b[13]!=zielsumme?!1:b[1]+b[6]+b[11]!=zielsumme?!1:b[2]+b[7]+b[12]!=zielsumme?!1:b[3]+b[8]+b[13]!=zielsumme?!1:!0):4==n?(zielsumme=11110,b[1]+b[2]+b[3]+b[4]!=zielsumme?!1:b[6]+b[7]+b[8]+b[9]!=zielsumme?!1:b[11]+b[12]+b[13]+b[14]!=zielsumme?!1:b[16]+b[17]+b[18]+b[19]!=zielsumme?!1:b[1]+b[6]+b[11]+b[16]!=zielsumme?!1:b[2]+b[7]+b[12]+b[17]!=zielsumme?!1:b[3]+b[8]+b[13]+b[18]!=zielsumme?!1:b[4]+b[9]+b[14]+b[19]!=zielsumme?!1:!0):5==n?(zielsumme=111115,b[1]+b[2]+b[3]+b[4]+b[5]!=zielsumme?!1:b[6]+b[7]+b[8]+b[9]+b[10]!=zielsumme?!1:b[11]+b[12]+b[13]+b[14]+b[15]!=zielsumme?!1:b[16]+b[17]+b[18]+b[19]+b[20]!=zielsumme?!1:b[21]+b[22]+b[23]+b[24]+b[25]!=zielsumme?!1:b[1]+b[6]+b[11]+b[16]+b[21]!=zielsumme?!1:b[2]+b[7]+b[12]+b[17]+b[22]!=zielsumme?!1:b[3]+b[8]+b[13]+b[18]+b[23]!=zielsumme?!1:b[4]+b[9]+b[14]+b[19]+b[24]!=zielsumme?!1:b[5]+b[10]+b[15]+b[20]+b[25]!=zielsumme?!1:!0):void 0}var n=3;Leer=new Image,Leer.src="leer.jpg",Weiss=new Image,Weiss.src="weiss.jpg";var Nr=new Array(25),a=new Array(26),b=new Array(26),z,Zugnr,geloest=!1;for(i=0;25>=i;i++)Nr[i]=new Image,Nr[i].src=i+".jpg";Setze_n(3);