
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
