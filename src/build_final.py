import sys
EXTRA=open('part_g2.js').read()
import re,base64,json
def rep(s,x,y,n=1):
    assert s.count(x)==n,(x[:70],s.count(x)); return s.replace(x,y)
src=open('trio_t.html').read().split('\n')
lib='\n'.join(src[65:89])
a=next(i for i,l in enumerate(src) if l.startswith('var FLY=(function(){'))
b=next(i for i,l in enumerate(src) if l.startswith('/* ---------- engine'))
sc='\n'.join(src[a-3:b])
sc=rep(sc,'var FLY=(function(){\n  var R=$("sc-fly"),S={};','function makeFLY(R){var S={};S.vb="170 20 1300 867";')
sc=rep(sc,'var JUMP=(function(){\n  var R=$("sc-jump"),S={};','function makeJUMP(R){var S={};S.vb="0 -84 1600 1067";')
sc=rep(sc,'var SWIM=(function(){\n  var R=$("sc-swim"),S={};','function makeSWIM(R){var S={};S.vb="0 -84 1600 1067";')
sc=rep(sc,'  return S})();','  return S}',3)
sc=rep(sc,'if(x>660&&x<900&&y<240)continue;','if(x>560&&x<820&&y>90&&y<330)continue;')
sc=rep(sc,'el("g",{transform:"translate(780 150)"},R);','el("g",{transform:"translate(690 205)"},R);')
sc=rep(sc,'d:"M380 470 C560 360 720 560 880 480 S1120 420 1236 668"','d:"M380 470 C520 380 660 320 800 350 C960 384 990 560 870 575 C750 590 720 420 880 360 C1060 300 1380 380 1460 520 C1520 640 1460 720 1360 728"')
sc=rep(sc,'S.ACT=4.0;S.snd="swim";','S.ACT=6.0;S.snd="swim";var fy={x:1,v:0},lastAng=0;')
sc=rep(sc,'S.reset=function(){S.pos={x:380,y:470,sc:1.15};S.rot=0;','S.reset=function(){S.pos={x:380,y:470,sc:1.15};S.rot=0;fy.x=1;fy.v=0;lastAng=0;')
sc=rep(sc,'tr(FB,"rotate("+f1(o.rot||0)+") scale("+(o.sx||1).toFixed(3)+" "+(o.sy||1).toFixed(3)+")");','tr(FB,"rotate("+f1(o.rot||0)+") scale("+(o.sx||1).toFixed(3)+" "+((o.sy||1)*fy.x).toFixed(3)+")");')
sc=rep(sc,'var u=clamp(el_/S.ACT,0,1),e=.55*u+.45*(u-Math.sin(2*Math.PI*u)/(2*Math.PI));','var u=clamp(el_/S.ACT,0,1),e=easeArrive(u,.7),calm=u>.88?.35+.65*(1-u)/.12:1;')
sc=rep(sc,'o.tail=28*Math.sin(2*Math.PI*el_/.5);o.rot=clamp(ang,-35,35)*.75+4*Math.sin(2*Math.PI*el_/.5);','spring(fy,Math.cos(ang*Math.PI/180)>=0?1:-1,90,14,dt);fy.x=clamp(fy.x,-1,1);lastAng=ang;o.tail=28*Math.sin(2*Math.PI*el_/.5)*calm;o.rot=ang+4*Math.sin(2*Math.PI*el_/.5)*calm;')
sc=rep(sc,'o.rot=Math.sin(el_*5)*8*Math.max(0,1-el_/1.6);o.pec=Math.sin(el_*10)*25;','o.rot=lastAng+Math.sin(el_*5)*6*Math.min(1,el_/.4)*Math.max(0,1-el_/1.6);o.pec=Math.sin(el_*10)*25;')
sc=rep(sc,'o.tail=Math.sin(el_*16)*22*Math.max(.3,1-el_/1.2);','o.tail=Math.sin(el_*16)*Math.min(1,el_/.3)*18*Math.max(.3,1-el_/1.2);')
sc=rep(sc,'bubble(o.x+76*o.sc,o.y,.5);pose(o)};','bubble(o.x+Math.cos(lastAng*Math.PI/180)*76*o.sc,o.y,.5);pose(o)};')
sc=rep(sc,'if(u>.85)S.lidT=-38;','if(u>.9)S.lidT=-38;')
sc=rep(sc,'var p=path.getPointAtLength(e*PL),q=path.getPointAtLength(Math.min(PL,e*PL+3)),ang=Math.atan2(q.y-p.y,q.x-p.x)*180/Math.PI;','var pa=Math.max(0,Math.min(PL-4,e*PL)),p=path.getPointAtLength(e*PL),p0=path.getPointAtLength(pa),q=path.getPointAtLength(pa+4),ang=Math.atan2(q.y-p0.y,q.x-p0.x)*180/Math.PI;')
new=open('part_new.js').read()
cw=open('part_cw.js').read()
s3=open('part_s3.js').read()+open('part_dance.js').read()+EXTRA
a=new.index('/* ==========================================================\n   ПОЛЗИ');b=new.index('/* ==========================================================\n   СКАЧИ')
new=new[:a]+cw+new[b:]
# gallop: tracking camera, closer
new=rep(new,'var S={};S.vb="0 -84 1600 1067";S.ACT=3.78;S.snd="gallop";','var S={};S.vb="100 170 1400 933";S.ACT=3.78;S.snd="gallop";')
new=rep(new,'var rays=daySky(R,1360,140),cl=[cloud(R,320,120,1),cloud(R,860,80,.7)];\n  hill(R,"gFar"','var rays=daySky(R,1120,330),cl=[cloud(R,320,330,.9),cloud(R,860,305,.7)];\n  hill(R,"gFar"')
new=rep(new,'blades(tex,280,0,1600,680,900,"#6E9A30",16,2.8);','blades(tex,380,-100,1700,680,1070,"#6E9A30",16,2.8);')
new=rep(new,'function scl(u){return lerp(1.15,.95,u)}','function scl(u){return lerp(1.3,1.15,u)}')
# knock: extreme close-up, lush crown, bark texture, hidden caterpillar
new=rep(new,'var S={};S.vb="0 -84 1600 1067";S.ACT=2.9;S.snd="knock";','var S={};S.vb="330 40 800 533";S.ACT=2.9;S.snd="knock";')
new=rep(new,'var T=el("g",{},R);el("path",{d:"M540 1000 C556 700 560 300 566 -200 L716 -200 C720 300 724 700 760 1000Z",fill:"#985038"},T);','var T=el("g",{},R);el("path",{id:"kTrunk",d:"M540 1000 C556 700 560 300 566 -200 L716 -200 C720 300 724 700 760 1000Z",fill:"#985038"},T);T.appendChild(grain(null,["kTrunk"]));\n  for(var bk=0;bk<46;bk++){var bx=rr(574,708),by=rr(-60,640),bl=rr(50,150);el("path",{d:"M"+f1(bx)+" "+f1(by)+" q"+f1(rr(-8,8))+" "+f1(bl/2)+" "+f1(rr(-4,4))+" "+f1(bl),stroke:rnd()<.6?"#7A3E2C":"#A86448","stroke-width":f1(rr(3,6)),fill:"none","stroke-linecap":"round",opacity:.6},T)}\n  [[600,200,14,22],[690,520,12,18],[606,600,10,16]].forEach(function(k){el("ellipse",{cx:k[0],cy:k[1],rx:k[2],ry:k[3],fill:"#7A3E2C"},T);el("ellipse",{cx:k[0],cy:k[1],rx:k[2]*.55,ry:k[3]*.55,fill:"#A86448"},T)});')
new=rep(new,'[[600,-90,170],[700,-60,150],[520,-40,120],[780,-30,110]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#289440"},T)});[[640,-60,60],[720,-30,40]].forEach(function(c){el("circle",{cx:c[0],cy:c[1],r:c[2],fill:"#4AA010",opacity:.5},T)});',
 'el("path",{d:"M600 150 C540 130 480 120 410 140 L410 154 C480 136 540 146 598 170Z",fill:"#985038"},T);el("path",{d:"M700 110 C780 80 860 76 930 90 L930 102 C860 92 780 98 702 128Z",fill:"#985038"},T);\n  for(var cr=0;cr<34;cr++){var ccx=rr(340,1000),ccy=rr(-120,110);if(ccx>560&&ccx<760)ccy=Math.min(ccy,60);el("circle",{cx:f1(ccx),cy:f1(ccy),r:f1(rr(55,95)),fill:["#289440","#2E9E46","#4AA010"][cr%3]},T)}\n  for(var hl=0;hl<12;hl++)el("circle",{cx:f1(rr(360,980)),cy:f1(rr(-80,90)),r:f1(rr(16,34)),fill:"#70CC10",opacity:.45},T);\n  [[420,150],[400,160],[930,96],[950,104]].forEach(function(l){el("circle",{cx:l[0],cy:l[1],r:26,fill:"#4AA010"},T)});')
new=rep(new,'var catWrap=el("g",{"clip-path":"url(#holeClip)"},hole)','var catWrap=el("g",{"clip-path":"url(#holeClip)"},holeS)')
new=rep(new,'tr(cat,"translate(0 40)");','tr(cat,"translate(0 70)");')
new=rep(new,'tr(cat,"translate(0 "+f1(40-40*(1-Math.pow(1-c,3)))+")");','tr(cat,"translate(0 "+f1(70-70*(1-Math.pow(1-c,3)))+")");')
new=rep(new,'var mid=el("g",{},R);for(i=0;i<12;i++){','var mid=el("g",{},R);for(i=0;i<12;i++){')
# ---------------- final games ----------------
# производительность: зерно без mix-blend-mode (чёрный шум с альфой = то же умножение), травинки — 3 пути вместо сотен
lib=rep(lib,'var v=222+Math.random()*33;d.data[i]=v;d.data[i+1]=v;d.data[i+2]=v+4;d.data[i+3]=255}','var v=222+Math.random()*33;d.data[i]=0;d.data[i+1]=0;d.data[i+2]=0;d.data[i+3]=Math.round((255-v)*.35)}')
lib=rep(lib,"""function grain(parent,ids){var id="cg"+(clipN++),cp=el("clipPath",{id:id},DEFS);ids.forEach(function(x){el("use",{href:"#"+x},cp)});
  return el("rect",{x:BIG.x,y:BIG.y,width:BIG.w,height:BIG.h,fill:"url(#grainPat)",opacity:.35,"clip-path":"url(#"+id+")",style:"mix-blend-mode:multiply;pointer-events:none"},parent)}""",
"""/* зерно: копии самих фигур земли с узором-шумом — без clip-path и без mix-blend-mode */
var GRAINS=[],GEO=["d","cx","cy","rx","ry","x","y","width","height","transform","points"];
function grain(parent,ids){var g=el("g",{style:"pointer-events:none"},parent);ids.forEach(function(x){GRAINS.push({id:x,g:g,c:null})});return g}
function syncGrain(){GRAINS.forEach(function(o){var s=document.getElementById(o.id);if(!s)return;if(!o.c||o.c.tagName!==s.tagName){if(o.c)o.c.remove();o.c=el(s.tagName,{fill:"url(#grainPat)"},o.g)}
  GEO.forEach(function(a){var v=s.getAttribute(a);if(v!=null)o.c.setAttribute(a,v)})})}""")
lib=rep(lib,"""function blades(g,n,x0,x1,y0,y1,col,len,w){for(var i=0;i<n;i++){var x=rr(x0,x1),y=rr(y0,y1),h=len*(.6+.4*(y-y0)/(y1-y0+1));
  el("path",{d:"M"+f1(x)+" "+f1(y)+" q"+f1(rr(-3,3))+" "+f1(-h*.6)+" "+f1(rr(-5,5))+" "+f1(-h),stroke:col,"stroke-width":w,"stroke-linecap":"round",fill:"none",opacity:rr(.35,.7).toFixed(2)},g)}}""",
"""function blades(g,n,x0,x1,y0,y1,col,len,w){var D=["","",""];for(var i=0;i<n;i++){var x=rr(x0,x1),y=rr(y0,y1),h=len*(.6+.4*(y-y0)/(y1-y0+1)),o=rr(.35,.7);
  D[o<.47?0:o<.58?1:2]+="M"+f1(x)+" "+f1(y)+" q"+f1(rr(-3,3))+" "+f1(-h*.6)+" "+f1(rr(-5,5))+" "+f1(-h)}
  [.41,.52,.64].forEach(function(op,k){if(D[k])el("path",{d:D[k],stroke:col,"stroke-width":w,"stroke-linecap":"round",fill:"none",opacity:op},g)})}""")
defs=open('part_head.html').read();defs=defs[defs.index('<svg width="0"'):defs.index('</defs></svg>')+len('</defs></svg>')]
GAMES={
 1:('Повелительное наклонение · движения',[[('leti','makeFLY'),('prygai','makeJUMP'),('plyvi','makeSWIM'),('begi','makeBEGI')],
     [('polzi','makeCRAWL'),('skachi','makeGALLOP'),('idi','makeWALK'),('tancui','makeDANCE')],
     [('kachaisya','makeSWING'),('syad','makeSIT'),('lyag','makeLIE'),('vstan','makeSTAND')]]),
 2:('Повелительное наклонение · действия с предметом',[[('nesi','makeCARRY'),('lovi','makeCATCH'),('kopai','makeDIG'),('tyani','makePULL')],
     [('kati','makeROLL'),('moi','makeWASH'),('bros','makeTHROW'),('stuchi','makeKNOCK')],
     [('esh','makeEAT'),('pei','makeDRINK'),('dui','makeBLOW'),('polivai','makeWATER')]]),
}
eng0=open('part_final_engine.js').read()
shell=open('part_final_shell.html').read()
import os
os.makedirs('final',exist_ok=True)
for g,(title,seq) in GAMES.items():
    seqjs='['+','.join('['+','.join('{v:"%s",make:%s}'%(v,m) for v,m in st)+']' for st in seq)+']'
    eng=eng0.replace('__SEQ__',seqjs)
    js='/* Повелительное наклонение — игра %d. Сцены + движок. */\n(function(){\n"use strict";\nif(!document.getElementById("gdefs")){var d=document.createElement("div");d.innerHTML=%s;document.body.appendChild(d.firstChild)}\nvar NS="http://www.w3.org/2000/svg",DEFS=document.getElementById("gdefs");\n'%(g,json.dumps(defs))+lib+'\n'+sc+'\n'+new+'\n'+s3+'\n'+eng+'\n})();\n'
    open('final/imperative-%d.js'%g,'w').write(js)
    html=shell.replace('__TITLE__',title).replace('__JS__','https://cdn.jsdelivr.net/gh/pandora28546-lab/imperative@main/imperative-%d.js'%g)
    open('final/imperative-%d.html'%g,'w').write(html)
    # local test page: js inline, repo → local server
    t=html.replace('<script src="https://cdn.jsdelivr.net/gh/pandora28546-lab/imperative@main/imperative-%d.js"></script>'%g,'<script>\n'+js.replace('https://cdn.jsdelivr.net/gh/pandora28546-lab/imperative@main/','/media/')+'\n</script>')
    open('final/test-%d.html'%g,'w').write(t)
print('ok')
