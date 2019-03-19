function mittelwert(e,n){for(var t=0,u=1;e>=u;u++)t+=n[u];return t/e}function summe_produkte(e,n,t){for(var u=0,r=1;e>=r;r++)u+=n[r]*t[r];return u}function abweich(e,n,t){for(var u=[],r=1;e>=r;r++)u[r]=n[r]-t;return u}function summe_residuen(e,n,t,u,r,a,m){for(var d=0,i=1;e>=i;i++){var s=u[i]-r*n[i]-a*t[i]-m;d+=s*s}return d}function summe_abstaende_qua(e,n,t,u,r,a,m,d){for(var i=0,s=1;e>=s;s++){var o=r*n[s]+a*t[s]+m*u[s]+d;i+=o*o}return i}function f(e,n,t,u,r,a,m,d){return e*e*u+e*n*(r-m)+e*t*a-n*n*u-n*t*d}function g(e,n,t,u,r,a,m,d){return e*e*m+e*n*r+e*t*(d-a)-t*t*m-n*t*u}function h(e,n,t){return e*e+n*n+t*t-1}function ausgabe(e){return Math.round(1e7*e)/1e7}function J11(e,n,t,u,r,a,m){return 2*e*u+(r-m)*n+a*t}function J12(e,n,t,u,r,a,m){return e*(r-a)-2*u*n-m*t}function J13(e,n,t,u){return e*t-u*n}function J21(e,n,t,u,r,a,m){return 2*e*a+(m-r)*t+u*n}function J22(e,n,t,u){return e*u-t*n}function J23(e,n,t,u,r,a,m){return e*(m-r)-2*a*t-u*n}function J31(e){return 2*e}function J32(e){return 2*e}function J33(e){return 2*e}function detJ(e){return e[1][1]*(e[2][2]*e[3][3]-e[2][3]*e[3][2])-e[2][1]*(e[1][2]*e[3][3]-e[1][3]*e[3][2])+e[3][1]*(e[1][2]*e[2][3]-e[1][3]*e[2][2])}function rechne(){var e=[],n=[],t=[];e[1]=parseFloat(document.getElementById("x1").value),n[1]=parseFloat(document.getElementById("y1").value),t[1]=parseFloat(document.getElementById("z1").value);for(var u=1;!isNaN(e[u])&&!isNaN(n[u])&&!isNaN(t[u]);){u++;var r="x"+u.toString(),a="y"+u.toString(),m="z"+u.toString();e[u]=parseFloat(document.getElementById(r).value),n[u]=parseFloat(document.getElementById(a).value),t[u]=parseFloat(document.getElementById(m).value)}if(u-=1,document.getElementById("N").innerHTML=u,document.getElementById("Ebgl").innerHTML="",document.getElementById("Ebgl2").innerHTML="",document.getElementById("Warnung").innerHTML="",document.getElementById("xquer").innerHTML="",document.getElementById("yquer").innerHTML="",document.getElementById("zquer").innerHTML="",document.getElementById("sumqua").innerHTML="",document.getElementById("sumqua2").innerHTML="",document.getElementById("sumquaz").innerHTML="",document.getElementById("sumquaz2").innerHTML="",document.getElementById("r2").innerHTML="",u>2){var d=mittelwert(u,e),i=mittelwert(u,n),s=mittelwert(u,t);document.getElementById("xquer").innerHTML=ausgabe(d),document.getElementById("yquer").innerHTML=ausgabe(i),document.getElementById("zquer").innerHTML=ausgabe(s);var o=abweich(u,e,d),l=abweich(u,n,i),c=abweich(u,t,s),b=summe_produkte(u,o,o),E=summe_produkte(u,o,l),y=summe_produkte(u,o,c),v=summe_produkte(u,l,l),M=summe_produkte(u,l,c),B=summe_produkte(u,c,c),I=b*v-E*E;if(0!=I)var _=(y*v-M*E)/I,H=(M*b-y*E)/I;else{if(0==b)var _=1e5,H=0;if(0==v)var _=0,H=1e5}var L=s-_*d-H*i,T=summe_residuen(u,e,n,t,_,H,L);if(0!=B)var q=1-T/B;else var q=1;var J=summe_produkte(u,e,e),p=summe_produkte(u,e,n),k=summe_produkte(u,e,t),z=summe_produkte(u,n,n),w=summe_produkte(u,n,t),F=summe_produkte(u,t,t),x=p-u*d*i,N=z-u*i*i,S=w-u*i*s,P=J-u*d*d,W=k-u*d*s,Q=F-u*s*s}if(u>2){if(0==b&&(document.getElementById("Ebgl").innerHTML="E: x = "+e[1]),0==v&&(document.getElementById("Ebgl").innerHTML="E: y = "+n[1]),0==B&&(document.getElementById("Ebgl").innerHTML="E: z = "+t[1]),b*v*B!=0){document.getElementById("Ebgl").innerHTML="E: z=a*x + b*y + d<br>a = "+ausgabe(_)+",  b = "+ausgabe(H)+",  d = "+ausgabe(L),document.getElementById("sumquaz").innerHTML=ausgabe(T),document.getElementById("r2").innerHTML=ausgabe(q);var A=Math.sqrt(_*_+H*H+1);_/=A,H/=A,Y=-1/A,L/=A;var D=summe_abstaende_qua(u,e,n,t,_,H,Y,L);document.getElementById("sumqua").innerHTML=ausgabe(D)}}else document.getElementById("Ebgl").innerHTML="Für die Minimalisierung der Quadrate der z-Differenzen müssen Sie mindestens drei Punkte eingeben!";if(u>4){if(b*v*B!=0){for(var K=-1,V=!1,j=1;50>j;j++){K+=.04;for(var C=-1,G=1;50>G;G++)if(C+=.04,1-K*K-C*C>0){var O=Math.sqrt(1-K*K-C*C);if(V){L=-_*d-H*i-Y*s;var R=-K*d-C*i-O*s,U=summe_abstaende_qua(u,e,n,t,_,H,Y,L),X=summe_abstaende_qua(u,e,n,t,K,C,O,R);U>X&&(_=K,H=C,Y=O)}else{_=K,H=C;var Y=O;V=!0}O=-O,L=-_*d-H*i-Y*s;var R=-K*d-C*i-O*s;U=summe_abstaende_qua(u,e,n,t,_,H,Y,L),X=summe_abstaende_qua(u,e,n,t,K,C,O,R),U>X&&(_=K,H=C,Y=O)}}var Z=100,$=100,en=100,nn=1,tn=[];for(tn[1]=[],tn[2]=[],tn[3]=[];(Math.abs(_-Z)>1e-7||Math.abs(H-$)>1e-7||Math.abs(Y-en)>1e-7)&&100>nn;){Z=_,$=H,en=Y,tn[1][1]=J11(_,H,Y,x,N,S,P),tn[1][2]=J12(_,H,Y,x,N,P,W),tn[1][3]=J13(_,H,S,W),tn[2][1]=J21(_,H,Y,S,P,W,Q),tn[2][2]=J22(_,Y,x,S),tn[2][3]=J23(_,H,Y,x,P,W,Q),tn[3][1]=J31(_),tn[3][2]=J32(H),tn[3][3]=J33(Y);var un=detJ(tn),rn=tn[2][2]*tn[3][3]-tn[2][3]*tn[3][2],an=-tn[1][2]*tn[3][3]+tn[1][3]*tn[3][2],mn=tn[1][2]*tn[2][3]-tn[1][3]*tn[2][2],dn=-tn[2][1]*tn[3][3]+tn[2][3]*tn[3][1],sn=tn[1][1]*tn[3][3]-tn[1][3]*tn[3][1],on=-tn[1][1]*tn[2][3]+tn[1][3]*tn[2][1],gn=tn[2][1]*tn[3][2]-tn[2][2]*tn[3][1],ln=-tn[1][1]*tn[3][2]+tn[1][2]*tn[3][1],cn=tn[1][1]*tn[2][2]-tn[1][2]*tn[2][1],fn=_-1/un*(rn*f(_,H,Y,x,N,S,P,W)+an*g(_,H,Y,x,S,P,W,Q)+mn*h(_,H,Y)),bn=H-1/un*(dn*f(_,H,Y,x,N,S,P,W)+sn*g(_,H,Y,x,S,P,W,Q)+on*h(_,H,Y)),En=Y-1/un*(gn*f(_,H,Y,x,N,S,P,W)+ln*g(_,H,Y,x,S,P,W,Q)+cn*h(_,H,Y));_=fn,H=bn,Y=En,nn++}L=-_*d-H*i-Y*s,U=summe_abstaende_qua(u,e,n,t,_,H,Y,L);var yn=-1/Y;_*=yn,H*=yn,L*=yn,document.getElementById("Ebgl2").innerHTML="E: z=a*x + b*y + d<br>a = "+ausgabe(_)+",  b = "+ausgabe(H)+",  d = "+ausgabe(L),document.getElementById("sumqua2").innerHTML=ausgabe(U),-1e-8>D-U&&(document.getElementById("Warnung").innerHTML="Warnung! Koeffizienten gemäss Variante 2 wahrscheinlich falsch!<br><br>"),T=summe_residuen(u,e,n,t,_,H,L),document.getElementById("sumquaz2").innerHTML=ausgabe(T)}}else document.getElementById("Ebgl2").innerHTML="Für die Minimalisierung der Quadrate der Abstände der Punkte müssen Sie mindestens fünf Punkte eingeben!"}