
/* ==========================================================
   ИГРА 3 · ПОВСЕДНЕВНЫЕ ДЕЙСТВИЯ И ПАРЫ
   ========================================================== */
function sst(u){u=clamp(u,0,1);return u*u*(3-2*u)}
function seg(e,a,b){return sst((e-a)/(b-a))}
function blinkK(tw,t){var bt=idleTimer(tw,"blink",t,2,3.6);return bt<.2?1-Math.abs(bt-.1)/.1:0}
function happy(on,eyes,arcs){eyes.forEach(function(x){x.setAttribute("opacity",on?0:1)});arcs.forEach(function(x){x.setAttribute("opacity",on?1:0)})}
function vbAt(a,b,u){return [lerp(a[0],b[0],u),lerp(a[1],b[1],u),lerp(a[2],b[2],u),lerp(a[3],b[3],u)]}
function groundG(R,id,d,fill){var p=hill(R,id,d,fill);R.appendChild(grain(null,[id]));return p}
function leafBall(g,x,y,r,k){el("circle",{cx:x,cy:y,r:r,fill:["#289440","#2E9E46","#4AA010"][k%3]},g)}
function leafy(g,x,y,r,n){el("circle",{cx:x,cy:y,r:r*.82,fill:"#289440"},g);
  for(var i=0;i<n;i++){var a=rnd()*Math.PI*2,d=Math.sqrt(rnd())*r*.85,lx=x+Math.cos(a)*d,ly=y+Math.sin(a)*d,up=(y-ly)/r+(x-lx)/r*.4,
    col=up>.3?"#70CC10":up>-.2?"#4AA010":"#2E9E46",s=(r/62)*rr(.75,1.1),lg=el("g",{transform:"translate("+f1(lx)+" "+f1(ly)+") rotate("+f1(rr(0,360))+") scale("+s.toFixed(2)+")"},g);
    el("path",{d:"M-17 0 C-9 -10 9 -10 17 0 C9 10 -9 10 -17 0Z",fill:col},lg);el("path",{d:"M-13 0 L13 0",stroke:"#289440","stroke-width":1.6,opacity:.7},lg)}}
function bush(g,x,y,s){[[-30,-10,30],[0,-26,36],[32,-12,28]].forEach(function(b,i){leafBall(g,x+b[0]*s,y+b[1]*s,b[2]*s,i)});el("circle",{cx:x-6*s,cy:y-40*s,r:10*s,fill:"#70CC10",opacity:.45},g)}

/* ---------- ХЛОПАЙ: тюлень на берегу хлопает ластами; средний план спереди, камера стоит ---------- */
function makeCLAP(R){
  var S={};S.vb="200 160 1200 800";S.ACT=3.0;S.snd="clap";
  var rays=daySky(R,1160,380),cl=[cloud(R,520,300,.8),cloud(R,940,250,.6)];
  el("rect",{x:-1600,y:540,width:4800,height:400,fill:"url(#gSea)"},R);
  el("path",{d:"M-1600 540 L3200 540",stroke:"#EAF1FF","stroke-width":4,opacity:.7},R);
  var waves=el("g",{},R);for(var i=0;i<14;i++){var wx=rr(100,1500),wy=rr(570,720);el("path",{d:"M"+f1(wx)+" "+f1(wy)+" q18 -8 36 0 q18 8 36 0",stroke:"#FFFFFF","stroke-width":4,fill:"none","stroke-linecap":"round",opacity:.55},waves)}
  var foam=el("path",{d:"M-1600 756 C200 744 600 762 1000 748 C1300 740 1500 752 3200 748",stroke:"#FFFFFF","stroke-width":10,fill:"none","stroke-linecap":"round",opacity:.8},R);
  groundG(R,"g3cSand","M-1600 768 L0 768 C300 750 700 776 1000 758 C1250 746 1450 762 1600 758 L3200 758","url(#gSand)");
  [[330,830,60,30],[1290,812,74,36],[1220,836,40,22]].forEach(function(r){el("ellipse",{cx:r[0],cy:r[1],rx:r[2],ry:r[3],fill:"#BABABA"},R);el("ellipse",{cx:r[0]-r[2]*.3,cy:r[1]-r[3]*.4,rx:r[2]*.4,ry:r[3]*.3,fill:"#D3E2FF",opacity:.6},R)});
  [[460,900],[1080,930],[560,948]].forEach(function(p,k){var st=el("g",{transform:"translate("+p[0]+" "+p[1]+") rotate("+(k*20)+")"},R);for(var j=0;j<5;j++)el("ellipse",{cx:0,cy:-11,rx:6,ry:12,fill:"#F97A4F",transform:"rotate("+(j*72)+")"},st);el("circle",{r:7,fill:"#F97A4F"},st)});
  var SX=800,SY=905,SC=1.55;
  el("ellipse",{cx:SX,cy:SY+4,rx:96*SC,ry:13*SC,fill:"#2C3A5C",opacity:.13},R);
  var K=el("g",{},R),B=el("g",{},K);
  [-1,1].forEach(function(s){el("ellipse",{cx:44*s,cy:-6,rx:44,ry:13,fill:"#8C98B4",transform:"rotate("+(14*s)+" "+(44*s)+" -6)"},B)});
  el("path",{d:"M-70 -10 C-92 -92 -62 -172 0 -182 C62 -172 92 -92 70 -10 C40 6 -40 6 -70 -10Z",fill:"#A8B0C8"},B);
  el("ellipse",{cx:0,cy:-74,rx:46,ry:62,fill:"#D3E2FF"},B);
  function flip(s){var g=el("g",{transform:"translate("+(50*s)+" -128) scale("+s+" 1)"},B),i=el("g",{},g);el("ellipse",{cx:40,cy:0,rx:46,ry:19,fill:"#8C98B4"},i);return i}
  var fL=flip(-1),fR=flip(1);
  var head=el("g",{},B);
  el("circle",{cx:0,cy:-206,r:60,fill:"#A8B0C8"},head);
  el("ellipse",{cx:0,cy:-180,rx:36,ry:23,fill:"#EAF1FF"},head);
  [-1,1].forEach(function(s){el("path",{d:"M"+(22*s)+" -182 L"+(60*s)+" -190 M"+(22*s)+" -176 L"+(60*s)+" -172",stroke:"#8C98B4","stroke-width":2,"stroke-linecap":"round"},head);el("circle",{cx:42*s,cy:-196,r:9,fill:"#FC88A8",opacity:.45},head)});
  el("ellipse",{cx:0,cy:-193,rx:11,ry:7.5,fill:"#2C3A5C"},head);
  var mouth=el("path",{d:"M-12 -176 Q-6 -169 0 -176 Q6 -169 12 -176",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var e1=eyeG(head,-24,-220,8),e2=eyeG(head,24,-220,8),h1=happyArc(head,-24,-219,9),h2=happyArc(head,24,-219,9);
  var tw={};
  S.init=function(){};
  S.reset=function(){happy(false,[e1,e2],[h1,h2])};
  S.center=function(){return{x:SX,y:SY-120*SC,sc:SC*.85}};
  function pose(o){tr(K,"translate("+SX+" "+f1(SY+(o.bob||0))+") scale("+SC+")");tr(B,"rotate("+f1(o.rot||0)+") scale(1 "+(o.sy||1).toFixed(3)+")");tr(head,"rotate("+f1(o.hd||0)+" 0 -150)");
    var a=o.a==null?60:o.a;tr(fL,"rotate("+f1(a+(o.da||0))+")");tr(fR,"rotate("+f1(a-(o.da||0))+")");blinkT(e1,-24,-220,o.blink);blinkT(e2,24,-220,o.blink)}
  S.ambient=function(t,dt){tr(waves,"translate("+f1(Math.sin(t*.8)*18)+" 0)");foam.setAttribute("opacity",(.6+.25*Math.sin(t*1.3)).toFixed(2));tr(rays,"rotate("+f1(t*6)+")");
    cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={a:60+4*Math.sin(t*1.7),hd:Math.sin(t*.9)*5,sy:1+.012*Math.sin(t*2.4),blink:blinkK(tw,t)};if(attn)o.hd=0;pose(o)};
  S.act=function(e){var c=Math.cos(2*Math.PI*(e-.25)/.5),hit=Math.pow(Math.max(0,c),6);
    var o={a:102+44*c,bob:-6*hit,sy:1-.03*hit,hd:7*Math.sin(Math.PI*e),rot:3*Math.sin(Math.PI*2*e/1.0)};pose(o);return e>=S.ACT};
  S.fin=function(e,t){if(e>.25)happy(true,[e1,e2],[h1,h2]);var k=Math.min(1,e/.4);pose({a:60+10*Math.sin(e*3)*k,rot:4*Math.sin(e*2.4)*k,hd:-6*Math.sin(e*2.4)*k,sy:1+.012*Math.sin(t*2.4)})};
  return S}

/* ---------- ПОЙ: синичка на ветке насвистывает песенку; крупный план снизу, камера наезжает ---------- */
var SONG=[[0,.3],[.4,.12],[.56,.12],[.72,.3],[1.2,.3],[1.6,.12],[1.76,.12],[1.92,.12],[2.2,.5],[2.85,.45]];
function makeSING(R){
  var S={},V0=[300,200,1140,760],V1=[560,370,740,493];S.vb=V0.join(" ");S.ACT=3.4;S.snd="sing";
  var rays=daySky(R,560,400),cl=[cloud(R,1180,330,.9),cloud(R,860,270,.55)];
  var far=el("g",{},R),i;[[1260,960,120],[1430,900,110],[1560,1010,120],[1180,1060,90],[60,1000,120],[260,1050,100],[-40,900,90]].forEach(function(c){leafy(far,c[0],c[1],c[2],34)});
  var top=el("g",{},R);[[1380,160,100],[1540,250,110],[1300,280,80],[1600,120,100]].forEach(function(c){leafy(top,c[0],c[1],c[2],30)});
  el("path",{d:"M1500 260 C1400 300 1340 320 1250 330",stroke:"#985038","stroke-width":18,fill:"none","stroke-linecap":"round"},top);
  var br=el("g",{},R);
  el("path",{d:"M60 1030 C500 900 800 800 1000 742 C1200 686 1400 630 1700 560",stroke:"#985038","stroke-width":44,fill:"none","stroke-linecap":"round"},br);
  el("path",{d:"M60 1018 C500 888 800 788 1000 730 C1200 674 1400 618 1700 548",stroke:"#A86448","stroke-width":10,fill:"none","stroke-linecap":"round",opacity:.7},br);
  el("path",{d:"M1160 690 C1210 620 1260 590 1330 560",stroke:"#985038","stroke-width":16,fill:"none","stroke-linecap":"round"},br);
  el("path",{d:"M560 880 C540 820 560 780 600 740",stroke:"#985038","stroke-width":14,fill:"none","stroke-linecap":"round"},br);
  var leaves=[];[[1330,560,-30],[1350,540,20],[1300,548,-70],[600,740,-60],[620,724,10],[580,730,-110],[1480,604,-40],[1500,590,30],[300,960,-50],[320,944,20]].forEach(function(l,k){
    var g=el("g",{transform:"translate("+l[0]+" "+l[1]+") rotate("+l[2]+")"},br),ii=el("g",{},g);el("path",{d:"M0 0 C14 -18 46 -18 62 0 C46 18 14 18 0 0Z",fill:k%2?"#4AA010":"#2E9E46"},ii);el("path",{d:"M4 0 L56 0",stroke:"#289440","stroke-width":2.4},ii);leaves.push({g:ii,ph:rnd()*6})});
  var BX=900,BY=772,SC=2.4,K=el("g",{},R);
  var tail=el("g",{},K);el("path",{d:"M-24 -40 L-66 -4 Q-70 6 -58 6 L-16 -22Z",fill:"#6B91D6",stroke:"#6B91D6","stroke-width":6,"stroke-linejoin":"round"},tail);
  [[-6,-14,-8,0],[8,-14,8,0]].forEach(function(l){el("path",{d:"M"+l[0]+" "+l[1]+" L"+l[2]+" "+l[3]+" M"+(l[2]-6)+" "+(l[3]+1)+" l12 0",stroke:"#985038","stroke-width":3.4,fill:"none","stroke-linecap":"round"},K)});
  var body=el("g",{},K);el("ellipse",{cx:0,cy:-40,rx:38,ry:30,fill:"#FFD400"},body);
  el("path",{d:"M18 -58 Q24 -40 14 -16",stroke:"#2C3A5C","stroke-width":7,fill:"none","stroke-linecap":"round"},body);
  var wing=el("g",{},body);el("path",{d:"M-36 -44 C-22 -68 16 -68 22 -50 C10 -30 -20 -26 -36 -44Z",fill:"#6B91D6"},wing);el("path",{d:"M-26 -46 Q-4 -40 14 -50",stroke:"#98B8FC","stroke-width":3,fill:"none","stroke-linecap":"round"},wing);
  var head=el("g",{},K);
  var inner=el("ellipse",{cx:49,cy:-73,rx:7,ry:0,fill:"#FC88A8"},head);
  var lowB=el("path",{d:"M43 -73 L58 -73 Q55 -68 44 -68Z",fill:"#2C3A5C"},head);
  el("circle",{cx:24,cy:-77,r:25,fill:"#2C3A5C"},head);
  var upB=el("path",{d:"M43 -81 Q56 -78 60 -73 L43 -73Z",fill:"#2C3A5C"},head);
  el("ellipse",{cx:28,cy:-68,rx:14,ry:11,fill:"#FFFFFF"},head);el("circle",{cx:6,cy:-88,r:5,fill:"#FFFFFF",opacity:.9},head);
  el("circle",{cx:32,cy:-87,r:7,fill:"#FFFFFF"},head);var be=eyeG(head,33,-87,4.4),bh=happyArc(head,33,-86,5.5);
  var tw={},tk=0;
  S.init=function(){};
  S.reset=function(){happy(false,[be],[bh]);S.cu=0};S.cu=0;
  S.cam=function(){return vbAt(V0,V1,sst(S.cu))};
  S.center=function(){return{x:BX,y:BY-50*SC,sc:SC*.55}};
  function beakK(e){var k=0;SONG.forEach(function(n){var a=n[0],b=n[0]+n[1]+.06;if(e>=a&&e<=b){var v=Math.min(1,(e-a)/.04)*Math.min(1,(b-e)/.06);if(n[1]>.4)v*=.8+.2*Math.sin((e-a)*40);k=Math.max(k,v)}});return k}
  function pose(o){tr(K,"translate("+BX+" "+f1(BY)+") scale("+SC+")");var k=o.beak||0;
    tr(head,"rotate("+f1(o.hd||0)+" 16 -60)");tr(upB,"rotate("+f1(-24*k)+" 43 -77)");tr(lowB,"rotate("+f1(16*k)+" 43 -72)");inner.setAttribute("ry",f1(5*k));
    tr(body,"translate(0 -40) scale("+(1+.04*k).toFixed(3)+" "+(1+.06*k).toFixed(3)+") translate(0 40)");tr(tail,"rotate("+f1(o.tl||0)+" -26 -36)");tr(wing,"rotate("+f1(o.wg||0)+" 0 -48)");blinkT(be,33,-87,o.blink)}
  S.ambient=function(t,dt){leaves.forEach(function(l){tr(l.g,"rotate("+f1(Math.sin(t*1.5+l.ph)*6)+")")});tr(rays,"rotate("+f1(t*6)+")");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*80)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={hd:Math.sin(t*1.1)*6,tl:Math.sin(t*2)*4,blink:blinkK(tw,t)};var ht=idleTimer(tw,"hop",t,1.6,2.8);if(ht<.3)o.hd+=Math.sin(ht*20)*12;if(attn)o.hd=-4;pose(o)};
  S.act=function(e,dt){S.cu=clamp(e/S.ACT,0,1);var k=beakK(e);pose({beak:k,hd:-14*k-6*Math.sin(e*3),tl:-10*k+4*Math.sin(e*9),wg:-6*k});return e>=S.ACT};
  S.fin=function(e,t){S.cu=1;if(e>.25)happy(true,[be],[bh]);var k=Math.min(1,e/.4);pose({hd:-6+Math.sin(e*3)*6*k,tl:Math.sin(e*8)*10*Math.max(0,1-e/1.5),wg:-8*Math.abs(Math.sin(e*10))*Math.max(0,1-e/1.2)})};
  return S}

/* ---------- РИСУЙ: свинка рисует солнышко на листе; сверху наискосок, камера стоит ---------- */
function makeDRAW(R){
  var S={};S.vb="250 180 1100 733";S.ACT=4.0;S.snd="draw";
  bgRect(R,"url(#gDay)");var cl=[cloud(R,560,190,.7),cloud(R,1100,170,.55)];
  groundG(R,"g3dFar","M-1600 300 L0 300 C300 270 700 290 1000 276 C1260 266 1450 284 1600 280 L3200 280","#CCF0A0");
  var trees=el("g",{},R);[[380,300,1.1],[520,292,.8],[1180,286,1],[1330,290,.85]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  groundG(R,"g3dG","M-1600 340 L0 340 C400 324 900 336 1600 330 L3200 330","#88A848");
  var tex=el("g",{},R);blades(tex,320,-100,1700,350,900,"#6E9A30",14,2.6);
  var flowers=[];[[330,520,1.3],[420,760,1.5],[1240,480,1.3],[1290,780,1.5],[1140,370,1],[480,400,1]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  // свинка стоит за листом
  var PX=800,PY=632,SC=1.5;
  el("ellipse",{cx:PX,cy:PY+4,rx:70*SC,ry:12*SC,fill:"#2C3A5C",opacity:.13},R);var P=el("g",{},R);
  var PB=el("g",{},P);
  [-1,1].forEach(function(s){el("ellipse",{cx:26*s,cy:-12,rx:15,ry:16,fill:"#F8B0C0"},PB);el("ellipse",{cx:26*s,cy:-2,rx:13,ry:6,fill:"#C47860"},PB)});
  el("ellipse",{cx:0,cy:-74,rx:62,ry:64,fill:"#FCD0DC"},PB);
  var armL=strokeLeg(PB,"M-50 -104 Q-66 -80 -62 -54","#F8B0C0",22);
  var head=el("g",{},PB);
  [-1,1].forEach(function(s){el("path",{d:"M"+(24*s)+" -196 Q"+(46*s)+" -232 "+(52*s)+" -182Z",fill:"#F8B0C0","stroke-linejoin":"round",stroke:"#F8B0C0","stroke-width":8},head)});
  el("circle",{cx:0,cy:-156,r:54,fill:"#FCD0DC"},head);
  el("ellipse",{cx:0,cy:-142,rx:23,ry:17,fill:"#FC88A8"},head);[-8,8].forEach(function(x){el("ellipse",{cx:x,cy:-142,rx:4,ry:6,fill:"#C47860"},head)});
  [-1,1].forEach(function(s){el("circle",{cx:38*s,cy:-140,r:9,fill:"#FC88A8",opacity:.45},head)});
  var mouth=el("path",{d:"M-10 -118 Q0 -110 10 -118",stroke:"#C47860","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var pe1=eyeG(head,-20,-170,6.5),pe2=eyeG(head,20,-170,6.5),ph1=happyArc(head,-20,-169,7),ph2=happyArc(head,20,-169,7);
  // лист
  var M=[1,0,-.08,.82,562,646];function PP(x,y){return{x:M[4]+x+M[2]*y,y:M[5]+y*M[3]}}
  el("path",{d:"M"+[[0,0],[500,0],[500,300],[0,300]].map(function(p){var q=PP(p[0],p[1]);return f1(q.x+8)+" "+f1(q.y+10)}).join(" L")+"Z",fill:"#2C3A5C",opacity:.12},R);
  var paper=el("g",{transform:"matrix("+M.join(" ")+")"},R);
  el("rect",{x:0,y:0,width:500,height:300,rx:10,fill:"#FFFFFF"},paper);
  var CX=250,CY=140,CR=56;
  var sunF=el("circle",{cx:CX,cy:CY,r:CR,fill:"#FFD400",opacity:0},paper);
  var circ=el("path",{d:"M"+(CX+CR)+" "+CY+" A"+CR+" "+CR+" 0 1 1 "+(CX+CR)+" "+(CY-.01),stroke:"#F97A4F","stroke-width":9,fill:"none","stroke-linecap":"round"},paper);
  var RAYS=[];for(var k=0;k<8;k++){var a=-Math.PI/2+k*Math.PI/4,x1=CX+Math.cos(a)*(CR+18),y1=CY+Math.sin(a)*(CR+18),x2=CX+Math.cos(a)*(CR+50),y2=CY+Math.sin(a)*(CR+50);
    RAYS.push({p:el("path",{d:"M"+f1(x1)+" "+f1(y1)+" L"+f1(x2)+" "+f1(y2),stroke:"#F97A4F","stroke-width":9,fill:"none","stroke-linecap":"round","stroke-dasharray":"32 32","stroke-dashoffset":32,opacity:0},paper),x1:x1,y1:y1,x2:x2,y2:y2})}
  var face=el("g",{opacity:0},paper);el("circle",{cx:CX-18,cy:CY-10,r:6,fill:"#F97A4F"},face);el("circle",{cx:CX+18,cy:CY-10,r:6,fill:"#F97A4F"},face);el("path",{d:"M"+(CX-22)+" "+(CY+14)+" Q"+CX+" "+(CY+34)+" "+(CX+22)+" "+(CY+14),stroke:"#F97A4F","stroke-width":7,fill:"none","stroke-linecap":"round"},face);
  // рука с кисточкой
  var arm=el("path",{d:"",stroke:"#F8B0C0","stroke-width":22*SC,fill:"none","stroke-linecap":"round"},R);
  var brush=el("g",{},R);el("path",{d:"M0 -150 L0 -26",stroke:"#C47860","stroke-width":12,"stroke-linecap":"round"},brush);el("rect",{x:-8,y:-30,width:16,height:14,rx:3,fill:"#BABABA"},brush);el("path",{d:"M-8 -18 Q0 6 8 -18Z",fill:"#F97A4F",stroke:"#F97A4F","stroke-width":4,"stroke-linejoin":"round"},brush);
  var hand=el("ellipse",{rx:15*SC,ry:13*SC,fill:"#F8B0C0"},R);
  var CL=2*Math.PI*CR,tw={},REST={x:CX+130,y:CY-60};
  S.init=function(){circ.setAttribute("stroke-dasharray",f1(CL+4)+" "+f1(CL+4))};
  S.reset=function(){circ.setAttribute("stroke-dashoffset",f1(CL+4));circ.setAttribute("opacity",0);sunF.setAttribute("opacity",0);face.setAttribute("opacity",0);RAYS.forEach(function(r){r.p.setAttribute("stroke-dashoffset",32);r.p.setAttribute("opacity",0)});happy(false,[pe1,pe2],[ph1,ph2])};
  S.center=function(){return{x:PX,y:PY-110*SC,sc:SC*.8}};
  function pose(o){var tip=PP(o.tx,o.ty),sh={x:PX+52*SC,y:PY-104*SC},lean=clamp((tip.x-PX)/30,-6,6)*(o.lk==null?1:o.lk);
    tr(P,"translate("+PX+" "+f1(PY)+") scale("+SC+")");tr(PB,"rotate("+f1(lean*.5)+" 0 0) translate(0 "+f1(o.bob||0)+")");tr(head,"rotate("+f1((o.hd||0)+lean)+" 0 -110)");
    var hx=tip.x+22,hy=tip.y-150*.82;hand.setAttribute("cx",f1(hx));hand.setAttribute("cy",f1(hy));
    arm.setAttribute("d","M"+f1(sh.x)+" "+f1(sh.y)+" Q"+f1((sh.x+hx)/2+40)+" "+f1((sh.y+hy)/2)+" "+f1(hx)+" "+f1(hy));
    tr(brush,"translate("+f1(tip.x)+" "+f1(tip.y)+") rotate(8) scale(.82)");blinkT(pe1,-20,-170,o.blink);blinkT(pe2,20,-170,o.blink)}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*3)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={tx:REST.x+Math.sin(t*1.3)*6,ty:REST.y,hd:Math.sin(t*.9)*4,blink:blinkK(tw,t),lk:.3};if(attn){o.hd=0;o.lk=0}pose(o)};
  S.act=function(e){var o={hd:10,bob:0},tx,ty;
    if(e<.3){var u=sst(e/.3);tx=lerp(REST.x,CX+CR,u);ty=lerp(REST.y,CY,u)}
    else if(e<1.8){var a=(e-.3)/1.5,an=a*2*Math.PI;tx=CX+CR*Math.cos(an);ty=CY+CR*Math.sin(an);circ.setAttribute("opacity",1);circ.setAttribute("stroke-dashoffset",f1((CL+4)*(1-a)));o.bob=Math.sin(e*12)*1.5}
    else if(e<2.2){circ.setAttribute("stroke-dashoffset",0);var b=(e-1.8)/.4;sunF.setAttribute("opacity",b.toFixed(2));tx=CX+Math.sin(b*30)*30*Math.sin(Math.PI*b);ty=CY+Math.cos(b*24)*24*Math.sin(Math.PI*b);o.bob=Math.sin(e*30)*1.5}
    else if(e<3.8){sunF.setAttribute("opacity",1);var r=(e-2.2)/.2,ri=Math.min(7,Math.floor(r)),ru=r-ri;
      RAYS.forEach(function(ra,i){ra.p.setAttribute("opacity",i<=ri?1:0);ra.p.setAttribute("stroke-dashoffset",i<ri?0:i>ri?32:f1(32*(1-sst(ru*1.4))))});
      var R0=RAYS[ri],q=sst(ru*1.4),back=ru>.75?sst((ru-.75)/.25):0,nx=RAYS[Math.min(7,ri+1)];tx=lerp(lerp(R0.x1,R0.x2,q),nx.x1,back);ty=lerp(lerp(R0.y1,R0.y2,q),nx.y1,back)}
    else{RAYS.forEach(function(ra){ra.p.setAttribute("opacity",1);ra.p.setAttribute("stroke-dashoffset",0)});var c=sst((e-3.8)/.2),L=RAYS[7];tx=lerp(L.x2,REST.x,c);ty=lerp(L.y2,REST.y,c);o.hd=10*(1-c)}
    if(e>3.4)face.setAttribute("opacity",clamp((e-3.4)/.3,0,1).toFixed(2));
    o.tx=tx;o.ty=ty;pose(o);return e>=S.ACT};
  S.fin=function(e,t){if(e>.25)happy(true,[pe1,pe2],[ph1,ph2]);var k=Math.min(1,e/.4);pose({tx:REST.x,ty:REST.y-30*Math.abs(Math.sin(e*4))*Math.max(0,1-e/1.6),hd:Math.sin(e*3)*6*k,bob:-Math.abs(Math.sin(e*5))*4*Math.max(0,1-e/1.6),lk:0})};
  return S}

/* ---------- СПИ: лисёнок под деревом зевает, сворачивается и засыпает; вечер, камера отъезжает ---------- */
function makeSLEEP(R){
  var S={},V0=[420,490,760,507],V1=[80,170,1500,1000];S.vb=V0.join(" ");S.ACT=3.4;S.snd="sleep";
  bgRect(R,"url(#gDay)");var dusk=bgRect(R,"url(#gDusk)");lgrad("g3Night",[[0,"#1E2A4A"],[.55,"#2C3A5C"],[1,"#6B91D6"]],0,760);var night=bgRect(R,"url(#g3Night)");
  var stars=el("g",{},R);for(var si=0;si<40;si++){var sx=rr(60,1600),sy=rr(150,640);if(sx>230&&sx<620&&sy>180)continue;if(Math.hypot(sx-1080,sy-340)<120)continue;el("circle",{cx:f1(sx),cy:f1(sy),r:f1(rr(2,4.5)),fill:"#FFF8A8"},stars)}
  var moon=el("g",{transform:"translate(1080 340)"},R);el("circle",{r:96,fill:"url(#gMoon)"},moon);el("path",{d:"M14 -44 A46 46 0 1 0 14 44 A52 52 0 0 1 14 -44Z",fill:"#FFD400"},moon);
  var cl=[cloud(R,420,360,.8),cloud(R,1400,300,.6)];
  groundG(R,"g3sFar","M-1600 700 L0 700 C300 672 700 690 1000 680 C1260 672 1450 686 1600 682 L3200 682","#CCF0A0");
  var bush1=el("g",{},R);bush(bush1,1240,700,1.4);bush(bush1,1420,706,1);
  var tr0=el("g",{},R);el("path",{d:"M360 830 C380 700 384 560 392 420 L456 420 C462 560 470 700 500 830Z",fill:"#985038"},tr0);
  el("path",{d:"M340 834 Q370 812 380 790 M500 834 Q478 812 476 790",stroke:"#985038","stroke-width":18,fill:"none","stroke-linecap":"round"},tr0);
  [[420,330,120],[320,380,90],[520,380,96],[400,250,90],[470,280,80],[260,440,60],[580,450,60]].forEach(function(c,k){leafBall(tr0,c[0],c[1],c[2],k)});
  for(var i=0;i<6;i++)el("circle",{cx:f1(rr(300,540)),cy:f1(rr(240,400)),r:f1(rr(16,30)),fill:"#70CC10",opacity:.45},tr0);
  groundG(R,"g3sG","M-1600 820 L0 820 C400 800 900 830 1600 812 L3200 812","#88A848");
  var tex=el("g",{},R);blades(tex,360,-100,1700,826,1180,"#6E9A30",16,2.8);
  var flowers=[];[[600,900,1.4],[1160,880,1.5],[1340,960,1.6],[240,950,1.5],[980,1000,1.6]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var tint=bgRect(R,"#6B91D6"),tint2=bgRect(R,"#2C3A5C");
  var FX=820,FY=836,SC=1.6;
  el("ellipse",{cx:FX-20,cy:FY+2,rx:110*SC,ry:11*SC,fill:"#2C3A5C",opacity:.13},R);
  var F=el("g",{},R),FB=el("g",{},F);
  el("ellipse",{cx:-8,cy:-34,rx:76,ry:34,fill:"#F97A4F"},FB);
  el("ellipse",{cx:-44,cy:-14,rx:30,ry:16,fill:"#E0683E"},FB);
  el("ellipse",{cx:46,cy:-36,rx:20,ry:22,fill:"#FFFFFF"},FB);
  [[56,-8],[70,-3]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:30,ry:9,fill:"#E0683E"},FB);el("ellipse",{cx:p[0]+24,cy:p[1],rx:8,ry:8,fill:"#985038"},FB)});
  var head=el("g",{},FB);
  el("path",{d:"M64 -96 Q68 -130 90 -104Z",fill:"#F97A4F",stroke:"#F97A4F","stroke-width":8,"stroke-linejoin":"round"},head);el("path",{d:"M70 -100 Q72 -118 83 -104Z",fill:"#2C3A5C"},head);
  el("path",{d:"M94 -102 Q106 -132 114 -94Z",fill:"#F97A4F",stroke:"#F97A4F","stroke-width":8,"stroke-linejoin":"round"},head);el("path",{d:"M99 -100 Q106 -118 110 -98Z",fill:"#2C3A5C"},head);
  el("circle",{cx:88,cy:-72,r:34,fill:"#F97A4F"},head);
  el("path",{d:"M84 -64 Q112 -72 134 -63 Q122 -44 94 -46Z",fill:"#FFFFFF"},head);
  var mouth=el("ellipse",{cx:112,cy:-52,rx:0,ry:0,fill:"#7A3E2C"},head),tongue=el("ellipse",{cx:112,cy:-48,rx:0,ry:0,fill:"#FC88A8"},head);
  el("circle",{cx:134,cy:-63,r:6.5,fill:"#2C3A5C"},head);el("circle",{cx:82,cy:-58,r:7,fill:"#FC88A8",opacity:.4},head);
  var fe=eyeG(head,100,-79,5.5),sl=el("path",{d:"M93 -79 q7 6 14 0",stroke:"#2C3A5C","stroke-width":3.4,fill:"none","stroke-linecap":"round",opacity:0},head),smile=el("path",{d:"M108 -54 q8 5 15 -1",stroke:"#2C3A5C","stroke-width":2.8,fill:"none","stroke-linecap":"round",opacity:0},head);
  var tail=el("path",{d:"",stroke:"#F97A4F","stroke-width":36,fill:"none","stroke-linecap":"round"},FB),tip=el("circle",{r:18,fill:"#FFFFFF"},FB);
  var T0=[-62,-30,-110,-36,-150,-14,-196,-10],T1=[-62,-30,-120,6,-20,22,64,2],tw={};
  S.init=function(){};
  S.reset=function(){S.cu=0;S.night=0;S.deep=0;sl.setAttribute("opacity",0);smile.setAttribute("opacity",0);fe.setAttribute("opacity",1)};S.cu=0;S.night=0;S.deep=0;
  S.cam=function(){return vbAt(V0,V1,sst(S.cu))};
  S.center=function(){return{x:FX,y:FY-50*SC,sc:SC*.85}};
  function pose(o){tr(F,"translate("+FX+" "+FY+") scale("+SC+")");tr(FB,"scale(1 "+(o.br||1).toFixed(3)+")");
    tr(head,"translate(0 "+f1(o.hy||0)+") rotate("+f1(o.ha||0)+" 44 -48)");var m=o.m||0;mouth.setAttribute("rx",f1(8*m));mouth.setAttribute("ry",f1(10*m));tongue.setAttribute("rx",f1(5*m));tongue.setAttribute("ry",f1(4*m));
    var c=o.curl||0,p=T0.map(function(v,i){return lerp(v,T1[i],c)});p[2]+=(o.tw||0);p[4]+=(o.tw||0);p[6]+=(o.tw||0)*1.4;
    tail.setAttribute("d","M"+p[0]+" "+p[1]+" C"+f1(p[2])+" "+f1(p[3])+" "+f1(p[4])+" "+f1(p[5])+" "+f1(p[6])+" "+f1(p[7]));tip.setAttribute("cx",f1(p[6]));tip.setAttribute("cy",f1(p[7]));
    blinkT(fe,100,-79,o.blink)}
  S.ambient=function(t,dt){var n=S.night,m=S.deep;dusk.setAttribute("opacity",(.55+.45*n).toFixed(3));night.setAttribute("opacity",m.toFixed(3));stars.setAttribute("opacity",(m*.95).toFixed(3));tint.setAttribute("opacity",(.2*n).toFixed(3));tint2.setAttribute("opacity",(.32*m).toFixed(3));moon.setAttribute("opacity",n.toFixed(3));cl.forEach(function(c){c.g.setAttribute("opacity",(1-.85*m).toFixed(3))});
    flowersSway(flowers,t,dt,0,0,false);cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*3)*80)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={ha:Math.sin(t*.9)*3,blink:blinkK(tw,t),tw:Math.sin(t*1.6)*6,br:1+.012*Math.sin(t*2)};if(attn)o.ha=-4;pose(o)};
  S.act=function(e){S.cu=clamp(e/S.ACT,0,1);S.night=sst(e/1.6);S.deep=sst((e-1.2)/2.2);var o={br:1+.012*Math.sin(e*2)};
    var y=seg(e,0,.5)*(1-seg(e,.9,1.3));o.m=y;o.ha=-12*y;o.blink=Math.min(1,y*1.2);
    var d=seg(e,1.0,2.0);o.ha=lerp(o.ha,28,d);o.hy=6*d;
    if(e>1.9){o.blink=1;fe.setAttribute("opacity",clamp(1-(e-1.9)/.2,0,1).toFixed(2));sl.setAttribute("opacity",clamp((e-1.9)/.2,0,1).toFixed(2))}
    o.curl=seg(e,1.4,2.7);o.br=1+.03*Math.sin(Math.max(0,e-2.2)*3)*seg(e,2.2,2.6);pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.cu=1;S.night=1;S.deep=1;fe.setAttribute("opacity",0);sl.setAttribute("opacity",1);if(e>.25)smile.setAttribute("opacity",clamp((e-.25)/.3,0,1).toFixed(2));
    pose({ha:28,hy:6,curl:1,br:1+.03*Math.sin(e*2.6),blink:1,tw:Math.sin(e*1.3)*2})};
  return S}
