import numpy as np, subprocess, os
# Игра 3: музыка сцен. Металлофон + маримба + шейкер, свист синички, натуральные шумы. Не выше C6.
exec(open('gen7.py').read().split("FIN=lambda")[0].replace("np.random.seed(51)","np.random.seed(83)"))
N.update({'B3':246.94,'F4':349.23,'B4':493.88,'F5':698.46})
def enc(name,total,it):
    save('snd/'+name+'.wav',mix(total,it))
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i','snd/'+name+'.wav','-af','loudnorm=I=-20:TP=-6.5:LRA=11','-ar','44100','-ac','1','-b:a','96k','snd/'+name+'.mp3'],check=True)
    os.remove('snd/'+name+'.wav')
FIN=lambda a,b:[(0.08*i,note_marimba(N[m],1.4,0.72)) for i,m in enumerate(a)]+[(0.34+0.09*i,note_metal(N[m],2.6,0.62)) for i,m in enumerate(b)]
def clap(amp=1.0):
    n=int(0.09*SR);t=np.arange(n)/SR;nz=np.random.randn(n);bp=nz-np.convolve(nz,np.ones(10)/10,'same');bp=np.convolve(bp,np.ones(3)/3,'same')
    return bp*np.exp(-t/0.018)*np.minimum(1,t/0.002)*amp
def scratch(dur=0.12,amp=1.0):
    n=int(dur*SR);t=np.arange(n)/SR;nz=np.random.randn(n);hp=nz-np.convolve(nz,np.ones(5)/5,'same')
    return hp*np.sin(np.pi*t/dur)*(0.6+0.4*np.sin(2*np.pi*60*t))*amp
def whistle(t0,dur,f0,f1,amp=0.6,trill=None):
    n=int((dur+0.05)*SR);t=np.arange(n)/SR;u=np.clip(t/dur,0,1)
    f=f0*(f1/f0)**(u**0.7)
    if trill: f=np.where(np.sin(2*np.pi*trill[2]*t)>0,N[trill[0]],N[trill[1]]);f=np.convolve(np.pad(f,(100,99),'edge'),np.ones(200)/200,'valid')
    f=f*(1+0.012*np.sin(2*np.pi*6*t))
    ph=2*np.pi*np.cumsum(f)/SR;e=np.minimum(1,t/0.02)*np.clip((dur+0.05-t)/0.05,0,1)
    nz=np.random.randn(n);br=(nz-np.convolve(nz,np.ones(4)/4,'same'))*0.03
    return (t0,(np.sin(ph)+0.08*np.sin(2*ph)+br)*e*amp)

# ХЛОПАЙ 3.0: хлопки в 0.25 + 0.5k
it=[]
for k,m in enumerate(['C4','E4','G4','E4','C5','G4']):
    t=0.25+0.5*k;it+=[(t,clap(1.1)),(t,note_marimba(N[m],0.9,0.55)),(t+0.25,shaker(0.35))]
it+=[(0,note_metal(N['C5'],2.4,0.45)),(1.5,note_metal(N['E5'],2.4,0.45)),(2.75,note_metal(N['G5'],2.4,0.55))]
enc('run_clap',4.8,it);enc('fin_clap',3.4,FIN(['C4','E4','G4'],['C5','E5','G5']))

# ПОЙ 3.4: свист синички (тайминг = SONG в part_g3a.js)
S=[(0,.3,'G5','C6'),(.4,.12,'E5','E5'),(.56,.12,'E5','E5'),(.72,.3,'C6','G5'),(1.2,.3,'G5','C6'),(1.6,.12,'E5','E5'),(1.76,.12,'E5','E5'),(1.92,.12,'G5','G5')]
it=[whistle(a,d,N[x],N[y]) for a,d,x,y in S]+[whistle(2.2,.5,N['C6'],N['C6'],trill=('C6','A5',12)),whistle(2.85,.45,N['G5'],N['C5'])]
it+=[(t,note_marimba(N[m],1.2,0.4)) for t,m in [(0,'C4'),(1.2,'G3'),(2.2,'A3'),(2.85,'C4')]]+[(t,shaker(0.2)) for t in np.arange(0,3.2,0.4)]
enc('run_sing',5.0,it);enc('fin_sing',3.4,FIN(['C4','E4','G4'],['E5','G5'])+[whistle(1.2,.25,N['G5'],N['C6'],0.4)])

# РИСУЙ 4.0: кисточка по кругу 0.3–1.8, закрашивает 1.8–2.2, 8 лучей по 0.2 с 2.2, личико 3.4
it=[(0,note_marimba(N['G3'],0.9,0.5)),(0.3,swish(1.5,0.22))]+[(0.3+0.375*i,note_marimba(N[m],0.9,0.5)) for i,m in enumerate(['C4','E4','G4','C5'])]
it+=[(1.8+0.08*i,shaker(0.35)) for i in range(5)]+[(1.8,note_metal(N['C5'],2.2,0.5))]
it+=[(2.2+0.2*i,note_metal(N[m],1.6,0.42)) for i,m in enumerate(['C5','D5','E5','G5','A5','G5','E5','C6'])]+[(2.2+0.2*i,swish(0.15,0.2)) for i in range(8)]
it+=[(3.45,note_marimba(N['E4'],1.0,0.5)),(3.6,note_marimba(N['G4'],1.0,0.5))]
enc('run_draw',5.8,it);enc('fin_draw',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))

# СПИ 3.4: зевок 0–1.0, колыбельная вниз, дыхание
it=[(0.15,whoosh(0.9,0.25))]+[(0.6*i,note_metal(N[m],2.6,0.5)) for i,m in enumerate(['E5','D5','C5','G4','E4','C4'])]+[(0.6*i,note_marimba(N[m],1.4,0.35)) for i,m in enumerate(['C4','G3','A3','E4','C4','G3'])]
it+=[(t,shaker(0.12)) for t in [2.3,2.42,3.1,3.22]]
enc('run_sleep',5.2,it)
enc('fin_sleep',3.6,[(0.12*i,note_marimba(N[m],1.6,0.5)) for i,m in enumerate(['G3','C4','E4'])]+[(0.5+0.18*i,note_metal(N[m],2.8,0.42)) for i,m in enumerate(['G4','C5','E5'])])

# ЗАЛЕЗАЙ 4.0: прыжок 0–0.45, 7 шагов вверх до 3.0, прыжок на ветку 3.0–3.6
it=[(0,swish(0.35,0.35)),(0,note_marimba(N['G3'],0.9,0.6)),(0.4,note_marimba(N['C4'],0.9,0.6))]
for k,m in enumerate(['C4','D4','E4','G4','A4','C5','D5']):
    t=0.45+k*2.55/7;it+=[(t,scratch(0.12,0.45)),(t,note_marimba(N[m],0.8,0.55)),(t+0.18,shaker(0.25))]
it+=[(3.0,swish(0.4,0.35)),(3.0,note_marimba(N['E5'],0.8,0.5)),(3.6,woodblock(700,0.5)),(3.6,note_metal(N['G5'],2.4,0.6))]
enc('run_climb',5.6,it);enc('fin_climb',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))

# СЛЕЗАЙ 4.4: 6 шагов вниз до 3.4, на земле 3.4–4.0
it=[]
for k,m in enumerate(['C5','A4','G4','E4','D4','C4']):
    t=k*3.4/6;it+=[(t+0.2,scratch(0.18,0.4)),(t,note_marimba(N[m],0.9,0.55)),(t+0.3,shaker(0.22))]
it+=[(3.4,thud(0.6)),(3.4,note_metal(N['C5'],2.4,0.55)),(3.7,shaker(0.3)),(3.9,shaker(0.3)),(3.9,note_marimba(N['E4'],0.9,0.45))]
enc('run_down',6.0,it);enc('fin_down',3.4,FIN(['C4','E4','G4'],['C5','E5']))

# ПРЯЧЬСЯ 2.4: вздрогнула 0, нырок в панцирь 0.1–0.45, «тук» 0.5, покачивания
it=[(0,note_marimba(N['G4'],0.5,0.5))]+[(0.1+0.09*i,note_marimba(N[m],0.6,0.55)) for i,m in enumerate(['G4','E4','C4','G3'])]+[(0.1,swish(0.35,0.3))]
it+=[(0.5,woodblock(380,0.8)),(0.5,thud(0.5)),(0.55,note_metal(N['C5'],2.4,0.5))]+[(0.6+0.22*i,woodblock(420,0.3*(0.7**i))) for i in range(5)]
enc('run_hide',4.2,it);enc('fin_hide',3.4,[(0.4,woodblock(900,0.35)),(0.5,woodblock(1100,0.35))]+FIN(['C4','E4','G4'],['E5','G5']))

# ВЫХОДИ 3.6: принюхивается 0–0.6, выглядывает 0.6–0.9, шагает 0.9–3.2
it=[(0.12*i,woodblock(1200+80*(i%2),0.18)) for i in range(5)]+[(0.62,note_metal(N['E5'],2.2,0.5))]
st=np.arange(0.9,3.2,0.196);it+=[(t,shaker(0.3)) for t in st]+[(0.9+0.392*i,note_marimba(N[m],0.8,0.5)) for i,m in enumerate(['C4','E4','G4','A4','G4','C5'])]
it+=[(3.2,note_metal(N['G5'],2.4,0.55))]
enc('run_out',5.4,it);enc('fin_out',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))

# ОТКРОЙ 2.4: вдох 0, рот открывается 0.25–1.3, держит
it=[(0,shaker(0.3)),(0.1,shaker(0.3))]+[(0.25+0.18*i,note_marimba(N[m],0.9,0.55)) for i,m in enumerate(['C4','D4','E4','G4','A4','C5'])]
it+=[(0.25,note_metal(N['C5'],2.6,0.35)),(1.3,note_metal(N['G5'],2.6,0.6))]+[(1.5+0.25*i,bubble(320+40*i,0.4)) for i in range(4)]
enc('run_open',4.4,it);enc('fin_open',3.4,FIN(['C4','E4','G4'],['C5','G5']))

# ЗАКРОЙ 1.8: приоткрыл шире 0–0.2, «клац» 0.34, брызги
it=[(0,note_marimba(N['G3'],0.6,0.5)),(0.1,note_marimba(N['B3'],0.6,0.45)),(0.34,woodblock(560,1.2)),(0.34,woodblock(820,0.7)),(0.34,thud(0.7)),(0.36,water(0.35,0.4)),(0.4,note_metal(N['C5'],2.4,0.55))]
it+=[(0.8,note_marimba(N['E4'],0.9,0.5)),(1.05,note_marimba(N['G4'],0.9,0.5))]
enc('run_close',3.8,it);enc('fin_close',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))

# ВОЗЬМИ 3.8: прыжки 0 и 0.8, наклон 1.6, взял 2.1, в сумку 2.95, гладит сумку
it=[]
for k in range(2):
    t=0.8*k;it+=[(t,thud(0.45)),(t,swish(0.35,0.3)),(t,note_marimba(N[['C4','E4'][k]],0.8,0.55)),(t+0.4,note_marimba(N[['G4','C5'][k]],0.8,0.5)),(t+0.8,thud(0.55))]
it+=[(1.6,note_marimba(N['G3'],0.8,0.45)),(2.1,woodblock(900,0.5)),(2.1,note_metal(N['E5'],2.2,0.5)),(2.35,note_marimba(N['G4'],0.8,0.45)),(2.6,note_marimba(N['A4'],0.8,0.45))]
it+=[(2.95,plop(0.8)),(2.95,note_metal(N['C6'],2.4,0.5))]+[(3.05+0.2*i,shaker(0.3)) for i in range(4)]
enc('run_take',5.6,it);enc('fin_take',3.4,FIN(['C4','E4','G4'],['C5','E5','G5']))

# ДАЙ 3.2: протягивает 0–1.0, держит, забрали 1.45, лапки назад
it=[(0.33*i,note_metal(N[m],2.2,0.45)) for i,m in enumerate(['C5','E5','G5'])]+[(0.33*i,note_marimba(N[m],0.9,0.45)) for i,m in enumerate(['C4','E4','G4'])]+[(1.0+0.12*i,shaker(0.2)) for i in range(4)]
it+=[(1.45,swish(0.45,0.55)),(1.6,note_metal(N['C6'],2.6,0.6)),(1.6,note_marimba(N['C5'],1.0,0.5))]+[(2.0+0.2*i,note_marimba(N[m],0.9,0.5)) for i,m in enumerate(['E4','G4','C5'])]
enc('run_give',5.2,it);enc('fin_give',3.4,FIN(['C4','E4','G4','C5'],['E5','G5']))
