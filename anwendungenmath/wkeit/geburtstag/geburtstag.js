function rechne(){var e=25;e=parseInt(document.getElementById("n").value),(isNaN(e)||2>e||e>100)&&(e=25),document.getElementById("n").value=e,document.getElementById("N").innerHTML=e;for(var n=1,t=1;e>=t;t++)n=n*(365-t+1)/365;n=1-n,n=Math.round(1e4*n)/100,document.getElementById("RES").innerHTML=n}