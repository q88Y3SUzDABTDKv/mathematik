var maze=new Array("+---+---+---+---+---+---+---+---+---+---+---+---+---+---+    ","|                   |               |                   |    ","+---+---+   +   +   +   +---+   +---+---+   +---+---+   +---+","|   |   |   |   |   |   |                   |             X  ","+   +   +   +---+   +   +---+   +---+---+---+---+---+   +---+","|                                                       |    ","+   +   +---+   +   +   +---+   +   +   +---+---+   +   +    ","|   |   |       |   |           |   |               |   |    ","+   +   +---+   +   +   +   +   +   +---+---+---+   +   +    ","| T |   |       |   |   |   |   |               |   | M |    ","+   +   +   +   +   +   +   +   +   +---+---+   +   +   +    ","|   |   |   |       |   |                       |   |   |    ","+   +   +   +   +   +   +   +   +   +---+---+   +   +   +    ","|   |   |   |   |   |   |   |   |               |   |   |    ","+   +   +   +   +   +   +   +   +   +---+---+   +   +   +    ","|   |   |   |   |   |   |   |   |               |   |   |    ","+   +   +   +   +   +   +   +   +   +---+---+   +   +   +    ","|                                                       |    ","+---+---+---+---+---+---+---+---+---+---+---+---+---+---+    ");const Dx=9;const Dy=15;var Tx=4;var Ty=0;var Mx=4;var My=13;const Ex=1;const Ey=14;var Tpic="T1.png";var Mpic="M1.png";var G=false;var U=2;var counter=-1;const solutionstr="UURRRDDLDDDDRRRUUUUURRUURRRURRRLLLDLLLDDDDDDDRRRRRRL LUUULLLLUUUUULLDDDDDDDDRRRRRRRUUUUUURUR";var solvemode=false;function minMove(){var bMoved=true;if(G){return}n="x"+eval(Mx)+"y"+eval(My);var helppic=document.getElementById(n).src;var pos=helppic.search("M.png");if(pos>-1){helppic="1.png"}else{pos=helppic.lastIndexOf("M");helppic=helppic.substring(pos+1,pos+6)}document.getElementById(n).src=helppic;if((My>Ty)&&(maze[2*Mx+1].charAt(4*My+0)==" ")){My--}else{if((My<Ty)&&(maze[2*Mx+1].charAt(4*My+4)==" ")){My++}else{if((Mx>Tx)&&(maze[2*Mx+0].charAt(4*My+2)==" ")){Mx--}else{if((Mx<Tx)&&(maze[2*Mx+2].charAt(4*My+2)==" ")){Mx++}else{bMoved=false}}}}n="x"+eval(Mx)+"y"+eval(My);helppic=document.getElementById(n).src;pos=helppic.search(".png");helppic=helppic.substring(pos-1,pos+4);Mpic="M"+helppic;document.getElementById(n).src=Mpic;if((Tx==Mx)&&(Ty==My)){Antwort.innerHTML="Verloren!";G=true}else{if((bMoved)&&(U<2)){U++;setTimeout("minMove()",10)}else{U=0}}}function move(x,y){if(G){return}if(U!=0){return}if((x<0)||(x>=Dx)||(y<0)||(y>=Dy)){return}else{if((x==Mx)&&(y==My)){return}else{if(((x==Tx+1)&&(y==Ty)&&(maze[2*Tx+2].charAt(4*Ty+2)==" "))||((x==Tx-1)&&(y==Ty)&&(maze[2*Tx+0].charAt(4*Ty+2)==" "))||((x==Tx)&&(y==Ty+1)&&(maze[2*Tx+1].charAt(4*Ty+4)==" "))||((x==Tx)&&(y==Ty-1)&&(maze[2*Tx+1].charAt(4*Ty+0)==" "))){n="x"+eval(Tx)+"y"+eval(Ty);var helppic=document.getElementById(n).src;var pos=helppic.search("T.png");if(pos>-1){helppic="1.png"}else{pos=helppic.lastIndexOf("T");helppic=helppic.substring(pos+1,pos+6)}document.getElementById(n).src=helppic;Tx=x;Ty=y;n="x"+eval(Tx)+"y"+eval(Ty);helppic=document.getElementById(n).src;pos=helppic.search(".png");helppic=helppic.substring(pos-1,pos+4);Tpic="T"+helppic;document.getElementById(n).src=Tpic;if((x==Ex)&&(y==Ey)){Antwort.innerHTML="Gratuliere!";G=true;return}}else{if((x==Tx)&&(y==Ty)){}else{return}}}}U=1;setTimeout("minMove()",10)}function init(){var i=0;var j=0;var n="";solvemode=false;document.getElementById("menuicon").addEventListener("click",menu);const row=new Array("32222322232222zr","33111130220320er","100200202222203r","11301120112201zr","T130111112221Mzr","11110110022011zr","11111111122011zr","11111111122011zr","10000000000000zr","uuuuuuuuuuuuuu4r");for(i=0;i<=Dx;i++){for(j=0;j<=Dy;j++){var pos=row[i].charAt(j);var pos_left=22*j;var pos_top=22*i;document.write('<div style="position: absolute; left:'+pos_left+"px; top:"+pos_top+'px;">');document.write("<IMG ID=x"+eval(i)+"y"+eval(j)+" SRC="+pos+".png width=22 height=22>");document.write("</div>")}}}function restart(){var i=0;var j=0;var n="";counter=-1;if((Tx!=Mx)||(Ty!=My)){n="x"+eval(Tx)+"y"+eval(Ty);var helppic=document.getElementById(n).src;var pos=helppic.search("T.png");if(pos>-1){helppic="1.png"}else{pos=helppic.lastIndexOf("T");helppic=helppic.substring(pos+1,pos+6)}document.getElementById(n).src=helppic}n="x"+eval(Mx)+"y"+eval(My);var helppic=document.getElementById(n).src;var pos=helppic.search("M.png");if(pos>-1){helppic="1.png"}else{pos=helppic.lastIndexOf("M");helppic=helppic.substring(pos+1,pos+6)}document.getElementById(n).src=helppic;Antwort.innerHTML="Viel Erfolg!";G=false;U=0;Tx=4;Ty=0;Mx=4;My=13;document.getElementById("x1y14").src="e.png";document.getElementById("x4y0").src="T.png";document.getElementById("x4y13").src="M.png"}function keyPress(a){if(solvemode){return}switch(a){default:break;case 68:move(Tx,Ty);break;case 37:move(Tx,Ty-1);break;case 38:move(Tx-1,Ty);break;case 39:move(Tx,Ty+1);break;case 40:move(Tx+1,Ty);break;case 82:restart();break}}function initloesung(){document.getElementById("user").style.display="none";document.getElementById("computer").style.display="block";solvemode=true;restart()}function loesung(){counter++;if(counter>=solutionstr.length){return}var a=solutionstr.charAt(counter);switch(a){case"L":move(Tx,Ty-1);case"U":move(Tx-1,Ty);case"R":move(Tx,Ty+1);case"D":move(Tx+1,Ty);case" ":move(Tx,Ty)}}function start(){document.getElementById("computer").style.display="none";document.getElementById("user").style.display="block";solvemode=false;restart()}function menu(){var a=window.open("/menu_js.html","Menu","width=300,height=520,left=100,top=100");a.focus()};