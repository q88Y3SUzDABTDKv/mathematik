function problem6(e){var a=new Array(9);switch(e){case 1:a=["123---","------","---24-","-56---","------","------"];break;case 2:a=["6-4---","-4---3","------","---5--","-1----","-6----"];break;case 3:a=["------","-----5","------","-----4","21----","--5-3-"];break;case 4:a=["1-----","6---5-","------","-2----","-----3","------"];break;case 5:a=["41----","------","2-----","------","----5-","---3--"];break;case 6:a=["142---","-3----","------","------","-53---","------"];break;case 7:a=["1--3--","5---6-","------","-2----","------","------"];break}for(var c=0;c<6;c++){for(var b=0;b<6;b++){prob[c][b]=a[c].charAt(b);if(prob[c][b]=="-"){prob[c][b]=" "}locked[c][b]=setvalue(c,b,prob[c][b])}}save();zeichne();var d=36-anzleere();document.getElementById("message").innerHTML="Problem "+e+": "+d+" Zeichen"}function problem(e){if(e==0){return}unloesbar=false;initPuzzle();if(document.getElementById("9x9").checked){var a=new Array(9);switch(e){case 1:a=["-----9-2-","-----269-","62-3-8-4-","----9--5-","5-----8--","---------","-6423-7-9","-------62","3---6-41-"];break;case 2:a=["4-1273---","--------6","58--647-1","--------5","--2---8-4","---------","------1-2","328-----7","--4----5-"];break;case 3:a=["56314--9-","-4-76--8-","--------6","-5-------","--7------","---2579-4","-9-----41","--19----8","6-------9"];break;case 4:a=["--9---43-","--3-291--","4--3-----","64-9-75--","-----6-71","---------","----74-6-","---------","-8-6-1--5"];break;case 5:a=["1-39--27-","----7---8","-9-528---","---74-9--","---------","-48-1----","---4--52-","---8----6","4----7---"];break;case 6:a=["-849-----","--2---7--","-----7--9","1-74-----","-2-3-54--","----9----","27-------","5-62--831","4--5---72"];break;case 7:a=["5--------","--3---49-","72--9----","--5-6----","-8--356--","6----8---","----2--45","--2------","4-9---3--"];break}for(var c=0;c<9;c++){for(var b=0;b<9;b++){prob[c][b]=a[c].charAt(b);if(prob[c][b]=="-"){prob[c][b]=" "}locked[c][b]=setvalue(c,b,prob[c][b])}}save();zeichne();var d=81-anzleere();document.getElementById("message").innerHTML="Problem "+e+": "+d+" Zeichen"}else{problem6(e)}};