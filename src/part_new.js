
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
   ПОЛЗИ — улитка по садовой дорожке к клубнике
   ========================================================== */
function makeCRAWL(R){
  var S={};S.vb="0 -84 1600 1067";S.ACT=4.4;S.snd="crawl";
  var rays=daySky(R,1360,150),cl=[cloud(R,300,140,1),cloud(R,900,100,.7)];
  // garden fence
  var fence=el("g",{},R);for(var i=0;i<20;i++){var x=-40+i*90;el("path",{d:"M"+x+" 560 V370 l30 -26 l30 26 V560Z",fill:i%2?"#D0A090":"#F8B888"},fence)}
  el("rect",{x:-60,y:420,width:1760,height:22,rx:6,fill:"#C47860"},fence);el("rect",{x:-60,y:500,width:1760,height:22,rx:6,fill:"#C47860"},fence);
  // bushes along fence
  [[140,560,1.1],[520,570,.9],[880,555,1.2],[1260,565,1],[1520,560,1.1]].forEach(function(b){var g=el("g",{transform:"translate("+b[0]+" "+b[1]+") scale("+b[2]+")"},R);[[-50,0,50],[0,-24,60],[56,0,48]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#289440"},g)});el("circle",{cx:-10,cy:-46,r:20,fill:"#4AA010",opacity:.5},g)});
  hill(R,"crG","M-1600 590 L0 590 C300 575 700 585 1000 578 C1300 572 1450 580 1600 584 L3200 584","#88A848");
  var path=pathObj(R,"M320 770 C520 790 640 700 820 705 C1000 710 1080 650 1180 640");
  // soil path ribbon
  var soil=el("path",{id:"crPath",d:"",fill:"#D0A090"},R),soilEdge=el("path",{d:"",fill:"none",stroke:"#C47860","stroke-width":8},R);
  var tex=el("g",{},R),back=el("g",{},R),trail=el("path",{d:"",fill:"none",stroke:"#FFFFFF","stroke-width":9,"stroke-linecap":"round","stroke-linejoin":"round",opacity:.55},R);
  var flowers=[],berry=el("g",{},R),SN=el("g",{},R),front=el("g",{},R),B=bee(R);
  // snail
  var shadow=el("ellipse",{cx:0,cy:2,rx:90,ry:10,fill:"#2C3A5C",opacity:.15},SN),body=el("g",{},SN);
  var foot=el("ellipse",{cx:-8,cy:-12,rx:88,ry:14,fill:"#FDE6C4"},body);
  var neck=el("g",{},body);el("path",{d:"M30 -10 C46 -30 50 -56 62 -70 C80 -86 98 -70 92 -48 C86 -28 78 -16 70 -6Z",fill:"#FDE6C4"},neck);
  var stalks=[],eyes=[],happy=[];[[66,-74,58,-118],[82,-72,96,-114]].forEach(function(s2,i){var sg=el("g",{},neck);el("path",{d:"M"+s2[0]+" "+s2[1]+" L"+s2[2]+" "+s2[3],stroke:"#FDE6C4","stroke-width":8,"stroke-linecap":"round"},sg);
    el("circle",{cx:s2[2],cy:s2[3],r:10,fill:"#FDE6C4"},sg);var eg=el("g",{},sg);el("circle",{cx:s2[2]+2,cy:s2[3],r:6,fill:"#2C3A5C"},eg);el("circle",{cx:s2[2]+4,cy:s2[3]-2.5,r:2,fill:"#FFFFFF"},eg);eyes.push(eg);
    happy.push(el("path",{d:"M"+(s2[2]-6)+" "+(s2[3]+1)+" q6 -8 12 0",stroke:"#2C3A5C","stroke-width":3.5,fill:"none","stroke-linecap":"round",opacity:0},sg));stalks.push({g:sg,x:s2[0],y:s2[1]})});
  el("path",{d:"M76 -48 q8 6 14 -2",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round"},neck);el("circle",{cx:72,cy:-56,r:6,fill:"#FCC4BC"},neck);
  var shell=el("g",{},body);el("circle",{cx:-18,cy:-62,r:54,fill:"#F8A488"},shell);el("circle",{cx:-18,cy:-62,r:54,fill:"none",stroke:"#C47860","stroke-width":5},shell);
  el("path",{d:"M-18 -62 m0 0 a8 8 0 0 1 14 4 a16 16 0 0 1 -18 18 a26 26 0 0 1 -26 -30 a36 36 0 0 1 42 -32 a44 44 0 0 1 32 52",fill:"none",stroke:"#C47860","stroke-width":8,"stroke-linecap":"round"},shell);
  el("ellipse",{cx:-36,cy:-92,rx:14,ry:8,fill:"#FDDDD0",opacity:.7,transform:"rotate(-30 -36 -92)"},shell);
  // strawberries at the goal
  function straw(x,y,s){var g=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},berry);el("path",{d:"M0 -30 C26 -30 30 -6 18 14 C10 28 4 34 0 34 C-4 34 -10 28 -18 14 C-30 -6 -26 -30 0 -30Z",fill:"#CC1A14"},g);
    [[-10,-14],[6,-18],[12,0],[-6,4],[0,18],[-14,-2],[8,14]].forEach(function(p){el("ellipse",{cx:p[0],cy:p[1],rx:2,ry:3,fill:"#FFF8A8"},g)});
    el("path",{d:"M0 -30 l-16 -8 l10 -2 l6 -12 l6 12 l10 2Z",fill:"#4AA010"},g);return g}
  var plant=el("g",{},berry);[[1250,600],[1310,612],[1215,618]].forEach(function(l){el("ellipse",{cx:l[0],cy:l[1],rx:40,ry:18,fill:"#4AA010",transform:"rotate(-20 "+l[0]+" "+l[1]+")"},plant)});
  straw(1250,660,1.1);straw(1300,645,.9);
  var tw={blink:2,look:2},trailPts=[];
  S.init=function(){path.init();var L=[],Rr=[],N=60;
    for(var i=-6;i<=N+4;i++){var u=i/N,p=path.at(u),a=path.ang(u)*Math.PI/180,w=lerp(80,50,clamp(u,0,1));if(u<0){p={x:p.x+(u*N)*20,y:p.y}}if(u>1){p={x:p.x+(u-1)*N*18,y:p.y-(u-1)*N*4}}
      L.push([p.x+Math.sin(a)*w,p.y-Math.cos(a)*w]);Rr.push([p.x-Math.sin(a)*w,p.y+Math.cos(a)*w])}
    var d="M"+L.map(function(z){return f1(z[0])+" "+f1(z[1])}).join(" L")+" L"+Rr.slice().reverse().map(function(z){return f1(z[0])+" "+f1(z[1])}).join(" L")+"Z";
    soil.setAttribute("d",d);soilEdge.setAttribute("d",d);R.insertBefore(soilEdge,soil);
    R.insertBefore(grain(null,["crG","crPath"]),tex);
    blades(tex,320,0,1600,590,900,"#6E9A30",16,2.8);blades(tex,90,0,1600,600,900,"#B0D870",14,2.4);
    for(var j=0;j<40;j++){var u2=rr(0,1),p2=path.at(u2),s2=rr(-.8,.8)*60;el("ellipse",{cx:f1(p2.x+rr(-20,20)),cy:f1(p2.y+s2*.6),rx:f1(rr(3,6)),ry:f1(rr(2,3.5)),fill:rnd()<.5?"#C47860":"#F8B888",opacity:.8},tex)}
    for(var k=0;k<14;k++){var u3=rr(.05,.95),p3=path.at(u3),sd=rnd()<.5?-1:1;flower(sd<0?back:front,p3.x+rr(-30,30),p3.y+sd*rr(70,120)-(sd<0?20:0),rr(1.1,1.5),Math.floor(rnd()*4),flowers)}
    [[90,860,1.6],[1530,860,1.6],[700,880,1.4],[1080,880,1.5]].forEach(function(f,i){flower(front,f[0],f[1],f[2],i%4,flowers)});
    // big grass in corners
    for(var g2=0;g2<10;g2++){var gx=g2<5?rr(-20,90):rr(1510,1620);el("path",{d:"M"+f1(gx)+" 900 q"+f1(rr(-20,20))+" -120 "+f1(rr(-40,40))+" "+f1(-rr(180,300)),stroke:rnd()<.5?"#4AA010":"#289440","stroke-width":12,"stroke-linecap":"round",fill:"none"},front)}};
  S.reset=function(){S.u=0;trailPts=[];trail.setAttribute("d","");happy.forEach(function(h){h.setAttribute("opacity",0)});eyes.forEach(function(e){e.setAttribute("opacity",1)});flowers.forEach(function(f){f.hit=false})};
  S.center=function(){var p=path.at(S.u||0);return{x:p.x,y:p.y-70*1.5,sc:1.5}};
  function pose(o){tr(SN,"translate("+f1(o.x)+" "+f1(o.y)+") scale(1.5)");tr(body,"rotate("+f1(o.rot||0)+" 0 0)");
    tr(foot,"translate(-8 -12) scale("+(o.fs||1).toFixed(3)+" 1) translate(8 12)");tr(shell,"translate("+f1(o.shx||0)+" "+f1(o.shy||0)+") rotate("+f1(o.shr||0)+" -18 -20)");
    tr(neck,"translate("+f1(o.nx||0)+" 0)");stalks.forEach(function(s,i){tr(s.g,"rotate("+f1((o.sa||0)+(i?1:-1)*(o.sp||0))+" "+s.x+" "+s.y+") translate(0 "+f1(o.sr||0)+")")});
    eyes.forEach(function(e){tr(e,"translate("+f1(o.lx||0)+" 0)")})}
  S.ambient=function(t,dt,phase){tr(rays,"rotate("+(t*6%360).toFixed(1)+")");cl.forEach(function(c){c.x+=4*dt;if(c.x>1750)c.x=-200;tr(c.g,"translate("+f1(c.x)+" "+c.y+") scale("+c.s+")")});
    var p=path.at(S.u||0);flowersSway(flowers,t,dt,p.x,p.y,phase==="act");
    var bx=760+Math.sin(t*.5)*420,by=430+Math.sin(t*1.3)*60;tr(B.g,"translate("+f1(bx)+" "+f1(by)+") scale("+(Math.cos(t*.5)>0?1.3:-1.3)+" 1.3)");tr(B.w,"scale(1 "+(0.3+.7*Math.abs(Math.sin(t*40))).toFixed(2)+")")};
  S.idle=function(t,dt,attn){var p=path.at(0),o={x:p.x,y:p.y};o.shy=Math.sin(t*1.8)*2;o.fs=1+.01*Math.sin(t*1.8);o.sa=Math.sin(t*.9)*6;o.sp=Math.sin(t*2.3)*4;
    if(t>tw.look){tw.lT=t;tw.look=t+rr(2.6,4)}var lt=t-(tw.lT||-9);if(lt<1.2){o.sr=Math.sin(Math.PI*lt/1.2)*26}
    o.lx=attn?2:Math.sin(t*.7)*1.5;if(attn){o.sa=8;o.sr=-4}pose(o)};
  S.act=function(e,dt,first){var u=clamp(e/S.ACT,0,1),ph=(e/.55)%1,surge=.5-.5*Math.cos(2*Math.PI*ph);
    S.u=u*.985+.0*surge;var p=path.at(S.u),o={x:p.x,y:p.y};o.rot=clamp(path.ang(S.u),-12,12)*.6;o.fs=1+.08*Math.sin(2*Math.PI*ph);o.nx=6*Math.sin(2*Math.PI*ph);o.shx=-3*Math.sin(2*Math.PI*ph);o.shy=-2*surge;o.shr=2*Math.sin(2*Math.PI*ph);
    o.sa=6+4*Math.sin(t2(e)*4);o.sp=4*Math.sin(e*5);o.lx=2;
    trailPts.push(f1(p.x-90*1.5)+" "+f1(p.y-4));if(trailPts.length>1)trail.setAttribute("d","M"+trailPts.join(" L"));
    pose(o);return u>=1};
  function t2(e){return e}
  S.fin=function(e,t,dt){var p=path.at(S.u),o={x:p.x,y:p.y};o.sa=Math.sin(e*8)*10*Math.max(.2,1-e/1.5);o.sp=6+Math.sin(e*10)*6;o.shy=-Math.abs(Math.sin(e*6))*4*Math.max(0,1-e);
    if(e>.25){happy.forEach(function(h){h.setAttribute("opacity",1)});eyes.forEach(function(x){x.setAttribute("opacity",0)})}pose(o)};
  return S}

/* ==========================================================
   ИДИ — утёнок по тропинке к маме-утке
   ========================================================== */
function makeWALK(R){
  var S={};S.vb="0 -84 1600 1067";S.ACT=3.6;S.snd="walk";
  var rays=daySky(R,1330,150),cl=[cloud(R,420,130,.9),cloud(R,1000,90,.6)];
  hill(R,"wFar","M-1600 440 L0 440 C240 380 480 410 700 420 C940 432 1100 380 1340 392 C1460 398 1540 412 1600 410 L3200 410","#CCF0A0");
  R.appendChild(grain(null,["wFar"]));
  var trees=el("g",{},R);[[160,430,.9],[420,412,.8],[780,416,1],[860,420,.8],[1420,402,.9]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  hill(R,"wG","M-1600 540 L0 540 C300 500 600 520 900 515 C1150 510 1350 490 1600 500 L3200 500","#ACD48C");
  // pond on the right
  var pond=el("g",{},R);el("ellipse",{cx:1330,cy:690,rx:330,ry:96,fill:"#98B8FC"},pond);el("ellipse",{cx:1330,cy:682,rx:300,ry:78,fill:"#B8E0E0"},pond);
  var glints=[];for(var i=0;i<6;i++)glints.push({e:el("path",{d:"M0 0 h"+f1(rr(20,40)),stroke:"#FFFFFF","stroke-width":4,"stroke-linecap":"round",opacity:.6},pond),x:rr(1120,1500),y:rr(650,730),ph:rr(0,6)});
  var path=pathObj(R,"M330 790 C520 800 620 720 800 720 C960 720 1020 680 1110 668");
  var soil=el("path",{id:"wPath",d:"",fill:"#FDE6C4"},R),soilEdge=el("path",{d:"",fill:"none",stroke:"#F8B888","stroke-width":10},R);
  var tex=el("g",{},R),back=el("g",{},R),flowers=[];
  // reeds around pond
  var reeds=[];function reed(x,y,h,s){var g=el("g",{transform:"translate("+x+" "+y+") scale("+s+")"},R),inner=el("g",{},g);
    el("path",{d:"M0 0 q-4 "+(-h/2)+" 2 "+(-h),stroke:"#88A848","stroke-width":7,fill:"none","stroke-linecap":"round"},inner);el("rect",{x:-6,y:-h-10,width:14,height:44,rx:7,fill:"#985038"},inner);
    el("path",{d:"M0 0 q16 "+(-h*.35)+" 30 "+(-h*.55),stroke:"#4AA010","stroke-width":6,fill:"none","stroke-linecap":"round"},inner);reeds.push({e:inner,ph:rr(0,6)})}
  [[1030,640,150,.8],[1060,650,190,.9],[1560,650,170,.9],[1590,640,130,.8]].forEach(function(r){reed(r[0],r[1],r[2],r[3])});
  // mama duck on the water
  var M=el("g",{transform:"translate(1250 700) scale(1.25)"},R),MB=el("g",{},M);
  el("ellipse",{cx:0,cy:4,rx:86,ry:16,fill:"#98B8FC"},M);
  el("path",{d:"M-70 -20 C-70 -60 40 -64 60 -36 C70 -20 60 4 30 6 L-50 6 C-66 6 -72 -6 -70 -20Z",fill:"#FFFFFF"},MB);el("path",{d:"M-72 -24 l-22 -14 l10 22Z",fill:"#FFFFFF"},MB);
  el("path",{d:"M-30 -34 C-10 -46 20 -44 30 -30 C10 -26 -14 -24 -30 -34Z",fill:"#EAF1FF"},MB);
  var MH=el("g",{},MB);el("path",{d:"M40 -36 C36 -60 40 -86 58 -96 C80 -106 100 -90 96 -70 C94 -56 80 -48 66 -40Z",fill:"#FFFFFF"},MH);
  el("path",{d:"M92 -78 C108 -80 120 -76 122 -70 C112 -64 100 -64 92 -66Z",fill:"#FF8A20"},MH);el("circle",{cx:80,cy:-82,r:5,fill:"#2C3A5C"},MH);el("circle",{cx:81.5,cy:-84,r:1.6,fill:"#FFFFFF"},MH);el("circle",{cx:82,cy:-70,r:6,fill:"#FCC4BC",opacity:.8},MH);
  var mHappy=el("path",{d:"M75 -82 q5 -6 10 0",stroke:"#2C3A5C","stroke-width":3,fill:"none","stroke-linecap":"round",opacity:0},MH),mEye=MH.childNodes[2];
  // duckling
  var D=el("g",{},R),DS=el("ellipse",{cx:0,cy:0,rx:46,ry:9,fill:"#2C3A5C",opacity:.15},D),DB=el("g",{},D);
  var legL=el("g",{},DB),legR=el("g",{},DB);[[legL,-10],[legR,12]].forEach(function(l){el("path",{d:"M"+l[1]+" -22 V-4",stroke:"#FF8A20","stroke-width":6,"stroke-linecap":"round"},l[0]);el("path",{d:"M"+(l[1]-8)+" -2 L"+(l[1]+14)+" -2 L"+(l[1]+4)+" -10Z",fill:"#FF8A20",stroke:"#FF8A20","stroke-width":4,"stroke-linejoin":"round"},l[0])});
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
  var front=el("g",{},R),tw={blink:2,peep:3,flap:4.5};
  S.init=function(){path.init();var L=[],Rr=[],N=60;
    for(var i=-6;i<=N;i++){var u=i/N,p=path.at(u),a=path.ang(u)*Math.PI/180,w=lerp(70,40,clamp(u,0,1));if(u<0)p={x:p.x+(u*N)*22,y:p.y+(-u*N)*2};
      L.push([p.x+Math.sin(a)*w,p.y-Math.cos(a)*w]);Rr.push([p.x-Math.sin(a)*w,p.y+Math.cos(a)*w])}
    var tip=path.at(1);var d="M"+L.map(function(z){return f1(z[0])+" "+f1(z[1])}).join(" L")+" Q"+f1(tip.x+60)+" "+f1(tip.y-4)+" "+Rr.slice().reverse().map(function(z){return f1(z[0])+" "+f1(z[1])}).join(" L")+"Z";
    soil.setAttribute("d",d);soilEdge.setAttribute("d",d);R.insertBefore(soilEdge,soil);R.insertBefore(grain(null,["wG","wPath"]),pond);
    blades(tex,320,0,1600,510,900,"#88A848",14,2.6);
    for(var j=0;j<40;j++){var p2=path.at(rr(0,1));el("ellipse",{cx:f1(p2.x+rr(-30,30)),cy:f1(p2.y+rr(-24,24)),rx:f1(rr(3,6)),ry:f1(rr(2,3.5)),fill:rnd()<.5?"#D0A090":"#F8B888",opacity:.8},tex)}
    for(var k=0;k<16;k++){var u3=rr(.04,.9),p3=path.at(u3),sd=rnd()<.5?-1:1;flower(sd<0?back:front,p3.x+rr(-30,30),p3.y+sd*rr(60,110)-(sd<0?10:0),rr(1,1.4),Math.floor(rnd()*4),flowers)}
    [[90,860,1.5],[640,880,1.4],[960,870,1.3],[160,620,1]].forEach(function(f,i){flower(front,f[0],f[1],f[2],i%4,flowers)})};
  S.reset=function(){S.u=0;dHappy.setAttribute("opacity",0);mHappy.setAttribute("opacity",0);mEye.setAttribute("opacity",1);flowers.forEach(function(f){f.hit=false})};
  function sc(u){return lerp(1.45,1.15,u)}
  S.center=function(){var p=path.at(S.u||0),s=sc(S.u||0);return{x:p.x+10*s,y:p.y-60*s,sc:s}};
  function pose(o){tr(D,"translate("+f1(o.x)+" "+f1(o.y)+") scale("+o.sc.toFixed(3)+")");tr(DB,"translate(0 "+f1(-(o.h||0))+") rotate("+f1(o.rot||0)+" 0 -30)");
    tr(legL,"translate(0 "+f1(-(o.l1||0))+")");tr(legR,"translate(0 "+f1(-(o.l2||0))+")");tr(head,"rotate("+f1(o.hd||0)+" 30 -70)");tr(wing,"rotate("+f1(o.wg||0)+" 4 -56)");
    tr(beak,"rotate("+f1(o.bk||0)+" 60 -92)");tr(deye,"translate("+f1(o.lx||0)+" 0)");lidK(dlid,46,-104,7.5,o.blink||0)}
  S.ambient=function(t,dt,phase){tr(rays,"rotate("+(t*6%360).toFixed(1)+")");cl.forEach(function(c){c.x+=4*dt;if(c.x>1750)c.x=-200;tr(c.g,"translate("+f1(c.x)+" "+c.y+") scale("+c.s+")")});
    glints.forEach(function(g){tr(g.e,"translate("+f1(g.x+Math.sin(t*.6+g.ph)*14)+" "+f1(g.y)+")");g.e.setAttribute("opacity",(.35+.3*Math.sin(t*1.4+g.ph)).toFixed(2))});
    reeds.forEach(function(r){tr(r.e,"rotate("+f1(Math.sin(t*1.3+r.ph)*3)+")")});tr(MB,"translate(0 "+f1(Math.sin(t*1.2)*2)+") rotate("+f1(Math.sin(t*.8)*1.5)+")");
    if(phase!=="fin")tr(MH,"rotate("+f1(Math.sin(t*.7)*4)+" 50 -40)");
    var p=path.at(S.u||0);flowersSway(flowers,t,dt,p.x,p.y,phase==="act")};
  S.idle=function(t,dt,attn){var p=path.at(0),o={x:p.x,y:p.y,sc:sc(0)};o.rot=Math.sin(t*1.6)*2;o.hd=Math.sin(t*1.1)*4;
    if(t>tw.blink){tw.bT=t;tw.blink=t+rr(2,3.6)}var bt=t-(tw.bT||-9);if(bt<.2)o.blink=1-Math.abs(bt-.1)/.1;
    if(t>tw.peep){tw.pT=t;tw.peep=t+rr(2.4,3.8)}var pt=t-(tw.pT||-9);if(pt<.5){o.bk=-Math.abs(Math.sin(pt*Math.PI/.25))*14;o.hd-=6}
    if(t>tw.flap){tw.fT=t;tw.flap=t+rr(3,4.5)}var ft=t-(tw.fT||-9);if(ft<.5){o.wg=-Math.abs(Math.sin(ft*Math.PI/.125))*28;o.h=Math.sin(Math.PI*ft/.5)*8}
    o.lx=attn?2:Math.sin(t*.8)*1.5;if(attn){o.hd=-6}pose(o)};
  S.act=function(e,dt,first){var u=clamp(e/S.ACT,0,1);S.u=easeGo(u);var p=path.at(S.u),o={x:p.x,y:p.y,sc:sc(S.u)},ph=(e/.36)%1,side=Math.floor(e/.36)%2?1:-1;
    var lift=Math.sin(Math.PI*ph);o.rot=side*8*Math.sin(Math.PI*ph)+clamp(path.ang(S.u),-10,10)*.5;o.h=lift*6;o.l1=side<0?lift*10:0;o.l2=side>0?lift*10:0;o.hd=-4+side*3;o.wg=-6;o.lx=2;
    pose(o);return u>=1};
  S.fin=function(e,t,dt){var p=path.at(1),o={x:p.x,y:p.y,sc:sc(1)};var j=e<.6?Math.sin(Math.PI*e/.3):0;o.h=Math.abs(j)*12;o.wg=-Math.abs(Math.sin(e*14))*30*Math.max(0,1-e/1.2);o.hd=Math.sin(e*4)*6;
    if(e>.25){dHappy.setAttribute("opacity",1);o.blink=1;mHappy.setAttribute("opacity",1);mEye.setAttribute("opacity",0)}
    tr(MH,"rotate("+f1(Math.sin(e*5)*8*Math.max(0,1-e/1.8)-6)+" 50 -40)");pose(o)};
  return S}

/* ==========================================================
   СКАЧИ — лошадка галопом через заборчик к стогу сена
   ========================================================== */
function makeGALLOP(R){
  var S={};S.vb="0 -84 1600 1067";S.ACT=3.78;S.snd="gallop";
  var rays=daySky(R,1360,140),cl=[cloud(R,320,120,1),cloud(R,860,80,.7)];
  hill(R,"gFar","M-1600 450 L0 450 C200 400 450 420 680 430 C900 440 1080 392 1320 400 C1460 405 1540 420 1600 418 L3200 418","#CCF0A0");R.appendChild(grain(null,["gFar"]));
  var trees=el("g",{},R);[[120,440,.9],[520,426,.85],[600,430,.7],[1060,398,1],[1500,414,.9]].forEach(function(t){tree(trees,t[0],t[1],t[2])});
  // barn far right
  var barn=el("g",{transform:"translate(1390 470) scale(.9)"},R);el("path",{d:"M-90 0 V-90 L0 -150 L90 -90 V0Z",fill:"#CC1A14"},barn);el("path",{d:"M-100 -86 L0 -156 L100 -86",stroke:"#FFFCDC","stroke-width":10,fill:"none","stroke-linejoin":"round"},barn);
  el("rect",{x:-30,y:-70,width:60,height:70,fill:"#985038"},barn);el("path",{d:"M-30 -70 L30 0 M30 -70 L-30 0",stroke:"#FFFCDC","stroke-width":5},barn);el("rect",{x:-24,y:-124,width:48,height:28,fill:"#FFFCDC"},barn);
  hill(R,"gG","M-1600 560 L0 560 C300 520 600 540 900 535 C1150 530 1350 512 1600 520 L3200 520","#ACD48C");
  hill(R,"gG2","M-1600 700 L0 700 C320 676 700 690 1000 684 C1260 680 1440 670 1600 674 L3200 674","#88A848");
  R.appendChild(grain(null,["gG","gG2"]));
  var tex=el("g",{},R);blades(tex,160,0,1600,530,700,"#88A848",12,2.4);blades(tex,280,0,1600,680,900,"#6E9A30",16,2.8);
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
  function scl(u){return lerp(1.15,.95,u)}
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
  var S={};S.vb="0 -84 1600 1067";S.ACT=2.9;S.snd="knock";
  bgRect(R,"url(#gDay)");var cl=[cloud(R,1180,110,.9),cloud(R,260,80,.6)];
  // forest rows
  var far=el("g",{},R);for(var i=0;i<16;i++)el("circle",{cx:i*110-20+rr(-20,20),cy:rr(430,470),r:rr(70,100),fill:"#ACD48C"},far);
  var mid=el("g",{},R);for(i=0;i<12;i++){var x=i*150+rr(-30,30);el("rect",{x:x-10,y:470,width:20,height:120,fill:"#985038"},mid);el("circle",{cx:x,cy:rr(450,490),r:rr(70,90),fill:"#88A848"},mid)}
  hill(R,"kG","M-1600 640 L0 640 C300 610 700 625 1000 620 C1250 616 1440 606 1600 612 L3200 612","#88A848");R.appendChild(grain(null,["kG"]));
  var tex=el("g",{},R);blades(tex,300,0,1600,610,900,"#6E9A30",16,2.8);
  [[300,800,1],[1320,760,.9],[1080,860,1.1]].forEach(function(m){var g=el("g",{transform:"translate("+m[0]+" "+m[1]+") scale("+m[2]+")"},R);el("path",{d:"M-10 0 q-4 -28 2 -36 h16 q6 8 2 36z",fill:"#FFFCDC"},g);el("path",{d:"M-38 -30 q38 -54 76 0 q-38 10 -76 0z",fill:"#CC1A14"},g);[[-18,-38,6],[6,-48,7],[22,-34,5]].forEach(function(z){el("circle",{cx:z[0],cy:z[1],r:z[2],fill:"#FFFFFF"},g)})});
  var flowers=[];[[160,860,1.4],[520,880,1.3],[900,890,1.2],[1480,880,1.4],[1200,700,1]].forEach(function(f,i){flower(R,f[0],f[1],f[2],i%4,flowers)});
  // big trunk
  var T=el("g",{},R);el("path",{d:"M540 1000 C556 700 560 300 566 -200 L716 -200 C720 300 724 700 760 1000Z",fill:"#985038"},T);
  el("path",{d:"M600 -100 q-10 200 6 420 M680 100 q12 220 -4 400 M630 520 q-8 160 4 320",stroke:"#7A3E2C","stroke-width":7,fill:"none","stroke-linecap":"round",opacity:.6},T);
  el("path",{d:"M520 1000 C560 960 580 920 590 880 M770 1000 C730 960 714 920 708 880",stroke:"#985038","stroke-width":30,fill:"none","stroke-linecap":"round"},T);
  [[600,-90,170],[700,-60,150],[520,-40,120],[780,-30,110]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#289440"},T)});[[640,-60,60],[720,-30,40]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#4AA010",opacity:.5},T)});
  // hole + caterpillar
  var HX=678,HY=330,hole=el("g",{transform:"translate("+HX+" "+HY+")"},T),holeS=el("g",{},hole);el("ellipse",{cx:0,cy:0,rx:26,ry:34,fill:"#7A3E2C"},holeS);el("ellipse",{cx:2,cy:2,rx:19,ry:27,fill:"#2C3A5C"},holeS);
  var catWrap=el("g",{"clip-path":"url(#holeClip)"},hole),cat=el("g",{},catWrap);el("circle",{cx:0,cy:0,r:15,fill:"#70CC10"},cat);el("circle",{cx:-5,cy:-3,r:3,fill:"#2C3A5C"},cat);el("circle",{cx:5,cy:-3,r:3,fill:"#2C3A5C"},cat);
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
  S.reset=function(){S.k=-1;tr(holeS,"scale(0)");tr(cat,"translate(0 40)");wHappy.setAttribute("opacity",0);weye.setAttribute("opacity",1);S.y=WY};
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
    tr(holeS,"scale(1)");var c=clamp((e-.3)/.4,0,1);tr(cat,"translate(0 "+f1(40-40*(1-Math.pow(1-c,3)))+")");
    if(e>.3){wHappy.setAttribute("opacity",1);weye.setAttribute("opacity",0)}pose(o)};
  return S}
