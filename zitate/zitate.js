var z=new Array();var a=new Array();function zufallszitat(){var c=z.length;var b=Math.floor(c*Math.random());document.getElementById("message").innerHTML=z[b]+"<br><small>"+a[b]+"</small><br>"}function init(){var g=z.length;var e=20;var d=new Array(e-1);var c=document.getElementById("message");c.innerHTML="";d=f();for(var b=0;b<e;b++){c.innerHTML+=z[d[b]]+"<br><small>"+a[d[b]]+"</small><br><hr>"}function f(){var k=new Array(e-1);k[0]=Math.floor(g*Math.random());var l=1;while(l<e){var j=false;k[l]=Math.floor(g*Math.random());for(var h=0;h<l;h++){if(k[l]==k[h]){j=true;break}}if(!j){l++}}return k}}z[0]="Hochtechnologie ist im wesentlichen mathematische Technologie.";a[0]="Enquete-Kommission der Amerikanischen Akademie der Wissenschaften";z[1]="Die Mathematik als Fachgebiet ist so ernst, dass man keine Gelegenheit versäumen sollte, dieses Fachgebiet unterhaltsamer zu gestalten.";a[1]='<a href="/mathematiker/pascal.html">Pascal, Blaise</a>';z[2]="Ein guter mathematischer Scherz ist immer besser als ein ganzes Dutzend mittelmässiger gelehrter Abhandlungen.";a[2]="Littlewood, John Edensor (9.6.1885 - 6.9.1977)";z[3]="Scherzhafte Beispiele haben manchmal grössere Bedeutung als ernste.";a[3]="Stifel, Michael (1487 - 19.4.1567)";z[4]="Das Buch der Natur ist mit mathematischen Symbolen geschrieben.<br>Genauer: Die Natur spricht die Sprache der Mathematik: die Buchstaben dieser Sprache sind Dreiecke, Kreise und andere mathematische Figuren.";a[4]='<a href="/mathematiker/galileo.html">Galilei, Galileo</a>';z[5]="Es gibt Dinge, die den meisten Menschen unglaublich erscheinen, die nicht Mathematik studiert haben.";a[5]='<a href="/mathematiker/archimedes.html">Archimedes</a>';z[6]="Die Mathematik ist eine Art Spielzeug, welches die Natur uns zuwarf zum Troste und zur Unterhaltung in der Finsternis.";a[6]="d'Alembert, Jean le Rond (17.11.1717 - 29.10.1783)";z[7]="Die Phantasie arbeitet in einem schöpferischen Mathematiker nicht weniger als in einem erfinderischen Dichter.";a[7]=a[6];z[8]="Die Mathematik ist doch die angenehmste Wissenschaft; sie und die Astronomie vertreten bei mir Tanzgesellschaften, Konzerte und andere derartige Belustigungen, die ich nur dem Namen nach kenne.";a[8]="Bessel, Friedrich Wilhelm (18jährig)";z[9]="Nicht etwa, dass bei grösserer Verbreitung des Einblickes in die Methode der Mathematik notwendigerweise viel mehr Kluges gesagt würde als heute, aber es würde sicher viel weniger Unkluges gesagt.";a[9]="Menger, Karl (13.1.1902 - 5.10.1985)";z[10]="So kann also die Mathematik definiert werden als diejenige Wissenschaft, in der wir niemals das kennen, worüber wir sprechen, und niemals wissen, ob das, was wir sagen, wahr ist.";a[10]="Russell, Bertrand (18.5.1872 - 2.2.1970)";z[11]="Seit man begonnen hat, die einfachsten Behauptungen zu beweisen, erwiesen sich viele von ihnen als falsch.";a[11]=a[10];z[12]="Manche Menschen haben einen Gesichtskreis vom Radius Null und nennen ihn ihren Standpunkt.";a[12]='<a href="/mathematiker/hilbert.html">Hilbert, David</a>';z[13]="Im grossen Garten der Geometrie kann sich jeder nach seinem Geschmack einen Strauss pflücken.";a[13]=a[12];z[14]="Die Mathematik ist das Instrument, welches die Vermittlung bewirkt zwischen Theorie und Praxis, zwischen Denken und Beobachten: sie baut die verbindende Brücke und gestaltet sie immer tragfähiger. Daher kommt es, dass unsere ganze gegenwärtige Kultur, soweit sie auf der geistigen Durchdringung und Dienstbarmachung der Natur beruht, ihre Grundlage in der Mathematik findet.";a[14]=a[12];z[15]="Das entscheidende Kriterium ist Schönheit; für hässliche Mathematik ist auf dieser Welt kein beständiger Platz.";a[15]="Hardy, Godfrey Harold (7.2.1877 - 1.12.1947)";z[16]="Die Furcht vor der Mathematik steht der Angst erheblich näher als der Ehrfurcht.";a[16]="Auerbach, Felix (1856 - 1933)";z[17]="Die Mehrheit bringt der Mathematik Gefühle entgegen, wie sie nach Aristoteles durch die Tragödie geweckt werden sollen, nämlich Mitleid und Furcht. Mitleid mit denen, die sich mit der Mathematik plagen müssen, und Furcht: dass man selbst einmal in diese gefährliche Lage geraten könne.";a[17]="Epstein, Paul (1883 - 1966)";z[18]="An Archimedes wird man sich erinnern, wenn Aischylos vergessen ist - weil zwar die Sprachen sterben, nicht aber die mathematischen Ideen.";a[18]=a[15];z[19]="Die Mathematik ist dem Liebestrieb nicht abträglich.";a[19]="Möbius, Paul (1853-1907), Irrenarzt (Nicht: August Möbius)";z[20]="Die Mathematik ist wie die Gottseligkeit zu allen Dingen nütze, aber wie diese nicht jedermanns Sache.";a[20]="Kraus, Jakob (1753 - 1807)";z[21]="Ich wenigstens kenne keine vollbefriedigende Erklärung dafür, warum jede ungerade Zahl (von 3 ab), mit sich selbst multipliziert, stets ein Vielfaches von 8 mit 1 als Rest ergibt.";a[21]="Bischoff, Erich, Erforscher der Kabbalah, 1920";z[22]="Es ist unglaublich, wie unwissend die studierende Jugend auf Universitäten kommt, wenn ich nur 10 Minuten rechne oder geometrisiere, so schläft 1/4 derselben sanft ein.";a[22]="Lichtenberg, Georg Christoph (1742 - 1799)";z[23]="Ich glaube, dass es, im strengsten Verstand, für den Menschen nur eine einzige Wissenschaft gibt, und diese ist reine Mathematik. Hierzu bedürfen wir nichts weiter als unseren Geist.";a[23]=a[22];z[24]="Die sogenannten Mathematiker von Profession haben sich, auf die Unmündigkeit der übrigen Menschen gestützt, einen Kredit von Tiefsinn erworben, der viel Ähnlichkeit mit dem von Heiligkeit hat, den die Theologen für sich haben.";a[24]=a[22];z[25]="Gute Sitten haben für die Gesellschaft mehr Wert als alle Berechnungen Newtons.";a[25]="Friedrich der Grosse (1712 - 1786)";z[26]="Können wir uns dem Göttlichen auf keinem anderen Wege als durch Symbole nähern, so werden wir uns am passendsten der mathematischen Symbole bedienen, denn diese besitzen unzerstörbare Gewissheit. Das Wissen vom Göttlichen ist für einen mathematisch ganz Ungebildeten unerreichbar.";a[26]="Cues, Nikolaus von (Cusanus; 1401 -  11. 8.1464)";z[27]="Gott ist ein Kind, und als er zu spielen begann, trieb er Mathematik. Sie ist die göttlichste Spielerei unter den Menschen.";a[27]="Erath, Vinzenz (31.3.1906 - 10.11.1976)";z[28]="Alles was lediglich wahrscheinlich ist, ist wahrscheinlich falsch.";a[28]='<a href="/mathematiker/descartes.html">Descartes, René</a>';z[29]="Von allen, die bis jetzt nach Wahrheit forschten, haben die Mathematiker allein eine Anzahl Beweise finden können, woraus folgt, dass ihr Gegenstand der allerleichteste gewesen sein müsse.";a[29]=a[28];z[30]="Die Mathematiker, die nur Mathematiker sind, denken also richtig, aber nur unter der Voraussetzung, dass man ihnen alle Dinge durch Definitionen und Prinzipien erklärt; sonst sind sie beschränkt und unerträglich, denn sie denken nur dann richtig, wenn es um sehr klare Prinzipien geht.";a[30]='<a href="/mathematiker/pascal.html">Pascal, Blaise</a>';z[31]="Ich kann, weil ich will, was ich muss.";a[31]="Kant, Immanuel (22.4.1724 - 12.2.1804)";z[32]="In jeder reinen Naturlehre ist nur soviel an eigentlicher Wissenschaft enthalten, als Mathematik in ihr angewandt werden kann.";a[32]=a[31];z[33]="Wer die erhabene Weisheit der Mathematik tadelt, nährt sich von Verwirrung.";a[33]="da Vinci, Leonardo (15.4.1452 - 2.5.1519)";z[34]="Zwei Dinge sind unendlich: das All und die menschliche Dummheit. Beim All bin ich mir noch nicht ganz sicher.";a[34]='<a href="/mathematiker/einstein.html">Einstein, Albert</a>';z[35]="Insofern sich die Sätze der Mathematik auf die Wirklichkeit beziehen, sind sie nicht sicher, und insofern sie sicher sind, beziehen sie sich nicht auf die Wirklichkeit.";a[35]=a[34];z[36]="If A equals success, then the formula is A equals X plus Y plus Z. X is work. Y is play. Z is keep your mouth shut.";a[36]=a[34];z[37]="Do not worry about your difficulties in mathematics, I assure you that mine are greater.";a[37]=a[34];z[38]="Mathematik ist die einzige perfekte Methode, sich selber an der Nase herumzuführen.";a[38]=a[34];z[39]="Das eine ist sicher, dass ich mich im Leben noch nicht annähernd so geplagt habe und dass ich grosse Hochachtung für die Mathematik eingeflösst bekommen habe, die ich bis jetzt in ihren subtileren Teilen in meiner Einfalt für puren Luxus ansah.";a[39]=a[34];z[40]="If you ask mathematicians what they do, you always get the same answer. They think. They think about difficult and unusual problems. They do not think about ordinary problems: they just write down the answers.<br>Mathematics Magazine, v. 65 no. 5, December 1992.";a[40]="Egrafov, M.";z[41]="Alle Pädagogen sind sich darin einig: man muss vor allem tüchtig Mathematik treiben, weil ihre Kenntnis fürs Leben grössten direkten Nutzen gewährt.";a[41]='<a href="/mathematiker/klein.html">Klein, Felix</a>';z[42]="Wir Mathematiker und Physiker dürfen das stolze Bewusstsein hegen, dass wir ein Wissensgebiet unser eigen nennen, welches der Menschheit fortschreitend immer neuen äusseren Erfolg und innere Einsicht bietet, und diese Freude an unserem Besitz, die müssen wir und wollen wir, wenn sie uns je verloren gegangen sein sollte, wiedergewinnen!";a[42]=a[41];z[43]='Es kann nicht geleugnet werden, dass ein grosser Teil der elementaren Mathematik von erheblichem praktischen Nutzen ist. Aber diese Teile der Mathematik sind, insgesamt betrachtet, ziemlich langweilig. Dies sind genau diejenigen Teile der Mathematik, die den geringsten ästhetischen Wert haben. Die "echte" Mathematik der "echten" Mathematiker, die Mathematik von Fermat, Gauss, Abel und Riemann ist fast völlig "nutzlos".';a[43]="Hardy, Godfrey Harold (7.2.1877 - 1.12.1947)";z[44]="Er ist ein Mathematiker und also hartnäckig.";a[44]="Goethe, Johann Wolfgang von (1749 - 1832)";z[45]="Mit Mathematikern ist kein heiteres Verhältnis zu gewinnen.";a[45]=a[44];z[46]="Die Mathematiker sind eine Art Franzosen: redet man zu ihnen, so übersetzen sie es in ihre Sprache, und dann ist es alsobald ganz etwas anderes.";a[46]=a[44];z[47]="Ich hörte mich anklagen, als sei ich ein Widersacher, ein Feind der Mathematik überhaupt, die doch niemand höher schätzen kann als ich, da sie gerade das leistet, was mir zu bewirken völlig versagt worden.";a[47]=a[44];z[48]="Nun so wäre denn endlich die Untersuchung in die Geheimnisse der Mathematik gehüllt, damit doch ja niemand so leicht wage, sich diesem Heiligtum zu nähern.";a[48]=a[44];z[49]="Gott existiert, weil die Mathematik widerspruchsfrei ist, und der Teufel existiert, weil wir das nicht beweisen können.";a[49]="Weil, André (6.5.1906 - 6.8.1998)";z[50]="Die ganzen Zahlen hat der liebe Gott geschaffen, alles andere ist Menschenwerk.";a[50]="Kronecker, Leopold";z[51]="Es gibt keinen Königsweg zur Mathematik.";a[51]='<a href="/mathematiker/euklid.html">Euklid</a>';z[52]="Strukturen sind die Waffen der Mathematiker.";a[52]="Bourbaki, Nicolas (Kollektivpseudonym)";z[53]="Das Einmaleins ist mir bis auf diese Stunde nicht geläufig.";a[53]="Grillparzer, Franz (1791 - 1872)";z[54]="Wer sich keinen Punkt denken kann, der ist einfach zu faul dazu.";a[54]='Mathematiklehrer Brenneke in "Eduards Traum" von Wilhelm Busch (1832 - 1908)';z[55]='Dass die niedrigste aller Tätigkeiten die arithmetische ist, wird dadurch belegt, dass sie die einzige ist, die auch durch eine Maschine ausgeführt werden kann. Nun läuft aber alle Analysis finitorum et infinitorum im Grunde doch auf Rechnerei zurück. Danach bemesse man den "mathematischen Tiefsinn".';a[55]="Schopenhauer, Arthur (1788 - 1860)";z[56]="Das Grundprinzip ist auch hier eine unberechtigte Anwendung einer logischen Methode auf Fälle, die streng genommen nicht darunter zu subsumieren sind, oder die Betrachtung solcher Gebilde als Zahlen, die gar keine rechten Zahlen sind. Negative Zahlen sind ein Selbstwiderspruch, wie alle Mathematiker zugeben.";a[56]="Vaihinger, Hans (1852 - 1933)";z[57]="Ich habe die Unart, ein lebhaftes Interesse bei mathematischen Gegenständen nur da zu nehmen, wo ich sinnreiche Ideenverbindungen und durch Eleganz oder Allgemeinheit sich empfehlende Resultate ahnen darf.";a[57]='<a href="/mathematiker/gauss.html">Gauss, Carl Friedrich</a>';z[58]="Die Mathematik ist eine wunderbare Lehrerin für die Kunst, die Gedanken zu ordnen, Unsinn zu beseitigen und Klarheit zu schaffen.";a[58]="Fabre, Jean-Henri (1823 - 1915)";z[59]="Die Mathematik muss man schon deswegen studieren, weil sie die Gedanken ordnet.";a[59]="Lomonossow, M. W.  (1711 - 1765)";z[60]="Du wolltest doch Algebra, da hast du den Salat.";a[60]="Verne, Jules (8.2.1828 - 24.3.1905)";z[61]="Beweisen muss ich diesen Käs', sonst ist die Arbeit unseriös.";a[61]="Wille, F.";z[62]="Das Denken gehört zu den grössten Vergnügungen der menschlichen Rasse.";a[62]="Brecht, Bertold (10.2.1898 - 14.8.1956)";z[63]="Eine mathematische Aufgabe kann manchmal genauso unterhaltsam sein wie ein Kreuzworträtsel und angespannte geistige Arbeit kann eine ebenso wünschenswerte Übung sein wie ein schnelles Tennisspiel.";a[63]="Polya, George (1887 - 1985)";z[64]="Die erste Regel, an die man sich in der Mathematik halten muss, ist, exakt zu sein. Die zweite Regel ist, klar und deutlich zu sein und nach Möglichkeit einfach.";a[64]="Carnot, Lazare Nicolas Marguerite (13.5.1753 - 2.8.1823)";z[65]="In der Mathematik gibt es keine Autoritäten. Das einzige Argument für die Wahrheit ist der Beweis.";a[65]="Urbanik, K.";z[66]="Die Logik ist die Hygiene, deren sich der Mathematiker bedient, um seine Gedanken gesund und kräftig zu erhalten.";a[66]="Weyl, Hermann (9.11.1885 - 8.12.1955)";z[67]="Die Mathematik ist das einzige Reich der wahrhaft exakten Phantasie.";a[67]="Saner, Hans (1934 - 2017)";z[68]="Der Mathematiker ist ein Mensch, der einen ihm vorgetragenen Gedanken nicht nur sofort begreift, sondern auch erkennt, auf welchem Denkfehler er beruht.";a[68]="Nahr, Helmar (1931 - 1990), dt. Mathematiker u. Wirtschaftswissenschaftler";z[69]="Ich kann die Bewegung der Himmelskörper berechnen, aber nicht das Verhalten der Menschen.";a[69]='<a href="/mathematiker/newton.html">Newton, Sir Isaac (1643 - 1727)</a>';z[70]="Die Mathematik ist die Königin der Wissenschaften und die Zahlentheorie ist die Königin der Mathematik.";a[70]=a[57];a[71]="Poincaré, Henri (1854 - 1912)";z[71]="Mit Logik kann man Beweise führen, aber keine neuen Erkenntnisse gewinnen, dazu gehört Intuition.";