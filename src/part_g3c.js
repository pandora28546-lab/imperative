
/* ---------- ОТКРОЙ: бегемот в пруду открывает рот; очень крупный план спереди, камера наезжает ---------- */
function makeOPEN(R){
  var S={},V0=[300,140,1080,720],V1=[490,170,800,533];S.vb=V0.join(" ");S.ACT=2.4;S.snd="open";
  var rays=daySky(R,1100,300),cl=[cloud(R,560,230,.8)];
  groundG(R,"g3pBank","M-1600 390 L0 390 C300 370 700 386 1000 376 C1260 368 1450 382 1600 380 L3200 380","#88A848");
  var bk=el("g",{},R);bush(bk,460,400,1.3);bush(bk,1260,390,1.4);tree(bk,330,396,1.3);tree(bk,1400,390,1.2);
  var reeds=el("g",{},R);for(var i=0;i<16;i++){var rx=i<8?rr(380,600):rr(1100,1320),rh=rr(70,130);el("path",{d:"M"+f1(rx)+" 450 q"+f1(rr(-8,8))+" "+f1(-rh/2)+" "+f1(rr(-6,6))+" "+f1(-rh),stroke:"#4AA010","stroke-width":5,fill:"none","stroke-linecap":"round"},reeds);if(i%3==0)el("ellipse",{cx:f1(rx),cy:f1(450-rh+10),rx:6,ry:16,fill:"#985038"},reeds)}
  el("rect",{x:-1600,y:430,width:4800,height:1300,fill:"url(#gWater)"},R);
  var rip=el("g",{},R);for(i=0;i<10;i++)el("path",{d:"M"+f1(rr(300,1400))+" "+f1(rr(470,690))+" q20 -6 40 0",stroke:"#FFFFFF","stroke-width":3,fill:"none","stroke-linecap":"round",opacity:.5},rip);
  [[440,520,1],[1260,560,1.2],[1150,650,.8]].forEach(function(p){var g=el("g",{transform:"translate("+p[0]+" "+p[1]+") scale("+p[2]+" "+(p[2]*.45)+")"},R);el("path",{d:"M0 0 L44 -14 A46 46 0 1 1 46 4Z",fill:"#4AA010"},g)});
  var lotus=el("g",{transform:"translate(1260 550)"},R);[[-14,-4,-30],[14,-4,30],[0,-10,0]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:9,ry:16,fill:"#FC88A8",transform:"rotate("+p[2]+" "+p[0]+" "+p[1]+")"},lotus)});
  var HX=850,HY=500,SC=1.8,H=el("g",{},R);
  // рот спереди: щёки-уголки соединяют верх и низ, внутри — розовая пасть, язык, клыки
  var cheek=el("rect",{x:-92,y:8,width:184,height:40,rx:44,fill:"#B890E0"},H);
  var cav=el("rect",{x:-70,y:30,width:140,height:20,rx:40,fill:"#C45A7A"},H);
  var palate=el("rect",{x:-62,y:30,width:124,height:16,rx:30,fill:"#FC88A8"},H);
  var tongue=el("ellipse",{cx:0,cy:50,rx:46,ry:18,fill:"#F8B0C0"},H);
  var jaw=el("g",{},H);el("ellipse",{cx:0,cy:46,rx:84,ry:36,fill:"#B890E0"},jaw);el("path",{d:"M-62 22 Q0 6 62 22",stroke:"#C8A8EC","stroke-width":8,fill:"none","stroke-linecap":"round"},jaw);
  [-1,1].forEach(function(s){el("rect",{x:44*s-8,y:-6,width:16,height:24,rx:7,fill:"#FFFFFF"},jaw)});
  var up=el("g",{},H);
  [-1,1].forEach(function(s){el("circle",{cx:62*s,cy:-100,r:15,fill:"#B890E0"},up);el("circle",{cx:62*s,cy:-100,r:8,fill:"#FC88A8",opacity:.7},up)});
  el("ellipse",{cx:0,cy:-48,rx:80,ry:60,fill:"#B890E0"},up);
  [-1,1].forEach(function(s){el("circle",{cx:36*s,cy:-90,r:21,fill:"#B890E0"},up)});
  el("ellipse",{cx:0,cy:8,rx:98,ry:47,fill:"#C8A8EC"},up);
  [-1,1].forEach(function(s){el("ellipse",{cx:28*s,cy:-6,rx:7,ry:10,fill:"#8A68B8"},up);el("circle",{cx:70*s,cy:-22,r:12,fill:"#FC88A8",opacity:.4},up);el("rect",{x:46*s-7,y:44,width:14,height:18,rx:6,fill:"#FFFFFF"},up)});
  var hmouth=el("path",{d:"M-40 40 Q0 52 40 40",stroke:"#8A68B8","stroke-width":4,fill:"none","stroke-linecap":"round"},up);
  var e1=eyeG(up,-36,-94,7.5),e2=eyeG(up,36,-94,7.5),a1=happyArc(up,-36,-93,9),a2=happyArc(up,36,-93,9);
  var front=el("g",{},R);el("rect",{x:-1600,y:690,width:4800,height:900,fill:"url(#gWater)"},front);
  var ring=el("ellipse",{cx:HX,cy:692,rx:240,ry:22,fill:"none",stroke:"#FFFFFF","stroke-width":5,opacity:.7},front);
  var tw={};
  S.init=function(){};
  S.reset=function(){S.cu=0;happy(false,[e1,e2],[a1,a2])};S.cu=0;
  S.cam=function(){return vbAt(V0,V1,sst(S.cu))};
  S.center=function(){return{x:HX,y:HY-20*SC,sc:SC*.7}};
  function pose(o){var k=o.k||0,uy=-50*k,jy=58*k,top=8+uy,bot=46+jy;tr(H,"translate("+HX+" "+f1(HY+(o.bob||0))+") scale("+SC+")");tr(up,"translate(0 "+f1(uy)+") rotate("+f1(o.rot||0)+" 0 0)");tr(jaw,"translate(0 "+f1(jy)+")");
    cheek.setAttribute("y",f1(top));cheek.setAttribute("height",f1(Math.max(40,bot-top)));
    var ct=46+uy-10,cb=10+jy+20;cav.setAttribute("y",f1(ct));cav.setAttribute("height",f1(Math.max(20,cb-ct)));
    palate.setAttribute("y",f1(ct));palate.setAttribute("height",f1(Math.max(16,(cb-ct)*.45)));tongue.setAttribute("cy",f1(10+jy+2));tongue.setAttribute("ry",f1(10+10*k));
    hmouth.setAttribute("opacity",(1-Math.min(1,k*4)).toFixed(2));blinkT(e1,-36,-94,o.blink);blinkT(e2,36,-94,o.blink)}
  S.ambient=function(t,dt){tr(rip,"translate("+f1(Math.sin(t*.7)*14)+" 0)");tr(rays,"rotate("+f1(t*6)+")");tr(cl[0].g,"translate("+f1(560+Math.sin(t*.05)*90)+" 230) scale(.8)");
    var r=(t*.5)%1;tr(ring,"translate("+HX+" 692) scale("+(1+r*.25).toFixed(3)+" 1) translate("+(-HX)+" -692)");ring.setAttribute("opacity",(.7*(1-r)).toFixed(2))};
  S.idle=function(t,dt,attn){var o={bob:Math.sin(t*1.4)*4,rot:Math.sin(t*.8)*2,blink:blinkK(tw,t)};var ht=idleTimer(tw,"ear",t,2.5,4);if(ht<.4)o.rot+=Math.sin(ht*30)*2;if(attn)o.rot=0;pose(o)};
  S.act=function(e){S.cu=clamp(e/S.ACT,0,1);var k=seg(e,.25,1.3),o={k:k*(1+.04*Math.sin(Math.max(0,e-1.3)*6)),bob:-8*Math.sin(Math.PI*clamp(e/.4,0,1))+Math.sin(e*1.4)*3,rot:0};
    o.blink=e<.3?0:k>.5?.6:0;pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.cu=1;if(e>.25)happy(true,[e1,e2],[a1,a2]);pose({k:1+.03*Math.sin(e*3),bob:Math.sin(e*1.4)*3,rot:Math.sin(e*2.2)*3*Math.min(1,e/.4)})};
  return S}

/* ---------- ЗАКРОЙ: крокодил на илистой кочке в мангровом болоте закрывает пасть; общий план сбоку, камера стоит ---------- */
function mangrove(g,x,y,s,k){var t=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},g);
  [[-70,-40],[-40,-20],[40,-20],[76,-40],[-10,0]].forEach(function(r){el("path",{d:"M0 -120 Q"+f1(r[0]*.4)+" -70 "+r[0]+" "+(20+r[1]*0),stroke:"#985038","stroke-width":9,fill:"none","stroke-linecap":"round"},t)});
  el("path",{d:"M-10 -110 C-8 -160 -6 -200 -4 -240 L8 -240 C10 -200 12 -160 14 -110Z",fill:"#985038"},t);
  [[0,-270,70],[-60,-240,50],[64,-244,52],[-24,-310,46],[30,-306,44]].forEach(function(c,i){el("ellipse",{cx:c[0],cy:c[1],rx:c[2],ry:c[2]*.75,fill:["#289440","#2E9E46","#4AA010"][(i+k)%3]},t)});
  for(var i=0;i<6;i++)el("circle",{cx:f1(rr(-60,60)),cy:f1(rr(-320,-240)),r:f1(rr(10,18)),fill:"#70CC10",opacity:.45},t);return t}
function makeCLOSE(R){
  var S={};S.vb="100 60 1400 933";S.ACT=1.8;S.snd="close";
  var rays=daySky(R,420,240),cl=[cloud(R,980,170,.8),cloud(R,1320,140,.6)];
  lgrad("g3Swamp",[[0,"#B8E0E0"],[.45,"#88A848"],[1,"#6E9A30"]],520,1000);
  groundG(R,"g3zFar","M-1600 540 L0 540 C300 520 700 534 1000 528 C1260 522 1450 532 1600 530 L3200 530","#4AA010");
  var bk=el("g",{},R);[[200,560,.8,0],[400,556,.6,1],[1250,552,.75,2],[1420,560,.9,0],[860,550,.5,1]].forEach(function(m){mangrove(bk,m[0],m[1],m[2],m[3])});
  el("rect",{x:-1600,y:556,width:4800,height:1600,fill:"url(#g3Swamp)"},R);
  var rip=el("g",{},R);for(var i=0;i<14;i++)el("path",{d:"M"+f1(rr(100,1500))+" "+f1(rr(600,980))+" q22 -7 44 0",stroke:"#EAF1FF","stroke-width":4,fill:"none","stroke-linecap":"round",opacity:.45},rip);
  var near=el("g",{},R);mangrove(near,180,860,1.4,1);mangrove(near,1440,820,1.2,2);
  [[340,900,1],[1180,960,.8],[560,980,.9],[1320,640,.7]].forEach(function(p){var g=el("g",{transform:"translate("+p[0]+" "+p[1]+") scale("+p[2]+" "+(p[2]*.45)+")"},R);el("path",{d:"M0 0 L44 -14 A46 46 0 1 1 46 4Z",fill:"#70CC10"},g)});
  var lotus=el("g",{transform:"translate(1180 954)"},R);[[-14,-4,-30],[14,-4,30],[0,-10,0]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:9,ry:16,fill:"#FFFFFF",transform:"rotate("+p[2]+" "+p[0]+" "+p[1]+")"},lotus)});
  var reeds=el("g",{},R);for(i=0;i<12;i++){var rx=i<6?rr(1250,1360):rr(200,300),ry0=i<6?740:770,rh=rr(80,140);el("path",{d:"M"+f1(rx)+" "+ry0+" q"+f1(rr(-8,8))+" "+f1(-rh/2)+" "+f1(rr(-6,6))+" "+f1(-rh),stroke:"#4AA010","stroke-width":5,fill:"none","stroke-linecap":"round"},reeds);if(i%3==0)el("ellipse",{cx:f1(rx),cy:f1(ry0-rh+10),rx:6,ry:16,fill:"#985038"},reeds)}
  el("path",{id:"g3zMud",d:"M290 744 C350 690 560 674 800 676 C1060 678 1270 692 1330 744 C1250 776 1000 784 800 784 C560 784 370 776 290 744Z",fill:"#A86448"},R);R.appendChild(grain(null,["g3zMud"]));
  el("path",{d:"M310 752 C400 776 600 790 800 790 C1000 790 1200 782 1310 752",stroke:"#EAF1FF","stroke-width":5,fill:"none","stroke-linecap":"round",opacity:.5},R);
  el("rect",{x:1020,y:690,width:200,height:26,rx:13,fill:"#985038",transform:"rotate(-4 1120 703)"},R);el("ellipse",{cx:1218,cy:696,rx:8,ry:12,fill:"#C47860",transform:"rotate(-4 1120 703)"},R);
  var CX=780,CY=722,SC=1.9;
  el("ellipse",{cx:CX,cy:CY+4,rx:250*SC,ry:10*SC,fill:"#2C3A5C",opacity:.14},R);
  var K=el("g",{},R),KB=el("g",{},K);
  var tail=el("g",{},KB);el("path",{d:"M-80 -50 C-150 -44 -210 -22 -262 -8 Q-270 -2 -258 2 C-200 0 -150 -2 -80 -6Z",fill:"#4AA010"},tail);
  [[-110,-44],[-140,-36],[-170,-28],[-200,-20],[-228,-12]].forEach(function(b){el("circle",{cx:b[0],cy:b[1],r:6,fill:"#289440"},tail)});
  [[-34,0],[78,0]].forEach(function(l){el("ellipse",{cx:l[0],cy:l[1],rx:17,ry:12,fill:"#289440"},KB)});
  el("ellipse",{cx:0,cy:-30,rx:102,ry:31,fill:"#4AA010"},KB);el("ellipse",{cx:0,cy:-12,rx:88,ry:10,fill:"#CCF0A0"},KB);
  [[-70,-56],[-40,-60],[-10,-61],[20,-60],[50,-56]].forEach(function(b){el("circle",{cx:b[0],cy:b[1],r:7,fill:"#289440"},KB)});
  [[-62,-2],[50,-2]].forEach(function(l){el("ellipse",{cx:l[0],cy:l[1],rx:18,ry:12,fill:"#289440"},KB)});
  var low=el("g",{},KB);el("path",{d:"M90 -32 L246 -26 Q258 -20 246 -14 L94 -10Z",fill:"#4AA010"},low);
  el("path",{d:"M100 -30 L240 -25.5 Q246 -24 240 -22 L100 -24Z",fill:"#FC88A8"},low);
  var td="";for(var x=122;x<236;x+=20)td+="M"+x+" -27 q5 -10 10 0Z ";el("path",{d:td,fill:"#FFFFFF"},low);
  var up=el("g",{},KB);
  var tu="";for(x=128;x<240;x+=20)tu+="M"+x+" -35 q5 10 10 0Z ";el("path",{d:tu,fill:"#FFFFFF"},up);
  el("path",{d:"M84 -58 C112 -70 140 -56 248 -46 Q266 -40 250 -33 L96 -30Z",fill:"#4AA010"},up);
  el("circle",{cx:242,cy:-46,r:5,fill:"#289440"},up);el("circle",{cx:130,cy:-64,r:17,fill:"#4AA010"},up);
  var ce=eyeG(up,132,-68,6.5),ch=happyArc(up,132,-67,7.5);el("circle",{cx:160,cy:-44,r:8,fill:"#FC88A8",opacity:.35},up);
  var drops=pool(R,14,function(p){return el("circle",{r:6,fill:"#EAF1FF",opacity:0},p)});
  var tw={};
  S.init=function(){};
  S.reset=function(){happy(false,[ce],[ch])};
  S.center=function(){return{x:CX+70*SC,y:CY-50*SC,sc:SC*.95}};
  function pose(o){var k=o.k==null?1:o.k;tr(K,"translate("+CX+" "+f1(CY)+") scale("+SC+")");tr(KB,"translate(0 "+f1(o.bob||0)+") rotate("+f1(o.rot||0)+" 0 -10)");
    tr(up,"rotate("+f1(-30*k)+" 100 -34)");tr(low,"rotate("+f1(7*k)+" 96 -24)");tr(tail,"rotate("+f1(o.tl||0)+" -80 -28)");blinkT(ce,132,-68,o.blink)}
  S.ambient=function(t,dt){runPool(drops,dt,900,1.3);tr(rip,"translate("+f1(Math.sin(t*.7)*16)+" 0)");tr(rays,"rotate("+f1(t*6)+")");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={k:.92+.08*Math.sin(t*1.5),tl:Math.sin(t*1.1)*4,blink:blinkK(tw,t),bob:Math.sin(t*1.5)*1};if(attn)o.k=1;pose(o)};
  S.act=function(e,dt,first){if(first)S.hit=0;var o={};if(e<.2)o.k=1+.15*sst(e/.2);else if(e<.34)o.k=1.15*(1-sst((e-.2)/.14));else o.k=0;
    if(e>=.34&&!S.hit){S.hit=1;emit(drops,10,CX+190*SC,CY-30*SC,-160,160,-420,-200,1)}
    var w=Math.max(0,e-.34);o.bob=e>.34?-6*Math.sin(w*14)*Math.exp(-w*4):0;o.rot=e>.34?-1.5*Math.sin(w*14)*Math.exp(-w*4):0;o.tl=Math.sin(e*6)*6;pose(o);return e>=S.ACT};
  S.fin=function(e,t){if(e>.25)happy(true,[ce],[ch]);pose({k:0,tl:Math.sin(e*5)*12*Math.max(.3,1-e/2),bob:-Math.abs(Math.sin(e*4))*3*Math.max(0,1-e/1.5)})};
  return S}

/* ---------- ВОЗЬМИ: кенгурёнок в австралийской пустоши допрыгивает до мячика, берёт его и кладёт в сумку; камера ведёт ---------- */
function acacia(g,x,y,s){var t=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},g);
  el("path",{d:"M-4 0 C-4 -40 -2 -60 0 -80 M0 -60 Q-30 -80 -50 -96 M0 -66 Q30 -84 52 -98",stroke:"#985038","stroke-width":8,fill:"none","stroke-linecap":"round"},t);
  el("ellipse",{cx:0,cy:-104,rx:96,ry:22,fill:"#6E9A30"},t);el("ellipse",{cx:-20,cy:-114,rx:60,ry:16,fill:"#88A848"},t);el("ellipse",{cx:30,cy:-110,rx:44,ry:12,fill:"#88A848"},t);return t}
function spinifex(g,x,y,s){for(var i=0;i<9;i++){var a=-70+i*17.5,L=rr(26,40)*s;el("path",{d:"M"+f1(x)+" "+f1(y)+" L"+f1(x+Math.sin(a*Math.PI/180)*L)+" "+f1(y-Math.cos(a*Math.PI/180)*L),stroke:i%2?"#88A848":"#6E9A30","stroke-width":4.5*s,"stroke-linecap":"round"},g)}
  el("ellipse",{cx:x,cy:y,rx:20*s,ry:6*s,fill:"#6E9A30"},g)}
function makeTAKE(R){
  var S={};S.ACT=3.8;S.snd="take";var VX0=470,VX1=690;S.vb=VX0+" 330 1100 733";
  var rays=daySky(R,1480,560),cl=[cloud(R,800,430,.8),cloud(R,1240,400,.6)];
  el("path",{d:"M900 712 C904 650 940 628 1040 624 C1160 620 1300 622 1370 640 C1410 652 1420 690 1424 712Z",fill:"#C47860"},R);
  el("path",{d:"M960 700 C966 670 980 650 1000 640 M1080 704 C1084 668 1090 646 1100 630 M1200 706 C1204 672 1214 650 1230 636 M1320 708 C1326 680 1340 660 1360 650",stroke:"#A86448","stroke-width":8,fill:"none","stroke-linecap":"round"},R);
  groundG(R,"g3tFar","M-1600 720 L0 720 C300 698 700 712 1000 704 C1260 698 1600 708 1800 706 L3200 706","#FDE6C4");
  var bk=el("g",{},R);acacia(bk,560,722,.9);acacia(bk,1720,716,1.1);acacia(bk,780,716,.6);
  groundG(R,"g3tG","M-1600 800 L0 800 C400 786 900 804 1800 794 L3200 794","#F8B888");
  var dec=el("g",{},R);[[620,880,1.1],[900,1010,1.3],[1380,900,1],[1600,980,1.2],[520,1040,1.4],[1250,1060,1.3]].forEach(function(p){spinifex(dec,p[0],p[1],p[2])});
  [[740,960,30,14],[1500,1030,40,18],[1040,860,18,8]].forEach(function(r){el("ellipse",{cx:r[0],cy:r[1],rx:r[2],ry:r[3],fill:"#C47860"},dec);el("ellipse",{cx:r[0]-r[2]*.3,cy:r[1]-r[3]*.4,rx:r[2]*.4,ry:r[3]*.3,fill:"#D0A090"},dec)});
  for(var i=0;i<40;i++)el("circle",{cx:f1(rr(400,1800)),cy:f1(rr(810,1080)),r:f1(rr(2,4)),fill:"#C47860",opacity:.5},dec);
  var SC=1.5,KY=920,BX=1190,BR=22;
  var shadow=el("ellipse",{rx:62*SC,ry:9*SC,fill:"#2C3A5C",opacity:.13},R),bsh=el("ellipse",{cx:BX,cy:KY+3,rx:BR,ry:7,fill:"#2C3A5C",opacity:.13},R);
  function mkToy(p,s){var g=el("g",{},p),i=el("g",{transform:"scale("+s+")"},g);el("path",{d:"M-40 6 L-40 -8 Q-40 -14 -32 -15 L-16 -16 L-8 -34 Q-6 -38 0 -38 L18 -38 Q24 -38 26 -32 L32 -16 L36 -15 Q42 -14 42 -6 L42 6Z",fill:"#6B91D6",stroke:"#6B91D6","stroke-width":6,"stroke-linejoin":"round"},i);el("path",{d:"M-4 -32 L6 -32 L6 -18 L-11 -18Z",fill:"#EAF1FF",stroke:"#EAF1FF","stroke-width":3,"stroke-linejoin":"round"},i);el("path",{d:"M11 -32 L19 -32 L24 -18 L11 -18Z",fill:"#EAF1FF",stroke:"#EAF1FF","stroke-width":3,"stroke-linejoin":"round"},i);el("circle",{cx:38,cy:-6,r:4,fill:"#FFD400"},i);el("rect",{x:-30,y:-4,width:18,height:4,rx:2,fill:"#98B8FC"},i);[-24,26].forEach(function(x){el("circle",{cx:x,cy:10,r:12,fill:"#2C3A5C"},i);el("circle",{cx:x,cy:10,r:5,fill:"#BABABA"},i)});return g}
  function mkBall(p,r){var g=el("g",{},p);el("circle",{r:r,fill:"#6B91D6"},g);el("path",{d:"M"+(-r)+" 0 Q0 "+(-r*.5)+" "+r+" 0",stroke:"#FFFFFF","stroke-width":r*.25,fill:"none"},g);el("circle",{cx:-r*.35,cy:-r*.4,r:r*.2,fill:"#FFFFFF",opacity:.7},g);return g}
  var K=el("g",{},R),KB=el("g",{},K);
  var tail=el("g",{},KB);el("path",{d:"M-24 -60 C-56 -40 -96 -14 -130 -5 Q-140 1 -128 4 C-92 4 -50 -6 -12 -30Z",fill:"#A86448"},tail);
  var footF=el("path",{d:"M-10 -6 L46 -8 Q56 -4 46 0 L-10 0Z",fill:"#985038",stroke:"#985038","stroke-width":6,"stroke-linejoin":"round"},KB);
  var thigh=el("g",{},KB);el("ellipse",{cx:-12,cy:-40,rx:30,ry:36,fill:"#A86448",transform:"rotate(-20 -12 -40)"},thigh);
  el("path",{d:"M-18 -6 L54 -8 Q66 -3 54 2 L-18 2Z",fill:"#A86448",stroke:"#A86448","stroke-width":7,"stroke-linejoin":"round"},thigh);
  el("path",{d:"M-30 -56 C-36 -94 -16 -138 14 -148 C38 -154 48 -128 44 -98 C40 -72 30 -46 10 -34 C-8 -26 -26 -36 -30 -56Z",fill:"#C47860"},KB);
  el("path",{d:"M10 -136 C30 -132 38 -110 32 -84 C26 -62 16 -46 2 -40 C10 -70 6 -110 10 -136Z",fill:"#FDE6C4"},KB);
  var pBall=mkToy(KB,.4);tr(pBall,"translate(18 -72)");pBall.setAttribute("opacity",0);
  el("path",{d:"M5 -74 Q19 -62 33 -76 C31 -62 24 -52 12 -48 C7 -56 5 -64 5 -74Z",fill:"#FDE6C4"},KB);el("path",{d:"M5 -74 Q19 -62 33 -76",stroke:"#A86448","stroke-width":3.4,fill:"none","stroke-linecap":"round"},KB);
  el("path",{d:"M4 -138 C8 -158 22 -176 38 -176 L46 -160 C36 -150 26 -140 22 -126Z",fill:"#C47860"},KB);
  var head=el("g",{},KB);
  [[22,-206,-16],[36,-208,8]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:9,ry:23,fill:"#C47860",transform:"rotate("+p[2]+" "+p[0]+" "+p[1]+")"},head);el("ellipse",{cx:p[0],cy:p[1]+2,rx:4.5,ry:14,fill:"#FCC4BC",transform:"rotate("+p[2]+" "+p[0]+" "+p[1]+")"},head)});
  el("ellipse",{cx:34,cy:-174,rx:22,ry:19,fill:"#C47860"},head);
  el("path",{d:"M42 -184 C60 -186 76 -178 80 -170 C76 -160 58 -158 42 -162Z",fill:"#C47860"},head);el("path",{d:"M50 -166 C60 -164 70 -166 76 -168",stroke:"#A86448","stroke-width":2.4,fill:"none","stroke-linecap":"round"},head);
  el("circle",{cx:79,cy:-174,r:5,fill:"#2C3A5C"},head);el("circle",{cx:36,cy:-164,r:6,fill:"#FC88A8",opacity:.4},head);
  var ke=eyeG(head,46,-180,5),kh=happyArc(head,46,-179,6);
  var armB=strokeLeg(KB,"","#985038",10),armF=strokeLeg(KB,"","#A86448",11),hB=el("ellipse",{rx:6.5,ry:5.5,fill:"#985038"},KB),hF=el("ellipse",{rx:7,ry:6,fill:"#A86448"},KB);
  var ball=mkToy(R,.95);
  var X0=800,X1=1080,tw={};S.kx=X0;S.ky=KY;S.lean=0;
  S.init=function(){};
  S.reset=function(){S.kx=X0;S.lean=0;pBall.setAttribute("opacity",0);ball.setAttribute("opacity",1);tr(ball,"translate("+BX+" "+(KY-BR)+")");bsh.setAttribute("opacity",.13);happy(false,[ke],[kh])};
  S.cam=function(){return[clamp(S.kx-310,VX0,VX1),330,1100,733]};
  S.center=function(){return{x:S.kx+10*SC,y:KY-90*SC,sc:SC*.75}};
  function L2W(x,y){var a=S.lean*Math.PI/180,dx=x,dy=y+20,rx=dx*Math.cos(a)-dy*Math.sin(a),ry=dx*Math.sin(a)+dy*Math.cos(a)-20;return{x:S.kx+rx*SC,y:S.ky+ry*SC}}
  function W2L(x,y){var a=-S.lean*Math.PI/180,dx=(x-S.kx)/SC,dy=(y-S.ky)/SC+20;return{x:dx*Math.cos(a)-dy*Math.sin(a),y:dx*Math.sin(a)+dy*Math.cos(a)-20}}
  var HAND={x:40,y:-102};
  function pose(o){S.ky=KY-(o.h||0);tr(K,"translate("+f1(S.kx)+" "+f1(S.ky)+") scale("+SC+")");tr(KB,"rotate("+f1(S.lean)+" 0 -20)");tr(head,"rotate("+f1(o.hd||0)+" 24 -150)");tr(tail,"rotate("+f1(o.tl||0)+" -20 -40)");
    tr(thigh,"rotate("+f1(o.leg||0)+" -12 -40)");tr(footF,"rotate("+f1(o.leg||0)+" -12 -40)");
    var hf=o.hand||HAND,hb={x:hf.x-6,y:hf.y-3};armF.setAttribute("d","M26 -124 Q"+f1((26+hf.x)/2+8)+" "+f1((-124+hf.y)/2)+" "+f1(hf.x)+" "+f1(hf.y));armB.setAttribute("d","M18 -126 Q"+f1((18+hb.x)/2+6)+" "+f1((-126+hb.y)/2)+" "+f1(hb.x)+" "+f1(hb.y));
    tr(hF,"translate("+f1(hf.x)+" "+f1(hf.y)+")");tr(hB,"translate("+f1(hb.x)+" "+f1(hb.y)+")");blinkT(ke,46,-180,o.blink);
    shadow.setAttribute("cx",f1(S.kx+4*SC));shadow.setAttribute("cy",KY+4);shadow.setAttribute("opacity",(.13*(1-Math.min(.7,(o.h||0)/120))).toFixed(3))}
  S.ambient=function(t,dt){tr(rays,"rotate("+f1(t*6)+")");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){S.lean=0;var o={hd:Math.sin(t*1)*5,tl:Math.sin(t*1.4)*3,blink:blinkK(tw,t),hand:{x:HAND.x,y:HAND.y+Math.sin(t*2)*2}};var et=idleTimer(tw,"ear",t,2,3.5);if(et<.4)o.hd+=Math.sin(et*25)*4;if(attn)o.hd=-4;pose(o)};
  S.act=function(e){var o={hd:0};
    if(e<1.6){var hp=e/.8,k=Math.floor(hp),u=hp-k;S.kx=lerp(X0,X1,(k+sst(u))/2);S.lean=-8*Math.sin(Math.PI*u);o.h=90*Math.sin(Math.PI*u);o.leg=-24*Math.sin(Math.PI*u);o.tl=-12*Math.sin(Math.PI*u);o.hand={x:46,y:-108}}
    else{S.kx=X1;S.ky=KY;var g=W2L(BX,KY-BR);
      if(e<2.1){var a=sst((e-1.6)/.5);S.lean=38*a;S.ky=KY;g=W2L(BX,KY-BR);o.hand={x:lerp(HAND.x,g.x-6,a),y:lerp(HAND.y,g.y-8,a)};o.hd=20*a}
      else if(e<2.6){var b=sst((e-2.1)/.5);S.lean=38;var g0=W2L(BX,KY-BR);S.lean=38*(1-b);o.hand={x:lerp(g0.x-6,50,b),y:lerp(g0.y-8,-104,b)};o.hd=20*(1-b)}
      else if(e<3.0){var c=sst((e-2.6)/.4);S.lean=0;o.hand={x:lerp(50,30,c),y:lerp(-104,-84,c)};o.hd=10*c}
      else{S.lean=0;var d=(e-3.0)/.8;o.hand={x:34,y:-80+Math.sin(d*Math.PI*4)*4};o.hd=10*(1-d)}
      if(e>=2.1&&e<2.95){var hw=L2W(o.hand.x+8,o.hand.y+10);tr(ball,"translate("+f1(hw.x)+" "+f1(hw.y)+")");bsh.setAttribute("opacity",0)}
      if(e>=2.95){ball.setAttribute("opacity",0);pBall.setAttribute("opacity",1)}}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.kx=X1;S.lean=0;ball.setAttribute("opacity",0);pBall.setAttribute("opacity",1);if(e>.25)happy(true,[ke],[kh]);pose({hd:-4+Math.sin(e*2.4)*6,h:24*Math.abs(Math.sin(e*4))*Math.max(0,1-e/1.6),tl:Math.sin(e*3)*6,hand:{x:34,y:-82}})};
  return S}

/* ---------- ДАЙ: большая панда отдаёт бамбук малой панде, которая просит лапкой; средний план, камера стоит ---------- */
function makeGIVE(R){
  var S={};S.vb="300 180 1000 667";S.ACT=3.0;S.snd="give";
  bgRect(R,"url(#gDay)");var cl=cloud(R,520,250,.6);
  var grove=el("g",{},R);
  function stalk(g,x,w,col,y0){el("rect",{x:x-w/2,y:y0,width:w,height:1000,rx:w/2,fill:col},g);for(var y=y0+70;y<800;y+=rr(90,120))el("rect",{x:x-w/2-2,y:y,width:w+4,height:7,rx:3,fill:"#4AA010"},g);
    for(var j=0;j<3;j++){var ly=rr(y0+40,640),s=rnd()<.5?-1:1,lg=el("g",{transform:"translate("+f1(x)+" "+f1(ly)+") rotate("+f1(s*rr(20,50))+")"},g);el("path",{d:"M0 0 C"+(s*20)+" -8 "+(s*50)+" -6 "+(s*70)+" 0 C"+(s*50)+" 6 "+(s*20)+" 8 0 0Z",fill:"#4AA010"},lg)}}
  [[340,26,"#B0E060",200],[420,20,"#B0E060",240],[1180,24,"#B0E060",210],[1260,30,"#B0E060",180],[560,16,"#CCF0A0",300],[860,14,"#CCF0A0",320],[1090,18,"#CCF0A0",280]].forEach(function(s){stalk(grove,s[0],s[1],s[2],s[3])});
  groundG(R,"g3gG","M-1600 720 L0 720 C400 708 900 724 1600 714 L3200 714","#88A848");
  var tex=el("g",{},R);blades(tex,260,200,1400,724,860,"#6E9A30",14,2.6);
  [[380,800,1.3],[1240,820,1.4],[1300,760,1.1],[560,840,1.2]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,null)});
  // большая панда (спереди), чуть повёрнута к малой
  var PX=640,PY=780,SC=1.6;
  el("ellipse",{cx:PX,cy:PY+4,rx:82*SC,ry:10*SC,fill:"#2C3A5C",opacity:.13},R);
  var RX=990,RY=784,RS=1.7;
  el("ellipse",{cx:RX,cy:RY+4,rx:40*RS,ry:8*RS,fill:"#2C3A5C",opacity:.13},R);
  var P=el("g",{},R),PB=el("g",{},P);
  [-1,1].forEach(function(s){el("ellipse",{cx:44*s,cy:-16,rx:32,ry:22,fill:"#2C3A5C"},PB);el("ellipse",{cx:52*s,cy:-14,rx:12,ry:9,fill:"#8C98B4"},PB)});
  el("ellipse",{cx:0,cy:-72,rx:70,ry:66,fill:"#FFFFFF"},PB);
  el("path",{d:"M-66 -100 C-50 -132 50 -132 66 -100 C50 -112 -50 -112 -66 -100Z",fill:"#2C3A5C"},PB);
  var head=el("g",{},PB);
  [-1,1].forEach(function(s){el("circle",{cx:42*s,cy:-206,r:18,fill:"#2C3A5C"},head)});
  el("circle",{cx:0,cy:-162,r:56,fill:"#FFFFFF"},head);
  [-1,1].forEach(function(s){el("ellipse",{cx:22*s,cy:-168,rx:14,ry:19,fill:"#2C3A5C",transform:"rotate("+(-22*s)+" "+(22*s)+" -168)"},head);el("circle",{cx:38*s,cy:-140,r:9,fill:"#FC88A8",opacity:.4},head)});
  el("ellipse",{cx:0,cy:-148,rx:9,ry:6.5,fill:"#2C3A5C"},head);el("path",{d:"M-10 -134 Q-5 -128 0 -134 Q5 -128 10 -134",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var eyes=[],arcs=[];[-1,1].forEach(function(s){var g=el("g",{},head);el("circle",{cx:23*s,cy:-170,r:6,fill:"#FFFFFF"},g);el("circle",{cx:23*s+1.5,cy:-170,r:3.6,fill:"#2C3A5C"},g);eyes.push(g);arcs.push(happyArc(head,23*s,-169,7,"#FFFFFF"))});
  var armL=strokeLeg(P,"","#2C3A5C",28),armR=strokeLeg(P,"","#2C3A5C",28),hL=el("ellipse",{rx:15,ry:13,fill:"#2C3A5C"},P);
  // малая панда (рыжая), стоит на задних лапках лицом к большой
  var Q=el("g",{},R),QB=el("g",{},Q);
  var qtail=el("path",{d:"",stroke:"#C47860","stroke-width":26,fill:"none","stroke-linecap":"round"},QB),qtip=el("circle",{r:13,fill:"#985038"},QB);
  [-1,1].forEach(function(s){el("ellipse",{cx:13*s,cy:-10,rx:12,ry:14,fill:"#7A3E2C"},QB)});
  el("ellipse",{cx:0,cy:-54,rx:32,ry:44,fill:"#F97A4F"},QB);el("ellipse",{cx:-2,cy:-44,rx:17,ry:28,fill:"#985038"},QB);
  var qarmB=strokeLeg(QB,"","#7A3E2C",13);
  var qhead=el("g",{},QB);
  [-1,1].forEach(function(s){el("path",{d:"M"+(10*s)+" -128 Q"+(26*s)+" -152 "+(34*s)+" -122Z",fill:"#F97A4F",stroke:"#FFFFFF","stroke-width":5,"stroke-linejoin":"round"},qhead)});
  el("circle",{cx:0,cy:-110,r:31,fill:"#F97A4F"},qhead);
  el("ellipse",{cx:-6,cy:-98,rx:17,ry:12,fill:"#FFFFFF"},qhead);[-1,1].forEach(function(s){el("ellipse",{cx:-6+13*s,cy:-123,rx:6.5,ry:4,fill:"#FFFFFF"},qhead);el("circle",{cx:-6+17*s,cy:-99,r:5,fill:"#FFFFFF"},qhead)});
  el("circle",{cx:-10,cy:-102,r:4.5,fill:"#2C3A5C"},qhead);el("path",{d:"M-16 -94 q5 4 10 0",stroke:"#2C3A5C","stroke-width":2.4,fill:"none","stroke-linecap":"round"},qhead);
  var qeyes=[],qarcs=[];[-1,1].forEach(function(s){qeyes.push(eyeG(qhead,-6+11*s,-114,4.2));qarcs.push(happyArc(qhead,-6+11*s,-113,5))});
  var bam=el("g",{},R);el("rect",{x:-9,y:-90,width:18,height:180,rx:9,fill:"#70CC10"},bam);[-50,-10,30,70].forEach(function(y){el("rect",{x:-11,y:y,width:22,height:6,rx:3,fill:"#4AA010"},bam)});
  [[-90,-30],[-90,30],[-70,-60]].forEach(function(l){var g=el("g",{transform:"translate(0 "+l[0]+") rotate("+l[1]+")"},bam);el("path",{d:"M0 0 C10 -10 30 -12 46 -4 C30 4 10 6 0 0Z",fill:"#4AA010"},g)});
  var hR=el("ellipse",{rx:15*SC,ry:13*SC,fill:"#2C3A5C"},R);
  var qarmF=strokeLeg(R,"","#7A3E2C",13*RS),qh=[0,1].map(function(){return el("ellipse",{rx:7*RS,ry:6*RS,fill:"#7A3E2C"},R)});
  function P2W(x,y){return{x:PX+x*SC,y:PY+y*SC}}function W2P(p){return{x:(p.x-PX)/SC,y:(p.y-PY)/SC}}
  function Q2W(x,y){return{x:RX+x*RS,y:RY+y*RS}}function W2Q(p){return{x:(p.x-RX)/RS,y:(p.y-RY)/RS}}
  var BHOLD=P2W(70,-80),ASK=Q2W(-50,-64),HUG=Q2W(30,-56),tw={},tw2={};
  S.init=function(){};
  S.reset=function(){happy(false,eyes,arcs);happy(false,qeyes,qarcs)};
  S.center=function(){return{x:PX,y:PY-100*SC,sc:SC*.85}};
  function lim(e,sx,sy,hx,hy,bend){e.setAttribute("d","M"+f1(sx)+" "+f1(sy)+" Q"+f1((sx+hx)/2+(bend||0))+" "+f1((sy+hy)/2)+" "+f1(hx)+" "+f1(hy))}
  // o.b — бамбук в мире {x,y,r}; o.pr — правая лапа панды (мир); o.q1,o.q2 — лапки малой панды (мир)
  function pose(o){tr(P,"translate("+PX+" "+PY+") scale("+SC+")");tr(PB,"rotate("+f1(o.rot||0)+" 0 0)");tr(head,"rotate("+f1(o.hd||0)+" 0 -110)");
    var l={x:-34,y:-52};lim(armL,-50,-92,l.x,l.y,-10);tr(hL,"translate("+l.x+" "+l.y+")");
    var pr=W2P(o.pr);lim(armR,50,-92,pr.x,pr.y,14);tr(hR,"translate("+f1(o.pr.x)+" "+f1(o.pr.y)+")");
    tr(bam,"translate("+f1(o.b.x)+" "+f1(o.b.y)+") rotate("+f1(o.b.r)+") scale("+(SC*.85).toFixed(3)+")");
    tr(Q,"translate("+RX+" "+f1(RY)+") scale("+RS+")");tr(QB,"translate(0 "+f1(o.qbob||0)+")");tr(qhead,"rotate("+f1(o.qhd||0)+" 0 -84)");
    var sw=o.qtw||0;qtail.setAttribute("d","M18 -26 C50 -24 "+f1(66+sw)+" -56 "+f1(54+sw)+" -92");qtip.setAttribute("cx",f1(54+sw));qtip.setAttribute("cy",-92);
    var q2=W2Q(o.q2);lim(qarmB,14,-68,q2.x,q2.y,0);
    var s=Q2W(-20,-68),bb=(o.qbob||0)*RS;lim(qarmF,s.x,s.y+bb,o.q1.x,o.q1.y,0);tr(qh[0],"translate("+f1(o.q1.x)+" "+f1(o.q1.y)+")");tr(qh[1],"translate("+f1(o.q2.x)+" "+f1(o.q2.y)+")");
    eyes.forEach(function(g,i){blinkT(g,i?23:-23,-170,o.blink)});qeyes.forEach(function(g,i){blinkT(g,-6+(i?11:-11),-114,o.qblink)})}
  function bAt(hand,r){var a=r*Math.PI/180;return{x:hand.x+Math.sin(a)*10,y:hand.y-Math.cos(a)*10,r:r}}
  S.ambient=function(t,dt){tr(cl.g,"translate("+f1(520+Math.sin(t*.05)*80)+" 250) scale(.6)");tr(grove,"translate("+f1(Math.sin(t*.6)*3)+" 0)")};
  S.idle=function(t,dt,attn){var ask=Math.sin(t*3)*5,pr={x:BHOLD.x,y:BHOLD.y+Math.sin(t*1.2)*3};
    var o={hd:Math.sin(t*.9)*4+(attn?0:3),blink:blinkK(tw,t),pr:pr,b:bAt(pr,8+Math.sin(t*1.2)*3),q1:{x:ASK.x,y:ASK.y+ask},q2:Q2W(10,-44),qhd:-8+Math.sin(t*1.5)*4,qbob:0,qtw:Math.sin(t*1.8)*8,qblink:blinkK(tw2,t)};pose(o)};
  var GIVE_P=Q2W(-64,-76);
  S.act=function(e){var o={blink:0,qblink:0};
    if(e<.9){var u=sst(e/.9),pr={x:lerp(BHOLD.x,GIVE_P.x-10,u),y:lerp(BHOLD.y,GIVE_P.y,u)-30*Math.sin(Math.PI*u)};o.pr=pr;o.b=bAt(pr,lerp(8,20,u));o.hd=lerp(3,14,u);o.rot=4*u;
      o.q1={x:ASK.x,y:ASK.y+Math.sin(e*12)*3};o.q2=Q2W(10,-44);o.qhd=-8}
    else if(e<1.3){var v=sst((e-.9)/.4),pr2={x:GIVE_P.x-10,y:GIVE_P.y};o.pr=pr2;o.b=bAt(pr2,20);o.hd=14;o.rot=4;
      var gp={x:o.b.x+6,y:o.b.y+16};o.q1={x:lerp(ASK.x,gp.x,v),y:lerp(ASK.y,gp.y,v)};o.q2={x:lerp(Q2W(10,-44).x,gp.x+8,v),y:lerp(Q2W(10,-44).y,gp.y+22,v)};o.qhd=-8+6*v}
    else if(e<2.0){var w=sst((e-1.3)/.7),src={x:GIVE_P.x-10,y:GIVE_P.y},pos={x:lerp(src.x+6,HUG.x,w),y:lerp(src.y+16,HUG.y,w)};
      o.b={x:pos.x-6*(1-w),y:pos.y-16*(1-w)-40*w,r:lerp(20,-6,w)};o.q1=pos;o.q2={x:pos.x+8+10*w,y:pos.y+22-10*w};
      o.pr={x:lerp(src.x,BHOLD.x-40,w),y:lerp(src.y,-60*SC+PY,w)};o.hd=lerp(14,6,w);o.rot=4*(1-w);o.qhd=-2;o.qbob=-6*Math.sin(Math.PI*w)}
    else{var z=(e-2.0)/1.0;o.b={x:HUG.x,y:HUG.y-40,r:-6+Math.sin(z*Math.PI*2)*4};o.q1=HUG;o.q2={x:HUG.x+18,y:HUG.y+12};o.pr={x:BHOLD.x-40,y:-60*SC+PY};o.hd=6;o.qhd=-2+Math.sin(z*6)*4;o.qbob=-Math.abs(Math.sin(z*Math.PI*2))*5}
    o.qtw=Math.sin(e*5)*10;pose(o);return e>=S.ACT};
  S.fin=function(e,t){if(e>.25){happy(true,eyes,arcs);happy(true,qeyes,qarcs)}var k=Math.min(1,e/.4);
    pose({b:{x:HUG.x,y:HUG.y-40,r:-6+Math.sin(e*2.4)*4*k},q1:HUG,q2:{x:HUG.x+18,y:HUG.y+12},pr:{x:BHOLD.x-40,y:-60*SC+PY},hd:6+Math.sin(e*2.2)*4*k,rot:Math.sin(e*2.2)*2*k,qhd:-2+Math.sin(e*2.6)*5*k,qbob:-Math.abs(Math.sin(e*4))*4*Math.max(0,1-e/1.6),qtw:Math.sin(e*3)*10})};
  return S}
