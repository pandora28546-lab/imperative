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

