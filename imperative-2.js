/* Повелительное наклонение — игра 2. Сцены + движок. */
(function(){
"use strict";
if(!document.getElementById("gdefs")){var d=document.createElement("div");d.innerHTML="<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\"><defs id=\"gdefs\">\n  <linearGradient id=\"gDusk\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"720\"><stop offset=\"0\" stop-color=\"#6B91D6\"/><stop offset=\".55\" stop-color=\"#B8A0E0\"/><stop offset=\"1\" stop-color=\"#FCD0DC\"/></linearGradient>\n  <linearGradient id=\"gDay\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"560\"><stop offset=\"0\" stop-color=\"#ADC7FE\"/><stop offset=\".6\" stop-color=\"#D3E2FF\"/><stop offset=\"1\" stop-color=\"#EAF1FF\"/></linearGradient>\n  <linearGradient id=\"gWater\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"520\" x2=\"0\" y2=\"900\"><stop offset=\"0\" stop-color=\"#B8E0E0\"/><stop offset=\".5\" stop-color=\"#98B8FC\"/><stop offset=\"1\" stop-color=\"#6B91D6\"/></linearGradient>\n  <linearGradient id=\"gSea\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"820\"><stop offset=\"0\" stop-color=\"#B8E0E0\"/><stop offset=\".45\" stop-color=\"#98B8FC\"/><stop offset=\"1\" stop-color=\"#6B91D6\"/></linearGradient>\n  <linearGradient id=\"gSand\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"740\" x2=\"0\" y2=\"900\"><stop offset=\"0\" stop-color=\"#FDE6C4\"/><stop offset=\"1\" stop-color=\"#F8B888\"/></linearGradient>\n  <radialGradient id=\"gMoon\"><stop offset=\"0\" stop-color=\"#FFF8A8\" stop-opacity=\".9\"/><stop offset=\"1\" stop-color=\"#FFF8A8\" stop-opacity=\"0\"/></radialGradient>\n  <radialGradient id=\"gFish\" cx=\".4\" cy=\".35\" r=\".75\"><stop offset=\"0\" stop-color=\"#FFC880\"/><stop offset=\".55\" stop-color=\"#FF8A20\"/><stop offset=\"1\" stop-color=\"#DC8818\"/></radialGradient>\n  <radialGradient id=\"gFrog\" cx=\".4\" cy=\".3\" r=\".8\"><stop offset=\"0\" stop-color=\"#B0E060\"/><stop offset=\".6\" stop-color=\"#70CC10\"/><stop offset=\"1\" stop-color=\"#4AA010\"/></radialGradient>\n  <radialGradient id=\"gOwl\" cx=\".4\" cy=\".3\" r=\".8\"><stop offset=\"0\" stop-color=\"#D0A090\"/><stop offset=\".6\" stop-color=\"#C47860\"/><stop offset=\"1\" stop-color=\"#A86448\"/></radialGradient>\n  <linearGradient id=\"sky\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"900\"><stop offset=\"0\" stop-color=\"#ADC7FE\"/><stop offset=\".55\" stop-color=\"#D3E2FF\"/><stop offset=\"1\" stop-color=\"#EAF1FF\"/></linearGradient>\n  <radialGradient id=\"sunGlow\"><stop offset=\"0\" stop-color=\"#FFF8A8\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#FFF8A8\" stop-opacity=\"0\"/></radialGradient>\n  <linearGradient id=\"hillFar\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"390\" x2=\"0\" y2=\"900\"><stop offset=\"0\" stop-color=\"#CCF0A0\"/><stop offset=\"1\" stop-color=\"#ACD48C\"/></linearGradient>\n  <linearGradient id=\"hillMid\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"495\" x2=\"0\" y2=\"900\"><stop offset=\"0\" stop-color=\"#ACD48C\"/><stop offset=\"1\" stop-color=\"#88A848\"/></linearGradient>\n  <linearGradient id=\"meadow\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"560\" x2=\"0\" y2=\"900\"><stop offset=\"0\" stop-color=\"#9CC05C\"/><stop offset=\"1\" stop-color=\"#88A848\"/></linearGradient>\n  <radialGradient id=\"bodyShade\" cx=\".38\" cy=\".3\" r=\".8\"><stop offset=\"0\" stop-color=\"#D3E2FF\"/><stop offset=\".6\" stop-color=\"#C3CFE2\"/><stop offset=\"1\" stop-color=\"#A8B0C8\"/></radialGradient>\n  <radialGradient id=\"headShade\" cx=\".42\" cy=\".32\" r=\".75\"><stop offset=\"0\" stop-color=\"#DCE6F6\"/><stop offset=\".65\" stop-color=\"#C3CFE2\"/><stop offset=\"1\" stop-color=\"#A8B0C8\"/></radialGradient>\n  <radialGradient id=\"carrotG\" cx=\".35\" cy=\".3\" r=\".8\"><stop offset=\"0\" stop-color=\"#FFC880\"/><stop offset=\".5\" stop-color=\"#FF8A20\"/><stop offset=\"1\" stop-color=\"#DC8818\"/></radialGradient>\n</defs></svg>";document.body.appendChild(d.firstChild)}
var NS="http://www.w3.org/2000/svg",DEFS=document.getElementById("gdefs");
var $=function(id){return document.getElementById(id)};
function el(tag,a,parent){var e=document.createElementNS(NS,tag);for(var k in a)e.setAttribute(k,a[k]);if(parent)parent.appendChild(e);return e}
function lerp(a,b,t){return a+(b-a)*t}
function clamp(v,a,b){return v<a?a:v>b?b:v}
var rnd=(function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}})(11);
function rr(a,b){return a+(b-a)*rnd()}
function tr(e,s){e.setAttribute("transform",s)}
function f1(v){return v.toFixed(1)}
var BIG={x:-1600,y:-1200,w:4800,h:3300};
function bgRect(parent,fill){return el("rect",{x:BIG.x,y:BIG.y,width:BIG.w,height:BIG.h,fill:fill},parent)}
function hill(parent,id,d0,fill){return el("path",{id:id,d:d0+" L3200 2100 L-1600 2100Z",fill:fill},parent)}

/* ---------- grain pattern (terrain only) ---------- */
(function(){var c=document.createElement("canvas");c.width=c.height=180;var g=c.getContext("2d"),d=g.createImageData(180,180);for(var i=0;i<d.data.length;i+=4){var v=222+Math.random()*33;d.data[i]=0;d.data[i+1]=0;d.data[i+2]=0;d.data[i+3]=Math.round((255-v)*.35)}g.putImageData(d,0,0);
  var pat=el("pattern",{id:"grainPat",width:180,height:180,patternUnits:"userSpaceOnUse"},DEFS);el("image",{href:c.toDataURL(),width:180,height:180},pat)})();
var clipN=0;
/* зерно: копии самих фигур земли с узором-шумом — без clip-path и без mix-blend-mode */
var GRAINS=[],GEO=["d","cx","cy","rx","ry","x","y","width","height","transform","points"];
function grain(parent,ids){var g=el("g",{style:"pointer-events:none"},parent);ids.forEach(function(x){GRAINS.push({id:x,g:g,c:null})});return g}
function syncGrain(){GRAINS.forEach(function(o){var s=document.getElementById(o.id);if(!s)return;if(!o.c||o.c.tagName!==s.tagName){if(o.c)o.c.remove();o.c=el(s.tagName,{fill:"url(#grainPat)"},o.g)}
  GEO.forEach(function(a){var v=s.getAttribute(a);if(v!=null)o.c.setAttribute(a,v)})})}
function blades(g,n,x0,x1,y0,y1,col,len,w){var D=["","",""];for(var i=0;i<n;i++){var x=rr(x0,x1),y=rr(y0,y1),h=len*(.6+.4*(y-y0)/(y1-y0+1)),o=rr(.35,.7);
  D[o<.47?0:o<.58?1:2]+="M"+f1(x)+" "+f1(y)+" q"+f1(rr(-3,3))+" "+f1(-h*.6)+" "+f1(rr(-5,5))+" "+f1(-h)}
  [.41,.52,.64].forEach(function(op,k){if(D[k])el("path",{d:D[k],stroke:col,"stroke-width":w,"stroke-linecap":"round",fill:"none",opacity:op},g)})}
function tree(g,x,y,s){el("rect",{x:x-5*s,y:y-12*s,width:10*s,height:30*s,rx:3,fill:"#985038"},g);
  el("circle",{cx:x,cy:y-32*s,r:27*s,fill:"#289440"},g);el("circle",{cx:x-15*s,cy:y-19*s,r:19*s,fill:"#289440"},g);el("circle",{cx:x+16*s,cy:y-21*s,r:18*s,fill:"#2E9E46"},g);el("circle",{cx:x-6*s,cy:y-42*s,r:9*s,fill:"#70CC10",opacity:.45},g)}
function lidK(lid,cx,cy,r,k){if(k<.03){lid.setAttribute("opacity",0);return}lid.setAttribute("opacity",1);tr(lid,"translate("+cx+" "+(cy-r)+") scale(1 "+k.toFixed(3)+") translate("+(-cx)+" "+(-(cy-r))+")")}
function spring(o,target,k,d,dt){o.v+=((target-o.x)*k-o.v*d)*dt;o.x+=o.v*dt}
/* ==========================================================
   ЛЕТИ — сова на ветке в сумерках, перелетает к дуплу
   ========================================================== */
function makeFLY(R){var S={};S.vb="170 20 1300 867";
  bgRect(R,"url(#gDusk)");
  var stars=[];for(var i=0;i<26;i++){var x=rr(0,1600),y=rr(20,330);if(x>560&&x<820&&y>90&&y<330)continue;var st=el("path",{d:"M0 -6 L1.6 -1.6 L6 0 L1.6 1.6 L0 6 L-1.6 1.6 L-6 0 L-1.6 -1.6Z",fill:"#FFFFFF",transform:"translate("+f1(x)+" "+f1(y)+") scale("+rr(.5,1.1).toFixed(2)+")"},R);stars.push({e:st,ph:rr(0,6)})}
  var moon=el("g",{transform:"translate(690 205)"},R);el("circle",{r:120,fill:"url(#gMoon)"},moon);el("circle",{r:54,fill:"#FFFCDC"},moon);
  [[-16,-12,10],[14,10,7],[18,-20,5],[-8,20,6]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#FFF8A8"},moon)});
  hill(R,"flyFar","M-1600 560 L0 560 C200 500 380 530 560 545 C760 562 900 500 1120 505 C1320 510 1460 545 1600 540 L3200 540","#D8C8E8");grain(R,["flyFar"]);
  [[120,548,.9],[620,546,.75],[900,512,.9],[1500,544,.8]].forEach(function(t){tree(R,t[0],t[1],t[2])});
  hill(R,"flyMid","M-1600 660 L0 660 C260 610 520 640 760 650 C1000 660 1200 610 1600 630 L3200 630","#ACD48C");
  hill(R,"flyNear","M-1600 760 L0 760 C300 735 600 750 900 745 C1200 740 1400 725 1600 735 L3200 735","#88A848");
  grain(R,["flyMid","flyNear"]);
  var tex=el("g",{},R);blades(tex,120,0,1600,650,760,"#88A848",12,2.4);blades(tex,240,0,1600,745,900,"#6E9A30",16,2.8);
  // left tree with branch
  var LT=el("g",{},R);
  el("path",{d:"M250 900 C272 720 262 560 284 360 L344 360 C352 560 362 720 404 900Z",fill:"#985038"},LT);
  el("path",{d:"M300 520 q8 40 -6 90 M330 640 q10 40 0 90",stroke:"#7A3E2C","stroke-width":5,fill:"none","stroke-linecap":"round",opacity:.5},LT);
  var LB=el("g",{},LT); // branch (bobs)
  el("path",{d:"M335 472 C420 450 500 454 586 462 L586 476 C500 472 420 474 338 500Z",fill:"#985038"},LB);
  [[574,452],[592,462],[560,446]].forEach(function(c){el("ellipse",{cx:c[0],cy:c[1],rx:14,ry:7,fill:"#4AA010",transform:"rotate(-25 "+c[0]+" "+c[1]+")"},LB)});
  [[230,300,92],[330,250,104],[410,320,80],[262,196,72],[366,168,62],[180,360,60]].forEach(function(c,i){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:i%2?"#2E9E46":"#289440"},LT)});
  [[300,220,30],[380,280,24],[230,310,22]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#4AA010",opacity:.5},LT)});
  // right tree with hollow
  var RT=el("g",{},R);
  el("path",{d:"M1250 900 C1266 720 1258 560 1272 330 L1324 330 C1332 560 1338 720 1358 900Z",fill:"#985038"},RT);
  el("ellipse",{cx:1298,cy:520,rx:22,ry:30,fill:"#2C3A5C"},RT);el("ellipse",{cx:1298,cy:520,rx:22,ry:30,fill:"none",stroke:"#7A3E2C","stroke-width":6},RT);
  var RB=el("g",{},RT);
  el("path",{d:"M1276 432 C1220 424 1160 424 1100 430 L1100 442 C1160 438 1220 440 1274 452Z",fill:"#985038"},RB);
  [[1108,420],[1094,432]].forEach(function(c){el("ellipse",{cx:c[0],cy:c[1],rx:13,ry:6,fill:"#4AA010",transform:"rotate(20 "+c[0]+" "+c[1]+")"},RB)});
  [[1230,270,78],[1320,220,92],[1386,292,72],[1292,150,62],[1420,210,50]].forEach(function(c,i){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:i%2?"#2E9E46":"#289440"},RT)});
  [[1300,190,26],[1360,270,20]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#4AA010",opacity:.5},RT)});
  // falling leaves (on take-off)
  var leaves=[];for(var j=0;j<3;j++)leaves.push({e:el("ellipse",{rx:9,ry:4.5,fill:"#4AA010",opacity:0},R),on:false});
  // fireflies
  var flies=[];for(var k=0;k<5;k++){var fg=el("g",{},R);el("circle",{r:10,fill:"#FFF8A8",opacity:.35},fg);el("circle",{r:3.5,fill:"#FFF8A8"},fg);flies.push({e:fg,x:rr(150,1450),y:rr(620,820),ph:rr(0,6),sp:rr(.3,.6)})}
  // owl
  var O=el("g",{},R),body=el("g",{},O);
  var WL=el("g",{},body),WR=el("g",{transform:"scale(-1 1)"},body),WLi=el("g",{},WL),WRi=el("g",{},WR);
  [WLi,WRi].forEach(function(w){el("path",{d:"M-46 -112 C-84 -104 -92 -46 -64 -12 C-52 -36 -44 -76 -46 -112Z",fill:"#985038"},w);
    el("path",{d:"M-58 -88 C-74 -70 -76 -44 -66 -24 M-50 -96 C-62 -76 -64 -50 -58 -32",stroke:"#C47860","stroke-width":5,fill:"none","stroke-linecap":"round",opacity:.8},w)});
  el("path",{d:"M-18 -6 L0 16 L18 -6Z",fill:"#985038"},body);
  el("path",{d:"M-44 -126 L-52 -172 L-18 -146Z M44 -126 L52 -172 L18 -146Z",fill:"#985038"},body);
  el("path",{d:"M0 -154 C48 -154 64 -104 62 -64 C60 -20 34 0 0 0 C-34 0 -60 -20 -62 -64 C-64 -104 -48 -154 0 -154Z",fill:"url(#gOwl)"},body);
  el("ellipse",{cx:0,cy:-48,rx:37,ry:42,fill:"#FDE6C4"},body);
  [[-15,-64],[8,-68],[-4,-48],[17,-46],[-19,-31],[5,-28]].forEach(function(c){el("path",{d:"M"+(c[0]-5)+" "+c[1]+" q5 5 10 0",stroke:"#D0A090","stroke-width":3,fill:"none","stroke-linecap":"round"},body)});
  el("circle",{cx:-23,cy:-106,r:28,fill:"#F8B888"},body);el("circle",{cx:23,cy:-106,r:28,fill:"#F8B888"},body);
  var pupils=[],lids=[];
  [-23,23].forEach(function(cx){el("circle",{cx:cx,cy:-106,r:20,fill:"#FFFCDC"},body);el("circle",{cx:cx,cy:-106,r:13.5,fill:"#FFC880"},body);
    var pg=el("g",{},body);el("circle",{cx:cx,cy:-106,r:8,fill:"#2C3A5C"},pg);el("circle",{cx:cx+3,cy:-110,r:3,fill:"#FFFFFF"},pg);pupils.push(pg);
    lids.push(el("ellipse",{cx:cx,cy:-106,rx:21.5,ry:21.5,fill:"#C47860",opacity:0},body))});
  var happy=el("path",{d:"M-36 -104 q13 -14 26 0 M10 -104 q13 -14 26 0",stroke:"#2C3A5C","stroke-width":5,fill:"none","stroke-linecap":"round",opacity:0},body);
  el("path",{d:"M-8 -94 L8 -94 L0 -77Z",fill:"#DC8818"},body);
  var feet=el("g",{},O);[-16,16].forEach(function(x){el("path",{d:"M"+(x-8)+" 2 l4 -10 M"+x+" 2 l0 -11 M"+(x+8)+" 2 l-4 -10",stroke:"#FF8A20","stroke-width":5,"stroke-linecap":"round"},feet)});
  var path=el("path",{d:"M505 462 C600 340 760 250 900 255 S1100 310 1148 430",fill:"none",visibility:"hidden"},R),PL=0;
  var lb={x:0,v:0},rb={x:0,v:0},tw={wing:-9,blink:3,look:0,lookT:2,shuffle:5};
  S.ACT=3.6;S.snd="fly";
  S.init=function(){PL=path.getTotalLength()};
  S.reset=function(){S.pos={x:505,y:462,sc:1.25};S.ang=0;happy.setAttribute("opacity",0);lids.forEach(function(l){l.setAttribute("opacity",0)});leaves.forEach(function(l){l.on=false;l.e.setAttribute("opacity",0)});feet.setAttribute("transform","")};
  S.center=function(){return{x:S.pos.x,y:S.pos.y-80*S.pos.sc,sc:S.pos.sc}};
  function pose(o){tr(O,"translate("+f1(o.x)+" "+f1(o.y)+") scale("+o.sc.toFixed(3)+")");
    tr(body,"translate(0 "+f1(o.by||0)+") rotate("+f1(o.rot||0)+" 0 -60) scale("+(o.sx||1).toFixed(3)+" "+(o.sy||1).toFixed(3)+")");
    tr(WLi,"rotate("+f1(o.wing||0)+" -46 -108)");tr(WRi,"rotate("+f1(o.wing||0)+" -46 -108)");
    pupils.forEach(function(p){tr(p,"translate("+f1(o.lx||0)+" "+f1(o.ly||0)+")")});
    lids.forEach(function(l,i){lidK(l,i?23:-23,-106,21.5,o.blink||0)})}
  S.ambient=function(t,dt,phase){
    stars.forEach(function(s){s.e.setAttribute("opacity",(.45+.35*Math.sin(t*1.3+s.ph)).toFixed(2))});
    flies.forEach(function(f){var x=f.x+Math.sin(t*f.sp+f.ph)*60,y=f.y+Math.sin(t*f.sp*1.7+f.ph)*22;tr(f.e,"translate("+f1(x)+" "+f1(y)+")");f.e.setAttribute("opacity",(.55+.45*Math.sin(t*2+f.ph)).toFixed(2))});
    spring(lb,0,60,6,dt);spring(rb,0,60,6,dt);tr(LB,"rotate("+f1(lb.x)+" 340 480)");tr(RB,"rotate("+f1(rb.x)+" 1272 440)");
    leaves.forEach(function(l){if(!l.on)return;l.t+=dt;l.x+=l.vx*dt+Math.sin(l.t*4+l.ph)*30*dt;l.y+=40*dt;l.r+=dt*90;tr(l.e,"translate("+f1(l.x)+" "+f1(l.y)+") rotate("+f1(l.r)+")");l.e.setAttribute("opacity",Math.max(0,1-Math.max(0,l.t-2)/1).toFixed(2));if(l.t>3)l.on=false})};
  S.idle=function(t,dt,attn){var o={x:S.pos.x,y:S.pos.y,sc:S.pos.sc},b=Math.sin(t*2.2);o.sy=1+.015*b;o.sx=1-.008*b;o.rot=Math.sin(t*.9)*3;
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.8)}var bt=t-(tw.bT||-9);if(bt<.22)o.blink=1-Math.abs(bt-.11)/.11;
    if(t>tw.lookT){tw.look=rr(-1,1);tw.lookT=t+rr(1,2.4)}o.lx=attn?3:tw.look*4;o.ly=attn?-1:0;
    if(t>tw.shuffle){tw.wing=t;tw.shuffle=t+rr(2.2,3.6)}var wt=t-tw.wing;if(wt<.5){o.wing=Math.sin(wt*Math.PI/.5*2)*14;o.by=-Math.abs(Math.sin(wt*Math.PI/.5))*6}
    if(attn){o.rot+=4;o.sy*=1.02}pose(o)};
  S.act=function(el_,dt,first){
    if(first){lb.v=-60;leaves.forEach(function(l,i){l.on=true;l.t=0;l.x=520+i*24;l.y=468;l.vx=rr(-20,30);l.r=rr(0,90);l.ph=rr(0,6);l.e.setAttribute("opacity",1)})}
    var u=clamp(el_/S.ACT,0,1),e=.55*u+.45*(u-Math.sin(2*Math.PI*u)/(2*Math.PI)),p=path.getPointAtLength(e*PL),q=path.getPointAtLength(Math.min(PL,e*PL+3));
    var sc=lerp(1.25,1.0,u),ph=(el_/.36)%1,land=u>.9?(u-.9)/.1:0;
    var o={x:p.x,y:p.y,sc:sc};S.pos=o;
    o.wing=lerp(55+75*(.5+.5*Math.cos(2*Math.PI*ph)),110,land);o.by=-6*Math.sin(2*Math.PI*ph)*(1-land);
    o.rot=clamp(Math.atan2(q.y-p.y,q.x-p.x)*180/Math.PI,-30,30)*.35;o.lx=4;o.ly=0;
    tr(feet,"translate(0 -8) scale(1 "+lerp(.35,1,land).toFixed(2)+")");pose(o);
    if(u>=1){rb.v=-70;return true}};
  S.fin=function(el_,t,dt){var o={x:S.pos.x,y:S.pos.y,sc:S.pos.sc};var k=clamp(el_/.5,0,1);o.wing=110*(1-k)+Math.sin(el_*14)*12*Math.max(0,1-el_*1.5);
    var b=Math.sin(Math.PI*clamp(el_/.4,0,1));o.sy=1-.08*b;o.sx=1+.06*b;o.rot=Math.sin(el_*5)*6*Math.max(0,1-el_/1.6);
    if(el_>.35)happy.setAttribute("opacity",1);
    o.blink=el_>.35?1:0;tr(feet,"");pose(o)};
  return S}

/* ==========================================================
   ПРЫГАЙ — лягушка по кувшинкам к цветку лотоса
   ========================================================== */
function makeJUMP(R){var S={};S.vb="0 -84 1600 1067";
  bgRect(R,"url(#gDay)");
  var sun=el("g",{transform:"translate(1340 140)"},R);el("circle",{r:110,fill:"url(#gMoon)"},sun);var rays=el("g",{},sun);
  for(var i=0;i<12;i++){var a=i/12*Math.PI*2;el("path",{d:"M"+f1(Math.cos(a)*70)+" "+f1(Math.sin(a)*70)+" L"+f1(Math.cos(a)*94)+" "+f1(Math.sin(a)*94),stroke:"#FFD400","stroke-width":9,"stroke-linecap":"round",opacity:.75},rays)}
  el("circle",{r:52,fill:"#FFD400"},sun);el("circle",{cx:-14,cy:-16,r:16,fill:"#FFF8A8",opacity:.75},sun);
  var cl=el("g",{transform:"translate(330 150)"},R);[[0,0,46],[42,-16,38],[84,4,36],[-40,10,30],[38,16,42]].forEach(function(b){el("circle",{cx:b[0],cy:b[1],r:b[2],fill:"#FFFFFF"},cl)});
  hill(R,"jFar","M-1600 430 L0 430 C200 370 400 400 600 410 C820 420 960 360 1180 372 C1380 384 1500 410 1600 405 L3200 405","#CCF0A0");grain(R,["jFar"]);
  [[180,420,.9],[460,404,.8],[1020,370,1],[1110,376,.8],[1450,404,.85]].forEach(function(t){tree(R,t[0],t[1],t[2])});
  hill(R,"jShore","M-1600 520 L0 520 C260 480 520 500 800 505 C1080 510 1300 470 1600 490 L3200 490","#ACD48C");
  grain(R,["jShore"]);
  var tex=el("g",{},R);blades(tex,140,0,1600,490,540,"#88A848",12,2.4);
  el("path",{d:"M-1600 548 L0 548 C300 530 600 540 900 536 C1200 532 1400 520 1600 526 L3200 526 L3200 2100 L-1600 2100Z",fill:"url(#gWater)"},R);
  el("path",{d:"M-1600 548 L0 548 C300 530 600 540 900 536 C1200 532 1400 520 1600 526 L3200 526",fill:"none",stroke:"#EAF1FF","stroke-width":5,opacity:.8},R);
  var glints=[];for(var g=0;g<18;g++){glints.push({e:el("path",{d:"M0 0 h"+f1(rr(18,46)),stroke:"#FFFFFF","stroke-width":4,"stroke-linecap":"round",opacity:.5},R),x:rr(0,1600),y:rr(570,880),v:rr(6,14)})}
  var ripples=[];var RG=el("g",{},R);for(var r=0;r<8;r++)ripples.push({e:el("ellipse",{rx:10,ry:3,fill:"none",stroke:"#FFFFFF","stroke-width":4,opacity:0},RG),life:0});
  function ripple(x,y,s){var n=0;ripples.forEach(function(q){if(q.life<=0&&n<2){q.life=1;q.x=x;q.y=y;q.s=s*(n?1.3:1);q.d=n*.15;n++}})}
  // reeds
  var reeds=[];function reed(x,y,h,s){var g=el("g",{},R),inner=el("g",{},g);tr(g,"translate("+x+" "+y+") scale("+s+")");
    el("path",{d:"M0 0 q-4 "+(-h/2)+" 2 "+(-h),stroke:"#88A848","stroke-width":7,fill:"none","stroke-linecap":"round"},inner);
    el("rect",{x:-6,y:-h-10,width:14,height:44,rx:7,fill:"#985038"},inner);
    el("path",{d:"M0 0 q16 "+(-h*.35)+" 30 "+(-h*.55),stroke:"#4AA010","stroke-width":6,fill:"none","stroke-linecap":"round"},inner);
    reeds.push({e:inner,ph:rr(0,6)})}
  [[60,640,170,1],[100,660,210,1.1],[140,650,150,.9],[1470,600,150,.8],[1510,620,190,.9],[1550,610,140,.8],[30,880,200,1.3],[1580,880,220,1.3]].forEach(function(r){reed(r[0],r[1],r[2],r[3])});
  // pads
  var PADS=[[310,790,1.0],[545,722,.9],[775,668,.8],[985,624,.72],[1180,592,.65]],pads=[];
  PADS.forEach(function(p,i){var g=el("g",{},R),b=el("g",{},g);tr(g,"translate("+p[0]+" "+p[1]+") scale("+p[2]+")");
    el("ellipse",{cx:0,cy:8,rx:100,ry:28,fill:"#6B91D6",opacity:.35},b);
    (function(){var d="M0 0";for(var a=12;a<=348;a+=6){var r=a*Math.PI/180;d+=" L"+f1(Math.cos(r)*96)+" "+f1(Math.sin(r)*30)}el("path",{d:d+"Z",fill:"#4AA010"},b)})();
    el("ellipse",{cx:-8,cy:-4,rx:70,ry:18,fill:"#70CC10",opacity:.7},b);
    for(var v=0;v<6;v++){var a=Math.PI*(.35+v*.27);el("path",{d:"M0 0 L"+f1(Math.cos(a)*80)+" "+f1(Math.sin(a)*24),stroke:"#289440","stroke-width":2.5,opacity:.45},b)}
    pads.push({g:b,x:p[0],y:p[1],s:p[2],bob:{x:0,v:0}})});
  // lotus beside last pad
  var lotus=el("g",{transform:"translate(1255 586) scale(.8)"},R);el("ellipse",{cx:0,cy:6,rx:46,ry:12,fill:"#4AA010"},lotus);var petals=[];
  for(var pi=0;pi<7;pi++){var pe=el("g",{},lotus);el("ellipse",{cx:0,cy:-30,rx:13,ry:30,fill:pi%2?"#FC88A8":"#FCD0DC"},pe);petals.push({e:pe,i:pi-3})}
  var lcore=el("circle",{cx:0,cy:-10,r:9,fill:"#FFD400",opacity:0},lotus);
  // dragonfly
  var DF=el("g",{},R),dw1=el("g",{},DF),dw2=el("g",{},DF);
  el("ellipse",{cx:-14,cy:-8,rx:20,ry:6,fill:"#DCE6FF",opacity:.85,transform:"rotate(-15)"},dw1);el("ellipse",{cx:14,cy:-8,rx:20,ry:6,fill:"#DCE6FF",opacity:.85,transform:"rotate(15)"},dw1);
  el("ellipse",{cx:-12,cy:2,rx:17,ry:5,fill:"#DCE6FF",opacity:.85,transform:"rotate(12)"},dw2);el("ellipse",{cx:12,cy:2,rx:17,ry:5,fill:"#DCE6FF",opacity:.85,transform:"rotate(-12)"},dw2);
  el("rect",{x:-3,y:-14,width:6,height:46,rx:3,fill:"#6B91D6"},DF);el("circle",{cx:0,cy:-14,r:6,fill:"#234888"},DF);
  // frog
  var F=el("g",{},R),FB=el("g",{},F);
  el("ellipse",{cx:-36,cy:-20,rx:30,ry:20,fill:"#4AA010"},FB);
  var legB=el("g",{},FB);el("ellipse",{cx:-34,cy:-24,rx:33,ry:23,fill:"#5CB818"},legB);el("ellipse",{cx:-18,cy:-5,rx:32,ry:8,fill:"#4AA010"},legB);
  [-44,-34,-24].forEach(function(x){el("circle",{cx:x+46,cy:-4,r:4,fill:"#4AA010"},legB)});
  el("ellipse",{cx:0,cy:-44,rx:60,ry:42,fill:"url(#gFrog)"},FB);
  [[-24,-62,7],[-40,-42,5],[-8,-74,5]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#4AA010",opacity:.6},FB)});
  el("ellipse",{cx:18,cy:-28,rx:38,ry:22,fill:"#CCF0A0"},FB);
  var throat=el("ellipse",{cx:42,cy:-34,rx:20,ry:13,fill:"#DDF5B8"},FB);
  var legF=el("g",{},FB);el("rect",{x:28,y:-28,width:13,height:28,rx:6.5,fill:"#70CC10"},legF);el("ellipse",{cx:40,cy:-2,rx:15,ry:5,fill:"#4AA010"},legF);
  var fpupils=[],flids=[];
  [[6,-82,20],[42,-80,19]].forEach(function(e){el("circle",{cx:e[0],cy:e[1],r:e[2],fill:"#70CC10"},FB);el("circle",{cx:e[0],cy:e[1]-2,r:13.5,fill:"#FFFFFF"},FB);
    var pg=el("g",{},FB);el("circle",{cx:e[0]+3,cy:e[1]-1,r:7.5,fill:"#2C3A5C"},pg);el("circle",{cx:e[0]+6,cy:e[1]-5,r:2.6,fill:"#FFFFFF"},pg);fpupils.push(pg);
    flids.push(el("ellipse",{cx:e[0],cy:e[1]-2,rx:15,ry:15,fill:"#70CC10",opacity:0},FB))});
  var fhappy=el("path",{d:"M-4 -82 q10 -12 20 0 M32 -80 q10 -12 20 0",stroke:"#2C3A5C","stroke-width":4.5,fill:"none","stroke-linecap":"round",opacity:0},FB);
  el("path",{d:"M22 -54 Q44 -40 64 -54",stroke:"#2C3A5C","stroke-width":3.5,fill:"none","stroke-linecap":"round"},FB);
  el("circle",{cx:58,cy:-50,r:7,fill:"#FC88A8",opacity:.8},FB);
  var tw={blink:2,croak:3},hopIdle=null;
  S.ACT=2.4;S.snd="jump";
  S.init=function(){};
  S.reset=function(){S.k=0;S.pos={x:PADS[0][0],y:PADS[0][1]-8,sc:PADS[0][2]*1.15};fhappy.setAttribute("opacity",0);petals.forEach(function(p){tr(p.e,"rotate("+p.i*7+" 0 0)")});lcore.setAttribute("opacity",0);S.landed=-1};
  S.center=function(){return{x:S.pos.x,y:S.pos.y-50*S.pos.sc,sc:S.pos.sc}};
  function pose(o){tr(F,"translate("+f1(o.x)+" "+f1(o.y)+") scale("+o.sc.toFixed(3)+")");
    tr(FB,"translate(0 "+f1(-(o.h||0))+") rotate("+f1(o.rot||0)+" 0 -40) scale("+(o.sx||1).toFixed(3)+" "+(o.sy||1).toFixed(3)+")");
    tr(legB,"rotate("+f1(o.lb||0)+" -40 -30) scale("+(1+(o.le||0)*.35).toFixed(3)+" 1)");tr(legF,"rotate("+f1(o.lf||0)+" 34 -26)");
    tr(throat,"translate(42 -34) scale("+(1+(o.th||0)).toFixed(3)+") translate(-42 34)");
    fpupils.forEach(function(p){tr(p,"translate("+f1(o.lx||0)+" 0)")});flids.forEach(function(l,i){lidK(l,i?42:6,i?-82:-84,15,o.blink||0)})}
  S.ambient=function(t,dt){tr(rays,"rotate("+(t*6%360).toFixed(1)+")");
    glints.forEach(function(g){g.x+=g.v*dt;if(g.x>1650)g.x=-60;tr(g.e,"translate("+f1(g.x)+" "+f1(g.y)+")");g.e.setAttribute("opacity",(.25+.25*Math.sin(t*1.5+g.y)).toFixed(2))});
    reeds.forEach(function(r){tr(r.e,"rotate("+f1(Math.sin(t*1.3+r.ph)*3)+")")});
    pads.forEach(function(p,i){spring(p.bob,0,80,7,dt);tr(p.g,"translate(0 "+f1(p.bob.x*10+Math.sin(t*1.4+i)*1.5)+") scale(1 "+(1-p.bob.x*.06).toFixed(3)+")")});
    ripples.forEach(function(q){if(q.life>0){if(q.d>0){q.d-=dt;return}q.life-=dt*1.2;var k=1-q.life;q.e.setAttribute("cx",q.x);q.e.setAttribute("cy",q.y);q.e.setAttribute("rx",f1((60+120*k)*q.s));q.e.setAttribute("ry",f1((16+34*k)*q.s));q.e.setAttribute("opacity",Math.max(0,q.life*.7).toFixed(2))}else q.e.setAttribute("opacity",0)});
    var dx=800+Math.sin(t*.45)*520,dy=420+Math.sin(t*.9)*70,fl=Math.abs(Math.sin(t*40));tr(DF,"translate("+f1(dx)+" "+f1(dy)+") rotate("+(Math.cos(t*.45)>0?95:-95)+") scale(1.4)");
    tr(dw1,"scale("+(0.4+.6*fl).toFixed(2)+" 1)");tr(dw2,"scale("+(0.4+.6*(1-fl)).toFixed(2)+" 1)")};
  S.idle=function(t,dt,attn){var o={x:S.pos.x,y:S.pos.y,sc:S.pos.sc};o.th=Math.max(0,Math.sin(t*5))*.18;o.sy=1+.012*Math.sin(t*2.3);
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;o.lx=attn?3:Math.sin(t*.7)*2.5;
    if(!hopIdle&&t>(tw.nh||2.6)){hopIdle=t;tw.nh=t+rr(2.6,4)}
    if(hopIdle){var q=t-hopIdle;if(q<.4){var s=Math.sin(Math.PI*q/.4);o.h=s*22;o.lb=s*25;o.le=s*.5;o.sy=1+.06*s}else{hopIdle=null;pads[0].bob.v=1.4;ripple(PADS[0][0],PADS[0][1],PADS[0][2]*.8)}}
    if(attn){o.lx=3;o.rot=-3}pose(o)};
  S.act=function(el_,dt,first){
    var k=Math.min(3,Math.floor(el_/.6)),q=el_-k*.6,a=PADS[k],b=PADS[k+1],o={};
    if(el_>=2.3){var L=PADS[4];o={x:L[0],y:L[1]-8,sc:L[2]*1.15};var w=clamp((el_-2.3)/.1,0,1),s2=Math.sin(Math.PI*w);o.sy=1-.12*s2;o.sx=1+.1*s2;S.pos=o;pose(o);if(S.landed<4){S.landed=4;pads[4].bob.v=1.4;ripple(L[0],L[1],L[2])}return el_>=S.ACT}
    if(q<.5){var u=q/.5,sp=Math.sin(Math.PI*u),sc=lerp(a[2],b[2],u)*1.15;
      o={x:lerp(a[0],b[0],u),y:lerp(a[1],b[1],u)-8,sc:sc,h:sp*170/1.15};o.rot=-22*Math.cos(Math.PI*u);o.lb=60*Math.sqrt(sp)+10;o.le=sp;o.lf=-35*sp;o.sx=1+.12*sp;o.sy=1/o.sx;o.lx=4;
      if(k>0&&S.landed<k){S.landed=k}}
    else{var w2=(q-.5)/.1,s3=Math.sin(Math.PI*w2);o={x:b[0],y:b[1]-8,sc:b[2]*1.15};o.sy=1-.14*s3;o.sx=1+.12*s3;
      if(S.landed<k+1){S.landed=k+1;pads[k+1].bob.v=1.4;ripple(b[0],b[1],b[2])}}
    if(q<.5&&u<.05&&k>=0){pads[k].bob.v=Math.max(pads[k].bob.v,.6)}
    S.pos=o;pose(o)};
  S.fin=function(el_,t,dt){var L=PADS[4],o={x:L[0],y:L[1]-8,sc:L[2]*1.15};var c=el_%0.9;o.th=c<.5?Math.sin(Math.PI*c/.5)*.55:0;
    if(el_>.2){fhappy.setAttribute("opacity",1);o.blink=1}o.rot=Math.sin(el_*6)*3*Math.max(0,1-el_/1.5);
    var op=clamp((el_-.1)/.9,0,1),e=1-Math.pow(1-op,3);petals.forEach(function(p){tr(p.e,"rotate("+f1(p.i*lerp(7,24,e))+" 0 0)")});lcore.setAttribute("opacity",e.toFixed(2));pose(o)};
  return S}

/* ==========================================================
   ПЛЫВИ — рыбка из водорослей к ракушке
   ========================================================== */
function makeSWIM(R){var S={};S.vb="0 -84 1600 1067";
  bgRect(R,"url(#gSea)");
  el("path",{d:"M-1600 -1200 L3200 -1200 L3200 26 C1400 46 1200 10 900 30 C600 50 300 10 0 30 L-1600 30Z",fill:"#DCE6FF",opacity:.7},R);
  var raysG=el("g",{},R),rays=[];[[300,90],[620,130],[980,110],[1300,150]].forEach(function(r){var g=el("path",{d:"M"+(r[0]-30)+" 0 L"+(r[0]+30)+" 0 L"+(r[0]+r[1]+80)+" 720 L"+(r[0]+r[1]-80)+" 720Z",fill:"#FFFFFF",opacity:.1},raysG);rays.push({e:g,x:r[0],ph:rr(0,6)})});
  // distant reef
  el("path",{d:"M-1600 740 L0 740 C80 640 160 700 230 620 C300 560 360 680 440 650 C540 610 600 700 700 690 C820 680 860 600 960 640 C1060 680 1120 610 1220 630 C1320 650 1400 590 1600 660 L3200 660 L3200 2100 L-1600 2100Z",fill:"#6B91D6",opacity:.45},R);
  hill(R,"sand","M-1600 790 L0 790 C220 760 420 780 640 772 C880 764 1100 790 1340 776 C1460 769 1540 772 1600 775 L3200 775","url(#gSand)");
  grain(R,["sand"]);
  var dots=el("g",{},R);for(var d=0;d<70;d++)el("ellipse",{cx:f1(rr(0,1600)),cy:f1(rr(790,890)),rx:f1(rr(2,5)),ry:f1(rr(1.5,3)),fill:rnd()<.5?"#F8B888":"#D0A090",opacity:.8},dots);
  // rocks, starfish, shells
  [[150,800,70,40],[230,812,46,26],[1480,796,80,44],[1410,812,44,24]].forEach(function(r){el("ellipse",{cx:r[0],cy:r[1],rx:r[2],ry:r[3],fill:"#A8B0C8"},R);el("ellipse",{cx:r[0]-r[2]*.25,cy:r[1]-r[3]*.35,rx:r[2]*.45,ry:r[3]*.3,fill:"#C3CFE2"},R)});
  var star=el("g",{transform:"translate(620 840) rotate(12)"},R);el("path",{d:"M0 -26 L8 -8 L26 -6 L12 6 L16 24 L0 14 L-16 24 L-12 6 L-26 -6 L-8 -8Z",fill:"#F97A4F",stroke:"#F97A4F","stroke-width":6,"stroke-linejoin":"round"},star);
  [[-2,-14],[6,2],[-6,4]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:2.5,fill:"#FDDDD0"},star)});
  [[900,846,.7],[400,860,.6]].forEach(function(s){var g=el("g",{transform:"translate("+s[0]+" "+s[1]+") scale("+s[2]+")"},R);el("path",{d:"M-24 8 A26 26 0 0 1 24 8Z",fill:"#FCC4BC"},g);for(var i=0;i<5;i++)el("path",{d:"M0 8 L"+f1(-20+i*10)+" -14",stroke:"#F8A488","stroke-width":3},g)});
  // coral
  var coral=el("g",{transform:"translate(1390 790)"},R);
  [["M0 0 C-4 -40 -30 -60 -40 -100","#F97A4F",16],["M0 0 C6 -50 20 -80 10 -130","#F97A4F",18],["M6 -60 C24 -70 40 -90 46 -110","#F97A4F",12],["M-20 -50 C-40 -54 -56 -66 -62 -80","#F97A4F",11],["M30 0 C40 -30 60 -40 70 -66","#FC88A8",13]].forEach(function(c){el("path",{d:c[0],stroke:c[1],"stroke-width":c[2],fill:"none","stroke-linecap":"round"},coral)});
  // seaweed
  var weeds=[];[[250,800,330,"#289440",16],[300,806,260,"#88A848",14],[455,800,300,"#289440",15],[520,806,230,"#4AA010",13],[180,804,220,"#4AA010",12],[760,790,200,"#88A848",13],[1130,800,240,"#289440",14],[1560,800,260,"#4AA010",14]].forEach(function(w){weeds.push({e:el("path",{fill:"none",stroke:w[3],"stroke-width":w[4],"stroke-linecap":"round"},R),x:w[0],y:w[1],h:w[2],ph:rr(0,6),kick:{x:0,v:0},hit:false})});
  // shell (goal)
  var shell=el("g",{transform:"translate(1240 792) scale(1.15)"},R);
  el("path",{d:"M-56 0 A56 22 0 0 0 56 0Z",fill:"#F8A488"},shell);var pearl=el("circle",{cx:0,cy:-2,r:12,fill:"#FFFCDC"},shell);el("circle",{cx:-4,cy:-6,r:4,fill:"#FFFFFF"},shell);
  var lid=el("g",{},shell);el("path",{d:"M-56 0 A56 50 0 0 1 56 0Z",fill:"#FCC4BC"},lid);for(var l=0;l<7;l++)el("path",{d:"M0 0 L"+f1(Math.cos(Math.PI*(1+(l+1)/8))*52)+" "+f1(Math.sin(Math.PI*(1+(l+1)/8))*46),stroke:"#F8A488","stroke-width":3.5},lid);
  // bubbles
  var bubs=[],BG=el("g",{},R);for(var b=0;b<26;b++){var bg=el("g",{opacity:0},BG);el("circle",{r:10,fill:"#FFFFFF",opacity:.25,stroke:"#FFFFFF","stroke-width":2.5},bg);el("circle",{cx:-3,cy:-3,r:2.5,fill:"#FFFFFF"},bg);bubs.push({e:bg,life:0})}
  function bubble(x,y,s){for(var i=0;i<bubs.length;i++){var q=bubs[i];if(q.life<=0){q.life=1;q.x=x;q.y=y;q.s=s;q.ph=rr(0,6);q.v=rr(60,100);return}}}
  // fish
  var FI=el("g",{},R),FB=el("g",{},FI),tail=el("g",{},FB);
  el("path",{d:"M-56 0 C-80 -32 -112 -48 -122 -38 C-106 -14 -106 14 -122 38 C-112 48 -80 32 -56 0Z",fill:"#F97A4F",opacity:.95},tail);
  el("path",{d:"M-70 -6 L-108 -28 M-72 0 L-112 0 M-70 6 L-108 28",stroke:"#FFC880","stroke-width":3,"stroke-linecap":"round",opacity:.7},tail);
  var dors=el("path",{d:"M-34 -40 C-14 -80 28 -70 34 -40Z",fill:"#F97A4F"},FB);
  el("path",{d:"M-22 38 C-10 60 14 56 16 40Z",fill:"#F97A4F"},FB);
  el("ellipse",{cx:0,cy:0,rx:68,ry:47,fill:"url(#gFish)"},FB);
  el("ellipse",{cx:8,cy:20,rx:46,ry:20,fill:"#FFC880",opacity:.85},FB);
  var pec=el("g",{},FB);el("ellipse",{cx:0,cy:22,rx:18,ry:9,fill:"#F97A4F",opacity:.9},pec);
  el("circle",{cx:36,cy:-12,r:15,fill:"#FFFFFF"},FB);var fpup=el("g",{},FB);el("circle",{cx:39,cy:-11,r:8.5,fill:"#2C3A5C"},fpup);el("circle",{cx:42,cy:-15,r:3,fill:"#FFFFFF"},fpup);
  var flid=el("ellipse",{cx:36,cy:-12,rx:16,ry:16,fill:"#FF8A20",opacity:0},FB);
  var shap=el("path",{d:"M28 -12 q8 -10 16 0",stroke:"#2C3A5C","stroke-width":4,fill:"none","stroke-linecap":"round",opacity:0},FB);
  el("circle",{cx:28,cy:10,r:8,fill:"#FC88A8",opacity:.7},FB);
  el("ellipse",{cx:65,cy:5,rx:5,ry:4.5,fill:"none",stroke:"#2C3A5C","stroke-width":2.5},FB);
  var path=el("path",{d:"M380 470 C520 380 660 320 800 350 C960 384 990 560 870 575 C750 590 720 420 880 360 C1060 300 1380 380 1460 520 C1520 640 1460 720 1360 728",fill:"none",visibility:"hidden"},R),PL=0;
  var tw={blink:2,bub:1.5},lidA={x:0,v:0},lastB=0;
  S.ACT=6.0;S.snd="swim";var fy={x:1,v:0},lastAng=0;
  S.init=function(){PL=path.getTotalLength()};
  S.reset=function(){S.pos={x:380,y:470,sc:1.15};S.rot=0;fy.x=1;fy.v=0;lastAng=0;shap.setAttribute("opacity",0);lidA.x=0;lidA.v=0;S.lidT=0;weeds.forEach(function(w){w.hit=false})};
  S.center=function(){return{x:S.pos.x,y:S.pos.y,sc:S.pos.sc}};
  function pose(o){tr(FI,"translate("+f1(o.x)+" "+f1(o.y)+") scale("+o.sc.toFixed(3)+")");
    tr(FB,"rotate("+f1(o.rot||0)+") scale("+(o.sx||1).toFixed(3)+" "+((o.sy||1)*fy.x).toFixed(3)+")");
    tr(tail,"rotate("+f1(o.tail||0)+" -56 0)");tr(pec,"rotate("+f1(o.pec||0)+" -12 18)");tr(dors,"translate(0 "+f1(o.dy||0)+")");tr(fpup,"translate("+f1(o.lx||0)+" 0)");
    lidK(flid,36,-12,16,o.blink||0)}
  S.ambient=function(t,dt,phase){
    rays.forEach(function(r){tr(r.e,"rotate("+f1(Math.sin(t*.4+r.ph)*2)+" "+r.x+" 0)");r.e.setAttribute("opacity",(.08+.04*Math.sin(t*.7+r.ph)).toFixed(3))});
    weeds.forEach(function(w){if(phase==="act"&&!w.hit&&Math.abs(w.x-S.pos.x)<80&&S.pos.y>w.y-w.h-60){w.hit=true;w.kick.v=6*(S.dir||1)}spring(w.kick,0,10,2.4,dt);
      var pts="M"+w.x+" "+w.y,n=6;for(var i=1;i<=n;i++){var k=i/n,x=w.x+Math.sin(t*1.2+w.ph+i*.6)*14*k+w.kick.x*40*k*k,y=w.y-w.h*k;pts+=" L"+f1(x)+" "+f1(y)}w.e.setAttribute("d",pts)});
    if(t>tw.bub){tw.bub=t+rr(.8,1.6);bubble(rr(120,1500),800,rr(.4,.8))}
    bubs.forEach(function(q){if(q.life>0){q.life-=dt*.35;q.y-=q.v*dt;var x=q.x+Math.sin(t*3+q.ph)*6;tr(q.e,"translate("+f1(x)+" "+f1(q.y)+") scale("+q.s.toFixed(2)+")");q.e.setAttribute("opacity",Math.min(1,q.life*3).toFixed(2));if(q.y<40)q.life=0}else q.e.setAttribute("opacity",0)});
    spring(lidA,S.lidT||0,30,5,dt);tr(lid,"rotate("+f1(lidA.x)+" -56 0)")};
  S.idle=function(t,dt,attn){var o={x:380,y:470+Math.sin(t*1.6)*8,sc:1.15};o.tail=Math.sin(t*3.2)*10;o.pec=Math.sin(t*7)*20;o.rot=Math.sin(t*1.6)*3;o.dy=Math.sin(t*3)*2;
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2.2,4)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;o.lx=attn?3:Math.sin(t*.8)*2;
    if(t>(tw.mb||2)){tw.mb=t+rr(2,3.4);bubble(o.x+76*1.15,o.y+4,.45)}
    if(attn){o.tail=Math.sin(t*9)*14}S.pos=o;pose(o)};
  S.act=function(el_,dt,first){var u=clamp(el_/S.ACT,0,1),e=easeArrive(u,.7),calm=u>.88?.35+.65*(1-u)/.12:1;
    var pa=Math.max(0,Math.min(PL-4,e*PL)),p=path.getPointAtLength(e*PL),p0=path.getPointAtLength(pa),q=path.getPointAtLength(pa+4),ang=Math.atan2(q.y-p0.y,q.x-p0.x)*180/Math.PI;S.dir=q.x>=p.x?1:-1;
    var o={x:p.x,y:p.y,sc:lerp(1.15,1.0,u)};spring(fy,Math.cos(ang*Math.PI/180)>=0?1:-1,90,14,dt);fy.x=clamp(fy.x,-1,1);lastAng=ang;o.tail=28*Math.sin(2*Math.PI*el_/.5)*calm;o.rot=ang+4*Math.sin(2*Math.PI*el_/.5)*calm;o.pec=Math.sin(el_*14)*30;o.sx=1+.03*Math.sin(2*Math.PI*el_/.5);o.lx=4;
    if(el_-lastB>.14||first){lastB=el_;var a=(o.rot+180)*Math.PI/180;bubble(o.x+Math.cos(a)*110*o.sc,o.y+Math.sin(a)*110*o.sc,rr(.35,.6))}
    if(u>.9)S.lidT=-38;
    S.pos=o;pose(o);return u>=1};
  S.fin=function(el_,t,dt){var o={x:S.pos.x,y:S.pos.y+Math.sin(el_*2)*4,sc:S.pos.sc};o.tail=Math.sin(el_*16)*Math.min(1,el_/.3)*18*Math.max(.3,1-el_/1.2);o.rot=lastAng+Math.sin(el_*5)*6*Math.min(1,el_/.4)*Math.max(0,1-el_/1.6);o.pec=Math.sin(el_*10)*25;
    if(el_>.25){shap.setAttribute("opacity",1);o.blink=1}if(el_<.6&&Math.floor(el_*8)!==Math.floor((el_-dt)*8)&&el_>.2)bubble(o.x+Math.cos(lastAng*Math.PI/180)*76*o.sc,o.y,.5);pose(o)};
  return S}


/* ==========================================================
   БЕГИ — зайчик по дорожке к морковке
   ========================================================== */
function makeBEGI(R){
  var S={};S.vb="0 -84 1600 1067";S.ACT=3.0;S.snd="begi";
  R.innerHTML='<rect x="-1600" y="-1200" width="4800" height="3300" fill="url(#sky)"/>'+
  '<g id="hsun" transform="translate(1180 175)"><circle r="150" fill="url(#sunGlow)"/><g id="hrays"></g><circle r="58" fill="#FFD400"/><circle r="58" fill="none" stroke="#DCB510" stroke-width="5" opacity=".35"/><circle cx="-16" cy="-18" r="18" fill="#FFF8A8" opacity=".75"/></g>'+
  '<g id="hclouds"></g>'+
  '<path id="hFar" d="M-1600 470 L0 470 C170 395 330 420 470 440 C620 460 700 380 860 390 C1010 400 1110 450 1260 420 C1400 392 1500 410 1600 440 L3200 440 L3200 2100 L-1600 2100Z" fill="url(#hillFar)"/>'+
  '<g id="farTrees"></g>'+
  '<path id="hMid" d="M-1600 560 L0 560 C220 500 420 520 600 545 C780 570 900 505 1100 500 C1300 495 1450 540 1600 520 L3200 520 L3200 2100 L-1600 2100Z" fill="url(#hillMid)"/>'+
  '<g id="midTex"></g>'+
  '<path id="hMeadow" d="M-1600 640 L0 640 C300 600 520 620 760 610 C1000 600 1200 560 1600 585 L3200 585 L3200 2100 L-1600 2100Z" fill="url(#meadow)"/>'+
  '<g id="meadowTex"></g><g id="road"></g><g id="decoBack"></g><g id="patch"></g><g id="dust"></g>'+
  '<g id="hareRoot"><ellipse id="hshadow" cx="0" cy="0" rx="78" ry="13" fill="#2C3A5C" opacity=".2"/><g id="hop"><g id="rig">'+
  '<g id="legF2"><rect x="30" y="-70" width="15" height="66" rx="7.5" fill="#A8B0C8"/><ellipse cx="42" cy="-5" rx="14" ry="7" fill="#A8B0C8"/></g>'+
  '<g id="htail"><circle cx="-88" cy="-94" r="20" fill="#FFFFFF"/><circle cx="-96" cy="-100" r="11" fill="#FFFFFF"/><circle cx="-84" cy="-88" r="12" fill="#EAF1FF"/></g>'+
  '<g id="legB"><ellipse cx="-30" cy="-9" rx="40" ry="12" fill="#A8B0C8"/><ellipse cx="-8" cy="-9" rx="12" ry="9" fill="#C3CFE2"/><ellipse cx="-48" cy="-56" rx="46" ry="44" fill="url(#bodyShade)"/></g>'+
  '<ellipse cx="-5" cy="-82" rx="82" ry="54" fill="url(#bodyShade)"/><ellipse cx="22" cy="-60" rx="46" ry="27" fill="#EAF1FF"/>'+
  '<g id="legF"><rect x="44" y="-72" width="17" height="70" rx="8.5" fill="#C3CFE2"/><ellipse cx="57" cy="-4" rx="16" ry="8" fill="#EAF1FF"/></g>'+
  '<g id="hhead"><g id="earL"><g transform="rotate(-16 66 -176)"><ellipse cx="66" cy="-238" rx="21" ry="64" fill="#A8B0C8"/><ellipse cx="68" cy="-232" rx="10" ry="46" fill="#F8B888" opacity=".7"/></g></g>'+
  '<g id="earR"><g transform="rotate(7 98 -180)"><ellipse cx="98" cy="-246" rx="24" ry="70" fill="url(#headShade)"/><ellipse cx="99" cy="-240" rx="12" ry="52" fill="#FCC4BC"/><path d="M92 -282q6 22 2 48" fill="none" stroke="#FC88A8" stroke-width="3" stroke-linecap="round" opacity=".5"/></g></g>'+
  '<circle cx="88" cy="-140" r="48" fill="url(#headShade)"/><ellipse cx="123" cy="-122" rx="27" ry="21" fill="#EAF1FF"/><circle cx="96" cy="-115" r="12" fill="#FCC4BC" opacity=".9"/>'+
  '<g id="eyeOpen"><ellipse cx="106" cy="-152" rx="10" ry="13" fill="#2C3A5C"/><circle cx="109.5" cy="-157" r="4" fill="#FFFFFF"/><circle cx="103" cy="-146" r="1.8" fill="#FFFFFF"/></g>'+
  '<path id="eyeHappy" d="M95 -150q11 -13 22 0" fill="none" stroke="#2C3A5C" stroke-width="5" stroke-linecap="round" opacity="0"/>'+
  '<path d="M93 -172q12 -8 22 -2" fill="none" stroke="#A8B0C8" stroke-width="3.5" stroke-linecap="round"/>'+
  '<g id="hnose"><ellipse cx="147" cy="-131" rx="8" ry="6" fill="#FC88A8"/><ellipse cx="145" cy="-133" rx="3" ry="1.8" fill="#FFFFFF" opacity=".7"/></g>'+
  '<path d="M146 -125q-2 9 -10 10M146 -125q3 9 11 8" fill="none" stroke="#2C3A5C" stroke-width="2.6" stroke-linecap="round"/>'+
  '<path d="M134 -120l-30 -4M134 -115l-28 6M152 -122l26 -6M152 -117l24 4" stroke="#8C98B4" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>'+
  '</g></g></g></g><g id="decoFront"></g><g id="butterflies"></g>';
  var center=el("path",{d:"M340 770 C560 792 600 642 820 640 S1080 560 1215 548",fill:"none",visibility:"hidden"},R);
  var full=el("path",{d:"M-760 812 C-260 800 100 745 340 770 C560 792 600 642 820 640 S1080 560 1215 548 C1350 536 1450 528 1556 532",fill:"none",visibility:"hidden"},R);
  var LEN=0,FL=0,PRE=0,built=false;
  function P(s){return center.getPointAtLength(clamp(s,0,LEN))}
  function tangent(s){var a=P(s-2),b=P(s+2);return Math.atan2(b.y-a.y,b.x-a.x)}
  function halfW(s){return lerp(78,30,s/LEN)}
  function scaleAt(s){return lerp(.78,.5,s/LEN)}
  function sidePoint(s,side,extra){var p=P(s),a=tangent(s),w=halfW(s)+extra;return{x:p.x-Math.sin(a)*w*side,y:p.y+Math.cos(a)*w*side}}
  function FP(f){return full.getPointAtLength(clamp(f,0,FL))}
  function Ftan(f){var a=FP(f-2),b=FP(f+2);return Math.atan2(b.y-a.y,b.x-a.x)}
  function FW(f){if(f<PRE)return lerp(96,78,f/PRE);if(f<PRE+LEN)return lerp(78,30,(f-PRE)/LEN);return lerp(30,1.5,(f-PRE-LEN)/(FL-PRE-LEN))}
  var clouds=[],flowers=[],carrot,bflies=[],dust=[],H={};
  S.init=function(){
    LEN=center.getTotalLength();FL=full.getTotalLength();
    var lo=0,hi=FL;for(var i=0;i<40;i++){var m=(lo+hi)/2;if(full.getPointAtLength(m).x<340)lo=m;else hi=m}PRE=lo;
    var q=function(id){return R.querySelector("#"+id)};
    var road=q("road"),L=[],Rr=[],N=140;
    for(i=0;i<=N;i++){var f=i/N*FL,p=FP(f),a=Ftan(f),w=FW(f);L.push([p.x+Math.sin(a)*w,p.y-Math.cos(a)*w]);Rr.push([p.x-Math.sin(a)*w,p.y+Math.cos(a)*w])}
    var d="M"+L.map(function(z){return f1(z[0])+" "+f1(z[1])}).join(" L")+" L"+Rr.slice().reverse().map(function(z){return f1(z[0])+" "+f1(z[1])}).join(" L")+"Z";
    el("path",{d:d,fill:"#F8B888",stroke:"#F8B888","stroke-width":12,"stroke-linejoin":"round"},road);el("path",{id:"hroadShape",d:d,fill:"#FDE6C4"},road);
    var mid=[];for(var k=0;k<=N;k++){var f2=k/N*FL,pp=FP(f2),aa=Ftan(f2),off=FW(f2)*.35;mid.push(f1(pp.x+Math.sin(aa)*off)+" "+f1(pp.y-Math.cos(aa)*off))}
    el("path",{d:"M"+mid.join(" L"),fill:"none",stroke:"#FFFCDC","stroke-width":10,"stroke-linecap":"round",opacity:.75},road);
    for(var j=0;j<110;j++){var f3=rr(0,FL),side=rr(-.85,.85),p3=FP(f3),a3=Ftan(f3),w3=FW(f3)*side,sc=FW(f3)/100;
      el("ellipse",{cx:f1(p3.x-Math.sin(a3)*w3),cy:f1(p3.y+Math.cos(a3)*w3),rx:f1(rr(3,7)*sc*1.4+.5),ry:f1(rr(2,4)*sc*1.4+.4),fill:rnd()<.5?"#D0A090":"#F8B888",opacity:.85},road)}
    for(var m2=0;m2<190;m2++){var f4=rr(0,FL),sd=rnd()<.5?-1:1,a4=Ftan(f4),p4=FP(f4),w4=FW(f4)-2,qq={x:p4.x-Math.sin(a4)*w4*sd,y:p4.y+Math.cos(a4)*w4*sd},h=rr(10,22)*Math.max(.3,FW(f4)/70);
      el("path",{d:"M"+f1(qq.x)+" "+f1(qq.y)+" q"+f1(rr(-4,4))+" "+f1(-h/2)+" "+f1(rr(-6,6))+" "+f1(-h),stroke:rnd()<.5?"#4AA010":"#6E9A30","stroke-width":3,"stroke-linecap":"round",fill:"none"},road)}
    R.insertBefore(grain(null,["hFar"]),q("farTrees"));R.insertBefore(grain(null,["hMid","hMeadow","hroadShape"]),q("decoBack"));
    blades(q("midTex"),160,0,1600,520,900,"#88A848",12,2.4);blades(q("meadowTex"),380,0,1600,610,900,"#6E9A30",16,2.8);blades(q("meadowTex"),120,0,1600,640,900,"#B0D870",14,2.4);
    [[250,440,1],[330,428,.8],[640,420,.9],[960,402,1.1],[1040,410,.8],[1330,418,.95]].forEach(function(t){tree(q("farTrees"),t[0],t[1],t[2])});
    [[300,150,1,.25],[760,115,.75,.18],[1500,215,.9,.22]].forEach(function(c){var cg=el("g",{},q("hclouds"));
      [[0,0,48],[45,-18,40],[88,4,38],[-42,10,32],[40,18,44]].forEach(function(b){el("circle",{cx:b[0],cy:b[1],r:b[2],fill:"#FFFFFF"},cg)});
      el("ellipse",{cx:22,cy:42,rx:110,ry:14,fill:"#D3E2FF",opacity:.6},cg);clouds.push({g:cg,x:c[0],y:c[1],s:c[2],v:c[3]*14})});
    for(i=0;i<12;i++){var an=i/12*Math.PI*2;el("path",{d:"M"+f1(Math.cos(an)*76)+" "+f1(Math.sin(an)*76)+" L"+f1(Math.cos(an)*104)+" "+f1(Math.sin(an)*104),stroke:"#FFD400","stroke-width":10,"stroke-linecap":"round",opacity:.75},q("hrays"))}
    var back=q("decoBack"),front=q("decoFront");
    for(i=0;i<22;i++){var s=rr(.06,.98)*LEN,sd2=rnd()<.5?-1:1,qp=sidePoint(s,sd2,rr(16,90));flower(sd2<0?back:front,qp.x,qp.y,scaleAt(s)*1.25,Math.floor(rnd()*4),flowers)}
    [[120,730,1.2],[1500,690,1],[90,860,1.4],[1520,860,1.3],[640,880,1.3],[980,870,1.2],[1420,640,.8],[200,640,.9]].forEach(function(f,i){flower(front,f[0],f[1],f[2],i%4,flowers)});
    var mu=el("g",{transform:"translate(1330 715) scale(.95)"},front);el("path",{d:"M-10 0 q-4 -28 2 -36 h16 q6 8 2 36z",fill:"#FFFCDC"},mu);el("path",{d:"M-38 -30 q38 -54 76 0 q-38 10 -76 0z",fill:"#CC1A14"},mu);
    [[-18,-38,6],[6,-48,7],[22,-34,5]].forEach(function(z){el("circle",{cx:z[0],cy:z[1],r:z[2],fill:"#FFFFFF"},mu)});
    var bu=el("g",{transform:"translate(1010 572) scale(.8)"},back);[[-30,0,34],[10,-14,40],[48,2,32]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#289440"},bu)});
    [[-20,-10],[18,-30],[40,-6],[0,4]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:6,fill:"#CC1A14"},bu)});
    var cp=el("clipPath",{id:"soilClip"},DEFS);el("rect",{x:-80,y:-220,width:160,height:226},cp);
    var end=P(LEN);[[74,62,.9],[26,70,.8],[118,76,.75]].forEach(function(o,i){var cg=el("g",{transform:"translate("+(end.x+o[0])+" "+(end.y+o[1])+") scale("+o[2]+")"},q("patch"));
      if(i===0){carrot=el("g",{},el("g",{"clip-path":"url(#soilClip)"},cg));el("path",{d:"M-14 -6 Q0 70 2 70 Q6 70 14 -6Z",fill:"url(#carrotG)"},carrot);
        [[-6,14],[6,30],[-4,44]].forEach(function(l){el("path",{d:"M"+l[0]+" "+l[1]+" h8",stroke:"#DC8818","stroke-width":3,"stroke-linecap":"round"},carrot)});
        el("path",{d:"M0 -6 q-16 -26 -10 -40 M0 -6 q2 -30 8 -42 M0 -6 q14 -22 22 -30",stroke:"#4AA010","stroke-width":7,"stroke-linecap":"round",fill:"none"},carrot)}
      else el("path",{d:"M0 0 q-12 -26 -6 -36 M0 0 q2 -26 8 -38 M0 0 q12 -20 18 -26",stroke:"#4AA010","stroke-width":7,"stroke-linecap":"round",fill:"none"},cg);
      el("ellipse",{cx:0,cy:6,rx:30,ry:11,fill:"#C47860"},cg);el("ellipse",{cx:-6,cy:3,rx:14,ry:4,fill:"#D0A090",opacity:.8},cg)});
    [[.32,-1,"#F97A4F","#FFD400"],[.62,1,"#B890E0","#FCD0DC"]].forEach(function(b){var qp2=sidePoint(b[0]*LEN,b[1],46),bg=el("g",{},q("butterflies")),wl=el("g",{},bg),wr=el("g",{},bg);
      el("ellipse",{cx:-11,cy:-8,rx:12,ry:9,fill:b[2]},wl);el("ellipse",{cx:-8,cy:6,rx:8,ry:6,fill:b[3]},wl);el("ellipse",{cx:11,cy:-8,rx:12,ry:9,fill:b[2]},wr);el("ellipse",{cx:8,cy:6,rx:8,ry:6,fill:b[3]},wr);
      el("ellipse",{cx:0,cy:0,rx:2.6,ry:11,fill:"#2C3A5C"},bg);el("path",{d:"M0 -10 q-4 -8 -7 -10 M0 -10 q4 -8 7 -10",stroke:"#2C3A5C","stroke-width":1.6,fill:"none"},bg);
      bflies.push({g:bg,wl:wl,wr:wr,hx:qp2.x,hy:qp2.y-30,x:qp2.x,y:qp2.y-30,s:scaleAt(b[0]*LEN)*1.5,fly:false,ph:rnd()*6,trig:b[0]*LEN-120})});
    for(i=0;i<30;i++)dust.push({e:el("circle",{r:1,fill:i%2?"#FDE6C4":"#F8B888",opacity:0},q("dust")),life:0});
    ["hareRoot","hshadow","hop","rig","legB","legF","legF2","hhead","earL","earR","eyeOpen","eyeHappy","hnose","htail","hrays"].forEach(function(id){H[id]=q(id)});
  };
  function puff(x,y,sc){var n=0;for(var i=0;i<dust.length&&n<3;i++){var d=dust[i];if(d.life<=0){d.life=1;d.x=x+rr(-14,6)*sc;d.y=y-rr(0,6)*sc;d.vx=-rr(30,90)*sc;d.vy=-rr(20,50)*sc;d.r0=rr(7,12)*sc;n++}}}
  function pose(o){
    tr(H.hareRoot,"translate("+o.x.toFixed(2)+" "+o.y.toFixed(2)+") scale("+o.sc.toFixed(4)+")");
    var sh=1-clamp(o.h/120,0,.5);tr(H.hshadow,"scale("+sh.toFixed(3)+" 1)");H.hshadow.setAttribute("opacity",(.2*sh).toFixed(3));
    tr(H.hop,"translate(0 "+(-o.h).toFixed(2)+")");tr(H.rig,"rotate("+o.rot.toFixed(2)+" 0 -80) scale("+o.sx.toFixed(4)+" "+o.sy.toFixed(4)+")");
    tr(H.legB,"rotate("+o.lb.toFixed(2)+" -46 -60)");tr(H.legF,"rotate("+o.lf.toFixed(2)+" 52 -68)");tr(H.legF2,"rotate("+o.lf2.toFixed(2)+" 37 -68)");
    tr(H.hhead,"rotate("+o.hd.toFixed(2)+" 60 -112)");tr(H.earL,"rotate("+o.el.toFixed(2)+" 68 -178)");tr(H.earR,"rotate("+o.er.toFixed(2)+" 96 -180)");
    tr(H.eyeOpen,"translate(106 -152) scale(1 "+o.blink.toFixed(3)+") translate(-106 152)");
    tr(H.hnose,"translate(147 -131) scale("+(1+o.nose*.12).toFixed(3)+" "+(1-o.nose*.15).toFixed(3)+") translate(-147 131)");tr(H.htail,"rotate("+o.tl.toFixed(2)+" -80 -88)")}
  function O(){var p=P(S.s),sc=scaleAt(S.s);return{x:p.x,y:p.y,sc:sc,h:0,rot:0,sx:1,sy:1,lb:0,lf:0,lf2:0,hd:0,el:0,er:0,blink:1,nose:0,tl:0}}
  var st={nextTwitch:1,twitch:-9,nextBlink:2,blinkT:-9,nextFidget:2.5,fidget:null,lastBound:-1};
  S.reset=function(){S.s=0;st.fidget=null;st.lastBound=-1;tr(carrot,"translate(0 44)");flowers.forEach(function(f){f.hit=false});
    H.eyeHappy.setAttribute("opacity",0);H.eyeOpen.setAttribute("opacity",1);bflies.forEach(function(b){b.fly=false;b.x=b.hx;b.y=b.hy})};
  S.center=function(){var p=P(S.s),sc=scaleAt(S.s);return{x:p.x+20*sc,y:p.y-130*sc,sc:sc}};
  S.ambient=function(t,dt,phase){
    clouds.forEach(function(c){c.x+=c.v*dt;if(c.x>1750)c.x=-200;tr(c.g,"translate("+f1(c.x)+" "+c.y+") scale("+c.s+")")});tr(H.hrays,"rotate("+(t*6%360).toFixed(2)+")");
    var hp=P(S.s);flowers.forEach(function(f){var d=Math.hypot(f.x-hp.x,f.y-hp.y);if(phase==="act"&&d<110&&!f.hit){f.kv=-6;f.hit=true}
      f.kv+=(-f.kick*90-f.kv*7)*dt;f.kick+=f.kv*dt;tr(f.g,"rotate("+(Math.sin(t*1.6+f.ph)*3+f.kick*18).toFixed(2)+")")});
    dust.forEach(function(d){if(d.life>0){d.life-=dt*1.8;d.x+=d.vx*dt;d.y+=d.vy*dt;d.vy+=20*dt;var k=1-d.life;d.e.setAttribute("cx",f1(d.x));d.e.setAttribute("cy",f1(d.y));d.e.setAttribute("r",f1(d.r0*(1+k*1.6)));d.e.setAttribute("opacity",Math.max(0,d.life*.8).toFixed(2))}else d.e.setAttribute("opacity",0)});
    bflies.forEach(function(b){if(!b.fly&&phase==="act"&&S.s>b.trig){b.fly=true;b.vx=rr(60,120);b.vy=-rr(140,200)}
      var f=b.fly?Math.abs(Math.sin(t*28+b.ph)):(.55+.45*Math.abs(Math.sin(t*2.2+b.ph)));
      if(b.fly){b.x+=b.vx*dt+Math.sin(t*6+b.ph)*40*dt;b.y+=b.vy*dt}else{b.x=b.hx+Math.sin(t*.9+b.ph)*3;b.y=b.hy+Math.sin(t*1.7+b.ph)*4}
      tr(b.wl,"scale("+(.2+.8*f).toFixed(3)+" 1)");tr(b.wr,"scale("+(.2+.8*f).toFixed(3)+" 1)");tr(b.g,"translate("+f1(b.x)+" "+f1(b.y)+") scale("+b.s.toFixed(3)+")")})};
  S.idle=function(t,dt,attn){var o=O();
    var b=Math.sin(t*2.6);o.sy=1+.018*b;o.sx=1-.01*b;o.hd=Math.sin(t*1.1)*2.5;o.tl=Math.sin(t*3)*4;
    if(t>st.nextTwitch){st.twitch=t;st.nextTwitch=t+rr(1.2,2.6);st.twEar=rnd()<.6?1:0}
    var tw=t-st.twitch;if(tw<.6){var k=Math.sin(tw*28)*Math.exp(-tw*7)*14;if(st.twEar)o.er+=k;else o.el+=k}
    if(t>st.nextBlink){st.blinkT=t;st.nextBlink=t+rr(2.2,4)}var bt=t-st.blinkT;if(bt<.16)o.blink=Math.max(.08,Math.abs(bt-.08)/.08);
    if(Math.floor(t/2.1)%2===0)o.nose=Math.max(0,Math.sin(t*22));
    if(!st.fidget&&t>st.nextFidget){st.fidget={t:t,k:rnd()<.55?"hop":"thump"};st.nextFidget=t+rr(2.2,3.6)}
    if(st.fidget){var ft=t-st.fidget.t,p=P(0),sc=scaleAt(0);
      if(st.fidget.k==="hop"){if(ft<.42){var u=ft/.42,s=Math.sin(Math.PI*u);o.h=s*16;o.lb=s*18;o.lf=-s*16;o.lf2=-s*12;o.el-=s*12;o.er-=s*10;if(ft+dt>=.42)puff(p.x-20*sc,p.y,sc*.6)}else st.fidget=null}
      else{if(ft<.6){o.lb=-Math.abs(Math.sin(ft*Math.PI/.15))*14;o.hd+=4;if(Math.abs(ft-.15)<dt||Math.abs(ft-.45)<dt)puff(p.x-20*sc,p.y,sc*.4)}else st.fidget=null}}
    if(attn){o.el-=6;o.er-=4;o.hd-=3}pose(o)};
  S.act=function(e,dt,first,t){var uu=clamp(e/3.0,0,1);S.s=(.6*uu+.4*(uu-Math.sin(2*Math.PI*uu)/(2*Math.PI)))*LEN;
    var o=O(),ang=tangent(S.s)*180/Math.PI,ph=(e/.3)%1,bi=Math.floor(e/.3);
    var sp=Math.sin(Math.PI*ph),amp=uu<.03?.4+.6*uu/.03:(uu>.9?Math.max(.35,(1-uu)/.1):1);
    o.h=sp*46*amp;o.sx=1+.16*sp*amp-.07*(1-sp);o.sy=1/o.sx;o.rot=clamp(ang,-14,14)*.6-12*Math.sin(2*Math.PI*ph)*amp;
    o.lb=50*Math.sin(2*Math.PI*ph)*amp;o.lf=-55*Math.sin(2*Math.PI*(ph+.12))*amp;o.lf2=-48*Math.sin(2*Math.PI*(ph+.2))*amp;
    o.el=-38+Math.sin(t*30)*5;o.er=-32+Math.sin(t*30+1)*6;o.hd=-6;o.tl=Math.sin(t*25)*10;
    if(bi!==st.lastBound&&bi>0)puff(o.x-30*o.sc,o.y,o.sc);st.lastBound=bi;pose(o);if(uu>=1){S.s=LEN;return true}};
  S.fin=function(e,t,dt){var o=O(),hh=0;[.12,.5].forEach(function(h0,i){var q=e-h0;if(q>=0&&q<.36)hh=Math.sin(Math.PI*q/.36)*(i?26:40)});
    o.h=hh;o.sx=1+.08*(hh/40);o.sy=1/o.sx;o.el=-6+Math.sin(t*12)*8*Math.max(0,1-e);o.er=4+Math.sin(t*12+1)*10*Math.max(0,1-e);o.hd=Math.sin(e*4)*5;o.lb=hh*.4;o.lf=-hh*.6;o.lf2=-hh*.5;o.tl=Math.sin(t*14)*10;
    H.eyeOpen.setAttribute("opacity",0);H.eyeHappy.setAttribute("opacity",1);
    var cu=clamp((e-.15)/.4,0,1),cb=Math.sin(Math.PI*cu)*12;tr(carrot,"translate(0 "+f1(44-80*Math.min(1,cu*1.3)-cb)+") rotate("+f1(Math.sin(e*6)*6*Math.max(0,1-e))+")");
    if(e>1.6)o.sy*=1+.018*Math.sin(t*2.6);pose(o)};
  return S}

/* shared flower used by several scenes */
function flower(parent,x,y,s,kind,list){var g=el("g",{},parent),inner=el("g",{},g);
  el("path",{d:"M0 0 q-3 "+(-22*s)+" 0 "+(-44*s),stroke:"#4AA010","stroke-width":4*s,fill:"none","stroke-linecap":"round"},inner);
  el("ellipse",{cx:-8*s,cy:-14*s,rx:9*s,ry:4*s,fill:"#4AA010",transform:"rotate(-30 "+(-8*s)+" "+(-14*s)+")"},inner);
  var hy=-46*s;
  if(kind===0){for(var i=0;i<8;i++)el("ellipse",{cx:0,cy:hy-11*s,rx:5*s,ry:11*s,fill:"#FFFFFF",transform:"rotate("+(i*45)+" 0 "+hy+")"},inner);el("circle",{cx:0,cy:hy,r:7*s,fill:"#FFD400"},inner)}
  else if(kind===1){el("path",{d:"M"+(-12*s)+" "+hy+" q0 "+(-22*s)+" "+(6*s)+" "+(-24*s)+" q-2 "+(10*s)+" "+(6*s)+" "+(10*s)+" q"+(10*s)+" "+(-2*s)+" "+(-6*s)+" "+(14*s)+" Z",fill:"#FC88A8"},inner);el("path",{d:"M"+(-12*s)+" "+hy+" q"+(12*s)+" "+(14*s)+" "+(24*s)+" 0 q-4 "+(-18*s)+" "+(-12*s)+" "+(-20*s)+" q-8 "+(2*s)+" "+(-12*s)+" "+(20*s)+"Z",fill:"#FCD0DC"},inner)}
  else if(kind===2){[[-7,0],[7,0],[0,-8],[0,7]].forEach(function(o){el("circle",{cx:o[0]*s,cy:hy+o[1]*s,r:7*s,fill:"#B890E0"},inner)});el("circle",{cx:0,cy:hy,r:5*s,fill:"#FFD400"},inner)}
  else{for(var j=0;j<5;j++)el("circle",{cx:0,cy:hy-8*s,r:6*s,fill:"#FF8A20",transform:"rotate("+(j*72)+" 0 "+hy+")"},inner);el("circle",{cx:0,cy:hy,r:5*s,fill:"#FFF8A8"},inner)}
  tr(g,"translate("+f1(x)+" "+f1(y)+")");if(list)list.push({g:inner,x:x,y:y,ph:rnd()*6,kick:0,kv:0});return g}
function flowersSway(list,t,dt,hx,hy,active){list.forEach(function(f){if(active&&!f.hit&&Math.hypot(f.x-hx,f.y-hy)<110){f.kv=-6;f.hit=true}
  f.kv+=(-f.kick*90-f.kv*7)*dt;f.kick+=f.kv*dt;tr(f.g,"rotate("+(Math.sin(t*1.6+f.ph)*3+f.kick*18).toFixed(2)+")")})}
function daySky(R,sunX,sunY){bgRect(R,"url(#gDay)");var sun=el("g",{transform:"translate("+sunX+" "+sunY+")"},R);el("circle",{r:110,fill:"url(#gMoon)"},sun);var rays=el("g",{},sun);
  for(var i=0;i<12;i++){var a=i/12*Math.PI*2;el("path",{d:"M"+f1(Math.cos(a)*70)+" "+f1(Math.sin(a)*70)+" L"+f1(Math.cos(a)*94)+" "+f1(Math.sin(a)*94),stroke:"#FFD400","stroke-width":9,"stroke-linecap":"round",opacity:.75},rays)}
  el("circle",{r:52,fill:"#FFD400"},sun);el("circle",{cx:-14,cy:-16,r:16,fill:"#FFF8A8",opacity:.75},sun);return rays}
function cloud(R,x,y,s){var cl=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},R);[[0,0,46],[42,-16,38],[84,4,36],[-40,10,30],[38,16,42]].forEach(function(b){el("circle",{cx:b[0],cy:b[1],r:b[2],fill:"#FFFFFF"},cl)});return {g:cl,x:x,y:y,s:s}}
function pathObj(R,d){var p=el("path",{d:d,fill:"none",visibility:"hidden"},R);return{p:p,L:0,init:function(){this.L=p.getTotalLength()},at:function(u){return p.getPointAtLength(clamp(u,0,1)*this.L)},ang:function(u){var a=this.at(u-.004),b=this.at(u+.004);return Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI}}}
function easeGo(u){return .6*u+.4*(u-Math.sin(2*Math.PI*u)/(2*Math.PI))}
function bee(R){var g=el("g",{},R),w=el("g",{},g);el("ellipse",{cx:-4,cy:-12,rx:9,ry:6,fill:"#FFFFFF",opacity:.85},w);el("ellipse",{cx:6,cy:-12,rx:9,ry:6,fill:"#FFFFFF",opacity:.85},w);
  el("ellipse",{cx:0,cy:0,rx:14,ry:10,fill:"#FFD400"},g);el("path",{d:"M-4 -9 v18 M4 -9 v18",stroke:"#2C3A5C","stroke-width":4},g);el("circle",{cx:13,cy:-2,r:2,fill:"#2C3A5C"},g);return{g:g,w:w}}

/* ==========================================================
   ПОЛЗИ — улитка ползёт по садовой дорожке; камера низко, у земли, и плавно едет следом
   ========================================================== */
function easeArrive(u,v0){return v0*u+(3-2*v0)*u*u+(v0-2)*u*u*u}
function ribbon(path,w0,w1,n){var L=[],Rr=[];for(var i=0;i<=n;i++){var u=i/n,p=path.at(u),a=path.ang(u)*Math.PI/180,w=w0(u);L.push([p.x+Math.sin(a)*w,p.y-Math.cos(a)*w]);Rr.push([p.x-Math.sin(a)*w,p.y+Math.cos(a)*w])}
  return "M"+L.map(function(z){return f1(z[0])+" "+f1(z[1])}).join(" L")+" L"+Rr.slice().reverse().map(function(z){return f1(z[0])+" "+f1(z[1])}).join(" L")+"Z"}
function uAtX(path,x){var lo=0,hi=1;for(var i=0;i<40;i++){var m=(lo+hi)/2;if(path.at(m).x<x)lo=m;else hi=m}return lo}
function makeCRAWL(R){
  var S={};S.vb="0 210 1100 733";S.ACT=4.4;S.snd="crawl";
  bgRect(R,"url(#gDay)");
  var sun=el("g",{transform:"translate(1130 290)"},R);el("circle",{r:100,fill:"url(#gMoon)"},sun);el("circle",{r:46,fill:"#FFD400"},sun);el("circle",{cx:-12,cy:-14,r:14,fill:"#FFF8A8",opacity:.75},sun);
  // garden fence with an open gate where the path leaves the garden
  var fence=el("g",{},R);
  for(var i=0;i<22;i++){var x=-40+i*90;el("path",{d:"M"+x+" 560 V370 l30 -26 l30 26 V560Z",fill:i%2?"#D0A090":"#F8B888"},fence)}
  el("rect",{x:-60,y:420,width:2000,height:22,rx:6,fill:"#C47860"},fence);el("rect",{x:-60,y:500,width:2000,height:22,rx:6,fill:"#C47860"},fence);
  [[150,560,1.1],[560,570,.9],[920,555,1.2],[1260,565,1],[1720,560,1.1]].forEach(function(b){var g=el("g",{transform:"translate("+b[0]+" "+b[1]+") scale("+b[2]+")"},R);[[-50,0,50],[0,-24,60],[56,0,48]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#289440"},g)});el("circle",{cx:-10,cy:-46,r:20,fill:"#4AA010",opacity:.5},g)});
  hill(R,"crG","M-1600 590 L0 590 C300 575 700 585 1000 578 C1300 572 1450 580 1600 584 L3200 584","#88A848");
  var path=pathObj(R,"M-260 830 C80 836 300 812 520 790 C760 766 920 760 1100 744 C1300 726 1500 716 1900 708");
  var soil=el("path",{id:"crPath",d:"",fill:"#D0A090"},R),soilEdge=el("path",{d:"",fill:"none",stroke:"#C47860","stroke-width":8},R);
  var tex=el("g",{},R),back=el("g",{},R),trail=el("path",{d:"",fill:"none",stroke:"#FFFFFF","stroke-width":9,"stroke-linecap":"round","stroke-linejoin":"round",opacity:.55},R);
  var flowers=[],berry=el("g",{},R),SN=el("g",{},R),front=el("g",{},R),B=bee(R);
  var shadow=el("ellipse",{cx:0,cy:2,rx:90,ry:10,fill:"#2C3A5C",opacity:.15},SN),body=el("g",{},SN);
  var foot=el("ellipse",{cx:-8,cy:-12,rx:88,ry:14,fill:"#FDE6C4"},body);
  var neck=el("g",{},body);el("path",{d:"M30 -10 C46 -30 50 -56 62 -70 C80 -86 98 -70 92 -48 C86 -28 78 -16 70 -6Z",fill:"#FDE6C4"},neck);
  var stalks=[],eyes=[],happy=[];[[66,-74,58,-118],[82,-72,96,-114]].forEach(function(s2){var sg=el("g",{},neck);el("path",{d:"M"+s2[0]+" "+s2[1]+" L"+s2[2]+" "+s2[3],stroke:"#FDE6C4","stroke-width":8,"stroke-linecap":"round"},sg);
    el("circle",{cx:s2[2],cy:s2[3],r:10,fill:"#FDE6C4"},sg);var eg=el("g",{},sg);el("circle",{cx:s2[2]+2,cy:s2[3],r:6,fill:"#2C3A5C"},eg);el("circle",{cx:s2[2]+4,cy:s2[3]-2.5,r:2,fill:"#FFFFFF"},eg);eyes.push(eg);
    happy.push(el("path",{d:"M"+(s2[2]-6)+" "+(s2[3]+1)+" q6 -8 12 0",stroke:"#2C3A5C","stroke-width":3.5,fill:"none","stroke-linecap":"round",opacity:0},sg));stalks.push({g:sg,x:s2[0],y:s2[1]})});
  el("path",{d:"M76 -48 q8 6 14 -2",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},neck);el("circle",{cx:72,cy:-56,r:6,fill:"#FCC4BC"},neck);
  var shell=el("g",{},body);el("circle",{cx:-18,cy:-62,r:54,fill:"#F8A488"},shell);el("circle",{cx:-18,cy:-62,r:54,fill:"none",stroke:"#C47860","stroke-width":5},shell);
  el("path",{d:"M-18 -62 m0 0 a8 8 0 0 1 14 4 a16 16 0 0 1 -18 18 a26 26 0 0 1 -26 -30 a36 36 0 0 1 42 -32 a44 44 0 0 1 32 52",fill:"none",stroke:"#C47860","stroke-width":8,"stroke-linecap":"round"},shell);
  el("ellipse",{cx:-36,cy:-92,rx:14,ry:8,fill:"#FDDDD0",opacity:.7,transform:"rotate(-30 -36 -92)"},shell);
  function straw(x,y,s){var g=el("g",{transform:"translate("+f1(x)+" "+f1(y)+") scale("+s+")"},berry);el("path",{d:"M0 -30 C26 -30 30 -6 18 14 C10 28 4 34 0 34 C-4 34 -10 28 -18 14 C-30 -6 -26 -30 0 -30Z",fill:"#CC1A14"},g);
    [[-10,-14],[6,-18],[12,0],[-6,4],[0,18],[-14,-2],[8,14]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:2,ry:3,fill:"#FFF8A8"},g)});
    el("path",{d:"M0 -30 l-16 -8 l10 -2 l6 -12 l6 12 l10 2Z",fill:"#4AA010"},g)}
  var SCL=1.7,U0=0,U1=0,tw={blink:2,look:2},trailPts=[];
  S.init=function(){path.init();U0=uAtX(path,250);U1=uAtX(path,960);
    var d=ribbon(path,function(u){return lerp(92,66,u)},0,90);soil.setAttribute("d",d);soilEdge.setAttribute("d",d);R.insertBefore(soilEdge,soil);
    R.insertBefore(grain(null,["crG","crPath"]),tex);
    blades(tex,420,-100,1700,590,1000,"#6E9A30",18,3);blades(tex,120,-100,1700,600,1000,"#B0D870",16,2.6);
    for(var j=0;j<70;j++){var p2=path.at(rr(0,1));el("ellipse",{cx:f1(p2.x+rr(-30,30)),cy:f1(p2.y+rr(-40,40)),rx:f1(rr(3,7)),ry:f1(rr(2,4)),fill:rnd()<.5?"#C47860":"#F8B888",opacity:.8},tex)}
    var e=path.at(U1);var plant=el("g",{},berry);[[e.x+120,e.y+50],[e.x+180,e.y+64],[e.x+90,e.y+70]].forEach(function(l){el("ellipse",{cx:f1(l[0]),cy:f1(l[1]),rx:44,ry:20,fill:"#4AA010",transform:"rotate(-20 "+f1(l[0])+" "+f1(l[1])+")"},plant)});
    straw(e.x+120,e.y+110,1.3);straw(e.x+190,e.y+96,1.05);straw(e.x+70,e.y+118,.9);
    for(var k=0;k<16;k++){var u3=rr(.02,.8),p3=path.at(u3),sd=rnd()<.5?-1:1;flower(sd<0?back:front,p3.x+rr(-30,30),p3.y+sd*rr(100,150)-(sd<0?10:0),rr(1.3,1.7),Math.floor(rnd()*4),flowers)}
    for(var g2=0;g2<14;g2++){var gx=rr(-60,1660),gy=rr(940,1000);el("path",{d:"M"+f1(gx)+" "+f1(gy)+" q"+f1(rr(-20,20))+" -120 "+f1(rr(-40,40))+" "+f1(-rr(150,260)),stroke:rnd()<.5?"#4AA010":"#289440","stroke-width":13,"stroke-linecap":"round",fill:"none"},front)}};
  function U(){return lerp(U0,U1,S.k||0)}
  S.cam=function(){var p=path.at(U());return[clamp(p.x-420,0,500),210,1100,733]};
  S.reset=function(){S.k=0;trailPts=[];trail.setAttribute("d","");happy.forEach(function(h){h.setAttribute("opacity",0)});eyes.forEach(function(e){e.setAttribute("opacity",1)});flowers.forEach(function(f){f.hit=false})};
  S.center=function(){var p=path.at(U());return{x:p.x,y:p.y-70*SCL,sc:SCL}};
  function pose(o){tr(SN,"translate("+f1(o.x)+" "+f1(o.y)+") scale("+SCL+")");tr(body,"rotate("+f1(o.rot||0)+" 0 0)");
    tr(foot,"translate(-8 -12) scale("+(o.fs||1).toFixed(3)+" 1) translate(8 12)");tr(shell,"translate("+f1(o.shx||0)+" "+f1(o.shy||0)+") rotate("+f1(o.shr||0)+" -18 -20)");
    tr(neck,"translate("+f1(o.nx||0)+" 0)");stalks.forEach(function(s,i){tr(s.g,"rotate("+f1((o.sa||0)+(i?1:-1)*(o.sp||0))+" "+s.x+" "+s.y+") translate(0 "+f1(o.sr||0)+")")});
    eyes.forEach(function(e){tr(e,"translate("+f1(o.lx||0)+" 0)")})}
  S.ambient=function(t,dt,phase){var p=path.at(U());flowersSway(flowers,t,dt,p.x,p.y,phase==="act");
    var bx=p.x+260+Math.sin(t*.6)*200,by=470+Math.sin(t*1.3)*50;tr(B.g,"translate("+f1(bx)+" "+f1(by)+") scale("+(Math.cos(t*.6)>0?1.5:-1.5)+" 1.5)");tr(B.w,"scale(1 "+(0.3+.7*Math.abs(Math.sin(t*40))).toFixed(2)+")")};
  S.idle=function(t,dt,attn){var p=path.at(U()),o={x:p.x,y:p.y};o.rot=clamp(path.ang(U()),-12,12)*.6;o.shy=Math.sin(t*1.8)*2;o.fs=1+.01*Math.sin(t*1.8);o.sa=Math.sin(t*.9)*6;o.sp=Math.sin(t*2.3)*4;
    if(t>tw.look){tw.lT=t;tw.look=t+rr(2.6,4)}var lt=t-(tw.lT||-9);if(lt<1.2)o.sr=Math.sin(Math.PI*lt/1.2)*26;
    o.lx=attn?2:Math.sin(t*.7)*1.5;if(attn){o.sa=8;o.sr=-4}pose(o)};
  S.act=function(e,dt,first){var u=clamp(e/S.ACT,0,1),ph=(e/.55)%1;S.k=easeArrive(u,.7);
    var p=path.at(U()),o={x:p.x,y:p.y};o.rot=clamp(path.ang(U()),-12,12)*.6;o.fs=1+.08*Math.sin(2*Math.PI*ph);o.nx=6*Math.sin(2*Math.PI*ph);o.shx=-3*Math.sin(2*Math.PI*ph);o.shy=-1-Math.cos(2*Math.PI*ph);o.shr=2*Math.sin(2*Math.PI*ph);
    o.sa=6+4*Math.sin(e*4);o.sp=4*Math.sin(e*5);o.lx=2;
    trailPts.push(f1(p.x-90*SCL)+" "+f1(p.y-4));if(trailPts.length>1)trail.setAttribute("d","M"+trailPts.join(" L"));pose(o);return u>=1};
  S.fin=function(e,t,dt){var p=path.at(U()),o={x:p.x,y:p.y};o.rot=clamp(path.ang(U()),-12,12)*.6;o.sa=Math.sin(e*8)*10*Math.max(.2,1-e/1.5);o.sp=6+Math.sin(e*10)*6;o.shy=-Math.abs(Math.sin(e*6))*4*Math.max(0,1-e);
    if(e>.25){happy.forEach(function(h){h.setAttribute("opacity",1)});eyes.forEach(function(x){x.setAttribute("opacity",0)})}pose(o)};
  return S}

/* ==========================================================
   ИДИ — утёнок шагает к маме-утке; камера идёт следом
   ========================================================== */
function makeWALK(R){
  var S={};S.vb="0 300 1000 667";S.ACT=5.5;S.snd="walk";
  bgRect(R,"url(#gDay)");
  var sun=el("g",{transform:"translate(1010 410)"},R);el("circle",{r:100,fill:"url(#gMoon)"},sun);el("circle",{r:46,fill:"#FFD400"},sun);el("circle",{cx:-12,cy:-14,r:14,fill:"#FFF8A8",opacity:.75},sun);
  var cl=[cloud(R,300,345,.8),cloud(R,820,325,.6)];
  hill(R,"wFar","M-1600 440 L0 440 C240 400 480 418 700 424 C940 432 1100 398 1340 404 C1460 408 1540 416 1600 414 L3200 414","#CCF0A0");R.appendChild(grain(null,["wFar"]));
  var trees=el("g",{},R);[[160,436,.9],[420,420,.8],[760,424,1],[840,428,.8],[1460,410,.9]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  hill(R,"wG","M-1600 540 L0 540 C300 512 600 526 900 520 C1150 515 1350 500 1600 506 L3200 506","#ACD48C");
  var path=pathObj(R,"M-260 846 C80 850 300 824 520 800 C720 778 900 770 1100 776 C1300 782 1500 790 1900 800");
  var soil=el("path",{id:"wPath",d:"",fill:"#FDE6C4"},R),soilEdge=el("path",{d:"",fill:"none",stroke:"#F8B888","stroke-width":10},R);
  var tex=el("g",{},R);
  var pond=el("g",{},R);el("ellipse",{cx:1330,cy:640,rx:300,ry:72,fill:"#98B8FC"},pond);el("ellipse",{cx:1330,cy:634,rx:276,ry:58,fill:"#B8E0E0"},pond);
  var glints=[];for(var i=0;i<6;i++)glints.push({e:el("path",{d:"M0 0 h"+f1(rr(20,40)),stroke:"#FFFFFF","stroke-width":4,"stroke-linecap":"round",opacity:.6},pond),x:rr(1200,1560),y:rr(612,668),ph:rr(0,6)});
  var back=el("g",{},R),flowers=[];
  var reeds=[];function reed(x,y,h,s){var g=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},R),inner=el("g",{},g);
    el("path",{d:"M0 0 q-4 "+(-h/2)+" 2 "+(-h),stroke:"#88A848","stroke-width":7,fill:"none","stroke-linecap":"round"},inner);el("rect",{x:-6,y:-h-10,width:14,height:44,rx:7,fill:"#985038"},inner);
    el("path",{d:"M0 0 q16 "+(-h*.35)+" 30 "+(-h*.55),stroke:"#4AA010","stroke-width":6,fill:"none","stroke-linecap":"round"},inner);reeds.push({e:inner,ph:rr(0,6)})}
  [[1040,600,170,.9],[1070,606,200,1],[1600,600,180,.9],[1630,596,140,.8]].forEach(function(r){reed(r[0],r[1],r[2],r[3])});
  // mama duck on the water, facing the path
  var M=el("g",{transform:"translate(1250 672) scale(-1.6 1.6)"},R),MB=el("g",{},M);
  el("ellipse",{cx:0,cy:4,rx:86,ry:16,fill:"#98B8FC"},M);
  el("path",{d:"M-70 -20 C-70 -60 40 -64 60 -36 C70 -20 60 4 30 6 L-50 6 C-66 6 -72 -6 -70 -20Z",fill:"#FFFFFF"},MB);el("path",{d:"M-72 -24 l-22 -14 l10 22Z",fill:"#FFFFFF"},MB);
  el("path",{d:"M-30 -34 C-10 -46 20 -44 30 -30 C10 -26 -14 -24 -30 -34Z",fill:"#EAF1FF"},MB);
  var MH=el("g",{},MB);el("path",{d:"M40 -36 C36 -60 40 -86 58 -96 C80 -106 100 -90 96 -70 C94 -56 80 -48 66 -40Z",fill:"#FFFFFF"},MH);
  el("path",{d:"M92 -78 C108 -80 120 -76 122 -70 C112 -64 100 -64 92 -66Z",fill:"#FF8A20"},MH);var mEye=el("g",{},MH);el("circle",{cx:80,cy:-82,r:5,fill:"#2C3A5C"},mEye);el("circle",{cx:81.5,cy:-84,r:1.6,fill:"#FFFFFF"},mEye);el("circle",{cx:82,cy:-70,r:6,fill:"#FCC4BC",opacity:.8},MH);
  var mHappy=el("path",{d:"M75 -82 q5 -6 10 0",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round",opacity:0},MH);
  // duckling (big, close to camera)
  var D=el("g",{},R),DS=el("ellipse",{cx:0,cy:0,rx:46,ry:9,fill:"#2C3A5C",opacity:.15},D),DB=el("g",{},D);
  var legL=el("g",{},DB),legR=el("g",{},DB);[[legL,-10,"#DC8818"],[legR,12,"#FF8A20"]].forEach(function(l){el("path",{d:"M"+l[1]+" -24 V-4",stroke:l[2],"stroke-width":6,"stroke-linecap":"round"},l[0]);el("path",{d:"M"+(l[1]-8)+" -2 L"+(l[1]+14)+" -2 L"+(l[1]+4)+" -10Z",fill:l[2],stroke:l[2],"stroke-width":4,"stroke-linejoin":"round"},l[0])});
  var torso=el("g",{},DB);
  el("path",{d:"M-46 -54 l-16 -12 l6 18Z",fill:"#FFD400"},torso);
  el("ellipse",{cx:0,cy:-48,rx:46,ry:36,fill:"#FFD400"},torso);el("ellipse",{cx:8,cy:-38,rx:30,ry:18,fill:"#FFF8A8",opacity:.8},torso);
  var wing=el("g",{},torso);el("ellipse",{cx:-10,cy:-52,rx:24,ry:15,fill:"#DCB510",opacity:.85,transform:"rotate(-12 -10 -52)"},wing);
  var head=el("g",{},torso);el("circle",{cx:34,cy:-96,r:31,fill:"#FFD400"},head);el("path",{d:"M30 -126 q4 -14 12 -8 q-2 -10 8 -6",stroke:"#FFD400","stroke-width":6,fill:"none","stroke-linecap":"round"},head);
  var beak=el("g",{},head);el("path",{d:"M58 -96 C70 -100 82 -98 84 -92 C76 -86 66 -86 58 -88Z",fill:"#FF8A20"},beak);
  var deye=el("g",{},head);el("circle",{cx:46,cy:-104,r:6.5,fill:"#2C3A5C"},deye);el("circle",{cx:48,cy:-106.5,r:2.2,fill:"#FFFFFF"},deye);
  var dlid=el("ellipse",{cx:46,cy:-104,rx:7.5,ry:7.5,fill:"#FFD400",opacity:0},head);
  var dHappy=el("path",{d:"M40 -104 q6 -8 12 0",stroke:"#2C3A5C","stroke-width":3.5,fill:"none","stroke-linecap":"round",opacity:0},head);
  el("circle",{cx:40,cy:-86,r:7,fill:"#F8B888",opacity:.8},head);
  var front=el("g",{},R),tw={blink:2,peep:3,flap:4.5},SCL=2.1,U0=0,U1=0;
  S.init=function(){path.init();U0=uAtX(path,220);U1=uAtX(path,860);
    var d=ribbon(path,function(u){return lerp(84,58,u)},0,80);soil.setAttribute("d",d);soilEdge.setAttribute("d",d);R.insertBefore(soilEdge,soil);
    R.insertBefore(grain(null,["wG","wPath"]),tex);
    blades(tex,380,-100,1700,510,1000,"#88A848",16,2.8);
    for(var j=0;j<50;j++){var p2=path.at(rr(0,1));el("ellipse",{cx:f1(p2.x+rr(-30,30)),cy:f1(p2.y+rr(-30,30)),rx:f1(rr(3,7)),ry:f1(rr(2,4)),fill:rnd()<.5?"#D0A090":"#F8B888",opacity:.8},tex)}
    for(var k=0;k<18;k++){var u3=rr(.02,.95),p3=path.at(u3),sd=rnd()<.5?-1:1;flower(sd<0?back:front,p3.x+rr(-30,30),p3.y+sd*rr(110,170)-(sd<0?0:0),rr(1.3,1.8),Math.floor(rnd()*4),flowers)}};
  function U(){return lerp(U0,U1,S.k||0)}
  S.cam=function(){var p=path.at(U());return[clamp(p.x-300,0,600),300,1000,667]};
  S.reset=function(){S.k=0;dHappy.setAttribute("opacity",0);mHappy.setAttribute("opacity",0);mEye.setAttribute("opacity",1);flowers.forEach(function(f){f.hit=false})};
  S.center=function(){var p=path.at(U());return{x:p.x+10*SCL,y:p.y-60*SCL,sc:SCL}};
  function pose(o){tr(D,"translate("+f1(o.x)+" "+f1(o.y)+") scale("+SCL+")");tr(DB,"translate(0 "+f1(-(o.h||0))+") rotate("+f1(o.rot||0)+" 0 -10)");
    tr(legL,"translate("+f1(o.s1||0)+" "+f1(-(o.l1||0))+")");tr(legR,"translate("+f1(o.s2||0)+" "+f1(-(o.l2||0))+")");tr(torso,"translate(0 "+f1(-(o.tb||0))+")");
    tr(head,"rotate("+f1(o.hd||0)+" 30 -70)");tr(wing,"rotate("+f1(o.wg||0)+" 4 -56)");tr(beak,"rotate("+f1(o.bk||0)+" 60 -92)");tr(deye,"translate("+f1(o.lx||0)+" 0)");lidK(dlid,46,-104,7.5,o.blink||0)}
  S.ambient=function(t,dt,phase){cl.forEach(function(c){c.x+=4*dt;if(c.x>1750)c.x=-200;tr(c.g,"translate("+f1(c.x)+" "+c.y+") scale("+c.s+")")});
    glints.forEach(function(g){tr(g.e,"translate("+f1(g.x+Math.sin(t*.6+g.ph)*14)+" "+f1(g.y)+")");g.e.setAttribute("opacity",(.35+.3*Math.sin(t*1.4+g.ph)).toFixed(2))});
    reeds.forEach(function(r){tr(r.e,"rotate("+f1(Math.sin(t*1.3+r.ph)*3)+")")});tr(MB,"translate(0 "+f1(Math.sin(t*1.2)*2)+") rotate("+f1(Math.sin(t*.8)*1.5)+")");
    if(phase!=="fin")tr(MH,"rotate("+f1(Math.sin(t*.7)*4)+" 50 -40)");var p=path.at(U());flowersSway(flowers,t,dt,p.x,p.y,phase==="act")};
  S.idle=function(t,dt,attn){var p=path.at(U()),o={x:p.x,y:p.y};o.rot=Math.sin(t*1.6)*2;o.hd=Math.sin(t*1.1)*4;
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    if(t>tw.peep){tw.pT=t;tw.peep=t+rr(2.4,3.8)}var pt=t-(tw.pT||-9);if(pt<.5){o.bk=-Math.abs(Math.sin(pt*Math.PI/.25))*14;o.hd-=6}
    if(t>tw.flap){tw.fT=t;tw.flap=t+rr(3,4.5)}var ft=t-(tw.fT||-9);if(ft<.5){o.wg=-Math.abs(Math.sin(ft*Math.PI/.125))*28;o.tb=Math.sin(Math.PI*ft/.5)*6}
    o.lx=attn?2:Math.sin(t*.8)*1.5;if(attn)o.hd=-6;pose(o)};
  // walking: one foot at a time steps forward (lifted), the other stays planted; body waddles over the planted foot
  S.act=function(e,dt,first){var u=clamp(e/S.ACT,0,1);S.k=easeArrive(u,.5);var p=path.at(U()),o={x:p.x,y:p.y};
    var n=e/.55,ph=n%1,left=Math.floor(n)%2===0,lift=Math.sin(Math.PI*ph),sw=-8+16*ph,amp=u>.92?Math.max(0,(1-u)/.08):1;
    if(left){o.l1=lift*12*amp;o.s1=sw*amp;o.s2=-sw*.4*amp}else{o.l2=lift*12*amp;o.s2=sw*amp;o.s1=-sw*.4*amp}
    o.rot=(left?7:-7)*Math.sin(Math.PI*ph)*amp+clamp(path.ang(U()),-8,8)*.5;o.tb=lift*3*amp;o.hd=(left?3:-3)*lift-2;o.wg=-4;o.lx=2;
    pose(o);return u>=1};
  S.fin=function(e,t,dt){var p=path.at(U()),o={x:p.x,y:p.y};var j=e<.6?Math.abs(Math.sin(Math.PI*e/.3)):0;o.h=j*12;o.wg=-Math.abs(Math.sin(e*14))*30*Math.max(0,1-e/1.2);o.hd=Math.sin(e*4)*6;
    if(e>.25){dHappy.setAttribute("opacity",1);o.blink=1;mHappy.setAttribute("opacity",1);mEye.setAttribute("opacity",0)}
    tr(MH,"rotate("+f1(Math.sin(e*5)*8*Math.max(0,1-e/1.8)-6)+" 50 -40)");pose(o)};
  return S}

/* ==========================================================
   СКАЧИ — лошадка галопом через заборчик к стогу сена
   ========================================================== */
function makeGALLOP(R){
  var S={};S.vb="100 170 1400 933";S.ACT=3.78;S.snd="gallop";
  var rays=daySky(R,1120,330),cl=[cloud(R,320,330,.9),cloud(R,860,305,.7)];
  hill(R,"gFar","M-1600 450 L0 450 C200 400 450 420 680 430 C900 440 1080 392 1320 400 C1460 405 1540 420 1600 418 L3200 418","#CCF0A0");R.appendChild(grain(null,["gFar"]));
  var trees=el("g",{},R);[[120,440,.9],[520,426,.85],[600,430,.7],[1060,398,1],[1500,414,.9]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  // barn far right
  var barn=el("g",{transform:"translate(1390 470) scale(.9)"},R);el("path",{d:"M-90 0 V-90 L0 -150 L90 -90 V0Z",fill:"#CC1A14"},barn);el("path",{d:"M-100 -86 L0 -156 L100 -86",stroke:"#FFFCDC","stroke-width":10,fill:"none","stroke-linejoin":"round"},barn);
  el("rect",{x:-30,y:-70,width:60,height:70,fill:"#985038"},barn);el("path",{d:"M-30 -70 L30 0 M30 -70 L-30 0",stroke:"#FFFCDC","stroke-width":5},barn);el("rect",{x:-24,y:-124,width:48,height:28,fill:"#FFFCDC"},barn);
  hill(R,"gG","M-1600 560 L0 560 C300 520 600 540 900 535 C1150 530 1350 512 1600 520 L3200 520","#ACD48C");
  hill(R,"gG2","M-1600 700 L0 700 C320 676 700 690 1000 684 C1260 680 1440 670 1600 674 L3200 674","#88A848");
  R.appendChild(grain(null,["gG","gG2"]));
  var tex=el("g",{},R);blades(tex,160,0,1600,530,700,"#88A848",12,2.4);blades(tex,380,-100,1700,680,1070,"#6E9A30",16,2.8);
  var flowers=[],back=el("g",{},R);
  // hay stack (goal)
  var hay=el("g",{transform:"translate(1290 690) scale(1.05)"},R);el("path",{d:"M-110 0 C-110 -120 -40 -170 0 -170 C40 -170 110 -120 110 0Z",fill:"#FFD400"},hay);
  for(var i=0;i<18;i++){var hx=rr(-90,90),hy=rr(-140,-10);el("path",{d:"M"+f1(hx)+" "+f1(hy)+" l"+f1(rr(-14,14))+" "+f1(rr(10,22)),stroke:"#DCB510","stroke-width":4,"stroke-linecap":"round"},hay)}
  el("path",{d:"M-110 0 h220",stroke:"#DCB510","stroke-width":8,"stroke-linecap":"round"},hay);
  var path=pathObj(R,"M300 800 C560 805 820 780 1000 770 C1080 766 1140 760 1180 758");
  var fence=el("g",{},R),dustG=el("g",{},R),dust=[];for(i=0;i<24;i++)dust.push({e:el("circle",{r:1,fill:i%2?"#FDE6C4":"#D0A090",opacity:0},dustG),life:0});
  // pony
  var P=el("g",{},R),PS=el("ellipse",{cx:0,cy:0,rx:110,ry:14,fill:"#2C3A5C",opacity:.15},P),PB=el("g",{},P);
  function leg(x,y,col,hoof){var g=el("g",{},PB),upper=el("g",{},g);el("rect",{x:x-9,y:y,width:18,height:52,rx:9,fill:col},upper);var lower=el("g",{},upper);el("rect",{x:x-8,y:y+44,width:16,height:42,rx:8,fill:col},lower);el("rect",{x:x-10,y:y+80,width:20,height:12,rx:4,fill:hoof},lower);return{g:upper,lo:lower,x:x,y:y}}
  var lBF=leg(-66,-96,"#A86448","#2C3A5C"),lFF=leg(44,-96,"#A86448","#2C3A5C");
  var tail=el("g",{},PB);el("path",{d:"M-92 -132 C-130 -130 -150 -96 -146 -56 C-130 -80 -118 -96 -96 -110Z",fill:"#985038"},tail);el("path",{d:"M-96 -126 C-122 -118 -136 -96 -138 -72",stroke:"#7A3E2C","stroke-width":5,fill:"none","stroke-linecap":"round"},tail);
  el("ellipse",{cx:-6,cy:-120,rx:96,ry:46,fill:"#C47860"},PB);el("ellipse",{cx:-10,cy:-104,rx:70,ry:22,fill:"#D0A090",opacity:.6},PB);
  var lBN=leg(-54,-96,"#C47860","#2C3A5C"),lFN=leg(56,-96,"#C47860","#2C3A5C");
  var neck=el("g",{},PB);el("path",{d:"M40 -150 C60 -190 80 -214 104 -222 L126 -190 C110 -172 96 -140 84 -112Z",fill:"#C47860"},neck);
  var head=el("g",{},neck);el("ellipse",{cx:132,cy:-206,rx:40,ry:26,fill:"#C47860",transform:"rotate(28 132 -206)"},head);el("ellipse",{cx:152,cy:-188,rx:22,ry:17,fill:"#FDE6C4",transform:"rotate(28 152 -188)"},head);
  el("ellipse",{cx:160,cy:-188,rx:3.5,ry:2.5,fill:"#985038"},head);el("path",{d:"M146 -176 q8 6 16 2",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  el("path",{d:"M108 -232 l2 -32 l18 26Z",fill:"#C47860"},head);el("path",{d:"M112 -236 l2 -18 l10 15Z",fill:"#FCC4BC"},head);
  var peye=el("g",{},head);el("ellipse",{cx:124,cy:-216,rx:7,ry:8,fill:"#2C3A5C"},peye);el("circle",{cx:126.5,cy:-219,r:2.4,fill:"#FFFFFF"},peye);
  var plid=el("ellipse",{cx:124,cy:-216,rx:8.5,ry:8.5,fill:"#C47860",opacity:0},head),pHappy=el("path",{d:"M117 -214 q7 -8 14 0",stroke:"#2C3A5C","stroke-width":3.5,fill:"none","stroke-linecap":"round",opacity:0},head);
  el("circle",{cx:136,cy:-196,r:7,fill:"#FCC4BC",opacity:.7},head);
  var mane=el("g",{},neck);el("path",{d:"M100 -232 C80 -230 60 -206 46 -160 C40 -142 34 -136 26 -130 C46 -128 58 -150 66 -170 C76 -196 90 -214 110 -222Z",fill:"#985038"},mane);
  el("path",{d:"M108 -236 C114 -248 126 -246 128 -236 C120 -240 114 -236 112 -228Z",fill:"#985038"},mane);
  var legs=[lBF,lBN,lFF,lFN],tw={blink:2,shake:3,paw:5};
  S.init=function(){path.init();var fp=path.at(.5);S.fx=fp.x+30;S.fy=fp.y;
    var f=el("g",{transform:"translate("+f1(S.fx)+" "+f1(S.fy)+")"},fence);[-46,46].forEach(function(x){el("rect",{x:x-8,y:-74,width:16,height:78,rx:4,fill:"#C47860"},f)});
    el("rect",{x:-62,y:-62,width:124,height:14,rx:5,fill:"#F8B888"},f);el("rect",{x:-62,y:-30,width:124,height:14,rx:5,fill:"#F8B888"},f);
    for(var k=0;k<14;k++){var u=rr(.03,.95),p=path.at(u),sd=rnd()<.5?-1:1;flower(sd<0?back:R,p.x+rr(-40,40),p.y+sd*rr(50,100)-(sd<0?60:0),rr(1,1.4),Math.floor(rnd()*4),flowers)}
    [[80,870,1.5],[700,885,1.4],[1520,860,1.4]].forEach(function(f2,i){flower(R,f2[0],f2[1],f2[2],i%4,flowers)})};
  S.reset=function(){S.u=0;pHappy.setAttribute("opacity",0);flowers.forEach(function(f){f.hit=false})};
  function scl(u){return lerp(1.3,1.15,u)}
  S.center=function(){var p=path.at(S.u||0),s=scl(S.u||0);return{x:p.x+20*s,y:p.y-130*s,sc:s}};
  function pose(o){tr(P,"translate("+f1(o.x)+" "+f1(o.y)+") scale("+o.sc.toFixed(3)+")");tr(PS,"scale("+(1-clamp((o.h||0)/200,0,.5)).toFixed(3)+" 1)");
    tr(PB,"translate(0 "+f1(-(o.h||0))+") rotate("+f1(o.rot||0)+" 0 -110)");tr(neck,"rotate("+f1(o.nk||0)+" 60 -140)");tr(head,"rotate("+f1(o.hd||0)+" 110 -214)");
    tr(tail,"rotate("+f1(o.tl||0)+" -92 -128)");tr(mane,"translate("+f1(o.mn||0)+" 0)");
    (o.legs||[0,0,0,0]).forEach(function(a,i){var L=legs[i];tr(L.g,"rotate("+f1(a)+" "+L.x+" "+(L.y+6)+")");tr(L.lo,"rotate("+f1((o.knee||[0,0,0,0])[i])+" "+L.x+" "+(L.y+48)+")")});
    tr(peye,"translate("+f1(o.lx||0)+" 0)");lidK(plid,124,-216,8.5,o.blink||0)}
  function puff(x,y,s){var n=0;dust.forEach(function(d){if(d.life<=0&&n<3){d.life=1;d.x=x+rr(-20,10)*s;d.y=y;d.vx=-rr(40,100)*s;d.vy=-rr(20,50)*s;d.r0=rr(8,13)*s;n++}})}
  S.ambient=function(t,dt,phase){tr(rays,"rotate("+(t*6%360).toFixed(1)+")");cl.forEach(function(c){c.x+=4*dt;if(c.x>1750)c.x=-200;tr(c.g,"translate("+f1(c.x)+" "+c.y+") scale("+c.s+")")});
    var p=path.at(S.u||0);flowersSway(flowers,t,dt,p.x,p.y,phase==="act");
    dust.forEach(function(d){if(d.life>0){d.life-=dt*1.8;d.x+=d.vx*dt;d.y+=d.vy*dt;var k=1-d.life;d.e.setAttribute("cx",f1(d.x));d.e.setAttribute("cy",f1(d.y));d.e.setAttribute("r",f1(d.r0*(1+k*1.5)));d.e.setAttribute("opacity",Math.max(0,d.life*.8).toFixed(2))}else d.e.setAttribute("opacity",0)})};
  S.idle=function(t,dt,attn){var p=path.at(0),o={x:p.x,y:p.y,sc:scl(0)};o.tl=Math.sin(t*1.7)*8;o.nk=Math.sin(t*1.1)*3;o.hd=Math.sin(t*.9)*4;o.mn=Math.sin(t*2)*1.5;
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    if(t>tw.shake){tw.sT=t;tw.shake=t+rr(2.4,4)}var sh=t-(tw.sT||-9);if(sh<.6){o.hd+=Math.sin(sh*30)*8*(1-sh/.6);o.mn+=Math.sin(sh*30)*4}
    if(t>tw.paw){tw.pT=t;tw.paw=t+rr(3,5)}var pw=t-(tw.pT||-9);if(pw<.7){var a=-Math.abs(Math.sin(pw*Math.PI/.35))*40;o.legs=[0,0,0,a];o.knee=[0,0,0,-a*1.4];if(Math.abs(pw-.35)<dt||Math.abs(pw-.7)<dt)puff(p.x+60*o.sc,p.y,o.sc*.7)}
    o.lx=attn?2:0;if(attn){o.nk=-6;o.hd=-4}pose(o)};
  S.act=function(e,dt,first){var u=clamp(e/S.ACT,0,1);S.u=easeGo(u);var p=path.at(S.u),o={x:p.x,y:p.y,sc:scl(S.u)},bi=Math.floor(e/.42),ph=(e/.42)%1;
    var jump=bi===4,amp=u<.03?.5:1,sp=Math.sin(Math.PI*ph),w=2*Math.PI*ph;
    if(jump){o.h=sp*140;o.rot=-14*Math.cos(Math.PI*ph);o.legs=[50*sp,50*sp,-70*sp,-70*sp];o.knee=[-60*sp,-60*sp,90*sp,90*sp];o.tl=30*sp;o.nk=-10*sp;o.mn=-4}
    else{o.h=Math.max(0,Math.sin(w))*18*amp;o.rot=4*Math.sin(w+1)*amp;
      o.legs=[34*Math.sin(w),34*Math.sin(w+.5),-34*Math.sin(w+2.2),-34*Math.sin(w+2.7)].map(function(a){return a*amp});
      o.knee=[Math.max(0,-Math.sin(w))*-30,Math.max(0,-Math.sin(w+.5))*-30,Math.max(0,Math.sin(w+2.2))*50,Math.max(0,Math.sin(w+2.7))*50];
      o.tl=18+8*Math.sin(w);o.nk=-6+5*Math.sin(w+1);o.mn=-3+2*Math.sin(w)}
    o.hd=-4;o.lx=2;if(!jump&&bi!==S.lb&&bi>0)puff(p.x-60*o.sc,p.y,o.sc);S.lb=bi;
    pose(o);return u>=1};
  S.fin=function(e,t,dt){var p=path.at(1),o={x:p.x,y:p.y,sc:scl(1)};var r=e<.9?Math.sin(Math.PI*e/.9):0;o.rot=-16*r;o.legs=[0,0,-40*r,-50*r];o.knee=[0,0,70*r,80*r];
    o.tl=Math.sin(e*10)*16*Math.max(.3,1-e/1.5);o.nk=-8*r+Math.sin(e*6)*3;o.hd=Math.sin(e*8)*6*Math.max(0,1-e/1.6);o.mn=Math.sin(e*12)*3;
    if(e>.25){pHappy.setAttribute("opacity",1);o.blink=1}if(e>.88&&e-dt<=.88)puff(p.x+50*o.sc,p.y,o.sc);pose(o)};
  return S}

/* ==========================================================
   СТУЧИ — дятел стучит по стволу, в дупле выглядывает гусеничка
   ========================================================== */
function makeKNOCK(R){
  var S={};S.vb="330 40 800 533";S.ACT=2.9;S.snd="knock";
  bgRect(R,"url(#gDay)");var cl=[cloud(R,1180,110,.9),cloud(R,260,80,.6)];
  // forest rows
  var far=el("g",{},R);for(var i=0;i<16;i++)el("circle",{cx:i*110-20+rr(-20,20),cy:rr(430,470),r:rr(70,100),fill:"#ACD48C"},far);
  var mid=el("g",{},R);for(i=0;i<12;i++){var x=i*150+rr(-30,30);el("rect",{x:x-10,y:470,width:20,height:120,fill:"#985038"},mid);el("circle",{cx:x,cy:rr(450,490),r:rr(70,90),fill:"#88A848"},mid)}
  hill(R,"kG","M-1600 640 L0 640 C300 610 700 625 1000 620 C1250 616 1440 606 1600 612 L3200 612","#88A848");R.appendChild(grain(null,["kG"]));
  var tex=el("g",{},R);blades(tex,300,0,1600,610,900,"#6E9A30",16,2.8);
  [[300,800,1],[1320,760,.9],[1080,860,1.1]].forEach(function(m){var g=el("g",{transform:"translate("+m[0]+" "+m[1]+") scale("+m[2]+")"},R);el("path",{d:"M-10 0 q-4 -28 2 -36 h16 q6 8 2 36z",fill:"#FFFCDC"},g);el("path",{d:"M-38 -30 q38 -54 76 0 q-38 10 -76 0z",fill:"#CC1A14"},g);[[-18,-38,6],[6,-48,7],[22,-34,5]].forEach(function(z){el("circle",{cx:z[0],cy:z[1],r:z[2],fill:"#FFFFFF"},g)})});
  var flowers=[];[[160,860,1.4],[520,880,1.3],[900,890,1.2],[1480,880,1.4],[1200,700,1]].forEach(function(f,i){flower(R,f[0],f[1],f[2],i%4,flowers)});
  // big trunk
  var T=el("g",{},R);el("path",{id:"kTrunk",d:"M540 1000 C556 700 560 300 566 -200 L716 -200 C720 300 724 700 760 1000Z",fill:"#985038"},T);T.appendChild(grain(null,["kTrunk"]));
  for(var bk=0;bk<46;bk++){var bx=rr(574,708),by=rr(-60,640),bl=rr(50,150);el("path",{d:"M"+f1(bx)+" "+f1(by)+" q"+f1(rr(-8,8))+" "+f1(bl/2)+" "+f1(rr(-4,4))+" "+f1(bl),stroke:rnd()<.6?"#7A3E2C":"#A86448","stroke-width":f1(rr(3,6)),fill:"none","stroke-linecap":"round",opacity:.6},T)}
  [[600,200,14,22],[690,520,12,18],[606,600,10,16]].forEach(function(k){el("ellipse",{cx:k[0],cy:k[1],rx:k[2],ry:k[3],fill:"#7A3E2C"},T);el("ellipse",{cx:k[0],cy:k[1],rx:k[2]*.55,ry:k[3]*.55,fill:"#A86448"},T)});
  el("path",{d:"M600 -100 q-10 200 6 420 M680 100 q12 220 -4 400 M630 520 q-8 160 4 320",stroke:"#7A3E2C","stroke-width":7,fill:"none","stroke-linecap":"round",opacity:.6},T);
  el("path",{d:"M520 1000 C560 960 580 920 590 880 M770 1000 C730 960 714 920 708 880",stroke:"#985038","stroke-width":30,fill:"none","stroke-linecap":"round"},T);
  el("path",{d:"M600 150 C540 130 480 120 410 140 L410 154 C480 136 540 146 598 170Z",fill:"#985038"},T);el("path",{d:"M700 110 C780 80 860 76 930 90 L930 102 C860 92 780 98 702 128Z",fill:"#985038"},T);
  for(var cr=0;cr<34;cr++){var ccx=rr(340,1000),ccy=rr(-120,110);if(ccx>560&&ccx<760)ccy=Math.min(ccy,60);el("circle",{cx:f1(ccx),cy:f1(ccy),r:f1(rr(55,95)),fill:["#289440","#2E9E46","#4AA010"][cr%3]},T)}
  for(var hl=0;hl<12;hl++)el("circle",{cx:f1(rr(360,980)),cy:f1(rr(-80,90)),r:f1(rr(16,34)),fill:"#70CC10",opacity:.45},T);
  [[420,150],[400,160],[930,96],[950,104]].forEach(function(l){el("circle",{cx:l[0],cy:l[1],r:26,fill:"#4AA010"},T)});
  // hole + caterpillar
  var HX=678,HY=330,hole=el("g",{transform:"translate("+HX+" "+HY+")"},T),holeS=el("g",{},hole);el("ellipse",{cx:0,cy:0,rx:26,ry:34,fill:"#7A3E2C"},holeS);el("ellipse",{cx:2,cy:2,rx:19,ry:27,fill:"#2C3A5C"},holeS);
  var catWrap=el("g",{"clip-path":"url(#holeClip)"},holeS),cat=el("g",{},catWrap);el("circle",{cx:0,cy:0,r:15,fill:"#70CC10"},cat);el("circle",{cx:-5,cy:-3,r:3,fill:"#2C3A5C"},cat);el("circle",{cx:5,cy:-3,r:3,fill:"#2C3A5C"},cat);
  el("path",{d:"M-5 5 q5 4 10 0",stroke:"#2C3A5C","stroke-width":2,fill:"none","stroke-linecap":"round"},cat);el("path",{d:"M-6 -14 l-3 -8 M6 -14 l3 -8",stroke:"#4AA010","stroke-width":2.5,"stroke-linecap":"round"},cat);
  var chips=[];for(i=0;i<14;i++)chips.push({e:el("ellipse",{rx:5,ry:2.6,fill:i%2?"#D0A090":"#C47860",opacity:0},R),life:0});
  // woodpecker (facing left, clinging to trunk's right side)
  var W=el("g",{},R),WB=el("g",{},W);
  el("path",{d:"M24 -10 L42 40 L28 36 L18 -6Z",fill:"#234888"},WB);
  el("ellipse",{cx:22,cy:-58,rx:30,ry:52,fill:"#2C3A5C"},WB);el("ellipse",{cx:12,cy:-50,rx:16,ry:36,fill:"#FFFFFF"},WB);
  var wing=el("g",{},WB);el("ellipse",{cx:34,cy:-60,rx:20,ry:40,fill:"#234888"},wing);[[30,-80],[38,-62],[32,-44]].forEach(function(c){el("ellipse",{cx:c[0],cy:c[1],rx:6,ry:3.5,fill:"#FFFFFF"},wing)});
  el("path",{d:"M4 -6 l-12 4 M4 -6 l-10 -6 M14 -4 l-8 8",stroke:"#A8B0C8","stroke-width":4,"stroke-linecap":"round"},WB);
  var head=el("g",{},WB);el("circle",{cx:6,cy:-118,r:30,fill:"#2C3A5C"},head);el("path",{d:"M-14 -128 C-8 -152 22 -156 32 -136 C20 -142 4 -140 -14 -128Z",fill:"#CC1A14"},head);
  el("ellipse",{cx:-2,cy:-108,rx:16,ry:11,fill:"#FFFFFF"},head);el("path",{d:"M-20 -120 L-62 -114 L-20 -108Z",fill:"#DCB510"},head);
  var weye=el("g",{},head);el("circle",{cx:-4,cy:-124,r:7,fill:"#FFFFFF"},weye);el("circle",{cx:-5.5,cy:-124,r:4.2,fill:"#2C3A5C"},weye);el("circle",{cx:-4.2,cy:-125.6,r:1.4,fill:"#FFFFFF"},weye);
  var wHappy=el("path",{d:"M-10 -122 q6 -7 12 0",stroke:"#FFFFFF","stroke-width":3.5,fill:"none","stroke-linecap":"round",opacity:0},head);
  var tw={blink:2,tilt:2.5,hop:4.5},WX=742,WY=470,SC=1.45;
  S.init=function(){var cp=el("clipPath",{id:"holeClip"},DEFS);el("ellipse",{cx:2,cy:2,rx:19,ry:27},cp)};
  S.reset=function(){S.k=-1;tr(holeS,"scale(0)");tr(cat,"translate(0 70)");wHappy.setAttribute("opacity",0);weye.setAttribute("opacity",1);S.y=WY};
  S.center=function(){return{x:WX+14*SC,y:(S.y||WY)-70*SC,sc:SC}};
  function pose(o){tr(W,"translate("+f1(WX)+" "+f1(o.y||WY)+") scale("+SC+")");tr(WB,"rotate("+f1(o.rot||0)+" 20 0)");tr(head,"rotate("+f1(o.hd||0)+" 10 -96)");tr(wing,"rotate("+f1(o.wg||0)+" 34 -90)");tr(weye,"translate("+f1(o.lx||0)+" 0)")}
  function chip(){var n=0;chips.forEach(function(c){if(c.life<=0&&n<2){c.life=1;c.x=HX+rr(-8,8);c.y=HY+rr(-6,6);c.vx=rr(-40,140);c.vy=-rr(80,220);c.r=rr(0,180);n++}})}
  S.ambient=function(t,dt,phase){cl.forEach(function(c){c.x+=4*dt;if(c.x>1750)c.x=-200;tr(c.g,"translate("+f1(c.x)+" "+c.y+") scale("+c.s+")")});flowersSway(flowers,t,dt,0,0,false);
    chips.forEach(function(c){if(c.life>0){c.life-=dt*.9;c.vy+=600*dt;c.x+=c.vx*dt;c.y+=c.vy*dt;c.r+=dt*400;tr(c.e,"translate("+f1(c.x)+" "+f1(c.y)+") rotate("+f1(c.r)+")");c.e.setAttribute("opacity",Math.min(1,c.life*2).toFixed(2))}else c.e.setAttribute("opacity",0)})};
  S.idle=function(t,dt,attn){var o={y:WY};o.hd=Math.sin(t*1.2)*6;o.wg=Math.sin(t*2)*2;
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)weye.setAttribute("transform","translate(-4 -124) scale(1 "+Math.max(.1,Math.abs(bt-.1)/.1).toFixed(2)+") translate(4 124)");else weye.setAttribute("transform","");
    if(t>tw.tilt){tw.tT=t;tw.tilt=t+rr(1.8,3)}var tt=t-(tw.tT||-9);if(tt<.8)o.hd+=Math.sin(Math.PI*tt/.8)*16*(Math.floor(tw.tT)%2?1:-1);
    if(t>tw.hop){tw.hT=t;tw.hop=t+rr(3.2,5)}var ht=t-(tw.hT||-9);if(ht<.35){o.y=WY-Math.sin(Math.PI*ht/.35)*16;o.wg=-Math.sin(Math.PI*ht/.35)*20}
    if(attn)o.hd=-8;pose(o)};
  S.act=function(e,dt,first){var o={y:WY},burst=Math.min(2,Math.floor(e/1.0)),q=e-burst*1.0,pk=0;
    if(q<.36){var i=Math.floor(q/.09),f=(q%.09)/.09;pk=Math.sin(Math.PI*f);var key=burst*4+i;if(key!==S.k&&f<.6){S.k=key;chip()}}
    o.rot=-16*pk;o.hd=-6*pk;o.wg=4*pk;
    var size=clamp(((burst+(q>=.36?1:q/.36))/3),0,1);tr(holeS,"scale("+(0.25+0.75*size).toFixed(3)+")");if(e<.05)tr(holeS,"scale(.1)");
    pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){var o={y:WY};o.rot=6*Math.sin(Math.min(1,e/.4)*Math.PI*.5);o.hd=10*Math.sin(Math.min(1,e/.4)*Math.PI*.5)+Math.sin(e*6)*3;
    tr(holeS,"scale(1)");var c=clamp((e-.3)/.4,0,1);tr(cat,"translate(0 "+f1(70-70*(1-Math.pow(1-c,3)))+")");
    if(e>.3){wHappy.setAttribute("opacity",1);weye.setAttribute("opacity",0)}pose(o)};
  return S}


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

/* ---------- ТАНЦУЙ: пингвинчик на льдине танцует; вид спереди, камера подъезжает ближе ---------- */
function makeDANCE(R){
  var S={};S.vb="200 150 1200 800";S.ACT=3.2;S.snd="dance";
  lgrad("gIce",[[0,"#ADC7FE"],[.6,"#D3E2FF"],[1,"#EAF1FF"]],0,600);
  bgRect(R,"url(#gIce)");
  // ice mountains
  [[300,560,260,220],[620,560,200,170],[1000,560,280,240],[1350,560,220,190]].forEach(function(m){el("path",{d:"M"+(m[0]-m[2])+" "+m[1]+" L"+m[0]+" "+(m[1]-m[3])+" L"+(m[0]+m[2])+" "+m[1]+"Z",fill:"#D3E2FF"},R);
    el("path",{d:"M"+m[0]+" "+(m[1]-m[3])+" L"+(m[0]+m[2])+" "+m[1]+" L"+(m[0]+m[2]*.25)+" "+m[1]+"Z",fill:"#ADC7FE",opacity:.6},R);el("path",{d:"M"+(m[0]-m[2]*.28)+" "+(m[1]-m[3]*.72)+" L"+m[0]+" "+(m[1]-m[3])+" L"+(m[0]+m[2]*.28)+" "+(m[1]-m[3]*.72)+" L"+(m[0]+m[2]*.1)+" "+(m[1]-m[3]*.62)+" L"+(m[0]-m[2]*.1)+" "+(m[1]-m[3]*.66)+"Z",fill:"#FFFFFF"},R)});
  var sun=el("g",{transform:"translate(1150 410)"},R);el("circle",{r:100,fill:"url(#gMoon)"},sun);el("circle",{r:44,fill:"#FFD400"},sun);
  hill(R,"dnG","M-1600 560 L0 560 C400 540 900 552 1600 546 L3200 546","#EAF1FF");R.appendChild(grain(null,["dnG"]));
  // icy pond as a stage
  el("ellipse",{cx:800,cy:830,rx:420,ry:90,fill:"#98B8FC"},R);el("ellipse",{id:"dnIce",cx:800,cy:826,rx:400,ry:80,fill:"#B8E0E0"},R);
  var glint=el("g",{},R);[[640,810,60],[900,840,44],[1040,816,30]].forEach(function(g){el("path",{d:"M"+(g[0]-g[2]/2)+" "+g[1]+" h"+g[2],stroke:"#FFFFFF","stroke-width":5,"stroke-linecap":"round",opacity:.7},glint)});
  // igloo + fish bucket
  var ig=el("g",{transform:"translate(380 690)"},R);el("path",{d:"M-130 0 A130 120 0 0 1 130 0Z",fill:"#FFFFFF"},ig);
  [[-120,-30,120,-30],[-100,-66,100,-66],[-66,-98,66,-98]].forEach(function(l){el("path",{d:"M"+l[0]+" "+l[1]+" H"+l[2],stroke:"#D3E2FF","stroke-width":4},ig)});
  [[-60,0,-60,-30],[20,-30,20,-66],[-30,-66,-30,-98],[70,0,70,-30]].forEach(function(l){el("path",{d:"M"+l[0]+" "+l[1]+" V"+l[3],stroke:"#D3E2FF","stroke-width":4},ig)});
  el("path",{d:"M-40 0 V-40 A40 40 0 0 1 40 -40 V0Z",fill:"#6B91D6"},ig);
  var bk=el("g",{transform:"translate(1230 760)"},R);el("path",{d:"M-44 -60 L-36 0 H36 L44 -60Z",fill:"#6B91D6"},bk);el("ellipse",{cx:0,cy:-60,rx:44,ry:10,fill:"#2C3A5C"},bk);
  [[-16,-70,-30],[10,-74,20]].forEach(function(f){var g=el("g",{transform:"translate("+f[0]+" "+f[1]+") rotate("+f[2]+")"},bk);el("ellipse",{cx:0,cy:0,rx:22,ry:10,fill:"#98B8FC"},g);el("path",{d:"M20 0 l12 -8 v16Z",fill:"#98B8FC"},g)});
  var flakes=[];for(var i=0;i<22;i++)flakes.push({e:el("circle",{r:f1(rr(3,6)),fill:"#FFFFFF",opacity:.85},R),x:rr(150,1450),y:rr(100,900),v:rr(18,34),ph:rr(0,6)});
  // penguin (front view)
  var PX=800,PY=830,SC=1.75,P=el("g",{},R),PB=el("g",{},P);
  el("ellipse",{cx:0,cy:0,rx:70,ry:10,fill:"#2C3A5C",opacity:.15},P);
  var fL=el("ellipse",{cx:-22,cy:-4,rx:20,ry:9,fill:"#FF8A20"},PB),fR=el("ellipse",{cx:22,cy:-4,rx:20,ry:9,fill:"#FF8A20"},PB);
  var top=el("g",{},PB);
  var flL=el("g",{},top),flR=el("g",{},top),flLi=el("g",{transform:"translate(0 10)"},flL),flRi=el("g",{transform:"translate(0 10)"},flR);el("path",{d:"M-58 -136 C-74 -136 -84 -110 -84 -86 C-84 -66 -82 -52 -79 -44 Q-77 -40 -75 -44 C-68 -60 -58 -86 -52 -112 C-50 -126 -52 -136 -58 -136Z",fill:"#234888"},flLi);el("path",{d:"M 58 -136 C 74 -136 84 -110 84 -86 C 84 -66 82 -52 79 -44 Q 77 -40 75 -44 C 68 -60 58 -86 52 -112 C 50 -126 52 -136 58 -136 Z",fill:"#234888"},flRi);
  el("ellipse",{cx:0,cy:-96,rx:62,ry:92,fill:"#2C3A5C"},top);el("ellipse",{cx:0,cy:-78,rx:44,ry:72,fill:"#FFFFFF"},top);
  el("ellipse",{cx:-17,cy:-150,rx:19,ry:21,fill:"#FFFFFF"},top);el("ellipse",{cx:17,cy:-150,rx:19,ry:21,fill:"#FFFFFF"},top);
  el("path",{d:"M-61 -126 Q0 -104 61 -126 L60 -108 Q0 -86 -60 -108Z",fill:"#F97A4F"},top);el("path",{d:"M-61 -120 Q0 -98 61 -120",stroke:"#FDDDD0","stroke-width":2.5,fill:"none",opacity:.6},top);el("path",{d:"M18 -112 l8 26 l12 -4 l-8 -22Z",fill:"#F97A4F"},top);
  var pe1=eyeG(top,-16,-152,7),pe2=eyeG(top,16,-152,7),ph1=happyArc(top,-16,-151,8),ph2=happyArc(top,16,-151,8);
  el("path",{d:"M-12 -136 Q0 -122 12 -136 Q0 -130 -12 -136Z",fill:"#FF8A20"},top);
  el("circle",{cx:-32,cy:-132,r:7,fill:"#FC88A8",opacity:.5},top);el("circle",{cx:32,cy:-132,r:7,fill:"#FC88A8",opacity:.5},top);
  var tw={blink:2,flap:3,look:4},push=0;
  S.init=function(){};
  S.reset=function(){push=0;[ph1,ph2].forEach(function(h){h.setAttribute("opacity",0)});[pe1,pe2].forEach(function(h){h.setAttribute("opacity",1)})};
  S.center=function(){return{x:PX,y:PY-90*SC,sc:SC}};
  S.cam=function(){var k=push;return[lerp(200,350,k),lerp(150,290,k),lerp(1200,900,k),lerp(800,600,k)]};
  function pose(o){tr(P,"translate("+f1(PX+(o.dx||0))+" "+PY+") scale("+SC+")");
    tr(PB,"translate(0 "+f1(-(o.h||0))+") scale("+(o.sx==null?1:o.sx).toFixed(3)+" 1)");tr(top,"rotate("+f1(o.rot||0)+" 0 -10)");
    tr(flL,"rotate("+f1(o.fl||0)+" -60 -120)");tr(flR,"rotate("+f1(-(o.fr||0))+" 60 -120)");
    tr(fL,"translate(0 "+f1(-(o.tl||0))+")");tr(fR,"translate(0 "+f1(-(o.tr||0))+")");
    blinkT(pe1,-16,-152,o.blink);blinkT(pe2,16,-152,o.blink)}
  S.ambient=function(t,dt){flakes.forEach(function(f){f.y+=f.v*dt;if(f.y>920)f.y=80;tr(f.e,"translate("+f1(f.x+Math.sin(t*.8+f.ph)*14)+" "+f1(f.y)+")")})};
  S.idle=function(t,dt,attn){var o={rot:Math.sin(t*1.4)*3};
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    if(t>tw.flap){tw.fT=t;tw.flap=t+rr(2.4,3.8)}var ft=t-(tw.fT||-9);if(ft<.5){var a=Math.abs(Math.sin(ft*Math.PI/.125))*24;o.fl=a;o.fr=a}
    if(t>tw.look){tw.lT=t;tw.look=t+rr(2.6,4.2)}var lt=t-(tw.lT||-9);if(lt<.6){o.tl=Math.abs(Math.sin(lt*Math.PI/.3))*6}
    if(attn){o.fl=10;o.fr=10}pose(o)};
  // 8 beats: sway with alternate flippers and foot taps, hops, a spin, final pose
  S.act=function(e,dt){var b=e/.4,k=Math.floor(b),ph=b-k,s=k%2?1:-1,o={};push=easeArrive(clamp(e/1.2,0,1),0);
    var up=Math.sin(Math.PI*ph);o.rot=s*10*up;o.dx=s*14*up*SC;
    o.fl=s<0?70*up:10;o.fr=s>0?70*up:10;o.tl=s<0?10*up:0;o.tr=s>0?10*up:0;
    if(k===2||k===3||k===6){o.h=up*24}
    if(k===4||k===5){var u=(e-1.6)/.8;o.sx=Math.cos(2*Math.PI*u);if(Math.abs(o.sx)<.08)o.sx=o.sx<0?-.08:.08;o.fl=o.fr=40;o.h=up*10}
    if(k>=7){o.fl=o.fr=90*up;o.h=up*30}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){push=1;var o={fl:80+Math.sin(e*10)*12,fr:80+Math.sin(e*10+1)*12,rot:Math.sin(e*4)*4*Math.max(0,1-e/1.5),h:e<.35?Math.sin(Math.PI*e/.35)*16:0};
    if(e>.25){[ph1,ph2].forEach(function(h){h.setAttribute("opacity",1)});o.blink=1}pose(o)};
  return S}

/* ==========================================================
   ИГРА 2 · ДЕЙСТВИЯ С ПРЕДМЕТОМ
   ========================================================== */
function strokeLeg(p,d,col,w){return el("path",{d:d,stroke:col,"stroke-width":w,fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p)}
function setOp(list,v){list.forEach(function(e){e.setAttribute("opacity",v)})}
function pool(parent,n,mk){var a=[];for(var i=0;i<n;i++)a.push({e:mk(parent,i),life:0});return a}
function runPool(a,dt,g,fade){a.forEach(function(p){if(p.life>0){p.life-=dt*(fade||1.4);p.vy+=g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.r=(p.r||0)+(p.vr||0)*dt;
  tr(p.e,"translate("+f1(p.x)+" "+f1(p.y)+") rotate("+f1(p.r)+") scale("+(p.s||1).toFixed(2)+")");p.e.setAttribute("opacity",Math.max(0,Math.min(1,p.life*2)).toFixed(2))}else p.e.setAttribute("opacity",0)})}
function emit(a,n,x,y,vx0,vx1,vy0,vy1,s){var k=0;a.forEach(function(p){if(p.life<=0&&k<n){p.life=1;p.x=x;p.y=y;p.vx=rr(vx0,vx1);p.vy=rr(vy0,vy1);p.r=rr(0,90);p.vr=rr(-300,300);p.s=s||1;k++}})}
function idleTimer(tw,key,t,a,b){if(t>(tw[key]||0)){tw[key+"T"]=t;tw[key]=t+rr(a,b)}return t-(tw[key+"T"]||-9)}

/* ---------- КОПАЙ: крот роет ход, вид в разрезе ---------- */

/* ---------- КОПАЙ: мультяшный крот роет ход, вид в разрезе ---------- */
function makeDIG(R){
  var S={};S.vb="200 120 1200 800";S.ACT=3.0;S.snd="dig";
  daySky(R,1060,290);var c1=cloud(R,420,230,.8);
  hill(R,"dgFar","M-1600 470 L0 470 C300 440 700 456 1000 448 C1260 442 1440 446 1600 450 L3200 450","#CCF0A0");R.appendChild(grain(null,["dgFar"]));
  var trees=el("g",{},R);[[380,466,1],[520,456,.8],[1180,450,1.1],[1300,452,.8]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  el("path",{id:"dgSoil",d:"M-1600 500 L3200 500 L3200 2100 L-1600 2100Z",fill:"#C47860"},R);
  el("path",{d:"M-1600 650 C200 640 600 666 1000 652 C1300 644 1500 660 3200 650 L3200 2100 L-1600 2100Z",fill:"#A86448"},R);
  el("path",{d:"M-1600 820 C300 810 700 830 1100 818 C1400 812 1600 826 3200 820 L3200 2100 L-1600 2100Z",fill:"#985038"},R);
  R.appendChild(grain(null,["dgSoil"]));
  var stones=el("g",{},R);for(var i=0;i<22;i++)el("ellipse",{cx:f1(rr(150,1450)),cy:f1(rr(540,900)),rx:f1(rr(8,22)),ry:f1(rr(6,14)),fill:rnd()<.5?"#D0A090":"#BABABA",opacity:.85},stones);
  [[300,520,380,640,340,720],[1200,510,1150,610,1220,700],[560,510,600,580,580,640]].forEach(function(r){el("path",{d:"M"+r[0]+" "+r[1]+" Q"+r[2]+" "+r[3]+" "+r[4]+" "+r[5],stroke:"#FDE6C4","stroke-width":4,fill:"none",opacity:.7},R)});
  el("rect",{x:-1600,y:486,width:4800,height:18,fill:"#88A848"},R);var tex=el("g",{},R);blades(tex,240,-100,1700,480,500,"#4AA010",14,3);
  var flowers=[];[[300,494,1.2],[460,496,1],[1050,494,1.1],[1380,494,1.2]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var tun=el("path",{d:"M700 500 C720 580 760 640 840 700 C900 744 960 762 1010 766",fill:"none",stroke:"#7A3E2C","stroke-width":110,"stroke-linecap":"round"},R);
  var cham=el("ellipse",{cx:1040,cy:770,rx:120,ry:74,fill:"#7A3E2C",opacity:0},R);
  var mound=el("path",{d:"M610 504 Q700 400 790 504Z",fill:"#A86448"},R);
  var clods=pool(R,24,function(p,k){return el("ellipse",{rx:9,ry:6,fill:k%2?"#A86448":"#C47860",opacity:0},p)});
  // mole like the reference: grey, long snout with a pink tip, small eye, pink spade paws, fur dashes
  function spade(p,x,y,sc,a){var g=el("g",{transform:"translate("+x+" "+y+") rotate("+a+") scale("+sc+")"},p);el("ellipse",{cx:0,cy:0,rx:13,ry:11,fill:"#F8B888"},g);[-30,-10,10,30].forEach(function(d){el("ellipse",{cx:15,cy:0,rx:10,ry:4.5,fill:"#F8B888",transform:"rotate("+d+")"},g)});return g}
  var M=el("g",{},R),MB=el("g",{},M);
  var footB=el("g",{},MB);spade(footB,-38,30,.9,20);
  el("path",{d:"M-62 8 C-66 -30 -40 -58 -2 -56 C26 -54 44 -40 66 -22 C76 -14 84 -12 86 -6 C86 2 78 6 66 6 C44 10 20 30 -18 32 C-48 34 -60 26 -62 8Z",fill:"#8C98B4"},MB);
  var furD="";for(var q=0;q<70&&furD.split("M").length<34;q++){var fx=rr(-56,70),fy=rr(-50,24);if(((fx+2)/60)*((fx+2)/60)+((fy+12)/40)*((fy+12)/40)>.75)continue;if(fx>34&&(fy<-34||fy>2))continue;if(fx>20&&fx<50&&fy>-40&&fy<-18)continue;furD+="M"+f1(fx)+" "+f1(fy)+" l7 2 "}
  el("circle",{cx:88,cy:-8,r:9,fill:"#F8B888"},MB);el("circle",{cx:87,cy:-11,r:2,fill:"#985038"},MB);el("circle",{cx:89,cy:-4,r:2,fill:"#985038"},MB);
  el("circle",{cx:30,cy:-12,r:9,fill:"#FC88A8",opacity:.6},MB);el("path",{d:"M62 0 Q46 9 26 4",stroke:"#2C3A5C","stroke-width":2.6,fill:"none","stroke-linecap":"round"},MB);
  var me=eyeG(MB,44,-22,5),mh=happyArc(MB,44,-21,6),eyes=me;
  var paw=el("g",{},MB);spade(paw,34,24,1.1,10);
  var tunL=0,MSC=1.7,tw={};
  S.init=function(){tunL=tun.getTotalLength();tun.setAttribute("stroke-dasharray",tunL+" "+tunL)};
  S.reset=function(){tun.setAttribute("stroke-dashoffset",tunL);cham.setAttribute("opacity",0);tr(mound,"");S.u=0;mh.setAttribute("opacity",0);me.setAttribute("opacity",1)};
  function pos(){if(!S.u)return{x:700,y:440,a:0};var p=tun.getPointAtLength(S.u*tunL),q=tun.getPointAtLength(Math.min(tunL,S.u*tunL+3)),p0=tun.getPointAtLength(Math.max(0,S.u*tunL-3));return{x:p.x,y:p.y,a:Math.atan2(q.y-p0.y,q.x-p0.x)*180/Math.PI}}
  S.center=function(){var p=pos();return{x:p.x,y:p.y,sc:MSC}};
  function pose(o){var p=pos();tr(M,"translate("+f1(p.x)+" "+f1(p.y)+") scale("+MSC+") rotate("+f1((o.a!=null?o.a:p.a*.7)+(o.rot||0))+")");tr(paw,"rotate("+f1(o.paw||0)+" 30 24)");tr(footB,"rotate("+f1(-(o.paw||0)*.4)+" -20 30)");
    tr(MB,"translate(0 "+f1(o.bob||0)+")");blinkT(me,44,-22,o.blink)}
  S.ambient=function(t,dt){runPool(clods,dt,700,1.2);tr(c1.g,"translate("+f1(420+Math.sin(t*.05)*120)+" 230) scale(.8)")};
  S.idle=function(t,dt,attn){var o={a:0,bob:Math.sin(t*2.2)*1.5,rot:Math.sin(t*1.3)*3};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    var st=idleTimer(tw,"sn",t,2.2,3.6);if(st<.6)o.rot+=Math.sin(st*30)*4;if(attn)o.rot=-8;pose(o)};
  S.act=function(e,dt){var k=Math.min(5,Math.floor(e/.45)),ph=(e%.45)/.45,u=clamp(e/2.7,0,1);S.u=Math.max(.001,easeArrive(u,.8)*.93);
    tun.setAttribute("stroke-dashoffset",f1(tunL*(1-Math.min(1,S.u+.04))));tr(mound,"translate(700 504) scale(1 "+(1+u*1.2).toFixed(2)+") translate(-700 -504)");
    var o={paw:-60*Math.sin(Math.PI*ph),bob:Math.sin(Math.PI*2*ph)*2};if(ph<dt/.45+.01&&e<2.7){var p=pos();emit(clods,4,p.x-20,p.y-20,-260,-60,-340,-160)}
    if(e>2.6)cham.setAttribute("opacity",clamp((e-2.6)/.3,0,1).toFixed(2));pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){S.u=.93;cham.setAttribute("opacity",1);tun.setAttribute("stroke-dashoffset",0);var o={a:0,bob:-Math.abs(Math.sin(e*6))*4*Math.max(0,1-e),paw:Math.sin(e*8)*16*Math.max(0,1-e/1.5)};
    if(e>.25){mh.setAttribute("opacity",1);me.setAttribute("opacity",0)}pose(o)};
  return S}

/* ---------- ЛОВИ: котёнок ловит бабочку передними лапками ---------- */
function makeCATCH(R){
  var S={};S.vb="200 210 1200 800";S.ACT=1.6;S.snd="catch";
  daySky(R,1060,380);var cl=cloud(R,420,330,.9);
  hill(R,"ctFar","M-1600 600 L0 600 C300 570 700 586 1000 578 C1260 572 1440 576 1600 580 L3200 580","#CCF0A0");R.appendChild(grain(null,["ctFar"]));
  var trees=el("g",{},R);[[320,596,1.2],[520,584,1],[1150,580,1.3],[1330,584,1]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  hill(R,"ctG","M-1600 700 L0 700 C400 680 900 692 1600 686 L3200 686","#88A848");R.appendChild(grain(null,["ctG"]));
  var tex=el("g",{},R);blades(tex,300,-100,1700,690,1020,"#6E9A30",16,2.8);
  var flowers=[];[[330,960,1.6],[560,990,1.5],[1060,980,1.6],[1300,940,1.4],[1420,760,1.2],[260,760,1.1]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var KX=760,KY=930,SC=1.9,K=el("g",{},R),KB=el("g",{},K);
  el("ellipse",{cx:-10,cy:4,rx:80,ry:6,fill:"#2C3A5C",opacity:.13},K);
  var tailP=el("path",{d:"",stroke:"#8C98B4","stroke-width":13,fill:"none","stroke-linecap":"round"},KB);
  var lgF=el("g",{},KB);strokeLeg(lgF,"M-40 -40 L-38 -8","#8C98B4",18);var armF=el("g",{},KB);strokeLeg(armF,"M34 -44 L36 -8","#8C98B4",17);el("ellipse",{cx:38,cy:-6,rx:12,ry:6,fill:"#EAF1FF"},armF);
  el("ellipse",{cx:-4,cy:-56,rx:62,ry:32,fill:"#A8B0C8"},KB);el("ellipse",{cx:6,cy:-40,rx:40,ry:12,fill:"#EAF1FF"},KB);
  var lgN=el("g",{},KB);strokeLeg(lgN,"M-30 -40 L-28 -8","#A8B0C8",19);el("ellipse",{cx:-26,cy:-6,rx:12,ry:6,fill:"#FFFFFF"},lgN);
  var head=el("g",{},KB);el("path",{d:"M58 -104 L60 -142 L80 -116Z M86 -116 L104 -140 L106 -104Z",fill:"#A8B0C8"},head);el("path",{d:"M64 -110 L65 -130 L76 -116Z M90 -114 L101 -131 L101 -108Z",fill:"#FCC4BC"},head);
  el("circle",{cx:82,cy:-88,r:32,fill:"#A8B0C8"},head);el("ellipse",{cx:98,cy:-76,rx:15,ry:10,fill:"#FFFFFF"},head);el("path",{d:"M106 -84 l7 -1 l-3 6Z",fill:"#FC88A8"},head);
  var ke=eyeG(head,92,-94,6),kh=happyArc(head,92,-93,7);el("circle",{cx:84,cy:-74,r:6,fill:"#FC88A8",opacity:.45},head);el("path",{d:"M104 -78 l26 -6 M104 -74 l26 2",stroke:"#8C98B4","stroke-width":1.6},head);
  var BF=el("g",{},R),w1=el("g",{},BF),w2=el("g",{},BF);el("ellipse",{cx:-12,cy:-9,rx:13,ry:10,fill:"#F97A4F"},w1);el("ellipse",{cx:-9,cy:7,rx:9,ry:7,fill:"#FFD400"},w1);
  el("ellipse",{cx:12,cy:-9,rx:13,ry:10,fill:"#F97A4F"},w2);el("ellipse",{cx:9,cy:7,rx:9,ry:7,fill:"#FFD400"},w2);el("ellipse",{rx:2.8,ry:12,fill:"#2C3A5C"},BF);el("path",{d:"M0 -11 q-4 -9 -8 -11 M0 -11 q4 -9 8 -11",stroke:"#2C3A5C","stroke-width":1.8,fill:"none"},BF);
  // the near front paw is drawn over the butterfly, so it looks held between the paws
  var armN=el("g",{},R);var armNi=el("g",{},armN);strokeLeg(armNi,"M46 -44 L48 -8","#A8B0C8",18);el("ellipse",{cx:50,cy:-6,rx:12,ry:6,fill:"#FFFFFF"},armNi);
  var tw={},bx=0,by=0;
  S.init=function(){};
  S.reset=function(){kh.setAttribute("opacity",0);ke.setAttribute("opacity",1)};
  S.center=function(){return{x:KX+20*SC,y:KY-70*SC,sc:SC}};
  function rot(px,py,cx,cy,a){var r=a*Math.PI/180,dx=px-cx,dy=py-cy;return[cx+dx*Math.cos(r)-dy*Math.sin(r),cy+dx*Math.sin(r)+dy*Math.cos(r)]}
  function pawXY(o){var p=rot(48,-8,46,-44,o.arm||0);p=rot(p[0],p[1],-30,-8,o.rot||0);return{x:KX+p[0]*SC,y:KY+(p[1]-(o.h||0)+26*(o.lie||0))*SC}}
  function pose(o){tr(K,"translate("+KX+" "+KY+") scale("+SC+")");var lie=o.lie||0,body="translate(0 "+f1(-(o.h||0)+26*lie)+") rotate("+f1(o.rot||0)+" -30 -8)";tr(KB,body);var lt="translate(0 "+f1(-26*lie)+") translate(0 -6) scale(1 "+(1-.7*lie).toFixed(3)+") translate(0 6)";tr(lgF,lt);tr(lgN,lt);
    tr(armN,"translate("+KX+" "+KY+") scale("+SC+") "+body);tr(armNi,"rotate("+f1(o.arm||0)+" 46 -44)");tr(armF,"rotate("+f1((o.arm||0)*.9)+" 34 -44)");tr(head,"rotate("+f1(o.hd||0)+" 70 -70)");
    var sw=o.tsw||0;tailP.setAttribute("d","M-62 -60 C-96 -70 "+f1(-104+sw)+" -110 "+f1(-86+sw*1.3)+" -140");blinkT(ke,92,-94,o.blink)}
  function bfly(x,y,f,ang){tr(BF,"translate("+f1(x)+" "+f1(y)+") rotate("+f1(ang||0)+") scale(1.5)");tr(w1,"scale("+(0.2+.8*f).toFixed(2)+" 1)");tr(w2,"scale("+(0.2+.8*f).toFixed(2)+" 1)")}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);tr(cl.g,"translate("+f1(420+Math.sin(t*.05)*120)+" 330) scale(.9)")};
  S.idle=function(t,dt,attn){var o={hd:-14+Math.sin(t*1.4)*6,tsw:Math.sin(t*2)*16};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    var wt=idleTimer(tw,"wig",t,2.5,4);if(wt<.6)o.tsw=Math.sin(wt*30)*20;if(attn)o.hd=-22;pose(o);
    bx=KX+110*SC+Math.sin(t*1.3)*70;by=KY-200*SC+Math.sin(t*2.1)*36;bfly(bx,by,Math.abs(Math.sin(t*16)),Math.sin(t*1.3)*20)};
  // crouch, jump up with paws stretched, paws close on the butterfly at the top, land and sit holding it
  S.act=function(e,dt){var o={hd:-24};
    if(e<.3){o.h=-8*Math.sin(Math.PI*e/.6);o.arm=-20*e/.3}
    else if(e<.9){var u=(e-.3)/.6,s=Math.sin(Math.PI*u);o.h=s*90;o.rot=-40*s;o.arm=-20-100*Math.min(1,u*1.6);o.hd=-24+20*s}
    else if(e<1.2){var v=(e-.9)/.3;v=v*v*(3-2*v);o.h=(1-v)*10;o.rot=-24*(1-v);o.arm=-120+30*v;o.hd=lerp(-24,0,v)}
    else{var v2=clamp((e-1.2)/.4,0,1);v2=v2*v2*(3-2*v2);o.lie=v2;o.arm=-90+10*v2;o.hd=8*v2}
    pose(o);var pw=pawXY(o);
    if(e<.6){var k=e/.6;bfly(lerp(bx,pw.x,k*k),lerp(by,pw.y,k*k),Math.abs(Math.sin(e*16)),0)}else bfly(pw.x+10*(o.lie||0),pw.y-6-10*(o.lie||0),lerp(Math.abs(Math.sin(e*16)),.55,clamp((e-.6)/.4,0,1)),0);
    return e>=S.ACT};
  S.fin=function(e,t,dt){var o={lie:1,arm:-80+Math.sin(e*2)*2,hd:8+Math.sin(e*2)*2,tsw:Math.sin(e*3)*12};pose(o);var pw=pawXY(o);bfly(pw.x+10,pw.y-16,.55+.25*Math.abs(Math.sin(e*2.2)),0);
    if(e>.3){kh.setAttribute("opacity",1);ke.setAttribute("opacity",0)}};
  return S}

/* ---------- НЕСИ: муравей несёт листик на спине к муравейнику; макро, камера следом ---------- */
function makeCARRY(R){
  var S={};S.vb="0 300 900 600";S.ACT=4.0;S.snd="carry";
  bgRect(R,"url(#gDay)");
  var far=el("g",{},R);for(var i=0;i<34;i++){var x=i*55-60+rr(-20,20),h=rr(260,480);el("path",{d:"M"+f1(x)+" 790 q"+f1(rr(-30,30))+" "+f1(-h/2)+" "+f1(rr(-60,60))+" "+f1(-h),stroke:i%2?"#ACD48C":"#88A848","stroke-width":f1(rr(16,26)),fill:"none","stroke-linecap":"round"},far)}
  [[260,430,"#FC88A8"],[620,470,"#FFFFFF"],[900,380,"#FFD400"],[1100,450,"#F97A4F"],[1320,420,"#B890E0"],[1560,460,"#FC88A8"]].forEach(function(f){el("path",{d:"M"+f[0]+" 790 V"+(f[1]+30),stroke:"#4AA010","stroke-width":14},far);el("ellipse",{cx:f[0]-26,cy:f[1]+120,rx:30,ry:12,fill:"#4AA010",transform:"rotate(-30 "+(f[0]-26)+" "+(f[1]+120)+")"},far);for(var k=0;k<6;k++)el("ellipse",{cx:f[0],cy:f[1]-40,rx:26,ry:44,fill:f[2],transform:"rotate("+(k*60)+" "+f[0]+" "+f[1]+")"},far);el("circle",{cx:f[0],cy:f[1],r:24,fill:"#FFF8A8"},far)});
  hill(R,"caG","M-1600 780 L0 780 C400 770 900 786 1600 776 L3200 776","#C47860");R.appendChild(grain(null,["caG"]));
  var mos=el("g",{},R);for(i=0;i<40;i++)el("ellipse",{cx:f1(rr(-60,1660)),cy:f1(rr(782,900)),rx:f1(rr(10,30)),ry:f1(rr(4,9)),fill:rnd()<.5?"#88A848":"#D0A090",opacity:.7},mos);
  [[180,830,46,26],[520,880,34,20],[980,836,52,30],[1180,900,40,22]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:p[2],ry:p[3],fill:"#BABABA"},R);el("ellipse",{cx:p[0]-p[2]*.3,cy:p[1]-p[3]*.4,rx:p[2]*.4,ry:p[3]*.3,fill:"#E0E0E0"},R)});
  var hillA=el("g",{transform:"translate(1420 790)"},R);el("path",{d:"M-220 0 Q-120 -230 0 -250 Q120 -230 220 0Z",fill:"#C47860"},hillA);for(i=0;i<40;i++)el("ellipse",{cx:f1(rr(-170,170)),cy:f1(rr(-200,-10)),rx:4,ry:2.5,fill:rnd()<.5?"#985038":"#F8B888",transform:"rotate("+f1(rr(0,180))+")"},hillA);
  el("ellipse",{cx:-40,cy:-30,rx:44,ry:30,fill:"#2C3A5C"},hillA);
  var A=el("g",{},R),AB=el("g",{},A),legs=[];
  for(var j=0;j<3;j++){var lx=-12+j*13;legs.push({e:strokeLeg(AB,"",j%2?"#7A3E2C":"#5E2E20",5),x:lx,ph:j%2?0:.5,far:true});legs.push({e:null,x:lx,ph:j%2?.5:0,far:false})}
  el("ellipse",{cx:-44,cy:-26,rx:30,ry:22,fill:"#985038"},AB);el("ellipse",{cx:-50,cy:-32,rx:12,ry:6,fill:"#C47860",opacity:.7},AB);
  el("ellipse",{cx:4,cy:-30,rx:20,ry:14,fill:"#985038"},AB);
  legs.forEach(function(l){if(!l.far)l.e=strokeLeg(AB,"","#985038",6)});
  // the leaf lies across its back, held at the front by the mandibles
  var leafG=el("g",{},AB),leaf=el("g",{},leafG);el("path",{d:"M0 0 Q-60 -64 -150 -40 Q-80 18 0 0Z",fill:"#4AA010"},leaf);el("path",{d:"M0 0 Q-70 -28 -150 -40 M-50 -22 l6 -20 M-90 -30 l4 -22 M-60 -16 l-10 14",stroke:"#70CC10","stroke-width":3,fill:"none"},leaf);
  var head=el("g",{},AB);el("circle",{cx:38,cy:-42,r:18,fill:"#985038"},head);var ae=eyeG(head,44,-46,4.5),ah=happyArc(head,44,-45,5);
  el("path",{d:"M44 -58 q10 -20 26 -24 M36 -58 q4 -22 18 -30",stroke:"#7A3E2C","stroke-width":3.5,fill:"none","stroke-linecap":"round"},head);
  var SC=2.4,tw={},X0=200,X1=1270;
  S.init=function(){};
  S.reset=function(){S.x=X0;ah.setAttribute("opacity",0);ae.setAttribute("opacity",1)};
  S.center=function(){return{x:S.x,y:780-50*SC,sc:SC}};
  S.cam=function(){return[clamp(S.x-330,0,700),300,900,600]};
  function pose(o){tr(A,"translate("+f1(S.x)+" 780) scale("+SC+")");tr(AB,"translate(0 "+f1(o.bob||0)+")");tr(head,"rotate("+f1(o.hd||0)+" 30 -40)");
    tr(leafG,"translate(18 "+f1(-48+(o.ly||0))+") rotate("+f1(-6+(o.lr||0))+") scale(.92)");
    legs.forEach(function(l){var p=(o.walk||0)+l.ph,lift=o.walk!=null?Math.max(0,Math.sin(2*Math.PI*p))*6:0,sw=o.walk!=null?Math.cos(2*Math.PI*p)*8:0;
      l.e.setAttribute("d","M"+l.x+" -28 Q"+f1(l.x+sw*.5+(l.far?-6:6))+" -16 "+f1(l.x+sw+(l.far?-10:10))+" "+f1(-lift))});blinkT(ae,44,-46,o.blink)}
  S.ambient=function(){};
  S.idle=function(t,dt,attn){var o={bob:Math.sin(t*2.4)*1.2,hd:Math.sin(t*1.6)*4,lr:Math.sin(t*1.2)*2};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    var st=idleTimer(tw,"sh",t,2.2,3.6);if(st<.5)o.walk=st*2;if(attn)o.hd=-6;pose(o)};
  S.act=function(e,dt){var u=clamp(e/S.ACT,0,1);S.x=lerp(X0,X1,easeArrive(u,.7));var o={walk:e/.5,bob:-Math.abs(Math.sin(2*Math.PI*e/.25))*1.5,lr:Math.sin(e*8)*2};pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){S.x=X1;var r=Math.min(1,e/.4);var o={ly:-6*r,lr:-6*r+Math.sin(e*6)*2*r,hd:-6};if(e>.3){ah.setAttribute("opacity",1);ae.setAttribute("opacity",0)}pose(o)};
  return S}

/* ---------- ТЯНИ: мышка тянет морковку за ботву (грядка в разрезе) ---------- */
function makePULL(R){
  var S={};S.vb="420 350 840 560";S.ACT=2.6;S.snd="pull";
  daySky(R,100,100);
  var fence=el("g",{},R);for(var i=0;i<22;i++){var x=-40+i*90;el("path",{d:"M"+x+" 640 V470 l30 -26 l30 26 V640Z",fill:i%2?"#985038":"#A86448"},fence)}
  el("rect",{x:-60,y:510,width:2000,height:20,rx:6,fill:"#7A3E2C"},fence);el("rect",{x:-60,y:590,width:2000,height:20,rx:6,fill:"#7A3E2C"},fence);
  [[420,650],[560,656],[1240,650]].forEach(function(c){var g=el("g",{transform:"translate("+c[0]+" "+c[1]+")"},R);[[-34,0,40],[34,0,40],[0,-18,46]].forEach(function(z){el("circle",{cx:z[0],cy:z[1],r:z[2],fill:"#88A848"},g)});el("circle",{cx:0,cy:-8,r:30,fill:"#B0D870"},g)});
  el("path",{id:"plSoil",d:"M-1600 680 C300 666 700 676 1100 668 C1400 662 1600 670 3200 668 L3200 2100 L-1600 2100Z",fill:"#C47860"},R);R.appendChild(grain(null,["plSoil"]));
  var dots=el("g",{},R);for(i=0;i<40;i++)el("ellipse",{cx:f1(rr(300,1400)),cy:f1(rr(700,930)),rx:f1(rr(4,9)),ry:f1(rr(3,6)),fill:rnd()<.5?"#985038":"#D0A090",opacity:.8},dots);
  var hole=el("ellipse",{cx:720,cy:676,rx:50,ry:14,fill:"#7A3E2C",opacity:0},R),CR=el("g",{},R);
  var carrot=el("g",{},CR);el("path",{d:"M-34 0 C-30 60 -10 140 0 170 C10 140 30 60 34 0Z",fill:"url(#carrotG)"},carrot);
  [[-24,40,14],[18,70,12],[-14,110,10]].forEach(function(l){el("path",{d:"M"+l[0]+" "+l[1]+" h"+l[2],stroke:"#DC8818","stroke-width":4,"stroke-linecap":"round"},carrot)});
  var tops=el("g",{},carrot);[[-22,-80,-24],[0,-96,0],[22,-82,22]].forEach(function(t){el("path",{d:"M0 0 Q"+(t[0]/2)+" "+(t[1]/2)+" "+t[0]+" "+t[1],stroke:"#4AA010","stroke-width":12,fill:"none","stroke-linecap":"round"},tops);el("ellipse",{cx:t[0],cy:t[1],rx:14,ry:26,fill:"#70CC10",transform:"rotate("+t[2]+" "+t[0]+" "+t[1]+")"},tops)});
  var clods=pool(R,16,function(p,k){return el("ellipse",{rx:8,ry:6,fill:k%2?"#985038":"#C47860",opacity:0},p)});
  // mouse facing left: ears on top of the head, arms reach from the shoulders to the carrot tops
  var MX=800,MY=676,SC=1.7,M=el("g",{},R),MB=el("g",{},M);
  var msh=el("ellipse",{cx:0,cy:3,rx:50,ry:5,fill:"#2C3A5C",opacity:.13});R.insertBefore(msh,CR);
  var tail=el("path",{d:"",stroke:"#FCC4BC","stroke-width":5,fill:"none","stroke-linecap":"round"},MB);
  strokeLeg(MB,"M24 -20 L30 -4","#A0A0A0",14);el("ellipse",{cx:36,cy:-4,rx:13,ry:6,fill:"#FCC4BC"},MB);
  el("ellipse",{cx:10,cy:-46,rx:40,ry:44,fill:"#BABABA"},MB);el("ellipse",{cx:-4,cy:-36,rx:22,ry:28,fill:"#FFFFFF"},MB);
  strokeLeg(MB,"M4 -20 L-2 -4","#BABABA",15);el("ellipse",{cx:-6,cy:-4,rx:13,ry:6,fill:"#FCC4BC"},MB);
  var head=el("g",{},MB);el("circle",{cx:12,cy:-134,r:20,fill:"#BABABA"},head);el("circle",{cx:12,cy:-134,r:11,fill:"#FCC4BC"},head);
  el("ellipse",{cx:-10,cy:-104,rx:32,ry:27,fill:"#BABABA"},head);el("circle",{cx:-12,cy:-134,r:19,fill:"#BABABA"},head);el("circle",{cx:-12,cy:-134,r:10,fill:"#FCC4BC"},head);
  el("ellipse",{cx:-38,cy:-98,rx:11,ry:8,fill:"#FFFFFF"},head);el("circle",{cx:-48,cy:-100,r:5,fill:"#FC88A8"},head);
  var me=eyeG(head,-22,-110,5),mh=happyArc(head,-22,-109,6);el("circle",{cx:-12,cy:-92,r:5,fill:"#FC88A8",opacity:.45},head);el("path",{d:"M-46 -96 l-26 -6 M-46 -92 l-26 4",stroke:"#8A8A8A","stroke-width":1.5},head);
  var arms=el("g",{},MB);strokeLeg(arms,"M-4 -66 L-46 -58","#A0A0A0",12);el("circle",{cx:-48,cy:-58,r:8,fill:"#FCC4BC"},arms);
  var tw={};
  S.init=function(){};
  S.reset=function(){R.insertBefore(CR,M);tr(carrot,"translate(720 676) scale(1.4)");tr(tops,"");hole.setAttribute("opacity",0);mh.setAttribute("opacity",0);me.setAttribute("opacity",1)};
  S.center=function(){return{x:MX,y:MY-60*SC,sc:SC}};
  function pose(o){var sit=o.sit||0;tr(M,"translate("+f1(MX+(o.dx||0))+" "+MY+") scale("+SC+")");tr(msh,"translate("+f1(MX+(o.dx||0)+10*SC)+" "+MY+") scale("+SC+")");tr(MB,"rotate("+f1(o.lean||0)+" 20 -4) translate(0 "+f1(sit*18)+")");
    tr(arms,"rotate("+f1(o.arm||0)+" -4 -66)");tr(head,"rotate("+f1(o.hd||0)+" -6 -80)");tail.setAttribute("d","M44 -26 C80 -26 "+f1(96+(o.tsw||0))+" -56 "+f1(110+(o.tsw||0))+" -36");blinkT(me,-22,-110,o.blink)}
  S.ambient=function(t,dt){runPool(clods,dt,800,1.3)};
  S.idle=function(t,dt,attn){var o={lean:Math.sin(t*1.6)*2,tsw:Math.sin(t*2)*10};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    var st=idleTimer(tw,"sn",t,2.2,3.6);if(st<.5)o.hd=Math.sin(st*30)*3;if(attn)o.hd=-4;tr(tops,"rotate("+f1(Math.sin(t*1.6)*3)+")");pose(o)};
  // the paws stay on the tops: the carrot follows each tug, pops out, then drops onto the soil
  S.act=function(e,dt){var o={};
    if(e<1.8){var k=Math.floor(e/.6),ph=(e%.6)/.6,s=Math.sin(Math.PI*ph),str=[14,20,28][k];o.lean=str*s;o.dx=str*.8*s*SC;o.tsw=s*20;
      tr(tops,"rotate("+f1(str*.6*s)+")");tr(carrot,"translate("+f1(720+str*.5*s)+" "+f1(676-k*8-8*s)+") scale(1.4)");if(ph<.08&&k>0)emit(clods,2,720,676,-80,80,-200,-120)}
    else{var u=clamp((e-1.8)/.8,0,1);if(e<1.86){emit(clods,6,720,676,-160,160,-300,-140);R.appendChild(CR);R.appendChild(M)}hole.setAttribute("opacity",1);
      var up=Math.sin(Math.PI*Math.min(1,u*1.4)),cx=lerp(720,620,u),cy=lerp(650,662,u)-up*120;tr(carrot,"translate("+f1(cx)+" "+f1(cy)+") rotate("+f1(-90*u)+") scale(1.4)");
      var f=clamp((e-1.8)/.3,0,1);o.lean=lerp(28,-4,f);o.dx=lerp(22,30,f)*SC;o.arm=-20*f}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){var o={lean:-4,dx:30*SC,arm:-20+Math.sin(e*4)*4,hd:Math.sin(e*3)*4,tsw:Math.sin(e*3)*10};tr(carrot,"translate(620 662) rotate(-90) scale(1.4)");
    if(e>.25){mh.setAttribute("opacity",1);me.setAttribute("opacity",0)}pose(o)};
  return S}

/* ---------- КАТИ: ёжик кончиком носа катит яблоко; камера следом ---------- */
function makeROLL(R){
  var S={};S.vb="0 240 1000 667";S.ACT=4.0;S.snd="roll";
  daySky(R,-600,-600);var cl=cloud(R,500,330,.8);
  hill(R,"rlFar","M-1600 520 L0 520 C300 490 700 506 1000 498 C1260 492 1440 496 1600 500 L3200 500","#CCF0A0");R.appendChild(grain(null,["rlFar"]));
  function atree(x,y,s){var g=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},R);el("rect",{x:-10,y:-60,width:20,height:66,rx:5,fill:"#985038"},g);[[0,-110,58,"#FF8A20"],[-36,-84,40,"#FFD400"],[38,-86,42,"#DC8818"],[6,-60,36,"#FFC880"]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:c[3]},g)})}
  [[200,520,1.4],[460,510,1.1],[860,504,1.5],[1180,500,1.2],[1460,506,1.3]].forEach(function(t){atree(t[0],t[1],t[2])});
  hill(R,"rlG","M-1600 600 L0 600 C400 580 900 592 1600 586 L3200 586","#88A848");
  var path=pathObj(R,"M-260 820 C200 812 500 790 800 786 C1100 782 1400 790 1900 800");
  var road=el("path",{id:"rlRoad",d:"",fill:"#FDE6C4"},R),edge=el("path",{d:"",fill:"none",stroke:"#F8B888","stroke-width":10},R);
  var tex=el("g",{},R),leaves=el("g",{},R);
  var stump=el("g",{transform:"translate(1390 770)"},R);el("path",{d:"M-90 0 L-80 -150 L80 -150 L90 0Z",fill:"#985038"},stump);el("ellipse",{cx:0,cy:-150,rx:80,ry:20,fill:"#D0A090"},stump);el("ellipse",{cx:0,cy:-150,rx:50,ry:11,fill:"none",stroke:"#C47860","stroke-width":4},stump);
  el("path",{d:"M-34 0 V-60 A34 34 0 0 1 34 -60 V0Z",fill:"#2C3A5C"},stump);el("circle",{cx:22,cy:-32,r:4,fill:"#FFD400"},stump);
  var AP=el("g",{},R),APr=el("g",{},AP);el("circle",{cx:0,cy:0,r:40,fill:"#CC1A14"},APr);el("ellipse",{cx:-14,cy:-14,rx:10,ry:7,fill:"#FF3B2B",opacity:.8},APr);el("path",{d:"M0 -38 q2 -14 8 -18",stroke:"#985038","stroke-width":5,fill:"none","stroke-linecap":"round"},APr);el("ellipse",{cx:16,cy:-52,rx:12,ry:6,fill:"#4AA010",transform:"rotate(-20 16 -52)"},APr);
  // hedgehog: spines all around the round body, pointed snout, one front leg visible
  var H=el("g",{},R),HB=el("g",{},H);
  var legF=strokeLeg(HB,"M46 -16 L48 -4","#F8B888",14);
  var sp="",N=36;for(var k=0;k<=N;k++){var a=(-18-k*182/N-(k%2?0:7))*Math.PI/180,r=k%2?1:1.36;sp+=(k?" L":"M")+f1(-14+Math.cos(a)*78*r)+" "+f1(-44+Math.sin(a)*50*r)}sp+=" Z";
  el("path",{d:sp,fill:"#985038","stroke-linejoin":"round",stroke:"#985038","stroke-width":4},HB);
  el("ellipse",{cx:-14,cy:-40,rx:76,ry:40,fill:"#985038"},HB);
  el("path",{d:"M-70 -30 l18 -16 l-14 -2 l20 -18 M-30 -62 l18 -14 l-14 -2 l18 -16",stroke:"#7A3E2C","stroke-width":4,fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},HB);
  var head=el("g",{},HB);el("path",{d:"M42 -86 C66 -80 86 -54 104 -32 C114 -24 114 -16 104 -12 C86 -4 62 0 22 -2 C30 -30 34 -60 42 -86Z",fill:"#FDE6C4"},head);
  el("circle",{cx:42,cy:-90,r:12,fill:"#FDE6C4"},head);el("circle",{cx:42,cy:-90,r:6,fill:"#F8A488"},head);
  el("ellipse",{cx:111,cy:-21,rx:8,ry:7,fill:"#5E2E20"},head);var he=eyeG(head,74,-46,6.5),hh=happyArc(head,74,-45,7);el("circle",{cx:60,cy:-28,r:8,fill:"#FC88A8",opacity:.5},head);
  el("path",{d:"M84 -14 q10 6 18 -2",stroke:"#985038","stroke-width":2.6,fill:"none","stroke-linecap":"round"},head);
  var SC=1.7,AR=40*SC*.62,tw={},X0=330,X1=1080,roll=0;
  S.init=function(){path.init();var d=ribbon(path,function(){return 70},0,70);road.setAttribute("d",d);edge.setAttribute("d",d);R.insertBefore(edge,road);R.insertBefore(grain(null,["rlG","rlRoad"]),tex);
    blades(tex,300,-100,1700,590,1000,"#6E9A30",16,2.8);for(var i=0;i<60;i++){var p=path.at(rr(0,1));el("ellipse",{cx:f1(p.x+rr(-60,60)),cy:f1(p.y+rr(-50,80)),rx:9,ry:5,fill:["#FF8A20","#FFD400","#DC8818"][i%3],transform:"rotate("+f1(rr(0,180))+" "+f1(p.x)+" "+f1(p.y)+")",opacity:.9},leaves)}};
  function yAt(x){return path.at(uAtX(path,x)).y}
  S.reset=function(){S.x=X0;roll=0;hh.setAttribute("opacity",0);he.setAttribute("opacity",1)};
  S.center=function(){return{x:S.x,y:yAt(S.x)-44*SC,sc:SC}};
  S.cam=function(){return[clamp(S.x-380,0,600),240,1000,667]};
  function pose(o){var y=yAt(S.x);tr(H,"translate("+f1(S.x)+" "+f1(y)+") scale("+SC+")");tr(HB,"translate(0 "+f1(o.bob||0)+")");tr(head,"translate("+f1(o.nose||0)+" 0)");
    tr(legF,"translate(0 "+f1(-(o.step||0))+")");blinkT(he,74,-46,o.blink);
    var ax=S.x+(119+(o.nose||0))*SC+AR+(o.gap||0),ay=yAt(ax)-AR;tr(AP,"translate("+f1(ax)+" "+f1(ay)+") scale("+(SC*.62).toFixed(2)+")");tr(APr,"rotate("+f1(roll)+")")}
  S.ambient=function(t){tr(cl.g,"translate("+f1(500+Math.sin(t*.05)*140)+" 330) scale(.8)")};
  S.idle=function(t,dt,attn){var o={bob:Math.sin(t*2.4)*1.2,gap:6};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;var st=idleTimer(tw,"sn",t,2,3.4);if(st<.6)o.nose=Math.sin(st*30)*2;pose(o)};
  S.act=function(e,dt){var u=clamp(e/S.ACT,0,1),nx=lerp(X0,X1,easeArrive(u,.7));roll+=(nx-S.x)/AR*180/Math.PI;S.x=nx;var ph=e%1,nud=ph<.3?Math.sin(Math.PI*ph/.3):0;
    var o={nose:nud*6,step:Math.max(0,Math.sin(e*2*Math.PI/.4))*5,bob:-Math.abs(Math.sin(e*2*Math.PI/.4))*2};pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){S.x=X1;var o={bob:-Math.abs(Math.sin(e*6))*3*Math.max(0,1-e),gap:Math.min(1,e/.5)*10};if(e>.25){hh.setAttribute("opacity",1);he.setAttribute("opacity",0)}pose(o)};
  return S}

/* ---------- МОЙ: енот моет яблоко в ручье; спереди, совсем близко ---------- */
function makeWASH(R){
  var S={};S.vb="460 380 720 480";S.ACT=3.0;S.snd="wash";
  daySky(R,600,480);
  var far=el("g",{},R);[[300,540,1.3],[470,530,1],[1080,526,1.4],[1260,534,1]].forEach(function(t){tree(far,t[0],t[1],t[2])});
  hill(R,"wsG","M-1600 560 L0 560 C400 540 900 552 1600 546 L3200 546","#88A848");R.appendChild(grain(null,["wsG"]));
  var tex=el("g",{},R);blades(tex,200,-100,1700,550,760,"#6E9A30",16,2.8);
  el("path",{d:"M-1600 790 C300 770 700 786 1000 778 C1300 770 1500 780 3200 776 L3200 2100 L-1600 2100Z",fill:"#98B8FC"},R);
  el("path",{d:"M-1600 806 C300 790 700 802 1000 796 C1300 790 1500 798 3200 794 L3200 2100 L-1600 2100Z",fill:"#B8E0E0"},R);
  var glints=[];for(var i=0;i<10;i++)glints.push({e:el("path",{d:"M0 0 h"+f1(rr(24,50)),stroke:"#FFFFFF","stroke-width":4,"stroke-linecap":"round",opacity:.6},R),x:rr(450,1200),y:rr(820,860),ph:rr(0,6)});
  var RX=800,RY=800,SC=1.4,RC=el("g",{transform:"translate("+RX+" "+RY+") scale("+SC+")"},R);
  var tail=el("g",{},RC);for(var k=0;k<5;k++)el("ellipse",{cx:60+k*10,cy:-50-k*24,rx:22,ry:16,fill:k%2?"#5A5A5A":"#A8B0C8",transform:"rotate(-24 "+(60+k*10)+" "+(-50-k*24)+")"},tail);
  el("ellipse",{cx:0,cy:-90,rx:72,ry:84,fill:"#A8B0C8"},RC);el("ellipse",{cx:0,cy:-74,rx:44,ry:60,fill:"#E0E0E0"},RC);
  var fur=el("g",{},RC);[[-56,-120],[-62,-90],[-58,-60],[-50,-140],[56,-120],[62,-90],[58,-60],[50,-140],[-30,-30],[30,-30],[-14,-130],[16,-128]].forEach(function(f,j){var s=f[0]<0?-1:1;el("path",{d:"M"+f[0]+" "+f[1]+" q"+(s*6)+" 6 "+(s*2)+" 12",stroke:j>9?"#C3CFE2":"#8C98B4","stroke-width":3,fill:"none","stroke-linecap":"round"},fur)});
  var head=el("g",{},RC);el("path",{d:"M-58 -190 L-70 -244 L-26 -212Z M58 -190 L70 -244 L26 -212Z",fill:"#A8B0C8"},head);el("path",{d:"M-56 -200 L-62 -232 L-36 -212Z M56 -200 L62 -232 L36 -212Z",fill:"#2C3A5C"},head);
  el("ellipse",{cx:0,cy:-180,rx:64,ry:52,fill:"#A8B0C8"},head);[[-46,-168],[46,-168],[-52,-188],[52,-188]].forEach(function(f){var s=f[0]<0?-1:1;el("path",{d:"M"+f[0]+" "+f[1]+" l"+(s*10)+" 4",stroke:"#8C98B4","stroke-width":3,"stroke-linecap":"round"},head)});
  el("path",{d:"M-58 -184 Q-30 -206 0 -186 Q30 -206 58 -184 Q34 -160 0 -176 Q-34 -160 -58 -184Z",fill:"#2C3A5C"},head);
  el("ellipse",{cx:0,cy:-152,rx:30,ry:22,fill:"#FFFFFF"},head);el("ellipse",{cx:0,cy:-164,rx:10,ry:7,fill:"#2C3A5C"},head);el("path",{d:"M-10 -146 q10 8 20 0",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var re1=el("g",{},head),re2=el("g",{},head);[[re1,-24],[re2,24]].forEach(function(z){el("circle",{cx:z[1],cy:-186,r:9,fill:"#FFFFFF"},z[0]);el("circle",{cx:z[1]+1,cy:-186,r:6,fill:"#2C3A5C"},z[0]);el("circle",{cx:z[1]+3,cy:-189,r:2,fill:"#FFFFFF"},z[0])});
  var rh1=happyArc(head,-24,-185,8,"#FFFFFF"),rh2=happyArc(head,24,-185,8,"#FFFFFF");
  var armL=strokeLeg(RC,"","#5A5A5A",22),armR=strokeLeg(RC,"","#5A5A5A",22);
  var AP=el("g",{},RC),APr=el("g",{},AP);el("circle",{r:30,fill:"#CC1A14"},APr);var shine=el("ellipse",{cx:-10,cy:-12,rx:9,ry:6,fill:"#FFFFFF",opacity:0},APr);
  var dirt=[];[[8,6,6],[-12,8,5],[14,-10,4],[-4,16,5]].forEach(function(d){dirt.push(el("circle",{cx:d[0],cy:d[1],r:d[2],fill:"#7A3E2C",opacity:.9},APr))});
  el("path",{d:"M0 -28 q2 -12 6 -16",stroke:"#985038","stroke-width":4,fill:"none","stroke-linecap":"round"},APr);
  var drops=pool(R,30,function(p){return el("ellipse",{rx:5,ry:7,fill:"#98B8FC",opacity:0},p)}),rip=[];for(i=0;i<3;i++)rip.push({e:el("ellipse",{rx:10,ry:3,fill:"none",stroke:"#FFFFFF","stroke-width":3,opacity:0},R),life:0});
  var tw={};
  S.init=function(){};
  S.reset=function(){shine.setAttribute("opacity",0);dirt.forEach(function(d){d.setAttribute("opacity",.9)});setOp([rh1,rh2],0);setOp([re1,re2],1)};
  S.center=function(){return{x:RX,y:RY-110*SC,sc:SC*.8}};
  function pose(o){var px=(o.ax||0),py=-10+(o.ay||0)-(o.lift||0);tr(AP,"translate("+f1(px)+" "+f1(py)+")");tr(APr,"rotate("+f1(o.rot||0)+")");
    armL.setAttribute("d","M-50 -120 Q-56 "+f1(-60+py/2)+" "+f1(px-26)+" "+f1(py+4));armR.setAttribute("d","M50 -120 Q56 "+f1(-60+py/2)+" "+f1(px+26)+" "+f1(py+4));
    tr(head,"rotate("+f1(o.hd||0)+" 0 -140)");tr(tail,"rotate("+f1(clamp(o.tsw||0,-6,6))+" 56 -60)");[re1,re2].forEach(function(e,i){blinkT(e,i?24:-24,-186,o.blink)})}
  S.ambient=function(t,dt){glints.forEach(function(g){tr(g.e,"translate("+f1(g.x+Math.sin(t*.6+g.ph)*16)+" "+f1(g.y)+")");g.e.setAttribute("opacity",(.35+.3*Math.sin(t*1.4+g.ph)).toFixed(2))});
    runPool(drops,dt,900,1.6);rip.forEach(function(r){if(r.life>0){r.life-=dt*1.2;var k=1-r.life;r.e.setAttribute("cx",r.x);r.e.setAttribute("cy",r.y);r.e.setAttribute("rx",f1(30+90*k));r.e.setAttribute("ry",f1(8+18*k));r.e.setAttribute("opacity",(r.life*.7).toFixed(2))}else r.e.setAttribute("opacity",0)})};
  function splash(){var ax=RX+(S.ax||0)*SC;emit(drops,4,ax,RY-4,-160,160,-360,-200,1.2);var r=rip.find(function(q){return q.life<=0});if(r){r.life=1;r.x=ax;r.y=RY+10}}
  S.idle=function(t,dt,attn){var o={ax:Math.sin(t*1.2)*6,ay:4,hd:Math.sin(t*1.1)*4,tsw:Math.sin(t*1.5)*4};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;if(attn)o.hd=-4;pose(o)};
  S.act=function(e,dt){var ph=e/.375,k=Math.floor(ph),s=Math.sin(Math.PI*2*ph);var o={ax:s*28,ay:8+Math.abs(s)*4,rot:e*260,hd:-4+s*3,tsw:s*5};S.ax=o.ax;
    if(Math.floor((e-dt)/.375)!==k)splash();var clean=clamp(e/2.6,0,1);dirt.forEach(function(d,i){d.setAttribute("opacity",Math.max(0,.9-clean*1.4+i*.1).toFixed(2))});pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){var l=Math.min(1,e/.45),o={ax:0,ay:8,lift:l*70,rot:0,hd:-6,tsw:Math.sin(e*5)*5};shine.setAttribute("opacity",l.toFixed(2));dirt.forEach(function(d){d.setAttribute("opacity",0)});
    if(e<.05)emit(drops,6,RX,RY-10,-120,120,-380,-200,1.1);if(e>.3){setOp([rh1,rh2],1);setOp([re1,re2],0)}pose(o)};
  return S}

/* ---------- БРОСЬ: медвежонок бросает мяч, и он падает внутрь корзины ---------- */
function makeTHROW(R){
  var S={};S.vb="150 170 1300 867";S.ACT=2.4;S.snd="throw";
  daySky(R,1080,360);var cl=[cloud(R,420,320,.9),cloud(R,760,290,.7)];
  hill(R,"thFar","M-1600 620 L0 620 C300 590 700 606 1000 598 C1260 592 1440 596 1600 600 L3200 600","#CCF0A0");R.appendChild(grain(null,["thFar"]));
  var trees=el("g",{},R);[[260,616,1.2],[700,604,1],[1000,600,1.3],[1400,604,1.1]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  hill(R,"thG","M-1600 720 L0 720 C400 700 900 712 1600 706 L3200 706","#88A848");R.appendChild(grain(null,["thG"]));
  var tex=el("g",{},R);blades(tex,320,-100,1700,710,1060,"#6E9A30",16,2.8);var flowers=[];[[300,1000,1.5],[620,1020,1.4],[1340,1010,1.5]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  // basket: dark opening behind the ball, wicker front over it
  var KX=1180,KY=990,BKback=el("g",{transform:"translate("+KX+" "+KY+")"},R);el("ellipse",{cx:0,cy:4,rx:90,ry:8,fill:"#2C3A5C",opacity:.13},BKback);el("ellipse",{cx:0,cy:-150,rx:90,ry:18,fill:"#7A3E2C"},BKback);
  var ballSlot=el("g",{},R);
  var BKfront=el("g",{transform:"translate("+KX+" "+KY+")"},R),BKi=el("g",{},BKfront);
  el("path",{d:"M-92 -150 Q0 -128 92 -150 L74 0 H-74Z",fill:"#DCB510"},BKi);for(var k=0;k<5;k++)el("path",{d:"M-90 "+(-122+k*26)+" Q0 "+(-104+k*26)+" 90 "+(-122+k*26),stroke:"#FFD400","stroke-width":8,fill:"none",opacity:.8},BKi);
  for(k=0;k<7;k++)el("path",{d:"M"+(-78+k*26)+" -146 L"+(-64+k*21)+" 0",stroke:"#C47860","stroke-width":4,opacity:.5},BKi);
  el("path",{d:"M-94 -150 Q0 -126 94 -150",stroke:"#C47860","stroke-width":12,fill:"none","stroke-linecap":"round"},BKi);
  // bear cub standing, side view: rounded legs with feet, arm from the shoulder
  var BX=450,BY=980,SC=1.5,B=el("g",{transform:"translate("+BX+" "+BY+") scale("+SC+")"},R),BB=el("g",{},B);
  el("ellipse",{cx:10,cy:4,rx:70,ry:7,fill:"#2C3A5C",opacity:.13},B);
  var armF=el("g",{},BB);strokeLeg(armF,"M4 -154 C14 -130 20 -112 22 -94","#7A3E2C",32);
  strokeLeg(BB,"M-20 -70 L-16 -14","#7A3E2C",38);el("ellipse",{cx:-4,cy:-8,rx:30,ry:12,fill:"#5E2E20"},BB);
  el("ellipse",{cx:0,cy:-130,rx:60,ry:90,fill:"#985038"},BB);el("ellipse",{cx:20,cy:-118,rx:30,ry:58,fill:"#C47860"},BB);
  strokeLeg(BB,"M8 -60 L14 -14","#985038",40);el("ellipse",{cx:30,cy:-8,rx:32,ry:12,fill:"#7A3E2C"},BB);
  var head=el("g",{},BB);el("circle",{cx:-14,cy:-288,r:18,fill:"#985038"},head);el("circle",{cx:-14,cy:-288,r:10,fill:"#F8A488"},head);el("circle",{cx:36,cy:-292,r:17,fill:"#985038"},head);el("circle",{cx:36,cy:-292,r:9,fill:"#F8A488"},head);
  el("circle",{cx:12,cy:-246,r:50,fill:"#985038"},head);el("ellipse",{cx:54,cy:-232,rx:26,ry:20,fill:"#D0A090"},head);el("ellipse",{cx:74,cy:-240,rx:10,ry:8,fill:"#2C3A5C"},head);
  var be=eyeG(head,30,-260,7),bh=happyArc(head,30,-259,8);el("circle",{cx:22,cy:-234,r:8,fill:"#FC88A8",opacity:.45},head);el("path",{d:"M70 -230 q-4 10 -14 10",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var armN=el("g",{},BB);strokeLeg(armN,"M12 -150 C22 -128 28 -110 30 -88","#86442F",34);el("ellipse",{cx:30,cy:-80,rx:19,ry:13,fill:"#6E3626"},armN);
  var BL=el("g",{},R),BLr=el("g",{},BL);el("circle",{r:34,fill:"#F97A4F"},BLr);el("path",{d:"M-34 0 Q0 18 34 0 M0 -34 Q-18 0 0 34",stroke:"#FFFCDC","stroke-width":6,fill:"none"},BLr);el("ellipse",{cx:-12,cy:-14,rx:8,ry:5,fill:"#FFFFFF",opacity:.6},BLr);
  var tw={};
  S.init=function(){};
  S.reset=function(){R.appendChild(BL);bh.setAttribute("opacity",0);be.setAttribute("opacity",1)};
  S.center=function(){return{x:BX+10*SC,y:BY-170*SC,sc:SC}};
  function handXY(a){var r=a*Math.PI/180,dx=30-12,dy=-80+150,x=12+dx*Math.cos(r)-dy*Math.sin(r),y=-150+dx*Math.sin(r)+dy*Math.cos(r);return{x:BX+x*SC,y:BY+y*SC}}
  function pose(o){tr(BB,"rotate("+f1(o.lean||0)+" 0 -10)");tr(armN,"rotate("+f1(o.arm||0)+" 12 -150)");tr(armF,"rotate("+f1((o.arm||0)*.3)+" 4 -154)");tr(head,"rotate("+f1(o.hd||0)+" 10 -200)");blinkT(be,30,-260,o.blink)}
  function ball(x,y,rot){tr(BL,"translate("+f1(x)+" "+f1(y)+") scale("+(SC*.9).toFixed(2)+")");tr(BLr,"rotate("+f1(rot)+")")}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);cl.forEach(function(c){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05)*120)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={lean:Math.sin(t*1.4)*2,arm:-10+Math.sin(t*1.6)*6,hd:Math.sin(t*1.1)*3};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    var bb=idleTimer(tw,"bnc",t,2.4,3.6);var h=handXY(o.arm);var up=bb<.5?Math.sin(Math.PI*bb/.5)*30:0;if(attn)o.hd=-4;pose(o);ball(h.x+6,h.y-28-up,0)};
  S.act=function(e,dt){var o={};
    if(e<.5){var u=e/.5;o.arm=lerp(-10,60,u*u);o.lean=6*u;var h=handXY(o.arm);pose(o);ball(h.x+6,h.y-28,0)}
    else{var w=clamp((e-.5)/.25,0,1);o.arm=lerp(60,-150,1-Math.pow(1-w,3));o.lean=lerp(6,-8,w);o.hd=-6;pose(o);
      var f=clamp((e-.5)/1.2,0,1),s0=handXY(-150),sx=s0.x+6,sy=s0.y-28,ex=KX,ey=KY-150;var x=lerp(sx,ex,f),y=lerp(sy,ey,f)-Math.sin(Math.PI*f)*360;
      if(f>.8&&BL.parentNode&&BL.nextSibling!==BKfront)R.insertBefore(BL,BKfront);
      if(f>=1){var d=clamp((e-1.7)/.3,0,1);y=ey+d*40;tr(BKi,"rotate("+f1(Math.sin(e*20)*3*(1-d))+" 0 0)")}ball(x,y,f*720)}
    return e>=S.ACT};
  S.fin=function(e,t,dt){var o={arm:-120+Math.sin(e*8)*20,lean:-4,hd:Math.sin(e*3)*4};pose(o);ball(KX,KY-110,720);if(e>.25){bh.setAttribute("opacity",1);be.setAttribute("opacity",0)}};
  return S}

/* ---------- ЕШЬ: белочка откусывает от жёлудя кусочки, пока он не исчезнет ---------- */
function makeEAT(R){
  var S={};S.vb="300 140 1000 667";S.ACT=2.4;S.snd="eat";
  bgRect(R,"url(#gDay)");
  // tree canopy: branches with leaf clusters
  function leafV(p,x,y,a,L,col){var g=el("g",{transform:"translate("+f1(x)+" "+f1(y)+") rotate("+f1(a)+")"},p);el("path",{d:"M0 0 Q"+f1(L*.45)+" "+f1(-L*.3)+" "+f1(L)+" 0 Q"+f1(L*.45)+" "+f1(L*.3)+" 0 0Z",fill:col},g);el("path",{d:"M4 0 L"+f1(L*.86)+" 0 M"+f1(L*.35)+" 0 l"+f1(L*.14)+" -8 M"+f1(L*.55)+" 0 l"+f1(L*.12)+" 7",stroke:"#CCF0A0","stroke-width":2.4,fill:"none","stroke-linecap":"round",opacity:.75},g)}
  var bg=el("g",{},R);[[300,180,640,120],[1500,200,1000,140],[200,520,520,470],[1500,560,1180,520]].forEach(function(b){el("path",{d:"M"+b[0]+" "+b[1]+" Q"+((b[0]+b[2])/2)+" "+(b[1]-30)+" "+b[2]+" "+b[3],stroke:"#A86448","stroke-width":18,fill:"none","stroke-linecap":"round"},bg);
    var ba=Math.atan2(b[3]-b[1],b[2]-b[0])*180/Math.PI;for(var k=0;k<9;k++){var u=.08+k*.11,x=lerp(b[0],b[2],u),y=lerp(b[1],b[3],u)-14*Math.sin(Math.PI*u);leafV(bg,x,y,ba+(k%2?62:-62)+rr(-12,12),rr(56,76),k%3?"#88A848":"#4AA010");if(k%2)leafV(bg,x,y,ba+(k%2?28:-28),rr(40,52),"#ACD48C")}});
  el("path",{d:"M180 640 C500 610 900 630 1500 600 L1500 650 C900 680 500 664 180 690Z",fill:"#985038"},R);el("path",{d:"M300 652 q40 -6 80 4 M800 646 q40 -8 90 2 M1200 630 q30 -6 70 2",stroke:"#7A3E2C","stroke-width":5,fill:"none","stroke-linecap":"round"},R);
  [[380,632,-150],[1300,608,-30],[1060,628,-160],[560,628,-40]].forEach(function(l){leafV(R,l[0],l[1],l[2],60,"#4AA010")});
  var bits=pool(R,24,function(p,k){return el("path",{d:"M-6 0 L0 -5 L7 2 L1 6Z",fill:k%2?"#985038":"#C47860",opacity:0},p)});
  var QX=800,QY=640,SC=2.0,Q=el("g",{transform:"translate("+QX+" "+QY+") scale("+SC+")"},R);
  // tail stays behind the back on the right, away from the head
  var tail=el("g",{},Q);el("path",{d:"M40 -30 C130 -40 170 -130 140 -200 C120 -240 80 -236 84 -200 C90 -160 90 -110 30 -80Z",fill:"#DC8818"},tail);el("path",{d:"M70 -70 C120 -90 134 -150 118 -196",stroke:"#F8A488","stroke-width":10,fill:"none","stroke-linecap":"round",opacity:.6},tail);
  el("ellipse",{cx:0,cy:-70,rx:56,ry:70,fill:"#FFC880"},Q);el("ellipse",{cx:0,cy:-60,rx:32,ry:50,fill:"#FFFCDC"},Q);
  [[-30,-6],[30,-6]].forEach(function(f){el("ellipse",{cx:f[0],cy:f[1],rx:22,ry:10,fill:"#DC8818"},Q)});
  // paws from the shoulders hold a detailed acorn at the chest; bites are cut out of it with a mask
  var mk=el("mask",{id:"acornBites",maskUnits:"userSpaceOnUse",x:-60,y:-80,width:120,height:140},DEFS);el("rect",{x:-60,y:-80,width:120,height:140,fill:"#FFFFFF"},mk);
  var biteSpots=[[-14,-16],[14,-14],[0,-24],[-18,2],[18,4],[-6,10],[10,16],[-14,20],[6,-4],[16,-26],[-20,-28],[0,26],[-10,-6],[12,-34],[-4,34],[4,6]],bites=biteSpots.map(function(p){return el("circle",{cx:p[0],cy:p[1],r:0,fill:"#000000"},mk)});
  var hands=el("g",{},Q),nut=el("g",{mask:"url(#acornBites)"},hands);
  el("path",{d:"M-18 -6 C-20 18 -10 34 0 40 C10 34 20 18 18 -6Z",fill:"#C47860"},nut);el("path",{d:"M-6 0 C-8 16 -4 28 0 32",stroke:"#D0A090","stroke-width":4,fill:"none","stroke-linecap":"round"},nut);el("circle",{cx:0,cy:40,r:3,fill:"#985038"},nut);
  el("path",{d:"M-24 -6 Q-24 -32 0 -34 Q24 -32 24 -6 Q0 2 -24 -6Z",fill:"#985038"},nut);[[-14,-14],[-4,-20],[6,-20],[16,-14],[-8,-10],[2,-12],[12,-8]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:3,fill:"#7A3E2C"},nut)});el("path",{d:"M0 -34 v-8",stroke:"#7A3E2C","stroke-width":4,"stroke-linecap":"round"},nut);
  strokeLeg(hands,"M-40 -86 Q-46 -58 -27 -42","#DC8818",15);strokeLeg(hands,"M40 -86 Q46 -58 27 -42","#DC8818",15);el("circle",{cx:-27,cy:-40,r:10,fill:"#FDE6C4"},hands);el("circle",{cx:27,cy:-40,r:10,fill:"#FDE6C4"},hands);
  var head=el("g",{},Q);el("path",{d:"M-44 -170 L-56 -226 L-20 -190Z M44 -170 L56 -226 L20 -190Z",fill:"#DC8818"},head);el("path",{d:"M-40 -178 L-50 -212 L-28 -190Z M40 -178 L50 -212 L28 -190Z",fill:"#F8A488"},head);el("path",{d:"M-56 -226 l-6 -12 M56 -226 l6 -12 M-56 -226 l2 -13 M56 -226 l-2 -13",stroke:"#985038","stroke-width":6,"stroke-linecap":"round"},head);
  el("ellipse",{cx:0,cy:-150,rx:54,ry:46,fill:"#DC8818"},head);var cheeks=[el("ellipse",{cx:-24,cy:-128,rx:20,ry:16,fill:"#FDE6C4"},head),el("ellipse",{cx:24,cy:-128,rx:20,ry:16,fill:"#FDE6C4"},head)];
  el("ellipse",{cx:0,cy:-138,rx:8,ry:6,fill:"#2C3A5C"},head);el("path",{d:"M-8 -126 q8 6 16 0",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var qe1=eyeG(head,-20,-162,7),qe2=eyeG(head,20,-162,7),qh1=happyArc(head,-20,-161,8),qh2=happyArc(head,20,-161,8);
  el("circle",{cx:-42,cy:-140,r:7,fill:"#FC88A8",opacity:.45},head);el("circle",{cx:42,cy:-140,r:7,fill:"#FC88A8",opacity:.45},head);
  var tw={};
  S.init=function(){};
  S.reset=function(){bites.forEach(function(b){b.setAttribute("r",0)});tr(nut,"translate(0 -44) scale(1.45)");nut.setAttribute("opacity",1);setOp([qh1,qh2],0);setOp([qe1,qe2],1)};
  S.center=function(){return{x:QX,y:QY-110*SC,sc:SC}};
  function pose(o){tr(head,"translate(0 "+f1(o.hy||0)+") rotate("+f1(o.hd||0)+" 0 -110)");tr(hands,"translate(0 "+f1(o.handY||0)+")");tr(tail,"rotate("+f1(o.tsw||0)+" 40 -40)");
    cheeks.forEach(function(c,i){tr(c,"translate("+(i?24:-24)+" -128) scale("+(1+(o.puff||0)).toFixed(2)+") translate("+(i?-24:24)+" 128)")});[qe1,qe2].forEach(function(e,i){blinkT(e,i?20:-20,-162,o.blink)})}
  S.ambient=function(t,dt){runPool(bits,dt,700,1.1)};
  S.idle=function(t,dt,attn){var o={hd:Math.sin(t*1.3)*5,tsw:Math.sin(t*1.6)*3,handY:Math.sin(t*1.8)*3};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    var st=idleTimer(tw,"look",t,2,3.4);if(st<.5)o.hd+=Math.sin(st*30)*4;if(attn)o.hd=0;pose(o)};
  S.act=function(e,dt){var ph=e/.15,k=Math.floor(ph),s=Math.abs(Math.sin(Math.PI*ph));var o={hy:s*10,handY:-s*6,puff:.12*Math.min(1,e/.6),tsw:Math.sin(e*8)*3};
    if(Math.floor((e-dt)/.15)!==k&&k<bites.length){bites[k].setAttribute("r",f1(rr(9,13)));emit(bits,2,QX+biteSpots[k][0]*1.45*SC,QY+(-44+biteSpots[k][1]*1.45)*SC,-140,140,-120,20,1.4)}
    if(e>2.3)nut.setAttribute("opacity",Math.max(0,1-(e-2.3)/.1).toFixed(2));pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){nut.setAttribute("opacity",0);var o={puff:.12*Math.max(0,1-e),hd:Math.sin(e*3)*5,tsw:Math.sin(e*6)*3,handY:6};pose(o);if(e>.25){setOp([qh1,qh2],1);setOp([qe1,qe2],0)}};
  return S}

/* ---------- ПЕЙ: щенок лакает молоко; сверху наискосок, камера подъезжает ---------- */
function makeDRINK(R){
  var S={};S.vb="200 100 1200 800";S.ACT=2.8;S.snd="drink";
  el("rect",{x:-400,y:-400,width:2400,height:700,fill:"#FDDDD0"},R);el("rect",{x:-400,y:280,width:2400,height:20,fill:"#C47860"},R);
  var tiles=el("g",{},R);el("path",{id:"drFloor",d:"M-400 300 H2000 V1400 H-400Z",fill:"#D3E2FF"},tiles);
  for(var r=0;r<9;r++)for(var c=0;c<22;c++)if((r+c)%2)el("rect",{x:-400+c*110,y:300+r*110,width:110,height:110,fill:"#ADC7FE"},tiles);
  R.appendChild(grain(null,["drFloor"]));
  var BW=el("g",{transform:"translate(800 700)"},R);el("ellipse",{cx:0,cy:20,rx:190,ry:70,fill:"#2C3A5C",opacity:.15},BW);el("ellipse",{cx:0,cy:0,rx:180,ry:80,fill:"#F97A4F"},BW);el("ellipse",{cx:0,cy:-6,rx:150,ry:62,fill:"#FDDDD0"},BW);
  var milk=el("ellipse",{cx:0,cy:-2,rx:130,ry:52,fill:"#FFFFFF"},BW);var rip=[];for(var i=0;i<3;i++)rip.push({e:el("ellipse",{rx:10,ry:4,fill:"none",stroke:"#D3E2FF","stroke-width":4,opacity:0},BW),life:0});
  var P=el("g",{transform:"translate(800 520) scale(1.6)"},R);
  var tail=el("path",{d:"",stroke:"#D0A090","stroke-width":12,fill:"none","stroke-linecap":"round"},P);
  el("ellipse",{cx:0,cy:-50,rx:62,ry:82,fill:"#D0A090"},P);el("ellipse",{cx:20,cy:-70,rx:22,ry:26,fill:"#985038"},P);
  [[-50,26],[50,26]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:18,ry:22,fill:"#D0A090"},P);el("ellipse",{cx:p[0],cy:p[1]+16,rx:14,ry:9,fill:"#FFFCDC"},P)});
  var head=el("g",{},P);el("ellipse",{cx:-44,cy:40,rx:18,ry:40,fill:"#985038",transform:"rotate(20 -44 40)"},head);el("ellipse",{cx:44,cy:40,rx:18,ry:40,fill:"#985038",transform:"rotate(-20 44 40)"},head);
  el("ellipse",{cx:0,cy:40,rx:46,ry:44,fill:"#D0A090"},head);el("ellipse",{cx:0,cy:72,rx:26,ry:20,fill:"#FFFCDC"},head);el("ellipse",{cx:0,cy:62,rx:10,ry:7,fill:"#2C3A5C"},head);
  el("path",{d:"M0 68 v6 M-10 78 q10 6 20 0",stroke:"#2C3A5C","stroke-width":2.6,fill:"none","stroke-linecap":"round"},head);
  var tongue=el("path",{d:"M-7 80 Q-8 98 0 100 Q8 98 7 80Z",fill:"#FC88A8",opacity:0},head);var must=el("path",{d:"M-18 82 q9 6 18 0 q9 6 18 0",stroke:"#FFFFFF","stroke-width":5,fill:"none","stroke-linecap":"round",opacity:0},head);
  var pe1=eyeG(head,-17,34,6),pe2=eyeG(head,17,34,6),ph1=happyArc(head,-17,35,7),ph2=happyArc(head,17,35,7);
  el("circle",{cx:-32,cy:60,r:7,fill:"#FC88A8",opacity:.45},head);el("circle",{cx:32,cy:60,r:7,fill:"#FC88A8",opacity:.45},head);
  var tw={},push=0,level=1;
  S.init=function(){};
  S.reset=function(){push=0;level=1;setOp([ph1,ph2],0);setOp([pe1,pe2],1);tongue.setAttribute("opacity",0);must.setAttribute("opacity",0)};
  S.center=function(){return{x:800,y:600,sc:1.6}};
  S.cam=function(){return[lerp(200,330,push),lerp(100,220,push),lerp(1200,940,push),lerp(800,627,push)]};
  function pose(o){tr(head,"translate(0 "+f1(o.dip||0)+") rotate("+f1(o.hd||0)+" 0 20) scale("+(1-(o.dip||0)*.004).toFixed(3)+")");tongue.setAttribute("opacity",o.tongue?1:0);tr(tongue,"translate(0 80) scale(1 "+(0.4+(o.tongue||0)*.8).toFixed(2)+") translate(0 -80)");
    tail.setAttribute("d","M0 -128 q"+f1(o.tsw||0)+" -30 "+f1((o.tsw||0)*1.4)+" -54");[pe1,pe2].forEach(function(e,i){blinkT(e,i?17:-17,34,o.blink)});tr(milk,"scale("+(0.55+.45*level).toFixed(3)+")")}
  S.ambient=function(t,dt){rip.forEach(function(r){if(r.life>0){r.life-=dt*1.4;var k=1-r.life;r.e.setAttribute("cx",0);r.e.setAttribute("cy",-2);r.e.setAttribute("rx",f1(20+90*k*level));r.e.setAttribute("ry",f1(8+34*k*level));r.e.setAttribute("opacity",(r.life*.9).toFixed(2))}else r.e.setAttribute("opacity",0)})};
  S.idle=function(t,dt,attn){var o={hd:Math.sin(t*1.2)*5,tsw:Math.sin(t*9)*18};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;var sn=idleTimer(tw,"sn",t,2.4,3.8);if(sn<.6)o.dip=Math.sin(Math.PI*sn/.6)*14;if(attn)o.hd=0;pose(o)};
  S.act=function(e,dt){push=easeArrive(clamp(e/1,0,1),0);var ph=e/.35,k=Math.floor(ph),s=Math.sin(Math.PI*(ph%1));level=Math.max(.3,1-e/2.8*.7);var o={dip:14+s*16,tongue:s>.3?s:0,tsw:Math.sin(e*14)*22};
    if(Math.floor((e-dt)/.35)!==k){var r=rip.find(function(q){return q.life<=0});if(r)r.life=1}pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){push=1;var o={dip:Math.max(0,14-e*40),tsw:Math.sin(e*14)*22};if(e>.25){setOp([ph1,ph2],1);setOp([pe1,pe2],0)}pose(o)};
  return S}

/* ---------- ДУЙ: крупный план зайчика, он сдувает одуванчик; камера чуть уходит за пушинками ---------- */
function makeBLOW(R){
  var S={};S.VB0=[330,95,780,520];S.vb=S.VB0.join(" ");S.ACT=2.6;S.snd="blow";
  var gb=el("linearGradient",{id:"gSkyB",gradientUnits:"userSpaceOnUse",x1:0,y1:60,x2:0,y2:620},DEFS);el("stop",{offset:0,"stop-color":"#98B8FC"},gb);el("stop",{offset:1,"stop-color":"#C4D8FF"},gb);el("rect",{x:-1600,y:-1600,width:4800,height:4000,fill:"url(#gSkyB)"},R);var cl=[cloud(R,820,190,1),cloud(R,1250,160,.8)];
  hill(R,"blFar","M-1600 570 L0 570 C300 540 700 556 1000 548 C1260 542 1440 546 1600 550 L3200 550","#CCF0A0");R.appendChild(grain(null,["blFar"]));
  var trees=el("g",{},R);[[460,566,1.2],[1240,552,1.3],[1440,556,1]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  // bunny head & paws (light grey, so the white dandelion stands out)
  var BX=560,BY=760,SC=2.6,B=el("g",{transform:"translate("+BX+" "+BY+") scale("+SC+")"},R);
  el("ellipse",{cx:18,cy:-10,rx:66,ry:80,fill:"#FFFFFF"},B);
  var head=el("g",{},B);el("ellipse",{cx:6,cy:-200,rx:16,ry:52,fill:"#FFFFFF",transform:"rotate(-8 6 -200)"},head);el("ellipse",{cx:6,cy:-200,rx:8,ry:38,fill:"#FCC4BC",transform:"rotate(-8 6 -200)"},head);
  el("ellipse",{cx:34,cy:-206,rx:16,ry:52,fill:"#FFFFFF",transform:"rotate(10 34 -206)"},head);el("ellipse",{cx:34,cy:-206,rx:8,ry:38,fill:"#FCC4BC",transform:"rotate(10 34 -206)"},head);
  el("circle",{cx:26,cy:-128,r:44,fill:"#FFFFFF"},head);var cheek=el("ellipse",{cx:54,cy:-110,rx:20,ry:15,fill:"#EAF1FF"},head);
  el("ellipse",{cx:68,cy:-122,rx:6,ry:5,fill:"#FC88A8"},head);var mouthO=el("ellipse",{cx:70,cy:-108,rx:4,ry:4,fill:"#2C3A5C",opacity:0},head);var mouthS=el("path",{d:"M62 -110 q6 5 12 0",stroke:"#2C3A5C","stroke-width":2.6,fill:"none","stroke-linecap":"round"},head);
  var be=eyeG(head,42,-140,6.5),bh=happyArc(head,42,-139,7);el("circle",{cx:36,cy:-112,r:7,fill:"#FC88A8",opacity:.5},head);
  var arm=el("g",{},B);el("ellipse",{cx:58,cy:-58,rx:16,ry:12,fill:"#E0E0E0",transform:"rotate(-30 58 -58)"},arm);el("ellipse",{cx:44,cy:-50,rx:15,ry:11,fill:"#E0E0E0",transform:"rotate(-30 44 -50)"},arm);
  el("path",{d:"M70 -66 C88 -74 106 -84 122 -96",stroke:"#4AA010","stroke-width":5,fill:"none","stroke-linecap":"round"},arm);
  var puff=el("g",{transform:"translate(126 -102)"},arm);el("circle",{r:8,fill:"#DCB510"},puff);var pseeds=[];for(var k=0;k<22;k++){var a=k/22*Math.PI*2,g=el("g",{transform:"rotate("+f1(a*180/Math.PI)+")"},puff);el("path",{d:"M0 0 L0 -26",stroke:"#BABABA","stroke-width":1.4},g);el("circle",{cx:0,cy:-28,r:5,fill:"#FFFFFF",stroke:"#E0E0E0","stroke-width":1},g);pseeds.push(g)}
  var seeds=pool(R,22,function(p){var g=el("g",{opacity:0},p);el("path",{d:"M0 0 L0 -18",stroke:"#BABABA","stroke-width":1.6},g);el("path",{d:"M-8 -20 Q0 -28 8 -20",stroke:"#FFFFFF","stroke-width":3,fill:"none"},g);return g});
  var wind=[];for(k=0;k<3;k++)wind.push(el("path",{d:"M0 0 q30 -10 60 0 q30 10 60 0",stroke:"#FFFFFF","stroke-width":4,fill:"none","stroke-linecap":"round",opacity:0},R));
  var tw={},gone=0,pan=0;
  S.init=function(){};
  S.reset=function(){gone=0;pan=0;pseeds.forEach(function(s){s.setAttribute("opacity",1)});bh.setAttribute("opacity",0);be.setAttribute("opacity",1);mouthO.setAttribute("opacity",0);mouthS.setAttribute("opacity",1)};
  S.center=function(){return{x:BX+60*SC,y:BY-110*SC,sc:SC*.6}};
  S.cam=function(){var v=S.VB0;return[v[0]+pan*160,v[1]-pan*30,v[2],v[3]]};
  function pose(o){tr(head,"rotate("+f1(o.hd||0)+" 10 -90)");tr(cheek,"translate(54 -110) scale("+(1+(o.puff||0)).toFixed(2)+") translate(-54 110)");tr(arm,"rotate("+f1(o.arm||0)+" 24 -30)");blinkT(be,42,-140,o.blink)}
  S.ambient=function(t,dt){cl.forEach(function(c){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05)*100)+" "+c.y+") scale("+c.s+")")});
    seeds.forEach(function(p){if(p.life>0){p.life-=dt*.35;p.x+=p.vx*dt;p.y+=p.vy*dt+Math.sin(t*3+p.ph)*20*dt;p.vy*=.995;tr(p.e,"translate("+f1(p.x)+" "+f1(p.y)+") rotate("+f1(Math.sin(t*4+p.ph)*20)+") scale(2.2)");p.e.setAttribute("opacity",Math.min(1,p.life*2).toFixed(2))}else p.e.setAttribute("opacity",0)})};
  S.idle=function(t,dt,attn){var o={hd:Math.sin(t*1.2)*3,arm:Math.sin(t*1.5)*3};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;if(attn)o.hd=-3;pose(o)};
  S.act=function(e,dt){var o={};var px=BX+126*SC,py=BY-102*SC;
    if(e<.6){o.puff=.35*Math.sin(Math.PI/2*e/.6);o.hd=-4*e/.6}else{var u=clamp((e-.6)/1,0,1);o.puff=.35*(1-u);o.hd=-4+4*u;mouthO.setAttribute("opacity",u<1?1:0);mouthS.setAttribute("opacity",u<1?0:1);
      pan=easeArrive(clamp((e-.8)/1.8,0,1),0);
      var n=Math.floor(u*22);while(gone<n){pseeds[gone].setAttribute("opacity",0);var a=gone/22*Math.PI*2;var p=seeds.find(function(q){return q.life<=0});if(p){p.life=1;p.x=px+Math.sin(a)*28*SC;p.y=py-Math.cos(a)*28*SC;p.vx=rr(160,300);p.vy=rr(-120,-30);p.ph=rr(0,6)}gone++}
      wind.forEach(function(w,i){var k2=clamp(u*1.4-i*.15,0,1);tr(w,"translate("+f1(BX+80*SC+k2*200)+" "+f1(BY-(112-i*10)*SC)+")");w.setAttribute("opacity",(k2>0&&k2<1?Math.sin(Math.PI*k2)*.8:0).toFixed(2))})}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t,dt){pan=1;var o={hd:Math.sin(e*3)*4,arm:Math.sin(e*4)*4};if(e>.25){bh.setAttribute("opacity",1);be.setAttribute("opacity",0)}pose(o)};
  return S}

/* ---------- ПОЛИВАЙ: слонёнок долго поливает цветы, хобот плавно поднимается и опускается ---------- */
function makeWATER(R){
  var S={};S.vb="150 170 1300 867";S.ACT=4.4;S.snd="water";
  daySky(R,1080,360);var cl=[cloud(R,400,310,.9),cloud(R,760,290,.7)];
  hill(R,"waFar","M-1600 620 L0 620 C300 590 700 606 1000 598 C1260 592 1440 596 1600 600 L3200 600","#CCF0A0");R.appendChild(grain(null,["waFar"]));
  var trees=el("g",{},R);[[280,616,1.2],[620,604,1],[1380,604,1.2]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  hill(R,"waG","M-1600 720 L0 720 C400 700 900 712 1600 706 L3200 706","#88A848");R.appendChild(grain(null,["waG"]));
  var tex=el("g",{},R);blades(tex,300,-100,1700,710,1060,"#6E9A30",16,2.8);
  el("ellipse",{id:"waBed",cx:1120,cy:960,rx:250,ry:56,fill:"#C47860"},R);R.appendChild(grain(null,["waBed"]));
  var buds=[];[[1000,950,"#FC88A8"],[1120,960,"#FFD400"],[1240,950,"#B890E0"]].forEach(function(b){var g=el("g",{transform:"translate("+b[0]+" "+b[1]+")"},R);el("path",{d:"M0 0 V-110",stroke:"#4AA010","stroke-width":9},g);el("ellipse",{cx:-18,cy:-40,rx:20,ry:9,fill:"#4AA010",transform:"rotate(-30 -18 -40)"},g);el("ellipse",{cx:18,cy:-64,rx:20,ry:9,fill:"#4AA010",transform:"rotate(30 18 -64)"},g);
    var head=el("g",{transform:"translate(0 -116)"},g),pet=[];for(var k=0;k<6;k++)pet.push(el("ellipse",{cx:0,cy:-22,rx:13,ry:24,fill:b[2],transform:"rotate("+(k*60)+")"},head));var core=el("circle",{r:12,fill:"#FFF8A8"},head);
    var bud=el("ellipse",{cx:0,cy:-10,rx:14,ry:22,fill:b[2]},head);buds.push({head:head,pet:pet,core:core,bud:bud})});
  var EX=520,EY=980,SC=1.45,E=el("g",{transform:"translate("+EX+" "+EY+") scale("+SC+")"},R);
  el("ellipse",{cx:0,cy:4,rx:120,ry:8,fill:"#2C3A5C",opacity:.13},E);
  [-80,40].forEach(function(x){strokeLeg(E,"M"+x+" -90 L"+x+" -14","#8C98B4",40)});
  el("path",{d:"M-136 -150 q-24 10 -20 40",stroke:"#A8B0C8","stroke-width":8,fill:"none","stroke-linecap":"round"},E);
  el("ellipse",{cx:-20,cy:-140,rx:120,ry:86,fill:"#A8B0C8"},E);
  [-56,66].forEach(function(x){strokeLeg(E,"M"+x+" -90 L"+x+" -14","#A8B0C8",42);el("ellipse",{cx:x,cy:-8,rx:24,ry:8,fill:"#EAF1FF"},E)});
  var head=el("g",{},E);
  var trunk=el("path",{d:"",stroke:"#A8B0C8","stroke-width":30,fill:"none","stroke-linecap":"round"},head);var tipC=el("ellipse",{rx:17,ry:12,fill:"#8C98B4"},head);
  el("circle",{cx:100,cy:-190,r:70,fill:"#A8B0C8"},head);
  var ear=el("g",{},head);el("path",{d:"M70 -240 C10 -260 -10 -170 40 -130 C60 -120 80 -150 80 -190Z",fill:"#C3CFE2"},ear);el("path",{d:"M64 -228 C24 -240 12 -180 46 -150 C58 -144 70 -170 70 -196Z",fill:"#FCC4BC"},ear);
  var ee=eyeG(head,126,-206,7),eh=happyArc(head,126,-205,8);el("circle",{cx:132,cy:-176,r:9,fill:"#FC88A8",opacity:.45},head);
  var drops=[];for(var i=0;i<16;i++)drops.push(el("ellipse",{rx:7,ry:10,fill:"#98B8FC",opacity:0},R));
  var arc=el("path",{d:"",fill:"none",visibility:"hidden"},R),tw={};
  // trunk from the face: base fixed, tip moves smoothly between hanging down and raised towards the flowers
  var REST={c1:[176,-150],c2:[184,-110],tip:[176,-74]},UP={c1:[184,-196],c2:[226,-226],tip:[244,-266]};
  function trunkPts(u,sw){function m(a,b){return[lerp(a[0],b[0],u),lerp(a[1],b[1],u)]}var c1=m(REST.c1,UP.c1),c2=m(REST.c2,UP.c2),tp=m(REST.tip,UP.tip);c2[0]+=sw||0;tp[0]+=(sw||0)*1.3;return{c1:c1,c2:c2,tip:tp}}
  S.init=function(){};
  S.reset=function(){buds.forEach(function(b){bloom(b,0)});eh.setAttribute("opacity",0);ee.setAttribute("opacity",1)};
  S.center=function(){return{x:EX+40*SC,y:EY-170*SC,sc:SC}};
  function pose(o){var p=trunkPts(o.up||0,o.sw);trunk.setAttribute("d","M150 -176 C"+f1(p.c1[0])+" "+f1(p.c1[1])+" "+f1(p.c2[0])+" "+f1(p.c2[1])+" "+f1(p.tip[0])+" "+f1(p.tip[1]));
    tr(tipC,"translate("+f1(p.tip[0])+" "+f1(p.tip[1])+") rotate("+f1(lerp(90,-40,o.up||0))+")");tr(ear,"rotate("+f1(o.ear||0)+" 76 -190)");tr(head,"rotate("+f1(o.hd||0)+" 60 -150)");blinkT(ee,126,-206,o.blink);return p}
  function bloom(b,k){var e=1-Math.pow(1-clamp(k,0,1),3);b.bud.setAttribute("opacity",(1-e).toFixed(2));b.pet.forEach(function(p){p.setAttribute("opacity",e.toFixed(2))});b.core.setAttribute("opacity",e.toFixed(2));tr(b.head,"translate(0 -116) scale("+(0.6+.4*e).toFixed(2)+")")}
  S.ambient=function(t,dt){cl.forEach(function(c){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05)*120)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={sw:Math.sin(t*1.5)*10,ear:Math.sin(t*1.2)*6,hd:Math.sin(t)*2};var bt=idleTimer(tw,"blink",t,2,3.6);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;if(attn)o.ear=10;pose(o)};
  S.act=function(e,dt){var up=easeArrive(clamp(e/.4,0,1),0),o={up:up,ear:Math.sin(e*8)*6,sw:Math.sin(e*2)*4};var p=pose(o);var tx=EX+p.tip[0]*SC,ty=EY+p.tip[1]*SC;
    var aim=1120+Math.sin(e*1.8)*120;arc.setAttribute("d","M"+f1(tx)+" "+f1(ty)+" Q"+f1((tx+aim)/2)+" "+f1(ty-220)+" "+f1(aim)+" 820");var AL=arc.getTotalLength();
    var on=e>.4&&e<4.0;drops.forEach(function(d,i){if(!on){d.setAttribute("opacity",0);return}var k=((e*1.3+i/drops.length)%1),q=arc.getPointAtLength(k*AL);tr(d,"translate("+f1(q.x)+" "+f1(q.y)+")");d.setAttribute("opacity",(.9*Math.sin(Math.PI*k)).toFixed(2))});
    buds.forEach(function(b,i){bloom(b,(e-[1.6,2.6,3.6][i])/.5)});return e>=S.ACT};
  S.fin=function(e,t,dt){var down=easeArrive(clamp(e/1.2,0,1),0),o={up:1-down,ear:Math.sin(e*6)*10*Math.max(.2,1-e/1.5),hd:Math.sin(e*3)*3};pose(o);drops.forEach(function(d){d.setAttribute("opacity",0)});buds.forEach(function(b){bloom(b,1)});if(e>.25){eh.setAttribute("opacity",1);ee.setAttribute("opacity",0)}};
  return S}


/* ==========================================================
   ИГРА: 3 звезды × 4 сцены. Логика интерфейса — как в «Виммельбухе».
   ========================================================== */
var REPO="https://cdn.jsdelivr.net/gh/pandora28546-lab/imperative@main/";
var G2="https://cdn.jsdelivr.net/gh/pandora28546-lab/sofia-game2@main/";
var DBASE="https://cdn.jsdelivr.net/gh/pandora28546-lab/Otvlekashki@main/";
var STAR_URL=G2+"Starsystems.png";
var NEXT_GAME_URL=(window.SG_CFG&&window.SG_CFG.next)||"https://sofiatmn.ru/";
var POVTORI="Povtori.m4a";
var SEQ=[[{v:"nesi",make:makeCARRY},{v:"lovi",make:makeCATCH},{v:"kopai",make:makeDIG},{v:"tyani",make:makePULL}],[{v:"kati",make:makeROLL},{v:"moi",make:makeWASH},{v:"bros",make:makeTHROW},{v:"stuchi",make:makeKNOCK}],[{v:"esh",make:makeEAT},{v:"pei",make:makeDRINK},{v:"dui",make:makeBLOW},{v:"polivai",make:makeWATER}]];               /* [[{v:"nesi",make:makeCARRY},…4],…3] */
var HINT_FIRST=0,HINT_NEXT=3,PRE_VOICE=.6,BTN_AFTER=2.2;

function $id(id){return document.getElementById(id)}
var game=$id("sofia-game"),stage=$id("sg-stage");

/* ─── сцены ─── */
var scenes=[],ITEMS=[];SEQ.forEach(function(st){st.forEach(function(it){ITEMS.push(it)})});
function buildScene(k){if(scenes[k])return scenes[k];var it=ITEMS[k];
  var svg=el("svg",{class:"sg-svg",preserveAspectRatio:"xMidYMid slice"},stage);
  var R=el("g",{},svg),S=it.make(R);svg.setAttribute("viewBox",S.vb);
  var vb=S.vb.split(" ").map(Number);
  var hint=el("g",{opacity:0},svg),waves=[0,1,2].map(function(){return el("circle",{r:f1(vb[2]*.065),fill:"none",stroke:"#6B91D6","stroke-width":4,"vector-effect":"non-scaling-stroke",opacity:0},hint)});
  svg.style.display="none";
  var sc={svg:svg,S:S,hint:hint,waves:waves,vb:vb,v:it.v};scenes[k]=sc;S.init();syncGrain();still(sc);return sc}
buildScene(0);
function cam(sc){if(sc.S.cam){var v=sc.S.cam();sc.vb=v;sc.svg.setAttribute("viewBox",v.map(f1).join(" "))}}
function still(sc){sc.S.reset();sc.S.ambient(0,0,"intro");sc.S.idle(0,0,false);cam(sc);sc.hint.setAttribute("opacity",0)}

/* ─── аудио (HTMLAudio + blob-URL, как в «Виммельбухе») ─── */
var objUrls={};function srcFor(u){return objUrls[u]||u}
function vURL(v){return REPO+v+".m4a"}function goURL(v){return REPO+v+"_go.mp3"}function finURL(v){return REPO+v+"_fin.mp3"}
function audioUrls(){var s=[REPO+POVTORI];ITEMS.forEach(function(it){s.push(vURL(it.v),goURL(it.v),finURL(it.v))});["stage complete.wav","fanfare.wav"].forEach(function(f){s.push(DBASE+encodeURIComponent(f))});return s}
var SILENT_WAV="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";
var speechEl=new Audio(),runEl=new Audio(),finEl=new Audio(),fxEl=new Audio();[speechEl,runEl,finEl,fxEl].forEach(function(a){a.preload="auto"});
var musicOn=true;
function unlockAll(){[speechEl,runEl,finEl,fxEl].forEach(function(a){try{a.src=SILENT_WAV;var p=a.play();if(p&&p.then)p.then(function(){try{a.pause();a.currentTime=0}catch(e){}}).catch(function(){})}catch(e){}})}
var speechTimer=null,speechSeq=0;
function stopSpeech(){speechSeq++;if(speechTimer){clearTimeout(speechTimer);speechTimer=null}speechEl.onended=null;speechEl.onerror=null;try{speechEl.pause()}catch(e){}}
function playSpeech(url,onDone){stopSpeech();var my=speechSeq;
  function finish(){if(my!==speechSeq)return;speechSeq++;if(speechTimer){clearTimeout(speechTimer);speechTimer=null}if(onDone)onDone()}
  speechEl.onended=function(){speechEl.onended=null;speechEl.onerror=null;finish()};speechEl.onerror=function(){speechEl.onended=null;speechEl.onerror=null;finish()};
  speechTimer=setTimeout(finish,8000);try{speechEl.src=srcFor(url);speechEl.currentTime=0}catch(e){}var p=speechEl.play();if(p&&p.catch)p.catch(function(){finish()})}
function playMusic(a,url){try{a.pause();a.src=srcFor(url);a.currentTime=0;a.muted=!musicOn}catch(e){}var p=a.play();if(p&&p.catch)p.catch(function(){})}
function stopMusic(){[runEl,finEl].forEach(function(a){try{a.pause()}catch(e){}})}
function playFx(f){try{fxEl.src=srcFor(DBASE+encodeURIComponent(f));fxEl.currentTime=0}catch(e){}var p=fxEl.play();if(p&&p.catch)p.catch(function(){})}

/* ─── предзагрузка → полоска собачки ─── */
var loaded=0,total=0,loadRevealed=false;
function tick(){loaded++;var f=loaded/total;if(window.__uzorProgress)window.__uzorProgress(f);if(loaded>=total){if(window.__uzorFinish)window.__uzorFinish(revealStart);else setTimeout(revealStart,300)}}
function revealStart(){if(loadRevealed)return;loadRevealed=true;onLoaded()}
(function(){var urls=audioUrls(),imgs=[STAR_URL];total=urls.length+imgs.length+ITEMS.length-1;
  (function nextBuild(k){if(k>=ITEMS.length)return;setTimeout(function(){buildScene(k);tick();nextBuild(k+1)},60)})(1);
  urls.forEach(function(u){fetch(u).then(function(r){if(!r.ok)throw 0;return r.blob()}).then(function(b){try{objUrls[u]=URL.createObjectURL(b)}catch(e){}tick()}).catch(function(){tick()})});
  imgs.forEach(function(u){var im=new Image();im.onload=im.onerror=tick;im.src=u})})();
document.querySelectorAll("#sofia-game .sg-starsym").forEach(function(im){im.src=STAR_URL});
game.style.setProperty("--sg-star-mask",'url("'+STAR_URL+'")');$id("sg-bigstar-img").src=STAR_URL;
[].slice.call(document.querySelectorAll("#sofia-game .sg-starsym, #sg-bigstar-img")).forEach(function(im){try{if(im.decode)im.decode().catch(function(){})}catch(e){}});

/* ─── состояние ─── */
var idx=0,phase="intro",t0=0,hintAt=1e9,first=true,clock=0,last=performance.now()/1000,started=false,loadedReady=false,stageBusy=false;
var starBacks=[].slice.call(document.querySelectorAll("#sofia-game .sg-starback"));
function cur(){return scenes[idx]}
function show(i){buildScene(i);var warm=warmIdx===i;scenes.forEach(function(sc,k){if(sc){sc.svg.style.display=k===i?"":"none";sc.svg.style.zIndex=k===i?1:0}});idx=i;warmIdx=-1;if(!warm)still(cur())}
/* следующая сцена заранее отрисовывается под текущей (свой слой), чтобы «Дальше» не дёргало кадр */
var warmIdx=-1;
function prewarm(){var k=idx+1;if(k>=ITEMS.length||warmIdx===k)return;var sc=buildScene(k);still(sc);sc.svg.style.zIndex=0;sc.svg.style.display="";warmIdx=k}
function hideHint(){cur().hint.setAttribute("opacity",0);hintAt=1e9}
function showBtns(on){game.classList.toggle("sg-btns",on)}

/* сцена: (первая) «Повтори» → команда → подсказка; остальные: команда → подсказка через 3 с */
function startScene(isFirst){var sc=cur();stopSpeech();stopMusic();showBtns(false);sc.S.reset();cam(sc);hideHint();phase="voice";t0=clock;
  var my=++sceneToken;
  var at=idx;setTimeout(function(){if(at===idx&&phase==="voice")prewarm()},150);   /* сразу после смены сцены, пока животное стоит */
  setTimeout(function(){if(my!==sceneToken||phase!=="voice")return;
    var cmd=function(){if(my!==sceneToken||phase!=="voice")return;playSpeech(vURL(sc.v),function(){if(my!==sceneToken||phase!=="voice")return;phase="ready";hintAt=clock+(isFirst?HINT_FIRST:HINT_NEXT)})};
    if(isFirst)playSpeech(REPO+POVTORI,cmd);else cmd()},(isFirst?.3:PRE_VOICE)*1000)}
var sceneToken=0;

/* тап по животному — с начала команды */
function toSvg(sc,ev){var r=sc.svg.getBoundingClientRect(),v=sc.vb,k=Math.max(r.width/v[2],r.height/v[3]),ox=(r.width-v[2]*k)/2,oy=(r.height-v[3]*k)/2;
  return{x:v[0]+(ev.clientX-r.left-ox)/k,y:v[1]+(ev.clientY-r.top-oy)/k}}
stage.addEventListener("pointerdown",function(ev){
  if(!started||(phase!=="voice"&&phase!=="ready"))return;
  var sc=cur(),p=toSvg(sc,ev),c=sc.S.center(),rad=clamp(210*c.sc,sc.vb[2]*.14,sc.vb[2]*.3);
  if(Math.hypot(p.x-c.x,p.y-c.y)>rad)return;
  sceneToken++;stopSpeech();hideHint();phase="act";t0=clock;first=true;playMusic(runEl,goURL(sc.v))});

/* ─── звёзды / финал ─── */
function flyBigStar(slot,cb){var back=starBacks[slot],gr=game.getBoundingClientRect(),br=back.getBoundingClientRect();
  var dx=(br.left+br.width/2)-(gr.left+gr.width/2),dy=(br.top+br.height/2)-(gr.top+gr.height/2),big=$id("sg-bigstar");
  big.style.transition="none";big.style.display="block";big.style.transform="translate(-50%,-50%) scale(0)";
  requestAnimationFrame(function(){requestAnimationFrame(function(){big.style.transition="transform .45s cubic-bezier(.34,1.56,.64,1)";big.style.transform="translate(-50%,-50%) scale(1)";
    setTimeout(function(){var s=Math.max(.05,br.width/(big.offsetWidth||160));big.style.transition="transform .7s ease";
      big.style.transform="translate(calc(-50% + "+dx+"px), calc(-50% + "+dy+"px)) scale("+s+")";
      setTimeout(function(){back.classList.add("sg-earned");big.style.display="none";if(cb)cb()},720)},600)})})}
function pulseAllStars(){starBacks.forEach(function(b,i){setTimeout(function(){b.classList.remove("sg-pulse");void b.offsetWidth;b.classList.add("sg-pulse")},i*180)})}
function sceneDone(){var q=idx%4,s=Math.floor(idx/4);
  if(q<3){showBtns(true);return}
  if(starBacks[s].classList.contains("sg-earned")){if(idx===ITEMS.length-1)finishGame();else showBtns(true);return}
  stageBusy=true;playFx("stage complete.wav");launchFireworks();
  flyBigStar(s,function(){stageBusy=false;if(idx===ITEMS.length-1)setTimeout(finishGame,400);else showBtns(true)})}
function finishGame(){phase="end";playFx("fanfare.wav");launchFireworks();pulseAllStars();setTimeout(function(){$id("sg-end-overlay").classList.add("sg-show")},1500)}
function restart(){$id("sg-end-overlay").classList.remove("sg-show");stopFireworks();starBacks.forEach(function(b){b.classList.remove("sg-earned","sg-pulse")});show(0);startScene(true)}

/* ─── кнопки ─── */
$id("sg-again").addEventListener("click",function(){if(stageBusy)return;startScene(false)});
$id("sg-go").addEventListener("click",function(){if(stageBusy)return;if(idx<ITEMS.length-1){showBtns(false);var n=idx+1;requestAnimationFrame(function(){show(n);startScene(false)})}});
$id("sg-repeat").addEventListener("click",function(){if(!started||(phase!=="voice"&&phase!=="ready"))return;var sc=cur(),my=++sceneToken;hideHint();phase="voice";
  playSpeech(vURL(sc.v),function(){if(my!==sceneToken||phase!=="voice")return;phase="ready";hintAt=clock+HINT_NEXT})});
$id("sg-music").addEventListener("click",function(){musicOn=!musicOn;this.classList.toggle("sg-off",!musicOn);[runEl,finEl].forEach(function(a){a.muted=!musicOn})});
$id("sg-endbtn").addEventListener("click",restart);
$id("sg-nextbtn").addEventListener("click",function(){try{window.top.location.href=NEXT_GAME_URL}catch(e){window.location.href=NEXT_GAME_URL}});
$id("sg-start-btn").addEventListener("click",function(){$id("sg-start-overlay").style.display="none";unlockAll();started=true;
  starBacks.forEach(function(b){b.classList.remove("sg-earned")});show(0);startScene(true);syncMobileUI()});
function pauseBg(){try{speechEl.pause()}catch(e){}stopMusic()}
document.addEventListener("visibilitychange",function(){if(document.hidden)pauseBg()});window.addEventListener("pagehide",pauseBg);

/* ─── кадр ─── */
function frame(){var n=performance.now()/1000,full=Math.min(.5,n-last);last=n;if(FPS)fpsTick(n);
  if(!started){requestAnimationFrame(frame);return}   /* до старта сцена стоит: не мешаем лоадеру и размытию стартового экрана */
  var steps=Math.max(1,Math.ceil(full/.034)),h=full/steps;
  for(var st=0;st<steps;st++)step(h);cam(cur());requestAnimationFrame(frame)}
function step(dt){clock+=dt;var t=clock,sc=cur(),S=sc.S,e=t-t0;
  S.ambient(t,dt,phase);
  if(phase==="intro"||phase==="voice"||phase==="ready"){S.idle(t,dt,phase==="voice");
    if(phase==="ready"&&t>=hintAt){var c=S.center(),hx=t-hintAt;sc.hint.setAttribute("opacity",1);
      sc.waves.forEach(function(wv,i){var qq=hx-i*1.2;if(qq<0){wv.setAttribute("opacity",0);return}var u=(qq%3.6)/3.6,k=1-Math.pow(1-u,2);
        tr(wv,"translate("+f1(c.x)+" "+f1(c.y)+") scale("+(.5+1.3*k).toFixed(3)+")");wv.setAttribute("opacity",(.8*(1-k)).toFixed(3))})}}
  else if(phase==="act"){var done=S.act(e,dt,first,t);first=false;if(done||e>=S.ACT){phase="fin";t0=t;playMusic(finEl,finURL(sc.v))}}
  else if(phase==="fin"||phase==="post"||phase==="end"){S.fin(e,t,dt);if(phase==="fin"&&e>BTN_AFTER){phase="post";sceneDone()}}}
/* счётчик кадров для проверки: добавить ?fps к адресу страницы */
var FPS=/[?&]fps/.test(location.search)||/[?&]fps/.test((function(){try{return top.location.search}catch(e){return ""}})()),fpsEl=null,fpsN=0,fpsT=0;
function fpsTick(n){if(!fpsEl){fpsEl=document.createElement("div");fpsEl.style.cssText="position:absolute;left:8px;bottom:8px;z-index:300;background:rgba(0,0,0,.6);color:#fff;font:700 14px/1 monospace;padding:6px 8px;border-radius:8px;pointer-events:none";game.appendChild(fpsEl)}
  fpsN++;if(n-fpsT>=1){fpsEl.textContent=Math.round(fpsN/(n-fpsT))+" fps";fpsN=0;fpsT=n}}
show(0);requestAnimationFrame(frame);

/* ─── салют ─── */
var canvas=$id("sg-fireworks"),c2d=canvas.getContext("2d"),fwP=[],fwRun=false,fwRaf=null;
function launchFireworks(){canvas.width=game.offsetWidth;canvas.height=game.offsetHeight;if(fwRaf)cancelAnimationFrame(fwRaf);fwP=[];fwRun=true;spawnBurst();spawnBurst();fwLoop();setTimeout(function(){fwRun=false},1500)}
function stopFireworks(){fwRun=false;cancelAnimationFrame(fwRaf);c2d.clearRect(0,0,canvas.width,canvas.height)}
function spawnBurst(){var x=.2+Math.random()*.6,y=.1+Math.random()*.5,cols=["#6DCC0B","#F97A4F","#FED224","#E4615C","#6B91D6","#FC88A7"],col=cols[Math.floor(Math.random()*cols.length)];
  for(var i=0;i<60;i++){var a=Math.random()*Math.PI*2,s=2+Math.random()*5;fwP.push({x:canvas.width*x,y:canvas.height*y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,alpha:1,color:col,r:2+Math.random()*3})}}
function fwLoop(){c2d.clearRect(0,0,canvas.width,canvas.height);fwP.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.alpha-=.018;c2d.globalAlpha=Math.max(0,p.alpha);c2d.beginPath();c2d.arc(p.x,p.y,p.r,0,Math.PI*2);c2d.fillStyle=p.color;c2d.fill()});
  c2d.globalAlpha=1;fwP=fwP.filter(function(p){return p.alpha>0});if(fwRun&&fwP.length<100)spawnBurst();if(fwP.length>0||fwRun)fwRaf=requestAnimationFrame(fwLoop);else c2d.clearRect(0,0,canvas.width,canvas.height)}

/* ─── полноэкранный режим и поворот телефона (как в «Виммельбухе») ─── */
var fsWrap=$id("sg-fs-wrap"),rotEl=$id("sg-rotate"),canRealFS=!!(fsWrap.requestFullscreen||fsWrap.webkitRequestFullscreen),pseudoFS=false;
function isLandscape(){return window.matchMedia("(orientation: landscape)").matches||window.innerWidth>window.innerHeight}
function isPhone(){return Math.min(window.screen.width,window.screen.height)<480}
function inRealFS(){return !!(document.fullscreenElement||document.webkitFullscreenElement)}
function isFS(){return pseudoFS||inRealFS()}
var FS_E='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2B3A5C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="14,4 20,4 20,10"/><line x1="20" y1="4" x2="13.5" y2="10.5"/><polyline points="10,20 4,20 4,14"/><line x1="4" y1="20" x2="10.5" y2="13.5"/></svg>';
var FS_C='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2B3A5C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="20" y1="4" x2="14" y2="10"/><polyline points="14,4 14,10 20,10"/><line x1="4" y1="20" x2="10" y2="14"/><polyline points="10,20 10,14 4,14"/></svg>';
var fsIcon=null;function setFsIcon(){var w=isFS()?"c":"e";if(w===fsIcon)return;fsIcon=w;$id("sg-fs").innerHTML=w==="c"?FS_C:FS_E}
function refreshFsBtn(){$id("sg-fs").style.display=isPhone()?"none":"flex";setFsIcon()}
function lockLandscape(){try{if(screen.orientation&&screen.orientation.lock){var p=screen.orientation.lock("landscape");if(p&&p.catch)p.catch(function(){})}}catch(e){}}
function unlockOrientation(){try{if(screen.orientation&&screen.orientation.unlock)screen.orientation.unlock()}catch(e){}}
function pseudoOn(){if(!pseudoFS){pseudoFS=true;fsWrap.classList.add("sg-pseudo-fs");document.documentElement.style.overflow="hidden";document.body.style.overflow="hidden"}refreshFsBtn()}
function pseudoOff(){if(pseudoFS){pseudoFS=false;fsWrap.classList.remove("sg-pseudo-fs");document.documentElement.style.overflow="";document.body.style.overflow=""}refreshFsBtn()}
function syncMobileUI(){
  if(!isPhone()){game.classList.remove("sg-portrait");rotEl.classList.remove("sg-show");return}
  if(!loadedReady){game.classList.toggle("sg-portrait",!isLandscape());rotEl.classList.remove("sg-show");return}
  if(isLandscape()){game.classList.remove("sg-portrait");pseudoOn();rotEl.classList.remove("sg-show");if(!started)$id("sg-start-overlay").style.display="flex"}
  else{game.classList.add("sg-portrait");pseudoOff();if(!started)$id("sg-start-overlay").style.display="none";rotEl.classList.add("sg-show")}}
function onLoaded(){$id("sg-loading").style.display="none";loadedReady=true;if(isPhone())syncMobileUI();else $id("sg-start-overlay").style.display="flex"}
function enterFS(){if(canRealFS){var req=fsWrap.requestFullscreen||fsWrap.webkitRequestFullscreen;try{var p=req.call(fsWrap);if(p&&p.then)p.then(lockLandscape).catch(pseudoOn);else lockLandscape()}catch(e){pseudoOn()}}else pseudoOn();refreshFsBtn()}
function exitFS(){if(inRealFS()){var ex=document.exitFullscreen||document.webkitExitFullscreen;try{ex.call(document)}catch(e){}unlockOrientation()}pseudoOff();refreshFsBtn()}
$id("sg-fs").addEventListener("click",function(){if(isFS())exitFS();else enterFS()});
document.addEventListener("fullscreenchange",function(){if(!inRealFS())unlockOrientation();syncMobileUI();refreshFsBtn()});
document.addEventListener("webkitfullscreenchange",function(){if(!inRealFS())unlockOrientation();syncMobileUI();refreshFsBtn()});
window.addEventListener("orientationchange",function(){setTimeout(function(){syncMobileUI();refreshFsBtn()},250)});
var rzT=null;window.addEventListener("resize",function(){if(rzT)clearTimeout(rzT);rzT=setTimeout(function(){syncMobileUI();refreshFsBtn()},200)});
syncMobileUI();refreshFsBtn();
window.__sg={scenes:scenes,get idx(){return idx},get phase(){return phase},go:function(i){show(i);startScene(false)}};

})();
