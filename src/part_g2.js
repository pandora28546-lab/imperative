
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
