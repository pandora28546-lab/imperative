
/* ---------- ЗАЛЕЗАЙ: рыжий котёнок залезает на дерево; камера ведёт вверх ---------- */
function makeCLIMB(R){
  var S={};S.ACT=4.0;S.snd="climb";var V0=[300,410,1000,667];S.vb=V0.join(" ");
  bgRect(R,"url(#gDay)");var sunG=el("g",{transform:"translate(1330 330)"},R);el("circle",{r:110,fill:"url(#gMoon)"},sunG);el("circle",{r:52,fill:"#FFD400"},sunG);
  var cl=[cloud(R,1120,120,.9),cloud(R,560,-160,.8),cloud(R,1180,-330,.7),cloud(R,380,520,.7),cloud(R,1260,600,.55)];
  var balloon=el("g",{transform:"translate(1240 -40)"},R);el("path",{d:"M0 -60 C40 -60 56 -24 46 6 C38 30 14 46 8 58 L-8 58 C-14 46 -38 30 -46 6 C-56 -24 -40 -60 0 -60Z",fill:"#F97A4F"},balloon);
  el("path",{d:"M0 -60 C16 -40 18 20 8 58 L-8 58 C-18 20 -16 -40 0 -60Z",fill:"#FFD400"},balloon);el("path",{d:"M-8 58 L-12 78 M8 58 L12 78",stroke:"#985038","stroke-width":2},balloon);el("rect",{x:-14,y:76,width:28,height:18,rx:5,fill:"#C47860"},balloon);
  var birds=el("g",{},R);[[560,560,1],[610,536,.8],[660,572,.9],[900,-250,1],[945,-270,.8]].forEach(function(b){el("path",{d:"M"+(b[0]-14*b[2])+" "+b[1]+" q"+(7*b[2])+" "+(-8*b[2])+" "+(14*b[2])+" 0 q"+(7*b[2])+" "+(-8*b[2])+" "+(14*b[2])+" 0",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round",opacity:.7},birds)});
  el("path",{d:"M-300 900 C-100 760 120 700 300 770 C440 650 620 640 760 770 C900 700 1060 640 1220 740 C1360 670 1540 690 1800 800 L1800 900Z",fill:"#98B8FC",opacity:.55},R);
  el("path",{d:"M220 712 C250 694 280 694 300 712 M600 660 C630 642 660 646 680 666 M1080 660 C1110 646 1140 650 1160 668",stroke:"#FFFFFF","stroke-width":10,fill:"none","stroke-linecap":"round",opacity:.8},R);
  groundG(R,"g3kFar","M-1600 900 L0 900 C300 872 700 890 1000 880 C1260 872 1450 886 1600 882 L3200 882","#CCF0A0");
  var bk=el("g",{},R);for(var fx=-80;fx<1700;fx+=rr(46,70)){if(fx>640&&fx<1000)continue;tree(bk,fx,rr(884,892),rr(.5,.75))}
  var hs=el("g",{transform:"translate(470 908)"},R);el("rect",{x:-46,y:-62,width:92,height:62,rx:6,fill:"#FDE6C4"},hs);el("path",{d:"M-58 -58 L0 -104 L58 -58Z",fill:"#F97A4F",stroke:"#F97A4F","stroke-width":10,"stroke-linejoin":"round"},hs);
  el("rect",{x:-14,y:-34,width:24,height:34,rx:5,fill:"#C47860"},hs);el("rect",{x:18,y:-46,width:20,height:18,rx:4,fill:"#ADC7FE"},hs);el("rect",{x:20,y:-102,width:12,height:24,rx:3,fill:"#985038"},hs);
  [[300,906,1.4],[1250,896,1.5]].forEach(function(t){tree(bk,t[0],t[1],t[2])});bush(bk,1080,906,1.1);bush(bk,600,912,.9);
  var T=el("g",{},R);
  el("path",{d:"M740 1012 C752 700 756 300 760 -300 L880 -300 C884 300 888 700 900 1012Z",fill:"#985038"},T);
  el("path",{d:"M720 1018 Q744 990 752 960 M920 1018 Q896 990 890 960",stroke:"#985038","stroke-width":22,fill:"none","stroke-linecap":"round"},T);
  for(var b=0;b<24;b++){var bx=rr(772,868),by=rr(-200,960);el("path",{d:"M"+f1(bx)+" "+f1(by)+" q"+f1(rr(-5,5))+" 30 "+f1(rr(-3,3))+" 60",stroke:rnd()<.5?"#7A3E2C":"#A86448","stroke-width":4,fill:"none","stroke-linecap":"round",opacity:.55},T)}
  el("path",{d:"M870 -150 C980 -170 1120 -190 1300 -200 L1300 -168 C1120 -160 980 -140 872 -118Z",fill:"#985038"},T);
  var crown=el("g",{},R);[[820,-360,160],[640,-300,120],[1000,-320,130],[1200,-300,110],[1320,-240,80],[700,-420,110],[960,-450,120],[560,-240,80]].forEach(function(c,k){leafBall(crown,c[0],c[1],c[2],k)});
  for(var i=0;i<10;i++)el("circle",{cx:f1(rr(560,1300)),cy:f1(rr(-480,-260)),r:f1(rr(16,32)),fill:"#70CC10",opacity:.45},crown);
  groundG(R,"g3kG","M-1600 1000 L0 1000 C400 984 900 1006 1600 994 L3200 994","#88A848");
  var tex=el("g",{},R);blades(tex,260,-100,1700,1004,1120,"#6E9A30",16,2.8);
  var fence=el("g",{},R);[[0,640],[960,1600]].forEach(function(r){el("path",{d:"M"+r[0]+" 1004 L"+r[1]+" 1004 M"+r[0]+" 1030 L"+r[1]+" 1030",stroke:"#D0A090","stroke-width":8,"stroke-linecap":"round"},fence);for(var x=r[0]+20;x<r[1];x+=56)el("rect",{x:x-7,y:982,width:14,height:66,rx:6,fill:"#D0A090"},fence)});
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
  S.reset=function(){S.p={x:690,y:958,r:0};S.cu=0;happy(false,[ke],[kh])};
  S.cu=0;S.cam=function(){var u=sst(S.cu);return[lerp(300,450,u),lerp(410,-470,u),1000,667]};
  S.center=function(){return{x:S.p.x+10,y:S.p.y-20,sc:SC*.8}};
  function pose(o){var p=S.p;tr(K,"translate("+f1(p.x)+" "+f1(p.y)+") rotate("+f1(p.r)+") scale("+SC+") translate(0 42)");
    tr(legF,"rotate("+f1(o.f||0)+" 34 -40)");tr(legF2,"rotate("+f1(-(o.f||0))+" 24 -40)");tr(legH,"rotate("+f1(o.h||0)+" -22 -30)");tr(legH2,"rotate("+f1(-(o.h||0))+" -30 -30)");
    tr(head,"rotate("+f1(o.hd||0)+" 40 -60)");var sw=o.tsw||0;tailP.setAttribute("d","M-46 -48 C-80 -60 "+f1(-90+sw)+" -100 "+f1(-70+sw*1.3)+" -130");blinkT(ke,72,-92,o.blink);
    var gy=p.r<-40?null:(p.y>600?994:-160);if(gy===null)shadow.setAttribute("opacity",0);else{shadow.setAttribute("opacity",.13);shadow.setAttribute("cx",f1(p.x));shadow.setAttribute("cy",f1(gy+(p.y>600?6:2)))}}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*80)+" "+c.y+") scale("+c.s+")")});tr(balloon,"translate("+f1(1240+Math.sin(t*.12)*60)+" "+f1(-40+Math.sin(t*.4)*10)+")");tr(birds,"translate("+f1(Math.sin(t*.3)*30)+" "+f1(Math.sin(t*.7)*6)+")")};
  S.idle=function(t,dt,attn){var o={hd:-20+Math.sin(t*1.2)*6,tsw:Math.sin(t*2)*14,blink:blinkK(tw,t)};var wt=idleTimer(tw,"w",t,2.5,4);if(wt<.6)o.tsw=Math.sin(wt*30)*18;if(attn)o.hd=-8;pose(o)};
  S.act=function(e){var o={hd:-10},p=S.p;S.cu=clamp((e-.15)/3.6,0,1);
    if(e<.45){var u=e/.45,j=sst(u);p.x=lerp(690,722,j);p.y=lerp(958,880,j)-40*Math.sin(Math.PI*u);p.r=lerp(0,-80,j);o.hd=40*j;o.f=-40*Math.sin(Math.PI*u);o.h=30*Math.sin(Math.PI*u)}
    else if(e<3.0){var c=(e-.45)/2.55,stp=c*7,k=Math.floor(stp),f=stp-k,pull=sst(Math.min(1,f*1.6));p.x=722;p.y=lerp(880,-120,(k+pull)/7);p.r=-80;
      o.f=k%2?lerp(30,-30,f):lerp(-30,30,f);o.h=k%2?lerp(-24,24,f):lerp(24,-24,f);o.tsw=Math.sin(e*8)*16;o.hd=40+Math.sin(e*6)*4}
    else if(e<3.6){var v=(e-3.0)/.6,w=sst(v);p.x=lerp(722,960,w);p.y=lerp(-120,-218,w)-60*Math.sin(Math.PI*v);p.r=lerp(-80,0,w);o.hd=40*(1-w);o.f=-30*Math.sin(Math.PI*v);o.h=20*Math.sin(Math.PI*v);o.tsw=-10}
    else{p.x=960;p.y=-218;p.r=0;var s=(e-3.6)/.4;o.hd=-6*Math.sin(Math.PI*s);o.tsw=Math.sin(e*6)*10}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.p={x:960,y:-218,r:0};S.cu=1;if(e>.25)happy(true,[ke],[kh]);pose({hd:-4+Math.sin(e*2.4)*6,tsw:Math.sin(e*3)*14})};
  return S}

/* ---------- СЛЕЗАЙ: коала слезает с эвкалипта; эвкалиптовая роща, общий план сбоку, камера стоит ---------- */
function eucLeaves(g,x,y,w,h,n){for(var i=0;i<n;i++){var lx=x+rr(-w,w),ly=y+rr(-h*.3,h),a=rr(-25,25),s=rr(.8,1.25);
  el("path",{d:"M0 0 C5 12 5 34 0 52 C-5 34 -5 12 0 0Z",fill:["#88A848","#6E9A30","#B0E060","#4AA010"][i%4],transform:"translate("+f1(lx)+" "+f1(ly)+") rotate("+f1(a)+") scale("+s.toFixed(2)+")"},g)}}
function eucTree(g,x,y,h,s){var t=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},g);
  el("path",{d:"M-12 0 C-8 "+(-h*.5)+" -6 "+(-h*.8)+" -4 "+(-h)+" L6 "+(-h)+" C8 "+(-h*.8)+" 10 "+(-h*.5)+" 14 0Z",fill:"#EAF1FF"},t);
  el("path",{d:"M2 "+(-h*.6)+" Q-20 "+(-h*.78)+" -40 "+(-h*.88)+" M3 "+(-h*.72)+" Q26 "+(-h*.9)+" 44 "+(-h*.98),stroke:"#EAF1FF","stroke-width":6,fill:"none","stroke-linecap":"round"},t);
  [[0,-h-10,46],[-40,-h*.9,34],[44,-h*.98,34],[-14,-h*1.08,32],[20,-h*1.1,30]].forEach(function(c,k){el("ellipse",{cx:c[0],cy:c[1],rx:c[2],ry:c[2]*.66,fill:k%2?"#88A848":"#6E9A30"},t)});
  eucLeaves(t,0,-h*.98,52,36,16);return t}
function makeDOWN(R){
  var S={};S.vb="0 -84 1600 1067";S.ACT=4.4;S.snd="down";
  var rays=daySky(R,1260,170),cl=[cloud(R,420,110,.9),cloud(R,760,30,.6)];
  groundG(R,"g3oFar","M-1600 720 L0 720 C300 690 700 708 1000 696 C1260 688 1450 702 1600 698 L3200 698","#CCF0A0");
  var bk=el("g",{},R);[[140,720,170,1],[300,712,130,.8],[560,708,110,.7],[1200,700,120,.75],[1380,702,160,1],[1530,714,120,.8]].forEach(function(t){eucTree(bk,t[0],t[1],t[2],t[3])});
  groundG(R,"g3oMid","M-1600 800 L0 800 C400 786 900 800 1600 790 L3200 790","#B0E060");
  bush(bk,260,808,1.1);bush(bk,1440,800,1.2);
  var T=el("g",{},R);
  el("path",{d:"M836 900 C848 700 854 400 860 60 L950 60 C956 400 962 700 984 900Z",fill:"#EAF1FF"},T);
  el("path",{d:"M816 904 Q838 886 846 860 M1004 904 Q982 886 976 860",stroke:"#EAF1FF","stroke-width":22,fill:"none","stroke-linecap":"round"},T);
  [[884,760,22,60,"#D3E2FF"],[930,600,16,48,"#D0A090"],[876,480,14,40,"#D3E2FF"],[920,330,14,36,"#BABABA"],[884,200,12,30,"#D0A090"],[940,840,14,30,"#BABABA"]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:p[2],ry:p[3],fill:p[4],opacity:.8},T)});
  for(var b=0;b<10;b++){var bx=rr(866,944),by=rr(120,860);el("path",{d:"M"+f1(bx)+" "+f1(by)+" q"+f1(rr(-3,3))+" 30 0 60",stroke:"#ADC7FE","stroke-width":3,fill:"none","stroke-linecap":"round",opacity:.6},T)}
  el("path",{d:"M946 170 Q1060 110 1210 92 M864 230 Q760 170 650 160",stroke:"#EAF1FF","stroke-width":20,fill:"none","stroke-linecap":"round"},T);
  var crown=el("g",{},R);[[900,40,150],[760,90,110],[1070,60,120],[1210,90,80],[980,-50,110],[820,-40,100],[640,150,70]].forEach(function(c,k){el("ellipse",{cx:c[0],cy:c[1],rx:c[2],ry:c[2]*.72,fill:["#6E9A30","#88A848","#4AA010"][k%3]},crown)});
  eucLeaves(crown,900,60,320,140,90);
  groundG(R,"g3oG","M-1600 896 L0 896 C400 880 900 902 1600 890 L3200 890","#88A848");
  var tex=el("g",{},R);blades(tex,320,-100,1700,900,1000,"#6E9A30",16,2.8);
  [[560,930,40,20],[1260,940,52,24]].forEach(function(r){el("ellipse",{cx:r[0],cy:r[1],rx:r[2],ry:r[3],fill:"#BABABA"},R);el("ellipse",{cx:r[0]-r[2]*.3,cy:r[1]-r[3]*.4,rx:r[2]*.4,ry:r[3]*.3,fill:"#D3E2FF",opacity:.6},R)});
  var flowers=[];[[420,950,1.4],[660,930,1.3],[1140,944,1.4],[1380,960,1.5]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var SC=1.8,shadow=el("ellipse",{rx:56*SC,ry:9*SC,fill:"#2C3A5C",opacity:0},R);
  var K=el("g",{},R);
  var legB=strokeLeg(K,"","#8C98B4",22),armB=strokeLeg(K,"","#8C98B4",21);
  var hB=[0,1].map(function(){return el("ellipse",{rx:10,ry:8,fill:"#7A869E"},K)});
  el("ellipse",{cx:0,cy:-62,rx:46,ry:62,fill:"#A8B0C8"},K);el("ellipse",{cx:4,cy:-54,rx:27,ry:40,fill:"#EAF1FF"},K);
  var legF=strokeLeg(K,"","#8C98B4",23),armF=strokeLeg(K,"","#8C98B4",22),legF2=strokeLeg(K,"","#8C98B4",23),armF2=strokeLeg(K,"","#8C98B4",22);
  var hF=[0,1,2,3].map(function(){return el("ellipse",{rx:10.5,ry:8.5,fill:"#7A869E"},K)});
  var head=el("g",{},K);
  [-1,1].forEach(function(s){el("circle",{cx:40*s,cy:-170,r:27,fill:"#A8B0C8"},head);el("circle",{cx:40*s,cy:-168,r:15,fill:"#EAF1FF"},head)});
  el("circle",{cx:0,cy:-138,r:46,fill:"#A8B0C8"},head);
  [-1,1].forEach(function(s){el("circle",{cx:30*s,cy:-122,r:8,fill:"#FC88A8",opacity:.45},head)});
  el("ellipse",{cx:0,cy:-128,rx:14,ry:18,fill:"#2C3A5C"},head);el("ellipse",{cx:-4,cy:-136,rx:4,ry:5,fill:"#8C98B4"},head);
  el("path",{d:"M-7 -104 q7 6 14 0",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var ce1=eyeG(head,-21,-150,5.5),ce2=eyeG(head,21,-150,5.5),ch1=happyArc(head,-21,-149,6.5),ch2=happyArc(head,21,-149,6.5);
  var TX=846,X0=TX-50*SC,Y0=520,Y1=896,tw={};S.p={x:X0,y:Y0,wrap:1};
  S.init=function(){};
  S.reset=function(){S.p={x:X0,y:Y0,wrap:1};happy(false,[ce1,ce2],[ch1,ch2])};
  S.center=function(){return{x:S.p.x,y:S.p.y-80*SC,sc:SC*.85}};
  function lim(e,h,sx,sy,hx,hy){e.setAttribute("d","M"+sx+" "+sy+" Q"+f1((sx+hx)/2)+" "+f1((sy+hy)/2-6)+" "+f1(hx)+" "+f1(hy));tr(h,"translate("+f1(hx)+" "+f1(hy)+")")}
  function setOpL(list,v){list.forEach(function(x){x.setAttribute("opacity",v.toFixed(2))})}
  // wrap=1 — обнимает ствол; wrap=0 — сидит на земле лицом к нам, лапки впереди
  function pose(o){var p=S.p,w=p.wrap,a=o.a||0,b=o.b||0;tr(K,"translate("+f1(p.x)+" "+f1(p.y)+") scale("+SC+")");tr(head,"rotate("+f1(o.hd||0)+" 0 -100)");
    lim(armF,hF[0],16,-96,lerp(26,56,w),lerp(-52,-112+a,w));lim(legF,hF[1],12,-22,lerp(30,52,w),lerp(-4,-16+b,w));
    lim(armB,hB[0],6,-100,50,-122-a);lim(legB,hB[1],0,-24,46,-24-b);
    lim(armF2,hF[2],-16,-96,lerp(-26,-4,w),lerp(-52,-80,w));lim(legF2,hF[3],-12,-22,lerp(-30,-2,w),lerp(-4,-12,w));
    var back=clamp(w*2-1,0,1),front=clamp(1-w*2,0,1);setOpL([armB,legB,hB[0],hB[1]],back);setOpL([armF2,legF2,hF[2],hF[3]],front);
    blinkT(ce1,-21,-150,o.blink);blinkT(ce2,21,-150,o.blink);
    var on=p.y>Y1-30;shadow.setAttribute("opacity",on?.13:0);shadow.setAttribute("cx",f1(p.x));shadow.setAttribute("cy",f1(Y1+4))}
  S.ambient=function(t,dt){flowersSway(flowers,t,dt,0,0,false);tr(rays,"rotate("+f1(t*6)+")");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={hd:-6+Math.sin(t*.8)*5,blink:blinkK(tw,t),a:Math.sin(t*1.3)*2};if(attn)o.hd=0;pose(o)};
  S.act=function(e){var p=S.p,o={hd:8};
    if(e<3.4){var c=e/3.4*6,k=Math.floor(c),f=c-k,slide=sst(clamp((f-.35)/.65,0,1));p.y=lerp(Y0,Y1,(k+slide)/6);p.x=X0;p.wrap=1;
      var reach=Math.sin(Math.PI*Math.min(1,f/.5))*24;if(k%2){o.a=-reach;o.b=reach}else{o.a=reach;o.b=-reach}o.hd=10+Math.sin(e*5)*4}
    else{var v=sst((e-3.4)/.6);p.y=Y1;p.wrap=1-v;p.x=lerp(X0,X0-70,v);o.hd=lerp(10,0,v)}
    pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.p={x:X0-70,y:Y1,wrap:0};if(e>.25)happy(true,[ce1,ce2],[ch1,ch2]);pose({hd:Math.sin(e*2.4)*7})};
  return S}

/* ---------- ПРЯЧЬСЯ: черепашка на песчаном берегу прячется в панцирь; крупный план сбоку, камера наезжает ---------- */
function tuft(g,x,y,s){for(var i=0;i<6;i++){var a=-60+i*24+rr(-6,6),L=rr(36,56)*s,ex=x+Math.sin(a*Math.PI/180)*L,ey=y-Math.cos(a*Math.PI/180)*L;
  el("path",{d:"M"+f1(x)+" "+f1(y)+" Q"+f1(x+(ex-x)*.3)+" "+f1(y-L*.6)+" "+f1(ex)+" "+f1(ey),stroke:i%2?"#88A848":"#6E9A30","stroke-width":5*s,fill:"none","stroke-linecap":"round"},g)}}
function shell(g,x,y,s,col){var t=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},g);el("path",{d:"M0 4 L-20 -10 C-18 -26 18 -26 20 -10Z",fill:col,stroke:col,"stroke-width":4,"stroke-linejoin":"round"},t);
  [-12,-4,4,12].forEach(function(dx){el("path",{d:"M0 2 L"+dx+" -18",stroke:"#FFFFFF","stroke-width":2,opacity:.7,"stroke-linecap":"round"},t)});el("ellipse",{cx:0,cy:5,rx:6,ry:4,fill:col},t);return t}
function makeHIDE(R){
  var S={},V0=[300,250,1000,667],V1=[470,380,720,480];S.vb=V0.join(" ");S.ACT=2.4;S.snd="hide";
  var rays=daySky(R,660,330),cl=[cloud(R,1080,300,.8),cloud(R,420,380,.5)];
  el("rect",{x:-1600,y:556,width:4800,height:80,fill:"#98B8FC"},R);el("path",{d:"M-1600 556 L3200 556",stroke:"#EAF1FF","stroke-width":3,opacity:.8},R);
  var wv=el("g",{},R);for(var i=0;i<8;i++)el("path",{d:"M"+f1(rr(300,1300))+" "+f1(rr(570,610))+" q12 -5 24 0",stroke:"#FFFFFF","stroke-width":3,fill:"none","stroke-linecap":"round",opacity:.6},wv);
  groundG(R,"g3hDune","M-1600 640 L0 640 C200 590 420 596 600 624 C780 652 1000 592 1240 604 C1400 612 1500 626 1600 622 L3200 622","#FDE6C4");
  var dg=el("g",{},R);tuft(dg,420,626,1.1);tuft(dg,470,632,.8);tuft(dg,1150,612,1);tuft(dg,1210,616,.8);
  groundG(R,"g3hSand","M-1600 700 L0 700 C400 682 900 704 1600 690 L3200 690","url(#gSand)");
  el("path",{d:"M-1600 700 C0 700 400 682 900 704 C1200 712 1400 692 3200 690",stroke:"#F8B888","stroke-width":4,fill:"none",opacity:.6},R);
  var dec=el("g",{},R);shell(dec,420,860,1.6,"#FCD0DC");shell(dec,1180,900,1.3,"#FFFFFF");shell(dec,1240,770,1,"#FCD0DC");
  el("rect",{x:330,y:744,width:170,height:22,rx:11,fill:"#D0A090",transform:"rotate(-6 415 755)"},dec);el("path",{d:"M360 752 L470 744",stroke:"#C47860","stroke-width":3,"stroke-linecap":"round"},dec);
  [[1080,820,22,12],[1110,830,14,8],[560,900,16,9]].forEach(function(r){el("ellipse",{cx:r[0],cy:r[1],rx:r[2],ry:r[3],fill:"#BABABA"},dec)});
  tuft(dec,1290,730,.9);tuft(dec,360,720,.7);
  var TX=820,TY=820,SC=2.1;
  el("ellipse",{cx:TX,cy:TY+4,rx:94*SC,ry:11*SC,fill:"#2C3A5C",opacity:.13},R);
  var K=el("g",{},R),KB=el("g",{},K);
  var tailE=el("path",{d:"M-72 -16 Q-98 -10 -82 -2Z",fill:"#96CC48",stroke:"#96CC48","stroke-width":6,"stroke-linejoin":"round"},KB);
  var legs=[[-52,-8],[-30,-4],[30,-4],[54,-8]].map(function(l,i){var g=el("g",{},KB);el("ellipse",{cx:l[0],cy:l[1],rx:15,ry:18,fill:i%3?"#B0E060":"#96CC48"},g);
    el("circle",{cx:l[0]-5,cy:l[1]-6,r:3.4,fill:"#70CC10"},g);[-7,0,7].forEach(function(d){el("circle",{cx:l[0]+d,cy:l[1]+15,r:2.6,fill:"#EAF1FF"},g)});return g});
  var head=el("g",{},KB);el("ellipse",{cx:62,cy:-32,rx:26,ry:15,fill:"#B0E060"},head);
  el("ellipse",{cx:96,cy:-48,rx:28,ry:24,fill:"#B0E060"},head);[[82,-62,4],[90,-68,3],[76,-52,3],[58,-26,3.5],[70,-38,3]].forEach(function(p){el("circle",{cx:p[0],cy:p[1],r:p[2],fill:"#96CC48"},head)});
  el("circle",{cx:106,cy:-36,r:7,fill:"#FC88A8",opacity:.4},head);el("circle",{cx:121,cy:-50,r:2,fill:"#2C3A5C"},head);
  el("path",{d:"M108 -38 q8 5 15 -3",stroke:"#2C3A5C","stroke-width":2.8,fill:"none","stroke-linecap":"round"},head);
  el("circle",{cx:105,cy:-56,r:9.5,fill:"#FFFFFF"},head);var te=eyeG(head,107,-56,6),th=happyArc(head,106,-55,7);
  var sh=el("g",{},KB);
  el("path",{d:"M-86 -14 C-86 -106 86 -106 86 -14Z",fill:"#4AA010"},sh);
  function hex(cx,cy,w,h){var p=[[cx-w/2,cy],[cx-w/4,cy-h/2],[cx+w/4,cy-h/2],[cx+w/2,cy],[cx+w/4,cy+h/2],[cx-w/4,cy+h/2]];
    el("path",{d:"M"+p.map(function(q){return f1(q[0])+" "+f1(q[1])}).join(" L")+"Z",fill:"#70CC10",stroke:"#289440","stroke-width":4.5,"stroke-linejoin":"round"},sh)}
  hex(0,-64,48,30);hex(-46,-52,40,28);hex(46,-52,40,28);hex(-24,-30,40,24);hex(24,-30,40,24);hex(-64,-26,22,18);hex(64,-26,22,18);
  el("ellipse",{cx:-22,cy:-80,rx:26,ry:7,fill:"#B0E060",opacity:.55,transform:"rotate(-12 -22 -80)"},sh);
  el("ellipse",{cx:0,cy:-14,rx:92,ry:12,fill:"#289440"},sh);for(var k=-78;k<=78;k+=19.5)el("path",{d:"M"+f1(k)+" -22 L"+f1(k)+" -6",stroke:"#4AA010","stroke-width":3,"stroke-linecap":"round"},sh);
  var tw={};
  S.init=function(){};
  S.reset=function(){S.cu=0;happy(false,[te],[th])};S.cu=0;
  S.cam=function(){return vbAt(V0,V1,sst(S.cu))};
  S.center=function(){return{x:TX+10*SC,y:TY-50*SC,sc:SC*.6}};
  function pose(o){var h=o.hide||0,lg=o.legs==null?h:o.legs;tr(K,"translate("+TX+" "+f1(TY)+") scale("+SC+")");tr(KB,"translate(0 "+f1((o.drop||0)*6)+") rotate("+f1(o.rot||0)+" 0 -10)");
    tr(head,"translate("+f1(-76*h)+" "+f1(8*h)+") rotate("+f1(o.hd||0)+" 60 -34)");
    legs.forEach(function(g,i){var dx=i<2?16:-16;tr(g,"translate("+f1(dx*lg)+" "+f1(-22*lg)+")")});tr(tailE,"translate("+f1(14*lg)+" 0)");blinkT(te,107,-56,o.blink)}
  S.ambient=function(t,dt){tr(rays,"rotate("+f1(t*6)+")");tr(wv,"translate("+f1(Math.sin(t*.8)*14)+" 0)");cl.forEach(function(c,i){tr(c.g,"translate("+f1(c.x+Math.sin(t*.05+i*2)*90)+" "+c.y+") scale("+c.s+")")})};
  S.idle=function(t,dt,attn){var o={hd:Math.sin(t*1.1)*5,blink:blinkK(tw,t)};if(attn)o.hd=-6;pose(o)};
  S.act=function(e){S.cu=clamp(e/S.ACT,0,1);var o={};
    var h=seg(e,.1,.45);o.hide=h;o.legs=seg(e,.15,.5);o.hd=-14*Math.sin(Math.PI*clamp(e/.2,0,1));o.blink=h>.3?1:0;
    o.drop=seg(e,.45,.6);var wb=Math.max(0,e-.6);o.rot=e>.6?Math.sin(wb*14)*7*Math.exp(-wb*2.2):0;pose(o);return e>=S.ACT};
  S.fin=function(e,t){S.cu=1;var pk=seg(e,.1,.6);if(e>.25)happy(true,[te],[th]);pose({hide:1-.7*pk,legs:1,drop:1,hd:-6+Math.sin(e*2.6)*5*pk})};
  return S}

/* ---------- ВЫХОДИ: мышка выходит из норки; средний план сбоку, камера ведёт вправо ---------- */
function makeOUT(R){
  var S={};S.ACT=3.6;S.snd="out";var CX0=170,CX1=640;S.vb=CX0+" 440 900 600";
  var rays=daySky(R,1180,560),cl=[cloud(R,520,560,.7),cloud(R,1420,500,.6)];
  groundG(R,"g3uFar","M-1600 790 L0 790 C300 770 700 784 1000 776 C1260 770 1450 780 1600 778 L3200 778","#CCF0A0");
  var bk=el("g",{},R);[[960,790,1],[1400,782,1.2],[1080,786,.7]].forEach(function(t){tree(bk,t[0],t[1],t[2])});bush(bk,1200,790,1);
  groundG(R,"g3uG","M-1600 900 L0 900 C400 890 900 904 1600 896 L3200 896","#88A848");
  el("path",{id:"g3uHill",d:"M-1600 520 L0 520 C200 520 380 560 480 640 C560 700 620 800 660 906 L-1600 1300Z",fill:"#88A848"},R);R.appendChild(grain(null,["g3uHill"]));
  el("path",{d:"M-1600 520 L0 520 C200 520 380 560 480 640 C560 700 620 800 660 906",stroke:"#6E9A30","stroke-width":6,fill:"none","stroke-linecap":"round",opacity:.5},R);
  var hd=el("g",{},R);[[200,620,26,14],[380,700,18,10],[120,800,22,12]].forEach(function(r){el("ellipse",{cx:r[0],cy:r[1],rx:r[2],ry:r[3],fill:"#BABABA"},hd);el("ellipse",{cx:r[0]-r[2]*.3,cy:r[1]-r[3]*.4,rx:r[2]*.4,ry:r[3]*.3,fill:"#D3E2FF",opacity:.6},hd)});
  var mush=el("g",{transform:"translate(440 808)"},hd);el("rect",{x:-7,y:-26,width:14,height:28,rx:6,fill:"#FDE6C4"},mush);el("path",{d:"M-28 -22 C-26 -50 26 -50 28 -22Z",fill:"#F97A4F"},mush);[[-12,-34,5],[8,-38,4],[16,-28,3]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#FFFFFF"},mush)});
  var tex=el("g",{},R);blades(tex,360,-100,1800,904,1060,"#6E9A30",16,2.8);
  var flowers=[];[[300,640,1.3],[200,760,1.4],[780,960,1.5],[1080,930,1.4],[1300,1000,1.6],[1460,940,1.4]].forEach(function(f,k){flower(R,f[0],f[1],f[2],k%4,flowers)});
  var berry=el("g",{transform:"translate(1250 902)"},R);el("path",{d:"M0 -60 q-6 30 0 54",stroke:"#4AA010","stroke-width":5,fill:"none","stroke-linecap":"round"},berry);el("path",{d:"M-22 -30 C-26 -6 -8 10 0 12 C8 10 26 -6 22 -30 C12 -40 -12 -40 -22 -30Z",fill:"#DD4B4B"},berry);
  [[-10,-20],[8,-18],[0,-4],[-12,-6],[12,-4]].forEach(function(s){el("ellipse",{cx:s[0],cy:s[1],rx:2,ry:3,fill:"#FFF8A8"},berry)});el("path",{d:"M-14 -34 Q0 -48 14 -34 Q0 -28 -14 -34Z",fill:"#4AA010"},berry);
  el("ellipse",{cx:560,cy:858,rx:66,ry:52,fill:"#7A3E2C"},R);el("ellipse",{cx:560,cy:866,rx:50,ry:38,fill:"#5A2C20"},R);
  el("path",{d:"M490 846 C500 790 620 790 630 846",stroke:"#A86448","stroke-width":12,fill:"none","stroke-linecap":"round"},R);
    var cp=el("clipPath",{id:"g3holeClip"},DEFS);el("ellipse",{cx:560,cy:858,rx:64,ry:50},cp);el("rect",{x:624,y:0,width:3000,height:1200},cp);
  var SC=1.5,shadow=el("ellipse",{rx:46*SC,ry:7*SC,fill:"#2C3A5C",opacity:0},R);
  var wrap=el("g",{"clip-path":"url(#g3holeClip)"},R);
  var M=el("g",{},wrap),MB=el("g",{},M);
  var tailP=el("path",{d:"",stroke:"#F8B0C0","stroke-width":5,fill:"none","stroke-linecap":"round"},MB);
  var feet=[[-20,-3],[-4,-3],[14,-3],[28,-3]].map(function(p,i){return el("ellipse",{cx:p[0],cy:p[1],rx:9,ry:5,fill:i%2?"#FCC4BC":"#F8B0C0"},MB)});
  el("ellipse",{cx:0,cy:-26,rx:38,ry:24,fill:"#D0A090"},MB);el("ellipse",{cx:-18,cy:-22,rx:17,ry:15,fill:"#C08A78"},MB);el("ellipse",{cx:8,cy:-13,rx:24,ry:8,fill:"#FDE6C4"},MB);
  el("ellipse",{cx:-6,cy:-40,rx:16,ry:6,fill:"#DDB8A8",opacity:.7},MB);
  var head=el("g",{},MB);
  el("circle",{cx:12,cy:-60,r:15,fill:"#C08A78"},head);el("circle",{cx:12,cy:-60,r:9,fill:"#FCC4BC"},head);
  el("path",{d:"M10 -40 C18 -60 50 -52 64 -37 C54 -24 24 -20 10 -30Z",fill:"#D0A090"},head);
  el("circle",{cx:28,cy:-58,r:19,fill:"#D0A090"},head);el("circle",{cx:28,cy:-58,r:12,fill:"#FCC4BC"},head);
  el("circle",{cx:46,cy:-31,r:5.5,fill:"#FC88A8",opacity:.5},head);el("circle",{cx:64,cy:-37,r:5.5,fill:"#FC88A8"},head);el("circle",{cx:62.5,cy:-38.5,r:1.6,fill:"#FFFFFF"},head);
  el("path",{d:"M58 -38 l22 -8 M58 -35 l23 -1 M58 -32 l21 5",stroke:"#985038","stroke-width":1.4,"stroke-linecap":"round"},head);
  el("path",{d:"M22 -48 q4 -8 10 -6",stroke:"#C08A78","stroke-width":3,fill:"none","stroke-linecap":"round"},head);
  var paw=el("ellipse",{cx:30,cy:-8,rx:7,ry:5,fill:"#FCC4BC"},MB);
  var me=eyeG(head,43,-45,5),mh=happyArc(head,43,-44,6);
  var tw={};S.mx=440;
  S.init=function(){};
  S.reset=function(){S.mx=440;happy(false,[me],[mh])};
  S.cam=function(){var x=clamp(S.mx-430,CX0,CX1);return[x,440,900,600]};
  S.center=function(){return{x:560,y:850,sc:1.1}};
  function pose(o){var y=900;tr(M,"translate("+f1(S.mx)+" "+y+") scale("+SC+")");tr(MB,"translate(0 "+f1(o.bob||0)+")");tr(head,"rotate("+f1(o.hd||0)+" 14 -36)");
    var st=o.st||0;feet.forEach(function(f,i){tr(f,"translate("+f1(Math.sin(st+(i%2)*Math.PI)*6)+" "+f1(-Math.max(0,Math.sin(st+(i%2)*Math.PI))*4)+")")});
    var sw=o.tsw||0;tailP.setAttribute("d","M-36 -20 C-70 -14 "+f1(-90+sw)+" -40 "+f1(-110+sw*1.4)+" -30");blinkT(me,43,-45,o.blink);
    var out=clamp((S.mx-600)/60,0,1);shadow.setAttribute("opacity",(.13*out).toFixed(3));shadow.setAttribute("cx",f1(S.mx+4*SC));shadow.setAttribute("cy",902)}
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
