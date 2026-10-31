
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
  var inner=el("ellipse",{cx:0,cy:36,rx:70,ry:10,fill:"#FC88A8"},H),throat=el("ellipse",{cx:0,cy:30,rx:34,ry:0,fill:"#C47860"},H),tongue=el("ellipse",{cx:0,cy:50,rx:42,ry:14,fill:"#FCD0DC"},H);
  var jaw=el("g",{},H);el("ellipse",{cx:0,cy:46,rx:80,ry:36,fill:"#B890E0"},jaw);[-1,1].forEach(function(s){el("rect",{x:40*s-7,y:-4,width:14,height:20,rx:6,fill:"#FFFFFF"},jaw)});
  var up=el("g",{},H);
  [-1,1].forEach(function(s){el("circle",{cx:62*s,cy:-100,r:15,fill:"#B890E0"},up);el("circle",{cx:62*s,cy:-100,r:8,fill:"#FC88A8",opacity:.7},up)});
  el("ellipse",{cx:0,cy:-48,rx:80,ry:60,fill:"#B890E0"},up);
  [-1,1].forEach(function(s){el("circle",{cx:36*s,cy:-90,r:21,fill:"#B890E0"},up)});
  el("ellipse",{cx:0,cy:8,rx:98,ry:47,fill:"#C8A8EC"},up);
  [-1,1].forEach(function(s){el("ellipse",{cx:28*s,cy:-6,rx:7,ry:10,fill:"#8A68B8"},up);el("circle",{cx:70*s,cy:-22,r:12,fill:"#FC88A8",opacity:.4},up);el("rect",{x:44*s-7,y:44,width:14,height:18,rx:6,fill:"#FFFFFF"},up)});
  var hmouth=el("path",{d:"M-40 40 Q0 52 40 40",stroke:"#8A68B8","stroke-width":4,fill:"none","stroke-linecap":"round"},up);
  var e1=eyeG(up,-36,-94,7.5),e2=eyeG(up,36,-94,7.5),a1=happyArc(up,-36,-93,9),a2=happyArc(up,36,-93,9);
  var front=el("g",{},R);el("rect",{x:-1600,y:690,width:4800,height:900,fill:"url(#gWater)"},front);
  var ring=el("ellipse",{cx:HX,cy:692,rx:240,ry:22,fill:"none",stroke:"#FFFFFF","stroke-width":5,opacity:.7},front);
  var tw={};
  S.init=function(){};
  S.reset=function(){S.cu=0;happy(false,[e1,e2],[a1,a2])};S.cu=0;
  S.cam=function(){return vbAt(V0,V1,sst(S.cu))};
  S.center=function(){return{x:HX,y:HY-20*SC,sc:SC*.7}};
  function pose(o){var k=o.k||0;tr(H,"translate("+HX+" "+f1(HY+(o.bob||0))+") scale("+SC+")");tr(up,"translate(0 "+f1(-40*k)+") rotate("+f1(o.rot||0)+" 0 0)");tr(jaw,"translate(0 "+f1(50*k)+")");
    var cy=50+5*k;inner.setAttribute("cy",f1(cy));inner.setAttribute("ry",f1(8+45*k));throat.setAttribute("cy",f1(cy-4));throat.setAttribute("ry",f1(24*k));tongue.setAttribute("cy",f1(30+50*k));
    hmouth.setAttribute("opacity",(1-Math.min(1,k*4)).toFixed(2));blinkT(e1,-36,-94,o.blink);blinkT(e2,36,-94,o.blink)}
  S.ambient=function(t,dt){tr(rip,"translate("+f1(Math.sin(t*.7)*14)+" 0)");tr(rays,"rotate("+f1(t*6)+")");tr(cl[0].g,"translate("+f1(560+Math.sin(t*.05)*90)+" 330) scale(.8)");
    var r=(t*.5)%1;tr(ring,"translate("+HX+" 692) scale("+(1+r*.25).toFixed(3)+" 1) translate("+(-HX)+" -692)");ring.setAttribute("opacity",(.7*(1-r)).toFixed(2))};
  S.idle=function(t,dt,attn){var o={bob:Math.sin(t*1.4)*4,rot:Math.sin(t*.8)*2,blink:blinkK(tw,t)};var ht=idleTimer(tw,"ear",t,2.5,4);if(ht<.4)o.rot+=Math.sin(ht*30)*2;if(attn)o.rot=0;pose(o)};
  S.act=function(e){S.cu=clamp(e/S.ACT,0,1);var k=seg(e,.25,1.3),o={k:k*(1+.04*Math.sin(Math.max(0,e-1.3)*6)),bob:-8*Math.sin(Math.PI*clamp(e/.4,0,1))+Math.sin(e*1.4)*3,rot:0};
    o.blink=e<.3?0:k>.5?.6:0;pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.cu=1;if(e>.25)happy(true,[e1,e2],[a1,a2]);pose({k:1+.03*Math.sin(e*3),bob:Math.sin(e*1.4)*3,rot:Math.sin(e*2.2)*3*Math.min(1,e/.4)})};
  return S}

/* ---------- ЗАКРОЙ: крокодил на отмели закрывает пасть; общий план сбоку, камера стоит ---------- */
function makeCLOSE(R){
  var S={};S.vb="0 -84 1600 1067";S.ACT=1.8;S.snd="close";
  var rays=daySky(R,380,170),cl=[cloud(R,900,120,.8),cloud(R,1320,80,.6)];
  groundG(R,"g3zFar","M-1600 560 L0 560 C300 536 700 552 1000 544 C1260 536 1450 548 1600 546 L3200 546","#88A848");
  var bk=el("g",{},R);[[180,560,1.6],[360,552,1.2],[1300,548,1.5],[1460,552,1.2]].forEach(function(t){tree(bk,t[0],t[1],t[2])});bush(bk,820,560,1.3);
  el("rect",{x:-1600,y:600,width:4800,height:1600,fill:"url(#gWater)"},R);
  var rip=el("g",{},R);for(var i=0;i<16;i++)el("path",{d:"M"+f1(rr(0,1600))+" "+f1(rr(630,960))+" q22 -7 44 0",stroke:"#FFFFFF","stroke-width":4,fill:"none","stroke-linecap":"round",opacity:.5},rip);
  el("path",{id:"g3zSand",d:"M300 820 C360 760 560 740 800 742 C1060 744 1260 760 1320 820 C1240 846 1000 852 800 852 C560 852 360 846 300 820Z",fill:"#FDE6C4"},R);R.appendChild(grain(null,["g3zSand"]));
  el("path",{d:"M320 828 C400 850 600 860 800 860 C1000 860 1200 852 1300 828",stroke:"#FFFFFF","stroke-width":6,fill:"none","stroke-linecap":"round",opacity:.6},R);
  var reeds=el("g",{},R);for(i=0;i<8;i++){var rx=rr(1190,1290),rh=rr(60,110);el("path",{d:"M"+f1(rx)+" 800 q"+f1(rr(-8,8))+" "+f1(-rh/2)+" "+f1(rr(-6,6))+" "+f1(-rh),stroke:"#4AA010","stroke-width":5,fill:"none","stroke-linecap":"round"},reeds)}
  var CX=760,CY=800,SC=1.7;
  el("ellipse",{cx:CX,cy:CY+4,rx:250*SC,ry:10*SC,fill:"#2C3A5C",opacity:.12},R);
  var K=el("g",{},R),KB=el("g",{},K);
  var tail=el("g",{},KB);el("path",{d:"M-80 -50 C-150 -44 -210 -22 -262 -8 Q-270 -2 -258 2 C-200 0 -150 -2 -80 -6Z",fill:"#4AA010"},tail);
  [[-110,-44],[-140,-36],[-170,-28],[-200,-20],[-228,-12]].forEach(function(b){el("circle",{cx:b[0],cy:b[1],r:6,fill:"#289440"},tail)});
  [[-34,0],[78,0]].forEach(function(l){el("ellipse",{cx:l[0],cy:l[1],rx:17,ry:12,fill:"#289440"},KB)});
  el("ellipse",{cx:0,cy:-30,rx:102,ry:31,fill:"#4AA010"},KB);el("ellipse",{cx:0,cy:-12,rx:88,ry:10,fill:"#CCF0A0"},KB);
  [[-70,-56],[-40,-60],[-10,-61],[20,-60],[50,-56]].forEach(function(b){el("circle",{cx:b[0],cy:b[1],r:7,fill:"#289440"},KB)});
  [[-62,-2],[50,-2]].forEach(function(l){el("ellipse",{cx:l[0],cy:l[1],rx:18,ry:12,fill:"#289440"},KB)});
  var inner=el("path",{d:"",fill:"#FC88A8"},KB);
  var low=el("g",{},KB);el("path",{d:"M90 -32 L246 -26 Q258 -20 246 -14 L94 -10Z",fill:"#4AA010"},low);
  var td="";for(var x=122;x<236;x+=20)td+="M"+x+" -27 q5 -10 10 0Z ";el("path",{d:td,fill:"#FFFFFF"},low);
  var up=el("g",{},KB);
  var tu="";for(x=128;x<240;x+=20)tu+="M"+x+" -35 q5 10 10 0Z ";el("path",{d:tu,fill:"#FFFFFF"},up);
  el("path",{d:"M84 -58 C112 -70 140 -56 248 -46 Q266 -40 250 -33 L96 -30Z",fill:"#4AA010"},up);
  el("circle",{cx:242,cy:-46,r:5,fill:"#289440"},up);el("circle",{cx:130,cy:-64,r:17,fill:"#4AA010"},up);
  var ce=eyeG(up,132,-68,6.5),ch=happyArc(up,132,-67,7.5);el("circle",{cx:160,cy:-44,r:8,fill:"#FC88A8",opacity:.35},up);
  var drops=pool(R,14,function(p){return el("circle",{r:6,fill:"#FFFFFF",opacity:0},p)});
  var tw={};
  S.init=function(){};
  S.reset=function(){happy(false,[ce],[ch])};
  S.center=function(){return{x:CX+70*SC,y:CY-50*SC,sc:SC*.95}};
  function rot(px,py,cx,cy,a){var r=a*Math.PI/180,dx=px-cx,dy=py-cy;return[cx+dx*Math.cos(r)-dy*Math.sin(r),cy+dx*Math.sin(r)+dy*Math.cos(r)]}
  function pose(o){var k=o.k==null?1:o.k,au=-30*k,al=7*k;tr(K,"translate("+CX+" "+f1(CY)+") scale("+SC+")");tr(KB,"translate(0 "+f1(o.bob||0)+") rotate("+f1(o.rot||0)+" 0 -10)");
    tr(up,"rotate("+f1(au)+" 100 -34)");tr(low,"rotate("+f1(al)+" 96 -24)");tr(tail,"rotate("+f1(o.tl||0)+" -80 -28)");
    var a=rot(246,-36,100,-34,au),b=rot(246,-28,96,-24,al);inner.setAttribute("d","M96 -32 L"+f1(a[0])+" "+f1(a[1])+" L"+f1(b[0])+" "+f1(b[1])+"Z");inner.setAttribute("opacity",k>.02?1:0);blinkT(ce,132,-68,o.blink)}
  S.ambient=function(t,dt){runPool(drops,dt,900,1.3);tr(rip,"translate("+f1(Math.sin(t*.7)*16)+" 0)");tr(rays,"rotate("+f1(t*6)+")");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={k:.92+.08*Math.sin(t*1.5),tl:Math.sin(t*1.1)*4,blink:blinkK(tw,t),bob:Math.sin(t*1.5)*1};if(attn)o.k=1;pose(o)};
  S.act=function(e,dt,first){var o={};if(e<.2)o.k=1+.15*sst(e/.2);else if(e<.34)o.k=1.15*(1-sst((e-.2)/.14));else o.k=0;
    if(e>=.34&&!S.hit){S.hit=1;var tip=[CX+250*SC,CY-36*SC];emit(drops,10,tip[0]-60,tip[1]+10,-160,160,-420,-200,1)}if(first)S.hit=0;
    var w=Math.max(0,e-.34);o.bob=e>.34?-6*Math.sin(w*14)*Math.exp(-w*4):0;o.rot=e>.34?-1.5*Math.sin(w*14)*Math.exp(-w*4):0;o.tl=Math.sin(e*6)*6;pose(o);return e>=S.ACT};
  S.fin=function(e,t){if(e>.25)happy(true,[ce],[ch]);pose({k:0,tl:Math.sin(e*5)*12*Math.max(.3,1-e/2),bob:-Math.abs(Math.sin(e*4))*3*Math.max(0,1-e/1.5)})};
  return S}

/* ---------- ВОЗЬМИ: кенгурёнок допрыгивает до мячика, берёт его и кладёт в сумку; средний план сбоку, камера ведёт ---------- */
function makeTAKE(R){
  var S={};S.ACT=3.8;S.snd="take";var VX0=110,VX1=560;S.vb=VX0+" 330 1100 733";
  var rays=daySky(R,1450,560),cl=[cloud(R,500,440,.8),cloud(R,1200,420,.7)];
  groundG(R,"g3tFar","M-1600 720 L0 720 C300 690 700 708 1000 696 C1260 688 1600 704 1800 700 L3200 700","#CCF0A0");
  var bk=el("g",{},R);[[300,720,1.2],[860,710,1],[1380,700,1.3],[1560,704,1]].forEach(function(t){tree(bk,t[0],t[1],t[2])});bush(bk,1180,716,1.2);
  groundG(R,"g3tG","M-1600 900 L0 900 C400 888 900 904 1800 894 L3200 894","#88A848");
  var tex=el("g",{},R);blades(tex,420,-100,1900,904,1080,"#6E9A30",16,2.8);
  var flowers=[];[[260,980,1.5],[640,1030,1.6],[900,960,1.4],[1300,1000,1.6],[1520,960,1.4]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var SC=1.5,KY=900,BX=1120,BR=34;
  var shadow=el("ellipse",{rx:60*SC,ry:9*SC,fill:"#2C3A5C",opacity:.13},R),bsh=el("ellipse",{cx:BX,cy:KY+3,rx:BR,ry:6,fill:"#2C3A5C",opacity:.13},R);
  function mkBall(p,r){var g=el("g",{},p);el("circle",{r:r,fill:"#6B91D6"},g);el("path",{d:"M"+(-r)+" 0 Q0 "+(-r*.5)+" "+r+" 0",stroke:"#FFFFFF","stroke-width":r*.25,fill:"none"},g);el("circle",{cx:-r*.35,cy:-r*.4,r:r*.2,fill:"#FFFFFF",opacity:.7},g);return g}
  var K=el("g",{},R),KB=el("g",{},K);
  var tail=el("g",{},KB);el("path",{d:"M-20 -40 C-60 -30 -100 -14 -128 -4 Q-136 2 -124 4 C-90 2 -50 -6 -14 -14Z",fill:"#A86448"},tail);
  var footF=el("ellipse",{cx:20,cy:-6,rx:34,ry:9,fill:"#985038"},KB);
  var thigh=el("g",{},KB);el("ellipse",{cx:-10,cy:-38,rx:32,ry:36,fill:"#A86448"},thigh);el("ellipse",{cx:22,cy:-7,rx:36,ry:10,fill:"#A86448"},thigh);
  el("ellipse",{cx:8,cy:-86,rx:38,ry:58,fill:"#C47860",transform:"rotate(12 8 -86)"},KB);
  el("ellipse",{cx:24,cy:-78,rx:22,ry:40,fill:"#FDE6C4",transform:"rotate(12 24 -78)"},KB);
  var pBall=mkBall(KB,17);tr(pBall,"translate(22 -64)");pBall.setAttribute("opacity",0);
  el("path",{d:"M4 -62 Q22 -42 42 -64 L40 -44 Q22 -28 6 -44Z",fill:"#FDE6C4"},KB);el("path",{d:"M4 -62 Q22 -42 42 -64",stroke:"#A86448","stroke-width":3.4,fill:"none","stroke-linecap":"round"},KB);
  var head=el("g",{},KB);
  [[12,-190,-14],[30,-194,8]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:9,ry:24,fill:"#C47860",transform:"rotate("+p[2]+" "+p[0]+" "+p[1]+")"},head);el("ellipse",{cx:p[0],cy:p[1]+2,rx:4.5,ry:15,fill:"#FCC4BC",transform:"rotate("+p[2]+" "+p[0]+" "+p[1]+")"},head)});
  el("ellipse",{cx:34,cy:-152,rx:26,ry:22,fill:"#C47860"},head);el("ellipse",{cx:58,cy:-144,rx:19,ry:13,fill:"#C47860"},head);el("ellipse",{cx:60,cy:-140,rx:12,ry:7,fill:"#FDE6C4"},head);
  el("circle",{cx:75,cy:-147,r:5.5,fill:"#2C3A5C"},head);el("circle",{cx:36,cy:-140,r:6,fill:"#FC88A8",opacity:.4},head);
  var ke=eyeG(head,44,-158,5.5),kh=happyArc(head,44,-157,6.5);
  var armB=strokeLeg(KB,"","#985038",11),armF=strokeLeg(KB,"","#A86448",12),hB=el("ellipse",{rx:7,ry:6,fill:"#985038"},KB),hF=el("ellipse",{rx:7.5,ry:6.5,fill:"#A86448"},KB);
  var ball=mkBall(R,BR);
  var tw={};S.kx=420;
  S.init=function(){};
  S.reset=function(){S.kx=420;S.lean=0;pBall.setAttribute("opacity",0);ball.setAttribute("opacity",1);tr(ball,"translate("+BX+" "+(KY-BR)+")");bsh.setAttribute("opacity",.13);happy(false,[ke],[kh])};
  S.cam=function(){return[clamp(S.kx-310,VX0,VX1),330,1100,733]};
  S.center=function(){return{x:S.kx+10*SC,y:KY-90*SC,sc:SC*.75}};
  function L2W(x,y){var a=S.lean*Math.PI/180,dx=x,dy=y+20,rx=dx*Math.cos(a)-dy*Math.sin(a),ry=dx*Math.sin(a)+dy*Math.cos(a)-20;return{x:S.kx+rx*SC,y:S.ky+ry*SC}}
  function W2L(x,y){var a=-S.lean*Math.PI/180,dx=(x-S.kx)/SC,dy=(y-S.ky)/SC+20;return{x:dx*Math.cos(a)-dy*Math.sin(a),y:dx*Math.sin(a)+dy*Math.cos(a)-20}}
  function pose(o){S.ky=KY-(o.h||0);tr(K,"translate("+f1(S.kx)+" "+f1(S.ky)+") scale("+SC+")");tr(KB,"rotate("+f1(S.lean)+" 0 -20)");tr(head,"rotate("+f1(o.hd||0)+" 26 -132)");tr(tail,"rotate("+f1(o.tl||0)+" -20 -30)");
    tr(thigh,"rotate("+f1(o.leg||0)+" -10 -38)");tr(footF,"rotate("+f1(o.leg||0)+" -10 -38)");
    var hf=o.hand||{x:46,y:-96},hb={x:hf.x-6,y:hf.y-4};armF.setAttribute("d","M30 -118 Q"+f1((30+hf.x)/2+8)+" "+f1((-118+hf.y)/2)+" "+f1(hf.x)+" "+f1(hf.y));armB.setAttribute("d","M22 -120 Q"+f1((22+hb.x)/2+6)+" "+f1((-120+hb.y)/2)+" "+f1(hb.x)+" "+f1(hb.y));
    tr(hF,"translate("+f1(hf.x)+" "+f1(hf.y)+")");tr(hB,"translate("+f1(hb.x)+" "+f1(hb.y)+")");blinkT(ke,44,-158,o.blink);
    shadow.setAttribute("cx",f1(S.kx+6*SC));shadow.setAttribute("cy",KY+4);shadow.setAttribute("opacity",(.13*(1-Math.min(.7,(o.h||0)/120))).toFixed(3))}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);tr(rays,"rotate("+f1(t*6)+")");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){S.lean=0;var o={hd:Math.sin(t*1)*5,tl:Math.sin(t*1.4)*3,blink:blinkK(tw,t),hand:{x:46,y:-96+Math.sin(t*2)*2}};var et=idleTimer(tw,"ear",t,2,3.5);if(et<.4)o.hd+=Math.sin(et*25)*4;if(attn)o.hd=-4;pose(o)};
  S.act=function(e){var o={hd:0};
    if(e<1.6){var hp=e/.8,k=Math.floor(hp),u=hp-k;S.kx=lerp(420,1000,(k+sst(u))/2);S.lean=-8*Math.sin(Math.PI*u);o.h=110*Math.sin(Math.PI*u);o.leg=-30*Math.sin(Math.PI*u);o.tl=-14*Math.sin(Math.PI*u);o.hand={x:52,y:-104}}
    else{S.kx=1000;var bw;
      if(e<2.1){var a=sst((e-1.6)/.5);S.lean=40*a;S.ky=KY;var tl=W2L(BX,KY-BR);o.hand={x:lerp(46,tl.x-6,a),y:lerp(-96,tl.y-8,a)};o.hd=20*a;bw=null}
      else if(e<2.6){var b=sst((e-2.1)/.5);S.lean=40*(1-b);o.hand={x:lerp(W2L(BX,KY-BR).x-6,56,b),y:lerp(W2L(BX,KY-BR).y-8,-100,b)};o.hd=20*(1-b);bw=1}
      else if(e<3.0){var c=sst((e-2.6)/.4);S.lean=0;o.hand={x:lerp(56,32,c),y:lerp(-100,-74,c)};o.hd=10*c;bw=1}
      else{S.lean=0;var d=(e-3.0)/.8;o.hand={x:36,y:-70+Math.sin(d*Math.PI*4)*4};o.hd=10*(1-d);bw=0}
      if(e>=2.1&&e<2.95){S.ky=KY;var hw=L2W(o.hand.x+8,o.hand.y+10);tr(ball,"translate("+f1(hw.x)+" "+f1(hw.y)+")");bsh.setAttribute("opacity",0)}
      if(e>=2.95){ball.setAttribute("opacity",0);pBall.setAttribute("opacity",1)}}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.kx=1000;S.lean=0;ball.setAttribute("opacity",0);pBall.setAttribute("opacity",1);if(e>.25)happy(true,[ke],[kh]);pose({hd:-4+Math.sin(e*2.4)*6,h:30*Math.abs(Math.sin(e*4))*Math.max(0,1-e/1.6),tl:Math.sin(e*3)*6,hand:{x:36,y:-72}})};
  return S}

/* ---------- ДАЙ: панда протягивает бамбук прямо к зрителю, его забирают; крупный план спереди, камера стоит ---------- */
function makeGIVE(R){
  var S={};S.vb="400 190 800 533";S.ACT=3.2;S.snd="give";
  bgRect(R,"url(#gDay)");var cl=cloud(R,560,250,.6);
  var grove=el("g",{},R);
  function stalk(g,x,w,col,y0){el("rect",{x:x-w/2,y:y0,width:w,height:1000,rx:w/2,fill:col},g);for(var y=y0+70;y<760;y+=rr(90,120))el("rect",{x:x-w/2-2,y:y,width:w+4,height:7,rx:3,fill:"#4AA010"},g);
    for(var j=0;j<3;j++){var ly=rr(y0+40,600),s=rnd()<.5?-1:1,lg=el("g",{transform:"translate("+f1(x)+" "+f1(ly)+") rotate("+f1(s*rr(20,50))+")"},g);el("path",{d:"M0 0 C"+(s*20)+" -8 "+(s*50)+" -6 "+(s*70)+" 0 C"+(s*50)+" 6 "+(s*20)+" 8 0 0Z",fill:"#4AA010"},lg)}}
  [[430,26,"#B0E060",200],[520,20,"#B0E060",240],[1060,24,"#B0E060",210],[1150,30,"#B0E060",180],[620,16,"#CCF0A0",300],[980,18,"#CCF0A0",280]].forEach(function(s){stalk(grove,s[0],s[1],s[2],s[3])});
  groundG(R,"g3gG","M-1600 660 L0 660 C400 650 900 664 1600 656 L3200 656","#88A848");
  var tex=el("g",{},R);blades(tex,220,300,1300,664,760,"#6E9A30",14,2.6);
  [[480,720,1.3],[1110,740,1.4],[1170,690,1.1]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,null)});
  var PX=800,PY=708,SC=1.9;
  el("ellipse",{cx:PX,cy:PY+4,rx:80*SC,ry:10*SC,fill:"#2C3A5C",opacity:.13},R);
  var P=el("g",{},R),PB=el("g",{},P);
  [-1,1].forEach(function(s){el("ellipse",{cx:44*s,cy:-16,rx:32,ry:22,fill:"#2C3A5C"},PB);el("ellipse",{cx:52*s,cy:-14,rx:12,ry:9,fill:"#8C98B4"},PB)});
  el("ellipse",{cx:0,cy:-72,rx:70,ry:66,fill:"#FFFFFF"},PB);
  el("path",{d:"M-66 -100 C-50 -132 50 -132 66 -100 C50 -112 -50 -112 -66 -100Z",fill:"#2C3A5C"},PB);
  var head=el("g",{},PB);
  [-1,1].forEach(function(s){el("circle",{cx:42*s,cy:-206,r:18,fill:"#2C3A5C"},head)});
  el("circle",{cx:0,cy:-162,r:56,fill:"#FFFFFF"},head);
  [-1,1].forEach(function(s){el("ellipse",{cx:22*s,cy:-168,rx:14,ry:19,fill:"#2C3A5C",transform:"rotate("+(-22*s)+" "+(22*s)+" -168)"},head);el("circle",{cx:38*s,cy:-140,r:9,fill:"#FC88A8",opacity:.4},head)});
  el("ellipse",{cx:0,cy:-148,rx:9,ry:6.5,fill:"#2C3A5C"},head);el("path",{d:"M-10 -134 Q-5 -128 0 -134 Q5 -128 10 -134",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var eyes=[],arcs=[];[-1,1].forEach(function(s){var g=el("g",{},head);el("circle",{cx:23*s,cy:-170,r:6,fill:"#FFFFFF"},g);el("circle",{cx:23*s+1,cy:-170,r:3.6,fill:"#2C3A5C"},g);eyes.push(g);arcs.push(happyArc(head,23*s,-169,7,"#FFFFFF"))});
  var arms=[-1,1].map(function(){return strokeLeg(P,"","#2C3A5C",28)});
  var bam=el("g",{},P);el("rect",{x:-9,y:-90,width:18,height:180,rx:9,fill:"#70CC10"},bam);[-50,-10,30,70].forEach(function(y){el("rect",{x:-11,y:y,width:22,height:6,rx:3,fill:"#4AA010"},bam)});
  [[-90,-30],[-90,30],[-70,-60]].forEach(function(l){var g=el("g",{transform:"translate(0 "+l[0]+") rotate("+l[1]+")"},bam);el("path",{d:"M0 0 C10 -10 30 -12 46 -4 C30 4 10 6 0 0Z",fill:"#4AA010"},g)});
  var hands=[-1,1].map(function(){return el("ellipse",{rx:15,ry:13,fill:"#2C3A5C"},P)});
  var tw={};S.b={x:0,y:-84,r:28,s:1,on:1};
  S.init=function(){};
  S.reset=function(){S.b={x:0,y:-84,r:28,s:1,on:1};bam.setAttribute("opacity",1);happy(false,eyes,arcs)};
  S.center=function(){return{x:PX,y:PY-100*SC,sc:SC*.8}};
  function bpt(v){var b=S.b,a=b.r*Math.PI/180;return{x:b.x-Math.sin(a)*v*b.s,y:b.y+Math.cos(a)*v*b.s}}
  function pose(o){var b=S.b;tr(P,"translate("+PX+" "+f1(PY)+") scale("+SC+")");tr(PB,"rotate("+f1(o.rot||0)+" 0 0)");tr(head,"rotate("+f1(o.hd||0)+" 0 -110)");
    tr(bam,"translate("+f1(b.x)+" "+f1(b.y)+") rotate("+f1(b.r)+") scale("+b.s.toFixed(3)+")");
    var hp=o.hp||[bpt(30),bpt(-26)],hs=o.hs||[b.s,b.s];
    [-1,1].forEach(function(s,i){var h=hp[i],sx=54*s,sy=-110;arms[i].setAttribute("d","M"+sx+" "+sy+" Q"+f1((sx+h.x)/2+10*s)+" "+f1((sy+h.y)/2)+" "+f1(h.x)+" "+f1(h.y));arms[i].setAttribute("stroke-width",f1(28*Math.sqrt(hs[i])));
      tr(hands[i],"translate("+f1(h.x)+" "+f1(h.y)+") scale("+hs[i].toFixed(3)+")")});
    eyes.forEach(function(g,i){blinkT(g,i?23:-23,-170,o.blink)})}
  var REST=[{x:-34,y:-50},{x:34,y:-50}];
  S.ambient=function(t,dt){tr(cl.g,"translate("+f1(560+Math.sin(t*.05)*80)+" 250) scale(.6)");tr(grove,"translate("+f1(Math.sin(t*.6)*3)+" 0)")};
  S.idle=function(t,dt,attn){S.b={x:0,y:-84,r:28+Math.sin(t*1.2)*3,s:1,on:1};var o={hd:Math.sin(t*.9)*5,blink:blinkK(tw,t),rot:Math.sin(t*.7)*1.5};if(attn)o.hd=0;pose(o)};
  S.act=function(e){var o={},b=S.b;
    if(e<1.0){var u=sst(e/1.0);b.x=0;b.y=lerp(-84,-94,u);b.r=lerp(28,90,u);b.s=lerp(1,1.45,u);o.hd=-4*u}
    else if(e<1.45){b.x=Math.sin((e-1)*18)*2;b.y=-94;b.r=90;b.s=1.45}
    else if(e<1.85){var v=sst((e-1.45)/.4);b.x=0;b.y=lerp(-94,300,v*v);b.r=90;b.s=lerp(1.45,2.8,v);o.hp=[{x:-44,y:-94+10*v},{x:44,y:-94+10*v}];o.hs=[lerp(1.45,1.3,v),lerp(1.45,1.3,v)];if(v>.95)bam.setAttribute("opacity",0);o.hd=6*v}
    else{bam.setAttribute("opacity",0);var w=sst((e-1.85)/.6);o.hp=[{x:lerp(-44,REST[0].x,w),y:lerp(-84,REST[0].y,w)},{x:lerp(44,REST[1].x,w),y:lerp(-84,REST[1].y,w)}];o.hs=[lerp(1.3,1,w),lerp(1.3,1,w)];o.hd=6*(1-w)}
    if(e<1.45){o.hp=[bpt(30),bpt(-26)]}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t){bam.setAttribute("opacity",0);if(e>.25)happy(true,eyes,arcs);var wv=Math.max(0,1-e/2);
    pose({hp:[REST[0],{x:58+8*Math.sin(e*9)*wv,y:lerp(-50,-150,Math.min(1,e/.4))*wv+(-50)*(1-wv)}],hs:[1,1],hd:Math.sin(e*2.4)*6*Math.min(1,e/.4),rot:Math.sin(e*2.4)*2})};
  return S}
