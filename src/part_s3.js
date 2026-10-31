
/* ==========================================================
   ЗВЕЗДА 3: КАЧАЙСЯ · СЯДЬ · ЛЯГ · ВСТАНЬ
   ========================================================== */
function lgrad(id,stops,y1,y2){if(document.getElementById(id))return;var g=el("linearGradient",{id:id,gradientUnits:"userSpaceOnUse",x1:0,y1:y1,x2:0,y2:y2},DEFS);stops.forEach(function(s){el("stop",{offset:s[0],"stop-color":s[1]},g)})}
function eyeG(p,x,y,r){var g=el("g",{},p);el("circle",{cx:x,cy:y,r:r,fill:"#2C3A5C"},g);el("circle",{cx:x+r*.35,cy:y-r*.4,r:r*.36,fill:"#FFFFFF"},g);return g}
function happyArc(p,x,y,w,col){return el("path",{d:"M"+(x-w)+" "+(y+1)+" q"+w+" "+(-w*1.2)+" "+(2*w)+" 0",stroke:col||"#2C3A5C","stroke-width":Math.max(3,w*.55),fill:"none","stroke-linecap":"round",opacity:0},p)}
function blinkT(e,cx,cy,k){tr(e,"translate("+cx+" "+cy+") scale(1 "+(1-(k||0)*.9).toFixed(2)+") translate("+(-cx)+" "+(-cy)+")")}

/* ---------- КАЧАЙСЯ: обезьянка на лиане между пальмами; камера стоит ---------- */
function palm(R,x,y,h,lean,s,bananas){var g=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},R),n=9,px=0,py=0;
  for(var i=0;i<n;i++){var k=i/n,k2=(i+1)/n,x1=lean*k*k*h,x2=lean*k2*k2*h,y1=-h*k,y2=-h*k2,w=lerp(30,20,k);
    el("path",{d:"M"+f1(x1-w)+" "+f1(y1)+" L"+f1(x2-w*.92)+" "+f1(y2-4)+" L"+f1(x2+w*.92)+" "+f1(y2-4)+" L"+f1(x1+w)+" "+f1(y1)+"Z",fill:i%2?"#C47860":"#B86E56"},g);
    el("path",{d:"M"+f1(x2-w*.92)+" "+f1(y2-2)+" L"+f1(x2+w*.92)+" "+f1(y2-2),stroke:"#985038","stroke-width":4,opacity:.6},g);px=x2;py=y2}
  var top=el("g",{transform:"translate("+f1(px)+" "+f1(py)+")"},g);
  if(bananas){var b=el("g",{transform:"translate(14 18)"},top);for(var j=0;j<6;j++)el("path",{d:"M0 0 q"+(-26+j*10)+" 26 "+(-16+j*6)+" 58",stroke:"#FFD400","stroke-width":13,fill:"none","stroke-linecap":"round"},b);el("circle",{cx:0,cy:0,r:9,fill:"#4AA010"},b)}
  el("circle",{cx:-16,cy:10,r:14,fill:"#985038"},top);el("circle",{cx:12,cy:14,r:14,fill:"#7A3E2C"},top);
  [[-150,40,-20],[-120,-30,-55],[-40,-70,-85],[60,-70,-100],[140,-24,-130],[160,44,-160],[-10,40,90]].forEach(function(f,i){var fr=el("g",{transform:"rotate("+f[2]+")"},top);
    el("path",{d:"M0 0 Q90 -40 190 10 Q100 -10 0 12Z",fill:i%2?"#289440":"#4AA010"},fr);for(var k2=1;k2<8;k2++)el("path",{d:"M"+(k2*22)+" "+f1(-14+k2*1.8)+" l14 26",stroke:i%2?"#289440":"#4AA010","stroke-width":9,"stroke-linecap":"round"},fr)});
  return g}
function makeSWING(R){
  var S={};S.vb="275 95 1050 700";S.ACT=5.4;S.snd="swing";
  lgrad("gJungle",[[0,"#D3E2FF"],[.6,"#EAF1FF"],[1,"#CCF0A0"]],0,700);
  bgRect(R,"url(#gJungle)");
  hill(R,"swFar","M-1600 640 L0 640 C300 610 700 630 1000 620 C1260 612 1440 606 1600 610 L3200 610","#CCF0A0");R.appendChild(grain(null,["swFar"]));
  [[420,640,260,.25,.55],[620,632,220,-.2,.45],[980,624,250,.2,.5],[1180,630,230,-.25,.48]].forEach(function(p){palm(R,p[0],p[1],p[2],p[3],p[4],false)});
  hill(R,"swG","M-1600 760 L0 760 C300 740 700 752 1000 746 C1260 742 1440 736 1600 740 L3200 740","#88A848");R.appendChild(grain(null,["swG"]));
  var tex=el("g",{},R);blades(tex,260,-100,1700,740,900,"#6E9A30",16,2.8);
  palm(R,330,820,700,.35,1,true);palm(R,1300,820,720,-.35,1,true);
  function fern(x,y,s,col){var g=el("g",{transform:"translate("+f1(x)+" "+f1(y)+") scale("+s+")"},R);for(var k=-3;k<=3;k++)el("ellipse",{cx:k*22,cy:-60,rx:18,ry:62,fill:col,transform:"rotate("+(k*18)+" 0 0)"},g);return g}
  [[420,880,1.1,"#289440"],[1160,890,1.2,"#4AA010"],[820,910,1,"#2E9E46"]].forEach(function(f){fern(f[0],f[1],f[2],f[3])});
  // the liana hangs from the canopy above the frame
  var AX=800,AY=86,L=330,SW=el("g",{},R);el("path",{d:"M"+AX+" -200 L"+AX+" "+AY+" q14 "+(L/2)+" 0 "+L,stroke:"#4AA010","stroke-width":9,fill:"none","stroke-linecap":"round"},SW);
  [[AX+6,AY+90],[AX+9,AY+180],[AX+5,AY+270]].forEach(function(l,i){var lx=l[0]+(i%2?14:-14);el("ellipse",{cx:lx,cy:l[1],rx:16,ry:8,fill:"#70CC10",transform:"rotate("+(i%2?30:-30)+" "+lx+" "+l[1]+")"},SW)});
  var MK=el("g",{transform:"translate("+AX+" "+(AY+L)+") scale(1.55)"},SW),MB=el("g",{},MK);
  var tail=el("path",{d:"M-28 150 C-70 160 -84 212 -52 222 C-30 228 -28 204 -44 204",stroke:"#985038","stroke-width":10,fill:"none","stroke-linecap":"round"},MB);
  var legs=el("g",{},MB);el("path",{d:"M-12 150 C-14 176 -12 196 -11 210",stroke:"#985038","stroke-width":15,fill:"none","stroke-linecap":"round"},legs);el("path",{d:"M15 150 C17 176 18 198 19 212",stroke:"#985038","stroke-width":15,fill:"none","stroke-linecap":"round"},legs);
  el("ellipse",{cx:-12,cy:214,rx:13,ry:8,fill:"#F8B888"},legs);el("ellipse",{cx:20,cy:216,rx:13,ry:8,fill:"#F8B888"},legs);
  el("path",{d:"M0 0 C-1 30 0 60 2 90",stroke:"#985038","stroke-width":16,fill:"none","stroke-linecap":"round"},MB);el("circle",{cx:0,cy:0,r:11,fill:"#F8B888"},MB);
  el("ellipse",{cx:4,cy:122,rx:38,ry:48,fill:"#985038"},MB);el("ellipse",{cx:8,cy:130,rx:24,ry:32,fill:"#F8B888"},MB);
  var armB=el("g",{},MB);el("path",{d:"M-16 98 C-28 116 -30 138 -27 156",stroke:"#7A3E2C","stroke-width":14,fill:"none","stroke-linecap":"round"},armB);el("circle",{cx:-27,cy:160,r:9,fill:"#F8B888"},armB);
  var head=el("g",{},MB);el("circle",{cx:-10,cy:52,r:14,fill:"#985038"},head);el("circle",{cx:-10,cy:52,r:7,fill:"#F8B888"},head);el("circle",{cx:58,cy:50,r:14,fill:"#985038"},head);el("circle",{cx:58,cy:50,r:7,fill:"#F8B888"},head);
  el("circle",{cx:24,cy:62,r:38,fill:"#985038"},head);el("circle",{cx:16,cy:56,r:13,fill:"#F8B888"},head);el("circle",{cx:34,cy:56,r:13,fill:"#F8B888"},head);el("ellipse",{cx:25,cy:74,rx:22,ry:16,fill:"#F8B888"},head);
  var me1=eyeG(head,17,57,4.6),me2=eyeG(head,33,57,4.6),mh1=happyArc(head,17,58,5),mh2=happyArc(head,33,58,5);
  el("circle",{cx:21,cy:70,r:1.6,fill:"#2C3A5C"},head);el("circle",{cx:29,cy:70,r:1.6,fill:"#2C3A5C"},head);el("path",{d:"M17 78 q8 7 16 0",stroke:"#2C3A5C","stroke-width":2.6,fill:"none","stroke-linecap":"round"},head);
  el("circle",{cx:7,cy:70,r:4.5,fill:"#FC88A8",opacity:.55},head);el("circle",{cx:43,cy:70,r:4.5,fill:"#FC88A8",opacity:.55},head);
  var tw={blink:2,kick:3,scratch:5},th=0,lag={x:0,v:0},wv={x:0,v:0},P=1.8;
  S.init=function(){};
  S.reset=function(){th=0;lag.x=0;lag.v=0;wv.x=0;wv.v=0;tw.scratch=999;tw.kick=999;[mh1,mh2].forEach(function(h){h.setAttribute("opacity",0)});[me1,me2].forEach(function(h){h.setAttribute("opacity",1)})};
  function mpos(){var a=th*Math.PI/180;return{x:AX-Math.sin(a)*(L+170),y:AY+Math.cos(a)*(L+170)}}
  S.center=function(){var p=mpos();return{x:p.x,y:p.y,sc:1.55}};
  function pose(o,dt){var prev=th;th=o.th;var w=dt>0?(th-prev)/dt:0;spring(lag,-w*.1,30,7,dt||0);
    tr(SW,"rotate("+f1(th)+" "+AX+" "+AY+")");tr(legs,"rotate("+f1(clamp(lag.x,-30,30)+(o.kick||0))+" 0 150)");tr(tail,"rotate("+f1(clamp(lag.x*1.2,-35,35)+(o.tl||0))+" -28 150)");
    if(dt>0)spring(wv,o.wave||0,70,13,dt);tr(armB,"rotate("+f1(wv.x+clamp(lag.x*.5,-20,20))+" -16 98)");tr(head,"rotate("+f1(o.hd||0)+" 24 90)");
    blinkT(me1,17,57,o.blink);blinkT(me2,33,57,o.blink)}
  S.ambient=function(){};
  S.idle=function(t,dt,attn){if(tw.scratch>900){tw.scratch=t+4;tw.kick=t+2.5}var o={th:Math.sin(t*1.3)*1.2,hd:Math.sin(t*1.1)*4,tl:Math.sin(t*2)*6};
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    if(t>tw.kick){tw.kT=t;tw.kick=t+rr(2.4,3.8)}var kt=t-(tw.kT||-9);if(kt<.5)o.kick=Math.sin(kt*Math.PI/.25)*10;
    if(t>tw.scratch){tw.sT=t;tw.scratch=t+rr(4,6)}var st=t-(tw.sT||-9);if(st<.8)o.wave=-30-Math.abs(Math.sin(st*20))*10;
    if(attn)o.hd=-6;pose(o,dt)};
  S.act=function(e,dt){var A=Math.min(1,e/.9)*42;A=A*(e<.9?Math.sin(Math.PI/2*e/.9):1);var o={th:A*Math.sin(2*Math.PI*e/P),hd:-4};o.wave=-14*Math.sin(2*Math.PI*e/P);pose(o,dt);return e>=S.ACT};
  S.fin=function(e,t,dt){var A=42*Math.exp(-1.3*e);var o={th:A*Math.sin(2*Math.PI*(S.ACT+e)/P),hd:Math.sin(e*3)*4};o.wave=-60-18*Math.sin(e*8)*Math.max(0,1-e/2);
    if(e>.3){[mh1,mh2].forEach(function(h){h.setAttribute("opacity",1)});[me1,me2].forEach(function(h){h.setAttribute("opacity",0)})}pose(o,dt)};
  return S}

/* ---------- СЯДЬ: собака смотрит прямо на нас и садится ---------- */
function makeSIT(R){
  var S={};S.vb="200 150 1200 800";S.ACT=1.6;S.snd="sit";
  daySky(R,1240,260);
  var fence=el("g",{},R);for(var i=0;i<22;i++){var x=-40+i*90;el("path",{d:"M"+x+" 520 V340 l30 -26 l30 26 V520Z",fill:i%2?"#D0A090":"#F8B888"},fence)}
  el("rect",{x:-60,y:390,width:2000,height:20,rx:6,fill:"#C47860"},fence);el("rect",{x:-60,y:460,width:2000,height:20,rx:6,fill:"#C47860"},fence);
  hill(R,"sitG","M-1600 520 L0 520 C400 510 900 516 1600 512 L3200 512","#88A848");R.appendChild(grain(null,["sitG"]));
  var tex=el("g",{},R);blades(tex,360,-100,1700,515,960,"#6E9A30",16,2.8);
  var dh=el("g",{transform:"translate(430 640)"},R);el("path",{d:"M-150 0 V-170 H150 V0Z",fill:"#6B91D6"},dh);el("path",{d:"M-176 -160 L0 -280 L176 -160 L156 -146 L0 -252 L-156 -146Z",fill:"#F97A4F"},dh);
  el("path",{d:"M-60 0 V-80 A60 60 0 0 1 60 -80 V0Z",fill:"#2C3A5C"},dh);for(var k=0;k<4;k++)el("path",{d:"M-150 "+(-34-k*36)+" H150",stroke:"#98B8FC","stroke-width":4,opacity:.7},dh);
  el("rect",{x:-60,y:-214,width:120,height:30,rx:8,fill:"#FFFCDC"},dh);
  var bowl=el("g",{transform:"translate(1160 800)"},R);el("ellipse",{cx:0,cy:-6,rx:66,ry:18,fill:"#2C3A5C",opacity:.15},bowl);el("path",{d:"M-62 -40 L-48 0 H48 L62 -40Z",fill:"#F97A4F"},bowl);el("ellipse",{cx:0,cy:-40,rx:62,ry:14,fill:"#FDDDD0"},bowl);
  var bone=el("g",{transform:"translate(0 -52) rotate(-12)"},bowl);el("rect",{x:-34,y:-7,width:68,height:14,rx:7,fill:"#FFFCDC"},bone);[[-34,-7],[-34,7],[34,-7],[34,7]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:10,fill:"#FFFCDC"},bone)});
  var flowers=[];[[300,900,1.6],[620,940,1.5],[1000,940,1.4],[1330,920,1.6],[1460,700,1.2],[240,700,1.2]].forEach(function(f,i){flower(R,f[0],f[1],f[2],i%4,flowers)});
  var DX=800,DY=860,SC=1.65,D=el("g",{transform:"translate("+DX+" "+DY+") scale("+SC+")"},R);
  el("ellipse",{cx:0,cy:0,rx:100,ry:14,fill:"#2C3A5C",opacity:.15},D);
  var hind=el("g",{},D);[[-50,-36],[50,-36]].forEach(function(c){el("ellipse",{cx:c[0],cy:c[1],rx:38,ry:32,fill:"#C8987E"},hind)});
  [[-66,-6],[66,-6]].forEach(function(c){el("ellipse",{cx:c[0],cy:c[1],rx:22,ry:10,fill:"#FFFCDC"},hind)});
  var legsF=el("g",{},D),body=el("g",{},D);
  var tail=el("g",{},body);el("path",{d:"M30 -66 Q78 -70 102 -100",stroke:"#D0A090","stroke-width":16,fill:"none","stroke-linecap":"round"},tail);el("circle",{cx:103,cy:-102,r:8.5,fill:"#FFFCDC"},tail);
  el("ellipse",{cx:0,cy:-112,rx:56,ry:68,fill:"#D0A090"},body);el("ellipse",{cx:0,cy:-100,rx:30,ry:46,fill:"#FFFCDC"},body);
  el("path",{d:"M-40 -150 Q0 -132 40 -150",stroke:"#F97A4F","stroke-width":10,fill:"none","stroke-linecap":"round"},body);el("circle",{cx:0,cy:-134,r:8,fill:"#FFD400"},body);
  el("path",{d:"M-44 -100 C-46 -70 -42 -36 -40 -12 L-10 -12 C-8 -40 -6 -74 -6 -100 A19 19 0 0 0 -44 -100Z",fill:"#D0A090"},legsF);el("path",{d:"M44 -100 C46 -70 42 -36 40 -12 L10 -12 C8 -40 6 -74 6 -100 A19 19 0 0 1 44 -100Z",fill:"#D0A090"},legsF);
  el("path",{d:"M-38 -60 q10 -6 22 0 M38 -60 q-10 -6 -22 0",stroke:"#C8987E","stroke-width":3,fill:"none","stroke-linecap":"round"},legsF);
  [[-25,-8],[25,-8]].forEach(function(c){el("ellipse",{cx:c[0],cy:c[1],rx:22,ry:11,fill:"#FFFCDC"},legsF);el("path",{d:"M"+(c[0]-7)+" -6 v-6 M"+c[0]+" -5 v-7 M"+(c[0]+7)+" -6 v-6",stroke:"#D0A090","stroke-width":2.5,"stroke-linecap":"round"},legsF)});
  var head=el("g",{},body),earL=el("g",{},head),earR=el("g",{},head);
  el("ellipse",{cx:-56,cy:-196,rx:20,ry:44,fill:"#985038",transform:"rotate(14 -56 -196)"},earL);el("ellipse",{cx:56,cy:-196,rx:20,ry:44,fill:"#985038",transform:"rotate(-14 56 -196)"},earR);
  el("circle",{cx:0,cy:-212,r:56,fill:"#D0A090"},head);el("ellipse",{cx:-22,cy:-224,rx:20,ry:18,fill:"#C47860",opacity:.8},head);
  el("ellipse",{cx:0,cy:-186,rx:32,ry:24,fill:"#FFFCDC"},head);
  el("ellipse",{cx:0,cy:-198,rx:12,ry:9,fill:"#2C3A5C"},head);el("ellipse",{cx:-3,cy:-201,rx:4,ry:2.4,fill:"#FFFFFF",opacity:.6},head);
  el("path",{d:"M0 -189 v8",stroke:"#2C3A5C","stroke-width":3,"stroke-linecap":"round"},head);
  var mClosed=el("path",{d:"M-12 -178 q12 8 24 0",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var mOpen=el("g",{opacity:0},head);el("path",{d:"M-13 -180 Q0 -158 13 -180Z",fill:"#2C3A5C"},mOpen);el("path",{d:"M-7 -168 Q0 -160 7 -168 Q0 -172 -7 -168Z",fill:"#FC88A8"},mOpen);
  var e1=eyeG(head,-21,-224,7.5),e2=eyeG(head,21,-224,7.5),h1=happyArc(head,-21,-223,8),h2=happyArc(head,21,-223,8);
  el("circle",{cx:-42,cy:-192,r:8,fill:"#FC88A8",opacity:.45},head);el("circle",{cx:42,cy:-192,r:8,fill:"#FC88A8",opacity:.45},head);
  var tw={blink:2,tilt:2.5};
  S.init=function(){};
  S.reset=function(){[h1,h2].forEach(function(h){h.setAttribute("opacity",0)});[e1,e2].forEach(function(h){h.setAttribute("opacity",1)});mOpen.setAttribute("opacity",0);mClosed.setAttribute("opacity",1)};
  S.center=function(){return{x:DX,y:DY-150*SC,sc:SC}};
  function pose(o){var d=o.drop||0;tr(body,"translate("+f1(o.sx||0)+" "+f1(d*34)+")");tr(legsF,"translate(0 "+f1(-d*2)+") scale(1 "+(1-d*.28).toFixed(3)+")");
    tr(hind,"translate(0 "+f1((1-d)*4)+") scale("+(0.72+.28*d).toFixed(3)+" "+(0.72+.28*d).toFixed(3)+")");
    tr(tail,"rotate("+f1((o.tail||0)+d*22)+" 30 -66)");tr(head,"rotate("+f1(o.hd||0)+" 0 -170)");
    tr(earL,"rotate("+f1(o.ear||0)+" -52 -236)");tr(earR,"rotate("+f1(-(o.ear||0))+" 52 -236)");
    blinkT(e1,-21,-224,o.blink);blinkT(e2,21,-224,o.blink)}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false)};
  S.idle=function(t,dt,attn){var o={drop:0,sx:Math.sin(t*1.3)*3,tail:Math.sin(t*9)*12,hd:Math.sin(t*.8)*4,ear:Math.sin(t*1.7)*3};
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    if(t>tw.tilt){tw.tT=t;tw.tilt=t+rr(2.2,3.6)}var tt=t-(tw.tT||-9);if(tt<1)o.hd+=Math.sin(Math.PI*tt)*14*(Math.floor(tw.tT)%2?1:-1);
    if(attn){o.hd=0;o.ear=-10;o.tail=Math.sin(t*14)*18}pose(o)};
  S.act=function(e,dt){var u=clamp(e/.6,0,1),d=1-Math.pow(1-u,3),bob=u<1?Math.sin(Math.PI*u)*.06:0;
    var o={drop:d+bob,tail:Math.sin(e*16)*(e>.6?20:8),hd:-6*Math.sin(Math.PI*u),ear:-8*Math.sin(Math.PI*u)};pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){var o={drop:1,tail:Math.sin(e*16)*22,hd:Math.sin(e*2.5)*10,ear:Math.sin(e*6)*5};
    if(e>.2){[h1,h2].forEach(function(h){h.setAttribute("opacity",1)});o.blink=1;mOpen.setAttribute("opacity",1);mClosed.setAttribute("opacity",0)}pose(o)};
  return S}

/* ---------- ЛЯГ: кошка в комнате, камера низко у пола, вид сбоку ---------- */
function makeLIE(R){
  var S={};S.vb="200 140 1200 800";S.ACT=2.4;S.snd="lie";
  el("rect",{x:-400,y:-400,width:2400,height:1100,fill:"#FDDDD0"},R);
  // wallpaper dots, window with sky, plant
  for(var i=0;i<60;i++)el("circle",{cx:f1(rr(-200,1800)),cy:f1(rr(120,560)),r:4,fill:"#FCC4BC",opacity:.6},R);
  var win=el("g",{transform:"translate(980 200)"},R);el("rect",{x:0,y:0,width:300,height:240,rx:10,fill:"#FFFFFF"},win);el("rect",{x:14,y:14,width:272,height:212,rx:6,fill:"#ADC7FE"},win);
  el("circle",{cx:210,cy:80,r:30,fill:"#FFD400"},win);el("ellipse",{cx:90,cy:90,rx:50,ry:18,fill:"#FFFFFF"},win);el("path",{d:"M150 14 V226 M14 120 H286",stroke:"#FFFFFF","stroke-width":10},win);
  el("rect",{x:-14,y:236,width:328,height:18,rx:6,fill:"#FFFFFF"},win);
  var plant=el("g",{transform:"translate(500 560)"},R);el("path",{d:"M-40 0 L-30 -70 H30 L40 0Z",fill:"#6B91D6"},plant);[[-50,-150,-30],[0,-180,0],[44,-150,30],[-20,-120,-15],[24,-126,15]].forEach(function(l){el("ellipse",{cx:l[0],cy:l[1],rx:18,ry:46,fill:"#4AA010",transform:"rotate("+l[2]+" "+l[0]+" "+l[1]+")"},plant)});
  el("rect",{x:-400,y:560,width:2400,height:22,fill:"#C47860"},R);
  el("path",{id:"lieFloor",d:"M-400 582 H2000 V1300 H-400Z",fill:"#F8B888"},R);
  var pl=el("g",{},R);for(i=0;i<9;i++){var y=582+i*i*9+i*16;el("path",{d:"M-400 "+f1(y)+" H2000",stroke:"#D0A090","stroke-width":3+i*.6,opacity:.8},pl)}
  R.appendChild(grain(null,["lieFloor"]));
  var rug=el("g",{},R);el("ellipse",{cx:800,cy:832,rx:470,ry:96,fill:"#6B91D6"},rug);el("ellipse",{cx:800,cy:830,rx:440,ry:82,fill:"#ADC7FE"},rug);el("ellipse",{cx:800,cy:830,rx:360,ry:58,fill:"none",stroke:"#D3E2FF","stroke-width":10},rug);
  var yarn=el("g",{transform:"translate(1250 850)"},R);el("ellipse",{cx:0,cy:24,rx:40,ry:9,fill:"#2C3A5C",opacity:.15},yarn);el("circle",{r:32,fill:"#FC88A8"},yarn);el("path",{d:"M-26 -14 Q0 0 26 -14 M-30 4 Q0 18 30 4 M-14 -28 Q0 0 -6 30",stroke:"#FCD0DC","stroke-width":4,fill:"none"},yarn);el("path",{d:"M30 10 C70 30 60 50 110 44",stroke:"#FC88A8","stroke-width":4,fill:"none"},yarn);
  // cat (side view, facing right)
  var CX=780,CY=840,SC=1.9,C=el("g",{transform:"translate("+CX+" "+CY+") scale("+SC+")"},R),CF=el("g",{},C);
  var shadow=el("ellipse",{cx:0,cy:0,rx:96,ry:10,fill:"#2C3A5C",opacity:.15},CF);
  var tail=el("g",{},CF),tailP=el("path",{d:"",stroke:"#F8B888","stroke-width":15,fill:"none","stroke-linecap":"round"},tail);
  function leg(x,col,front){var g=el("g",{},CF);if(front)el("path",{d:"M"+(x+2)+" -74 C"+x+" -48 "+(x+1)+" -24 "+(x+1)+" -8",stroke:col,"stroke-width":20,fill:"none","stroke-linecap":"round"},g);
    else{el("ellipse",{cx:x,cy:-66,rx:24,ry:28,fill:col},g);el("path",{d:"M"+(x-6)+" -44 C"+(x-12)+" -30 "+(x-12)+" -16 "+(x-8)+" -6 L"+(x+10)+" -6 C"+(x+8)+" -18 "+(x+10)+" -32 "+(x+14)+" -44Z",fill:col},g)}
    el("ellipse",{cx:x+3,cy:-5,rx:14,ry:7,fill:"#FFFCDC"},g);return{g:g,x:x,front:front}}
  var lBF=leg(-52,"#F8B888",false),lFF=leg(40,"#F8B888",true);
  var body=el("g",{},CF);el("ellipse",{cx:-4,cy:-84,rx:78,ry:40,fill:"#FFC880"},body);el("ellipse",{cx:6,cy:-62,rx:52,ry:16,fill:"#FFFCDC"},body);
  var lBN=leg(-40,"#FFC880",false),lFN=leg(54,"#FFC880",true);
  var head=el("g",{},CF);
  el("path",{d:"M78 -142 L80 -186 L104 -156Z",fill:"#FFC880"},head);el("path",{d:"M84 -148 L85 -172 L98 -155Z",fill:"#FCC4BC"},head);
  el("path",{d:"M106 -158 L126 -186 L130 -148Z",fill:"#FFC880"},head);el("path",{d:"M112 -156 L124 -175 L126 -152Z",fill:"#FCC4BC"},head);
  el("circle",{cx:102,cy:-124,r:38,fill:"#FFC880"},head);el("ellipse",{cx:120,cy:-110,rx:18,ry:12,fill:"#FFFCDC"},head);
  el("path",{d:"M130 -118 l8 -2 l-4 7Z",fill:"#FC88A8"},head);el("path",{d:"M134 -110 q-4 6 -10 4 M134 -110 q2 6 8 5",stroke:"#2C3A5C","stroke-width":2.2,fill:"none","stroke-linecap":"round"},head);
  el("path",{d:"M126 -112 l30 -6 M126 -108 l30 2 M118 -110 l-26 -6",stroke:"#C8987E","stroke-width":1.6,opacity:.8},head);
  var ce=el("g",{},head);el("ellipse",{cx:114,cy:-130,rx:6,ry:8.5,fill:"#2C3A5C"},ce);el("circle",{cx:116,cy:-133,r:2.4,fill:"#FFFFFF"},ce);
  var chap=happyArc(head,114,-129,7);el("circle",{cx:104,cy:-110,r:7,fill:"#FC88A8",opacity:.45},head);
  var tw={blink:2,ear:3,look:4};
  S.init=function(){};
  S.reset=function(){chap.setAttribute("opacity",0);ce.setAttribute("opacity",1)};
  S.center=function(){return{x:CX+20*SC,y:CY-95*SC,sc:SC}};
  var haunch=el("ellipse",{cx:-46,cy:-34,rx:40,ry:30,fill:"#FFC880",opacity:0},CF);CF.insertBefore(haunch,head);
  var paws=el("g",{opacity:0},CF);CF.insertBefore(paws,head);el("path",{d:"M50 -12 L148 -10",stroke:"#F8B888","stroke-width":17,"stroke-linecap":"round"},paws);el("path",{d:"M56 -8 L166 -6",stroke:"#FFC880","stroke-width":17,"stroke-linecap":"round"},paws);[[150,-6],[170,-3]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:15,ry:8,fill:"#FFFCDC"},paws)});
  var CXcur=0;
  function pose(o){var L=o.lie||0;tr(C,"translate("+f1(CX+(o.dx||0)*SC)+" "+CY+") scale("+SC+")");
    tr(body,"translate("+f1(L*6)+" "+f1(L*46+(o.bob||0))+") rotate("+f1(L*-4)+" 0 -40) scale("+(1+L*.04).toFixed(3)+" "+(1-L*.14).toFixed(3)+")");
    [lBF,lBN].forEach(function(l,i){var lift=o.stepB&&(i?o.stepB>0:o.stepB<0)?Math.abs(o.stepB):0;tr(l.g,"translate(0 "+f1(-lift)+") translate("+l.x+" -6) scale(1 "+(1-L*.85).toFixed(3)+") translate("+(-l.x)+" 6)")});
    [lFF,lFN].forEach(function(l,i){var lift=o.stepF&&(i?o.stepF>0:o.stepF<0)?Math.abs(o.stepF):0;tr(l.g,"translate(0 "+f1(-lift)+") translate("+l.x+" -6) scale(1 "+(1-L*.85).toFixed(3)+") translate("+(-l.x)+" 6)")});
    haunch.setAttribute("opacity",clamp(L*1.6-.4,0,1).toFixed(2));paws.setAttribute("opacity",clamp(L*1.6-.5,0,1).toFixed(2));
    tr(head,"translate("+f1(L*-14)+" "+f1(L*78+(o.bob||0))+") rotate("+f1((o.hd||0)+L*22)+" 80 -100)");
    var tb=-80+L*44,sw=(o.tsw||0),d;
    if(L>.55)d="M-72 "+f1(-40+L*18)+" C-112 -16 -98 6 -50 4 C0 2 50 4 92 -6";
    else d="M-76 "+f1(tb)+" C-112 "+f1(tb-10+sw*.3)+" "+f1(-124+sw)+" "+f1(tb-60)+" "+f1(-100+sw*1.4)+" "+f1(tb-92);
    tailP.setAttribute("d",d);tr(shadow,"scale("+(1+L*.1).toFixed(3)+" 1)");blinkT(ce,114,-130,o.blink)}
  S.ambient=function(){};
  S.idle=function(t,dt,attn){var o={tsw:Math.sin(t*1.6)*22,hd:Math.sin(t*.9)*3,bob:Math.sin(t*2.2)*1.2};
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.22)o.blink=1-Math.abs(bt-.11)/.11;
    if(t>tw.look){tw.lT=t;tw.look=t+rr(2.4,4)}var lt=t-(tw.lT||-9);if(lt<1.2)o.hd+=Math.sin(Math.PI*lt/1.2)*10;
    if(attn){o.hd=-6;o.tsw=Math.sin(t*4)*30}pose(o)};
  // a few soft steps forward, then she lies down like a loaf: legs tuck in, paws peek out, tail wraps round
  S.act=function(e,dt){var o={};if(e<1.1){var u=e/1.1;o.dx=34*(u-Math.sin(2*Math.PI*u)/(2*Math.PI));var ph=e/.275;o.stepF=Math.sin(Math.PI*ph)*8;o.stepB=Math.sin(Math.PI*ph+1.2)*8;o.bob=-Math.abs(Math.sin(Math.PI*ph))*2;o.tsw=Math.sin(e*6)*16}
    else{var u2=clamp((e-1.1)/.9,0,1);o.dx=34;o.lie=1-Math.pow(1-u2,3);o.tsw=0}pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){var o={lie:1,dx:34,hd:Math.sin(e*2)*2,bob:Math.sin(t*2)*1};if(e>.25){chap.setAttribute("opacity",1);ce.setAttribute("opacity",0)}pose(o)};
  return S}

/* ---------- ВСТАНЬ: медвежонок встаёт к улью; камера снизу, поднимается следом ---------- */
function makeSTAND(R){
  var S={};S.vb="150 340 1300 867";S.ACT=1.6;S.snd="stand";
  bgRect(R,"url(#gDay)");var cl=[cloud(R,360,240,1),cloud(R,1050,180,.8)];
  hill(R,"stFar","M-1600 900 L0 900 C300 860 700 880 1000 870 C1260 862 1440 856 1600 860 L3200 860","#CCF0A0");R.appendChild(grain(null,["stFar"]));
  var trees=el("g",{},R);[[420,900,1.6],[560,884,1.3],[900,880,1.5],[1000,876,1.2],[1380,866,1.4]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  el("path",{d:"M140 1100 C150 700 160 300 170 -100 L290 -100 C286 300 296 700 330 1100Z",fill:"#985038"},R);
  el("path",{d:"M1120 1100 C1130 700 1130 300 1134 -100 L1240 -100 C1240 300 1250 700 1280 1100Z",fill:"#985038"},R);
  el("path",{d:"M1140 380 C1060 366 980 366 860 380 L860 398 C980 386 1060 388 1140 404Z",fill:"#985038"},R);
  var crown=el("g",{},R);for(var i=0;i<20;i++)el("circle",{cx:f1(rr(60,1480)),cy:f1(rr(-60,180)),r:f1(rr(60,100)),fill:["#289440","#2E9E46","#4AA010"][i%3]},crown);
  var hive=el("g",{transform:"translate(920 396) scale(1.6)"},R);el("path",{d:"M0 0 v18",stroke:"#985038","stroke-width":5},hive);
  for(var h=0;h<5;h++)el("ellipse",{cx:0,cy:34+h*20,rx:30+Math.sin((h+1)/6*Math.PI)*20,ry:13,fill:h%2?"#DCB510":"#FFD400"},hive);el("ellipse",{cx:4,cy:100,rx:10,ry:9,fill:"#2C3A5C"},hive);
  hill(R,"stG","M-1600 960 L0 960 C400 946 900 956 1600 950 L3200 950","#88A848");R.appendChild(grain(null,["stG"]));
  var tex=el("g",{},R);blades(tex,320,-100,1700,950,1220,"#6E9A30",18,3);
  // raspberry bushes standing on the ground
  function rasp(x,y,s){var g=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},R);[[-60,-40,46],[-10,-70,56],[46,-44,48],[0,-24,50]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#289440"},g)});
    [[-40,-80],[20,-100],[60,-60],[-70,-30],[10,-40],[40,-20],[-20,-110]].forEach(function(b){var bg=el("g",{transform:"translate("+b[0]+" "+b[1]+")"},g);[[-4,-3],[4,-3],[0,4],[-4,4],[4,4],[0,-8]].forEach(function(d){el("circle",{cx:d[0],cy:d[1],r:4,fill:"#CC1A14"},bg)})})}
  rasp(380,1000,1.2);rasp(1360,1010,1.3);rasp(1040,990,.9);
  var bees=[bee(R),bee(R),bee(R)];
  var flowers=[];[[300,1120,1.6],[560,1150,1.5],[1300,1140,1.7]].forEach(function(f,i){flower(R,f[0],f[1],f[2],i%4,flowers)});
  // bear cub (side view, facing right): rounded limbs with paws
  var BX=600,BY=1130,SC=1.8,B=el("g",{transform:"translate("+BX+" "+BY+") scale("+SC+")"},R);
  el("ellipse",{cx:-10,cy:0,rx:110,ry:14,fill:"#2C3A5C",opacity:.15},B);
  var upper=el("g",{},B);
  function arm(col,dark){var g=el("g",{},upper);el("path",{d:"M86 -98 C82 -70 80 -44 82 -22",stroke:col,"stroke-width":38,fill:"none","stroke-linecap":"round"},g);
    el("ellipse",{cx:84,cy:-12,rx:22,ry:12,fill:dark},g);el("path",{d:"M74 -4 v4 M84 -2 v4 M94 -4 v4",stroke:"#FFFCDC","stroke-width":2.4,"stroke-linecap":"round"},g);return g}
  var armF=arm("#7A3E2C","#5E2E20");
  var legH=el("g",{},B);el("ellipse",{cx:-44,cy:-64,rx:32,ry:52,fill:"#985038",transform:"rotate(-18 -44 -64)"},legH);
  el("path",{d:"M-44 -44 C-46 -30 -42 -20 -38 -14",stroke:"#985038","stroke-width":36,fill:"none","stroke-linecap":"round"},legH);el("ellipse",{cx:-32,cy:-6,rx:36,ry:11,fill:"#7A3E2C"},legH);el("ellipse",{cx:-10,cy:-8,rx:10,ry:7,fill:"#C47860"},legH);
  el("ellipse",{cx:30,cy:-100,rx:86,ry:58,fill:"#985038"},upper);el("ellipse",{cx:42,cy:-80,rx:50,ry:26,fill:"#C47860"},upper);
  var armN=arm("#86442F","#6E3626");
  var head=el("g",{},upper);el("circle",{cx:118,cy:-196,r:17,fill:"#985038"},head);el("circle",{cx:118,cy:-196,r:9,fill:"#F8A488"},head);el("circle",{cx:166,cy:-190,r:16,fill:"#985038"},head);el("circle",{cx:166,cy:-190,r:8,fill:"#F8A488"},head);
  el("circle",{cx:142,cy:-152,r:48,fill:"#985038"},head);el("ellipse",{cx:180,cy:-138,rx:26,ry:20,fill:"#D0A090"},head);el("ellipse",{cx:198,cy:-148,rx:10,ry:8,fill:"#2C3A5C"},head);
  el("path",{d:"M196 -140 q-2 10 -12 10",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var be=eyeG(head,154,-164,6.8),bh=happyArc(head,154,-163,7);el("circle",{cx:146,cy:-136,r:8,fill:"#FC88A8",opacity:.45},head);
  var tw={blink:2,sniff:3},rise=0;
  S.init=function(){};
  S.reset=function(){rise=0;bh.setAttribute("opacity",0);be.setAttribute("opacity",1)};
  S.center=function(){return{x:BX+lerp(60,10,rise)*SC,y:BY-lerp(110,230,rise)*SC,sc:SC}};
  S.cam=function(){return[150,lerp(340,300,rise),1300,867]};
  function pose(o){rise=o.rise||0;var a=-74*rise;tr(upper,"rotate("+f1(a)+" -30 -72)");tr(head,"rotate("+f1(-a*.78+(o.hd||0))+" 112 -140)");
    tr(armN,"rotate("+f1(-(o.arm||0))+" 86 -100)");tr(armF,"rotate("+f1(-(o.arm2||0))+" 86 -100)");blinkT(be,154,-164,o.blink)}
  S.ambient=function(t,dt){cl.forEach(function(c){c.x+=4*dt;if(c.x>1750)c.x=-200;tr(c.g,"translate("+f1(c.x)+" "+c.y+") scale("+c.s+")")});flowersSway(flowers,t,dt,0,0,false);
    bees.forEach(function(b,i){var a=t*1.4+i*2.1,x=920+Math.cos(a)*(110+i*22),y=520+Math.sin(a*1.3)*60;tr(b.g,"translate("+f1(x)+" "+f1(y)+") scale("+(Math.sin(a)>0?-2:2)+" 2)");tr(b.w,"scale(1 "+(0.3+.7*Math.abs(Math.sin(t*40+i))).toFixed(2)+")")})};
  S.idle=function(t,dt,attn){var o={rise:0,hd:Math.sin(t*1.1)*4};
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    if(t>tw.sniff){tw.sT=t;tw.sniff=t+rr(2.4,3.8)}var st=t-(tw.sT||-9);if(st<.8)o.hd+=-Math.abs(Math.sin(st*Math.PI/.2))*6;
    if(attn)o.hd=-14;pose(o)};
  S.act=function(e,dt){var u=clamp(e/1.0,0,1),r=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2;var a2=clamp((e-.55)/.6,0,1);
    var o={rise:r,arm:80*a2+Math.sin(e*10)*6*a2,arm2:70*a2,hd:-10*a2};pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){var o={rise:1+Math.sin(e*3)*.02,arm:80+Math.sin(e*8)*14,arm2:70+Math.sin(e*8+1)*12,hd:-10+Math.sin(e*3)*4};if(e>.25){bh.setAttribute("opacity",1);o.blink=1}pose(o)};
  return S}
