
/* ---------- ЗАЛЕЗАЙ: рыжий котёнок залезает на дерево; камера ведёт вверх ---------- */
function makeCLIMB(R){
  var S={};S.ACT=4.0;S.snd="climb";var V0=[300,410,1000,667];S.vb=V0.join(" ");
  bgRect(R,"url(#gDay)");var sunG=el("g",{transform:"translate(470 230)"},R);el("circle",{r:110,fill:"url(#gMoon)"},sunG);el("circle",{r:52,fill:"#FFD400"},sunG);
  var cl=[cloud(R,1120,120,.9),cloud(R,560,-160,.8),cloud(R,1180,-330,.7)];
  groundG(R,"g3kFar","M-1600 900 L0 900 C300 872 700 890 1000 880 C1260 872 1450 886 1600 882 L3200 882","#CCF0A0");
  var bk=el("g",{},R);[[400,900,1.4],[1250,890,1.5]].forEach(function(t){tree(bk,t[0],t[1],t[2])});bush(bk,1080,900,1.1);
  var T=el("g",{},R);
  el("path",{d:"M740 1012 C752 700 756 300 760 -300 L880 -300 C884 300 888 700 900 1012Z",fill:"#985038"},T);
  el("path",{d:"M720 1018 Q744 990 752 960 M920 1018 Q896 990 890 960",stroke:"#985038","stroke-width":22,fill:"none","stroke-linecap":"round"},T);
  for(var b=0;b<24;b++){var bx=rr(772,868),by=rr(-200,960);el("path",{d:"M"+f1(bx)+" "+f1(by)+" q"+f1(rr(-5,5))+" 30 "+f1(rr(-3,3))+" 60",stroke:rnd()<.5?"#7A3E2C":"#A86448","stroke-width":4,fill:"none","stroke-linecap":"round",opacity:.55},T)}
  el("path",{d:"M870 -150 C980 -170 1120 -190 1300 -200 L1300 -168 C1120 -160 980 -140 872 -118Z",fill:"#985038"},T);
  var crown=el("g",{},R);[[820,-360,160],[640,-300,120],[1000,-320,130],[1200,-300,110],[1320,-240,80],[700,-420,110],[960,-450,120],[560,-240,80]].forEach(function(c,k){leafBall(crown,c[0],c[1],c[2],k)});
  for(var i=0;i<10;i++)el("circle",{cx:f1(rr(560,1300)),cy:f1(rr(-480,-260)),r:f1(rr(16,32)),fill:"#70CC10",opacity:.45},crown);
  groundG(R,"g3kG","M-1600 1000 L0 1000 C400 984 900 1006 1600 994 L3200 994","#88A848");
  var tex=el("g",{},R);blades(tex,260,-100,1700,1004,1120,"#6E9A30",16,2.8);
  var flowers=[];[[420,1060,1.5],[580,1040,1.3],[1040,1050,1.5],[1220,1070,1.6]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var SC=1.4,shadow=el("ellipse",{rx:60*SC,ry:9*SC,fill:"#2C3A5C",opacity:.13},R);
  var K=el("g",{},R),KB=el("g",{},K);
  var tailP=el("path",{d:"",stroke:"#F0A858","stroke-width":13,fill:"none","stroke-linecap":"round"},KB);
  var legF2=el("g",{},KB);strokeLeg(legF2,"M24 -40 L26 -4","#F0A858",16);
  var legH2=el("g",{},KB);el("ellipse",{cx:-30,cy:-16,rx:16,ry:18,fill:"#F0A858"},legH2);el("ellipse",{cx:-24,cy:-2,rx:13,ry:6,fill:"#F0A858"},legH2);
  el("ellipse",{cx:0,cy:-42,rx:50,ry:27,fill:"#FFC880"},KB);el("ellipse",{cx:6,cy:-26,rx:34,ry:10,fill:"#FDE6C4"},KB);
  var legH=el("g",{},KB);el("ellipse",{cx:-22,cy:-18,rx:17,ry:19,fill:"#F0A858"},legH);el("ellipse",{cx:-16,cy:-3,rx:13,ry:6,fill:"#F0A858"},legH);
  var legF=el("g",{},KB);strokeLeg(legF,"M34 -40 L36 -4","#F0A858",17);el("ellipse",{cx:38,cy:-3,rx:11,ry:6,fill:"#FDE6C4"},legF);
  var head=el("g",{},KB);
  el("path",{d:"M38 -104 L40 -140 L60 -114Z M66 -114 L84 -138 L86 -104Z",fill:"#FFC880",stroke:"#FFC880","stroke-width":6,"stroke-linejoin":"round"},head);el("path",{d:"M44 -110 L45 -128 L55 -116Z M71 -114 L81 -129 L81 -108Z",fill:"#FCC4BC"},head);
  el("circle",{cx:62,cy:-86,r:31,fill:"#FFC880"},head);el("ellipse",{cx:78,cy:-74,rx:15,ry:10,fill:"#FDE6C4"},head);el("path",{d:"M86 -82 l7 -1 l-3 6Z",fill:"#FC88A8",stroke:"#FC88A8","stroke-width":3,"stroke-linejoin":"round"},head);
  el("path",{d:"M84 -76 l24 -6 M84 -72 l24 2",stroke:"#C47860","stroke-width":1.6},head);el("circle",{cx:62,cy:-72,r:6,fill:"#FC88A8",opacity:.45},head);
  var ke=eyeG(head,72,-92,6),kh=happyArc(head,72,-91,7);
  // поза: (x,y) — центр тела, r — поворот (−80 на стволе)
  var tw={};S.p={x:690,y:958,r:0};
  S.init=function(){};
  S.reset=function(){S.p={x:690,y:958,r:0};happy(false,[ke],[kh])};
  S.cam=function(){var y=clamp(S.p.y-470,-470,410);return[lerp(300,450,clamp((410-y)/880,0,1)),y,1000,667]};
  S.center=function(){return{x:S.p.x+10,y:S.p.y-20,sc:SC*.8}};
  function pose(o){var p=S.p;tr(K,"translate("+f1(p.x)+" "+f1(p.y)+") rotate("+f1(p.r)+") scale("+SC+") translate(0 42)");
    tr(legF,"rotate("+f1(o.f||0)+" 34 -40)");tr(legF2,"rotate("+f1(-(o.f||0))+" 24 -40)");tr(legH,"rotate("+f1(o.h||0)+" -22 -30)");tr(legH2,"rotate("+f1(-(o.h||0))+" -30 -30)");
    tr(head,"rotate("+f1(o.hd||0)+" 40 -60)");var sw=o.tsw||0;tailP.setAttribute("d","M-46 -48 C-80 -60 "+f1(-90+sw)+" -100 "+f1(-70+sw*1.3)+" -130");blinkT(ke,72,-92,o.blink);
    var gy=p.r<-40?null:(p.y>600?994:-160);if(gy===null)shadow.setAttribute("opacity",0);else{shadow.setAttribute("opacity",.13);shadow.setAttribute("cx",f1(p.x));shadow.setAttribute("cy",f1(gy+(p.y>600?6:2)))}}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*80)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={hd:-20+Math.sin(t*1.2)*6,tsw:Math.sin(t*2)*14,blink:blinkK(tw,t)};var wt=idleTimer(tw,"w",t,2.5,4);if(wt<.6)o.tsw=Math.sin(wt*30)*18;if(attn)o.hd=-8;pose(o)};
  S.act=function(e){var o={hd:-10},p=S.p;
    if(e<.45){var u=e/.45,j=sst(u);p.x=lerp(690,722,j);p.y=lerp(958,880,j)-40*Math.sin(Math.PI*u);p.r=lerp(0,-80,j);o.hd=40*j;o.f=-40*Math.sin(Math.PI*u);o.h=30*Math.sin(Math.PI*u)}
    else if(e<3.0){var c=(e-.45)/2.55,stp=c*7,k=Math.floor(stp),f=stp-k,pull=sst(Math.min(1,f*1.6));p.x=722;p.y=lerp(880,-120,(k+pull)/7);p.r=-80;
      o.f=k%2?lerp(30,-30,f):lerp(-30,30,f);o.h=k%2?lerp(-24,24,f):lerp(24,-24,f);o.tsw=Math.sin(e*8)*16;o.hd=40+Math.sin(e*6)*4}
    else if(e<3.6){var v=(e-3.0)/.6,w=sst(v);p.x=lerp(722,960,w);p.y=lerp(-120,-218,w)-60*Math.sin(Math.PI*v);p.r=lerp(-80,0,w);o.hd=40*(1-w);o.f=-30*Math.sin(Math.PI*v);o.h=20*Math.sin(Math.PI*v);o.tsw=-10}
    else{p.x=960;p.y=-218;p.r=0;var s=(e-3.6)/.4;o.hd=-6*Math.sin(Math.PI*s);o.tsw=Math.sin(e*6)*10}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.p={x:960,y:-218,r:0};if(e>.25)happy(true,[ke],[kh]);pose({hd:-4+Math.sin(e*2.4)*6,tsw:Math.sin(e*3)*14})};
  return S}

/* ---------- СЛЕЗАЙ: коала слезает с эвкалипта; общий план сбоку, камера стоит ---------- */
function makeDOWN(R){
  var S={};S.vb="0 -84 1600 1067";S.ACT=4.4;S.snd="down";
  var rays=daySky(R,1220,180),cl=[cloud(R,420,120,.9),cloud(R,900,70,.6)];
  groundG(R,"g3oFar","M-1600 760 L0 760 C300 730 700 750 1000 738 C1260 728 1450 744 1600 740 L3200 740","#CCF0A0");
  var bk=el("g",{},R);[[220,760,1.3],[1420,746,1.4],[1300,752,1]].forEach(function(t){tree(bk,t[0],t[1],t[2])});
  var T=el("g",{},R);
  el("path",{d:"M840 900 C850 700 856 400 862 60 L948 60 C954 400 960 700 980 900Z",fill:"#D0A090"},T);
  el("path",{d:"M820 904 Q840 886 848 862 M1000 904 Q980 886 974 862",stroke:"#D0A090","stroke-width":20,fill:"none","stroke-linecap":"round"},T);
  [[872,700,30,90],[930,420,22,70],[880,260,18,60]].forEach(function(s){el("ellipse",{cx:s[0],cy:s[1],rx:s[2]*.5,ry:s[3]*.5,fill:"#BABABA",opacity:.5},T)});
  el("path",{d:"M946 160 C1040 120 1120 90 1200 80",stroke:"#D0A090","stroke-width":20,fill:"none","stroke-linecap":"round"},T);
  var crown=el("g",{},R);[[900,20,150],[760,60,110],[1060,40,120],[1200,70,80],[980,-60,110],[820,-50,100],[660,110,70]].forEach(function(c,k){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:["#4AA010","#70CC10","#2E9E46"][k%3]},crown)});
  for(var i=0;i<8;i++)el("ellipse",{cx:f1(rr(640,1240)),cy:f1(rr(-80,160)),rx:f1(rr(14,22)),ry:f1(rr(6,9)),fill:"#B0E060",opacity:.6,transform:"rotate("+f1(rr(-40,40))+")"},crown);
  groundG(R,"g3oG","M-1600 896 L0 896 C400 880 900 902 1600 890 L3200 890","#88A848");
  var tex=el("g",{},R);blades(tex,320,-100,1700,900,1000,"#6E9A30",16,2.8);
  var flowers=[];[[420,950,1.4],[600,930,1.3],[1140,940,1.4],[1340,960,1.5]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var SC=1.8,shadow=el("ellipse",{rx:52*SC,ry:9*SC,fill:"#2C3A5C",opacity:.13},R);
  var K=el("g",{},R);
  var legB=strokeLeg(K,"","#8C98B4",22),armB=strokeLeg(K,"","#8C98B4",21);
  el("ellipse",{cx:0,cy:-62,rx:46,ry:62,fill:"#A8B0C8"},K);el("ellipse",{cx:14,cy:-56,rx:24,ry:40,fill:"#EAF1FF"},K);
  var legF=strokeLeg(K,"","#8C98B4",23),armF=strokeLeg(K,"","#8C98B4",22);
  var hands=[0,1,2,3].map(function(){return el("ellipse",{rx:10,ry:8,fill:"#7A869E"},K)});
  var head=el("g",{},K);
  [[-24,-176],[30,-178]].forEach(function(p){el("circle",{cx:p[0],cy:p[1],r:24,fill:"#A8B0C8"},head);el("circle",{cx:p[0],cy:p[1]+2,r:13,fill:"#EAF1FF"},head)});
  el("circle",{cx:4,cy:-142,r:42,fill:"#A8B0C8"},head);
  el("ellipse",{cx:30,cy:-130,rx:13,ry:17,fill:"#2C3A5C"},head);el("circle",{cx:-12,cy:-124,r:8,fill:"#FC88A8",opacity:.45},head);
  var ce1=eyeG(head,-6,-152,5.5),ce2=eyeG(head,20,-154,5.5),ch1=happyArc(head,-6,-151,6.5),ch2=happyArc(head,20,-153,6.5);
  var TX=846,X0=TX-50*SC,Y0=520,Y1=896,tw={};S.p={x:X0,y:Y0,wrap:1};
  S.init=function(){};
  S.reset=function(){S.p={x:X0,y:Y0,wrap:1};happy(false,[ce1,ce2],[ch1,ch2])};
  S.center=function(){return{x:S.p.x,y:S.p.y-80*SC,sc:SC*.85}};
  // a/b — смещение рук и ног по высоте (локально); wrap=1 — обнимает ствол
  function pose(o){var p=S.p,w=p.wrap;tr(K,"translate("+f1(p.x)+" "+f1(p.y)+") scale("+SC+")");tr(head,"rotate("+f1(o.hd||0)+" 0 -100)");
    var a=o.a||0,b=o.b||0;
    function lim(e,sx,sy,hx,hy,hi){e.setAttribute("d","M"+sx+" "+sy+" Q"+f1((sx+hx)/2)+" "+f1((sy+hy)/2-6)+" "+f1(hx)+" "+f1(hy));tr(hands[hi],"translate("+f1(hx)+" "+f1(hy)+")")}
    lim(armF,16,-96,lerp(30,56,w),lerp(-40,-112+a,w),0);lim(armB,6,-100,lerp(-10,50,w),lerp(-40,-122-a,w),1);
    lim(legF,12,-22,lerp(36,52,w),lerp(-2,-16+b,w),2);lim(legB,0,-24,lerp(-20,46,w),lerp(-2,-24-b,w),3);
    blinkT(ce1,-6,-152,o.blink);blinkT(ce2,20,-154,o.blink);
    var on=p.y>Y1-30;shadow.setAttribute("opacity",on?.13:0);shadow.setAttribute("cx",f1(p.x));shadow.setAttribute("cy",f1(Y1+4))}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);tr(rays,"rotate("+f1(t*6)+")");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={hd:-8+Math.sin(t*.8)*6,blink:blinkK(tw,t),a:Math.sin(t*1.3)*2};if(attn)o.hd=-14;pose(o)};
  S.act=function(e){var p=S.p,o={hd:10};
    if(e<3.4){var c=e/3.4*6,k=Math.floor(c),f=c-k,slide=sst(clamp((f-.35)/.65,0,1));p.y=lerp(Y0,Y1,(k+slide)/6);p.x=X0;p.wrap=1;
      var reach=Math.sin(Math.PI*Math.min(1,f/.5))*24;if(k%2){o.a=-reach;o.b=reach}else{o.a=reach;o.b=-reach}o.hd=12+Math.sin(e*5)*4}
    else{var v=sst((e-3.4)/.6);p.y=Y1;p.wrap=1-v;p.x=lerp(X0,X0-60,v);o.hd=lerp(12,-4,v)}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.p={x:X0-60,y:Y1,wrap:0};if(e>.25)happy(true,[ce1,ce2],[ch1,ch2]);pose({hd:-4+Math.sin(e*2.4)*7})};
  return S}

/* ---------- ПРЯЧЬСЯ: черепашка прячется в панцирь; крупный план сбоку, камера наезжает ---------- */
function makeHIDE(R){
  var S={},V0=[300,250,1000,667],V1=[470,380,720,480];S.vb=V0.join(" ");S.ACT=2.4;S.snd="hide";
  var rays=daySky(R,660,330),cl=[cloud(R,520,320,.8)];
  groundG(R,"g3hFar","M-1600 600 L0 600 C300 576 700 592 1000 584 C1260 576 1450 588 1600 586 L3200 586","#CCF0A0");
  var bk=el("g",{},R);bush(bk,420,612,1.6);bush(bk,620,606,1.1);bush(bk,1220,604,1.5);tree(bk,1340,600,1.4);
  groundG(R,"g3hG","M-1600 700 L0 700 C400 684 900 700 1600 690 L3200 690","#88A848");
  var tex=el("g",{},R);blades(tex,320,-100,1700,704,1000,"#6E9A30",16,2.8);
  var flowers=[];[[400,820,1.6],[560,900,1.7],[1150,860,1.6],[1240,760,1.3],[700,740,1.1]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  el("ellipse",{cx:1040,cy:830,rx:56,ry:26,fill:"#BABABA"},R);el("ellipse",{cx:1026,cy:818,rx:22,ry:9,fill:"#D3E2FF",opacity:.6},R);
  var TX=820,TY=800,SC=2.0;
  var shadow=el("ellipse",{cx:TX,cy:TY+3,rx:92*SC,ry:11*SC,fill:"#2C3A5C",opacity:.13},R);
  var K=el("g",{},R),KB=el("g",{},K);
  var tailE=el("path",{d:"M-72 -16 Q-96 -10 -82 -4Z",fill:"#96CC48",stroke:"#96CC48","stroke-width":6,"stroke-linejoin":"round"},KB);
  var legs=[[-52,-8],[-30,-4],[30,-4],[54,-8]].map(function(l){var g=el("g",{},KB);el("ellipse",{cx:l[0],cy:l[1],rx:15,ry:18,fill:"#96CC48"},g);return g});
  var head=el("g",{},KB);el("ellipse",{cx:64,cy:-34,rx:24,ry:15,fill:"#B0E060"},head);el("circle",{cx:94,cy:-48,r:24,fill:"#B0E060"},head);
  el("circle",{cx:102,cy:-38,r:6,fill:"#FC88A8",opacity:.4},head);var tm=el("path",{d:"M104 -40 q6 4 12 -2",stroke:"#2C3A5C","stroke-width":2.6,fill:"none","stroke-linecap":"round"},head);
  var te=eyeG(head,102,-54,5.5),th=happyArc(head,102,-53,6.5);
  var shell=el("g",{},KB);
  el("path",{d:"M-84 -14 C-84 -104 84 -104 84 -14Z",fill:"#4AA010"},shell);
  [[-40,-48,22],[0,-62,24],[40,-48,22],[-20,-28,16],[22,-28,16]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#70CC10",opacity:.6},shell)});
  el("ellipse",{cx:0,cy:-14,rx:90,ry:11,fill:"#289440"},shell);
  var tw={},u=0;
  S.init=function(){};
  S.reset=function(){S.cu=0;happy(false,[te],[th])};S.cu=0;
  S.cam=function(){return vbAt(V0,V1,sst(S.cu))};
  S.center=function(){return{x:TX+10*SC,y:TY-50*SC,sc:SC*.6}};
  function pose(o){var h=o.hide||0,lg=o.legs==null?h:o.legs;tr(K,"translate("+TX+" "+f1(TY)+") scale("+SC+")");tr(KB,"translate(0 "+f1((o.drop||0)*6)+") rotate("+f1(o.rot||0)+" 0 -10)");
    tr(head,"translate("+f1(-72*h)+" "+f1(8*h)+") rotate("+f1(o.hd||0)+" 60 -34)");
    legs.forEach(function(g,i){var dx=i<2?16:-16;tr(g,"translate("+f1(dx*lg)+" "+f1(-20*lg)+")")});tr(tailE,"translate("+f1(14*lg)+" 0)");blinkT(te,102,-54,o.blink)}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);tr(rays,"rotate("+f1(t*6)+")");tr(cl[0].g,"translate("+f1(1100+Math.sin(t*.05)*90)+" 320) scale(.8)")};
  S.idle=function(t,dt,attn){var o={hd:Math.sin(t*1.1)*5,blink:blinkK(tw,t)};if(attn)o.hd=-6;pose(o)};
  S.act=function(e){S.cu=clamp(e/S.ACT,0,1);var o={};
    var h=seg(e,.1,.45);o.hide=h;o.legs=seg(e,.15,.5);o.hd=-14*Math.sin(Math.PI*clamp(e/.2,0,1));o.blink=h>.3?1:0;
    o.drop=seg(e,.45,.6);var wb=Math.max(0,e-.6);o.rot=Math.sin(wb*14)*7*Math.exp(-wb*2.2)*(e>.6?1:0);pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.cu=1;var pk=seg(e,.1,.6);if(e>.25)happy(true,[te],[th]);pose({hide:1-.7*pk,legs:1,drop:1,hd:-6+Math.sin(e*2.6)*5*pk})};
  return S}

/* ---------- ВЫХОДИ: мышка выходит из норки; средний план сбоку, камера ведёт вправо ---------- */
function makeOUT(R){
  var S={};S.ACT=3.6;S.snd="out";var CX0=170,CX1=640;S.vb=CX0+" 440 900 600";
  var rays=daySky(R,1180,560),cl=[cloud(R,520,560,.7),cloud(R,1300,520,.6)];
  groundG(R,"g3uFar","M-1600 790 L0 790 C300 770 700 784 1000 776 C1260 770 1450 780 1600 778 L3200 778","#CCF0A0");
  var bk=el("g",{},R);[[960,790,1],[1400,782,1.2]].forEach(function(t){tree(bk,t[0],t[1],t[2])});bush(bk,1200,790,1);
  groundG(R,"g3uG","M-1600 900 L0 900 C400 890 900 904 1600 896 L3200 896","#88A848");
  el("path",{id:"g3uHill",d:"M-1600 520 L0 520 C200 520 380 560 480 640 C560 700 620 800 660 906 L-1600 1300Z",fill:"#88A848"},R);R.appendChild(grain(null,["g3uHill"]));
  var tex=el("g",{},R);blades(tex,360,-100,1800,904,1060,"#6E9A30",16,2.8);blades(tex,80,-100,520,560,880,"#6E9A30",16,2.8);
  var flowers=[];[[300,640,1.3],[200,760,1.4],[780,960,1.5],[1080,930,1.4],[1300,1000,1.6],[1460,940,1.4]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var berry=el("g",{transform:"translate(1250 902)"},R);el("path",{d:"M0 -60 q-6 30 0 54",stroke:"#4AA010","stroke-width":5,fill:"none","stroke-linecap":"round"},berry);el("path",{d:"M-22 -30 C-26 -6 -8 10 0 12 C8 10 26 -6 22 -30 C12 -40 -12 -40 -22 -30Z",fill:"#DD4B4B"},berry);
  [[-10,-20],[8,-18],[0,-4],[-12,-6],[12,-4]].forEach(function(s){el("ellipse",{cx:s[0],cy:s[1],rx:2,ry:3,fill:"#FFF8A8"},berry)});el("path",{d:"M-14 -34 Q0 -48 14 -34 Q0 -28 -14 -34Z",fill:"#4AA010"},berry);
  el("ellipse",{cx:560,cy:858,rx:66,ry:52,fill:"#7A3E2C"},R);el("ellipse",{cx:560,cy:866,rx:50,ry:38,fill:"#5A2C20"},R);
  el("path",{d:"M490 846 C500 790 620 790 630 846",stroke:"#A86448","stroke-width":12,fill:"none","stroke-linecap":"round"},R);
  var cp=el("clipPath",{id:"g3holeClip"},DEFS);el("ellipse",{cx:560,cy:858,rx:64,ry:50},cp);el("rect",{x:624,y:0,width:3000,height:1200},cp);
  var wrap=el("g",{"clip-path":"url(#g3holeClip)"},R);
  var SC=1.5,shadow=el("ellipse",{rx:48*SC,ry:8*SC,fill:"#2C3A5C",opacity:0},R);
  var M=el("g",{},wrap),MB=el("g",{},M);
  var tailP=el("path",{d:"",stroke:"#C08A78","stroke-width":5,fill:"none","stroke-linecap":"round"},MB);
  var feet=[[-20,-4],[-4,-4],[14,-4],[28,-4]].map(function(p){return el("ellipse",{cx:p[0],cy:p[1],rx:9,ry:5,fill:"#C08A78"},MB)});
  el("ellipse",{cx:0,cy:-26,rx:38,ry:24,fill:"#D0A090"},MB);el("ellipse",{cx:6,cy:-14,rx:24,ry:8,fill:"#FDE6C4"},MB);
  var head=el("g",{},MB);
  el("circle",{cx:22,cy:-56,r:18,fill:"#D0A090"},head);el("circle",{cx:22,cy:-56,r:11,fill:"#FCC4BC"},head);
  el("path",{d:"M12 -40 C20 -58 50 -50 62 -36 C52 -24 24 -20 12 -30Z",fill:"#D0A090"},head);
  el("circle",{cx:62,cy:-36,r:5,fill:"#FC88A8"},head);el("path",{d:"M58 -36 l20 -6 M58 -33 l20 2",stroke:"#985038","stroke-width":1.4},head);
  var me=eyeG(head,42,-44,4.5),mh=happyArc(head,42,-43,5.5);
  var tw={};S.mx=440;
  S.init=function(){};
  S.reset=function(){S.mx=440;happy(false,[me],[mh])};
  S.cam=function(){var x=clamp(S.mx-430,CX0,CX1);return[x,440,900,600]};
  S.center=function(){return{x:560,y:850,sc:1.1}};
  function pose(o){var y=900;tr(M,"translate("+f1(S.mx)+" "+y+") scale("+SC+")");tr(MB,"translate(0 "+f1(o.bob||0)+")");tr(head,"rotate("+f1(o.hd||0)+" 14 -36)");
    var st=o.st||0;feet.forEach(function(f,i){tr(f,"translate("+f1(Math.sin(st+(i%2)*Math.PI)*6)+" "+f1(-Math.max(0,Math.sin(st+(i%2)*Math.PI))*4)+")")});
    var sw=o.tsw||0;tailP.setAttribute("d","M-36 -20 C-70 -14 "+f1(-90+sw)+" -40 "+f1(-110+sw*1.4)+" -30");blinkT(me,42,-44,o.blink);
    var out=clamp((S.mx-560)/80,0,1);shadow.setAttribute("opacity",(.13*out).toFixed(3));shadow.setAttribute("cx",f1(S.mx+4*SC));shadow.setAttribute("cy",903)}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);tr(rays,"rotate("+f1(t*6)+")");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={hd:Math.sin(t*7)*2+Math.sin(t*1.1)*4,blink:blinkK(tw,t)};S.mx=440+Math.sin(t*.7)*6;if(attn)o.hd=-4;pose(o)};
  S.act=function(e){var o={};
    if(e<.6){var u=sst(e/.6);S.mx=lerp(440,500,u);o.hd=Math.sin(e*30)*3}
    else if(e<.9){S.mx=500;o.hd=-10*Math.sin(Math.PI*(e-.6)/.3)}
    else if(e<3.2){var w=(e-.9)/2.3;S.mx=lerp(500,1100,easeArrive(w,.6));o.st=(e-.9)*16;o.bob=-Math.abs(Math.sin((e-.9)*16))*3;o.tsw=Math.sin(e*7)*10}
    else{S.mx=1100;var s=(e-3.2)/.4;o.hd=-8*Math.sin(Math.PI*s)}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.mx=1100;if(e>.25)happy(true,[me],[mh]);pose({hd:-6+Math.sin(e*2.6)*6,bob:-Math.abs(Math.sin(e*5))*5*Math.max(0,1-e/1.6),tsw:Math.sin(e*4)*12})};
  return S}
