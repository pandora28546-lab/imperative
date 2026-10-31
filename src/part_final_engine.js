
/* ==========================================================
   ИГРА: 3 звезды × 4 сцены. Логика интерфейса — как в «Виммельбухе».
   ========================================================== */
var REPO="https://cdn.jsdelivr.net/gh/pandora28546-lab/imperative@main/";
var G2="https://cdn.jsdelivr.net/gh/pandora28546-lab/sofia-game2@main/";
var DBASE="https://cdn.jsdelivr.net/gh/pandora28546-lab/Otvlekashki@main/";
var STAR_URL=G2+"Starsystems.png";
var NEXT_GAME_URL=(window.SG_CFG&&window.SG_CFG.next)||"https://sofiatmn.ru/";
var POVTORI="Povtori.m4a";
var SEQ=__SEQ__;               /* [[{v:"nesi",make:makeCARRY},…4],…3] */
var HINT_FIRST=0,HINT_NEXT=3,PRE_VOICE=.6,BTN_AFTER=2.2;

function $id(id){return document.getElementById(id)}
var game=$id("sofia-game"),stage=$id("sg-stage");

/* ─── сцены ─── */
var scenes=[],ITEMS=[];SEQ.forEach(function(st){st.forEach(function(it){ITEMS.push(it)})});
function buildScene(k){if(scenes[k])return scenes[k];var it=ITEMS[k];
  var svg=el("svg",{class:"sg-svg",preserveAspectRatio:"xMidYMid slice"},stage);
  var R=el("g",{},svg),S=it.make(R);svg.setAttribute("viewBox",S.vb);
  var vb=S.vb.split(" ").map(Number);
  var hint=el("g",{opacity:0},svg),waves=[0,1,2].map(function(){return el("circle",{r:f1(vb[2]*.065),fill:"none",stroke:"#6B91D6","stroke-width":4,"vector-effect":"non-scaling-stroke",opacity:0},hint)});
  svg.style.display="none";
  var sc={svg:svg,S:S,hint:hint,waves:waves,vb:vb,v:it.v};scenes[k]=sc;S.init();syncGrain();still(sc);return sc}
buildScene(0);
function cam(sc){if(sc.S.cam){var v=sc.S.cam();sc.vb=v;sc.svg.setAttribute("viewBox",v.map(f1).join(" "))}}
function still(sc){sc.S.reset();sc.S.ambient(0,0,"intro");sc.S.idle(0,0,false);cam(sc);sc.hint.setAttribute("opacity",0)}

/* ─── аудио (HTMLAudio + blob-URL, как в «Виммельбухе») ─── */
var objUrls={};function srcFor(u){return objUrls[u]||u}
function vURL(v){return REPO+v+".m4a"}function goURL(v){return REPO+v+"_go.mp3"}function finURL(v){return REPO+v+"_fin.mp3"}
function audioUrls(){var s=[REPO+POVTORI];ITEMS.forEach(function(it){s.push(vURL(it.v),goURL(it.v),finURL(it.v))});["stage complete.wav","fanfare.wav"].forEach(function(f){s.push(DBASE+encodeURIComponent(f))});return s}
var SILENT_WAV="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";
var speechEl=new Audio(),runEl=new Audio(),finEl=new Audio(),fxEl=new Audio();[speechEl,runEl,finEl,fxEl].forEach(function(a){a.preload="auto"});
var musicOn=true;
function unlockAll(){[speechEl,runEl,finEl,fxEl].forEach(function(a){try{a.src=SILENT_WAV;var p=a.play();if(p&&p.then)p.then(function(){try{a.pause();a.currentTime=0}catch(e){}}).catch(function(){})}catch(e){}})}
var speechTimer=null,speechSeq=0;
function stopSpeech(){speechSeq++;if(speechTimer){clearTimeout(speechTimer);speechTimer=null}speechEl.onended=null;speechEl.onerror=null;try{speechEl.pause()}catch(e){}}
function playSpeech(url,onDone){stopSpeech();var my=speechSeq;
  function finish(){if(my!==speechSeq)return;speechSeq++;if(speechTimer){clearTimeout(speechTimer);speechTimer=null}if(onDone)onDone()}
  speechEl.onended=function(){speechEl.onended=null;speechEl.onerror=null;finish()};speechEl.onerror=function(){speechEl.onended=null;speechEl.onerror=null;finish()};
  speechTimer=setTimeout(finish,8000);try{speechEl.src=srcFor(url);speechEl.currentTime=0}catch(e){}var p=speechEl.play();if(p&&p.catch)p.catch(function(){finish()})}
/* музыку сцены грузим в плеер заранее (cueMusic при старте сцены): на iPad смена src блокирует страницу на 0,2–0,8 с,
   и если делать это в момент тапа, анимация стартует с рывка */
function cueMusic(a,url){var u=srcFor(url);if(a.__u===u)return;try{a.pause();a.src=u;a.__u=u;a.load()}catch(e){}}
function playMusic(a,url){cueMusic(a,url);try{a.currentTime=0;a.muted=!musicOn}catch(e){}var p=a.play();if(p&&p.catch)p.catch(function(){})}
function stopMusic(){[runEl,finEl].forEach(function(a){try{a.pause()}catch(e){}})}
function playFx(f){try{fxEl.src=srcFor(DBASE+encodeURIComponent(f));fxEl.currentTime=0}catch(e){}var p=fxEl.play();if(p&&p.catch)p.catch(function(){})}

/* ─── предзагрузка → полоска собачки ─── */
var loaded=0,total=0,loadRevealed=false;
function tick(){loaded++;var f=loaded/total;if(window.__uzorProgress)window.__uzorProgress(f);if(loaded>=total){if(window.__uzorFinish)window.__uzorFinish(revealStart);else setTimeout(revealStart,300)}}
function revealStart(){if(loadRevealed)return;loadRevealed=true;onLoaded()}
(function(){var urls=audioUrls(),imgs=[STAR_URL];total=urls.length+imgs.length+ITEMS.length-1;
  (function nextBuild(k){if(k>=ITEMS.length)return;setTimeout(function(){buildScene(k);tick();nextBuild(k+1)},60)})(1);
  urls.forEach(function(u){fetch(u).then(function(r){if(!r.ok)throw 0;return r.blob()}).then(function(b){try{objUrls[u]=URL.createObjectURL(b)}catch(e){}tick()}).catch(function(){tick()})});
  imgs.forEach(function(u){var im=new Image();im.onload=im.onerror=tick;im.src=u})})();
document.querySelectorAll("#sofia-game .sg-starsym").forEach(function(im){im.src=STAR_URL});
game.style.setProperty("--sg-star-mask",'url("'+STAR_URL+'")');$id("sg-bigstar-img").src=STAR_URL;
[].slice.call(document.querySelectorAll("#sofia-game .sg-starsym, #sg-bigstar-img")).forEach(function(im){try{if(im.decode)im.decode().catch(function(){})}catch(e){}});

/* ─── состояние ─── */
var idx=0,phase="intro",t0=0,hintAt=1e9,first=true,clock=0,last=performance.now()/1000,started=false,loadedReady=false,stageBusy=false;
var starBacks=[].slice.call(document.querySelectorAll("#sofia-game .sg-starback"));
function cur(){return scenes[idx]}
function show(i){buildScene(i);var warm=warmIdx===i;scenes.forEach(function(sc,k){if(sc){sc.svg.style.display=k===i?"":"none";sc.svg.style.zIndex=k===i?1:0}});idx=i;warmIdx=-1;if(!warm)still(cur())}
/* следующая сцена заранее отрисовывается под текущей (свой слой), чтобы «Дальше» не дёргало кадр */
var warmIdx=-1;
function prewarm(){var k=idx+1;if(k>=ITEMS.length||warmIdx===k)return;var sc=buildScene(k);still(sc);sc.svg.style.zIndex=0;sc.svg.style.display="";warmIdx=k}
function hideHint(){cur().hint.setAttribute("opacity",0);hintAt=1e9}
function showBtns(on){game.classList.toggle("sg-btns",on);if(on)mark("кнопки")}

/* сцена: (первая) «Повтори» → команда → подсказка; остальные: команда → подсказка через 3 с */
function startScene(isFirst){mark("старт сцены");var sc=cur();stopSpeech();stopMusic();cueMusic(runEl,goURL(sc.v));cueMusic(finEl,finURL(sc.v));showBtns(false);sc.S.reset();cam(sc);hideHint();phase="voice";t0=clock;
  var my=++sceneToken;
    setTimeout(function(){if(my!==sceneToken||phase!=="voice")return;
    var cmd=function(){if(my!==sceneToken||phase!=="voice")return;playSpeech(vURL(sc.v),function(){if(my!==sceneToken||phase!=="voice")return;phase="ready";hintAt=clock+(isFirst?HINT_FIRST:HINT_NEXT)})};
    if(isFirst)playSpeech(REPO+POVTORI,cmd);else cmd()},(isFirst?.3:PRE_VOICE)*1000)}
var sceneToken=0;

/* тап по животному — с начала команды */
function toSvg(sc,ev){var r=sc.svg.getBoundingClientRect(),v=sc.vb,k=Math.max(r.width/v[2],r.height/v[3]),ox=(r.width-v[2]*k)/2,oy=(r.height-v[3]*k)/2;
  return{x:v[0]+(ev.clientX-r.left-ox)/k,y:v[1]+(ev.clientY-r.top-oy)/k}}
stage.addEventListener("pointerdown",function(ev){
  if(!started||(phase!=="voice"&&phase!=="ready"))return;
  var sc=cur(),p=toSvg(sc,ev),c=sc.S.center(),rad=clamp(210*c.sc,sc.vb[2]*.14,sc.vb[2]*.3);
  if(Math.hypot(p.x-c.x,p.y-c.y)>rad)return;
  mark("тап");sceneToken++;stopSpeech();hideHint();phase="act";t0=clock;first=true;playMusic(runEl,goURL(sc.v))});

/* ─── звёзды / финал ─── */
function flyBigStar(slot,cb){var back=starBacks[slot],gr=game.getBoundingClientRect(),br=back.getBoundingClientRect();
  var dx=(br.left+br.width/2)-(gr.left+gr.width/2),dy=(br.top+br.height/2)-(gr.top+gr.height/2),big=$id("sg-bigstar");
  big.style.transition="none";big.style.display="block";big.style.transform="translate(-50%,-50%) scale(0)";
  requestAnimationFrame(function(){requestAnimationFrame(function(){big.style.transition="transform .45s cubic-bezier(.34,1.56,.64,1)";big.style.transform="translate(-50%,-50%) scale(1)";
    setTimeout(function(){var s=Math.max(.05,br.width/(big.offsetWidth||160));big.style.transition="transform .7s ease";
      big.style.transform="translate(calc(-50% + "+dx+"px), calc(-50% + "+dy+"px)) scale("+s+")";
      setTimeout(function(){back.classList.add("sg-earned");big.style.display="none";if(cb)cb()},720)},600)})})}
function pulseAllStars(){starBacks.forEach(function(b,i){setTimeout(function(){b.classList.remove("sg-pulse");void b.offsetWidth;b.classList.add("sg-pulse")},i*180)})}
function sceneDone(){var q=idx%4,s=Math.floor(idx/4);
  if(q<3){showBtns(true);return}
  if(starBacks[s].classList.contains("sg-earned")){if(idx===ITEMS.length-1)finishGame();else showBtns(true);return}
  stageBusy=true;mark("звезда+салют");playFx("stage complete.wav");launchFireworks();
  flyBigStar(s,function(){stageBusy=false;if(idx===ITEMS.length-1)setTimeout(finishGame,400);else showBtns(true)})}
function finishGame(){phase="end";mark("финал");playFx("fanfare.wav");launchFireworks();pulseAllStars();setTimeout(function(){$id("sg-end-overlay").classList.add("sg-show")},1500)}
function restart(){$id("sg-end-overlay").classList.remove("sg-show");stopFireworks();starBacks.forEach(function(b){b.classList.remove("sg-earned","sg-pulse")});show(0);startScene(true)}

/* ─── кнопки ─── */
$id("sg-again").addEventListener("click",function(){if(stageBusy)return;startScene(false)});
/* «Дальше»: текущая сцена замирает на последнем кадре, а следующая в это время отрисовывается под ней (prewarm).
   Тяжёлая первая отрисовка приходится на неподвижную картинку, поэтому рывка не видно. Через 2 кадра слои меняются местами. */
var frozen=false;
$id("sg-go").addEventListener("click",function(){if(stageBusy||frozen)return;if(idx>=ITEMS.length-1)return;showBtns(false);var n=idx+1;
  mark("дальше");frozen=true;prewarm();
  requestAnimationFrame(function(){requestAnimationFrame(function(){show(n);frozen=false;startScene(false)})})});
$id("sg-repeat").addEventListener("click",function(){if(!started||(phase!=="voice"&&phase!=="ready"))return;var sc=cur(),my=++sceneToken;hideHint();phase="voice";
  playSpeech(vURL(sc.v),function(){if(my!==sceneToken||phase!=="voice")return;phase="ready";hintAt=clock+HINT_NEXT})});
$id("sg-music").addEventListener("click",function(){musicOn=!musicOn;this.classList.toggle("sg-off",!musicOn);[runEl,finEl].forEach(function(a){a.muted=!musicOn})});
$id("sg-endbtn").addEventListener("click",restart);
$id("sg-nextbtn").addEventListener("click",function(){try{window.top.location.href=NEXT_GAME_URL}catch(e){window.location.href=NEXT_GAME_URL}});
$id("sg-start-btn").addEventListener("click",function(){$id("sg-start-overlay").style.display="none";unlockAll();started=true;
  starBacks.forEach(function(b){b.classList.remove("sg-earned")});show(0);startScene(true);syncMobileUI()});
function pauseBg(){try{speechEl.pause()}catch(e){}stopMusic()}
document.addEventListener("visibilitychange",function(){if(document.hidden)pauseBg()});window.addEventListener("pagehide",pauseBg);

/* ─── кадр ─── */
function frame(){var n=performance.now()/1000,raw=n-last,full=Math.min(.5,raw);last=n;if(FPS)dgFrame(n,raw);
  if(!started){requestAnimationFrame(frame);return}
  if(frozen){requestAnimationFrame(frame);return}   /* пока под сценой рисуется следующая — кадр стоит */   /* до старта сцена стоит: не мешаем лоадеру и размытию стартового экрана */
  var steps=Math.max(1,Math.ceil(full/.034)),h=full/steps;
  for(var st=0;st<steps;st++)step(h);cam(cur());requestAnimationFrame(frame)}
function step(dt){clock+=dt;var t=clock,sc=cur(),S=sc.S,e=t-t0;
  S.ambient(t,dt,phase);
  if(phase==="intro"||phase==="voice"||phase==="ready"){S.idle(t,dt,phase==="voice");
    if(phase==="ready"&&t>=hintAt){var c=S.center(),hx=t-hintAt;sc.hint.setAttribute("opacity",1);
      sc.waves.forEach(function(wv,i){var qq=hx-i*1.2;if(qq<0){wv.setAttribute("opacity",0);return}var u=(qq%3.6)/3.6,k=1-Math.pow(1-u,2);
        tr(wv,"translate("+f1(c.x)+" "+f1(c.y)+") scale("+(.5+1.3*k).toFixed(3)+")");wv.setAttribute("opacity",(.8*(1-k)).toFixed(3))})}}
  else if(phase==="act"){var done=S.act(e,dt,first,t);first=false;if(done||e>=S.ACT){phase="fin";t0=t;mark("финал сцены");playMusic(finEl,finURL(sc.v))}}
  else if(phase==="fin"||phase==="post"||phase==="end"){S.fin(e,t,dt);if(phase==="fin"&&e>BTN_AFTER){phase="post";sceneDone()}}}
/* ─── диагностика: бар снизу (добавить ?fps к адресу страницы) ───
   1-я строка: кадры в секунду, худший кадр за секунду, плотность пикселей, размер поля, полный экран.
   ниже: последние рывки (кадр дольше 50 мс) — сцена, фаза, длительность и что случилось перед ним. */
var FPS=/[?&]fps/.test(location.search)||/[?&]fps/.test((function(){try{return top.location.search}catch(e){return ""}})());
var dgBar=null,dgN=0,dgT=0,dgMax=0,dgEv="—",dgEvT=0,dgLog=[];
function mark(name){if(FPS){dgEv=name;dgEvT=performance.now()/1000}}
function dgFrame(n,raw){if(!dgBar){dgBar=document.createElement("div");
    dgBar.style.cssText="position:absolute;left:0;right:0;bottom:0;z-index:300;background:rgba(20,28,48,.82);color:#fff;font:600 12px/1.35 monospace;padding:5px 10px 6px;pointer-events:none;white-space:pre";
    game.appendChild(dgBar);dgT=n}
  dgN++;if(raw>dgMax)dgMax=raw;
  if(raw>.05&&started){var ago=n-raw-dgEvT;
    dgLog.unshift("рывок "+Math.round(raw*1000)+" мс · сцена "+(idx+1)+" "+ITEMS[idx].v+" · "+phase+" · "+(ago<3&&ago>-.1?ago.toFixed(2)+" с после «"+dgEv+"»":"без события"));
    if(dgLog.length>4)dgLog.pop()}
  if(n-dgT>=1){var r=game.getBoundingClientRect();
    dgBar.textContent=Math.round(dgN/(n-dgT))+" fps · худший "+Math.round(dgMax*1000)+" мс · DPR "+(window.devicePixelRatio||1)+" · поле "+Math.round(r.width)+"×"+Math.round(r.height)+" · полн.экран "+(isFS()?"да":"нет")+
      (dgLog.length?"\n"+dgLog.join("\n"):"\nрывков пока нет");
    dgN=0;dgT=n;dgMax=0}}
show(0);requestAnimationFrame(frame);

/* ─── салют ─── */
var canvas=$id("sg-fireworks"),c2d=canvas.getContext("2d"),fwP=[],fwRun=false,fwRaf=null;
function launchFireworks(){canvas.width=game.offsetWidth;canvas.height=game.offsetHeight;if(fwRaf)cancelAnimationFrame(fwRaf);fwP=[];fwRun=true;spawnBurst();spawnBurst();fwLoop();setTimeout(function(){fwRun=false},1500)}
function stopFireworks(){fwRun=false;cancelAnimationFrame(fwRaf);c2d.clearRect(0,0,canvas.width,canvas.height)}
function spawnBurst(){var x=.2+Math.random()*.6,y=.1+Math.random()*.5,cols=["#6DCC0B","#F97A4F","#FED224","#E4615C","#6B91D6","#FC88A7"],col=cols[Math.floor(Math.random()*cols.length)];
  for(var i=0;i<60;i++){var a=Math.random()*Math.PI*2,s=2+Math.random()*5;fwP.push({x:canvas.width*x,y:canvas.height*y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,alpha:1,color:col,r:2+Math.random()*3})}}
function fwLoop(){c2d.clearRect(0,0,canvas.width,canvas.height);fwP.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.alpha-=.018;c2d.globalAlpha=Math.max(0,p.alpha);c2d.beginPath();c2d.arc(p.x,p.y,p.r,0,Math.PI*2);c2d.fillStyle=p.color;c2d.fill()});
  c2d.globalAlpha=1;fwP=fwP.filter(function(p){return p.alpha>0});if(fwRun&&fwP.length<100)spawnBurst();if(fwP.length>0||fwRun)fwRaf=requestAnimationFrame(fwLoop);else c2d.clearRect(0,0,canvas.width,canvas.height)}

/* ─── полноэкранный режим и поворот телефона (как в «Виммельбухе») ─── */
var fsWrap=$id("sg-fs-wrap"),rotEl=$id("sg-rotate"),canRealFS=!!(fsWrap.requestFullscreen||fsWrap.webkitRequestFullscreen),pseudoFS=false;
function isLandscape(){return window.matchMedia("(orientation: landscape)").matches||window.innerWidth>window.innerHeight}
function isPhone(){return Math.min(window.screen.width,window.screen.height)<480}
function inRealFS(){return !!(document.fullscreenElement||document.webkitFullscreenElement)}
function isFS(){return pseudoFS||inRealFS()}
var FS_E='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2B3A5C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="14,4 20,4 20,10"/><line x1="20" y1="4" x2="13.5" y2="10.5"/><polyline points="10,20 4,20 4,14"/><line x1="4" y1="20" x2="10.5" y2="13.5"/></svg>';
var FS_C='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2B3A5C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="20" y1="4" x2="14" y2="10"/><polyline points="14,4 14,10 20,10"/><line x1="4" y1="20" x2="10" y2="14"/><polyline points="10,20 10,14 4,14"/></svg>';
var fsIcon=null;function setFsIcon(){var w=isFS()?"c":"e";if(w===fsIcon)return;fsIcon=w;$id("sg-fs").innerHTML=w==="c"?FS_C:FS_E}
function refreshFsBtn(){$id("sg-fs").style.display=isPhone()?"none":"flex";setFsIcon()}
function lockLandscape(){try{if(screen.orientation&&screen.orientation.lock){var p=screen.orientation.lock("landscape");if(p&&p.catch)p.catch(function(){})}}catch(e){}}
function unlockOrientation(){try{if(screen.orientation&&screen.orientation.unlock)screen.orientation.unlock()}catch(e){}}
function pseudoOn(){if(!pseudoFS){pseudoFS=true;fsWrap.classList.add("sg-pseudo-fs");document.documentElement.style.overflow="hidden";document.body.style.overflow="hidden"}refreshFsBtn()}
function pseudoOff(){if(pseudoFS){pseudoFS=false;fsWrap.classList.remove("sg-pseudo-fs");document.documentElement.style.overflow="";document.body.style.overflow=""}refreshFsBtn()}
function syncMobileUI(){
  if(!isPhone()){game.classList.remove("sg-portrait");rotEl.classList.remove("sg-show");return}
  if(!loadedReady){game.classList.toggle("sg-portrait",!isLandscape());rotEl.classList.remove("sg-show");return}
  if(isLandscape()){game.classList.remove("sg-portrait");pseudoOn();rotEl.classList.remove("sg-show");if(!started)$id("sg-start-overlay").style.display="flex"}
  else{game.classList.add("sg-portrait");pseudoOff();if(!started)$id("sg-start-overlay").style.display="none";rotEl.classList.add("sg-show")}}
function onLoaded(){$id("sg-loading").style.display="none";loadedReady=true;if(isPhone())syncMobileUI();else $id("sg-start-overlay").style.display="flex"}
function enterFS(){if(canRealFS){var req=fsWrap.requestFullscreen||fsWrap.webkitRequestFullscreen;try{var p=req.call(fsWrap);if(p&&p.then)p.then(lockLandscape).catch(pseudoOn);else lockLandscape()}catch(e){pseudoOn()}}else pseudoOn();refreshFsBtn()}
function exitFS(){if(inRealFS()){var ex=document.exitFullscreen||document.webkitExitFullscreen;try{ex.call(document)}catch(e){}unlockOrientation()}pseudoOff();refreshFsBtn()}
$id("sg-fs").addEventListener("click",function(){if(isFS())exitFS();else enterFS()});
document.addEventListener("fullscreenchange",function(){mark("полн.экран");if(!inRealFS())unlockOrientation();syncMobileUI();refreshFsBtn()});
document.addEventListener("webkitfullscreenchange",function(){mark("полн.экран");if(!inRealFS())unlockOrientation();syncMobileUI();refreshFsBtn()});
window.addEventListener("orientationchange",function(){setTimeout(function(){syncMobileUI();refreshFsBtn()},250)});
var rzT=null;window.addEventListener("resize",function(){mark("resize");if(rzT)clearTimeout(rzT);rzT=setTimeout(function(){syncMobileUI();refreshFsBtn()},200)});
syncMobileUI();refreshFsBtn();
window.__sg={scenes:scenes,get idx(){return idx},get phase(){return phase},go:function(i){show(i);startScene(false)}};
