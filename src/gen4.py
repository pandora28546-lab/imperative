import numpy as np
exec(open('gen3.py').read().split("np.random.seed(11)")[0])
np.random.seed(21)
def enc(): pass
# ПЛЫВИ v2: 6 с, 12 гребков
SW=[0.5*k for k in range(12)]
low=['C4','G3','A3','E4','C4','G3','A3','C4','E4','G3','A3','C4']
it=[(t,note_marimba(N[m],1.2,0.7)) for t,m in zip(SW,low)]+[(t+0.05,swish(0.4,0.22)) for t in SW]
it+=[(t,note_metal(N[m],3.0,0.75)) for t,m in [(0,'E5'),(1.5,'D5'),(3.0,'C5'),(4.5,'G4')]]
it+=[(t,bubble(f,0.35)) for t,f in [(0.3,360),(0.42,440),(1.3,400),(2.2,380),(2.33,470),(3.2,420),(4.1,390),(4.24,460),(5.2,410)]]
save('snd/run_swim.wav',mix(8.2,it))
# ПОЛЗИ: 4.4 с, медленно
CR=[0.55*k for k in range(8)]
it=[(t,note_marimba(N[m],1.4,0.6)) for t,m in zip(CR,['C4','E4','D4','G3','C4','E4','G4','E4'])]
it+=[(t,swish(0.9,0.18)) for t in [0,1.1,2.2,3.3]]
it+=[(t,note_metal(N[m],3.2,0.7)) for t,m in [(0,'G4'),(1.1,'A4'),(2.2,'C5'),(3.3,'E5')]]
save('snd/run_crawl.wav',mix(7.0,it))
save('snd/fin_crawl.wav',mix(3.6,[(0.1*i,note_marimba(N[m],1.4,0.7)) for i,m in enumerate(['C4','E4','G4'])]+[(0.4+0.12*i,note_metal(N[m],2.8,0.65)) for i,m in enumerate(['C5','E5','G5'])]))
# ИДИ: 10 шагов по 0.55 с — спокойный шаг
WK=[0.55*k for k in range(10)]
it=[(t,note_marimba(N['C4' if k%2==0 else 'G4'],1.0,0.75)) for k,t in enumerate(WK)]+[(t,shaker(0.4)) for t in WK]
it+=[(WK[k],note_metal(N[m],2.4,0.7)) for k,m in [(0,'C5'),(2,'D5'),(4,'E5'),(6,'G5'),(8,'E5')]]
save('snd/run_walk.wav',mix(7.8,it))
# СКАЧИ: 9 шагов галопа по 0.42 с; шаг 4 — прыжок через забор
GS=[0.42*k for k in range(9)]
it=[]
mel=['C5','E5','G5','E5','A5','G5','E5','G5','C6']
for k,t in enumerate(GS):
    if k==4:
        it+=[(t+0.04*i,note_metal(N[m],1.8,0.6)) for i,m in enumerate(['C5','E5','G5','A5'])]
        continue
    it+=[(t,woodblock(700,0.75)),(t+0.08,woodblock(620,0.6)),(t+0.16,woodblock(760,0.7))]
    it+=[(t,note_marimba(N['C4' if k%2==0 else 'G3'],0.9,0.6))]
    if k%2==0 or k==8: it+=[(t,note_metal(N[mel[k]],2.0,0.6))]
save('snd/run_gallop.wav',mix(6.0,it))
save('snd/fin_gallop.wav',mix(3.4,[(0.08*i,note_marimba(N[m],1.4,0.75)) for i,m in enumerate(['C4','E4','G4','C5'])]+[(0.35+0.09*i,note_metal(N[m],2.6,0.65)) for i,m in enumerate(['C5','E5','G5'])]))
# СТУЧИ: 3 серии по 4 удара, отвечает маримба
it=[]
for b,t0 in enumerate([0.0,1.0,2.0]):
    it+=[(t0+0.09*i,woodblock(470+10*i,0.9)) for i in range(4)]
    it+=[(t0+0.48,note_marimba(N[['C4','E4','G4'][b]],1.2,0.7))]
save('snd/run_knock.wav',mix(4.6,it))
save('snd/fin_knock.wav',mix(3.4,[(0.08*i,note_metal(N[m],2.6,0.7)) for i,m in enumerate(['C5','E5','G5'])]+[(0.0,note_marimba(N['C4'],1.4,0.6))]))
