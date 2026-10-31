
/* ==========================================================
   ДВИЖОК: два окна игры (звезда 1 и звезда 2), в каждом переключатель глаголов
   ========================================================== */
var WINS=[
  {title:"Звезда 1",items:[{k:"fly",name:"Лети",make:makeFLY},{k:"jump",name:"Прыгай",make:makeJUMP},{k:"swim",name:"Плыви",make:makeSWIM},{k:"begi",name:"Беги",make:makeBEGI}]},
  {title:"Звезда 2",items:[{k:"crawl",name:"Ползи",make:makeCRAWL},{k:"gallop",name:"Скачи",make:makeGALLOP},{k:"walk",name:"Иди",make:makeWALK},{k:"dance",name:"Танцуй",make:makeDANCE}]},
  {title:"Звезда 3",items:[{k:"swing",name:"Качайся",make:makeSWING},{k:"sit",name:"Сядь",make:makeSIT},{k:"lie",name:"Ляг",make:makeLIE},{k:"stand",name:"Встань",make:makeSTAND}]}];
var SND=__SND__;
var audio={};Object.keys(SND).forEach(function(k){audio[k]={run:new Audio(SND[k].run),fin:new Audio(SND[k].fin)};audio[k].run.preload=audio[k].fin.preload="auto"});
function eachA(f){Object.keys(audio).forEach(function(k){f(audio[k].run);f(audio[k].fin)})}
var unlocked=false;
function unlock(){if(unlocked)return;unlocked=true;eachA(function(a){a.muted=true;var p=a.play();if(p&&p.then)p.then(function(){a.pause();a.currentTime=0;a.muted=false}).catch(function(){a.muted=false});else{a.pause();a.muted=false}})}
function play(a){try{a.pause();a.currentTime=0;a.muted=false;var p=a.play();if(p&&p.catch)p.catch(function(){})}catch(e){}}
function stopAll(){eachA(function(a){try{a.pause()}catch(e){}})}

var UI='<div class="sg-stars">'+[0,1,2].map(function(){return '<div class="sg-starback"><span class="sg-starsvg"></span></div>'}).join("")+'</div>'+
  '<button class="sg-cbtn sg-repeat" title="Повторить">🔊</button>'+
  '<button class="sg-cbtn sg-fs" title="Полный экран"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2B3A5C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="14,4 20,4 20,10"/><line x1="20" y1="4" x2="13.5" y2="10.5"/><polyline points="10,20 4,20 4,14"/><line x1="4" y1="20" x2="10.5" y2="13.5"/></svg></button>'+
  '<button class="sg-cbtn sg-music" title="Музыка">🎶</button>'+
  '<div class="sg-end-overlay"><div class="sg-end-box"><button class="sg-blob sg-blob-glass sg-blob-delay sg-endbtn" aria-label="Ещё раз"><span class="sg-blob-bg"></span><svg class="sg-blob-icon" viewBox="0 0 24 24" fill="none"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><polyline points="17.6 2.8 17.6 7 13.4 7"/></svg></button>'+
  '<button class="sg-blob sg-blob-glass sg-nextbtn" aria-label="Дальше"><span class="sg-blob-bg"></span><svg class="sg-blob-icon" viewBox="0 0 24 24" fill="none"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13,6 20,12 13,18"/></svg></button></div></div>'+
  '<div class="sg-start-overlay"><button class="sg-blob sg-blob-orange sg-start-btn" aria-label="Начать"><span class="sg-blob-bg"></span><svg class="sg-blob-icon sg-play" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button><div class="sg-start-cap">🔊 Включите звук на устройстве</div></div>';

var HINT_IDLE=4,VOICE_LEN=1.6,WAIT=1.0,wins=[],active=null,clock=0,last=performance.now()/1000;
function q(root,sel){return root.querySelector(sel)}
function toSvg(sc,ev){var r=sc.svg.getBoundingClientRect(),v=sc.vb;return{x:v[0]+(ev.clientX-r.left)/r.width*v[2],y:v[1]+(ev.clientY-r.top)/r.height*v[3]}}

WINS.forEach(function(W,wi){
  var sec=document.createElement("section");sec.className="win";
  sec.innerHTML='<div class="head"><p class="rowh">'+W.title+'</p><div class="chips" role="group" aria-label="Глагол">'+W.items.map(function(it,i){return '<button class="chip" data-i="'+i+'" aria-pressed="'+(i===0)+'">'+it.name+'</button>'}).join("")+'</div></div><div class="sg"></div>';
  $("board").appendChild(sec);
  var box=q(sec,".sg"),w={sec:sec,box:box,scenes:[],cur:0,phase:"intro",t0:0,ok:0,first:true};
  W.items.forEach(function(it,i){
    var svg=el("svg",{class:"scene",preserveAspectRatio:"xMidYMid slice"},box);
    var R=el("g",{},svg),S=it.make(R);svg.setAttribute("viewBox",S.vb);
    var hint=el("g",{opacity:0},svg),waves=[0,1,2].map(function(){return el("circle",{r:104,fill:"none",stroke:"#6B91D6","stroke-width":4,"vector-effect":"non-scaling-stroke",opacity:0},hint)});
    if(i)svg.style.display="none";
    w.scenes.push({svg:svg,S:S,hint:hint,waves:waves,vb:S.vb.split(" ").map(Number)});
  });
  box.insertAdjacentHTML("beforeend",UI);
  wins.push(w);
  var chips=[].slice.call(sec.querySelectorAll(".chip"));
  chips.forEach(function(c){c.addEventListener("click",function(){pick(w,+c.getAttribute("data-i"),active===w)})});
  w.setChips=function(){chips.forEach(function(c,i){c.setAttribute("aria-pressed",i===w.cur?"true":"false")})};
  q(box,".sg-start-btn").addEventListener("click",function(){unlock();start(w)});
  q(box,".sg-endbtn").addEventListener("click",function(){start(w)});
  q(box,".sg-nextbtn").addEventListener("click",function(){pick(w,(w.cur+1)%w.scenes.length,true)});
  q(box,".sg-repeat").addEventListener("click",function(){if(active===w&&(w.phase==="voice"||w.phase==="ready")){w.phase="voice";w.t0=clock;w.scenes[w.cur].hint.setAttribute("opacity",0)}});
  q(box,".sg-music").addEventListener("click",function(){this.classList.toggle("sg-off")});
  q(box,".sg-fs").addEventListener("click",function(){sec.classList.toggle("fs");document.body.classList.toggle("fs-open",!!document.querySelector(".win.fs"))});
  box.addEventListener("pointerdown",function(ev){
    if(active!==w||(w.phase!=="voice"&&w.phase!=="ready"))return;
    var sc=w.scenes[w.cur];if(ev.target.closest&&ev.target.closest("button"))return;
    var p=toSvg(sc,ev),c=sc.S.center();if(Math.hypot(p.x-c.x,p.y-c.y)>180*c.sc)return;
    w.phase="act";w.t0=clock;w.first=true;sc.hint.setAttribute("opacity",0);play(audio[sc.S.snd].run)});
});
wins.forEach(function(w){w.scenes.forEach(function(sc){sc.S.init();still(sc)})});
function still(sc){sc.S.reset();sc.S.ambient(0,0,"intro");sc.S.idle(0,0,false);sc.hint.setAttribute("opacity",0)}
function stop(w){stopAll();w.phase="intro";still(w.scenes[w.cur]);w.box.classList.remove("on","done");if(active===w)active=null}
function start(w){if(active&&active!==w)stop(active);stopAll();var sc=w.scenes[w.cur];active=w;sc.S.reset();sc.hint.setAttribute("opacity",0);w.phase="wait";w.t0=clock;w.first=true;w.box.classList.add("on");w.box.classList.remove("done")}
function pick(w,i,run){if(active===w)stopAll();still(w.scenes[w.cur]);w.scenes[w.cur].svg.style.display="none";w.cur=i;w.scenes[i].svg.style.display="";w.setChips();
  if(run){unlock();start(w)}else{w.phase="intro";still(w.scenes[i]);w.box.classList.remove("on","done");if(active===w)active=null}}
document.addEventListener("keydown",function(e){if(e.key==="Escape"){var f=document.querySelector(".win.fs");if(f){f.classList.remove("fs");document.body.classList.remove("fs-open")}}});

function frame(){
  var n=performance.now()/1000,dt=Math.min(.05,n-last);last=n;clock+=dt;var t=clock,w=active;
  if(w){var sc=w.scenes[w.cur],S=sc.S,e=t-w.t0;S.ambient(t,dt,w.phase);
    if(w.phase==="wait"||w.phase==="voice"||w.phase==="ready"){
      if(w.phase==="wait"&&e>WAIT){w.phase="voice";w.t0=t;e=0}
      if(w.phase==="voice"&&e>VOICE_LEN){w.phase="ready";w.t0=t;e=0}
      S.idle(t,dt,w.phase==="voice");
      if(w.phase==="ready"&&e>HINT_IDLE){var c=S.center(),hx=e-HINT_IDLE;sc.hint.setAttribute("opacity",1);
        sc.waves.forEach(function(wv,i){var qq=hx-i*1.2;if(qq<0){wv.setAttribute("opacity",0);return}var u=(qq%3.6)/3.6,k=1-Math.pow(1-u,2);
          tr(wv,"translate("+f1(c.x)+" "+f1(c.y)+") scale("+(.5+1.3*k).toFixed(3)+")");wv.setAttribute("opacity",(.8*(1-k)).toFixed(3))})}
    }else if(w.phase==="act"){var done=S.act(e,dt,w.first,t);w.first=false;if(done||e>=S.ACT){w.phase="fin";w.t0=t;play(audio[S.snd].fin)}}
    else if(w.phase==="fin"){S.fin(e,t,dt);if(e>2.2&&!w.box.classList.contains("done"))w.box.classList.add("done")}
  }
  requestAnimationFrame(frame);
}
window.__w=wins;
requestAnimationFrame(frame);
