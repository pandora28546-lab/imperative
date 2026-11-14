/* ==========================================================
   СТИЛЬ 2 — тени одним тоном на всём (персонаж, фон, предметы),
   мягкая тень у персонажа и плоский овал под ним и под деревьями/кустами.
   Порт из «Гардероба 2»: lune — для кругов, остальное — копия формы под clip-path
   (формы с обводкой — под mask с областью только вокруг формы).
   Сцена отдаёт S.ch() — группу персонажа. Свет — от солнца: lx = -1 слева, +1 справа.
   ========================================================== */
var S2K={
  makeFLY:{lx:1,fur:{"url(#gOwl)":"#C47860"}},
  makeJUMP:{lx:1,fur:{"url(#gFrog)":"#70CC10"}},
  makeSWIM:{lx:-1,fur:{"url(#gFish)":"#FF8A20"}},
  makeBEGI:{lx:1,fur:{"url(#bodyShade)":"#C3CFE2","url(#headShade)":"#C3CFE2"},ov:[["translate(1150 800)",1150,806,60],["translate(1330 715)",1330,716,34]]},
  makeCRAWL:{lx:1,soft:false,ov:[["translate(150 572)",150,626,120],["translate(560 578)",560,624,100],["translate(920 566)",920,626,130],["translate(1260 570)",1260,620,110],["translate(1720 572)",1720,626,120]]},
  makeWALK:{lx:1},
  makeGALLOP:{lx:1,ov:[["translate(1390 470)",1390,472,95],["translate(1290 690)",1290,692,120]]},
  makeDANCE:{lx:1,ov:[["translate(380 690)",380,692,140],["translate(1230 760)",1230,762,50]]},
  makeSWING:{lx:-1},
  makeSIT:{lx:1,ov:[["translate(430 640)",430,642,175]]},
  makeLIE:{lx:1,ov:[["translate(500 560)",500,562,46]]},
  makeSTAND:{lx:-1,ov:[["translate(380 1000)",380,1004,126],["translate(1360 1010)",1360,1014,136],["translate(1040 990)",1040,994,95]]},
  /* игра 2 */
  makeDIG:{lx:1,soft:false},
  makeCATCH:{lx:1},
  makeCARRY:{lx:-1},
  makePULL:{lx:-1,ov:[["translate(420 650)",420,688,72],["translate(560 656)",560,694,72],["translate(1240 650)",1240,688,72]]},
  makeROLL:{lx:-1,ov:[["translate(200 520)",200,524,70],["translate(460 510)",460,514,55],["translate(860 504)",860,508,75],["translate(1180 500)",1180,504,60],["translate(1460 506)",1460,510,65],["translate(1390 770)",1390,773,100]]},
  makeWASH:{lx:-1},
  makeTHROW:{lx:1},
  makeKNOCK:{lx:-1,ov:[["translate(300 800)",300,802,34],["translate(1320 760)",1320,762,30],["translate(1080 860)",1080,862,37]]},
  makeEAT:{lx:-1},
  makeDRINK:{lx:-1},
  makeBLOW:{lx:1},
  makeWATER:{lx:1},
  /* игра 3 */
  makeCLAP:{lx:1},
  makeSING:{lx:-1},
  makeDRAW:{lx:-1},
  makeSLEEP:{lx:1},
  makeCLIMB:{lx:1},
  makeDOWN:{lx:1},
  makeHIDE:{lx:-1},
  makeOUT:{lx:1},
  makeOPEN:{lx:1,soft:false},
  makeCLOSE:{lx:-1},
  makeTAKE:{lx:1},
  makeGIVE:{lx:-1}
};
window.S2ON=1;
var DK="#2C3A5C",S2N=0,S2MEAS=null,S2LX=-1;
/* тень шерсти и предметов персонажа — соседний тон из палитры */
var S2FUR={"#C3CFE2":["#8C98B4",.6],"#A8B0C8":["#8C98B4",.6],"#EAF1FF":["#C6D2E4",.9],"#FFFCDC":["#C6D2E4",.9],"#FFFFFF":["#C6D2E4",.9],"#FDE6C4":["#F8B888",.6],
  "#D0A090":["#A17269",.6],"#C8987E":["#A17269",.6],"#985038":["#7A3E2C",.6],"#C47860":["#985038",.5],"#7A3E2C":["#5E2E20",.6],"#86442F":["#5E2E20",.6],
  "#6E3626":["#5E2E20",.6],"#F97A4F":["#E6615C",.65],"#FF8A20":["#DC8818",.6],"#FFD400":["#D2B205",.5],"#F8B888":["#C77A62",.45],"#FFC880":["#F8B888",.7],
  "#F8A488":["#C47860",.45],"#70CC10":["#4AA010",.6],"#5CB818":["#4AA010",.6],"#4AA010":["#289440",.6],"#6B91D6":["#20477C",.35],
  "#8C98B4":["#2C3A5C",.3],"#7A869E":["#2C3A5C",.3],"#BABABA":["#8C98B4",.6],"#A0A0A0":["#8C98B4",.6],"#5A5A5A":["#2C3A5C",.35],"#E0E0E0":["#BABABA",.6],
  "#5E2E20":["#2C3A5C",.3],"#DC8818":["#985038",.45],"#234888":["#2C3A5C",.4],"#F0A858":["#DC8818",.5],"#96CC48":["#4AA010",.6],"#B0E060":["#70CC10",.6],
  "#F8B0C0":["#FC88A8",.5],"#FCD0DC":["#FC88A8",.4],"#C08A78":["#A17269",.6],"#E0683E":["#C3200E",.35],"#A86448":["#7A3E2C",.6],"#D3E2FF":["#ADC7FE",.8],
  "#B890E0":["#86278D",.3],"#C8A8EC":["#B890E0",.6],"#8A68B8":["#6D1C70",.35],"#C45A7A":["#86278D",.3],"#289440":["#2C3A5C",.25],"#2E9E46":["#2C3A5C",.25],
  "#FDDDD0":["#FAB78E",.6],"#CC1A14":["#B20003",.45],"#DCB510":["#A2A24D",.5],"#ADC7FE":["#6B91D6",.5],"#FFF8A8":["#D2B205",.4]};
window.S2MISS={};
function s2lune(p,cx,cy,r,k,lx,col,op){var dx=k*lx,dy=-k*.9,d=Math.hypot(dx,dy);if(d>=2*r)return;var mx=cx+dx/2,my=cy+dy/2,h=Math.sqrt(r*r-d*d/4),px=-dy/d,py=dx/d;
  var x1=mx+h*px,y1=my+h*py,x2=mx-h*px,y2=my-h*py;if((x1-cx)*(-dy)-(y1-cy)*(-dx)<0){var tx=x1,ty=y1;x1=x2;y1=y2;x2=tx;y2=ty}
  return el("path",{d:"M"+f1(x1)+" "+f1(y1)+" A"+r+" "+r+" 0 1 1 "+f1(x2)+" "+f1(y2)+" A"+r+" "+r+" 0 0 0 "+f1(x1)+" "+f1(y1)+"Z",fill:col,opacity:op,"data-ns":1},p)}
function s2box(e){var t=e.tagName,n=function(a){return +(e.getAttribute(a)||0)};
  if(t==="circle"){var r=n("r");return {x:n("cx")-r,y:n("cy")-r,w:2*r,h:2*r}}
  if(t==="ellipse")return {x:n("cx")-n("rx"),y:n("cy")-n("ry"),w:2*n("rx"),h:2*n("ry")};
  if(t==="rect")return {x:n("x"),y:n("y"),w:n("width"),h:n("height")};
  if(!S2MEAS){S2MEAS=document.createElementNS(NS,"svg");S2MEAS.setAttribute("style","position:absolute;left:-9999px;top:0;width:10px;height:10px;visibility:hidden");document.body.appendChild(S2MEAS)}
  var c=el("path",{d:e.getAttribute("d")||"M0 0"},S2MEAS),b;try{b=c.getBBox()}catch(x){b={x:0,y:0,width:0,height:0}}c.remove();return {x:b.x,y:b.y,w:b.width,h:b.height}}
function s2el(src,k,lx,col,op){var par=src.parentNode,id="s2c"+(S2N++),st=src.getAttribute("stroke"),c=src.cloneNode(false),g;c.removeAttribute("opacity");c.removeAttribute("id");
  if(st&&st!=="none"){var mb=src.getAttribute("transform")?null:s2box(src),sw=+(src.getAttribute("stroke-width")||1),pad=sw/2+k+4;
    var m=el("mask",mb?{id:id,maskUnits:"userSpaceOnUse",x:f1(mb.x-pad),y:f1(mb.y-pad),width:f1(mb.w+2*pad),height:f1(mb.h+2*pad)}:{id:id,maskUnits:"userSpaceOnUse",x:-3000,y:-3000,width:6000,height:6000},DEFS);
    if(c.getAttribute("fill")&&c.getAttribute("fill")!=="none")c.setAttribute("fill","#FFFFFF");c.setAttribute("stroke","#FFFFFF");m.appendChild(c);g=el("g",{mask:"url(#"+id+")","data-ns":1})}
  else{var cp=el("clipPath",{id:id},DEFS);cp.appendChild(c);g=el("g",{"clip-path":"url(#"+id+")","data-ns":1})}
  par.insertBefore(g,src.nextSibling);
  var s1=src.cloneNode(false);s1.removeAttribute("id");if(s1.getAttribute("fill")&&s1.getAttribute("fill")!=="none")s1.setAttribute("fill",col);s1.setAttribute("opacity",op);if(st&&st!=="none")s1.setAttribute("stroke",col);g.appendChild(s1);
  var w=el("g",{transform:"translate("+f1(k*lx)+" "+f1(-k*.9)+")"},g),s2=src.cloneNode(false);s2.removeAttribute("id");s2.removeAttribute("opacity");w.appendChild(s2);return g}
/* проход по группе: fur — персонаж (тон из S2FUR), иначе фон и предметы (#2C3A5C 20%, белое — #D3E2FF) */
function s2all(root,fur,skip){[].slice.call(root.querySelectorAll("circle,ellipse,rect,path")).forEach(function(e){
    if(e.closest("defs,clipPath,mask,pattern,[data-ns]"))return;if(skip&&skip(e))return;
    var f=(e.getAttribute("fill")||"").toUpperCase(),st=(e.getAttribute("stroke")||"none").toUpperCase(),sw=+(e.getAttribute("stroke-width")||0);
    var line=(!f||f==="NONE")&&fur&&st!=="NONE"&&st.indexOf("URL")<0&&sw>=14&&e.getAttribute("stroke-linecap")==="round";
    if(!line&&(!f||f==="NONE"||f.indexOf("URL")===0||f===DK))return;
    if(e.getAttribute("opacity")!=null||e.getAttribute("fill-opacity")!=null||e.getAttribute("visibility")==="hidden")return;
    for(var q=e.parentNode;q&&q!==root;q=q.parentNode)if(q.getAttribute&&q.getAttribute("opacity")!=null&&+q.getAttribute("opacity")<1)return;
    var b=s2box(e);if(line)b={w:b.w+sw,h:b.h+sw};if(b.w<14||b.h<14||b.w>1100||(b.h>800&&b.w>400))return;
    var t=e.tagName;if(t==="ellipse"&&b.h<b.w*.35)return;
    /* зеркальная группа — сдвиг света в обратную сторону, чтобы свет в кадре оставался с той же стороны */
    var lx=S2LX,m=e.getCTM&&e.getCTM();if(m&&m.a<0)lx=-lx;
    var base=line?st:f;if(fur&&!S2FUR[base])S2MISS[base]=(S2MISS[base]||0)+1;var sh=fur?(S2FUR[base]||[DK,.2]):(base==="#FFFFFF"?["#D3E2FF",1]:[DK,.2]);
    if(t==="circle"&&!e.getAttribute("transform")){var r=+e.getAttribute("r"),L=s2lune(e.parentNode,+e.getAttribute("cx")||0,+e.getAttribute("cy")||0,r,clamp(r*.28,2,24),lx,sh[0],sh[1]);if(L)e.parentNode.insertBefore(L,e.nextSibling);return}
    s2el(e,clamp(Math.min(b.w,b.h)*.14,2,14),lx,sh[0],sh[1])})}
function s2eyes(ch){var P=[];[].forEach.call(ch.querySelectorAll("circle,ellipse"),function(e){if((e.getAttribute("fill")||"").toUpperCase()!==DK)return;var b=s2box(e);if(b.w<40)P.push(b)});
  return function(e){var t=e.tagName;if(t!=="circle"&&t!=="ellipse")return false;var b=s2box(e);
    return P.some(function(p){var cx=p.x+p.w/2,cy=p.y+p.h/2;return cx>b.x&&cx<b.x+b.w&&cy>b.y&&cy<b.y+b.h&&b.w<=p.w*5&&b.w>p.w*1.05})}}
/* одна тень на группу форм как на одно целое (лепестки цветка, голова со щеками):
   маска = формы минус те же формы со сдвигом к свету; поверх — заливка тенью, слой встаёт после after */
function s2union(parts,after,col,op,k,lx){if(!parts.length)return;var bx=null;parts.forEach(function(e){var b=s2box(e),m=Math.max(b.w,b.h);b={x:b.x-m,y:b.y-m,w:b.w+2*m,h:b.h+2*m};
    bx=bx?{x:Math.min(bx.x,b.x),y:Math.min(bx.y,b.y),x2:Math.max(bx.x2,b.x+b.w),y2:Math.max(bx.y2,b.y+b.h)}:{x:b.x,y:b.y,x2:b.x+b.w,y2:b.y+b.h}});
  var id="s2c"+(S2N++),m=el("mask",{id:id,maskUnits:"userSpaceOnUse",x:f1(bx.x),y:f1(bx.y),width:f1(bx.x2-bx.x),height:f1(bx.y2-bx.y)},DEFS),sh=el("g",{transform:"translate("+f1(k*lx)+" "+f1(-k*.9)+")"});
  var g=el("g",{mask:"url(#"+id+")",opacity:op,"data-ns":1});
  parts.forEach(function(e){var a=e.cloneNode(false);a.removeAttribute("id");a.removeAttribute("opacity");["data-face","data-ns","data-faceafter"].forEach(function(x){a.removeAttribute(x)});
    var w=a.cloneNode(false),b=a.cloneNode(false),c=a.cloneNode(false);w.setAttribute("fill","#FFFFFF");m.appendChild(w);b.setAttribute("fill","#000000");sh.appendChild(b);c.setAttribute("fill",col);g.appendChild(c);e.setAttribute("data-ns",1)});
  m.appendChild(sh);after.parentNode.insertBefore(g,after.nextSibling)}
/* облако — одна тень на всё облако: голубая подложка из тех же кругов и белые копии со сдвигом к свету, обрезанные по облаку (без швов между кругами) */
function s2clouds(R){[].forEach.call(R.querySelectorAll("g"),function(g){var cs=[].filter.call(g.children,function(c){return c.tagName==="circle"&&(c.getAttribute("fill")||"").toUpperCase()==="#FFFFFF"&&c.getAttribute("opacity")==null});
    if(cs.length<4||cs.length!==[].filter.call(g.children,function(c){return c.tagName==="circle"}).length)return;
    var id="s2c"+(S2N++),cp=el("clipPath",{id:id},DEFS),last=cs[cs.length-1],w=el("g",{"clip-path":"url(#"+id+")","data-ns":1});g.insertBefore(w,last.nextSibling);
    var rs=0;cs.forEach(function(c){rs+=+c.getAttribute("r");c.setAttribute("data-ns",1);cp.appendChild(c.cloneNode(false))});var k=rs/cs.length*.22;
    /* голубая тень видна только на небе темнее неё: облако в нижней светлой части дневного неба (gDay, светлее #D3E2FF с y≈330) подтеняем на тон темнее — #ADC7FE */
    var ty=/translate\(\s*[-\d.]+[ ,]+([-\d.]+)/.exec(g.getAttribute("transform")||""),cy=ty?+ty[1]:0,day=!!R.querySelector("[fill='url(#gDay)']"),ccol=day&&cy>230?"#ADC7FE":"#D3E2FF";
    cs.forEach(function(c){var a=c.cloneNode(false);a.removeAttribute("data-ns");a.setAttribute("fill",ccol);w.appendChild(a)});
    var sh=el("g",{transform:"translate("+f1(k*S2LX)+" "+f1(-k*.9)+")"},w);cs.forEach(function(c){var a=c.cloneNode(false);a.removeAttribute("data-ns");sh.appendChild(a)})})}
function s2oval(parent,before,cx,cy,rx){var o=el("ellipse",{cx:cx,cy:cy,rx:rx,ry:f1(rx/11),fill:DK,opacity:.13,"data-ns":1});parent.insertBefore(o,before||parent.firstChild);return o}
/* деревья: овал под кроной */
var s2tree0=tree;tree=function(g,x,y,s){if(window.S2ON)s2oval(g,null,x,y+18*s,26*s);s2tree0(g,x,y,s)};
/* кусты игры 3: овал под кустом */
if(typeof bush==="function"){var s2bush0=bush;bush=function(g,x,y,s){if(window.S2ON)s2oval(g,null,x,y+18*s,62*s);s2bush0(g,x,y,s)}}
/* какие формы двигаются сами (меняют свои атрибуты) — им тень-копию не делаем: копия бы не поехала за ними */
var S2ATTR=["d","cx","cy","r","rx","ry","x","y","width","height","transform","opacity","fill","visibility","points"];
function s2moving(R,S){var all=[].slice.call(R.querySelectorAll("circle,ellipse,rect,path")),snap=all.map(function(e){return S2ATTR.map(function(a){return e.getAttribute(a)}).join("|")}),mv=[];
  try{S.reset();var t=-1e4,dt=.05; /* время прогона — в далёком прошлом: метки моргания и подёргиваний сцены остаются позади настоящих часов игры */for(var i=0;i<40;i++){t+=dt;S.ambient(t,dt,"ready");S.idle(t,dt,i>20)}
    for(var e=0;e<=S.ACT+.05;e+=dt){t+=dt;S.ambient(t,dt,"act");if(S.act(e,dt,e===0,t))break}
    for(var e2=0;e2<3.2;e2+=dt){t+=dt;S.ambient(t,dt,"fin");S.fin(e2,t,dt)}}catch(x){}
  all.forEach(function(e,i){if(S2ATTR.map(function(a){return e.getAttribute(a)}).join("|")!==snap[i])mv.push(e)});
  S.reset();return mv}
/* главный вызов: после S.init(). svg на время прохода показываем (getCTM/getBBox), потом снова прячем */
function style2(R,S,name,svg){var K=S2K[name];if(!K||!S.ch)return null;window.S2ON=1;S2LX=K.lx;
  var disp=svg.style.display;svg.style.display="";
  /* S.ch() — группа персонажа или список групп (второй персонаж, ближняя лапа отдельным слоем; data-nosoft — без мягкой тени) */
  var chs=[].concat(S.ch()),ch=chs[0];
  if(K.fur)chs.forEach(function(c){Object.keys(K.fur).forEach(function(u){[].forEach.call(c.querySelectorAll("[fill='"+u+"']"),function(e){e.setAttribute("fill",K.fur[u])})})});
  (K.ns||[]).forEach(function(f){f(R)});
  var mv=s2moving(R,S);mv.forEach(function(e){e.setAttribute("data-ns",1)});
  (K.ov||[]).forEach(function(o){var g=[].slice.call(R.querySelectorAll("g[transform]")).filter(function(x){return x.getAttribute("transform").indexOf(o[0])===0})[0];if(g)s2oval(g.parentNode,g,o[1],o[2],o[3])});
  /* солнце и луна без тени: группы со свечением */
  [].forEach.call(R.querySelectorAll("[fill='url(#gMoon)'],[fill='url(#sunGlow)']"),function(e){e.parentNode.setAttribute("data-ns",1)});
  s2clouds(R);
  [].forEach.call(R.querySelectorAll("[data-union]"),function(g){var ps=[].slice.call(g.children),f=(ps[0].getAttribute("fill")||"").toUpperCase();
    s2union(ps,ps[ps.length-1],f==="#FFFFFF"?"#D3E2FF":DK,f==="#FFFFFF"?1:.2,clamp(Math.min(s2box(ps[0]).w,s2box(ps[0]).h)*.14,2,14),S2LX)});
  chs.forEach(function(c){var fs=[].slice.call(c.querySelectorAll("[data-face]")),af=c.querySelector("[data-faceafter]");if(!fs.length||!af)return;
    var f=(fs[0].getAttribute("fill")||"").toUpperCase(),sh=S2FUR[f]||[DK,.2],b=s2box(fs[0]);s2union(fs,af,sh[0],sh[1],Math.min(b.w,b.h)*.07,S2LX)});
  s2all(R,false,function(e){return chs.some(function(c){return c.contains(e)})});
  chs.forEach(function(c){var isEye=s2eyes(c);
    s2all(c,true,function(e){var f=(e.getAttribute("fill")||"").toUpperCase();return isEye(e)||f==="#FC88A8"||f==="#FCC4BC"||f==="#F8A488"&&e.getAttribute("r")<12})});
  mv.forEach(function(e){e.removeAttribute("data-ns")});
  var root=svg.getScreenCTM(),vb=S.vb.split(" ").map(Number),figs=[];
  chs.forEach(function(c){if(c.hasAttribute("data-nosoft"))return;
    /* плоский овал персонажа — 13%; мягкая тень — на фигуру без овала */
    var oval=[].slice.call(c.children).filter(function(x){return x.tagName==="ellipse"&&(x.getAttribute("fill")||"").toUpperCase()===DK&&+x.getAttribute("ry")<20})[0],fig=c;
    if(oval){oval.setAttribute("opacity",.13);fig=el("g",{});c.insertBefore(fig,oval.nextSibling);[].slice.call(c.children).forEach(function(x){if(x!==fig&&x!==oval)fig.appendChild(x)})}
    /* масштаб фигуры относительно кадра: единица фильтра = (ширина кадра/1600)/масштаб группы */
    var fm=fig.getScreenCTM(),k=(root&&fm)?Math.hypot(fm.a,fm.b)/Math.hypot(root.a,root.b):1,unit=(vb[2]/1600)/(k||1);
    var b=fig.getBBox(),id="s2f"+(S2N++),fl=el("filter",{id:id,filterUnits:"userSpaceOnUse",x:f1(b.x-b.width),y:f1(b.y-b.height),width:f1(b.width*3),height:f1(b.height*3),"color-interpolation-filters":"sRGB"},DEFS);
    el("feDropShadow",{dx:0,dy:f1(11*unit),stdDeviation:f1(15*unit),"flood-color":DK,"flood-opacity":.28},fl);figs.push({g:fig,id:id})});
  function setSoft(v){figs.forEach(function(f){if(v)f.g.setAttribute("filter","url(#"+f.id+")");else f.g.removeAttribute("filter")})}
  var on=K.soft!==false;if(on)setSoft(true);
  svg.style.display=disp;
  return {soft:function(v){if(K.soft===false)return;if(v===on)return;on=v;setSoft(v)},cam:!!S.cam}}
