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
  makeCRAWL:{lx:1,ov:[["translate(150 560)",150,566,120],["translate(560 570)",560,576,100],["translate(920 555)",920,561,130],["translate(1260 565)",1260,571,110],["translate(1720 560)",1720,566,120]]},
  makeWALK:{lx:1},
  makeGALLOP:{lx:1,ov:[["translate(1390 470)",1390,472,95],["translate(1290 690)",1290,692,120]]},
  makeDANCE:{lx:1,ov:[["translate(380 690)",380,692,140],["translate(1230 760)",1230,762,50]]},
  makeSWING:{lx:-1},
  makeSIT:{lx:1,ov:[["translate(430 640)",430,642,175]]},
  makeLIE:{lx:1,ov:[["translate(500 560)",500,562,46]]},
  makeSTAND:{lx:-1,ov:[["translate(380 1000)",380,1004,126],["translate(1360 1010)",1360,1014,136],["translate(1040 990)",1040,994,95]]}
};
window.S2ON=1;
var DK="#2C3A5C",S2N=0,S2MEAS=null,S2LX=-1;
/* тень шерсти и предметов персонажа — соседний тон из палитры */
var S2FUR={"#C3CFE2":["#8C98B4",.6],"#A8B0C8":["#8C98B4",.6],"#EAF1FF":["#C6D2E4",.9],"#FFFCDC":["#C6D2E4",.9],"#FFFFFF":["#C6D2E4",.9],"#FDE6C4":["#F8B888",.6],
  "#D0A090":["#A17269",.6],"#C8987E":["#A17269",.6],"#985038":["#7A3E2C",.6],"#C47860":["#985038",.5],"#7A3E2C":["#5E2E20",.6],"#86442F":["#5E2E20",.6],
  "#6E3626":["#5E2E20",.6],"#F97A4F":["#E6615C",.65],"#FF8A20":["#DC8818",.6],"#FFD400":["#D2B205",.5],"#F8B888":["#C77A62",.45],"#FFC880":["#F8B888",.7],
  "#F8A488":["#C47860",.45],"#70CC10":["#4AA010",.6],"#5CB818":["#4AA010",.6],"#4AA010":["#289440",.6],"#6B91D6":["#20477C",.35]};
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
    var base=line?st:f,sh=fur?(S2FUR[base]||[DK,.2]):(base==="#FFFFFF"?["#D3E2FF",1]:[DK,.2]);
    if(t==="circle"&&!e.getAttribute("transform")){var r=+e.getAttribute("r"),L=s2lune(e.parentNode,+e.getAttribute("cx")||0,+e.getAttribute("cy")||0,r,clamp(r*.28,2,24),lx,sh[0],sh[1]);if(L)e.parentNode.insertBefore(L,e.nextSibling);return}
    s2el(e,clamp(Math.min(b.w,b.h)*.14,2,14),lx,sh[0],sh[1])})}
function s2oval(parent,before,cx,cy,rx){var o=el("ellipse",{cx:cx,cy:cy,rx:rx,ry:f1(rx/11),fill:DK,opacity:.13,"data-ns":1});parent.insertBefore(o,before||parent.firstChild);return o}
/* деревья: овал под кроной */
var s2tree0=tree;tree=function(g,x,y,s){if(window.S2ON)s2oval(g,null,x,y+18*s,26*s);s2tree0(g,x,y,s)};
/* какие формы двигаются сами (меняют свои атрибуты) — им тень-копию не делаем: копия бы не поехала за ними */
var S2ATTR=["d","cx","cy","r","rx","ry","x","y","width","height","transform","opacity","fill","visibility","points"];
function s2moving(R,S){var all=[].slice.call(R.querySelectorAll("circle,ellipse,rect,path")),snap=all.map(function(e){return S2ATTR.map(function(a){return e.getAttribute(a)}).join("|")}),mv=[];
  try{S.reset();var t=0,dt=.05;for(var i=0;i<40;i++){t+=dt;S.ambient(t,dt,"ready");S.idle(t,dt,i>20)}
    for(var e=0;e<=S.ACT+.05;e+=dt){t+=dt;S.ambient(t,dt,"act");if(S.act(e,dt,e===0,t))break}
    for(var e2=0;e2<3.2;e2+=dt){t+=dt;S.ambient(t,dt,"fin");S.fin(e2,t,dt)}}catch(x){}
  all.forEach(function(e,i){if(S2ATTR.map(function(a){return e.getAttribute(a)}).join("|")!==snap[i])mv.push(e)});
  S.reset();return mv}
/* главный вызов: после S.init(). svg на время прохода показываем (getCTM/getBBox), потом снова прячем */
function style2(R,S,name,svg){var K=S2K[name];if(!K||!S.ch)return null;window.S2ON=1;S2LX=K.lx;
  var disp=svg.style.display;svg.style.display="";
  var ch=S.ch();
  if(K.fur)Object.keys(K.fur).forEach(function(u){[].forEach.call(ch.querySelectorAll("[fill='"+u+"']"),function(e){e.setAttribute("fill",K.fur[u])})});
  var mv=s2moving(R,S);mv.forEach(function(e){e.setAttribute("data-ns",1)});
  (K.ov||[]).forEach(function(o){var g=[].slice.call(R.querySelectorAll("g[transform]")).filter(function(x){return x.getAttribute("transform").indexOf(o[0])===0})[0];if(g)s2oval(g.parentNode,g,o[1],o[2],o[3])});
  /* солнце и луна без тени: группы со свечением */
  [].forEach.call(R.querySelectorAll("[fill='url(#gMoon)'],[fill='url(#sunGlow)']"),function(e){e.parentNode.setAttribute("data-ns",1)});
  s2all(R,false,function(e){return ch.contains(e)});
  s2all(ch,true,function(e){var f=(e.getAttribute("fill")||"").toUpperCase();return f==="#FC88A8"||f==="#FCC4BC"||f==="#F8A488"&&e.getAttribute("r")<12});
  mv.forEach(function(e){e.removeAttribute("data-ns")});
  /* плоский овал персонажа — 13%; мягкая тень — на фигуру без овала */
  var oval=[].slice.call(ch.children).filter(function(c){return c.tagName==="ellipse"&&(c.getAttribute("fill")||"").toUpperCase()===DK&&+c.getAttribute("ry")<20})[0],fig=ch;
  if(oval){oval.setAttribute("opacity",.13);fig=el("g",{});ch.insertBefore(fig,oval.nextSibling);[].slice.call(ch.children).forEach(function(c){if(c!==fig&&c!==oval)fig.appendChild(c)})}
  var m=fig.getCTM(),vb=S.vb.split(" ").map(Number),sc=m?Math.hypot(m.a,m.b)/(svg.getCTM?1:1):1;
  /* масштаб фигуры относительно кадра: единица фильтра = (ширина кадра/1600)/масштаб группы */
  var root=svg.getScreenCTM(),fm=fig.getScreenCTM(),k=(root&&fm)?Math.hypot(fm.a,fm.b)/Math.hypot(root.a,root.b):1,unit=(vb[2]/1600)/(k||1);
  var b=fig.getBBox(),id="s2f"+(S2N++),fl=el("filter",{id:id,filterUnits:"userSpaceOnUse",x:f1(b.x-b.width),y:f1(b.y-b.height),width:f1(b.width*3),height:f1(b.height*3),"color-interpolation-filters":"sRGB"},DEFS);
  el("feDropShadow",{dx:0,dy:f1(11*unit),stdDeviation:f1(15*unit),"flood-color":DK,"flood-opacity":.28},fl);
  var on=true;fig.setAttribute("filter","url(#"+id+")");
  svg.style.display=disp;
  return {soft:function(v){if(v===on)return;on=v;if(v)fig.setAttribute("filter","url(#"+id+")");else fig.removeAttribute("filter")},cam:!!S.cam}}
