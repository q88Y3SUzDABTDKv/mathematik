var Letters="ABCCDEFFDFEGAHDBBFGAAIJ";var Solution="78449166961370988637725";var Stack;var nullStack=new StackEl(-1);window.onload=init;function init(){Stack=new StackEl(Letters);restore()}function StackEl(a){this.str=a;this.next=nullStack;return this}function push(){document.getElementById("info").innerHTML="";var b="";var a=document.game;var c=Letters.length;for(i=0;i<c;i++){b+=a.elements[i].value}tmp=Stack;Stack=new StackEl(b);Stack.next=tmp}function change(e){document.getElementById("info").innerHTML="";var a=document.game;if(a.elements[e].value.length==0){a.elements[e].value=Stack.str.substring(e,e+1)}var d=Letters.substring(e,e+1);var b=Letters.length;for(i=0;i<b;i++){if(a.elements[i].value==a.elements[e].value){if(i!=e){a.elements[e].value=Stack.str.substring(e,e+1)}}}for(i=0;i<b;i++){if(Letters.substring(i,i+1)==d){a.elements[i].value=a.elements[e].value}}}function restore(){document.getElementById("info").innerHTML="";var a=document.game;str=Stack.str;if(Stack.next!=nullStack){Stack=Stack.next}var b=str.length;for(i=0;i<b;i++){a.elements[i].value=str.substring(i,i+1)}}function finished(){var a=document.game;var b=Letters.length;for(i=0;i<b;i++){if(a.elements[i].value!=Solution.substring(i,i+1)){document.getElementById("info").innerHTML="Leider falsch. Versuchen Sie's nochmal!";return}}document.getElementById("info").innerHTML="Gratuliere! Sie haben's geschafft!"};